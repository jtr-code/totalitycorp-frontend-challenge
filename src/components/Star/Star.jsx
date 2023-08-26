import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

import "./Star.scss"

const Star = ({ stars, reviews }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar className='icon' />
                ) : stars >= number ? (
                    <FaStarHalfAlt className='icon' />
                ) : (
                    <AiOutlineStar className='icon' />
                )}
            </span>
        );
    });

    return (
        <div className="star-wrapper">
            <div className='icon-style'>
                {ratingStar}
                <p>({reviews} customers reviews)</p>
            </div>
        </div>
    );
};

export default Star;
