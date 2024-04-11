import React from 'react'
import Coincard from './Coincard'

const Coincardview = () => {
    return (
        
        <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
            <h2 className="text-3xl text-center font-semibold text-gray-900 mb-4">Featured Cryptocurrencies</h2>
            <div className="mt-10 w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {/* <Coincard />
                <Coincard />
                <Coincard />
                <Coincard /> */}
            </div>
            <div className="mt-8 text-center">
                <a href="/cryptocurrencies" className="text-indigo-600 font-semibold hover:underline">See All</a>
            </div>
            

        </div>
    )
}

export default Coincardview
