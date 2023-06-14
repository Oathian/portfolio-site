import "./about.scss";

const About = () => {
    const skillsArray = [
        {
            "title" : "Laravel",
            "image" : ""
        },
        {
            "title" : "Gatsby",
            "image" : ""
        }
    ];

    return (
        <div>
            <h1>My work</h1>
            <h2>Skillset</h2>
            <div>
                { skillsArray && skillsArray.map((skill) => {
                    return (
                        <div key={`skills-${skill.title}`}>
                            <img src={ skill.image } alt={`${skill.title} logo`} />
                            <p>{ skill.title }</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default About;