
$(document).ready(function() {

  const diceNumber = 0;
  const sidesNumber = 0;

  $('.submitButton').click(function(diceNumber, sidesNumber) {
    document.getElementById("bitsToClear").innerHTML = '<div><p class="scoreThisRoll"></p></div><div><p class="totalScore"></p></div>';
    var diceNumberVal = $('#diceNumber').val();
    var sidesNumberVal = $('#sidesNumber').val();
    let throwArray = [];
    $(".scoreTable").css({"visibility": "visible"});


    if ($.isNumeric(diceNumberVal) && ($.isNumeric(sidesNumberVal)) ) {
        for (let i = 0; i < diceNumberVal; i++) {
          const result = Math.floor(Math.random() * sidesNumberVal + 1);
          throwArray.push(result);
        }
    } else {
      const placeHolder = document.querySelector(".scoreThisRoll");
      placeHolder.insertAdjacentHTML('afterend', 'Oops! You need to enter a number. Hit reset to try again');
    };

    function throwHandler(throwArray) {
      for(let i = 0; i < throwArray.length; i++) {
        const placeHolder = document.querySelector(".scoreThisRoll");
        placeHolder.insertAdjacentHTML('afterend', `<p class="newThrow">You threw a ${throwArray[i]}</p>`);
      };
    }

    throwHandler(throwArray);

    const totalThrowArray = throwArray.reduce((partial_sum, a) => partial_sum + a);
    const placeHolderTotal = document.querySelector(".totalScore");
    placeHolderTotal.insertAdjacentHTML('afterend', `<p class="totalScore">Total score: ${totalThrowArray}</p>`);

  });

  $('.resetButton').click(function() {
    document.getElementById("bitsToClear").innerHTML = '<div><p class="scoreThisRoll"></p></div><div><p class="totalScore"></p></div>';
  });
})
