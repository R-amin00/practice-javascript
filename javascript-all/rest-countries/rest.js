const loadCounries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data))
}


const displayCountries = countries => {
    console.log(countries)
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    //console.log(allCountriesHTML[0])
    const countryField = document.getElementById('container');
    countryField.innerHTML = allCountriesHTML.join(' ');
}


// // destructuring option 1 and Popular way of destructuring of parameter
const getCountryHTML = ({name, flags, area, region}) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Region: ${region}</p>
            <p>Area: ${area}</p>
            <img src="${flags.png}">
        </div>
    `
}



//     // //destructuring method 
//     // method-1
// const getCountryHTML = country => {
//      // destructuring inline
//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `
// }




// // Destructuring method
// const getCountryHTML = country => {
//     //desturcturing method
//     // method-1

//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }




// // Orginal method
// const getCountryHTML = country => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }


loadCounries();