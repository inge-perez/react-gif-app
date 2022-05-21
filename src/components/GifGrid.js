import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    // -- Forma Tradicional -- 
    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     getGifs(category).then(imgs => setImages(imgs))
    // }, [category])
    // -- FIN Forma Tradicional -- 


    // -- Custom Hooks -- 
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {/* <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))}
            </div> */}
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))}
            </div>
        </>

    )
}

export default GifGrid