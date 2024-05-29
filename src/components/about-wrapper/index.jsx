import React, { memo } from "react";
import Title from "../title";
import { Link } from "react-router-dom";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import Next from "../next";

const AboutWrapper = () => {
  return (
    <div className="about__wrapper" id="about__wrapper">
      <Title title={"About me"} />
      <ul className="about__list">
        <li className="about__item">
          <div className="about__context">
            <Link
              target="_blank"
              className="about__direction"
              to="https://github.com/therealrustamovv"
            >
              Enginering
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              to="https://github.com/therealrustamovv"
              className="about__link"
            >
              View GitHub
            </Link>
          </div>
          <p className="about__text">
            The power of first impressions cannot be underestimated, and the
            gateway to capitalizing on them lies in exceptional website design.
            An outstanding website transcends mere aesthetics and extends its
            influence to encompass seamless functionality and user-friendly
            navigation. Drawing upon my expertise as a seasoned programmer, I
            possess the unique ability to tackle intricate technical challenges
            while crafting websites that exude sleekness and visual allure.
            Moreover, my extensive knowledge of recognized technical standards
            is complemented by my proficiency in modern building practices,
            ensuring that every aspect of your website is finely tuned to
            perfection.
          </p>
        </li>
        <li className="about__item">
          <div className="about__context">
            <Link target="_blank" className="about__direction" to="/projects">
              Product
              <FaGlobeAmericas />
            </Link>
            <Link target="_blank" to="/projects" className="about__link">
              View Products
            </Link>
          </div>
          <p className="about__text">
            While I may not fit the conventional mold of a product manager, my
            diverse skill set in research, product design, and product
            coordination empowers me to drive the growth of a product from its
            inception. As an exceptional analytical thinker, I possess the
            ability to uphold the product's vision throughout its entire
            journey, effectively bridging the technical and product aspects. By
            leveraging my expertise, I can navigate the path from 0 to 1,
            ensuring the product's success at every stage.
          </p>
        </li>
      </ul>
      <p className="about__value">My Reads</p>
      <ul className="about__list">
        <li className="about__item">
          <div className="about__context">
            <Link target="_blank" className="about__direction" to="">
              14-IDUM.<small className="about__min">School</small>
            </Link>
            <Link target="_blank" to="" className="about__link">
              <FaCalendarDays style={{ color: "#c6c6c6", fontSize: "13px" }} />
              2015
            </Link>
          </div>
          <p className="about__text">
            It is not for nothing that they say that the most enjoyable and best
            time of your life is your school years. I spent my childhood here. I
            met many friends, memorable memories and wonderful childhood here.
          </p>
        </li>
        <li className="about__item">
          <div className="about__context">
            <Link target="_blank" className="about__direction" to="/projects">
              Najot ta'lim.<small className="about__min">Training Center</small>
            </Link>
            <Link target="_blank" to="/projects" className="about__link">
              <FaCalendarDays style={{ color: "#c6c6c6", fontSize: "13px" }} />
              2023
            </Link>
          </div>
          <p className="about__text">
            My first interest in web programming and my studies started, and it
            is a valuable place for me, Najot educational center. I learned
            programming from scratch here. I studied here for eight months and
            learned the full Front-end and reached the level of an expert. In
            Sha Allah, I will also learn Go, the back-end language.
          </p>
        </li>
      </ul>
      <p className="about__value">My Playlist</p>
      <ul className="about__list">
        <li className="about__item">
          <div className="about__context">
            <Link
              target="_blank"
              className="about__direction"
              to="https://open.spotify.com/collection/tracks"
            >
              Ru$tamovv.<small className="about__min">Spotify</small>
            </Link>
            <Link
              target="_blank"
              to="https://open.spotify.com/collection/tracks"
              className="about__link"
            >
              Veiw Playlist
            </Link>
          </div>
          <p className="about__text">
            Spotify is the best platform for listening to music. Here are my
            favorite songs. I hear them with pleasure.
          </p>
        </li>
        <li className="about__item">
          <div className="about__context">
            <Link
              target="_blank"
              className="about__direction"
              to="https://open.spotify.com/playlist/2vms6pc0vy8bmKD0Ei2mO8"
            >
              Russian musics.<small className="about__min">Spotify</small>
            </Link>
            <Link
              target="_blank"
              to="https://open.spotify.com/playlist/2vms6pc0vy8bmKD0Ei2mO8"
              className="about__link"
            >
              View Playlist
            </Link>
          </div>
          <p className="about__text">
            This playlist contains music that I listen to in Russian. I listen
            to them when my work is easy, when I am relaxed.
          </p>
        </li>
        <li className="about__item">
          <div className="about__context">
            <Link
              target="_blank"
              className="about__direction"
              to="https://open.spotify.com/playlist/3dKFHksBdzvGwIUegzVGAX"
            >
              English musics.<small className="about__min">Spotify</small>
            </Link>
            <Link
              target="_blank"
              to="https://open.spotify.com/playlist/3dKFHksBdzvGwIUegzVGAX"
              className="about__link"
            >
              View Playlist
            </Link>
          </div>
          <p className="about__text">
            This playlist contains my songs that you can hear me in English. I
            listen to them with pleasure and more when I am alone.
          </p>
        </li>
        <li className="about__item">
          <div className="about__context">
            <Link
              target="_blank"
              className="about__direction"
              to="https://open.spotify.com/playlist/3dKFHksBdzvGwIUegzVGAX"
            >
              UzRap.<small className="about__min">Spotify</small>
            </Link>
            <Link
              target="_blank"
              to="https://open.spotify.com/playlist/3dKFHksBdzvGwIUegzVGAX"
              className="about__link"
            >
              View Playlist
            </Link>
          </div>
          <p className="about__text">
            This playlist contains Uz rap music. I listen to these songs when
            I'm serious, when I need to do things faster.
          </p>
        </li>
      </ul>
      <Next next={"Lets Continue To Projects"} to={"/projects"} />
    </div>
  );
};

export default memo(AboutWrapper);
