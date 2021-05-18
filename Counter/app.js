//set initial count
let count =0;

//select value and buttons

const value = document.querySelector("#value");
const btns =document.querySelectorAll(".btn");


btns.forEach(function (btn){
    // console.log(item);
    btn.addEventListener("click", function(e){
        const styles= e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count++;
        }else {
            count=0;
        }
        value.textContent = count;
        
        if(count<0){
            value.style.color="red";
            
        }else if (count>0){
            
            value.style.color="green";
        }else{
            value.style.color="black";

        }
    })

})