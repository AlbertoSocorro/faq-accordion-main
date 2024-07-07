document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        const plus = question.querySelector('.plus')
        const minus = question.querySelector('.minus')
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                plus.style.display = 'block';
                minus.style.display = 'none';
            } else {
                answer.style.display = 'block';
                plus.style.display = 'none';
                minus.style.display = 'block';
            }
        })
    })
})