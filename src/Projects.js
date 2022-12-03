function Projects() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card">
            <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/main/src/assets/stretched.jpg" class="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-dark btnSpace">Video Demo</a>
              <a href="#" className="btn btn-dark btnSpace">Live Demo</a>
              <a href="#" className="btn btn-dark btnSpace">Repo</a>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Projects;
