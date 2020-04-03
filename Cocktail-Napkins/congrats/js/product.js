(function () {
    if (window.zakekeLoading) {
        return;
    }
    window.zakekeLoading = true;

    var zakekeClientId = window.zakekeClientId || 'bo07cpzkan3r7ktlwk2w1t96p3d5zoa';
    var zakekeInstance = window.zakekeInstance || 'https://portal.zakeke.com';
    var zakekeApiInstance = window.zakekeApiInstance || 'https://api.zakeke.com';

    var addToCartForm = document.querySelector('form[action*="/cart.php"]');
    var productDataCache = {};
    var pendingProductDataRequests = [];
    var setupCompleted = false;
    
    function getCart(callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var response = JSON.parse(xmlHttp.responseText);
                callback(response[0]);
            }
        };
        xmlHttp.open('GET', '/api/storefront/cart?include=lineItems.digitalItems.options,lineItems.physicalItems.options');
        xmlHttp.send();
    }

    function isLargeVersion() {
        return window.matchMedia('(min-width: 768px)').matches;
    }

    function loadCss(zakekeInstance) {
        var link = document.createElement('LINK');
        link.href = zakekeInstance + '/Content/css/integration/bigcommerce/customizer.css';
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.media = 'screen,print';

        document.getElementsByTagName('head')[0].appendChild(link);
    }
    
    function buildContainer() {
        var background = document.createElement('DIV');
        background.id = 'zakeke-background';
        document.body.appendChild(background);

        var container = document.createElement('DIV');
        container.id = 'zakeke-container';

        var iframe = document.createElement('IFRAME');
        iframe.id = 'zakeke-frame';
        iframe.style.display = 'none';
        container.appendChild(iframe);

        var close = document.createElement('A');
        close.id = 'zakeke-container-close';
        close.addEventListener('click', function () {
            if (!confirm('All your unsaved changes will be lost. Proceed?')) {
                return;
            }

            window.location.reload();
            document.body.style.overflow = 'initial';
            background.style.display = 'none';
            container.style.display = 'none';
            iframe.style.display = 'none';
            iframe.src = 'about:blank';
        });
        container.appendChild(close);

        document.body.appendChild(container);
    }

    function customerJWT(callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    callback(xmlHttp.responseText);
                } else if (xmlHttp.status === 404) {
                    callback();
                } else {
                    alert('Unable to get customer JWT: ' + xmlHttp.responseText);
                }
            }
        };
        xmlHttp.open('GET', '/customer/current.jwt?app_client_id=' + zakekeClientId);
        xmlHttp.send();
    }

    function listenAddToCartCustomizerEvents(context, currencyRate) {
        window.addEventListener('message', function (event) {
            if (event.data.zakekeMessageType === 0) {
                addToCart(
                    assignZakekeAttributes(JSON.parse(event.data.colorId), getAddToCartFormData(context, addToCartForm)),
                    context.zakekeAttributeId,
                    event.data.designId
                );
            } else if (event.data.zakekeMessageType === 1) {
                getProductData(
                    context.productId,
                    assignZakekeAttributes(JSON.parse(event.data.design.color), getAddToCartFormData(context, addToCartForm)),
                    function (data) {
                        var activeDiscount = getActiveDiscount(data.discounts, context.qty);
                        if (activeDiscount) {
                            data.finalPrice -= calculateDiscount(data.finalPrice, activeDiscount, data.tax);
                        }

                        if (event.data.design.percentPrice) {
                            data.finalPrice += data.finalPrice * (event.data.design.percentPrice / 100);
                        }

                        if (event.data.design.price) {
                            data.finalPrice += (event.data.design.price / context.qty) * currencyRate * data.tax;
                        }

                        getIframe().contentWindow.postMessage({
                            data: data,
                            zakekeMessageType: 1
                        }, '*');
                    });
            }
        }, false);
    }

    function listenUpdateCartCustomizerEvents(context, currencyRate) {
        window.addEventListener('message', function (event) {
            if (event.data.zakekeMessageType === 0) {
                updateCartItem(
                    assignZakekeAttributes(JSON.parse(event.data.colorId), getUpdateCartFormData(context)),
                    context.zakekeAttributeId,
                    context.zakekeAttributeValueId,
                    event.data.designId
                );
            } else if (event.data.zakekeMessageType === 1) {
                getProductData(
                    context.productId,
                    assignZakekeAttributes(JSON.parse(event.data.design.color), getUpdateCartFormData(context)),
                    function (data) {
                        var activeDiscount = getActiveDiscount(data.discounts, context.qty);
                        if (activeDiscount) {
                            data.finalPrice -= calculateDiscount(data.finalPrice, activeDiscount, data.tax);
                        }

                        if (event.data.design.percentPrice) {
                            data.finalPrice += data.finalPrice * (event.data.design.percentPrice / 100);
                        }

                        if (event.data.design.price) {
                            data.finalPrice += (event.data.design.price / context.qty) * currencyRate * data.tax;
                        }

                        getIframe().contentWindow.postMessage({
                            data: data,
                            zakekeMessageType: 1
                        }, '*');
                    });
            }
        }, false);
    }

    function getCustomizer(data, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var response = JSON.parse(xmlHttp.responseText);
                callback(response['url'], response['currencyRate']);
            }
        };
        xmlHttp.open('POST', zakekeApiInstance + '/api/bigcommerce/customizer');
        xmlHttp.send(data);
    }
    
    function getIframe() {
        return document.querySelector('#zakeke-frame');
    }

    function showZakeke(context, toFormData, events) {
        if (!setupCompleted) {
            loadCss(zakekeInstance);
            buildContainer();
        }

        document.querySelectorAll('#zakeke-container, #zakeke-background').forEach(function (element) {
            element.style.display = 'block';
        });

        document.body.style.overflow = 'hidden';

        customerJWT(function (jwt) {
            if (jwt) {
                context.jwt = jwt;
            } else if (window.localStorage) {
                var guest = window.localStorage.getItem('zakeke-guest');
                if (!guest) {
                    guest = Math.random().toString(36).substr(2, 9);
                    window.localStorage.setItem('zakeke-guest', guest);
                }

                context.guest = guest;
            }
            getCustomizer(toFormData(context), function (url, currencyRate) {
                var iframe = getIframe();
                iframe.style.display = 'block';
                iframe.src = url;
                if (!setupCompleted) {
                    events(context, currencyRate);
                }

                setupCompleted = true;

                if (window.zakekeAdditionalSetup) {
                    window.zakekeAdditionalSetup();
                }
            });
        });
    }

    function getStoreHash() {
        return document.querySelector('link[rel="dns-prefetch preconnect"]').href.split('-')[1];
    }
    
    function handleUpdateCart(lineItemId) {
        getCart(function (cart) {
            var lineItem = cart.lineItems.physicalItems.find(function (x) {
                return x.id === lineItemId;
            }) || cart.lineItems.digitalItems.find(function (x) {
                return x.id === lineItemId;
            });
            
            if (!lineItem) {
                console.error('Failed to get the line item ' + lineItemId);
                return;
            }
            
            var customizatioOption = lineItem.options.find(function (option) {
                return option.name.toLowerCase() === 'customization';
            });

            var updateCartContext = {
                storeHash: getStoreHash(),
                currency: cart.currency.code,
                productName: lineItem.name,
                cart: cart,
                lineItem: lineItem,
                productId: lineItem.productId,
                qty: lineItem.quantity,
                zakekeAttributeId: customizatioOption.nameId,
                zakekeAttributeValueId: customizatioOption.valueId,
                design: customizatioOption.value
            };
            showZakeke(updateCartContext, getUpdateCartFormData, listenUpdateCartCustomizerEvents);
        });
    }
    
    setInterval(function () {
        Array.from(document.querySelectorAll('.form-field[data-product-attribute="set-select"]')).filter(function (element) {
            return element.innerText.split('\n')[0].match(/customization:?/i) && element.style.display !== 'none';
        }).forEach(function (element) {
            element.style.display = 'none';
        });

        Array.from(document.querySelectorAll('.cart-item')).filter(function (element) {
            return Array.from(element.querySelectorAll('.definitionList-key')).some(function (property) {
                return property.innerText.match(/customization:?/i);
            }) && element.style.display !== 'none';
        }).forEach(function (element) {
            if (element.querySelector('.zakeke-cart-item-edit')) {
                return;
            }

            var editLink = element.querySelector('.cart-item-edit, a[data-item-edit]');
            if (!editLink) {
                return;
            }

            editLink.style.display = 'none';

            var lineItemIdElement = element.querySelector('[data-item-edit], [data-cart-itemid]');
            if (!lineItemIdElement) {
                return;
            }

            var lineItemId = lineItemIdElement.dataset.itemEdit || lineItemIdElement.dataset.cartItemid;

            var zakekeEditLink = document.createElement('A');
            zakekeEditLink.className = editLink.className;
            zakekeEditLink.classList.add('zakeke-cart-item-edit');
            zakekeEditLink.innerText = editLink.innerText;
            zakekeEditLink.addEventListener('click', function () {
                handleUpdateCart(lineItemId)
            });
            editLink.parentNode.appendChild(zakekeEditLink);
        });
    }, 500);
    
    function fillBaseFormData(context, formData) {
        formData.append('version', isLargeVersion() ? 'large' : 'small');
        formData.append('culture', document.documentElement.lang || 'en-US');
        formData.append('store_hash', context.storeHash);
        formData.append('currency', context.currency);
        if (context.jwt) {
            formData.append('jwt', context.jwt);
        } else if (context.guest) {
            formData.append('guest', context.guest);
        }
        formData.append('name', context.productName);
        return formData;
    }
    
    function getUpdateCartFormData(updateCartContext) {
        var formData = fillBaseFormData(updateCartContext, new FormData());
        formData.append('qty[]', updateCartContext.qty);
        formData.append('design', updateCartContext.design);
        formData.append('product_id', updateCartContext.productId);
        return formData;
    }
    
    function getAddToCartFormData(addToCartContext, addToCartForm) {
        return fillBaseFormData(addToCartContext, new FormData(addToCartForm));
    }

    function calculateTax(priceData) {
        if (!priceData.with_tax || !priceData.without_tax) {
            return 1;
        }

        return priceData.with_tax.value / priceData.without_tax.value;
    }

    function getActiveDiscount(discounts, qty) {
        return Array.from(discounts).sort(function (lhs, rhs) {
            return rhs.min - lhs.min;
        }).find(function (discount) {
            return (discount.max || Number.MAX_SAFE_INTEGER) >= qty && discount.min <= qty;
        });
    }

    function calculateDiscount(price, activeDiscount, tax) {
        if (activeDiscount.type === 'price') {
            return activeDiscount.discount.value * tax;
        } else {
            return price * (activeDiscount.discount.value / 100);
        }
    }

    function assignZakekeAttributes(attributes, data) {
        attributes.forEach(function (attribute) {
            data.append('attribute[' + attribute.Id + ']', attribute.Value.Id);
        });

        return data;
    }

    function requestSign(data) {
        try {
            return Array.from(data.entries())
                .filter(function (pair) {
                    return pair[0].startsWith('attribute[');
                })
                .sort(function (lhs, rhs) {
                    return parseInt(lhs[0].match(/attribute\[(.*)\]/)[1]) - parseInt(rhs[0].match(/attribute\[(.*)\]/)[1]);
                }).reduce(function (acc, pair) {
                    return acc + '&' + pair[0] + '=' + pair[1];
                }, '');
        } catch (ex) {
            return null;
        }
    }

    function elaborateResponseData(data) {
        return {
            isOutOfStock: !(data.purchasable && data.instock),
            finalPrice: data.price.with_tax ? data.price.with_tax.value : data.price.without_tax.value,
            discounts: data.bulk_discount_rates || [],
            tax: calculateTax(data.price)
        };
    }

    function getProductData(productId, data, callback) {
        var sign = requestSign(data);
        if (sign) {
            if (productDataCache[sign]) {
                callback(elaborateResponseData(productDataCache[sign]));
                return;
            }
            if (pendingProductDataRequests.includes(sign)) {
                return;
            }

            pendingProductDataRequests.push(sign);
        }

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var response = JSON.parse(xmlHttp.responseText).data;
                callback(elaborateResponseData(response));
                if (sign) {
                    productDataCache[sign] = response;
                    var index = pendingProductDataRequests.indexOf(sign);
                    if (index !== -1) {
                        pendingProductDataRequests.splice(index, 1);
                    }
                }
            }
        };
        xmlHttp.open('POST', '/remote/v1/product-attributes/' + productId);
        if (window.BCData) {
            xmlHttp.setRequestHeader('x-xsrf-token', BCData.csrf_token);
        }
        xmlHttp.send(data);
    }

    function createNewOptionValue(data, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var response = JSON.parse(xmlHttp.responseText);
                callback(response.value_id);
            }
        };
        xmlHttp.open('POST', zakekeApiInstance + '/api/bigcommerce/designs');
        xmlHttp.send(data);
    }

    function UpdateProductRule(data, designId, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && (xmlHttp.status === 200 || xmlHttp.status === 204) ) {
                callback();
            }
        };
        xmlHttp.open('POST', zakekeApiInstance + '/api/bigcommerce/designs/' + designId);
        xmlHttp.send(data);
    }

    function postCartItem(data, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                callback();
            }
        };
        xmlHttp.open('POST', '/cart.php');
        xmlHttp.send(data);
    }

    function addToCart(data, zakekeAttributeId, designId) {
        data.append('design', designId);
        data.append('zakeke_attribute_id', zakekeAttributeId);

        createNewOptionValue(data, function (valueId) {
            data.append('attribute[' + zakekeAttributeId + ']', valueId);

            postCartItem(data, function () {
                window.location.href = '/cart.php';
            })
        });
    }

    function updateCartItem(data, zakekeAttributeId, zakekeAttributeValueId, designId) {
        data.append('zakeke_attribute_id', zakekeAttributeId);
        data.append('zakeke_attribute_value_id', zakekeAttributeValueId);

        UpdateProductRule(data, designId, function () {
            window.location.reload();
        });
    }

    var zakekeAttributeElement = document.getElementById('zakeke-attribute');
    if (!zakekeAttributeElement) {
        zakekeAttributeElement = Array.from(document.querySelectorAll('.form-field[data-product-attribute="set-select"]')).find(function (element) {
            return element.innerText.match(/customization([:\n])/i);
        });

        if (!zakekeAttributeElement) {
            return;
        }

        zakekeAttributeElement.style.display = 'none';
    }

    if (!document.querySelector('#zakeke-product-tag')) {
        return;
    }

    var zakekeButton = document.getElementById('zakeke-button');
    if (!zakekeButton) {
        zakekeButton = document.createElement('INPUT');

        zakekeButton.id = 'zakeke-button';
        zakekeButton.type = 'button';
        zakekeButton.value = 'Customize';
        zakekeButton.className = 'button button--primary';

        var cartActionsContainer = addToCartForm.querySelector('.form-action');
        if (cartActionsContainer) {
            cartActionsContainer.appendChild(zakekeButton);
        } else {
            addToCartForm.appendChild(zakekeButton);
        }
    }

    zakekeButton.addEventListener('click', function () {
        if (!addToCartForm.checkValidity()) {
            addToCartForm.reportValidity && addToCartForm.reportValidity();
            return;
        }

        var qty = 1;
        var qtyElement = addToCartForm.querySelector('input[name="qty[]"]');
        if (qtyElement) {
            qty = parseInt(qtyElement.value, 10);
        }

        var zakekeAttributeIdParts = zakekeAttributeElement.querySelector('select').id.split('_').filter(function (i) { return i; });
        var zakekeAttributeId = zakekeAttributeIdParts[2] || zakekeAttributeIdParts[1];

        var addToCartContext = {
            storeHash: zakekeButton.dataset.storeHash || getStoreHash(),
            productId: zakekeButton.dataset.productId || document.querySelector('input[name="product_id"]').value,
            productName: zakekeButton.dataset.productName || document.querySelector('meta[property="og:title"]').content,
            qty: qty,
            currency: zakekeButton.dataset.currency || document.querySelector('meta[itemprop="priceCurrency"]').content,
            zakekeAttributeId: zakekeAttributeId
        };
        showZakeke(addToCartContext, function(context) {
            return getAddToCartFormData(context, addToCartForm);
        }, listenAddToCartCustomizerEvents);
    });
})();