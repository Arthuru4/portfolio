import React from "react";
import Layout from "./../../components/Layout";
import { observer } from "mobx-react";
import "./index.scss";

const HomePage = observer(() => {
  return (
    <Layout>
      <div className={"content"}>
        <div className={""}>
          <div className={"t1"}>Hi</div>
          <div className={"t1 bsl-3"}>I'm Aleksandr Chernobay</div>
          <div className={"t3 tab-1"}>
            Web apis engineer/front end developer
          </div>
          <div className={"divider"} />
          <div className={"t1 bsl-2 color-yellow"}>Career</div>
          <div>
            <i className={"t3 color-brown tab-1"}>may 2020 - ...</i>
            <div className={"t2 bsl-3 tab-1 color-yellow"}>
              Magora systems -{" "}
              <span className={"color-blue"}> Lead web developer</span>
            </div>
            <div className={"t3 bsl-2 tab-2"}>
              Team lead experience. <br />
              Creating/supporting products mostly based on React, mobx, TS,
              Node. SPA and SSR. And other (in technologies)
            </div>
          </div>
          <div>
            <i className={"t3 color-brown tab-1"}>january 2020 - may 2020</i>
            <div className={"t2 bsl-3 tab-1 color-yellow"}>
              Upwork -{" "}
              <span className={"color-blue"}>Freelance web developer </span>
            </div>
            <div className={"t3 bsl-2 tab-2"}>
              creating/supporting/deploying web products - sites, apis, scripts,
              and other.
            </div>
          </div>
          <div>
            <i className={"t3 color-brown tab-1"}>
              february 2018 – january 2020
            </i>
            <div className={"t2 bsl-3 tab-1 color-yellow"}>
              River-soft - <span className={"color-blue"}> Web developer</span>{" "}
            </div>
            <div className={"t3 bsl-2 tab-2"}>
              Develop and support several big apps with team on JS native, React
              TSX, Vue, Node, Groovy, Phaser v2.6 and others(in skills).
            </div>
          </div>
          <div>
            <i className={"t3 color-brown tab-1"}>2017 - february 2018</i>
            <div className={"t2 bsl-3 tab-1 color-yellow"}>
              Freelance - <span className={"color-blue"}> Web developer</span>{" "}
            </div>
            <div className={"t3 bsl-2 tab-2"}>
              creating scripts on C/C++, creating web-sites using templates.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
});

export default HomePage;
