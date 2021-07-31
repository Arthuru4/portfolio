import axios from "axios";

export const getSomeInfo = () => {
  return new Promise(async (res, rej) => {
    try {
      const respData = await axios.get(
        "http://..."
      );
      return res(respData);
    } catch (e) {
      rej(e);
    }
  });
};
