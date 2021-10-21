import React from 'react'
import style from './CreateDots.module.sass'
import cx from 'classnames'
export default function CreateDots({ images, count, setCount }) {
    return (
        <div className={style.dots}>
            {images.map((_, index) => {
                return <div className={cx(style.dot, { [style.active]: count === index })} onClick={() => {
                    setCount(index)
                }} key={index.toLocaleString()}></div>
            })}
        </div>
    )
}
