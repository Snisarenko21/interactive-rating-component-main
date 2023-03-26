// import "../scss/main.css";
const submitBtn = document.querySelector(".js-btn");

const handleClick = (event) => {
  event.preventDefault();
  console.log("Button was clicked");
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
           
          <div class="result-box__rating">You selected out of 5</div>
          <h1 class="result-box__title">Thank you!</h1>
          <p class="result-box__text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>

      </section>`;
}

// const searchForm = document.querySelector(".container");

// const formClick = (event) => {
//   event.preventDefault();
//   console.log("Button was clicked");
// };

// searchForm.addEventListener("click", handleClick);
