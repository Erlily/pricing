document.addEventListener("DOMContentLoaded",function(e){
    var toggle = document.querySelector(".toggle__basic");
    toggle.addEventListener("click", toggleBillingPeriod);

    function toggleBillingPeriod(){
        if (isChecked()){
            updatePriceValueFor("monthly");
        }else {
            updatePriceValueFor("annually");
        }
    }

    function isChecked(){
        var checkbox = document.querySelector("#toggle");
        return checkbox.checked;
    }
    function updatePriceValueFor(period){
        var arr = document.querySelectorAll(".value");
        var price = 0;
        arr.forEach(el => {
            if(period =="monthly"){
                price = el.dataset.monthly; 
            }else { 
                price = el.dataset.annually; 
            }
            el.innerHTML = price; 
        });
    }
});