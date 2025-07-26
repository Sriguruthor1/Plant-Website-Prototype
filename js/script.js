// ========== PRODUCT DATA ==========
const productsPage1 = [ 
  { id: 1, name: "Lucky Bonsai Plant", price: 290, rating: 4.8, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ecec09f8-b479-42a2-9e2a-c6ce880a87e4.png", tags: ["Small Indoor Plant", "Sunlight: Low", "Water: Medium"] },
  { id: 2, name: "Lucky Jade Plant", price: 340, rating: 4.2, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2badeaf6-a633-402c-a190-db5e0e7382ac.png", tags: ["Small Indoor Plant", "Sunlight: Medium", "Water: Low"] },
  { id: 3, name: "Zamiya Green Plant", price: 260, rating: 4.5, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2f18c0f1-12b8-45b2-b4b4-5091cd4d7394.png", tags: ["Medium Indoor Plant", "Sunlight: Low", "Water: Medium"] },
  { id: 4, name: "Spider Plant", price: 250, rating: 4.0, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0ce8f00d-9b39-4e95-88b4-f1733c99c6a0.png", tags: ["Small Indoor Plant", "Sunlight: Medium", "Water: High"] },
  { id: 5, name: "Lucky Bamboo Plant", price: 280, rating: 4.5, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b0a9f233-f3f6-46eb-857d-e013311a8a1d.png", tags: ["Small Indoor Plant", "Sunlight: Low", "Water: High"] },
  { id: 6, name: "Aglaonema Red Plant", price: 580, rating: 4.7, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/42c150a9-7f12-420e-aa26-cb1d119e6279.png", tags: ["Medium Indoor Plant", "Sunlight: Low", "Water: Medium"] },
  { id: 7, name: "Snake Plant", price: 560, rating: 4.6, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4761e73c-46bd-487d-8f4c-dfdff8ddb6ef.png", tags: ["Medium Indoor Plant", "Sunlight: Low", "Water: Low"] },
  { id: 8, name: "Rhoeo Plant", price: 180, rating: 4.1, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f40c2768-42e0-44fe-9f14-d652ec6f51aa.png", tags: ["Small Indoor Plant", "Sunlight: Medium", "Water: Medium"] }
];

const productsPage2 = [
  { id: 9, name: "Oyster Plant", price: 190, rating: 4.8, sale: false, img: "image/plants/oyster.webp", tags: ["Medium Indoor Plant", "Sunlight: Medium", "Water: Medium"] },
  { id: 10, name: "Lucky Jade Plant", price: 290, rating: 4.8, sale: false, img: "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80&crop=entropy", tags: ["Large Indoor Plant", "Sunlight: High", "Water: Low"] },
  { id: 11, name: "Peacock Plant", price: 720, rating: 4.8, sale: false, img: "image/plants/Peacok pl.webp", tags: ["Large Indoor Plant", "Sunlight: High", "Water: Medium"] },
  { id: 12, name: "Peparomia Plant", price: 390, rating: 4.8, sale: false, img: "image/plants/Peperomia.webp", tags: ["Medium Indoor Plant", "Sunlight: Medium", "Water: Medium"] },
  { id: 13, name: "Philodendron Plant", price: 290, rating: 4.8, sale: false, img: "image/plants/philiyodendro pl.webp", tags: ["Large Indoor Plant", "Sunlight: Medium", "Water: High"] },
  { id: 14, name: "Syngonium Plant", price: 690, rating: 4.8, sale: false, img: "image/plants/Syngo pl.webp", tags: ["Large Indoor Plant", "Sunlight: High", "Water: High"] },
  { id: 15, name: "Calathiya Plant", price: 180, rating: 4.1, sale: false, img: "image/plants/Calathiya md.webp", tags: ["Medium Indoor Plant", "Sunlight: Medium", "Water: Low"] },
  { id: 16, name: "Aglaonema Ice Plan", price: 280, rating: 4.5, sale: false, img: "image/plants/Agloanima md.webp", tags: ["Medium Indoor Plant", "Sunlight: Low", "Water: Medium"] }
];

const productsPage3 = [
  { id: 17, name: "Neem Cake Powder", price: 880, rating: 4.5, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8a3e5225-b662-4a9f-82e7-29f53d4db30b.png", tags: ["Plant Food"] },
  { id: 18, name: "All in One plant care", price: 580, rating: 4.5, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89da9f3c-1171-4385-b952-892fa8bd21a8.png", tags: ["Plant Care"] },
  { id: 19, name: "Cow dung manure", price: 560, rating: 4.3, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/923607c3-2067-4eed-84f7-d50123744898.png", tags: ["Plant Food"] },
  { id: 20, name: "Cocopet", price: 180, rating: 4.1, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89d46135-8cf9-4d33-9afb-2ea2dc9e0d30.png", tags: ["Plant Care"] },
  { id: 21, name: "Water Globe", price: 790, rating: 4.8, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/87180d64-b87b-4194-b277-20c90cbe6f08.png", tags: ["Plant Care"] },
  { id: 22, name: "Vermicompost", price: 540, rating: 4.2, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/06499448-77ae-41bf-8b1a-7c082dbc6530.png", tags: ["Plant Food"] },
  { id: 23, name: "Plant Straw", price: 250, rating: 4.0, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7c287d6d-1abb-4aae-8871-e8a3c979599d.png", tags: ["Plant Care"] },
  { id: 24, name: "Water Meter", price: 290, rating: 4.8, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d9cec746-c4e6-4ae9-9bcb-3956c46cbb53.png", tags: ["Plant Care"] }
];

const productsPage4 = [
  { id: 25, name: "Neem Cake Powder 5Kg", price: 880, rating: 4.5, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9c84be3c-f590-4174-97fa-257c2298f9c1.png", tags: ["Plant Food", "Bulk"] },
  { id: 26, name: "Cow dung manure 3Kg", price: 560, rating: 4.3, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49c39532-230b-4378-9dc7-912ebcca7374.png", tags: ["Plant Food", "Bulk"] },
  { id: 27, name: "Cocopet Soil Mix", price: 180, rating: 4.1, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1d458839-4dc4-4e3d-9752-eadd53693adf.png", tags: ["Plant Care", "Soil"] },
  { id: 28, name: "Vermicompost 5Kg", price: 540, rating: 4.2, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7cb29cad-3b49-43e4-8d56-8f8af9e04fd8.png", tags: ["Plant Food", "Bulk"] },
  { id: 29, name: "Pot Soil", price: 290, rating: 4.8, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1880282e-aabc-44cd-bcc1-3b371ea50ca5.png", tags: ["Plant Care", "Soil"] },
  { id: 30, name: "Vermicompost 3Kg", price: 540, rating: 4.2, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1e52f44-8a3d-4b19-987b-2dcba99a3080.png", tags: ["Plant Food", "Bulk"] },
  { id: 31, name: "Neem Cake Powder 3Kg", price: 880, rating: 4.5, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd281220-912b-4e67-a462-869e38491c2d.png", tags: ["Plant Food", "Bulk"] },
  { id: 32, name: "Cow dung manure 3Kg", price: 560, rating: 4.3, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/61d8c477-2532-4f8e-9b21-eecaa6898cc3.png", tags: ["Plant Food", "Bulk"] }
];

const productsPage5 = [
  { id: 33, name: "Organic Root Booster", price: 650, rating: 4.6, sale: true, img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80", tags: ["Plant Care", "Booster"] },
  { id: 34, name: "Compost Activator", price: 490, rating: 4.4, sale: false, img: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80", tags: ["Plant Care", "Booster"] },
  { id: 14, name: "Syngonium Plant", price: 690, rating: 4.8, sale: false, img: "image/plants/Syngo pl.webp", tags: ["Large Indoor Plant", "Sunlight: High", "Water: High"] },
];


const bestSellingProducts = [
  { id: 101, name: "Water Globe", price: 790, rating: 4.8, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1b9f1c0c-55be-456b-bf25-e4f2b52d34bd.png", tags: ["Plant Care"] },
  { id: 102, name: "Vermicomposit", price: 540, rating: 4.2, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0ff34abc-9da6-4174-9583-92e3dcef33df.png", tags: ["Plant Food"] },
  { id: 103, name: "Plant Straw", price: 250, rating: 4.0, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67d4915a-22ab-4614-ab03-0614459c66ef.png", tags: ["Plant Care"] },
  { id: 104, name: "Water meter", price: 290, rating: 4.8, sale: false, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/09d37bc4-b40a-41bd-bf4f-beacc34d9508.png", tags: ["Plant Care"] },
  { id: 105, name: "Oyster Plant with Self Watering Plant", price: 190, rating: 4.8, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5184e008-7897-4754-9f96-4d19f91c564c.png", tags: ["Medium Indoor Plant", "Sunlight: Medium", "Water: High"] },
  { id: 106, name: "Lucky Jade Plant with Self Watering Plant", price: 290, rating: 4.8, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/43ca411e-d3ee-40a9-8657-1aa78eecc5ec.png", tags: ["Large Indoor Plant", "Sunlight: High", "Water: Low"] },
  { id: 107, name: "Peacock Plant with Self Watering Plant", price: 720, rating: 4.8, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4b6eb258-7183-421b-9acc-a47d04dbfa00.png", tags: ["XL Indoor Plant", "Sunlight: High", "Water: Medium"] },
  { id: 108, name: "Peparomia Plant with Self Watering Plant", price: 390, rating: 4.8, sale: true, img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e84ad105-6164-4169-89ad-d06ce5833b55.png", tags: ["Medium Indoor Plant", "Sunlight: Medium", "Water: Medium"] }
];

const productsPage6 = [
  { 
    id: 35, 
    name: "Majestic Rubber Plant", 
    price: 890, 
    rating: 4.9, 
    sale: true, 
    img: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85", 
    tags: ["XL Indoor Plant", "Sunlight: Medium", "Water: Medium"] 
  },
  { 
    id: 36, 
    name: "Giant Fiddle Leaf Fig", 
    price: 1200, 
    rating: 4.8, 
    sale: false, 
    img: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e", 
    tags: ["XL Indoor Plant", "Sunlight: High", "Water: Medium"] 
  },
  { 
    id: 37, 
    name: "Tall Areca Palm", 
    price: 1050, 
    rating: 4.7, 
    sale: true, 
    img: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be", 
    tags: ["XL Indoor Plant", "Sunlight: High", "Water: High"] 
  },
  { 
    id: 38, 
    name: "Broad Monstera Deliciosa", 
    price: 1100, 
    rating: 4.9, 
    sale: false, 
    img: "https://images.unsplash.com/photo-1517848568502-d03fa74e1964", 
    tags: ["XL Indoor Plant", "Sunlight: Medium", "Water: Medium"] 
  },
  { 
    id: 39, 
    name: "Massive Snake Plant", 
    price: 880, 
    rating: 4.6, 
    sale: false, 
    img: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80&fit=facearea&facepad=4", 
    tags: ["XL Indoor Plant", "Sunlight: Low", "Water: Low"] 
  },
  { 
    id: 40, 
    name: "Oversized ZZ Plant", 
    price: 950, 
    rating: 4.5, 
    sale: true, 
    img: "https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg", 
    tags: ["XL Indoor Plant", "Sunlight: Medium", "Water: Low"] 
  },
  { 
    id: 41, 
    name: "Large Rubber Bush", 
    price: 870, 
    rating: 4.7, 
    sale: false, 
    img: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg", 
    tags: ["XL Indoor Plant", "Sunlight: Medium", "Water: High"] 
  },
  { 
    id: 42, 
    name: "Huge Peace Lily", 
    price: 990, 
    rating: 4.8, 
    sale: true, 
    img: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=webp&w=1500&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.7", 
    tags: ["XL Indoor Plant", "Sunlight: Low", "Water: Medium"] 
  }
];


// ========== PRODUCT DATA ========== 
const allProducts = [
  ...productsPage1,
  ...productsPage2,
  ...productsPage3,
  ...productsPage4,
  ...productsPage5,
  ...productsPage6
];

let filteredProducts = [...allProducts];
let productsGrid;
let bestGrid;
let priceFilter, sizeFilter, sunlightFilter, waterFilter;
let currentPage = 1;
const PRODUCTS_PER_PAGE = 9;
let newCartX = [];

const recommendedProducts = [
  {
    name: "Aglaonema Ice Plant",
    price: 280,
    img: "image/plants/aglonima.webp",
    rating: 4.5
  },
  {
    name: "Lucky Jade Plant",
    price: 290,
    img: "image/plants/jade plant.jpg",
    rating: 4.8
  }
];

// ========== RENDER PRODUCTS ==========
function renderProducts(products, container) {
  container.innerHTML = "";

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <div class="img-wrapper">
        ${product.sale ? `<span class="sale-label">Sale</span>` : ""}
        <img src="${product.img}" alt="${product.name}" />
      </div>
      <div class="product-title">
        <div>${product.name}</div>
        <div class="product-rating">
          <svg><path d="M12 17.27L18.18 21 16.54 13.97 22..." /></svg>
          ${product.rating}
        </div>
      </div>
      <div class="product-price">₹${product.price}</div>
      <button class="btn-add-basket" onclick="addNewCartXItem('${product.name}', ${product.price}, '${product.img}')">
        Add to Basket
      </button>
    `;
    container.appendChild(productCard);
  });
}



function renderPaginatedProducts(page = 1) {
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const paginated = filteredProducts.slice(start, end);
  renderProducts(paginated, productsGrid);
  currentPage = page;
  renderPaginationControls();
}

// ========== CATEGORY SCROLL BUTTON FILTER ==========
function setupCategoryScrollFilter() {
  const categoryButtons = document.querySelectorAll('.category-item');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.dataset.category;

      filteredProducts = allProducts.filter(product =>
        product.tags.includes(selectedCategory)
      );

      const heading = document.getElementById('category-heading');
      heading.innerText = selectedCategory;
      heading.style.display = 'block';

      document.querySelectorAll('.top-banner, .discount-banner, .promo-yellow-banner').forEach(el => {
        el.style.display = 'none';
      });

      renderPaginatedProducts(1);
    });
  });
}

function renderCategories() {
  const categories = [
    { name: "XL Indoor Plant", img: "image/plants/black rubber md.webp" },
    { name: "Large Indoor Plant", img: "image/plants/Fidal fig pl.webp" },
    { name: "Medium Indoor Plant", img: "image/plants/bamboo.webp" },
    { name: "Small Indoor Plant", img: "image/plants/Calathiya md.jpg" },
    { name: "Plant Food", img: "image/plants/vermi.jpg" },
    { name: "Plant Care", img: "image/plants/plant care.png" }
  ];

  const categoryScroll = document.querySelector(".category-scroll");
  categoryScroll.innerHTML = "";

  categories.forEach(category => {
    const categoryItem = document.createElement("div");
    categoryItem.className = "category-item";
    categoryItem.setAttribute("data-category", category.name);
    categoryItem.setAttribute("tabindex", 0);
    categoryItem.style.cursor = "pointer";

    categoryItem.innerHTML = `
      <img src="${category.img}" alt="${category.name} icon" />
      ${category.name}
    `;
    categoryScroll.appendChild(categoryItem);
  });
}



// ========== RESET CATEGORY ==========
document.getElementById("reset-category")?.addEventListener("click", () => {
  filteredProducts = [...allProducts];
  renderPaginatedProducts(1);

  document.querySelectorAll('.top-banner, .discount-banner, .promo-yellow-banner').forEach(el => {
    el.style.display = '';
  });

  document.getElementById('category-heading').style.display = 'none';
});

// ========== FILTER FUNCTIONALITY ==========
function setupFilters() {
  [priceFilter, sizeFilter, sunlightFilter, waterFilter].forEach(filter => {
    filter.addEventListener('change', applyFilters);
  });
}

function applyFilters() {
  const sizeValue = sizeFilter.value;
  const sunlightValue = sunlightFilter.value;
  const waterValue = waterFilter.value;
  const priceValue = priceFilter.value;

  filteredProducts = [...allProducts];

  if (sizeValue !== 'default') {
    filteredProducts = filteredProducts.filter(product =>
      product.tags.some(tag => {
        if (sizeValue === 'xl') return tag.includes('XL Indoor Plant');
        if (sizeValue === 'l') return tag.includes('Large Indoor Plant');
        if (sizeValue === 'm') return tag.includes('Medium Indoor Plant');
        if (sizeValue === 's') return tag.includes('Small Indoor Plant');
        return false;
      })
    );
  }

  if (sunlightValue !== 'default') {
    filteredProducts = filteredProducts.filter(product =>
      product.tags.some(tag => tag.includes(`Sunlight: ${sunlightValue.charAt(0).toUpperCase() + sunlightValue.slice(1)}`))
    );
  }

  if (waterValue !== 'default') {
    filteredProducts = filteredProducts.filter(product =>
      product.tags.some(tag => tag.includes(`Water: ${waterValue.charAt(0).toUpperCase() + waterValue.slice(1)}`))
    );
  }

  if (priceValue !== 'default') {
    filteredProducts.sort((a, b) => {
      return priceValue === 'lowhi' ? a.price - b.price : b.price - a.price;
    });
  }

  renderPaginatedProducts(1);
}

// ========== ON PAGE LOAD ==========
document.addEventListener("DOMContentLoaded", () => {
  productsGrid = document.getElementById("products-grid");
  bestGrid = document.getElementById("products-grid-best");

  priceFilter = document.querySelector('[aria-label="Sort by Price"]');
  sizeFilter = document.querySelector('[aria-label="Choose Size"]');
  sunlightFilter = document.querySelector('[aria-label="Sun Light Requirements"]');
  waterFilter = document.querySelector('[aria-label="Water Level Requirements"]');

  filteredProducts = [...allProducts];
  renderPaginatedProducts(1);

  if (bestGrid) {
    renderProducts(bestSellingProducts, bestGrid);
  }

  renderCategories();
  setupCategoryScrollFilter();
  setupFilters();

  const cartBtn = document.getElementById("smart-cart-btn");
  const cartModal = document.getElementById("new-cart-x-modal");
  const cartClose = document.getElementById("new-cart-x-close");

  cartBtn?.addEventListener("click", () => {
    cartModal?.classList.remove("hidden");
  });

  cartClose?.addEventListener("click", () => {
    cartModal?.classList.add("hidden");
  });

  const payNowBtn = document.getElementById("cart-pay-now");
  if (payNowBtn) {
    payNowBtn.addEventListener("click", () => {
      alert("✅ Payment Confirmed!\nThank you for your order.");
      newCartX = [];
      renderNewCartX();
      document.getElementById("new-cart-x-modal").classList.add("hidden");
    });
  }
});

// ========== SEARCH ==========
document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.tags.some(tag => tag.toLowerCase().includes(query))
  );
  renderPaginatedProducts(1);
});

// ========== PAGINATION ==========
function renderPaginationControls() {
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginationContainer = document.getElementById("pagination");

  if (!paginationContainer) return;

  paginationContainer.innerHTML = `
    <button class="nav-btn" id="pagi-prev" ${currentPage === 1 ? "disabled" : ""}>&lt;</button>
    ${Array.from({ length: totalPages }, (_, i) => `
      <button class="page-btn ${currentPage === i + 1 ? "active" : ""}" data-page="${i + 1}">
        ${i + 1}
      </button>
    `).join("")}
    <button class="nav-btn" id="pagi-next" ${currentPage === totalPages ? "disabled" : ""}>&gt;</button>
  `;

  paginationContainer.querySelectorAll(".page-btn").forEach(button => {
    button.addEventListener("click", () => {
      const page = parseInt(button.dataset.page);
      renderPaginatedProducts(page);
    });
  });

  paginationContainer.querySelector("#pagi-prev")?.addEventListener("click", () => {
    if (currentPage > 1) renderPaginatedProducts(currentPage - 1);
  });

  paginationContainer.querySelector("#pagi-next")?.addEventListener("click", () => {
    if (currentPage < totalPages) renderPaginatedProducts(currentPage + 1);
  });
}

function updatePaginationUI() {
  document.querySelectorAll('.page-btn').forEach(btn => {
    btn.classList.remove('active');
    if (parseInt(btn.dataset.page) === currentPage) {
      btn.classList.add('active');
    }
  });

  document.getElementById('pagi-prev').disabled = currentPage === 1;
  document.getElementById('pagi-next').disabled = currentPage === Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
}

// ========== NEW CART X ITEM ADD ==========
window.addNewCartXItem = function(name, price, img) {
  const existing = newCartX.find(i => i.name === name);
  if (existing) {
    existing.qty++;
  } else {
    newCartX.push({ name, price, img, qty: 1 });
  }
  renderNewCartX();
};

function updateNewCartXQty(index, delta) {
  newCartX[index].qty += delta;
  if (newCartX[index].qty <= 0) newCartX.splice(index, 1);
  renderNewCartX();
}

function removeNewCartXItem(index) {
  newCartX.splice(index, 1);
  renderNewCartX();
}

function renderNewCartX() {
  const container = document.getElementById("new-cart-x-items");
  const total = document.getElementById("new-cart-x-total");
  const count = document.getElementById("smart-cart-icon-count");
  const emptyText = document.querySelector(".empty-text");
  const recommended = document.getElementById("new-cart-x-recommend");

  container.innerHTML = "";

  let totalAmount = 0;
  let totalQty = 0;

  newCartX.forEach((item, i) => {
    totalAmount += item.price * item.qty;
    totalQty += item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "space-between";
    div.style.marginBottom = "12px";

    div.innerHTML = `
      <div style="display:flex; gap:10px; align-items:center">
        <img src="${item.img}" width="50" height="50" style="border-radius:6px"/>
        <div style="display:flex; flex-direction:column;">
          <strong style="font-size: 1rem; line-height: 1.1;">${item.name}</strong>
          <div style="font-size: 0.9rem; color:#444;">₹${item.price}</div>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:5px">
        <button onclick="updateNewCartXQty(${i}, -1)">−</button>
        <span class="qty-number" style="min-width: 24px; text-align:center; font-weight:bold; display:inline-block; color: #121f13;">${item.qty}</span>
        <button onclick="updateNewCartXQty(${i}, 1)">+</button>
        <button onclick="removeNewCartXItem(${i})">🗑️</button>
      </div>
    `;
    container.appendChild(div);
  });

  total.textContent = totalAmount;
  count.textContent = totalQty;
  emptyText.style.display = newCartX.length ? "none" : "block";
  const insideQty = document.getElementById("cart-inside-qty");
  if (insideQty) insideQty.textContent = totalQty;

  if (recommended) {
    recommended.innerHTML = `
      <h3 style="font-family: Georgia, serif; font-size: 1.2rem; font-weight: bold; margin: 12px 0 10px; color: #121f13;">Recommended Products</h3>
      <div style="display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px;">
        ${recommendedProducts.map(p => `
          <div class="smart-recommended-card" style="min-width: 130px; max-width: 140px; flex-shrink: 0; padding: 8px; border: 1px solid #ccc; border-radius: 8px; background: #fff; box-shadow: 0 0 4px rgba(0,0,0,0.1);">
            <img src="${p.img}" alt="${p.name}" style="width:100%; height:100px; object-fit:contain; margin-bottom: 6px;" />
            <p class="smart-reco-title" style="font-weight: bold; font-size: 0.95rem; margin: 4px 0;">${p.name}</p>
            <p class="smart-reco-price" style="color: #2c5c2f;">₹${p.price}</p>
          </div>
        `).join("")}
      </div>
    `;
  }

  const payNowBtn = document.getElementById("cart-pay-now");
  if (payNowBtn) {
    payNowBtn.style.display = newCartX.length ? "block" : "none";
  }
}

if (document.getElementById("new-cart-x-items")) renderNewCartX();
