$(document).ready(function(){
	let equation = "";
	$('#one').click(function(){
		equation = equation + "1";
		$('#display_area').val(equation);
	});
	$('#two').click(function(){
		equation = equation + "2";
		$('#display_area').val(equation);
	});
	$('#three').click(function(){
		equation = equation + "3";
		$('#display_area').val(equation);
	});
	$('#four').click(function(){
		equation = equation + "4";
		$('#display_area').val(equation);
	});
	$('#five').click(function(){
		equation = equation + "5";
		$('#display_area').val(equation);
	});
	$('#six').click(function(){
		equation = equation + "6";
		$('#display_area').val(equation);
	});
	$('#seven').click(function(){
		equation = equation + "7";
		$('#display_area').val(equation);
	});
	$('#eight').click(function(){
		equation = equation + "8";
		$('#display_area').val(equation);
	});
	$('#nine').click(function(){
		equation = equation + "9";
		$('#display_area').val(equation);
	});
	$('#zero').click(function(){
		equation = equation + "0";
		$('#display_area').val(equation);
	});
	$('#decimal').click(function(){
		equation = equation + ".";
		$('#display_area').val(equation);
	});
	$('#open_paran').click(function(){
		equation = equation + "(";
		$('#display_area').val(equation);
	});
	$('#close_paran').click(function(){
		equation = equation + ")";
		$('#display_area').val(equation);
	});
	$('#add').click(function(){
		equation = equation + "+";
		$('#display_area').val(equation);
	});
	$('#subtract').click(function(){
		equation = equation + "-";
		$('#display_area').val(equation);
	});
	$('#multiply').click(function(){
		equation = equation + "*";
		$('#display_area').val(equation);
	});
	$('#divide').click(function(){
		equation = equation + "/";
		$('#display_area').val(equation);
	});
	$('#equals').click(function(){
		let answer = eval(equation);
		equation = answer;
		$('#display_area').val(equation);
	});
	$('#clear_last').click(function(){
		equation = equation.slice(0,-1)
		$('#display_area').val(equation);
	});
	$('#all_clear').click(function(){
		equation = ""
		$('#display_area').val(equation);
	});
})