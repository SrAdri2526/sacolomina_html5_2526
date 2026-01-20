const products = [
    {
        name: "AC Milan 1a Equipación 24/25",
        category: "Serie A",
        price: 20.00,
        img_url: "https://m.media-amazon.com/images/I/514pgSou8DL._AC_UL320_.jpg"
    },
    {
        name: "Real Madrid 25/26 1a Equipación",
        category: "LaLiga",
        price: 20.00,
        img_url: "https://m.media-amazon.com/images/I/51bs6Ahd8jL._AC_UL320_.jpg"
    }

];

/**
 * 
 * @param {Array} productsToDisplay 
 */


function renderProducts(productsToDisplay) {
    const container = document.getElementById('product-grid');
    container.innerHTML = '';

    if (productsToDisplay.length === 0) {
        container.innerHTML = '<p class="no-results">No se han encontrado productos con estos filtros.</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.img_url}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <span class="category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="price">${product.price.toFixed(2)}€</p>
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * Captura los valores de los filtros y actualiza la vista.
 */
function applyFilters() {
    // 1. Obtener el valor del precio
    const maxPrice = parseFloat(document.getElementById('price-range').value);
    document.getElementById('valor-seleccionado').textContent = maxPrice;

    // 2. Obtener las categorías seleccionadas
    // Buscamos todos los checkboxes que estén marcados
    const activeCategories = [];
    if (document.getElementById('cat1').checked) activeCategories.push("LaLiga");
    if (document.getElementById('cat2').checked) activeCategories.push("Premier League");
    if (document.getElementById('cat3').checked) activeCategories.push("Serie A");
    if (document.getElementById('cat4').checked) activeCategories.push("Selecciones");

    // 3. Filtrar el array original
    const filteredProducts = products.filter(product => {
        const matchesPrice = product.price <= maxPrice;
        // Si no hay categorías seleccionadas, mostramos todas. Si hay, comprobamos si el producto pertenece.
        const matchesCategory = activeCategories.length === 0 || activeCategories.includes(product.category);
        
        return matchesPrice && matchesCategory;
    });

    // 4. Renderizar el resultado
    renderProducts(filteredProducts);
}

// Configuración inicial al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const priceRange = document.getElementById('price-range');
    const categoryCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');

    // Escuchar cambios en el rango de precio
    priceRange.addEventListener('input', applyFilters);

    // Escuchar cambios en cada checkbox
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Renderizado inicial (todos los productos)
    renderProducts(products);
});