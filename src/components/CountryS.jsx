import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { FaFloppyDisk } from "react-icons/fa6";
import { Country } from 'country-state-city';
import { City } from 'country-state-city';


function CountryS() {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedCity, setSelectedCity] = useState([]);

  useEffect(() => {
    setAllCountries(
      Country.getAllCountries().map((country) => ({
        value: {
          latitude: country.latitude,
          longitude: country.longitude,
          isoCode: country.isoCode,
        },
        label: country.name,
        }))
    );

  }, []);
  const handleSelectedCountry = (option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option) => {
    setSelectedCity(option);
  };
  
  return (
    <div>
      <div className='flex flex-col space-y-3'>Şehir Ekle
      <br /><br />
        <p>Ülke </p>
      <Select options={allCountries}
      value={selectedCountry}
      onChange={handleSelectedCountry}
      />

      <p>Şehir</p>
      <Select options={City.getCitiesOfCountry(selectedCountry?.value?.isoCode).map(
        (city) => ({
          value: {
            latitude: city.latitude,
            longitude: city.longitude,
          },
          label: city.name,
        })
      )}
      value={selectedCity}
      onChange={handleSelectedCity}
      />
      <button className='text-l font-bold text-white fixed bottom-4 right-12 z-10 bg-blue-900 rounded-md p-2 w-24 h-10 cursor-pointer'>
                <FaFloppyDisk size={17} style={{ display: 'inline-block' ,marginLeft: '1px', marginBottom: '3px'}} /> Save
                </button>

                <div className='flex flex-col space-y-2'>
                  <p>{selectedCountry?.label} | {selectedCity?.label}</p>
                  <p>Coordinates: {selectedCity?.value?.latitude} | {" "}
                  {selectedCity?.value?.longitude}
                  </p>

                </div>
    </div>
    </div>
  );
}

export default CountryS;
