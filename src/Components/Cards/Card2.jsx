import img1 from "../../assets/images/Quiz-app.png";
import "./Card.css";
function Card1() {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="not found" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <div className="card-heading">
          <h4 className="card-title">React Quiz App</h4>

          <div className="card-heading-btn">
            <button className="card-title-aside">ReactJs </button>
            <button className="card-title-aside">CSS </button>
          </div>
        </div>
        <p className="card-text text-secondary">
          ⚡Unables user to choose answer amongst MCQs, every question consists
          of different scores calculated after completion of quiz, registers
          highscore and quiz needs to complete within given set of time.
        </p>
        <a
          href="https://netlify-react-quiz-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="card-subtitle"
        >
          Live demo <i class="bx bx-link-external"></i>
        </a>
      </div>
    </div>
  );
}

export default Card1;
