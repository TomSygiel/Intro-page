const sentences = ["tom szczygiel", "front", "end", "developer"];

// let count = 0;
// let index = 0;
// let currentText = '';
// let letter = '';

// (function type() {

//   if (count === sentences.length) {
//     count = 0;
//   }
//   currentText = sentences[count];
//   letter = currentText.slice(0, ++index);

//   document.querySelector('#change').textContent = letter;

//   if (letter.length === currentText.length) {
//     count++;
//     index = 0;
//   }
//   setTimeout(type, 400);

// })();

let part = 0;
let part_index = 0;
let interval_instance;
const elm = document.querySelector('#change');

function Write() {
  let text = sentences[part].substring(0, part_index +1);
  elm.innerHTML = text;
  part_index++;

  if (text === sentences[part]) {
    clearInterval(interval_instance);
    setTimeout(function() {
      interval_instance = setInterval(Delete, 25);
    }, 1000);
  }
}

function Delete() {
  let text = sentences[part].substring(0, part_index -1);
  elm.innerHTML = text;
  part_index--;

  if (text === '') {
    clearInterval(interval_instance);

    if (part == (sentences.length -1))
      part = 0;
    else
      part++;

      part_index = 0;

    setTimeout(function() {
      interval_instance = setInterval(Write, 85);
    }, 400);

  }
}

interval_instance = setInterval(Write, 85);