import img1 from "../../assets/images/WorldWise.png";
import "./Card.css";
function Card1() {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="not found" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <div className="card-heading">
          <h4 className="card-title">WorldWise</h4>

          <div className="card-heading-btn">
            <button className="card-title-aside">ReactJs </button>
            <button className="card-title-aside">Router </button>
            <button className="card-title-aside">Leaflet </button>
          </div>
        </div>
        <p className="card-text text-secondary">
          ⚡App locate user’s current location, navigate and access location
          wherever user clicks on map. Unables user to add notes w.r.t cities
          they have visited. Uses Fake Authorization for user login.
        </p>
        <a
          href="https://netlify-worldwise.netlify.app"
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
