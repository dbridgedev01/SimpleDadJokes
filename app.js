const button = document.querySelector("#button1")
const ol = document.querySelector("#jokes")
const resetButton = document.querySelector("#btnReset")


async function buttonClick(){
    const li = document.createElement("li")
    joke = await getJokes()
    li.append(joke)
    ol.append(li)

}

function resetPage(){
    ol.innerHTML = "";
}

async function getJokes(){
    try{
        const config = {headers: {Accept: "application/json"}}
        returnData = await axios.get("https://icanhazdadjoke.com/", config)
        return returnData.data.joke
    }catch(e){
        return "No Jokes At The Moment."
    }
   
}

button.addEventListener('click', buttonClick)
resetButton.addEventListener('click', resetPage)