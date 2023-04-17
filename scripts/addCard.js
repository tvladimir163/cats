const template = document.getElementById("card-template");
const container = document.querySelector(".cards");
const excludeIds = [106423, 208845, 239745, 256724, 315423, 428578, 507916, 852367];

const addCard = (component, cat, isEdit) => {
  const image = component.querySelector(".card__image");
  const name = component.querySelector(".card__name");
  const favorite = component.querySelector(".card__like");
  const btn = component.querySelector(".card__link");
  const basket = component.querySelector(".card__delete");

  btn.setAttribute("data-id", cat.id);
  basket.setAttribute("data-id", cat.id);

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    editId = btn.dataset.id;
    handleOpen();
  })

  basket.addEventListener("click", async (e) => {
    e.preventDefault();
    if (!excludeIds.includes(+btn.dataset.id)) {
      await deleteCat(btn.dataset.id);
      const removedComponent = document.querySelector(`[data-id="${btn.dataset.id}"]`).parentElement;
      removedComponent.remove();
    } else alert("Этого котика удалить нельзя!!!");
  })
  if (cat.favorite) favorite.style.display = "block";
  else favorite.style.display = "none";
  image.src = cat.image;
  name.innerText = cat.name;
  if (!isEdit) container.append(component);
}

(async function () {
  const cats = await getCats();
  window.localStorage.setItem("cats", JSON.stringify(cats));
  cats.forEach((cat) => {
    const clone = template.content.cloneNode(true);
    addCard(clone, cat, false);
  });
})();

