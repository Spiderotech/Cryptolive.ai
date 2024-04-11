import React from 'react'

function Coindetailcard() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-[35%] h-auto border-2 bg-white  p-5'>
                    <div className="flex items-center">
                        <div className="w-10 h-10">
                            <img className="w-full h-full" src="https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png" alt="shib" />
                        </div>
                        <div className="pl-4">
                            <p className="font-medium">Shiba Inu SHIB</p>
                        </div>
                    </div>

                    <p className="text-3xl font-medium leading-none text-gray-800 m-5">$0.0000274</p>

                    <div className="flex items-center justify-between mt-5">
                        <div className="">
                            <p className="font-medium">Market cap </p>

                        </div>
                        <div className="pl-4">

                            <p className="text-sx font-normal leading-none text-gray-800 mt-3">$0.0000274</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-5">
                        <div className="">
                            <p className="font-medium">Volume (24h)</p>

                        </div>
                        <div className="pl-4">

                            <p className="text-sx font-normal leading-none text-gray-800 mt-3">$0.0000274</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-5">
                        <div className="">
                            <p className="font-medium">Total supply</p>

                        </div>
                        <div className="pl-4">

                            <p className="text-sx font-normal leading-none text-gray-800 mt-3">$0.0000274</p>
                        </div>
                    </div>



                    <div className="flex items-center justify-between mt-5">
                        <div className="">
                            <p className="font-medium">Circulating supply </p>

                        </div>
                        <div className="pl-4">

                            <p className="text-sx font-normal leading-none text-gray-800 mt-3">$0.0000274</p>
                        </div>
                    </div>


                    <div className="flex items-center justify-between mt-5">
                        <div className="">
                            <p className="font-medium">Max. supply</p>

                        </div>
                        <div className="pl-4">

                            <p className="text-sx font-normal leading-none text-gray-800 mt-3">$0.0000274</p>
                        </div>
                    </div>


                    <div className="flex items-center mt-5">
                        <div className="">
                            <p className="font-medium">Official links</p>

                          
                            

                        </div>

                    </div>

                    <div className="flex items-center mt-5">
                        <div className="">
                            <p className="font-medium">Socials</p>

                        </div>

                    </div>




                    <p className="text-md font-medium leading-none text-gray-800 mt-10 ">Price performance</p>

                    <div className="flex items-center justify-between mt-5">
                        <div className="">
                            <p className="font-medium">Low </p>
                            <p className="text-sx font-normal leading-none text-gray-800 mt-3 ">$0.0000274</p>
                        </div>
                        <div className="pl-4">
                            <p className="font-medium">High</p>
                            <p className="text-sx font-normal leading-none text-gray-800 mt-3">$0.0000274</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-5">
                        <div className="">
                            <p className="font-medium">All-time high </p>
                            {/* <p className="text-sx font-normal leading-none text-gray-800 mt-3 ">$0.0000274</p> */}
                        </div>
                        <div className="pl-4">
                            {/* <p className="font-medium">All-time low</p> */}
                            <p className="text-sx font-normal leading-none text-gray-800 mt-3">$0.0000274</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-5">
                        <div className="">
                           
                        <p className="font-medium">All-time low</p>
                        </div>
                        <div className="pl-4">
                            
                            <p className="text-sx font-normal leading-none text-gray-800 mt-3">$0.0000274</p>
                        </div>
                    </div>


                </div>
                <div className='w-[70%] h-auto border-2  '>
                    <div className="p-5">
                        <p className="font-medium">Chart</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Coindetailcard
