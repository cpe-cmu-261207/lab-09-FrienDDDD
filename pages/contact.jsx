import React from "react";
import Navbar from "../components/Navbar";
import {
  IconCamera,
  IconMail,
  IconDeviceMobile,
  IconBrandFacebook,
  IconMicrophone2,
} from "@tabler/icons";
import MainLayout from "../layouts/MainLayout";

export default function contact() {
  return (
    <MainLayout>
      <div className="text-center">
        <img
          src="/profile.jpg"
          width="250"
          height="250"
          style={{ objectFit: "cover" }}
          class="rounded-circle"
        />
      </div>

      <h2 className="text-center bg-white rounded-2">Contact</h2>
      <div className="text-center">
        <p className="d-flex justify-content-center align-item-center">
          <IconCamera />
          <span className="fw-bold">Name : </span>
          Kasiyot Hanphairot
        </p>
        <p className="d-flex justify-content-center align-item-center">
          <IconMicrophone2 />
          <span className="fw-bold">NickName : </span>
          Friend
        </p>
        <p className="d-flex justify-content-center align-item-center">
          <IconBrandFacebook />
          <span className="fw-bold">Facebook : </span>
          <a
            href="https://www.facebook.com/kasiyot.hanphairot/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            https://www.facebook.com/kasiyot.hanphairot/
          </a>
        </p>
        <p className="d-flex justify-content-center align-item-center">
          <IconMail />
          <span className="fw-bold">Email : </span>
          <a
            href="mailto:kasiyot_hanphai@cmu.ac.th"
            style={{ textDecoration: "none" }}
          >
            kasiyot_hanphai@cmu.ac.th
          </a>
        </p>
        <p className="d-flex justify-content-center align-item-center">
          <IconDeviceMobile />
          <span className="fw-bold">Phone : </span>
          095-136-0688
        </p>
      </div>
    </MainLayout>
  );
}
