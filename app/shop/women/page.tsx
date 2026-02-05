

export default function WomenPage() {
    return (
        <div>
            <div className="flex items-center justify-center gap-5 mt-10">

                <button className="flex border-[1]  hover:bg-white/90 hover:text-gray-900 border-gray-500 rounded-4xl justify-center w-30 h-6 text-[14px] text-gray-50 ">Dress </button>
                <button className="flex border-[1] hover:bg-white/90 hover:text-gray-900 border-gray-500 rounded-4xl justify-center w-30 h-6 text-[14px] text-gray-50 ">Top</button>
                <button className="flex border-[1]  hover:bg-white/90 hover:text-gray-900 border-gray-500 rounded-4xl justify-center w-30 h-6 text-[14px] text-gray-50 ">Pants</button>
                <button className="flex border-[1]  hover:bg-white/90 hover:text-gray-900 border-gray-500 rounded-4xl justify-center w-30 h-6 text-[14px] text-gray-50 ">Cardigan</button>
                <button className="flex border-[1]  hover:bg-white/90 hover:text-gray-900 border-gray-500 rounded-4xl justify-center w-30 h-6 text-[14px] text-gray-50 ">Jacket</button>
                <button className="flex border-[1]  hover:bg-white/90 hover:text-gray-900 border-gray-500 rounded-4xl justify-center w-30 h-6 text-[14px] text-gray-50 ">Jeans</button>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 gap-15">
                <div className="flex gap-15">
                    <div>
                        <div className="flex text-white border-[1] h-70 w-60 rounded-2xl justify-center"> Product1</div>
                        <div className="flex justify-center m-2 text-white ">Women Long Sleeve</div>
                    </div>
                    <div>
                        <div className="flex text-white border-[1] h-70 w-60 rounded-2xl justify-center"> Product2</div>
                        <div className="flex justify-center m-2 text-white ">High Quality Wool Chunky <br /> Knitted Cardigans Sweater</div>
                    </div>
                    <div>

                        <div className="flex text-white border-[1] h-70 w-60 rounded-2xl justify-center"> Product3</div>
                        <div className="flex justify-center m-2 text-white ">High Quality Wool Chunky <br /> Knitted Cardigans Sweater</div>
                    </div>
                    <div>

                        <div className="flex text-white border-[1] h-70 w-60 rounded-2xl justify-center"> Product4</div>
                        <div className="flex justify-center m-2 text-white ">High Quality Wool Chunky <br /> Knitted Cardigans Sweater</div>
                    </div>

                </div>
                <div className="flex gap-15">
                    <div className=" flex text-white border-[1] h-70 w-60 rounded-2xl justify-center  "> Product1</div>
                    <div className="flex text-white border-[1] h-70 w-60 rounded-2xl justify-center"> Product2</div>
                    <div className="flex text-white border-[1] h-70 w-60 rounded-2xl justify-center"> Product3</div>
                    <div className="flex text-white border-[1] h-70 w-60 rounded-2xl justify-center"> Product4</div>
                </div>
            </div>
        </div>
    )

}
