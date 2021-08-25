let trueAnswers = ['b', 'a', 'a', 'b'];
let quizForm = document.querySelector('.quiz');
let result = document.querySelector('.results-area');


quizForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let percentage = 0;
    let selectedAnswers = [quizForm.q1.value, quizForm.q2.value, quizform.q3.value, quizform.q4.value]

    selectedAnswers.forEach((answer, index) => {
        if (answer === trueAnswers[index])
            percentage += 25

    })
})

let displayPercentage = 0;

let timer = setInterval(() => {
    result.querySelector('span').textContent = `${displayPercentage}`;
    if (displayPercentage === percentage) {
        clearInterval(timer);
    } else {
        displayPercentage++
    }
})


