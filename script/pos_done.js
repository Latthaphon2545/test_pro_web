// var order = [];

// function randerorder(){
//     if(order.length > 0){
//         var html = '';
//         for (let i = 0; i < cart.length; i++){
//             html += `
//                     `
//         }
//     }
// }

function remove(){
    var show = document.getElementsByClassName("show");
    var sum_container = document.getElementsByClassName("sum-container");
    // show display none
    for(let i = 0; i < show.length; i++){
        show[i].style.display = "none";
    }
    // sum-container bg none
    for(let i = 0; i < sum_container.length; i++){
        sum_container[i].style.background = "none";
        var main_container = document.getElementsByClassName("main-container")[0];
        main_container.textContent = "No Order";
        main_container.style.color = "gray";
        main_container.style.fontSize = "50px";
        main_container.style.fontWeight = "bold";
        main_container.style.width = "100%";
        main_container.style.height = "701px";
        main_container.style.textAlign = "center";
        main_container.style.lineHeight = "701px";
    }

}
