const url = "https://cats.petiteweb.dev/api/single/tvladimir163";
const getCats = async () => {
  const response = await fetch(`${url}/show`);
  const result = await response.json();
  return result;
}

const getIdsCats = async () => {
  const response = await fetch(`${url}/ids`);
  const result = await response.json();
  return result;
}

const getCatById = async (id) => {
  const response = await fetch(`${url}/show/${id}`);
  const result = await response.json();
  return result;
}

const addCat = async (body) => {
  const response = await fetch(`${url}/add`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
  const { message } = await response.json();
  console.info(message);
}

const editCat = async (id, body) => {
  const response = await fetch(`${url}/update/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(body),
  });
  const { message } = await response.json();
  console.info(message);
}

const deleteCat = async (id) => {
  const response = await fetch(`${url}/delete/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const { message } = await response.json();
  console.info(message);
}