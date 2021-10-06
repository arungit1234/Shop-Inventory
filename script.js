var count = 0;
function isShopkeeper() {
    var name = $("#inpt").val();
    if (name == "") {
        alert('please enter who are you')
    }
    else if (name == "s" || name == "Shopkeeper") {
        $(".shop").css("display", "block");
        $(".main").css("display", "none");

    }
    
}
// Add Product
function addProduct() {
    $(".add_product").css("display", "block")
    $(".shop").css("display", "none")
}
function addData() {
    var productName = document.querySelector('.proname').value;
    var productPrice = document.querySelector('.proprice').value;
    var productStock = document.querySelector('.prostock').value;
    var productCompany = document.querySelector('.procompany').value;
    if (productName == "" || productPrice == "" || productStock == "" ||
        productCompany == "") {
        alert('please fill the fields')
    }
    else {
    count++;


        // localStorage.setItem("ProductName", productName)
        // localStorage.setItem("ProductPrice", productPrice)
        // localStorage.setItem("ProductStock", productStock)
        // localStorage.setItem("ProductCompany", productCompany)
        if (count == 1) {
            document.getElementById('pid1').innerHTML = count;
            document.getElementById('name1').innerHTML = productName;
            document.getElementById('price1').innerHTML = productPrice;
            document.getElementById('stock1').innerHTML = productStock;
            document.getElementById('company1').innerHTML = productCompany;
            $('#eid1').css("display","block");
            $('#did1').css("display","block");

        }
        else if (count == 2) {
            document.getElementById('pid2').innerHTML = count;
            document.getElementById('name2').innerHTML = productName;
            document.getElementById('price2').innerHTML = productPrice;
            document.getElementById('stock2').innerHTML = productStock;
            document.getElementById('company2').innerHTML = productCompany;
            $('#eid2').css("display","block");
            $('#did2').css("display","block");

        }
        else if (count == 3) {
            document.getElementById('pid3').innerHTML = count;
            document.getElementById('name3').innerHTML = productName;
            document.getElementById('price3').innerHTML = productPrice;
            document.getElementById('stock3').innerHTML = productStock;
            document.getElementById('company3').innerHTML = productCompany;
            $('#eid3').css("display","block");
            $('#did3').css("display","block");

        }
        else if (count == 4) {
            document.getElementById('pid4').innerHTML = count;
            document.getElementById('name4').innerHTML = productName;
            document.getElementById('price4').innerHTML = productPrice;
            document.getElementById('stock4').innerHTML = productStock;
            document.getElementById('company4').innerHTML = productCompany;
            $('#eid4').css("display","block");
            $('#did4').css("display","block");

        }
        else if (count == 5) {
            document.getElementById('pid5').innerHTML = count;
            ocument.getElementById('name5').innerHTML = productName;
            document.getElementById('price5').innerHTML = productPrice;
            document.getElementById('stock5').innerHTML = productStock;
            document.getElementById('company5').innerHTML = productCompany;
            $('#eid5').css("display","block");
            $('#did5').css("display","block");

        }

        $(".list_product").css("display", "block")
    }


    var productName = document.querySelector('.proname').value = "";
    var productPrice = document.querySelector('.proprice').value = "";
    var productStock = document.querySelector('.prostock').value = "";
    var productCompany = document.querySelector('.procompany').value = "";


}
// Remove Product

function removeData() {
    document.querySelector('.pid1').innerHTML="";
    document.querySelector('.name1').innerHTML="";
    document.querySelector('.price1').innerHTML="";
    document.querySelector('.stock1').innerHTML="";
    document.querySelector('.company1').innerHTML="";
    $(".list_product").css("display", "block")



}
// List Product
function listProduct() {
    $(".list_product").css("display", "block")
    $(".shop").css("display", "none")
    // let arr = JSON.parse(localStorage.getItem("ProductName"));
    // if (arr != null) {
    //     let record;
    //     for (var k = 0; k < arr.length; k++) {
    //         alert('h');
    //         record = record + `<tr><td>${k + 1}</td><td>${arr[k].productName}</td>
    //         <td>${arr[k].productPrice}</td><td>${arr[k].productStock}</td>
    //         <td>${arr[k].productCompany}</td>
    //         </tr>`
    //         alert('jjh');

    //     }
    //     document.getElementById('records').innerHTML = record;
    // }
    


}
// Edit Product

function editData() {
    $('.edit_data').css("display", "block");
    // selectRow = td.parentElement.parentElement;
    // document.querySelector('.proname') = selectRow.cells[0];
    // selectRow.cells[0].innerHTML=document.querySelector('.proname').value;
    // selectRow.cells[1].innerHTML=document.querySelector('.proprice').value;
    // selectRow.cells[2].innerHTML=document.querySelector('.prostock').value;
    // selectRow.cells[3].innerHTML=document.querySelector('.procompany').value;
    document.getElementById('name1').value=selectRow.cells[1].innerHTML;
    document.getElementById('price1').value=selectRow.cells[2].innerHTML;
    document.getElementById('stock1').value=selectRow.cells[3].innerHTML;
    document.getElementById('conmpany1').value=selectRow.cells[4].innerHTML;

    // var name1=document.querySelector('.proname').value;
    // var price1=document.querySelector('.proprice').value;
    // var stock1=document.querySelector('.prostock').value;
    // var company1=document.querySelector('.procompany').value;
    

    // document.getElementById('updtname').innerHTML=name1;
    // document.getElementById('updtprice').innerHTML=price1;
    // document.getElementById('updtstock').innerHTML=stock1;
    // document.getElementById('updtcompany').innerHTML=company1;
    // $(".list_product").css("display", "block")




}
function updateData() {
    var updtname=document.getElementById('updtname').value;
    var updtprice=document.getElementById('updtprice').value;
    var updtstock=document.getElementById('updtstock').value;
    var updtcompany=document.getElementById('updtcompany').value;

    document.getElementById('name1').innerHTML=updtname;
    document.getElementById('price1').innerHTML=updtprice;
    document.getElementById('stock1').innerHTML=updtstock;
    document.getElementById('company1').innerHTML=updtcompany;
    selectRow.cells[0].innerHTML=updtname

}

// (() => {
//     if ('indexedDB' in window) {
//         console.log('not supported');
//         return;
//     }
//     //IndexDB Database code
//     let sbmtbtn = document.querySelector('.sbmtbtn');
//     sbmtbtn.addEventListener("click", AddData);
// })();
// function AddData() {
//     const dbname = "MyDB";
//     const requestDB = window.indexedDB.open(dbname);
//     requestDB.onupgradeneeded=()=>{
//        let db=requestDB.result;
//        let store=db.createObjectStore("shop",{autoIncrement:true});
//        store.put({title:"store",item:"bat"})
//     }
//     requestDB.onsuccess=()=>{
//         if(requestDB.readyState=="done"){
//             console.log("Data is successfully inserted");
//         }
//     }

// }