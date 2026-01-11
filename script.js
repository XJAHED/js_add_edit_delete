let product_btn = document
  .getElementById("product_btn")
  .addEventListener("click", function () {
    // product name
    let product_name = document.getElementById("product_name").value;
    const product_price = parseFloat(
      document.getElementById("product_price").value
    );

    if (
      product_name.trim() === "" ||
      product_price === "" ||
      product_price <= 0
    ) {
      alert("Enter product value");
      return;
    }
    // add product
    const product = document.createElement("div");
    productId = Date.now();
    product.className = "all_product";
    product.dataset.id = productId;
    product.innerHTML = `
      <p>Name: ${product_name} - Price: ${parseFloat(product_price).toFixed(
      2
    )}</p>
      
      <button class="edit_btn">Edit</button>
      <button class="delete_btn">Delete</button>
    `;
    document.getElementById("product_list").appendChild(product);

    document.getElementById("product_name").value = ""; // value type kore enter dewar por value empty hoye jabe
    document.getElementById("product_price").value = "";
  });

//   !edit section
let currentParent = null;
document
  .getElementById("product_list")
  .addEventListener("click", function (event) {
    // console.log("click");
    // console.log(event.target.classList.contains("edit_btn"));

    if (event.target.classList.contains("edit_btn")) {
      document.getElementById("edit_product").style.display = "block";
      currentParent = event.target.parentElement;
      //   console.log(currentParent);

      // document.getElementById("edit_name").value = currentParent.querySelector("p").textContent;
      const productName = currentParent
        .querySelector("p")
        .textContent.split(" - ")[0]
        .replace("Name:", "");
      console.log(productName);

      document.getElementById("edit_name").value = productName;

      const productPrice = currentParent
        .querySelector("p")
        .textContent.split(" - ")[1]
        .replace("Price:", "");
      console.log(productPrice);
      document.getElementById("edit_price").value = productPrice;

      document.getElementById("product_input").style.display = "none";
    }

    // !delete
    if (event.target.classList.contains("delete_btn")) {
      if (confirm("Are You Sure")) {
        const product_del = event.target.parentElement;
        document.getElementById("product_list").removeChild(product_del);
      }
    }
  });

// * save
document.getElementById("save_btn").addEventListener("click", function () {
  if (currentParent) {
    const newname = document.getElementById("edit_name").value;
    const newprice = document.getElementById("edit_price").value;
    currentParent.querySelector(
      "p"
    ).textContent = `Name: ${newname} - Price: ${parseFloat(newprice).toFixed(
      2
    )}`;

    // currentParent.querySelector("p").textContent = newprice;

    document.getElementById("product_input").style.display = "block";
    document.getElementById("edit_product").style.display = "none";
  }
});
// *cencel
document.getElementById("cencel").addEventListener("click", function () {
  document.getElementById("product_input").style.display = "block";
  document.getElementById("edit_product").style.display = "none";
  currentParent = null;
});
