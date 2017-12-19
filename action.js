$(document).ready(function(){


	var score = 0;
  var finalScore;
  var final = 0;
	var gameInProgress = true;

// Grounds 

  var grounds = ['game4','game3','game2'];

  var level4 = false;
  var level3 = false;
  var level2 = false;


  var slotOne=0;
  var slotTwo=0;
  var slotThree=0;
//clicking on waldo

  $(".hit-him").click(function(){
		$('#next-round').css('display','inherit');
  	stopTimer();
  	$('#my-point').html(score);
    $('#give-up').hide();
    $('#next-level').show();
    $('#the-arrow').hide();

  });

//beginning start screen

  $('#start-btn').click(function(){
    gameInProgress = true;
		setTime();
  	startTimer();
		checkSecond();
		$('.start-screen').hide();
    $('#hint').show();
    $('#give-up').show();
    $('#the-end').hide();
    level4 = false;
    level3 = false;
    level2 = false;
    randGround();
	});

// Hint Button click


// Giving up

  $('#give-up').click(function(){
    gameInProgress = false;
    $('#my-point').html('0');
    $('#the-arrow').show();
    $('#next-level').show();
    $('#give-up').hide();
    
    if (slotOne==0) {
      slotOne=0;
    }
    if (slotTwo==0) {
      slotTwo=0;
    }
    if (slotThree==0) {
      slotThree=0;
    }
  });


// Check which Ground 
  function randGround(){

    var x = grounds[Math.floor((Math.random() * 3))];
    if (x=='game4' && level4 === false) {
      $('.game4').show();
      level4=true;
      //position arrow based on ground
      $('#the-arrow')
      .addClass('arrow4')
      .removeClass('arrow3')
      .removeClass('arrow2')

      $('#hint-wall')
      .removeClass('hint3')
      .addClass('hint-other');
    }
    else if (x=='game3' && level3 === false) {
      $('.game3').show();
      level3=true;
      //position arrow based on ground
      $('#the-arrow')
      .addClass('arrow3')
      .removeClass('arrow2')
      .removeClass('arrow4');

      $('#hint-wall')
      .removeClass('hint-other')
      .addClass('hint3');
    }
    else if (x=='game2' && level2 === false) {
      $('.game2').show();
      level2=true;
      //position arrow
      $('#the-arrow')
      .addClass('arrow2')
      .removeClass('arrow4')
      .removeClass('arrow3')

      $('#hint-wall')
      .removeClass('hint3')
      .addClass('hint-other');
    }
    else if (level4==true && level3==true && level2==true){
      $('#the-end').show();
      $('#final-score').html(finalScore);
      $('#hint, #give-up').hide();
      $('#game-over').show();
      $('#highscore').show();
      $('#retry').show();
      $('#homepage-btn').show();
      gameInProgress = false;
      
    }
    else {
      randGround();
    }

    $('#hint').click(function(){
      $('#hint-wall').show();
  });
  };

//start over 
  $('#retry').click(function(){
    $('#highscore-page').hide();
      $('.start-screen').show();
      resetScores();
      countIt();

      $('#my-point').html('0');

  });

// Highscore clicking 
  $('#highscore').click(function(){
    $('#the-end').hide();
    $('#highscore-page').show();

    var final= parseInt(slotOne) + parseInt(slotTwo) + parseInt(slotThree);
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $('#score-board')
    .prepend('<p>'+time+' -------------------- '+final+' points'+'</p>');
  });

  function resetScores() {
    slotOne=0;
    slotTwo=0;
    slotThree=0;

    final = 0;

    score=0;
  }

//next level button clicking 
		
	$('#next-level').click(function(){
		gameInProgress = true;
    // hide current game and waldo
    $('.hit-him').hide();
    $('.ground').hide();
    $('#give-up').show();
    randGround();
		setTime();
		startTimer();
		checkSecond();
		$('#next-level').hide();
    $('#the-arrow').hide();
    $('#hint-wall').hide();

	});

//timer function
	function setTime(){
		document.getElementById('times').innerHTML =
	  	03 + ":" + 0+0;
	  }

	function startTimer() {
  	var presentTime = document.getElementById('times').innerHTML;
  	var timeArray = presentTime.split(/[:]+/);
  	var m = timeArray[0];
  	var s = checkSecond((timeArray[1] - 1));
  	if(s==59){m=m-1}
  	if (s==0 && m==0) {
  		gameInProgress=false;
      $('#give-up').trigger("click");

  	}  
    document.getElementById('times').innerHTML =
     	m + ":" + s;
     	if (gameInProgress) {
      	setTimeout(startTimer, 1000);	
     	}
   }

	function checkSecond(sec) {
  	if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  	if (sec < 0) {sec = "59"};
  	return sec;
	}
//stop the timer
		
	function stopTimer() {
		var presentTime = document.getElementById('times').innerHTML;
  		var timeArray = presentTime.split(/[:]+/);
  		var m = 0;
  		var s = 0;
  		$('#times').html(timeArray);
  		gameInProgress = false;
      parseInt(timeArray);
      parseInt(score);
      score=timeArray.join('');
      countIt();
      console.log(score);
	}

  function countIt(){
    parseInt(score);
    parseInt(slotOne,slotThree,slotTwo);
    if (slotOne==0) {
      slotOne=score;
    }
    else if (slotTwo==0) {
      slotTwo=score;
    }
    else if (slotThree==0) {
      slotThree=score;
    }
    else{
      slotOne=0;
      slotTwo=0;
      slotThree=0;
    }

    var final= parseInt(slotOne) + parseInt(slotTwo) + parseInt(slotThree);
    $('#final-score').html(final);
  }

});









