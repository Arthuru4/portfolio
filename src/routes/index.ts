import HomePage from "../pages/homePage";
import NoMatchPage from "../pages/noMatchPage";
import TodosPage from "../pages/todosPage";
import LibraryPage from "../pages/libraryPage";

export const HomeRoute = {
  component: HomePage,
  exact: true,
  path: "/",
};
export const TodosRoute = {
  component: TodosPage,
  exact: true,
  path: "/marks",
};
export const LibraryRoute = {
  component: LibraryPage,
  exact: true,
  path: "/library",
};

export const NoMatchRoute = {
  component: NoMatchPage,
};
