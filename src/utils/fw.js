const NETWORK_ERROR = "Netwoek error, please try again later";

const fw = async ({ url, endPoint, method, body, headers }) => {
  let resRaw;
  try {
    resRaw = await fetch(`${url}${endPoint}`, {
      method,
      body,
      headers,
    });

    if (resRaw.ok) {
      return await resRaw.json();
    }

    if (resRaw.status === 401) {
      return {
        data: null,
        unAuthorized: true,
        message: "unAuthorized",
      };
    }

    const resTxt = await resRaw.text();
    const errObj = JSON.parse(resTxt);

    if (errObj) {
      return {
        data: null,
        unAuthorized: false,
        message: errObj.message,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      data: null,
      unAuthorized: false,
      message: NETWORK_ERROR,
    };
  }
};

export { fw };
