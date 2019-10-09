
btnSubmit.onclick=function(){
  let income = inptAprox.value
  if (income < 30000) {
  lblOut.value = `With your income of ${income}, you are in a tax bracket of 8%`
} else if (income >= 30000 && income < 99999) {
  lblOut.value = `With your income of ${income}, you are in a tax bracket of 15%`
} else if (income >= 99999) {
  lblOut.value = `With your income of ${income}, you are in a tax bracket of 25%`
  }
}


btnReGo.onclick=function(){
  inptAprox.value = ` `
  lblOut.value = ` `
}
