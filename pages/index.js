import Navbar from "../components/Navbar";
import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div
        className="d-flex justify-content-center align-items-center mx-auto gap-3"
        style={{ maxWidth: "700px" }}
      >
        <div>
          <img
            src="/profile.jpg"
            className="rounded-circle"
            width="250px"
            height="250px"
          />
        </div>
        <div>
          <p className="fw-bold fs-4">Kasiyot Hanphairot</p>
          <p className="text-muted">
            Hi! My name is Kasiyot. Now I am studying in Computer Engineering at
            Chaingmai University. I love programming and play the computer
            games.
          </p>
        </div>
      </div>
      <h3 className="text-center">My Skills and Hobbies</h3>

      <div className="container1">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card shadow" style={{ maxWidth: "20rem" }}>
              <img
                src="/programming.jpg"
                width="317"
                height="175"
                style={{ objectFit: "cover" }}
                className="rounded-2"
              />

              <div className="card-body text-center">
                <h5 className="card-title">Programming</h5>
                <p className="card-text" style={{ color: "grey" }}>
                  I like coding. I can code both python and c++ by using vscode
                  on the desktop.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow" style={{ maxWidth: "20rem" }}>
              <img
                src="/computergame.jpg"
                width="317"
                height="175"
                style={{ objectFit: "cover" }}
                className="rounded-2"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Computer Games</h5>
                <p className="card-text" style={{ color: "grey" }}>
                  I love playing computer games. I usually play computer games
                  more than the mobile games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
