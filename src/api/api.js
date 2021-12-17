import CONFIG from "../config/config";
export default function fireAjax({ method, URL, data, header }) {
  URL = CONFIG.BASEURL + URL;
  if (method === "GET") {
    let headers = {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    };
    return fetch(URL, headers).then(
      (res) => {
        return res;
      },
      (error) => {
        return error;
      }
    );
  }
}
