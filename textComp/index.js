text = `The Lord is my shepherd; I shall not want. 
 He maketh me to lie down in green pastures: he leadeth me beside the still waters. 
 He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake. 
 Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me. 
 Thou preparest a table before me in the presence of mine enemies: thou anointest  my head with oil; my cup runneth over. 
 Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever.`
textArray = text.split('\n').map(f => f.trim())
firstThree = textArray.map(
    k => k.split(' ').slice(0, 3).join(' ')
)
// window.addEventListener('load', e => {
// con=document.querySelector('.container')
// con.innerHTML="load event"
// })
//add event listenr to top sentences
rn = (x) => Math.floor(Math.random() * x)

al = (e) => {
    clue = e.target.innerHTML
    fullSen = textArray.filter(p => p.indexOf(clue) != -1)
    ans.innerHTML = fullSen
    console.log(e.target.innerHTML)
}


con = document.querySelector('.container')
conH = firstThree.map(k => `<div class='sentThree'>${k}</div>`).join("")
con.innerHTML = conH

m = Array.from(document.querySelectorAll('.sentThree'))
m.forEach(x => x.addEventListener('click', al))
// change answer
// btn = document.querySelector('.btn')
ans = document.querySelector('.answer')
// btn.addEventListener('click', al)