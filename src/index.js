const submitForm = document.querySelector("form");
console.log(submitForm);

const handleClick = (event) => {
  if (event.target !== event.currentTarget) return;
  event.preventDefault();
  const value = event.target.elements.radio.value;

  getFormResult();

  const currentRating = document.querySelector(".result-current");
  currentRating.innerHTML = `${value} out of 5`;
  console.log(currentRating);
};

submitForm.addEventListener("submit", handleClick);

function getFormResult() {
  document.getElementsByTagName("form")[0].innerHTML = `
  
          <img class="result-icon"
            src="./images/illustration-thank-you.svg"
            alt=""
            width="162"
            height="108"
          />
       
    <div class="result-box">You selected<span class="result-current">out of 5</span></div>
          <h1 class="result-title">Thank you!</h1>
          <p class="result-text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>`;
}
