console.log("connected");

// load category btn data from api===================
const loadCategoryData = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/categories`
  );
  const data = await res.json();
  displayCategoryBtn(data.categories);
};

// load all pets card from api========================
const loadPetCardData = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pets`
  );
  const data = await res.json();
  displayPetCard(data.pets);
};

// display category btn in the ui================================
const displayCategoryBtn = (categoryData) => {
  const categoryBtnContainer = document.querySelector(
    "#category-btn-container"
  );
  // console.log(categoryBtnContainer);
  // console.log(categoryData);
  categoryData.forEach((item) => {
    // console.log(item);
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

// display pet cards in the ui==================================
const displayPetCard = (cardsData) => {
  // console.log(cardsData);
  const layoutCard = document.querySelector("#layout-card");
  cardsData.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.classList = "card bg-base-100 shadow-sm";
    div.innerHTML = `
    <figure class="px-5 pt-5">
      <img
        src="${element.image}"
        class="rounded-xl" />
    </figure>

    <div class="card-body">

        <h2 class="card-title">
            ${element.pet_name}
        </h2>
        <div class = "flex gap-2 items-center">
              <i class="fa-solid fa-border-all"></i>
              <p>Breed : ${element.breed}</p>
        </div>
        <div class = "flex gap-2 items-center">
              <i class="fa-solid fa-cake-candles"></i>
              <p>Birth : ${element.date_of_birth}</p>
        </div>
        <div class = "flex gap-2 items-center">
              <i class="fa-solid fa-mercury"></i>
              <p>Gender : ${element.gender}</p>
        </div>
        <div class = "flex gap-2 items-center">
              <i class="fa-solid fa-dollar-sign"></i>
              <p>Price : ${element.price}</p>
        </div>
    
        <div class="flex justify-between border-t-2 border-gray-300">
            <button class="btn btn-sm  mt-5 border-2 border-gray-200">
                    <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button class="btn btn-sm btn-soft btn-accent mt-5 border-2 border-gray-200">
                  Adopt
            </button>
            <button class="btn btn-sm  btn-soft btn-accent mt-5 border-2 border-gray-200">
                  Details
            </button>
        </div>

    </div>
  
    `;
    layoutCard.appendChild(div);
  });
};

//load api function invocation===========================
loadCategoryData();
loadPetCardData();
