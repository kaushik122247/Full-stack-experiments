const products = [];

function addProduct() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    const quantity = document.getElementById('quantity').value;

    if (id && name && price && category) {
        const product = {id, name, price, category,quantity };
        products.push(product);
        displayProducts();
        document.getElementById('id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('category').value = '';
        document.getElementById('quantity').value = '';
        alert('Product added successfully');
    } else {
        alert('Please fill in all fields');
    }
}

function displayProducts() {
    const productList = document.getElementById('productTable');
    productList.innerHTML = '';

    const headerRow = document.createElement('thead');
    headerRow.innerHTML = `
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Product Category</th>
        </tr>`;
    productList.appendChild(headerRow);

    products.forEach((product) => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${product.id}</td> 
            <td>${product.name}</td>
            <td>${product.price}</td>  
            <td>${product.quantity}</td>  
            <td>${product.category}</td>  
            `; 

        productList.appendChild(tr);
    });
}