import img1 from "../../assets/images/Travel_List.png";
import "./Card.css";
function Card1() {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="not found" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <div className="card-heading">
          <h4 className="card-title">Travel List App</h4>

          <div className="card-heading-btn">
            <button className="card-title-aside">ReactJs </button>
            <button className="card-title-aside">CSS </button>
          </div>
        </div>
        <p className="card-text text-secondary">
          ⚡An interactive Travel Todo app which enable user to add, checklist
          and delete various items. Allows user to sort list w.r.t packed,
          ordered and unordered items. Uses derived state, useState hook.
        </p>
        <a
          href="https://akshaykhatri012.github.io/travel-list/"
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
