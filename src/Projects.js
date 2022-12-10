function Projects() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">

          {/* STARBUCKS CONFIDENTIAL */}
          <div className="card cardSpace">
            <div class="card-header">
              <span class="badge text-bg-success">Deployed</span>
            </div>
            <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/main/src/assets/starbucks-preview.jpg" class="" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Starbucks Confidential</h5>
              <p class="card-text">An informational app that brings you the unlisted caffeine content of popular bottled Starbucks drinks.</p>
              {/* <a href="#" className="btn btn-dark btnSpace">Video Demo</a> */}
              <a href="https://starbucks-confidential.netlify.app/" className="btn btn-dark btnSpace" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/danielpaulwill/starbucks-caffeine-react" className="btn btn-dark btnSpace" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>

          {/* WAYFARER */}
          <div className="card cardSpace">
            <div class="card-header">
              <span class="badge text-bg-warning">In Development</span>
            </div>
            <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/main/src/assets/wayfarer-preview.jpg" class="" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Wayfarer: Journey to Understanding</h5>
              <p class="card-text">An 8-bit multiple choice mystery RPG with some shocking twists and turns.</p>
              <a href="https://youtu.be/jjCihhstjx8" className="btn btn-dark btnSpace" target="_blank" rel="noopener noreferrer">Video Demo</a>
              {/* <a href="#" className="btn btn-dark btnSpace disabled">Live Demo</a> */}
              <a href="https://github.com/danielpaulwill/wayfarer-lite-v3" className="btn btn-dark btnSpace" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>

          {/* CRYPTOFINDER */}
          <div className="card cardSpace">
            <div class="card-header">
              <span class="badge text-bg-success">Deployed</span>
            </div>
            <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/main/src/assets/crypto-preview.jpg" class="" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">CryptoFinder</h5>
              <p class="card-text">A cryptocurrency app that allows users to have the information they need to make informed investment decisions.</p>
              {/* <a href="#" className="btn btn-dark btnSpace" target="_blank" rel="noopener noreferrer">Video Demo</a> */}
              <a href="https://cryptofinderr.netlify.app/" className="btn btn-dark btnSpace" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/danielpaulwill/crypto-info-app" className="btn btn-dark btnSpace" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>

        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Projects;
