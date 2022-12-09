function Projects() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card cardSpace">
            <div class="card-header">
              <span class="badge text-bg-primary">Primary</span>
              <span class="badge text-bg-secondary">Secondary</span>
              <span class="badge text-bg-success">Success</span>
              <span class="badge text-bg-danger">Danger</span>
              <span class="badge text-bg-warning">Warning</span>
              <span class="badge text-bg-info">Info</span>
              <span class="badge text-bg-light">Light</span>
              <span class="badge text-bg-dark">Dark</span>
            </div>
            
            <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/main/src/assets/stretched.jpg" class="" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Starbucks Confidential</h5>
              <p class="card-text">An informational app that brings you the unlisted caffeine content of popular bottled Starbucks drinks.</p>
              <a href="#" className="btn btn-dark btnSpace disabled" role="button" aria-disabled="true">Video Demo</a>
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
