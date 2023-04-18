import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import '.css/dino.jpg';
import DinoIpsum from './project.js';

function getDinos(wordNum) {
  let promise = DinoIpsum.getDinos(wordNum);
  promise.then(function(loremIpsum) {
    printElements(loremIpsum);
  }, function(errorArray) {
    printError(errorArray);
  });
  if (wordNum < 1) {
    return window.alert("enter number enterd below 1, will return 30 dinosaurs for not following rules");
  }
}

//UI Logic

function printElements(data) {
  document.querySelector('#showResponse').innerText = `${data[0]} are all dinosaurs!`;
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing our dino words for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const wordNumber = document.querySelector('#numberOfDino').value;
  getDinos(wordNumber);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});