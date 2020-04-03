/*!
// SUMMARY - Contents
// ------------------------------------------------

 1. Global Settings
 2. Set Default Colors & Size
 3. Select Colors & Size
 4. Select Type Print
 5. Select Model
 6. Set Default Selection
 7. Quantity
 8. Customizer
 9. Font Selection
 10. Font Size
 11. Font Color Change
 12. Napkin Rotation
 
/*!---------- 1. GLOBAL SETTINGS ----------*/ 

//define global variables

var price_1=0, price_2=0, price_3=0, price_4=0, price_5=0, price_6=0;
var code_1 = '00', code_2 = '00', code_3 = '00', code_4 = '00', code_5 = '00', code_6 = '00', code_7 = '00', code_8 = '00', code_9 = '00', code_10 = '00', code_11 = '00';
var item_quantity = 1;
var total_basket = item_quantity*(price_1);


/*!---------- 2. SET DEFAULT COLORS ----------*/ 

//Fabric Color (show on first load)

$('#price1-1').ready(function(){
	price_1 = parseFloat($('#price1-1').data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $('#price1-1').data('code');
	$('#code_3').text('cod. ' + code_3);
});

//Minimal Brand Color (show on first load)

$('#price2-1').ready(function(){
	price_2 = parseFloat($('#price2-1').data('price'));
	$('#total_2').text('$ ' + price_2);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_2 = $('#price2-1').data('code');
	$('#code_2').text('cod. ' +code_2);	
});

//Size (show on first load)

$('#price6-1').ready(function(){	
	code_7 = $('#price6-1').data('code');
	$('#code_7').text('cod. ' + code_7);
});

/*!---------- 3. SELECT COLORS ----------*/ 

//Fabric Colors

$('#price1-1').click(function(){
	price_1 = parseFloat($('#price1-1').data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $('#price1-1').data('code');
	$('#code_3').text('cod. ' + code_3);
});

$('#price1-2').click(function(){
	price_1 = parseFloat($(this).data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $(this).data('code');
	$('#code_3').text('cod. ' + code_3);
});
$('#price1-3').click(function(){
	price_1 = parseFloat($(this).data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $(this).data('code');
	$('#code_3').text('cod. ' + code_3);
});
$('#price1-4').click(function(){
	price_1 = parseFloat($(this).data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $(this).data('code');
	$('#code_3').text('cod. ' + code_3);
});
$('#price1-5').click(function(){
	price_1 = parseFloat($(this).data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $(this).data('code');
	$('#code_3').text('cod. ' + code_3);
});
$('#price1-6').click(function(){
	price_1 = parseFloat($(this).data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $(this).data('code');
	$('#code_3').text('cod. ' + code_3);
});
$('#price1-7').click(function(){
	price_1 = parseFloat($(this).data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $(this).data('code');
	$('#code_3').text('cod. ' + code_3);
});
$('#price1-8').click(function(){
	price_1 = parseFloat($(this).data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $(this).data('code');
	$('#code_3').text('cod. ' + code_3);
});
$('#price1-9').click(function(){
	price_1 = parseFloat($(this).data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $(this).data('code');
	$('#code_3').text('cod. ' + code_3);
});
$('#price1-10').click(function(){
	price_1 = parseFloat($(this).data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $(this).data('code');
	$('#code_3').text('cod. ' + code_3);
});
$('#price1-11').click(function(){
	price_1 = parseFloat($(this).data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $(this).data('code');
	$('#code_3').text('cod. ' + code_3);
});
$('#price1-12').click(function(){
	price_1 = parseFloat($(this).data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $(this).data('code');
	$('#code_3').text('cod. ' + code_3);
});
$('#price1-13').click(function(){
	price_1 = parseFloat($(this).data('price'));
	$('#total').text('$ ' + price_1);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_3 = $(this).data('code');
	$('#code_3').text('cod. ' + code_3);
});

//Minimal Brand Colors

$('#price2-1').click(function(){
	price_2 = parseFloat($('#price2-1').data('price'));
	$('#total_2').text(price_2 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_2 = $('#price2-1').data('code');
	$('#code_2').text('cod. ' +code_2);	
});
$('#price2-2').click(function(){
	price_2 = parseFloat($(this).data('price'));
	$('#total_2').text(price_2 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_2 = $(this).data('code');
	$('#code_2').text('cod. ' + code_2);	
});
$('#price2-3').click(function(){
	price_2 = parseFloat($(this).data('price'));
	$('#total_2').text(price_2 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_2 = $(this).data('code');
	$('#code_2').text('cod. ' + code_2);	
});
$('#price2-4').click(function(){
	price_2 = parseFloat($(this).data('price'));
	$('#total_2').text(price_2 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_2 = $(this).data('code');
	$('#code_2').text('cod. ' + code_2);	
});

//Background Print Colors

$('#price4-1').click(function(){
	price_5 = parseFloat($(this).data('price'));
	$('#total_4').text('$ 0.00');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_5 = $(this).data('code');
	$('#code_5').text(code_5);	
});
$('#price4-2').click(function(){
	price_5 = parseFloat($(this).data('price'));
	$('#total_4').text('$ 0.00');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_5 = $(this).data('code');
	$('#code_5').text(code_5);	
});
$('#price4-3').click(function(){
	price_5 = parseFloat($(this).data('price'));
	$('#total_4').text('$ 0.00');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_5 = $(this).data('code');
	$('#code_5').text(code_5);	
});
$('#price4-4').click(function(){
	price_5 = parseFloat($(this).data('price'));
	$('#total_4').text('$ 0.00');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_5 = $(this).data('code');
	$('#code_5').text(code_5);	
});	
$('#price4-5').click(function(){
	price_5 = parseFloat($(this).data('price'));
	$('#total_4').text('$ 0.00');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_5 = $(this).data('code');
	$('#code_5').text(code_5);	
});	
//Logo Colors

$('#price3-1').click(function(){
	price_3 = parseFloat($('#price3-1').data('price'));
	$('#total_3').text(price_3 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_4 = $('#price3-1').data('code');
	$('#code_4').text('cod. ' + code_4);	
});
$('#price3-2').click(function(){
	price_3 = parseFloat($(this).data('price'));
	$('#total_3').text(price_3 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_4 = $(this).data('code');
	$('#code_4').text('cod. ' + code_4);	
});
$('#price3-3').click(function(){
	price_3 = parseFloat($(this).data('price'));
	$('#total_3').text(price_3 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_4 = $(this).data('code');
	$('#code_4').text('cod. ' + code_4);	
});
$('#price3-4').click(function(){
	price_3 = parseFloat($(this).data('price'));
	$('#total_3').text(price_3 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_4 = $(this).data('code');
	$('#code_4').text('cod. ' + code_4);	
});
$('#price3-5').click(function(){
	price_3 = parseFloat($(this).data('price'));
	$('#total_3').text(price_3 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_4 = $(this).data('code');
	$('#code_4').text('cod. ' + code_4);	
});
$('#price3-6').click(function(){
	price_3 = parseFloat($(this).data('price'));
	$('#total_3').text(price_3 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_4 = $(this).data('code');
	$('#code_4').text('cod. ' + code_4);	
});
$('#price3-7').click(function(){
	price_3 = parseFloat($(this).data('price'));
	$('#total_3').text(price_3 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_4 = $(this).data('code');
	$('#code_4').text('cod. ' + code_4);	
});	
$('#price3-8').click(function(){
	price_3 = parseFloat($(this).data('price'));
	$('#total_3').text(price_3 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_4 = $(this).data('code');
	$('#code_4').text('cod. ' + code_4);	
});			
$('#price3-9').click(function(){
	price_3 = parseFloat($(this).data('price'));
	$('#total_3').text(price_3 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_4 = $(this).data('code');
	$('#code_4').text('cod. ' + code_4);	
});	

//Size (manage only code, not price)

$('#price6-1').click(function(){	
	code_7 = $(this).data('code');
	$('#code_7').text('cod. ' + code_7);	
});
$('#price6-2').click(function(){	
	code_7 = $(this).data('code');
	$('#code_7').text('cod. ' + code_7);	
});
$('#price6-3').click(function(){	
	code_7 = $(this).data('code');
	$('#code_7').text('cod. ' + code_7);	
});
$('#price6-4').click(function(){	
	code_7 = $(this).data('code');
	$('#code_7').text('cod. ' + code_7);	
});
$('#price6-5').click(function(){	
	code_7 = $(this).data('code');
	$('#code_7').text('cod. ' + code_7);	
});
$('#price6-6').click(function(){	
	code_7 = $(this).data('code');
	$('#code_7').text('cod. ' + code_7);	
});		

/*!---------- 4. SELECT TYPE PRINT ----------*/ 

//Select Background Print	

$("#price0-2").click(function(){
    var $this = $(this);
    if($this.data('clicked', true)) {
		price_4 = parseFloat($(this).data('price'));
		$('#total_1').text(price_4 + ' $');
		total_basket = item_quantity*(price_1);
		$('#count_tot').text('$ ' + total_basket);	
		
		$("#color-minimal-brand").hide();
		$(".summary-minimal-brand").hide();
		$("#color-background-print").show();
		$(".summary-background-print").show();
	
		code_1 = $(this).data('code');
		$('#code_1').text('cod. ' + code_1);
		
		//if Background Print is active set color default
		
		price_5 = parseFloat($(this).data('price'));
		$('#total_4').text('$ 0.00');
		total_basket = item_quantity*(price_1);
		$('#count_tot').text('$ ' + total_basket);	
		 
		code_5 = $('#price4-1').data('code');
		$('#code_5').text('cod. ' +code_5);	
		}
	});
	
//Select Print

$('#price0-1').click(function(){
	price_4 = parseFloat($('#price0-1').data('price'));
	$('#total_1').text('$ ' + price_4);
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	$("#color-wood").show();
	$(".summary-wood").show();
	$("#color-wire").hide();
	$(".summary-wire").hide();
	
	code_1 = $('#price0-1').data('code');
	$('#code_1').text('cod. ' + code_1);	
});

/*!---------- 5. SELECT MODEL ----------*/ 

//Select Logo T-shirt

$('#price5-2').click(function(){
	$(this).data('clicked', true);
	//type Logo T-shirt 
	price_6 = parseFloat($('#price5-2').data('price'));
	$('#total_5').text('$ 0.00');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);
	
	$("#insert").show();
	$("#insert-side").show();
	$("#insert-back").show();
	
	$("#color-insert").show();
	$(".summary-insert").show();
	
	code_6 = $('#price5-2').data('code');
	$('#code_6').text('cod. ' + code_6);
	
	//if Logo T-shirt is active show default color
	
	price_3 = parseFloat($('#price3-1').data('price'));
	$('#total_3').text(price_3 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	code_4 = $('#price3-1').data('code');
	$('#code_4').text('cod. ' + code_4);	
});

//Select Model

	$('#price5-1').click(function(){
	price_6 = parseFloat($('#price5-1').data('price'));
	$('#total_5').text('$ 0.00');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);
	
	$("#insert").hide();
	$("#insert-side").hide();
	$("#insert-back").hide();
	
	$("#color-insert").hide();
	$(".summary-insert").hide();
	
	code_6= $('#price5-1').data('code');
	$('#code_6').text('cod. ' + code_6);
});

/*!---------- 6. SET DEFAULT SELECTION ----------*/ 

//Model (show on first load)

$('#price5-1').ready(function(){
	price_6 = parseFloat($('#price5-1').data('price'));
	$('#total_5').text('$ 0.00');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);

	$("#insert").hide();
	$("#insert-side").hide();
	$("#insert-back").hide();
	
	$("#color-insert").hide();
	$(".summary-insert").hide();
	
	code_6= $('#price5-1').data('code');
	$('#code_6').text('cod. ' + code_6);
});

//Print (show on first load)

$('#price0-1').ready(function(){
	
	price_4 = parseFloat($('#price0-1').data('price'));
	$('#total_1').text(price_4 + ' $');
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
	
	$("#color-wood").show();
	$(".summary-wood").show();
	$("#color-wire").hide();
	$(".summary-wire").hide();
	
	code_1 = $('#price0-1').data('code');
	$('#code_1').text('cod. ' + code_1);
});

/*!---------- 7. QUANTITY ----------*/ 

//add to box button

$(document).ready(function(){

var quantity=0;
   $('.quantity-right-plus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
            
            $('#quantity').val(quantity + 1);

          
            // Increment
        
    });

     $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
      
            // Increment
            if(quantity>0){
            $('#quantity').val(quantity - 1);
            }
    });
    
});
	
//set quantity 

$('#num_item_basket').click(function(){
	item_quantity = document.getElementById('quantity').value;
	total_basket = item_quantity*(price_1);
	$('#count_tot').text('$ ' + total_basket);	
});


/*---------- 8. Customizer ----------*/ 

$('#list_val').keyup(function() {
   $('#list_v').val($(this).val());
});

$('#list_val2').keyup(function() {
  $('#list_v2').val($(this).val());
});

$('#list_v').keyup(function() {
   $('#list_val').val($(this).val());
});

$('#list_v2').keyup(function() {
  $('#list_val2').val($(this).val());
});

// end of customizer

/*---------- 9	. Font Selector ---------- */
var changeFont = function(font){
  console.log(font.value)
    document.getElementById('list_v').style.fontFamily = font.value;
	document.getElementById('list_v2').style.fontFamily = font.value;
}

/*---------- End Font Selector ---------- */

/*---------- 10	. Font Size ---------- */
var changeFontSize = function(font){
  console.log(font.value)
    document.getElementById('list_v').style.fontSize = font.value;
	document.getElementById('list_v2').style.fontSize = font.value;
}

/*---------- 11	. Font & Logo Color Change ---------- */
//     This also changes the logo color
//   Printer can only print text in one color

function changeBlack() {
	document.getElementById('logo').src='congrats/img/logo-babyGirl.png';
	document.getElementById('list_v').style.color = 'black';
	document.getElementById('list_v2').style.color = 'black';
}

function changeWhite() {
	document.getElementById('logo').src='congrats/img/logo-white-babyGirl.png';
	document.getElementById('list_v').style.color = 'white';
	document.getElementById('list_v2').style.color = 'white';
}

function changeSilver() {
	document.getElementById('logo').src='congrats/img/logo-silver-babyGirl.png';
	document.getElementById('list_v').style.color = '#cccccc';
	document.getElementById('list_v2').style.color = '#cccccc';
}

function changeRed() {
	document.getElementById('logo').src='congrats/img/logo-red-babyGirl.png';
	document.getElementById('list_v').style.color = '#d40404';
	document.getElementById('list_v2').style.color = '#d40404';
}

function changeGold() {
	document.getElementById('logo').src='congrats/img/logo-gold-babyGirl.png';
	document.getElementById('list_v').style.color = '#d4ab59';
	document.getElementById('list_v2').style.color = '#d4ab59';

}

// end font & logo color changes
