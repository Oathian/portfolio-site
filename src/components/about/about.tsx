import "./about.scss";

import { DiLaravel } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { GrGatsbyjs } from "react-icons/gr";
import { FaShopify } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrGraphQl } from "react-icons/gr";
import { SiLivewire } from "react-icons/si";

const skillsArray = [
    {
        "name": "Laravel",
        "icon": DiLaravel
    },
    {
        "name": "Gatsby",
        "icon": GrGatsbyjs
    },
    {
        "name": "React",
        "icon": DiReact
    },
    {
        "name": "Shopify",
        "icon": FaShopify
    },
    {
        "name": "WordPress",
        "icon": FaWordpress
    },
    {
        "name": "PHP",
        "icon": DiPhp
    },
    {
        "name": "JavaScript",
        "icon": IoLogoJavascript
    },
    {
        "name": "GraphQL",
        "icon": GrGraphQl
    },
    {
        "name": "MongoDB",
        "icon": DiMongodb
    },
    {
        "name": "Git",
        "icon": DiGit
    },
    {
        "name": "Livewire",
        "icon": SiLivewire
    },
];

const About = () => {

    return (
        <div>
            <h1>My work</h1>
            <h2>Skillset</h2>
            <div className="about-skill-list">
                { skillsArray && skillsArray.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <div 
                            className="about-skill-card"
                            key={`skills-${skill.name}`}
                        >
                            <Icon className="about-skill-icon" />
                            <p>{ skill.name }</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default About;