const api='https://api.dictionaryapi.dev/api/v2/entries/en/';
const ans=document.getElementById('answer');
const sound=document.getElementById('sound');
const btn=document.getElementById('btn');

btn.addEventListener('click',() =>{
 let input=document.getElementById('wordsearch').value;
 fetch(`${api}${input}`)
 .then(response =>response.json())
 .then(data =>
    {
        console.log(data);
        ans.innerHTML=`<div class="word">
        <h3>${input}</h3>
   </div>
   <button onclick="play"><i class="fa-solid fa-volume-high"></i></button>
   <div class="detail">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetics[1].text}</p>
   </div>
   <p class="meaning">
   ${data[0].meanings[0].definitions[0].definition}
   </p>
   <p class="example">
   ${data[0].meanings[0].definitions[0].example||" "}
   </p>`
   sound.setAttribute("src",`https:${data[0].phonetics[1].audio}`);
    })
    .catch(()=>
    {
        ans.innerHTML = `<h3 class="error"> Couldn't find word`
    })
});
 function play() {
    sound.play();
 }