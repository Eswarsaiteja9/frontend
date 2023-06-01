import React from 'react'

import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

import galleryImages from './galleryImages'

const MasonryLayout = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
        <Masonry gutter="1rem">
            {
                galleryImages.map((image,index)=>(
                    <img src={image} alt="pictures" className="masonry__img p-1" key={index} style={{width:'100%',display:'block',borderRadius:'10px'}}/>
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryLayout