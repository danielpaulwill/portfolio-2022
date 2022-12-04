function Contact() {
  return (
    <div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 containerSpace">
        <button className="socialIcon">
          <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/3be4c7fd423a66db77ea62e233a6a9f9ef809402/src/assets/LinkedIn%20Icon.svg" alt="LinkedIn"></img>
        </button>
        <button className="socialIcon">
          <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/3be4c7fd423a66db77ea62e233a6a9f9ef809402/src/assets/Github%20Icon.svg" alt="GitHub"></img>
        </button>
        <button className="socialIcon">
          <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/3be4c7fd423a66db77ea62e233a6a9f9ef809402/src/assets/Huntr%20Icon.svg" alt="Huntr"></img>
        </button>
        <button className="socialIcon">
          <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/3be4c7fd423a66db77ea62e233a6a9f9ef809402/src/assets/Medium%20Icon.svg" alt="Medium"></img>
        </button>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <img src="https://raw.githubusercontent.com/danielpaulwill/portfolio-2022/main/src/assets/1648213964487.jpeg" alt="portrait of Daniel Williams" id="contactPhoto"></img>
          <p id="contactText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper, dui vel cursus aliquet, diam erat efficitur erat, eu sagittis urna mi at leo. Proin vel neque lobortis, consequat diam eget, tincidunt nisi. Vivamus porta dolor non mollis interdum. Sed elit arcu, gravida quis suscipit id, feugiat sed turpis. In sed ipsum felis. Aliquam erat volutpat. Aenean hendrerit pulvinar condimentum. Mauris dui nisl, eleifend non posuere eu, consequat sed nisi. Nam eleifend neque a arcu posuere semper.</p>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Contact;
