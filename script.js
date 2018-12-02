function submitAnswers() {
    var total = 4,
        score = 0;

    // Get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;

    // Validation

    for (var i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert("You missed question " + i);
            return false;
        } // if condition

    } // for loop

    // Check answers
    var answers = ["b", "a", "d", "b"];

    //For loop logic

    for (var i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }

    /*
    if (q1 == answers[0]) {
        score++
    }
    if (q2 == answers[1]) {
        score++;
    }
    if (q3 == answers[2]) {
        score++;
    }
    if (q4 == answers[3]) {
        score++;
    }
    */


    var result = document.getElementById('results');

    result.innerHTML = '<h3>You scored  <span>' + score + '</span>  out of  <span>' + total + '</span></h3>';

    return false;

    // alert("You scored " + score + " out of " + total);

} // function scope