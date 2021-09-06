let trueAnswers = ['b', 'a', 'a', 'd'];
let quizForm = document.querySelector('.quiz');
let result = document.querySelector('.results-area');
let displayPercentage = document.querySelector('.displayPercentage');



quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let percentage = 0;
    let selectedAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value, quizForm.q4.value]

    selectedAnswers.forEach((answer, index) => {
        if (answer === trueAnswers[index])
            percentage += 25;
    })
    displayPercentage.textContent = percentage;
})








//let timer = setInterval(() => {
    //result.querySelector('span').textContent = `${displayPercentage}`;
    //if (displayPercentage === percentage) {
        //clearInterval(timer);
   // } else {
        //displayPercentage++
   // }
//}, 20);


