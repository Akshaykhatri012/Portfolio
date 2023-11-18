import img1 from "../../assets/images/movieSpace.png";
import "./Card.css";
function Card1() {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="not found" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <div className="card-heading">
          <h4 className="card-title">MovieSpace</h4>

          <div className="card-heading-btn">
            <button className="card-title-aside">ReactJs </button>
            <button className="card-title-aside">RestfulApi </button>
          </div>
        </div>
        <p className="card-text text-secondary">
          ⚡App allows user to search any movie, add it to watchlist, can see
          Imdb rating, can rate it himself and remove it from the list. Uses
          third party library to fetch data and displays it with interactive
          UI/UX responsive design.
        </p>
        <a
          href="https://netlify-moviespace.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="card-subtitle"
        >
          Live demo <i class="bx bx-link-external"></i>
        </a>
      </div>
    </div>
  );
}

export default Card1;
