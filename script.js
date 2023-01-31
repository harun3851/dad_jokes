const btnEl=document.getElementById("btn");
const apiKey="xZK/ggwkdQt3NtdqJICDmg==G0Bo5wPD5AaoveDG";
const option={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey
    }
}
function getJoke(){
    console.log("clicked");

}

btnEl.addEventListener("click",getJoke)