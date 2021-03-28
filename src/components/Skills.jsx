import React from 'react'

function Skills({skill, progress, width}) {
    return (
        <div className="skill-page">
            <div className="skill-cont">  
                <h5>{skill}</h5>
                <div className="skill-bar">
                    <p>{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-progress" style={{width:width}} ></div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Skills
