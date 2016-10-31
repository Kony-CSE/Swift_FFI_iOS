function addition()
{
	var num1=frmHome.textbox2999296733483877.text;
	var num2=frmHome.textbox2999296733483880.text;
	//Invokes function 'Addition'
    var returnedValue = FFI.Addition(
		/**Number*/ num1, 
		/**Number*/ num2);
	frmHome.label999296733483956.text=returnedValue;		
}

function substraction()
{
	var num1=frmHome.textbox2999296733483877.text;
	var num2=frmHome.textbox2999296733483880.text;
	//Invokes function 'Subtraction'
    var returnedValue = FFI.Subtraction(
		/**Number*/ num1, 
		/**Number*/ num2);
	frmHome.label999296733484003.text=returnedValue;	
}

function multiplication()
{
	var num1=frmHome.textbox2999296733483877.text;
	var num2=frmHome.textbox2999296733483880.text;
		//Invokes function 'Multiplication'
     var returnedValue = FFI.Multiplication(
		/**Number*/ num1, 
		/**Number*/ num2);
	frmHome.label999296733484007.text=returnedValue;	
}

function additionSwift()
{
	var Number1=frmHome.textbox2999296733483877.text;
	var Number2=frmHome.textbox2999296733483880.text;
	//Invokes function 'Addition'
   var returnedValue = SwiftFFI.Addition(
		/**Number*/ Number1, 
		/**Number*/ Number2);
	frmHome.label999296733487815  .text=returnedValue;		
}

function substractionSwift()
{
	var Number1=frmHome.textbox2999296733483877.text;
	var Number2=frmHome.textbox2999296733483880.text;
			//Invokes function 'Subtraction'
    var returnedValue = SwiftFFI.Subtraction(
		/**Number*/ Number1, 
		/**Number*/ Number2);
	frmHome.label999296733487855.text=returnedValue;	
}

function multiplicationSwift()
{
    var Number1=frmHome.textbox2999296733483877.text;
	var Number2=frmHome.textbox2999296733483880.text;
	//Invokes function 'Multiplication'
    var returnedValue = SwiftFFI.Multiplication(
		/**Number*/ Number1, 
		/**Number*/ Number2);
	frmHome.label999296733487941.text=returnedValue;	
}