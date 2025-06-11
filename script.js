let myProducts = [
  {
    title: "Headphones",
    cost: 6500,
    pic: "hp.jpeg"
  },
  {
    title: "Smart Watch",
    cost: 8500,
    pic: "sw.jpeg"
  },
  {
    title: "Speaker",
    cost: 1200,
    pic: "spk.jpeg"
  },
  {
    title: "Charger",
    cost: 900,
    pic: "chrrg.jpeg"
  },

  {
    title: "Keyboard",
    cost: 4100,
    pic: "kb.jpeg"
  },
  {
    title: "Mouse",
    cost: 1000,
    pic: "mou.jpeg"
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

