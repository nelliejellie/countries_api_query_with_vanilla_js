

fetch('https://restcountries.com/v2/all')
   .then(response => response.json())
   .then(countries => showCountries(countries) )
   .then(()=> handleClick())


   showCountries = countries => {
        const charactersDiv = document.querySelector('.images-container');
        countries.forEach(country => {
        charactersDiv.innerHTML += `<div class="image ${country.name}">
        <div>
            <img src="${country.flags.png}" alt="" srcset="">
        </div>
        <div  class="image-details ${country.name}">
            <p>${country.name}</p>
            <span>Population: ${country.population}</span>
            <span>Region: ${country.region}</span>
            <span>Capital: ${country.capital}</span>
        </div>
    </div>
    `;
        
        });
    }
// when a region is selected
const selecter = document.querySelector('.selecteee')
selecter.addEventListener('change', doStuff)

function doStuff(){
    console.log(`https://restcountries.com/v2/regionalbloc/${selecter.value}`)
    fetch(`https://restcountries.com/v2/regionalbloc/${selecter.value}`)
        .then(response => response.json())
        .then(region => showRegion(region) )
        .then(region => console.log(region))
        .then(()=> handleClick())

    showRegion = region => {
        const charactersDiv = document.querySelector('.images-container');
        // empty the characters div
       charactersDiv.innerHTML = '';
         //now set the div to a new element
        region.forEach(reg => {
            charactersDiv.innerHTML += `<div class="image">
            <div>
                <img src="${reg.flags.png}" alt="" srcset="">
            </div>
            <div  class="image-details">
                <p>${reg.name}</p>
                <span>Population: ${reg.population}</span>
                <span>Region: ${reg.region}</span>
                <span>Capital: ${reg.capital}</span>
            </div>
            </div>
            `;
            
            });
        
    }
}

// when search button is clicked
const button = document.querySelector('.button')
button.addEventListener('click', SearchCountry)

function SearchCountry(e){
    const countryValue = document.querySelector('.country-input').value
    fetch(`https://restcountries.com/v2/name/${countryValue}`)
        .then(response => response.json())
        .then(country => showCountry(country) );

    showCountry = country => {
        const charactersDiv = document.querySelector('.images-container');
        if(country.length > 0)
        {
            country.forEach(country => {
                charactersDiv.innerHTML = `<div class="image" onClick='goToDetail()'>
                <div>
                    <img src="${country.flags.png}" alt="" srcset="">
                </div>
                <div  class="image-details">
                    <p class='pp'>${country.name}</p>
                    <span>Population: ${country.population}</span>
                    <span>Region: ${country.region}</span>
                    <span>Capital: ${country.capital}</span>
                </div>
                </div>
                `;
                
                });
        }
        else{
            charactersDiv.innerHTML = `<p>No Country named ${countryValue} was found</p>`
        }
    }
}
function goToDetail(e){
    const s = document.querySelector('.image')
    const p = document.querySelector('.pp').innerText
    console.log(p)
    localStorage.setItem("value", p);
    window.location.href = "./detail.html"
}
// get the value of the country clicked



function handleClick(e){
    const imageDetail = document.querySelectorAll('.image');
    imageDetail.forEach(img => {
        img.addEventListener('click', handleClickTwo)
    })
    // imageDetail.addEventListener('click', handleClickTwo)

    function handleClickTwo(e){
        let value = e.path[2].classList[1]
        console.log(value)
        localStorage.setItem("value", value);
        window.location.href = "./detail.html"
    }
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
