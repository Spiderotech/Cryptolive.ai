import React, { useEffect, useState } from 'react'
import Coincard from './Coincard'


const Coincardviewcoin = ({coin}) => {

    console.log(coin);
    
   
    
    
    return (
        <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
            <h2 className="text-3xl text-center font-semibold text-gray-900 mb-4">New Cryptocurrencies</h2>
            <div className="mt-20 w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {coin?.slice(0, 4).map((coin: any, index: React.Key | null | undefined) => (
                    <Coincard key={index} coin={coin} />
                ))}
                
            </div>
        </div>
    )
}

export default Coincardviewcoin
