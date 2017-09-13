$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var nameInput = $("input#formGroupExampleInput").val();
    $(".formGroupExampleInput").text(nameInput);
    $("#letter").show();
    event.preventDefault();
  });
});
