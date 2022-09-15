import React from "react";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

export default function experience() {
  return (
    <MainLayout>
      <div className="container my-5">
        <h1 className="text-center">Experience</h1>
      </div>
      <div className="container1">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card shadow" style={{ maxWidth: "20rem" }}>
              <img
                src="/Timetable-Management.jpg"
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body text-center">
                <h5 className="card-title">TimeManagement</h5>
                <p className="card-text" style={{ color: "grey" }}>
                  TimeManagement that help you to create a free time day on the
                  timetable
                </p>
                <a
                  style={{ color: "green" }}
                  href="https://github.com/gozixq/ComProProject"
                >
                  TimeManagement
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow" style={{ maxWidth: "20rem" }}>
              <img
                src="/scratch.png"
                className="card-img-top"
                alt="Card image cap"
                height="170px"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Scratch Game</h5>
                <p className="card-text" style={{ color: "grey" }}>
                  Game that we made on the scratch project.
                </p>
                <a
                  style={{ color: "green" }}
                  href="https://scratch.mit.edu/projects/565608577?fbclid=IwAR23AvcJ0Eh01cKYtxZf_H0PKQOGIvQ7cRko9MKlPiDNKMccrxu1cgNaylY"
                >
                  Scratch Game
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow" style={{ maxWidth: "20rem" }}>
              <img
                src="/sportday.jpg"
                className="card-img-top"
                alt="Card image cap"
                height="170px"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Sport Day</h5>
                <p className="card-text" style={{ color: "grey" }}>
                  In high school we create a theme that make more attractive in
                  sport day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
