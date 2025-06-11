// list of products
let myProducts = [
  {
    title: "Headphones",
    cost: 1500,
    pic: "https://via.placeholder.com/200x150?text=Headphones"
  },
  {
    title: "Smart Watch",
    cost: 2500,
    pic: "https://via.placeholder.com/200x150?text=Smart+Watch"
  },
  {
    title: "Speaker",
    cost: 1200,
    pic: "https://via.placeholder.com/200x150?text=Speaker"
  },
  {
    title: "Charger",
    cost: 600,
    pic: "https://via.placeholder.com/200x150?text=Charger"
  },
  {
    title: "Cable",
    cost: 200,
    pic: "https://via.placeholder.com/200x150?text=Cable"
  },
  {
    title: "Laptop Stand",
    cost: 950,
    pic: "https://via.placeholder.com/200x150?text=Stand"
  },
  {
    title: "Keyboard",
    cost: 1100,
    pic: "https://via.placeholder.com/200x150?text=Keyboard"
  },
  {
    title: "Mouse",
    cost: 800,
    pic: "https://via.placeholder.com/200x150?text=Mouse"
  }
];

let box = document.getElementById("products-box");

// show products on the page
for (let i = 0; i < myProducts.length; i++) {
  let item = myProducts[i];

  let newCard = document.createElement("div");
  newCard.className = "card";

  newCard.innerHTML = `
    <img src="${item.pic}" alt="${item.title}">
    <h3>${item.title}</h3>
    <p>Price: ₹${item.cost}</p>
    <button>Add to Cart</button>
  `;

  box.appendChild(newCard);
}
