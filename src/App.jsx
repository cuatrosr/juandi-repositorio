import foto from "./assets/foto_mia_1.png";
import guitarra from "./assets/sticker_guitarra_1.png";
import piano from "./assets/sticker_piano_1.png";
import mkc1 from "./assets/circuito_delay1_2.png";
import mkc2 from "./assets/circuito_reverb1_1.png";
import root from "./assets/fondorecurso_4@4x_1.png";
import flor1 from "./assets/Flores_completas_2.png";
import flor2 from "./assets/Flores_completas_1.png";
import mkc3 from "./assets/circuito_delay1_1.png";
import mkc4 from "./assets/circuito_chorus1_1.png";
import tambores from "./assets/sticker_bongo_1.png";
import ellipse from "./assets/Ellipse_1.png";
import estudio from "./assets/Estudio_3.png";
import card from "./assets/cuadro_de_texto.png";
import contacto from "./assets/frame_contacto.png";
import mkc5 from "./assets/circuito_reverb1_1.png";
import piano5 from "./assets/sticker_piano_5.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [left, setLeft] = useState(false);
  const [center, setCenter] = useState(false);
  const [right, setRight] = useState(false);
  function playLeft() {
    let leftVid = document.getElementById("left-vid");
    if (!left) leftVid.play();
    else leftVid.pause();
    setLeft(!left);
  }
  function playCenter() {
    let leftVid = document.getElementById("center-vid");
    if (!center) leftVid.play();
    else leftVid.pause();
    setCenter(!center);
  }
  function playRight() {
    let leftVid = document.getElementById("right-vid");
    if (!right) leftVid.play();
    else leftVid.pause();
    setRight(!right);
  }
  return (
    <>
      <header>
        <img src={guitarra} className="guitarra" />
        <img src={piano} className="piano" />
        <img src={mkc1} className="mkc1" />
        <img src={mkc2} className="mkc2" />
        <img src={foto} className="foto" />
        <img src={root} className="root" />
      </header>
      <section id="about">
        <div className="about">
          <div>
            <img src={flor1} className="flor1" />
            <img src={flor2} className="flor2" />
            <div id="center-square">
              <svg
                width="30vh"
                height="30vh"
                viewBox="0 0 74 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="FondoRecurso 2 1" clipPath="url(#clip0_1_5)">
                  <g id="Capa 1">
                    <path
                      id="Vector"
                      d="M62.2709 67.6965C62.1743 68.4168 62.2446 69.2776 62.3148 70.1823C62.4466 71.8337 62.5959 73.7046 61.7263 75.3911C60.9007 77.0073 59.3459 77.9735 57.9757 78.8256C57.1675 79.3262 56.4034 79.8006 55.8588 80.3452C55.3493 80.8546 54.8925 81.61 54.4094 82.4006C53.575 83.7884 52.6263 85.3519 50.9838 86.2479C49.4466 87.0823 47.6547 87.0384 46.1088 87.0121C45.1162 86.9945 44.1851 86.9681 43.3946 87.1526C42.604 87.3283 41.7696 87.7499 40.8912 88.1891C39.5648 88.8567 38.0804 89.6033 36.4466 89.6033C36.35 89.6033 36.2621 89.6033 36.1655 89.6033C34.3034 89.5067 32.775 88.4965 31.4223 87.6006C30.6493 87.0911 29.9115 86.608 29.2351 86.3708C28.5061 86.1073 27.6101 86.0107 26.6702 85.9053C25.0628 85.7208 23.2446 85.5188 21.804 84.4121C20.302 83.2614 19.6257 81.5134 19.0371 79.9675C18.7121 79.1154 18.4047 78.3161 18.0007 77.7012C17.6142 77.1215 17.0257 76.533 16.3932 75.9094C15.1898 74.7235 13.8284 73.3796 13.3979 71.4735C13.2047 70.6039 13.7493 69.7431 14.6101 69.5411C15.4973 69.3479 16.3405 69.8837 16.5425 70.7533C16.7709 71.7371 17.6844 72.6418 18.6594 73.608C19.3797 74.3195 20.1263 75.0573 20.7061 75.9269C21.2946 76.8316 21.6811 77.833 22.05 78.808C22.5331 80.0641 22.9811 81.2587 23.7628 81.8472C24.5007 82.4094 25.7304 82.5499 27.0392 82.6904C28.1284 82.8134 29.2527 82.9364 30.3331 83.3229C31.3784 83.7006 32.3094 84.3066 33.2142 84.9039C34.3209 85.633 35.3662 86.3269 36.3588 86.3708C37.2196 86.4235 38.3263 85.8702 39.4682 85.308C40.4871 84.7985 41.5412 84.2715 42.7094 84.008C43.8865 83.7445 45.0635 83.7708 46.1966 83.7884C47.4702 83.8148 48.6824 83.8411 49.4642 83.4107C50.3338 82.9364 50.9838 81.8648 51.6689 80.7317C52.2311 79.8094 52.802 78.8519 53.5925 78.0614C54.4007 77.2533 55.3581 76.656 56.2892 76.0762C57.4047 75.3823 58.45 74.7323 58.8804 73.9067C59.3284 73.0371 59.2229 71.7722 59.1175 70.4283C59.0385 69.3918 58.9507 68.3202 59.1 67.2485C59.2405 66.2121 59.6007 65.2283 59.9432 64.2708C60.4088 62.9884 60.848 61.7762 60.6284 60.7837C60.4351 59.9141 60.9797 59.0533 61.8405 58.8512C62.7189 58.658 63.5797 59.2026 63.773 60.0634C64.2034 61.9783 63.5534 63.7702 62.9736 65.36C62.675 66.1945 62.3851 66.9762 62.2885 67.6702L62.2709 67.6965ZM14.5574 59.4485C16.8763 57.3053 19.3797 55.3553 22.0148 53.581C25.177 53.5722 28.3216 53.783 31.4311 54.2573C32.0723 54.3452 32.7135 53.906 32.8101 53.2472C32.9067 52.5884 32.4588 51.9735 31.8 51.8681C29.7973 51.5607 27.7858 51.385 25.7567 51.2708C27.5398 50.2431 29.3669 49.2681 31.2642 48.4073C31.8702 48.135 32.1425 47.4148 31.8615 46.8087C31.5892 46.2026 30.8689 45.9303 30.2628 46.2114C27.1182 47.6431 24.1142 49.3033 21.277 51.1654C17.8777 51.2181 14.4608 51.5256 11.0439 52.1141C10.3851 52.2283 9.94592 52.8519 10.0601 53.5107C10.1655 54.0992 10.675 54.5121 11.2459 54.5121C11.3162 54.5121 11.3865 54.5121 11.4567 54.4945C13.5121 54.1431 15.5763 53.9235 17.6317 53.7742C16.0067 55.0127 14.4257 56.2952 12.9236 57.683C12.4317 58.1398 12.4054 58.9039 12.8534 59.3871C13.0905 59.6506 13.4155 59.7735 13.7405 59.7735C14.0304 59.7735 14.329 59.6681 14.5574 59.4485ZM37.3689 47.0371C39.4594 46.8877 41.5236 46.8877 43.5878 46.9404C41.8398 48.0033 40.1358 49.1276 38.502 50.3485C37.9662 50.7438 37.8608 51.508 38.2648 52.0438C38.502 52.36 38.8621 52.5269 39.2311 52.5269C39.4858 52.5269 39.7405 52.4479 39.9601 52.281C42.4898 50.3837 45.1777 48.6972 47.9797 47.2039C51.1243 47.5202 54.2338 48.0472 57.273 48.8377C57.3784 48.8641 57.475 48.8729 57.5804 48.8729C58.1162 48.8729 58.6081 48.5127 58.7486 47.9681C58.9155 47.3181 58.529 46.6594 57.879 46.4925C55.9202 45.983 53.9351 45.6053 51.9324 45.2803C53.8121 44.437 55.727 43.6553 57.7034 42.9877C58.3358 42.7769 58.6784 42.0918 58.4675 41.4594C58.2567 40.8269 57.5716 40.4844 56.9392 40.6952C53.6628 41.7931 50.5094 43.1458 47.4966 44.7094C44.1061 44.4107 40.6716 44.3756 37.2108 44.6127C36.5432 44.6566 36.0425 45.2364 36.0865 45.9039C36.1304 46.5715 36.7979 47.0722 37.3777 47.0283L37.3689 47.0371ZM73.804 62.233C73.4615 92.6249 35.2959 109.56 12.7128 88.883C11.3601 87.7587 10.1567 86.5114 9.01484 85.2202C8.48781 91.6587 8.59322 98.106 9.40133 104.544C9.50673 105.212 9.04997 105.836 8.38241 105.941C7.71484 106.047 7.09119 105.59 6.98579 104.922C7.47768 100.882 7.6797 96.8587 7.71484 92.8181C7.64457 89.533 7.53038 86.2479 7.16146 82.9627C6.16889 81.6188 5.2993 80.2046 4.51754 78.7377C4.33308 83.7796 4.51754 88.8127 5.14997 93.8458C5.25538 94.5134 4.79862 95.1371 4.13106 95.2425C3.46349 95.3479 2.83984 94.8911 2.73443 94.2235C3.22633 90.183 3.42835 86.16 3.46349 82.1195C3.41957 80.1519 3.38443 78.1844 3.28781 76.2168C-2.3953 63.2695 -0.533133 47.1073 9.44524 36.3033C20.8729 23.5316 37.1054 21.4762 50.4128 26.8256L29.7006 6.09584C29.2263 5.62151 29.2263 4.85732 29.7006 4.383C30.175 3.90867 30.9392 3.90867 31.4135 4.383L31.677 4.64651C31.677 4.64651 31.6946 4.64651 31.7034 4.64651C38.1594 7.26408 44.9317 5.70057 49.6398 0.570837C50.5094 -0.448082 52.2223 0.658674 51.6865 1.86205C50.1317 5.70057 46.3547 8.52016 42.2351 9.50394C40.3817 9.89921 38.4405 9.88165 36.5696 9.54786L57.3432 30.3215C57.3959 30.3742 57.3871 30.4621 57.4223 30.5235C67.2689 37.0938 74.1642 48.2668 73.7952 62.233H73.804ZM71.1689 62.1276C72.9081 30.7958 32.5378 15.0465 12.4756 38.9296C0.872271 52.2546 2.11079 73.8276 15.752 85.4134C35.902 104.017 70.0709 89.4715 71.1689 62.1276Z"
                      fill="rgba(255, 255, 255, 0.40)"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_5">
                    <rect
                      width="73.7047"
                      height="105.774"
                      fill="white"
                      transform="translate(0.108109 0.17572)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <img src={mkc3} className="mkc3" />
            <img src={mkc4} className="mkc4" />
            <img src={tambores} className="tambores" />
          </div>
          <div className="about-me">
            <img src={card} className="card" />
            <div className="two">
              <img src={estudio} className="estudio" />
              <img src={ellipse} className="ellipse" />
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <img src={mkc5} className="mck5" />
        <img src={piano5} className="piano5" />
        <div className="flex-r">
          <p className="p1">Escucha aquí algo de mi caos</p>
          <div className="flex-rc">
            <div className="test">
              <div className="rc">
                <video
                  id="left-vid"
                  className="left-video"
                  width="320"
                  height="176"
                >
                  <source src="left.mp4" type="video/mp4" />
                </video>
                <p>Me gusta lo urbano</p>
                <button
                  className="button-left"
                  onClick={playLeft}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 85 81"
                    fill="none"
                  >
                    <path
                      d="M77.4706 36.1699C80.8039 38.0944 80.8039 42.9056 77.4706 44.8301L31.7206 71.2439C28.3873 73.1684 24.2206 70.7628 24.2206 66.9138L24.2206 14.0862C24.2206 10.2372 28.3872 7.8316 31.7206 9.7561L77.4706 36.1699Z"
                      fill="#D9D9D9"
                    />
                    <rect y="7" width="19" height="66" rx="5" fill="#D9D9D9" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="test">
              <div className="rc">
                <video
                  id="center-vid"
                  className="center-video"
                  width="320"
                  height="176"
                >
                  <source src="center.mp4" type="video/mp4" />
                </video>
                <p>O algo bien tranqui</p>
                <button
                  className="button-left"
                  onClick={playCenter}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 85 81"
                    fill="none"
                  >
                    <path
                      d="M77.4706 36.1699C80.8039 38.0944 80.8039 42.9056 77.4706 44.8301L31.7206 71.2439C28.3873 73.1684 24.2206 70.7628 24.2206 66.9138L24.2206 14.0862C24.2206 10.2372 28.3872 7.8316 31.7206 9.7561L77.4706 36.1699Z"
                      fill="#D9D9D9"
                    />
                    <rect y="7" width="19" height="66" rx="5" fill="#D9D9D9" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="test">
              <div className="rc">
                <video
                  id="right-vid"
                  className="left-video"
                  width="320"
                  height="176"
                >
                  <source src="right.mp4" type="video/mp4" />
                </video>
                <p>Tambien hago arreglos</p>
                <button
                  className="button-left"
                  onClick={playRight}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 85 81"
                    fill="none"
                  >
                    <path
                      d="M77.4706 36.1699C80.8039 38.0944 80.8039 42.9056 77.4706 44.8301L31.7206 71.2439C28.3873 73.1684 24.2206 70.7628 24.2206 66.9138L24.2206 14.0862C24.2206 10.2372 28.3872 7.8316 31.7206 9.7561L77.4706 36.1699Z"
                      fill="#D9D9D9"
                    />
                    <rect y="7" width="19" height="66" rx="5" fill="#D9D9D9" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <img src={contacto} className="contacto" />
        <div className="text-contact">
          Contacto
          <br />
          <a href="mailto:juan.largo205@gmail.com">juan.largo205@gmail.com</a>
          <br />
          <a href="https://linktr.ee/Objo20">https://linktr.ee/Objo20</a>
        </div>
      </section>
      <nav>
        <div>
          <ul id="navbar">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <div id="square">
                <svg
                  width="34"
                  height="56"
                  viewBox="0 0 74 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="FondoRecurso 2 1" clipPath="url(#clip0_1_5)">
                    <g id="Capa 1">
                      <path
                        id="Vector"
                        d="M62.2709 67.6965C62.1743 68.4168 62.2446 69.2776 62.3148 70.1823C62.4466 71.8337 62.5959 73.7046 61.7263 75.3911C60.9007 77.0073 59.3459 77.9735 57.9757 78.8256C57.1675 79.3262 56.4034 79.8006 55.8588 80.3452C55.3493 80.8546 54.8925 81.61 54.4094 82.4006C53.575 83.7884 52.6263 85.3519 50.9838 86.2479C49.4466 87.0823 47.6547 87.0384 46.1088 87.0121C45.1162 86.9945 44.1851 86.9681 43.3946 87.1526C42.604 87.3283 41.7696 87.7499 40.8912 88.1891C39.5648 88.8567 38.0804 89.6033 36.4466 89.6033C36.35 89.6033 36.2621 89.6033 36.1655 89.6033C34.3034 89.5067 32.775 88.4965 31.4223 87.6006C30.6493 87.0911 29.9115 86.608 29.2351 86.3708C28.5061 86.1073 27.6101 86.0107 26.6702 85.9053C25.0628 85.7208 23.2446 85.5188 21.804 84.4121C20.302 83.2614 19.6257 81.5134 19.0371 79.9675C18.7121 79.1154 18.4047 78.3161 18.0007 77.7012C17.6142 77.1215 17.0257 76.533 16.3932 75.9094C15.1898 74.7235 13.8284 73.3796 13.3979 71.4735C13.2047 70.6039 13.7493 69.7431 14.6101 69.5411C15.4973 69.3479 16.3405 69.8837 16.5425 70.7533C16.7709 71.7371 17.6844 72.6418 18.6594 73.608C19.3797 74.3195 20.1263 75.0573 20.7061 75.9269C21.2946 76.8316 21.6811 77.833 22.05 78.808C22.5331 80.0641 22.9811 81.2587 23.7628 81.8472C24.5007 82.4094 25.7304 82.5499 27.0392 82.6904C28.1284 82.8134 29.2527 82.9364 30.3331 83.3229C31.3784 83.7006 32.3094 84.3066 33.2142 84.9039C34.3209 85.633 35.3662 86.3269 36.3588 86.3708C37.2196 86.4235 38.3263 85.8702 39.4682 85.308C40.4871 84.7985 41.5412 84.2715 42.7094 84.008C43.8865 83.7445 45.0635 83.7708 46.1966 83.7884C47.4702 83.8148 48.6824 83.8411 49.4642 83.4107C50.3338 82.9364 50.9838 81.8648 51.6689 80.7317C52.2311 79.8094 52.802 78.8519 53.5925 78.0614C54.4007 77.2533 55.3581 76.656 56.2892 76.0762C57.4047 75.3823 58.45 74.7323 58.8804 73.9067C59.3284 73.0371 59.2229 71.7722 59.1175 70.4283C59.0385 69.3918 58.9507 68.3202 59.1 67.2485C59.2405 66.2121 59.6007 65.2283 59.9432 64.2708C60.4088 62.9884 60.848 61.7762 60.6284 60.7837C60.4351 59.9141 60.9797 59.0533 61.8405 58.8512C62.7189 58.658 63.5797 59.2026 63.773 60.0634C64.2034 61.9783 63.5534 63.7702 62.9736 65.36C62.675 66.1945 62.3851 66.9762 62.2885 67.6702L62.2709 67.6965ZM14.5574 59.4485C16.8763 57.3053 19.3797 55.3553 22.0148 53.581C25.177 53.5722 28.3216 53.783 31.4311 54.2573C32.0723 54.3452 32.7135 53.906 32.8101 53.2472C32.9067 52.5884 32.4588 51.9735 31.8 51.8681C29.7973 51.5607 27.7858 51.385 25.7567 51.2708C27.5398 50.2431 29.3669 49.2681 31.2642 48.4073C31.8702 48.135 32.1425 47.4148 31.8615 46.8087C31.5892 46.2026 30.8689 45.9303 30.2628 46.2114C27.1182 47.6431 24.1142 49.3033 21.277 51.1654C17.8777 51.2181 14.4608 51.5256 11.0439 52.1141C10.3851 52.2283 9.94592 52.8519 10.0601 53.5107C10.1655 54.0992 10.675 54.5121 11.2459 54.5121C11.3162 54.5121 11.3865 54.5121 11.4567 54.4945C13.5121 54.1431 15.5763 53.9235 17.6317 53.7742C16.0067 55.0127 14.4257 56.2952 12.9236 57.683C12.4317 58.1398 12.4054 58.9039 12.8534 59.3871C13.0905 59.6506 13.4155 59.7735 13.7405 59.7735C14.0304 59.7735 14.329 59.6681 14.5574 59.4485ZM37.3689 47.0371C39.4594 46.8877 41.5236 46.8877 43.5878 46.9404C41.8398 48.0033 40.1358 49.1276 38.502 50.3485C37.9662 50.7438 37.8608 51.508 38.2648 52.0438C38.502 52.36 38.8621 52.5269 39.2311 52.5269C39.4858 52.5269 39.7405 52.4479 39.9601 52.281C42.4898 50.3837 45.1777 48.6972 47.9797 47.2039C51.1243 47.5202 54.2338 48.0472 57.273 48.8377C57.3784 48.8641 57.475 48.8729 57.5804 48.8729C58.1162 48.8729 58.6081 48.5127 58.7486 47.9681C58.9155 47.3181 58.529 46.6594 57.879 46.4925C55.9202 45.983 53.9351 45.6053 51.9324 45.2803C53.8121 44.437 55.727 43.6553 57.7034 42.9877C58.3358 42.7769 58.6784 42.0918 58.4675 41.4594C58.2567 40.8269 57.5716 40.4844 56.9392 40.6952C53.6628 41.7931 50.5094 43.1458 47.4966 44.7094C44.1061 44.4107 40.6716 44.3756 37.2108 44.6127C36.5432 44.6566 36.0425 45.2364 36.0865 45.9039C36.1304 46.5715 36.7979 47.0722 37.3777 47.0283L37.3689 47.0371ZM73.804 62.233C73.4615 92.6249 35.2959 109.56 12.7128 88.883C11.3601 87.7587 10.1567 86.5114 9.01484 85.2202C8.48781 91.6587 8.59322 98.106 9.40133 104.544C9.50673 105.212 9.04997 105.836 8.38241 105.941C7.71484 106.047 7.09119 105.59 6.98579 104.922C7.47768 100.882 7.6797 96.8587 7.71484 92.8181C7.64457 89.533 7.53038 86.2479 7.16146 82.9627C6.16889 81.6188 5.2993 80.2046 4.51754 78.7377C4.33308 83.7796 4.51754 88.8127 5.14997 93.8458C5.25538 94.5134 4.79862 95.1371 4.13106 95.2425C3.46349 95.3479 2.83984 94.8911 2.73443 94.2235C3.22633 90.183 3.42835 86.16 3.46349 82.1195C3.41957 80.1519 3.38443 78.1844 3.28781 76.2168C-2.3953 63.2695 -0.533133 47.1073 9.44524 36.3033C20.8729 23.5316 37.1054 21.4762 50.4128 26.8256L29.7006 6.09584C29.2263 5.62151 29.2263 4.85732 29.7006 4.383C30.175 3.90867 30.9392 3.90867 31.4135 4.383L31.677 4.64651C31.677 4.64651 31.6946 4.64651 31.7034 4.64651C38.1594 7.26408 44.9317 5.70057 49.6398 0.570837C50.5094 -0.448082 52.2223 0.658674 51.6865 1.86205C50.1317 5.70057 46.3547 8.52016 42.2351 9.50394C40.3817 9.89921 38.4405 9.88165 36.5696 9.54786L57.3432 30.3215C57.3959 30.3742 57.3871 30.4621 57.4223 30.5235C67.2689 37.0938 74.1642 48.2668 73.7952 62.233H73.804ZM71.1689 62.1276C72.9081 30.7958 32.5378 15.0465 12.4756 38.9296C0.872271 52.2546 2.11079 73.8276 15.752 85.4134C35.902 104.017 70.0709 89.4715 71.1689 62.1276Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_5">
                      <rect
                        width="73.7047"
                        height="105.774"
                        fill="white"
                        transform="translate(0.108109 0.17572)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </li>
            <li>
              <a href="#work">Mi trabajo</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
