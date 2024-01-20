const API="https://api.quotable.io/random"
document.getElementById('btn').addEventListener('click',()=>{
    fetch(API)
.then(data=>data.json())
.then(content=>{
    document.getElementById('output').innerHTML=content.content
    document.getElementById('author').innerHTML="<hr>"+"📌"+content.author
})
})