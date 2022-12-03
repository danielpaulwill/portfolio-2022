

function Home() {
  return (
    <div>
      <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/main/src/assets/stretched.jpg" class="img-fluid" alt="Daniel Williams"></img>
      <div className="row">
        <div className="col-md-3 red"></div>
        <div className="col-md-6 buttonMenu">
          <button type="button" class="btn btn-outline-dark btn-lg menuButtonLeft">Projects</button>
          <button type="button" class="btn btn-outline-dark btn-lg menuButtonMiddle">Blogs</button>
          <button type="button" class="btn btn-outline-dark btn-lg menuButtonMiddle">Contact</button>
          <button type="button" class="btn btn-outline-dark btn-lg menuButtonRight">Resume</button>
        </div>
        <div className="col-md-3 red"></div>
      </div>
    </div>
  );
}

export default Home;