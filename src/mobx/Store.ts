import { configure } from "mobx";
import userStore, { UserStore } from "./userStore";

configure({
  disableErrorBoundaries: true,
});

const StoreMobx = {
  userStore,
};

export interface IStoreMobx {
  userStore: UserStore;
}

export default StoreMobx;
