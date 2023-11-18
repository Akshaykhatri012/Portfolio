import img1 from "../../assets/images/Eat-n-Split.png";
import "./Card.css";
function Card1() {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="not found" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <div className="card-heading">
          <h4 className="card-title">Eat-n-Split</h4>

          <div className="card-heading-btn">
            <button className="card-title-aside">ReactJs</button>
            <button className="card-title-aside">CSS </button>
          </div>
        </div>
        <p className="card-text text-secondary">
          ⚡An interactive Eat & Split bill app which enable friends add, edit,
          delete friend in friends list, allow them to split the bill and update
          the record, uses state management to store data.
        </p>
        <a
          href="https://netlify-eat-n-split.netlify.app"
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
