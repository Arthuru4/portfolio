import React from "react";
import "./index.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { HomeRoute, ContactsRoute, NotesRoute } from "../../routes";

interface IProps
  extends React.HTMLAttributes<HTMLElement>,
    RouteComponentProps {}

const LayoutComponent = (props: IProps) => {
  const { children, history, location } = props;

  const item = location.pathname;
  return (
    <div className="app">
      <header>
        <nav>
          <div
            onClick={() => history.push(HomeRoute.path)}
            className={`nav-btn ${item === HomeRoute.path ? "active" : ""}`}
          >
            Home
          </div>
          <div
            onClick={() => history.push(NotesRoute.path)}
            className={`nav-btn ${item === NotesRoute.path ? "active" : ""}`}
          >
            Notes
          </div>
          <div
            onClick={() => history.push(ContactsRoute.path)}
            className={`nav-btn ${item === ContactsRoute.path ? "active" : ""}`}
          >
            Contacts
          </div>
        </nav>
      </header>
      {children}
      <footer>
        This site does not track you and does not collect any data.
      </footer>
    </div>
  );
};

export default withRouter(LayoutComponent);
