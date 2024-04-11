import React from 'react'

const Exchangecard = ({exchange}) => {
  return (
    <div className="bg-white rounded-3xl border shadow-xl p-8  ">
    <div className="flex justify-between items-center mb-4">
    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-white to-blue-500 rounded-full overflow-hidden">
          <img
            src={exchange.image}
            alt="Coin Icon"
            className="h-8 w-8"
          />
        </div>
      <div>
        <span className="font-bold text-green-500">#{exchange.trust_score_rank}</span><br />
        <span className="font-medium text-xs text-gray-500 flex justify-end">{exchange.year_established}</span>
      </div>
    </div>
    <div>
      
      <h1 className="font-semibold text-xl text-gray-700">{exchange.name}</h1>
      <h3 className="font-semibold text-md text-gray-400">{exchange.country}</h3>
    </div>
  </div>
  )
}

export default Exchangecard
