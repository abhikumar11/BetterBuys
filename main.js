const api='https://api.dictionaryapi.dev/api/v2/entries/en/';
const ans=document.getElementsByClassName('answer');
const sound=document.getElementById('sound');
const btn=document.getElementById('btn');

btn.addEventListener('click',() =>{
 let input=document.getElementById('wordsearch').value;
 fetch(`${api}${input}`)
 .then(response =>response.json())
 .then(response =>console.log(response))
});