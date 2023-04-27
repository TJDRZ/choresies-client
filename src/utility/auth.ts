import url from "./APIURL";

const registerUser = async (email: string, password: string) => {
  try {
    const res = await fetch(`${url}/api/person`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("choresies-user", data.token);
    }
    return data;
  } catch (err) {
    window.alert(err);
    return;
  }
};

const loginUser = async (email: string, password: string) => {
  try {
    const res = await fetch(`${url}/api/person/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("choresies-user", data.token);
    }
    return data;
  } catch (err) {
    window.alert(err);
    return;
  }
};

const getUser = async (token: string) => {
  try {
    const res = await fetch(`${url}/api/person/current`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    window.alert(err);
    return;
  }
};

export { registerUser, loginUser, getUser };
