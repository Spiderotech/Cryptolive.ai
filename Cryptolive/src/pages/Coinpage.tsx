import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Coinlisttable from '../components/Coinlisttable'
import Hersectioncoin from '../components/Hersectioncoin'
import Coincardviewcoin from '../components/Coincardviewcoin'
import axios from 'axios';

const Coinpage = () => {

    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false&locale=en');
          setCryptoData(response.data);
        } catch (error) {
          console.error('Error fetching crypto data:', error);
        }
      };
  
      fetchData();
    }, []);
   
    
  return (
    <>
    <Header/>
    <Hersectioncoin/>
    <Coincardviewcoin coin={cryptoData} />
    <Coinlisttable coins={cryptoData}/>
    </>
  )
}

export default Coinpage
