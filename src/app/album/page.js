import Image from 'next/image';
import nextLogo from '@/assets/image.png'

const AlbumPage = () => {
    return (
        <div>
            <h3>Image component</h3>
            <Image src="https://velog.velcdn.com/images/wish/post/ae424c35-84f8-411c-85f5-c96890ed2a1a/image.png" alt="next logo"
            width={500}
            height={500}/>
            <Image src={nextLogo} alt="next logo"
            width={500}
            height={500}/>
            <img src="https://velog.velcdn.com/images/wish/post/ae424c35-84f8-411c-85f5-c96890ed2a1a/image.png" alt="next logo"
            width="500px"
            height="500px"/>
            
        </div>
    );
};

export default AlbumPage;