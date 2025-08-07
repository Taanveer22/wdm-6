console.log("connected");

// load category btn data from api===================
const loadCategoryData = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/categories`
  );
  const data = await res.json();
  displayCategoryBtn(data.categories);
};

const displayCategoryBtn = (catData) => {
  const categoryBtnContainer = document.querySelector(
    "#category-btn-container"
  );
  // console.log(categoryBtnContainer);
  // console.log(catData);
  catData.forEach((item) => {
    console.log(item);
    const div = document.createElement("div");
    div.classList =
      "flex gap-2 items-center py-2 sm:py-4 xl:py-6 px-4 sm:px-8 xl:px-12 bg-gray-200";
    div.innerHTML = `
    <img class = "w-4 sm:w-8 xl:w-14 object-cover" src = "${item.category_icon}"/>
    <p class= "text-sm sm:text-lg xl:text-2xl font-semibold">${item.category}</p>
    `;
    categoryBtnContainer.appendChild(div);
  });
};

// final function invocation===========================
loadCategoryData();
