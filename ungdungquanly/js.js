let listProduct = ['Tam Thất','Ngũ Vị Tử','Hà Thủ Ô','Đương Quy']
displayAll()
function displayAll() {
    let str = '<tr>\n'+
        '<td>Product Name</td>\n'+
        '<td></td>\n'+'<td></td>\n'+
        '<td>'+listProduct.length+'product'+'</td>\n'+
        '</tr>';
    for (let i = 0; i < listProduct.length; i++) {
        str += '<tr> <td>'+listProduct[i]+'</td>'+
            '<td><button onclick="showFormEdit(' + i + ')">Edit</button></td>'
            +'<td><button onclick="deleteProduct(' + i + ')">Delete</button></td>'+'<td></td>'
            +'</tr>'
    }
    document.getElementById("displayArea").innerHTML = str
}
function addProduct() {
    let productName = document.getElementById("add").value;
    document.getElementById("add").value='';
    listProduct.push(productName);
    console.log(listProduct)
    displayAll();
}
function deleteProduct(inDex) {
    listProduct.splice(inDex,1)
    displayAll()
    
}
function showFormEdit(inDex) {
    let str = '';
    str = '<input type="text" id="inputProduct" value="'+listProduct[inDex]+'">'+'<button onclick="saveProduct('+inDex+')">Save</button>';
    document.getElementById("edit").innerHTML= str
}

function saveProduct(inDex) {
    listProduct[inDex]= document.getElementById("inputProduct").value;
    document.getElementById("edit").innerHTML = '';
    displayAll();
}