const categoryFilterEl = document.getElementById("category-filter");
const productsEl = document.getElementById("products");

categoryFilterEl.addEventListener("change", () => {
  const category = categoryFilterEl.value;
  productsEl.innerHTML = "Loading...";

  fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
      productsEl.innerHTML = "";
      for (let i = 0; i < data.products.length; i++) {
        const { id, title, description, thumbnail, price, brand } =
          data.products[i];

        // Create product DOM object
        const productEl = document.createElement("div");
        productEl.className = "product";

        const productImageEl = document.createElement("img");
        productImageEl.src = thumbnail;
        productImageEl.alt = title;

        const productTitleEl = document.createElement("h3");
        productTitleEl.textContent = title;

        const productDescriptionEl = document.createElement("p");
        productDescriptionEl.textContent = description;

        const productPriceEl = document.createElement("p");
        productPriceEl.textContent = `$${price}`;

        const productCategoryEl = document.createElement("p");
        productCategoryEl.textContent = brand;

        productEl.appendChild(productImageEl);
        productEl.appendChild(productTitleEl);
        productEl.appendChild(productDescriptionEl);
        productEl.appendChild(productPriceEl);
        productEl.appendChild(productCategoryEl);

        // Add to HTML
        productsEl.appendChild(productEl);
      }
    });
});
