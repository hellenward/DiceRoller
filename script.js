
$(document).ready(function() {

  const diceNumber = 0;
  const sidesNumber = 0;

  $('.submitButton').click(function(diceNumber, sidesNumber) {
    var diceNumberVal = $('#diceNumber').val();
    var sidesNumberVal = $('#sidesNumber').val();
    console.log(diceNumberVal);
    console.log(sidesNumberVal);
  });
  $('.resetButton').click(function() {
    console.log("Goodbye then");
  });
})
