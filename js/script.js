console.log("connected");

// load category btn data from api : 1 ===================
const loadCategoryBtnData = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/categories`
  );
  const data = await res.json();
  displayCategoryBtn(data.categories);
};

// load all pets card from api : 2 ========================
const loadPetCardData = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pets`
  );
  const data = await res.json();
  displayPetCard(data.pets);
};

// load pets card by pet category from api : 3 =========================
const loadPetCardByCategoryBtn = async (ctgBtn) => {
  // alert(ctgBtn);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${ctgBtn}`
  );
  const data = await res.json();
  displayPetCard(data.data);
};

// display category btn in the ui by api : 1 =============================
const displayCategoryBtn = (categoryData) => {
  const categoryBtnContainer = document.querySelector(
    "#category-btn-container"
  );
  // console.log(categoryBtnContainer);
  // console.log(categoryData);
  categoryData.forEach((item) => {
    // console.log(item);
    const div = document.createElement("div");
    div.innerHTML = `
        <button onclick = "loadPetCardByCategoryBtn('${item.category}')" class = "btn btn-xs sm:btn-md xl:btn-xl flex gap-2 items-center">
                <img class = "w-4 sm:w-8 xl:w-14 object-cover" src = "${item.category_icon}"/>
                <p class= "text-sm sm:text-lg xl:text-2xl font-semibold">${item.category}</p>
        </button>
    `;
    categoryBtnContainer.appendChild(div);
  });
};

// display pet cards in the ui by api : 2 ==================================
const displayPetCard = (cardsData) => {
  // console.log(cardsData);
  const layoutCard = document.querySelector("#layout-card");
  layoutCard.innerHTML = "";
  // console.log(layoutCard);
  if (cardsData.length === 0) {
    layoutCard.classList.remove("grid");
    layoutCard.innerHTML = `
          <div class ="max-h-min flex flex-col gap-5 items-center justify-center">
              <img class = "max-w-40 max-h-40 object-cover" src = "images/error.webp" />
              <h1 class = "text-lg sm:text-2xl lg:text-4xl font-semibold"> 
                No Information Available
              </h1>
              <p class = "text-xs sm:text-base font-normal opacity-70">This pet category is temporarily unoccupied. New additions are processed regularly—please return soon. </p>
          </div>
    `;
  } else {
    layoutCard.classList.add("grid");
  }
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
              <p>Breed : ${element.breed ? element.breed : "Not Available"}</p>
        </div>
        <div class = "flex gap-2 items-center">
              <i class="fa-solid fa-cake-candles"></i>
              <p>Birth : ${
                element.date_of_birth
                  ? element.date_of_birth.slice(0, 4)
                  : "Not Available"
              }</p>
        </div>
        <div class = "flex gap-2 items-center">
              <i class="fa-solid fa-mercury"></i>
              <p>Gender : ${
                element.gender ? element.gender : "Not Available"
              }</p>
        </div>
        <div class = "flex gap-2 items-center">
              <i class="fa-solid fa-dollar-sign"></i>
              <p>Price : ${element.price ? element.price : "Not Available"}</p>
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
loadCategoryBtnData();
loadPetCardData();
