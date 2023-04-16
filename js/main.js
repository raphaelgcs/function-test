// Select Elements
const navbar = document.querySelector('.navbar');
const productContainer = document.querySelector('.product-container');

// Add Elements
const navbarItems = ["What's new", "Designers", "Clothing", "Accessories", "Journal", "Gifts"];
navbarItems.forEach(item => {
  const link = document.createElement('a');
  link.textContent = item;
  link.href = "#";
  navbar.appendChild(link);
});

const products = [
  {
    name: 'Fredo Jacket',
    price: '230',
  },
  {
    name: 'Powell Jacket',
    price: '350',
  },
  {
    name: 'Lazar Jacket in Denim',
    price: '395',
  },
  {
    name: 'Lazar Jacket in Black',
    price: '395',
  },
  {
    name: 'Lazar Jacket in Leather',
    price: '495',
  },
];
products.forEach((product, index) => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  const productImg = document.createElement('img');
  productImg.classList.add('product-image');
  productImg.src = `images/product-image-${index + 1}.png`;
  productDiv.appendChild(productImg);

  const infoItemDiv = document.createElement('div');
  infoItemDiv.classList.add('info-container');
  productDiv.appendChild(infoItemDiv);

  const separatorDiv = document.createElement('div');
  infoItemDiv.appendChild(separatorDiv);

  const itemName = document.createElement('p');
  itemName.textContent = product.name;
  separatorDiv.appendChild(itemName);

  const itemPrice = document.createElement('p');
  itemPrice.textContent = `£${product.price}`;
  itemPrice.classList.add('info-price');
  separatorDiv.appendChild(itemPrice);

  const heartIcon = document.createElement('img');
  heartIcon.src = 'images/heart.svg';
  infoItemDiv.appendChild(heartIcon);

  productContainer.appendChild(productDiv);
});