import React, { useState } from "react";
import "./MyImage.scss";

const MyImage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);
    return (
        <div className='image-wrapper'>
            <div className='grid grid-four-column'>
                {imgs.map((curElem, index) => {
                    return (
                        <figure key={index}>
                            <img
                                src={curElem.url}
                                alt={curElem.filename}
                                className='box-image--style'
                                key={index}
                                onClick={() => setMainImage(curElem)}
                            />
                        </figure>
                    );
                })}
            </div>
            {/* 2nd column  */}

            <div className='main-screen'>
                <img
                    src={mainImage.url}
                    key={crypto.randomUUID()}
                    alt={mainImage.filename}
                />
            </div>
        </div>
    );
};

export default MyImage;
