  	$(document).ready(function(){

  		var games = ['game1','game2','game3','game4'];

		var score = 0;

  		$(".hit-him").click(function(){

			$(showIt).css('display','initial');
			$(this).css('display','hide');

			score++;
			$('#my-point').html(score);
			var showIt = games[0];

  		});
  	});



//Several Perks that i will need to program
//3 seconds load at first, and image is blurred a bit
//end of 3 second, time on top right starts
//points on the left start at 0
//once waldo is found: 
	//time left is transferred as points
	//time is reset
	//new ground is shown randomly
	//3 second countdown again

//buttons
	//hint 1 displays the half shaded area
	//hint 2 display the quarter shaded area
	//give up 
		//resets time and shows waldo (big arrow)
	//next takes you to next level
