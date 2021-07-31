import React from "react";
import "./index.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { HomeRoute, LibraryRoute, TodosRoute } from "../../routes";

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
            onClick={() => history.push(TodosRoute.path)}
            className={`nav-btn ${item === TodosRoute.path ? "active" : ""}`}
          >
            Todos
          </div>
          <div
            onClick={() => history.push(LibraryRoute.path)}
            className={`nav-btn ${item === LibraryRoute.path ? "active" : ""}`}
          >
            Library
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
