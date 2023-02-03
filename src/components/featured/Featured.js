import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'
import './featured.scss'

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === 'movies' ? 'Movies' : "Series"}</span>
                <select name='genre' id='genre'>
                    <option>Genre</option>
                    <option value='adventure'>Adventure</option>
                    <option value='comedy'>Comedy</option>
                    <option value='crime'>Crime</option>
                    <option value='fantasy'>Fantasy</option>
                    <option value='historical'>Historical</option>
                    <option value='horror'>Horror</option>
                    <option value='romance'>Romance</option>
                    <option value='sci-fi'>Sci-fi</option>
                    <option value='thriller'>Thriller</option>
                    <option value='western'>Western</option>
                    <option value='animation'>Animation</option>
                    <option value='drama'>Drama</option>
                    <option value='documentary'>Documentary</option>
                </select>
            </div>
        )}
      <img
        // width="100%"
            src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg'
            alt=''  
            />
            <div className='info'>
                <img 
                // height="350px"
                // width="480px"
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbj3bidsCJ-eUzM5OV4SXWlqn7WO7C7z6wpw&usqp=CAU'
                alt='' 
                />
                <span className='desc'>
                Note that the development build is not optimized.
To create a production build
                </span>
                <div className='buttons'>
                    <button className='play'>
                        <PlayArrow />
                        <span>play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Featured
