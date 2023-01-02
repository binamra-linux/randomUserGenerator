async function users(){
	let apiReq = fetch("https://randomuser.me/api");
	let data = apiReq.then((value)=>{
		return value.json()
	}).then((info)=>{
		let userInfoData = info.results[0]
		showUsers(userInfoData);
	})
}

function showUsers(info){
	//console.log(info)
	let pic = info.picture.large
	document.getElementById("img").setAttribute("src", pic)
	document.getElementById("name").innerHTML = `${info.name.title} ${info.name.first} ${info.name.last}`
	document.getElementById("gender").innerText = info.gender
	document.getElementById("phone").innerText = info.cell
	document.getElementById("dob").innerText = info.dob.date
}

let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
	users()
})

users()

