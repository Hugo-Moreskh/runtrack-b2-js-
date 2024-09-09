let count = 0;

function myAddCount() {
  count++;
  document.getElementById('count-displayer').innerText = count;
}

document.getElementById('add-count-btn').addEventListener('click', myAddCount);
