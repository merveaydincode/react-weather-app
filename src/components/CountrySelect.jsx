import React, { useState, useEffect } from 'react';

function CountryCitySelector() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Ülkeleri API'den al
    fetch('https://api.com/countries')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      // Seçilen ülkeye ait şehirleri API'den al
      fetch(`https://api.com/cities/${selectedCountry}`)
        .then(response => response.json())
        .then(data => setCities(data))
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity(''); // Ülke değiştiğinde şehir seçimini sıfırla
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div><br />
    <div className="w-72 font-medium  h-80">
      <label htmlFor="country" style={{ width: '150px'}}>Ülke</label><br />
      <select id="country" style={{ width: '400px', height:'35px', borderRadius: '5px', border: '2px solid #ccc'}} value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Ülke seçin</option>
        {countries.map(country => (
          <option key={country.code} value={country.code}>{country.name}</option>
        ))}
      </select>

      <br /><br /><label htmlFor="city" style={{ width: '150px' }}>Şehir</label><br />
      <select id="city" style={{ width: '400px', height:'35px', borderRadius: '5px', border: '2px solid #ccc'}} value={selectedCity} onChange={handleCityChange} disabled={!selectedCountry}>
        <option value="">Şehir seçin</option>
        {cities.map(city => (
          <option key={city.id} value={city.id}>{city.name}</option>
        ))}
      </select>
    </div>
    </div>
  );
}

export default CountryCitySelector;
