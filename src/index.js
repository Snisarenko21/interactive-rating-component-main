// import "../scss/main.css";
const submitBtn = document.querySelector(".js-btn");
const selectionLink = document.querySelector(".selection-list__link");
const currentRating = document.querySelector(".current");

const handleClick = (event) => {
  if (event.target === event.currentTarget) return;
  event.preventDefault();
};

submitBtn.addEventListener("click", handleClick);

function foo() {
  document.getElementsByTagName(
    "section"
  )[0].innerHTML = `<section class="thumb-container container">
    <div class="result-box"></div>
          <img class="result-box__icon"
            src="./images/illustration-thank-you.svg"
            alt=""
            width="162"
            height="108"
          />
       
    <div class="result-box__rating">You selected<span class="current">0 out of 5</span></div>
          <h1 class="result-box__title">Thank you!</h1>
          <p class="result-box__text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>

      </section>`;
}

/* <div class="result-box__rating"<p class="message">You selected</p><span class="current"><out of 5</span></div> */
//    <input type="text" name="text" size="43">
// const number = "",
//   rating = 5; //Колличество звёзд
// for (i = 0; i < rating; i++) number += "1";
// document.getElementById("result-box__rating").innerHTML = number;

// searchForm.addEventListener("click", handleClick);
