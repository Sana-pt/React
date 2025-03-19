import React from 'react'

function Component1() {
    return (
        <div className='bg-slate-300 h-20'>
            <nav className='flex justify-between pr-14 text-base text-black'>
                <div className='pl-12 pt-6'>
                    <button className='bg-red-500 w-14 rounded-lg py-px'>React</button>
                </div>
                <div className='pt-6 text-lg'>
                    <a className='pr-10' href='#'>Home</a>
                    <a className='pr-10' href='#'>About</a>
                    <a className='pr-6' href='#'>Contact</a>
                </div>
            </nav>
        </div>

    )
}

export default Component1