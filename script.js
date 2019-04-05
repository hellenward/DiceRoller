
$(document).ready(function() {

  const diceNumber = 0;
  const sidesNumber = 0;

  $('.submitButton').click(function(diceNumber, sidesNumber) {
    var diceNumberVal = $('#diceNumber').val();
    var sidesNumberVal = $('#sidesNumber').val();
    const throwArray = []

    if ($.isNumeric(diceNumberVal) && ($.isNumeric(sidesNumberVal)) ) {
        for (let i = 0; i < diceNumberVal; i++) {
          const result = Math.floor(Math.random() * sidesNumberVal + 1);
          throwArray.push(result);
        }
    } else {
      console.log("Oops, this doesn't look like a number!  Try again.");
    };


  });
  $('.resetButton').click(function() {
    console.log("Goodbye then");
  });
})
