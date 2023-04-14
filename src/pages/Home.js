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
                    <p style={{padding: '20px'}}>
                        <h4>Scroll Down</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed. Ut consequat semper viverra nam libero justo. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Dignissim diam quis enim lobortis scelerisque fermentum dui. Mi sit amet mauris commodo quis. Morbi leo urna molestie at. Orci eu lobortis elementum nibh. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Nisl purus in mollis nunc sed. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus.

                    In ante metus dictum at tempor commodo ullamcorper a lacus. Ultricies lacus sed turpis tincidunt id aliquet. Arcu cursus euismod quis viverra. Habitant morbi tristique senectus et netus et malesuada fames ac. Leo a diam sollicitudin tempor. Vitae aliquet nec ullamcorper sit. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Neque ornare aenean euismod elementum nisi quis eleifend quam. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Pellentesque elit eget gravida cum sociis natoque penatibus. Aliquam purus sit amet luctus venenatis lectus magna. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Nunc sed velit dignissim sodales ut eu sem integer vitae. Ultricies mi quis hendrerit dolor magna. Nibh venenatis cras sed felis eget. Ornare quam viverra orci sagittis eu volutpat.

                    Justo eget magna fermentum iaculis eu. Convallis aenean et tortor at risus. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Augue neque gravida in fermentum. Non nisi est sit amet facilisis magna. Et ultrices neque ornare aenean euismod elementum nisi. Et netus et malesuada fames ac turpis egestas sed. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Massa massa ultricies mi quis hendrerit dolor magna eget. Aliquam nulla facilisi cras fermentum odio eu. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed.
                    
                    </p>
                </div>

                <div className='secondary-sidebar'>
                    {/* here is the second sidebar */}
                    <br />
                        <i class="fa fa-briefcase"></i>
                        {/* <h5 style={{padding: '10px', marginTop: '-25px'}}> */}
                        <h5 style={{marginTop: '-25px'}}>

                        <br />
                        Skills & Experience</h5>
                        <hr />
                        <ul>
                            <li>
                                Technical Support Representative
                            </li>
                            <br/><br/>
                            <li>
                                Front Desk Agent
                            </li>
                            <br/>
                            {/* <li>
                                Job Title
                            </li>
                            <br/>
                            <li>
                                Job Title
                            </li> */}
                            <br />
                            <li>
                                Problem-solving
                            </li>
                            <li>
                                Self-driven
                            </li>
                            <li>
                                Creative thinking
                            </li>
                        </ul>

                            <h5>
                            <i class="fa fa-graduation-cap"></i>
                            <br />
                            Education</h5>
                            <hr />

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