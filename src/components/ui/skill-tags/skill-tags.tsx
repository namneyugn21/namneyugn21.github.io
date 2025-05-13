import React from "react";
import "./skill-tags.css";

type Skill = {
  category: string;
  name: string;
};

type SkillTagsProps = {
  skills: Skill[];
};

export default function SkillTags({ skills }: SkillTagsProps) {
  return (
    <div className="skill-tags_container inter-light">
      {skills.map((skill, index) => (
  <div key={index} className={`skill-tags_tag ${skill.category}`}>
          {skill.name}
        </div>
      ))}
    </div>
  );
}
