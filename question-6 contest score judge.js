function solveContestScoreJudge() {
    let a = parseInt(prompt("Enter number of correct answers (a):"));
    let b = parseInt(prompt("Enter number of partially correct answers (b):"));
    let c = parseInt(prompt("Enter number of wrong answers (c):"));

    let score = (3 * a) + b - (2 * c);

    if (score < 0) {
        score = 0;
    }

    if ((a + b + c) > 50) {
        score -= 10;
    }

    let status = "";
    if (score >= 60) {
        status = "PASS";
    } else {
        status = "FAIL";
    }

    alert(score + ", " + status);
}

solveContestScoreJudge();