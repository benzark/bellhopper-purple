import React from 'react';
import { Column } from 'rbx';
import ExchangeRate from './ExchangeRate';
import TravelAdvisory from './TravelAdvisory';
import moment from 'moment'

const cc = require('currency-codes');

const getCountryData = async (country, setCountryData) => {
  const countryCurrency = await ExchangeRate(country);
  const countryCurrencyName = cc.country(country)[0].code;
  const travelAdvice = await TravelAdvisory(country);
  setCountryData([
    {
      title: 'Weather',
      contents: (
        <div>
          <Column.Group breakpoint="mobile">
            <Column size={8}>
              <p>Daytime Hi: 74</p>
              <p>Daytime Lo: 57</p>
            </Column>
            <Column size={4}>
              <p className="degrees-text">68 &deg;F</p>
              <p>light rain</p>
            </Column>
          </Column.Group>
        </div>
      ),
    },
    {
      title: 'Travel Warnings',
      contents: (
        <div>
          <p>
            {travelAdvice} ({moment().format("YYYY-MM-DD")})
          </p>
          <p>
            Exercise increased caution in Costa Rica due to crime. (Jan 7, 2020)
          </p>
          <br />
          <p>
            Outbreak alert: There is a dengue outbreak in Costa Rica. Dengue is
            spread by mosquitoes. Travelers going to Costa Rica should take
            steps to avoid mosquito bites. (Aug 27, 2019)
          </p>
        </div>
      ),
    },
    {
      title: 'Visa Requirements',
      contents: (
        <p>
          Not required for stays less than 90 days, but return ticket required.
        </p>
      ),
    },
    {
      title: 'Vaccinations',
      contents: (
        <p>
          Proof of yellow fever vaccination must be presented upon arrival for
          all passengers coming from certain countries in South America or
          Africa
        </p>
      ),
    },
    {
      title: 'Plug Type',
      contents: <p>A/B type plug, 120v (USA standard electrical system)</p>,
    },
    {
      title: 'Exchange Rate',
      contents: (
        <p>
          {' '}
          1 USD =
          {' '}
          {countryCurrency[0].toFixed(2)}
          {' '}
          {countryCurrencyName}
        </p>
      ),
    },
  ]);
};

export default getCountryData;