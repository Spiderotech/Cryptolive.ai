import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Coincard = ({ coin }) => {
  const navigate = useNavigate();  
  
  const handleClick = () => {
    navigate('/Cryptocurrencies/details');  
  };
  return (
    <div className="bg-white rounded-3xl border shadow-xl p-8" onClick={handleClick}>
      <div className="flex justify-between items-center mb-4">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full overflow-hidden">
          <img
            src={coin.image}
            alt="Coin Icon"
            className="h-8 w-8"
          />
        </div>
        <div>
          <span className="font-bold text-green-500">{coin.ath_change_percentage}%</span><br />
          <span className="font-medium text-xs text-gray-500 flex justify-end">{coin.ath}coin</span>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-sm text-gray-400">{coin.symbol}</h3>
        <h1 className="font-semibold text-xl text-gray-700">$ {coin.current_price}</h1>
      </div>
    </div>
  );
};

export default Coincard;
