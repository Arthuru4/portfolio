import { createContext } from "react";
import { action, computed, observable } from "mobx";

export class UserStore {
  @observable
  private userInfo = {};

  @action
  public async clearAll() {
    this.userInfo = {};
  }

  @computed
  public get userData() {
    return this.userInfo;
  }
}

const userStore = new UserStore();

export const userStoreContext = createContext(UserStore);
export default userStore;
