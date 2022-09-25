import React from 'react'
import s from './OverlayModal.module.css'

export const OverlayModal = (props) => {

    console.log(props)
    return (
        <div 
            className={s.overlay}
            onClick={() => props.closeModal(false)}    
        >
            {props.children}
        </div>
    )
}
