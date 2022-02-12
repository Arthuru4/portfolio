import React from "react";
import Layout from "./../../components/Layout";
import { observer } from "mobx-react";
import "./index.scss";

const techList = [
  {
    text: "JS",
    logoUrl: "",
  },
  {
    text: "CSS SASS SCSS LESS",
    logoUrl: "",
  },
  {
    text: "React",
    logoUrl: "",
  },
  {
    text: "TypeScript",
    logoUrl: "",
  },
  {
    text: "mobX",
    logoUrl: "",
  },
  {
    text: "NodeJS",
    logoUrl: "",
  },
  {
    text: "Redux",
    logoUrl: "",
  },
  {
    text: "antD",
    logoUrl: "",
  },
  {
    text: "materialUI",
    logoUrl: "",
  },
  {
    text: "Word Press",
    logoUrl: "",
  },
  {
    text: "Digital ocean",
    logoUrl: "",
  },
  {
    text: "Cloudflare",
    logoUrl: "",
  },
  {
    text: "Apache",
    logoUrl: "",
  },
  {
    text: "Nginx",
    logoUrl: "",
  },
  {
    text: "biz-charts",
    logoUrl: "",
  },
  {
    text: "Docker",
    logoUrl: "",
  },
  {
    text: "GitLab",
    logoUrl: "",
  },
  {
    text: "Bitbucket",
    logoUrl: "",
  },
  {
    text: "Jira",
    logoUrl: "",
  },
  {
    text: "Jenkins",
    logoUrl: "",
  },
  {
    text: "Vue",
    logoUrl: "",
  },
  {
    text: "Chrome extensions",
    logoUrl: "",
  },
  {
    text: "Phaser v2.6",
    logoUrl: "",
  },
  {
    text: "JQuery",
    logoUrl: "",
  },
  {
    text: "Bash scripts",
    logoUrl: "",
  },
  {
    text: "Spring framework",
    logoUrl: "",
  },
  {
    text: "Gradle",
    logoUrl: "",
  },
  {
    text: "Rabbit MQ",
    logoUrl: "",
  },
  {
    text: "MySQL",
    logoUrl: "",
  },
  {
    text: "MongoDB",
    logoUrl: "",
  },
  {
    text: "C(long time ago)",
    logoUrl: "",
  },
  {
    text: "C++(long time ago)",
    logoUrl: "",
  },
];
const HomePage = observer(() => {
  return (
    <Layout>
      <div className={"content"}>
        <div className={""}>
          <div className={"main-home"}>
            <div>
              <div className={"t1"}>Hi</div>
              <div className={"t1 bsl-3"}>I'm Aleksandr Chernobay</div>
              <div className={"t3 tab-1"}>
                Web apis engineer/front end developer
              </div>
            </div>
            <div>
              <div> Kremenchug, Ukraine, 39627</div>
              <div>(+3) (8096) 023-26-62</div>
              <div>
                <span className={"color-yellow"}>telegram: </span>
                <span className={"color-blue"}>@Arthuru4</span>
              </div>
              <div>
                <span className={"color-yellow"}>email: </span>
                <span className={"color-blue"}>chernobaay@gmail.com</span>
              </div>
              <div className={"soc-links"}>
                <i
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%87%D0%B5%D1%80%D0%BD%D0%BE%D0%B1%D0%B0%D0%B9-b38577197/",
                      "_blank"
                    );
                  }}
                  className="ri-linkedin-box-line"
                />
                <i
                  onClick={() => {
                    window.open(
                      "https://www.xing.com/profile/Aleksandr_Chernobai",
                      "_blank"
                    );
                  }}
                  className="ri-xing-line"
                />
                <i
                  onClick={() => {
                    window.open("https://github.com/Arthuru4", "_blank");
                  }}
                  className="ri-github-line"
                />
              </div>
            </div>
          </div>
          <div className={"divider"} />
          <div className={"t1 bsl-2 color-blue cursor-pointer"}>
            <u> Career</u>
          </div>
          <div className={"career-item flex"}>
            <i className="ri-checkbox-blank-circle-fill icon" />
            <div>
              <i className={"t3 color-brown tab-1"}>aug 2021 - till now</i>
              <div className={"t2 bsl-3 tab-1 color-yellow"}>
                Saldo Apps:{" "}
                <span className={"color-blue"}> Front end engineer</span>
              </div>
              <div className={"t3 bsl-2 tab-2"}>
                Single web developer on few projects. <br />
                Creating/supporting products mostly based on React, mobx, TS, a
                little bit Word press.
              </div>
            </div>
          </div>
          <div className={"career-item flex"}>
            <i className="ri-checkbox-blank-circle-line icon" />
            <div>
              <i className={"t3 color-brown tab-1"}>may 2020 - aug 2021</i>
              <div className={"t2 bsl-3 tab-1 color-yellow"}>
                Magora systems:{" "}
                <span className={"color-blue"}> Lead web developer</span>
              </div>
              <div className={"t3 bsl-2 tab-2"}>
                Team lead experience. <br />
                Creating/supporting products mostly based on React, mobx, TS,
                Node. SPA and SSR.
              </div>
            </div>
          </div>
          <div className={"career-item flex"}>
            <i className="ri-checkbox-blank-circle-line icon" />
            <div>
              <i className={"t3 color-brown tab-1"}>january 2020 - may 2020</i>
              <div className={"t2 bsl-3 tab-1 color-yellow"}>
                Upwork:{" "}
                <span className={"color-blue"}>Freelance web developer </span>
              </div>
              <div className={"t3 bsl-2 tab-2"}>
                creating/supporting/deploying web products - sites, apis,
                scripts, and other.
              </div>
            </div>
          </div>
          <div className={"career-item flex"}>
            <i className="ri-checkbox-blank-circle-line icon" />
            <div>
              <i className={"t3 color-brown tab-1"}>
                february 2018 – january 2020
              </i>
              <div className={"t2 bsl-3 tab-1 color-yellow"}>
                River-soft: <span className={"color-blue"}> Web developer</span>{" "}
              </div>
              <div className={"t3 bsl-2 tab-2"}>
                Develop and support several big apps with team on JS native,
                React TSX, Vue, Node, Groovy, Phaser v2.6 and others(in
                technologies).
              </div>
            </div>
          </div>
          <div className={"career-item flex"}>
            <i className="ri-checkbox-blank-circle-line icon" />
            <div>
              <i className={"t3 color-brown tab-1"}>2016 - february 2018</i>
              <div className={"t2 bsl-3 tab-1 color-yellow"}>
                Freelance: <span className={"color-blue"}> Web developer</span>{" "}
              </div>
              <div className={"t3 bsl-2 tab-2"}>
                creating scripts on C/C++, creating web-sites using templates.
              </div>
            </div>
          </div>
        </div>
        <div className={"divider"} />
        <div>
          <div className={"t1 bsl-2 color-blue cursor-pointer"}>
            <u>Technologies</u>
            <div>
              <i className={"t3 color-brown"}>
                in the priority of the frequency of use
              </i>
            </div>
          </div>
          <div className={"tech"}>
            {techList.map((el, index) => (
              <div
                key={el.text}
                className={`${index % 2 ? "color-yellow" : "color-blue"}`}
              >
                {el.text}
              </div>
            ))}
          </div>
          <br />
          <div className={"t1 bsl-2 color-blue cursor-pointer"}>
            <u>Languages: </u>
          </div>
          <div>
            Ukrainian(native), Russian(native), English(pre-intermediate)
          </div>
        </div>
        <div className={"divider"} />
        <div>
          <div className={"t1 bsl-2 color-blue cursor-pointer"}>
            <u>Hobbies: </u>
          </div>
          <div>Yoga, Health care, Financial education</div>
        </div>
      </div>
    </Layout>
  );
});

export default HomePage;
