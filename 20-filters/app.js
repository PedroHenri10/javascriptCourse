let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () =>{
    // if statement

    productsContainer.innerHTML = filteredProducts.map(({id, title, image, price}) =>{
        return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    })
    .join('')
};

displayProducts();
// tet filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () =>{
    const inputValue = searchInput.value;
    filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(inputValue);
    });
    displayProducts();
})
