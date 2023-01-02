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
	let [dobDate, dobTime] = info.dob.date.split("T")
	document.getElementById("img").setAttribute("src", pic)
	document.getElementById("name").innerHTML = `${info.name.title} ${info.name.first} ${info.name.last}`
	document.getElementById("gender").innerText = info.gender
	document.getElementById("phone").innerText = info.phone
	document.getElementById("dob").innerText = dobDate
	document.getElementById("country").innerText = info.location.country
	document.getElementById("city").innerText = info.location.city
	document.getElementById("state").innerText = info.location.state
	document.getElementById("street").innerHTML = `${info.location.street.name} ${info.location.street.number}`
	document.getElementById("postcode").innerText = info.location.postcode
}

let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
	users()
})

users()

