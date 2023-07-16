/*function hay()
{var image = Array.from(document.querySelectorAll(`img`))
for(var i= 0; i< image.length ; i++)
{
  image[i].addEventListener(`click`,
  function  () {
  console.log(result[i],"backdrop_path") 
  
   })
}
}
*/
'use strict'
var result =[];
async function getFel(ay7ag)
{
 let response = await fetch(`https://api.themoviedb.org/3/trending/all/${ay7ag}?api_key=9e5c26ddbd024153e0cbee75447bc205`)
 let final = await response.json()
 //console.log(`moves`,final.results )
 result = final.results
}


async function hello()
{
 await getFel(`day`)
 //await getFel(`week`)
 await viw() 
  //await hay()
 
}

function viw() {
   let cartoo = "";
    for (var i = 0; i < result.length; i++) {

        cartoo+=`  <div class="col-md-3">
        <img src="https://image.tmdb.org/t/p/w500${result[i].poster_path}" class="w-100" alt="..">
         <h4>${result[i].title}</h4>
        <p>${result[i].overview}</p> </div>`
        
    }
    document.getElementById(`rowData`).innerHTML=cartoo
}

/*myHttp.addEventListener(`readystatechange`, function () {
    if (myHttp.readyState == 4 && myHttp.status == 200)
      {
        userMyhttp=JSON.parse(myHttp.response).results; 
   //console.log(userMyhttp)
    viw() 
      } 
}) */

let ahmed = document.querySelector(`#ahmed`)

ahmed.addEventListener(`click`,function () {
  hello()
  ahmed.classList.add(`d-none`)
}
)





/*
let x =[1,2,3]
let y = x;
y.push(4)

console.log(x)
console.log(y)*/

if([]==[])
{
  console.log(`true`)
}
else
{
console.log(`false`)
}