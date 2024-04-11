import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Exchangecard from './Exchangecard';

const Exchangecardview = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(20); // Change the number of cards per page if needed

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/exchanges');
                setCryptoData(response.data);
            } catch (error) {
                console.error('Error fetching crypto data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(cryptoData);
    

   
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cryptoData.slice(indexOfFirstCard, indexOfLastCard);

  
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
            <h2 className="text-3xl text-center font-semibold text-gray-900 mb-4">Featured Exchanges</h2>
            <div className="mt-10 w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {currentCards.map(card => (
                    <Exchangecard key={card.id} exchange={card}/>
                ))}
            </div>
            <div>
                <div className="max-w-8xl mx-auto container py-10">
                    <ul className="flex justify-center items-center">
                        {[...Array(Math.ceil(cryptoData.length / cardsPerPage)).keys()].map(number => (
                            <li key={number}>
                                <span onClick={() => paginate(number + 1)} className={`flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none ${currentPage === number + 1 ? 'bg-indigo-600 text-white' : ''}`}>
                                    {number + 1}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Exchangecardview;
