import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Coinlisttable = ({ coins }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = coins.slice(indexOfFirstItem, indexOfLastItem);

  const navigate = useNavigate();  
  
  const handleClick = () => {
    navigate('/Cryptocurrencies/details');  
  };

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="w-full sm:px-6 mb-40">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center ">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Cryptocurrencies</p>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">no</th>
                <th className="font-normal text-left pl-4">Name</th>
                <th className="font-normal text-left pl-12">Price</th>
                <th className="font-normal text-left pl-20">24h%</th>
                <th className="font-normal text-left pl-16">Market Cap</th>
                <th className="font-normal text-left pl-16">Volume(24h)</th>
                <th className="font-normal text-left pl-16">Circulating Supply</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {currentItems.map((coin, index) => (
                <tr key={coin.id} className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"onClick={handleClick}>
                  <td className="pl-5">
                    <p className="text-sm font-medium leading-none text-gray-800">{index + 1 + indexOfFirstItem}</p>
                  </td>
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-10 h-10">
                        <img className="w-full h-full" src={coin.image} alt={coin.name} />
                      </div>
                      <div className="pl-4">
                        <p className="font-medium">{coin.name} {coin.symbol.toUpperCase()}</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-12">
                    <p className="text-sm font-medium leading-none text-gray-800">${coin.current_price}</p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">{coin.price_change_percentage_24h}%</p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">${coin.market_cap}</p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">${coin.total_volume}</p>
                    <p className="text-xs leading-3 text-gray-600 mt-2">{coin.total_volume} {coin.symbol.toUpperCase()}</p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">{coin.circulating_supply} {coin.symbol.toUpperCase()}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="max-w-8xl mx-auto container py-10">
        <ul className="flex justify-center items-center">
          <li>
            <span className="p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 focus:outline-none mr-1 sm:mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </span>
          </li>
          {Array.from({ length: Math.ceil(coins.length / itemsPerPage) }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <li key={pageNumber}>
                <span className={`flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none ${pageNumber === currentPage ? 'bg-indigo-600 text-white' : ''}`} onClick={() => paginate(pageNumber)}>
                  {pageNumber}
                </span>
              </li>
            );
          })}
          <li>
            <span className="flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 p-1 focus:outline-none ml-1 sm:ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
          </li>
        </ul>
      </div>
        </div>
      </div>
    </>
  );
}

export default Coinlisttable;
