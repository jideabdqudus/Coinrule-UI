import React from "react";
import "./styles.css";
import { Row, Col } from "antd";
import ATM from "./assets/ATM_Vector.svg";
import Bank from "./assets/Bank_Vector.svg";
import Union from "./assets/Union_Vector.svg";
import UX from "./assets/UX_Vector.svg";
import Slide from "react-reveal/Slide";

const App = () => {
  return (
    <div>
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Slide right>
            <div className="box">
              <h1 className="h1">Our experience</h1>
              <div className="rec"></div>
              <p>
                Coinrule was founded by<b> Gabriel and Oleg</b>. Our backgrounds
                are in banking, fintech, user experience and back-end
                technologies. All of us have previously built companies and
                discovered the ‘magic’ of crypto over the past 3 years.
              </p>

              <br />
              <i className={"italics"}>
                We are committed both to crypto traders and the wider Blockchain
                community as we believe in the possibilities that the technology
                brings for a greater decentralization of wealth and power, a
                more open internet, and much more beyond.
              </i>
            </div>
          </Slide>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Slide left>
            <div className="box2">
              <Row>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <div className="cardLine">
                    <div className="center">
                      <img src={Bank} alt="Bank" width="60" className="imgUI" />
                      <p className="pTag">Banking</p>
                    </div>
                  </div>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <div className={"cardLine2"}>
                    <div className="center">
                      <img
                        src={ATM}
                        alt="ATM"
                        height="70"
                        width="60"
                        className="imgUI"
                      />
                      <p className="pTag">Fintech</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <div className="cardLine">
                    <div className="center">
                      <img src={UX} alt="UX" width="60" className="imgUI" />
                      <p className="pTag">UX</p>
                    </div>
                  </div>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <div className="cardLine2">
                    <div className="center">
                      <img
                        src={Union}
                        alt="Bank"
                        width="60"
                        className="imgUI"
                      />
                      <p className="pTag">Backend</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Slide>
        </Col>
      </Row>
    </div>
  );
};

export default App;
