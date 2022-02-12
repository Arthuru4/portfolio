import React from "react";
import Layout from "./../../components/Layout";

const NotesPage = () => {
  return (
    <Layout>
      <div className={"content"}>
        <div className={"t1"}>FAQ</div>

        <div className={"divider"} />
        <div className={"t1 bsl-2 color-blue cursor-pointer"}>
          {/*<u>Technologies</u>*/}
          <ul>
            <li>
              <i className={"t3 color-brown tab-1"}>
                Total work experience in years:
              </i>
              <span className={"t3 color-yellow tab1"}> since 2016</span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                Office/remote:
              </i>
              <span className={"t3 color-yellow tab1"}> only remote</span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                relocation:
              </i>
              <span className={"t3 color-yellow tab1"}> may be.</span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                prefer chat in:
              </i>
              <span className={"t3 color-yellow tab1"}> telegram: #Arthur4.</span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                FOP/contract:
              </i>
              <span className={"t3 color-yellow tab1"}> yes of course.</span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                Experience separately for programming languages in years:
              </i>
              <span className={"t3 color-yellow tab1"}>
                {" "}
                React/JS since 2018
              </span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                What is the current motivation for changing the current place of
                work and considering vacancies?:
              </i>
              <span className={"t3 color-yellow tab1"}> More money</span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                What are your expectations for a new job?
                Processes/Atmosphere/Stack:
              </i>
              <span className={"t3 color-yellow tab1"}>
                {" "}
                Established processes/Friendly atmosphere/React-TS-mobX and
                other little-by-little
              </span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                What technologies do you want to develop in?:
              </i>
              <span className={"t3 color-yellow tab1"}>
                {" "}
                My main stack - React, TS, mobX.
              </span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                How do you see your further development? Management or
                Technologies, for example:
              </i>
              <span className={"t3 color-yellow tab1"}>
                {" "}
                possible directions: Machine learning/Security/Architecture. I
                can manage but don’t like it - meets take a lot of time.
              </span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                What achievements(interesting or challenging tasks) in your work
                would you highlight?:
              </i>
              <span className={"t3 color-yellow tab1"}>
                {" "}
                I perform any tasks, even unrealistic ones, the only question is
                the time to complete the task.
              </span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                What is your level of English? How do you use at work? Can you
                get an interview?:
              </i>
              <span className={"t3 color-yellow tab1"}>
                {" "}
                My english is enough to chat. In verbal - lot of knowledge, no
                practice. Got few interviews in english(not technical)
              </span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                What are your salary expectations:
              </i>
              <span className={"t3 color-yellow tab1"}>
                {" "}
                In private, please :)
              </span>
            </li>
            <li>
              <i className={"t3 color-brown tab-1"}>
                When are you ready to go to a new job:
              </i>
              <span className={"t3 color-yellow tab1"}>
                {" "}
                Most likely 2 weeks. More precisely in private
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default NotesPage;
