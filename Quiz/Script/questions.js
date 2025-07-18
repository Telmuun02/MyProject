import { questions } from "../QuestionData/Question.js";

let index = 0;
let points = 0;
let allPoints =0;

function updateBody() {
  if (index >= questions.length) {
    document.querySelector(".body").innerHTML = `<h2>Тоглоом дууслаа!</h2>`;
    return;
  }

  // 1. Асуулт, сонголтуудыг гаргах
  document.querySelector(".body").innerHTML = `
    <div class="basic">
      <h2 class="number">Question #${index + 1}</h2>
      <div class="question">${questions[index].question}</div>
      <div class="grid-answers">
        <button class="answer">A. ${questions[index].options[0]}</button>
        <button class="answer">B. ${questions[index].options[1]}</button>
        <button class="answer">C. ${questions[index].options[2]}</button>
        <button class="answer">D. ${questions[index].options[3]}</button>
      </div>
    </div>
  `;

  // 2. Сонголтууд дээр click listener нэмэх
  const buttons = document.querySelectorAll('.answer');
  let answered = false;

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      if (answered) return;
      answered = true;

      const clickedText = event.target.textContent.slice(3).trim();

      // 3. Зөв эсвэл буруу хариултыг өнгөөр тэмдэглэх
      if (clickedText === questions[index].correctAnswer) {
        event.target.style.backgroundColor = 'green';
        event.target.style.color = 'white';
        points ++;
      } else {
        event.target.style.backgroundColor = 'red';
        event.target.style.color = 'white';

        // Зөв хариултыг ногоороор харуулах
        buttons.forEach(btn => {
          if (btn.textContent.slice(3).trim() === questions[index].correctAnswer) {
            btn.style.backgroundColor = 'green';
            btn.style.color = 'white';
          }
        });
      }

      // 4. 1.5 секунд хүлээгээд дараагийн асуулт руу шилжих
      setTimeout(() => {
        index++;
        updateBody();
      }, 1500);
    });
  });
}

updateBody();