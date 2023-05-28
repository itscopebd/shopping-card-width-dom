let allBtn = document.querySelectorAll(".btn");
let sirial=0;
for (const btn of allBtn) {

    btn.addEventListener("click", function (e) {
        let parent = e.target.parentNode.parentNode;
        sirial +=1;
        getValueText(parent)
    })

}




function getValueText(parent) {
    const productTitle = parent.children[0].innerText;
    const productPrice = parent.children[2].children[0].innerText;
    const productQuantity = parent.children[3].children[0].innerText;
    const totalPrice=productPrice*productQuantity;
    elementCreate(productTitle,productPrice,totalPrice,sirial)
}

function elementCreate(productTitle,productPrice,totalPrice,sirial){
    const createRow = document.getElementById("createRow");
    const tr=document.createElement("tr");
    tr.classList.add("border-b");
    tr.classList.add("border-red-100");
    tr.classList.add("h-16");
    // tr.classList.add("block");
    tr.innerHTML=`
    <td>${sirial}</td>
    <td>${productTitle}</td>
    <td>${productPrice}</td>
    <td>${totalPrice}</td>
    <td><img id="delete" src="img/delete.png"></td>
    `;
    createRow.appendChild(tr)
}




document.getElementById("delete").addEventListener("click",function(e){

})
