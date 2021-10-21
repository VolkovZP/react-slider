import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import style from './Slider.module.sass'
import CreateDots from './CreateDots'
import { ArrowForwardIos, ArrowBackIosNew } from '@mui/icons-material';

export default function Slider() {
    const [arrimg, setArrImg] = useState([])
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('/images.json')
            .then(res => res.json())
            .then(images => setArrImg(images))
    }, [])


    const nextImg = () => setCount((count + 1) % arrimg.length);
    const prevImg = () => setCount((count - 1 + arrimg.length) % arrimg.length)

    if (!Array.isArray(arrimg) || arrimg.length === 0) {
        return <div>NOTHING</div>
    }
    return (
        <section className={style.container}>
            <ArrowBackIosNew className={style.leftarrow} onClick={prevImg} />
            <Slide src={arrimg[count]} />
            <CreateDots images={arrimg} count={count} setCount={setCount} />
            <ArrowForwardIos className={style.rightarrow} onClick={nextImg} />
        </section>

    )
}
