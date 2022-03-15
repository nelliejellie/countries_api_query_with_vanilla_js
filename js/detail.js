// get the value of the country clicked
console.log(localStorage.getItem("value"))

const imageDetails = document.querySelector(".image-details");

window.onload = function doStuff(){
    fetch(`https://restcountries.com/v2/name/${localStorage.getItem("value")}`)
    .then(response => response.json())
    .then(country => countryDetail(country))
}

function countryDetail(country){
    console.log(country)

    imageDetails.innerHTML = `
    <div class="img-cont">
        <img src="${country[0].flag}" alt="" srcset="">
    </div>
    <div class="deets">
        <p>${country[0].name}</p>
        <div class="details">
            <div class="detailsone">
                <span class="vertical"><span>Native Name</span>: ${country[0].nativeName}</span>
                <span class="vertical"><span>Population</span>: ${country[0].population}</span>
                <span class="vertical"><span>Region</span>: ${country[0].region}</span>
                <span class="vertical"><span>Sub Region</span>: ${country[0].subregion}</span>
                <span class="vertical"><span>Capital</span>: ${country[0].capital}</span>
            </div>
            <div class="detailstwo">
                <span class="vertical"><span>Top Level Domain</span>: ${country[0].topLevelDomain}</span>
                <span class="vertical"><span>Currencies</span>: ${country[0].currencies[1]}</span>
                <span class="vertical"><span>Languages</span>: ${country[0].languages[0].name} </span>
            </div>
        </div>
        ${country[0].borders ? 
        `<div class="border">
            Border Countries: <span class="horizontal">${country[0].borders[0]} </span><span class="horizontal">${country[0].borders[1]}</span><span class="horizontal">${country[0].borders[2]}</span>
        </div>` :''}

    </div>`
    
}


// make the background light
const toggleTheme = document.querySelector('.span-dark')
toggleTheme.addEventListener('click', function(){
    const nav = document.querySelector('nav')
    const body = document.querySelector('body')
    const image = document.querySelectorAll('.image')

    
    if(nav.className !== 'nav-white'){
        nav.setAttribute('class','nav-white')
        body.style.backgroundColor = '#f7f2f2'
        image.forEach(img =>{
            img.style.backgroundColor = 'white'
            img.style.color = 'black'
        })
    }else{
        nav.setAttribute('class','')
        body.style.backgroundColor = ''
        image.forEach(img =>{
            img.style.backgroundColor = ''
            img.style.color = ''
        })
    }
    
})