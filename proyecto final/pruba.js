const products = [
    { name: "Camisa", type: "ropa", price: 20, image: "shirt.jpg" },
    { name: "Pantalón", type: "ropa", price: 30, image: "pants.jpg" },
    { name: "Smartphone", type: "electronica", price: 200, image: "phone.jpg" },
    { name: "Laptop", type: "electronica", price: 500, image: "laptop.jpg" },
    { name: "Sofá", type: "hogar", price: 400, image: "sofa.jpg" },
    { name: "Mesa", type: "hogar", price: 100, image: "table.jpg" }
  ];
  
  const cart = document.getElementById('products');
  const typeFilter = document.getElementById('typeFilter');
  const priceFilter = document.getElementById('priceFilter');
  
  function displayProducts(productsArray) {
    cart.innerHTML = '';
    productsArray.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <img src="images/${product.image}" alt="${product.name}">
        <strong>${product.name}</strong> - ${product.type} - $${product.price}`;
      cart.appendChild(productDiv);
    });
  }
  
  displayProducts(products);
  
  typeFilter.addEventListener('change', function() {
    const selectedType = this.value;
    const filteredProducts = selectedType === 'all' ? products : products.filter(product => product.type === selectedType);
    displayProducts(filteredProducts);
  });
  
  priceFilter.addEventListener('input', function() {
    const selectedPrice = parseInt(this.value);
    const filteredProducts = products.filter(product => product.price <= selectedPrice);
    displayProducts(filteredProducts);
  });