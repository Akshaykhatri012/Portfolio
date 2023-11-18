import React, { useState } from "react";
import "./Qualification.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  function toggleTab(index) {
    setToggleState(index);
  }
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          {/* <div
            onClick={() => toggleTab(2)}
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div> */}
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Graduation</h3>
                <span className="qualification_subtitle">
                  <strong>Ramanujan College, University of Delhi</strong>
                  <br />
                  Bachelor of Science(hons.) in Computer Science |
                  <br />
                  C.G.P.A. = 8.3/10
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2018-21
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            {/*  */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">High School</h3>
                <span className="qualification_subtitle">
                  <strong>Army Public School, Patiala</strong>
                  <br />
                  Physics, Chem, Maths as major | Aggregate = 92.8%
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2016-18
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Senior Secondary</h3>
                <span className="qualification_subtitle">
                  <strong>Army Public School, Patiala</strong>
                  <br />
                  C.G.P.A. = 9.5/10
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2015-16
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/*  */}
            <div className="qualification_data">
              <div></div>

              {/* <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">MovieMaker</h3>
                <span className="qualification_subtitle">Spain-Awjxw</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div> */}
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              {/*<div>
                <h3 className="qualification_title">Product Dsnr</h3>
                <span className="qualification_subtitle">ghj-Awjxw</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

           
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Art Designer</h3>
                <span className="qualification_subtitle">Spain-Awjxw</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">Spain-Awjxw</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div> */}

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
