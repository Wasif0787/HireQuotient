import React, { useState } from 'react'
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

function Footer() {
    const pageNo = [1, 2, 3, 4, 5]
    return (
        <>
            <div className='mt-5 flex justify-between'>
                <div className="font-extralight">0 of 4 row(s) selected</div>
                <div className='flex gap-10'>
                    <div className='font-semibold text-sm '>Page 1 of 5</div>
                    <div className='flex gap-3'>
                        <button className='border p-2 border-gray-400'>
                            <TbPlayerTrackPrev />
                        </button>
                        <button className='border p-2 border-gray-400'>
                            <GrCaretPrevious />
                        </button>
                        {true && pageNo.map((no, idx) => (
                            <button className='border p-2 border-gray-400' key={idx}>
                                {no}
                            </button>
                        ))}
                        <button className='border p-2 border-gray-400'>
                            <GrCaretNext />
                        </button>
                        <button className='border p-2 border-gray-400' >
                            <TbPlayerTrackNext />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer