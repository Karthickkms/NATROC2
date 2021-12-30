const getcountries = ()=>{
 console.log("Gettingg Countriesss....");
 const xhr = new XMLHttpRequest();
 xhr.open("Get","https://restcountries.com/v3.1/all");
 xhr.send();
 xhr.responseType = "json";
 xhr.onload = ()=> {
     const countries=xhr.response;
     const countryNames = countries.map((country)=>country.name.common);
     console.log("Full data",countries,countryNames);
     const countrylanguage= countries.filter((country)=>country.language);
     console.log("Full data",countries,countrylanguage);
};
};
getcountries();