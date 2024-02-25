/**
 * 封装请求头
 */
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "*/*");
myHeaders.append("Connection", "keep-alive");

/**
 * 封装get方法
 * @param {string} url
 * @param {object} params
 * @returns
 */
const get = async (url, params) => {
    return new Promise(async (resolve, reject) => {
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
  
      const urlObject = new URL(url);
      if (params && typeof params === "object") {
        Object.keys(params).forEach((key) =>
          urlObject.searchParams.append(key, params[key])
        );
      }
      // console.log("api url:" + urlObject.toString());
      console.log("urlObject.toString()",urlObject.toString())
      const response = await fetch(urlObject.toString(), requestOptions);

      const result = await response.json();
      if (response.status === 200) {
        resolve(result); // 返回 Promise 对象
      } else {
        reject();
      }
    });
  };
  /**
   * 封装post方法
   * @param {string} url
   * @param {object} params
   * @returns
   */
  const post = async (url, params) => {
    return new Promise(async (resolve, reject) => {
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(params),
        redirect: "follow",
      };
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      if (response.status === 200) {
        resolve(result); // 返回 Promise 对象
      } else {
        reject();
      }
    });
  };
  /**
   * 封装put方法
   * @param {string} url
   * @param {object} params
   * @returns
   */
  const put = async (url, params) => {
    return new Promise(async (resolve, reject) => {
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(params),
        redirect: "follow",
      };
      const response = await fetch(url, requestOptions);
  
      const result = await response.json();
      if (response.status === 200) {
        resolve(result); // 返回 Promise 对象
      } else {
        reject();
      }
    });
  };
  /**
   * 封装del方法
   * @param {string} url
   * @returns
   */
  const del = async (url) => {
    return new Promise(async (resolve, reject) => {
      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      };
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      if (response.status === 200) {
        resolve(result); // 返回 Promise 对象
      } else {
        reject();
      }
    });
  };
  export { get, post, put, del };
