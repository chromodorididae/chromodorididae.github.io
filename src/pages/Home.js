// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react';

function Home() {
    return (
        <div className='home-div'>
            {/* <h1 className="home-title">Home</h1> */}
            <body>
            <div className='body'>
            <div className='container'>
                <div className='primary-sidebar'>
                    {/* here is the primary sidebar */}
                    <h1 style={{padding: '20px', fontSize: '30px'}}>Marina Medrano</h1>
                <br />
                <a href="https://github.com/chromodorididae">
                <i className='fab fa-github-alt' style={{fontSize: '72px', color: 'black', marginTop: '-60px', marginBottom: '10px'}}></i>
                </a>
                <p className='bio-section' style={{padding: '10px', lineHeight: '150%'}}>
                <span style={{backgroundColor: 'black', color: 'white'}}>NYC based web developer</span>
                <br /><br />
                I am a curiosity driven programmer seeking to develop user-friendly web applications with unique features and designs.
                <br /><br />
                I am strongly invested in developing accessible and readible sites to create a more open web experience for all.
                </p>
                <h5>
                    {/* Technologies I use: */}

                    
                    <ul class="mern-stack">
                        <li>MongoDB
                        <i className="fa fa-database"></i>
                        {/* Express
                        <i className='fas fa-server'></i> */}
                        </li>
                        <li>Express
                        <i className='fas fa-server'></i>
                        </li>


                        <li>React
                        <i className='fab fa-react'></i>
                        </li>
                        {/* Node
                        <i className='fab fa-node-js'></i> */}
                        <li>Node
                        <i className='fab fa-node-js'></i>
                        </li>
                        
                    </ul>
                </h5>

                <div>
                    <h5 style={{marginTop:'25px'}}><br />Get in touch</h5>
                    <p>
                        chromodorididae@gmail.com<br />
                        <i class="fa fa-envelope" style={{paddingLeft: '10px'}}></i>
                       {/* <br />
                       linkedin.com/example-linkedin-account
                       <i class='fas fa-address-card' style={{paddingLeft: '10px'}}></i> */}
                    </p>
                </div>

                </div>

                <div className='main-body'>
                    {/* here is the main body
                    <br /> */}
                    {/* [enter photo carousel here] */}
                    <h3 className='demo-title'>CURRENT DEMO</h3>
                    <iframe src="https://codesandbox.io/embed/todos-forked-vw45mf?fontsize=14&hidenavigation=1&theme=dark"
                    style={{paddingTop: '25px', width:'100%', height:'600px', border:'0px', borderRadius: '4px', overflow:'hidden'}}
                    title="Todos (forked)"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>
                </div>

                <div className='secondary-sidebar'>
                    {/* here is the second sidebar */}
                    <br />
                        <i class="fa fa-briefcase"></i>
                        {/* <h5 style={{padding: '10px', marginTop: '-25px'}}> */}
                        <h5 style={{marginTop: '-25px'}}>

                        <br />
                        Skills & Experience</h5>
                        
                        <ul>
                            <li>
                                Job Title
                            </li>
                            <br/>
                            <li>
                                Job Title
                            </li>
                            <br/>
                            <li>
                                Job Title
                            </li>
                            <br/>
                            <li>
                                Job Title
                            </li>
                        </ul>

                            <h5>
                            <i class="fa fa-graduation-cap"></i>
                            <br />
                            Education</h5>
                        <ul>

                            <li>
                                <h6>Degree:</h6>
                            Associate in Science 
                            <p>5/2022</p>
                            </li>
                            <li>
                                <h6>Certifications:</h6>
                                <p>CompTIA A+
                                <br />Month/Year</p>
                                
                                <p>
                                    Software Engineering,
                                    <br />
                                    Per Scholas
                                    <br/>
                                    4/2023
                                </p>
                            </li>
                        </ul>

                        {/* <ul>
                            <h5></h5>
                            <li></li>
                        </ul> */}
                </div>
                {/* .body tag ends on next line */}
                </div> 
            </div></body>

        </div>
        
    )
}

export default Home;