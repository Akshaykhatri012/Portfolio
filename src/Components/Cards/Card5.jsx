import img1 from "../../assets/images/Flamingo.png";
import "./Card.css";
function Card1() {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="not found" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <div className="card-heading">
          <h4 className="card-title">Flamingo Website</h4>

          <div className="card-heading-btn">
            <button className="card-title-aside">CSS3</button>
            <button className="card-title-aside">ResponsiveUI</button>
          </div>
        </div>
        <p className="card-text text-secondary">
          ⚡A Simple Travel Website made using PURE CSS, which is Responsive
          also, made to illustrate deep understanding of CSS classes and its
          functionalities.
        </p>
        <a
          href="https://akshaykhatri012.github.io/ResWebsite/"
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
