
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
          let result = Math.floor(Math.random() * sidesNumberVal + 1);
          if(sidesNumberVal === "20" && result === 20) {
            result = "green";
          } else if (sidesNumberVal === "20" && result === 1) {
            result = "red";
          }
          throwArray.push(result);
        }
    } else {
      const placeHolder = document.querySelector(".scoreThisRoll");
      placeHolder.insertAdjacentHTML('afterend', `<p class=scoreThisRoll>Oops! You need to enter a number. Hit reset to try again<p>`);
    };

    function throwHandler(throwArray) {
      const placeHolder = document.querySelector(".scoreThisRoll");
      for(let i = 0; i < throwArray.length; i++) {
        if (throwArray[i] === "green") {
          placeHolder.insertAdjacentHTML('afterend', `<p class="newThrowGreen">You threw a 20</p>`);
        } else if (throwArray[i] === "red") {
          placeHolder.insertAdjacentHTML('afterend', `<p class="newThrowRed">You threw a 1</p>`);
        } else {
          placeHolder.insertAdjacentHTML('afterend', `<p class="newThrow">You threw a ${throwArray[i]}</p>`);
        }
      };
      $.each(throwArray, function(i) {
        if (throwArray[i] === "green") {
          throwArray[i] = 20;
        } else if (throwArray[i] === "red") {
          throwArray[i] = 1;
        }
      })
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
