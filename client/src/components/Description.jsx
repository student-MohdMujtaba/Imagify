import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg ' />
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text TO Image Generator</h2>

                <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis repellat voluptatem quam doloremque molestiae minus soluta mollitia iure inventore vero culpa deleniti, illum tempora dolorem iste molestias hic porro?</p>
                
                <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis expedita nesciunt animi cupiditate voluptate harum inventore non quidem modi ab ipsum in placeat illum recusandae, sapiente repellendus quos exercitationem tempore molestiae aspernatur officia ducimus eveniet porro. Quas, magnam. Nisi atque autem, delectus provident recusandae ullam iure non aliquam repellat necessitatibus.</p>
            </div>
        </div>
    </div>
  )
}

export default Description