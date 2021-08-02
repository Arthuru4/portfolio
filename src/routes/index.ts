import HomePage from "../pages/homePage";
import NoMatchPage from "../pages/noMatchPage";
import ContactsPage from "../pages/contactsPage";
import NotesPage from "../pages/notesPage";

export const HomeRoute = {
  component: HomePage,
  exact: true,
  path: "/",
};
export const NotesRoute = {
  component: NotesPage,
  exact: true,
  path: "/notes",
};
export const ContactsRoute = {
  component: ContactsPage,
  exact: true,
  path: "/contacts",
};

export const NoMatchRoute = {
  component: NoMatchPage,
};
