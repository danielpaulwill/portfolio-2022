function Home() {
  
  return (
    <div>
      <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/main/src/assets/stretched.jpg" className="img-fluid" alt="Daniel Williams"></img>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 buttonMenu">
          <button type="button" className="btn btn-outline-dark btn-lg menuButtonLeft">Projects</button>
          <button type="button" className="btn btn-outline-dark btn-lg menuButtonMiddle">Blogs</button>
          <button type="button" className="btn btn-outline-dark btn-lg menuButtonMiddle">Contact</button>
          <button type="button" className="btn btn-outline-dark btn-lg menuButtonRight">Resume</button>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner bottomSpace">
              <div className="carousel-item active" data-bs-interval="5000" >
                <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/main/src/assets/starbucks-preview.jpg" className="d-block w-100" alt="starbucks confidential"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Starbucks Confidential</h5>
                  <p>An informational app that brings you the unlisted caffeine content of popular bottled Starbucks drinks.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000" >
                <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/main/src/assets/wayfarer-preview.jpg" className="d-block w-100" alt="wayfarer"></img>
                <div className="carousel-caption d-none d-md-block outline">
                  <h5>Wayfarer: Journey to Understanding</h5>
                  <p>An 8-bit multiple choice mystery RPG with some shocking twists and turns.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000" >
                <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/main/src/assets/crypto-preview.jpg" className="d-block w-100" alt="crypto finder"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>CryptoFinder</h5>
                  <p>A cryptocurrency app that allows users to have the information they need to make informed investment decisions.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default Home;