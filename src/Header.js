import React from 'react';
import './style.css';
import 'tachyons';

function Header(){

    return(
        <div >
            <div className='headers'>
            <h1>
            2020 1ST S2C2IT , Bangalore
            </h1>
            <p className='headers1'>
                2ND - 3RD  JANUARY  2020
                VENUE: BMSIT&M COLLEGE , YELAHANKA
            </p>

            </div>
           
            <div className='flex tj flex-wrap tiles'>
                <div className=' tiles1 dib br3 pa3  grow w-30'>
                    <h2>
                        Call For Papers
                    </h2>
                    <p>
                        The theme for 1ST S2C2IT 2020 is ........
                        Engineers will be brought together from academia and industry,
                         and they will freely expose their ideas and
                          opinions on emerging issues in the field of 
                          electrical, electronics and computer engineering 
                          as well as information technologies.
                          </p>

                </div>
                <div className='tiles2 tj  dib br3 pa3  grow w-30 '>
                    <h2>
                        Important Dates
                    </h2>
                    <p>
                    FULL Paper submission HARD deadline:  14th Jan 2019 
                    Notification of acceptance date: 25 dec 2018
                    Early Bird Dates: X/y/X
                    </p>

                </div>
                <div className=' tj tiles3 dib br3 pa3  grow w-33'>
                    <h2>
                        Paper Submission
                    </h2>
                    <p>
                    For paper submission guidelines, instructions and template, please  
                     >click Here The papers need to be submitted online, where they will be reviewed,
                      and the decisions and reviewers comments would be sent to the corresponding author. 
                    The maximum paper length is 7 pages. Authors with more than 5 pages papers should pay more
                    </p>

                </div>
            </div>
            <p className='fulltitle tc bb bt b--yellow'>S2C2IT 2020: 2020 1st International 
                Conference on Sustainable Solutions in Computing, Communication and Information Technology
            </p>

            <p className='fulltitle tc bb bt b--yellow'>
                VENUE: BMSIT&M ,YELAHANKA ,Bangalore
                <br/>
                Date:January 2-4, 2020
            </p>
            <div className='collegeimg'></div>
           


        </div>
    )
}

export default Header;