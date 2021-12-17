import { UserList } from "./apiUrl";
import fireAjax from "./api";

export const getUserList = (Input) => {
  return fireAjax({
    method: "GET",
    URL: `${UserList}${Input}&per_page=5`,
  });
};
