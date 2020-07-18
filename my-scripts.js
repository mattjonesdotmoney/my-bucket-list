//store data 
var myList = (JSON.parse(localStorage.getItem("myData")) || [])

//create items with button click
function createItem(){
	var newItem = {text: window.prompt("Add new bucket list goal"), style:"none"}
	myList.push(newItem)
	localStorage.setItem("myData", JSON.stringify(myList))	
	printItem(newItem)
}

//print items on the screen
function printItem(item){
	var p = document.createElement("p")
	p.innerHTML = item.text 
	p.className = item.style
	p.onclick = function(){
		this.className = item.style = (this.className == "none") ? "strike" : "invisible"
		localStorage.setItem("myData", JSON.stringify(myList))
	}
	document.getElementById("myDiv").appendChild(p)
}

//loop through and print our list
for (x=0; x < myList.length; x++) {printItem(myList[x])}
