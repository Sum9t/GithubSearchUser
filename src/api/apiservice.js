import ApiUrl from "./apiUrl";
import fireAjax from "./api";
export default {
    async getUser() {
        return fireAjax({
          method: "GET",
          URL: `${ApiUrl.userList}`,
        });
      },
}