// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react';

function Home() {
    return (
        <div class="home-div">
            {/* <h1 class="home-title">Home</h1> */}
            



            {/* <div class="flex-container">
                <div>first flex container</div>
                <div>second flex container</div>
                <div>third flex container</div>
            </div> */}

            <div class="flex-container">
                <div class="flex-left">
                <h1 style={{padding: '20px', fontSize: '30px'}}>Marina Medrano</h1>
                <br />
                <a href="https://github.com/chromodorididae">
                <i class='fab fa-github-alt' style={{fontSize: '72px', color: 'black', marginTop: '-60px'}}></i>
                </a>
                <p style={{padding: '15px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                </p>
                <h5>
                    {/* Technologies I use: */}
                    <ul>
                        <li>MongoDB
                        <i class="fa fa-database"></i>
                        </li>
                        <li>Express
                        <i class='fas fa-server'></i>
                        </li>
                        <li>React
                        <i class='fab fa-react'></i>
                        </li>
                        <li>Node
                        <i class='fab fa-node-js'></i>
                        </li>
                        
                    </ul>
                </h5>

                </div>
                <div class="flex-right">
                This will have content in the right box.
                More text here and here.
                <br />
                <div>
                    SECTION 1
                </div>
                <div>
                    SECTION 2
                </div>
                <div>
                    SECTION 3
                </div>
                </div>
            </div>

        </div>
        
    )
}

export default Home;