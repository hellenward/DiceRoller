
$(document).ready(function() {

  const diceNumber = 0;
  const sidesNumber = 0;

  $('.submitButton').click(function(diceNumber, sidesNumber) {
    var diceNumberVal = $('#diceNumber').val();
    var sidesNumberVal = $('#sidesNumber').val();
    let throwArray = [];

    if ($.isNumeric(diceNumberVal) && ($.isNumeric(sidesNumberVal)) ) {
        for (let i = 0; i < diceNumberVal; i++) {
          const result = Math.floor(Math.random() * sidesNumberVal + 1);
          throwArray.push(result);
        }
    } else {
      console.log("Oops, this doesn't look like a number!  Try again.");
    };

    function throwHandler(throwArray) {
      console.log(throwArray);
      for(let i = 0; i < throwArray.length; i++) {
        console.log(`You threw a ${throwArray[i]}`);
      };
    }

    throwHandler(throwArray);

    const totalThrowArray = throwArray.reduce((partial_sum, a) => partial_sum + a);
    console.log(totalThrowArray);

  });
  $('.resetButton').click(function() {
    console.log("Goodbye then");
  });
})
