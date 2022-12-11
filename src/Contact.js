function Contact() {
  return (
    <div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 containerSpace">
        <button className="socialIcon" onClick={e => window.open('https://www.linkedin.com/in/danielpaulw/', '_blank')}>
          {/* <a href="" className="socialIcon red"></a> */}
          <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/3be4c7fd423a66db77ea62e233a6a9f9ef809402/src/assets/LinkedIn%20Icon.svg" alt="LinkedIn"></img>
        </button>
        <button className="socialIcon" onClick={e => window.open('https://github.com/danielpaulwill', '_blank')}>
          <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/3be4c7fd423a66db77ea62e233a6a9f9ef809402/src/assets/Github%20Icon.svg" alt="GitHub"></img>
        </button>
        <button className="socialIcon" onClick={e => window.open('https://huntr.co/p/danielpaulw', '_blank')}>
          <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/3be4c7fd423a66db77ea62e233a6a9f9ef809402/src/assets/Huntr%20Icon.svg" alt="Huntr"></img>
        </button>
        <button className="socialIcon" onClick={e => window.open('https://medium.com/@danielpaulwill', '_blank')}>
          <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/3be4c7fd423a66db77ea62e233a6a9f9ef809402/src/assets/Medium%20Icon.svg" alt="Medium"></img>
        </button>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/main/src/assets/1648213964487.jpeg" alt="portrait of Daniel Williams" id="contactPhoto"></img>
          <p className="contactText">Daniel is a problem solver at heart. He has ten years of experience working in the marketing and creative industry. During Daniel’s time in commercial photography, he has excelled at fixing broken processes and eliminating wasted staff hours by creating style guides, establishing standards and best practices. Daniel is an expert at data management and quality assurance.</p>
          <br></br>
          <p className="contactText">He believes in consistently achieving excellence through organization, innovation, and keeping up with current and upcoming technology.</p>
          <br></br>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Contact;
