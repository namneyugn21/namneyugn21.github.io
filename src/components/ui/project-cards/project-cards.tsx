import React from "react";
import "./project-cards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function ProjectCards({ images, title, description, link }) {
    return (
        <div className="card_container">
            <div className="card_container-image">
                <img src={images} alt="project-image" draggable='false' />
            </div>
            <div className="card_container-title">
                <a className="card_container-title-text roboto-slab-light" href={link} target="_blank" rel="noreferrer">{title}</a>
                <a href={link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="card_container-title-icon" /></a>
            </div>
            <div className="card_container-description">
                <p className="card_container-description-text roboto-slab-extra-light">{description}</p>
            </div>
        </div>
    )
}