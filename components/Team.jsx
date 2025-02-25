import React from "react";
import "./TeamStyles.css";

const Team = () => {
  return (
    <div className="body">
      <div className="teamsframe">
        <div className="content">
          <div className="topic">Teams</div>
          <h1>Meet the Team Behind GDSC-SUI</h1>
          <h3>
            A passionate team of developers, innovators, and community builders
            driving GDSC-SUI forward.
          </h3>

          <div className="cards">
            <div className="card" id="chapter">
              <img className="lead-image" src="images/leads/chapter.jpg" />
              <div className="lead-info">
                <h3 className="lead-name">Godhuli Vays</h3>
                <p className="position">Chapter Lead</p>
                <div className="links">
                  <div className="link">
                    <button>
                      <img src="icons/linkedin.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/mail.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/twitter.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/github.png" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" id="technical">
              <img className="lead-image" src="images/leads/technical.jpg" />
              <div className="lead-info">
                <h3 className="lead-name">Aryan Karma</h3>
                <p className="position">Technical Lead</p>
                <div className="links">
                  <div className="link">
                    <button>
                      <img src="icons/linkedin.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/mail.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/twitter.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/github.png" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" id="techco">
              <img className="lead-image" src="images/leads/techco.jpg" />
              <div className="lead-info">
                <h3 className="lead-name">Richa Rajput</h3>
                <p className="position">Technical Co-Lead</p>
                <div className="links">
                  <div className="link">
                    <button>
                      <img src="icons/linkedin.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/mail.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/twitter.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/github.png" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" id="webdev">
              <img className="lead-image" src="images/leads/webdev.jpg" />
              <div className="lead-info">
                <h3 className="lead-name">Abhishekh Ojha</h3>
                <p className="position">Web Dev Lead</p>
                <div className="links">
                  <div className="link">
                    <button>
                      <img src="icons/linkedin.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/mail.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/twitter.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/github.png" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" id="web3">
              <img className="lead-image" src="images/leads/web3.jpg" />
              <div className="lead-info">
                <h3 className="lead-name">Samyak Gupta</h3>
                <p className="position">Web3 & Blockchain Lead</p>
                <div className="links">
                  <div className="link">
                    <button>
                      <img src="icons/linkedin.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/mail.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/twitter.png" />
                    </button>
                  </div>
                  <div className="link">
                    <button>
                      <img src="icons/github.png" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
