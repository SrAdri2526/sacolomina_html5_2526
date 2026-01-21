const products = [
    {
        name: "AC Milan 1a Equipación 24/25",
        category: "Serie A",
        price: 50.00,
        img_url: "https://m.media-amazon.com/images/I/514pgSou8DL._AC_UL320_.jpg"
    },
    {
        name: "Real Madrid 25/26 1a Equipación",
        category: "LaLiga",
        price: 100.00,
        img_url: "https://m.media-amazon.com/images/I/51bs6Ahd8jL._AC_UL320_.jpg"
    },
    {
        name: "Camiseta entrenamiento España",
        category: "Selecciones",
        price: 20.00,
        img_url: "https://m.media-amazon.com/images/I/41TmEky9MYL._AC_UL320_.jpg"
    },
    {
        name: "Atletico de Madrid 3a Equipación 25/26",
        category: "LaLiga",
        price: 70.00,
        img_url: "https://m.media-amazon.com/images/I/51jb74u9UYL._AC_UL320_.jpg"
    },
    {
        name: "Manchester City 1a Equipación 25/26",
        category: "Premier League",
        price: 95.00,
        img_url: "https://m.media-amazon.com/images/I/61ANvWQuesL._AC_UL320_.jpg"
    },
    {
        name: "Manchester United 1a Equipación 25/26",
        category: "Premier League",
        price: 60.00,
        img_url: "https://m.media-amazon.com/images/I/61sLy1hu3sL._AC_SX679_.jpg"
    },
    {
        name: "Arsenal 1a Equipación 25/26",
        category: "Premier League",
        price: 80.00,
        img_url: "fotos/arsenal.png"
    },
    {
        name: "Brazil x Stussy",
        category: "Retro",
        price: 250.00,
        img_url: "https://camisfutgol.com/wp-content/uploads/2025/06/d9df4568-34d2-423f-9ff7-758ea80ad149.jpeg"
    },
    {
        name: "RCD Mallorca 1998/1999",
        category: "Retro",
        price: 40.00,
        img_url: "https://sportclubmemories.com/wp-content/uploads/2025/01/Image-51-fotor-202501311640-scaled.jpg"
    },
    {
        name: "Real Betis 1a Equipación 25/26",
        category: "LaLiga",
        price: 90.00,
        img_url: "fotos/5715688727198.webp" 
    },
    {
        name: "PSG 1a Equipación 25/26",
        category: "Ligue 1",
        price: 85.00,
        img_url: "https://cdn.blazimg.com/300/product/2/0/2025_nike_hj4593-411_1.webp"
    },
    {
        name: "Marsella 3a Equipación 25/26",
        category: "Ligue 1",
        price: 70.00,
        img_url: "https://contents.mediadecathlon.com/m23412348/k$0d076e71ee5b112c2c21ff4513386e5a/picture.jpg"
    },
    {
        name: "Olympique de Lyon 2a Equipación 25/26",
        category: "Ligue 1",
        price: 75.00,
        img_url: "https://cdn.blazimg.com/300/product/a/d/adidas_jl1884_nindig_1.webp" 
    },
    {
        name: "España 2010 2a Equipación",
        category: "Selecciones",
        price: 110.00,
        img_url: "https://madrid-shop.com/wp-content/uploads/2021/12/11_8475D622-6A46-4486-989E-3C268E453673.jpeg"
    },
    {
        name: "Zidane 10 Francia 1998 1a Equipación",
        category: "Selecciones",
        price: 150.00,
        img_url: "https://www.camisetasdefutbolshop.com/image/cache/20250318SX/camiseta-zidane-10-francia-1-equipacion-retro-1998-002-shop-270x270.webp" 
    },
    {
        name: "UD Las Palmas 97/98",
        category: "Retro",
        price: 120.00,
        img_url: "https://elultimo10shop.com/cdn/shop/files/IMG-8798.webp?v=1735326636"
    },
    {
        name: "Juventus 1a Equipación 25/26",
        category: "Serie A",
        price: 65.00,
        img_url: "https://i1.t4s.cz//products/jn5237/931323-960.webp"
    },
    {
        name: "Inter Milan 1a Equipación 25/26",
        category: "Serie A",
        price: 85.00,
        img_url: "https://www.futbolemotion.com/imagesarticulos/300419/grandes/camiseta-nike-inter-milan-cuarta-equipacion-2025-2026-nino-blue-1.webp"
    },
    {
        name: "Portugal 2026 1a Equipación",
        category: "Selecciones",
        price: 100.00,
        img_url: "https://xclusivejerseys.com/wp-content/uploads/2025/09/Screenshot2025-09-22at18.45.16.png"
    },
    {
        name: "Bilbao 1995/97",
        category: "Retro",
        price: 130.00,
        img_url: "https://camisetasfutbolbaloncesto.com/cdn/shop/files/image_ff913306-5662-4170-9983-35d719ed2ca7-Photoroom.jpg?v=1740595610&width=1946"
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
    if (document.getElementById('cat5').checked) activeCategories.push("Retro");
    if (document.getElementById('cat6').checked) activeCategories.push("Ligue 1");

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