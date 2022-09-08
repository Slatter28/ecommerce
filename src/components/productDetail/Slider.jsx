import React, { useState } from 'react'
import { BtnSlider } from './BtnSlider'
import './styles/Slider.css'
const Slider = ({ productInfo }) => {
    console.log(productInfo)
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== productInfo?.productImgs.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === productInfo?.productImgs.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(productInfo?.productImgs.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <div className="container-slider">
            {productInfo?.productImgs.map((obj, index) => {
                console.log(obj);
                console.log(index);
                return (
                    <div
                        key={obj}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={obj}
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <div className="container-dots">
                {Array.from({length: productInfo?.productImgs.length}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider