const countdown = document.getElementById("countdown")



const count = () => {
	today=new Date();
	var cmas=new Date("2026-07-19T00:00:00Z");
	var one_day=1000*60*60*24;
	countdown.innerHTML = Math.ceil((cmas.getTime()-today.getTime())/(one_day * 365))-1 + " years " + Math.ceil((cmas.getTime()-today.getTime())/(one_day)) %365 + " days " + Math.ceil((cmas.getTime()-today.getTime())/(1000*60*60))%24 + " hours "+Math.ceil((cmas.getTime()-today.getTime())/(1000*60))%60 + " minutes "+Math.ceil((cmas.getTime()-today.getTime())/(1000))%60 + " seconds"
}

setInterval(() => {
	count()
}, 1000)
count()