import React, { useState, useEffect } from 'react'
import style from './Slide.module.sass'
import cx from 'classnames'

export default function Slide({ src }) {
    return (
        <div className={style.innerWrapper}>
            <img className={style.image} src={src} alt="" />
        </div>
    )
}
