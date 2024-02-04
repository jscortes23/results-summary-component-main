const getResult = async () => {
    const data = await fetch('./data.json')
    const result = await data.json()
    return result;
}

const result = getResult().then(data => 
    updateScore(data)
)

const scoreTotal = document.querySelector('.score__you')
const titleBySummary = document.querySelectorAll('.summary__item__title')
const scoreBySummary = document.querySelectorAll('.summary__score__you')


function updateScore(data) {
    const sumScore = data.map(data => data.score).reduce((a, b) => a + b, 0) 
    
    titleBySummary.forEach((title, index) => {
        title.textContent = data[index].category;
    });
    
    scoreBySummary.forEach((title, index) => {
        title.textContent = data[index].score;
    });
    
    scoreTotal.textContent = Math.floor(sumScore / 4)
}

