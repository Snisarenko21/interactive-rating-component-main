// import "../scss/main.css";
const submitForm = document.querySelector("form");
console.log(submitForm);
// const submitBtn = document.querySelector(".js-btn");
// const selectionLink = document.querySelector(".selection-list__link");
// const currentRating = document.querySelector(".current");

const handleClick = (event) => {
  if (event.target !== event.currentTarget) return;
  event.preventDefault();
  const value = event.target.elements.radio.value;
  foo();
  const currentRating = document.querySelector(".current");
  currentRating.innerHTML = `${value} out of 5`;
  console.log(currentRating);
};

submitForm.addEventListener("submit", handleClick);

function foo() {
  document.getElementsByTagName(
    "form"
  )[0].innerHTML = `<section class="thumb-container container">
    <div class="result-box"></div>
          <img class="result-box__icon"
            src="./images/illustration-thank-you.svg"
            alt=""
            width="162"
            height="108"
          />
       
    <div class="result-box__rating">You selected<span class="current"> out of 5</span></div>
          <h1 class="result-box__title">Thank you!</h1>
          <p class="result-box__text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>

      </section>`;
}
// const formData = new FormData(event.target);
// console.dir(submitForm);
// const value = document.querySelector('input[name="radio"]:checked').value;
// console.log(value);
/* <div class="result-box__rating"<p class="message">You selected</p><span class="current"><out of 5</span></div> */
//    <input type="text" name="text" size="43">
// const number = "",
//   rating = 5; //Колличество звёзд
// for (i = 0; i < rating; i++) number += "1";
// document.getElementById("result-box__rating").innerHTML = number;

// searchForm.addEventListener("click", handleClick);
