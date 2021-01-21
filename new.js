

let text = "Coder saif";
let text_encode = btoa(text);


let text_decode = atob(text_encode);

let textarea = document.getElementById("text");
let text_result = document.getElementById("result");
let select = document.getElementById("select");

textarea.addEventListener("input",()=>{
    make_result();
})

select.addEventListener("change",()=>{
    make_result()
})

function make_result(){
    if(select.value =="decode"){
        text_result.value = atob(textarea.value);
    }else{
        text_result.value = btoa(textarea.value);

    }
}