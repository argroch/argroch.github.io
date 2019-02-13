function shuffle(tbl) {
  var arr = tbl.find("td");
  for(
    var j, x, i = arr.length; i;
    j = parseInt(Math.random() * i),
    x = arr[--i], arr[i] = arr[j], arr[j] = x
  );

  var tmp;
  var rows = tbl.find("tr").length

  var cols = tbl.find("tr:first td").length

  for (i = 0; i < rows; i++){
    tmp = tbl.find("tr").eq(i);
    tmp.html()
    for (var j = 0; j < cols; j++) {
        tmp.append(arr[i*cols+j]);
    }
  }       
}

$("#shuffler").click(function(){
	shuffle($("table"));
  $('#tablestein').removeClass('dont-click');
  $('#tablestein').removeAttr('title');
});

$("td").click(function(){
	var cellIndex = $(this).index();
	if ( $(this).next().hasClass("empty") || $(this).prev().hasClass("empty") || $(this).closest('tr').next().children().eq(cellIndex).hasClass("empty") || $(this).closest('tr').prev().children().eq(cellIndex).hasClass("empty") ){
		$(".empty").html($(this).text());
		$(".empty").removeClass("empty");
		$(this).html("");
		$(this).addClass("empty");
	}
  var results = [];
  var x = 1
  for (var i = 0; i <= 3; i++) {
    for (var j = 0; j <= 3; j++) {
      if (x == 16) {
        x = "";
      }
      if ($('#tablestein').get(0).rows[i].cells[j].innerHTML == x) {
        results.push(true);
      } else {
        results.push(false);
      }
      x++;
    }
  }

  if (!results.includes(false)) {
    // alert("You win!");
    $('#youWin').modal('show');
  }
});