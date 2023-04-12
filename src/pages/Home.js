import React from 'react';

function Home() {
    return (
        <div class="home-div">
            <h1 class="home-title">Home</h1>



            {/* <div class="flex-container">
                <div>first flex container</div>
                <div>second flex container</div>
                <div>third flex container</div>
            </div> */}

            <div class="flex-container">
                <div class="flex-left">
                This will have content in the left box.
                More text here and here.
                <i class="bi bi-door-closed-fill"></i>
                {/* bootstrap icon above */}
                </div>
                <div class="flex-right">
                This will have content in the right box.
                </div>
            </div>

        </div>
        
    )
}

export default Home;