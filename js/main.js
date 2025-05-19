let btn = document.querySelector("button");
let result = document.querySelector("#result");

btn.addEventListener("click", getCoinFlip);

async function getCoinFlip() {
  try {
    const response = await fetch('http://localhost:3000/');
    const data = await response.json();
    result.innerText = data.result
    // alert(`Result: ${data.result}`);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}
