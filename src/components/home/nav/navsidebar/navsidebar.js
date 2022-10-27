import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NarSideBar=({data})=>{
    return(
        <div>
            <div className='flex justify-start'>
          <FontAwesomeIcon icon={data.font} className='text-yellow-500 pr-2'></FontAwesomeIcon>
          <p className='text-color_gray font-bold'>{data.title}</p>
          </div>
        </div>
    )
}
export default NarSideBar;