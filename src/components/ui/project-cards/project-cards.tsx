import React from "react";
import "./project-cards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import SkillTags from "../skill-tags/skill-tags.tsx";

export default function ProjectCards({ images, title, description, link, skills }: { images: string, title: string, description: string, link: string, skills: {category: string, name: string}[] }) {
    return (
        <div className="card_container">
            <div className="card_container-image">
                <img src={images} alt="project-image" draggable='false' />
            </div>
            <div className="header_container">
              <div className="card_container-title">
                  <a className="card_container-title-text exo2-regular" href={link} target="_blank" rel="noreferrer">{title}</a>
                  <a href={link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="card_container-title-icon" /></a>
              </div>
              <SkillTags skills={skills} />
            </div>
            <div className="card_container-description">
                <p className="card_container-description-text exo2-light">{description}</p>
            </div>
        </div>
    )
}