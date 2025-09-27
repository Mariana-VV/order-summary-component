import "./App.scss";

function App() {
  return (
    <>
      <article className="card">
        <div className="card__image">
          <img
            src={`${import.meta.env.BASE_URL}/assets/images/hero.png`}
            alt="hero image"
          />
        </div>
        <div className="card__content">
          <h1 className="card__title">Order Summary</h1>
          <p className="card__description">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="card__box">
            <div className="card__info">
              <div className="card__plan">
                <div className="card__icon">
                  <img
                    src={`${import.meta.env.BASE_URL}/assets/images/icon.svg`}
                    alt="icon"
                  />
                </div>
                <div className="card__paragraphs">
                  <p>Annual Plan</p>
                  <p>$59.99/year</p>
                </div>
              </div>
            </div>

            <a href="#" className="card__change">
              Change
            </a>
          </div>

          <button className="card__btn">Proceed to Payment</button>
          <button className="card__cancel">Cancel Order</button>
        </div>
      </article>
    </>
  );
}

export default App;
