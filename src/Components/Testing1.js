import React from 'react'
import "../Styling/testing1.css"
import vid3 from "../Videos/pexels-sora-shimazaki-5925291.mp4"
import vid1 from "../Videos/pexels-mikhail-nilov-6963744.mp4"
import vid2 from "../Videos/Matrix, Console, Hacking, Code.mp4"
function Testing1(props) {
    return (
      <div className="testing1">
            <div className="lines">
                {/* <h1 className="first">Wanna do coding together</h1>
                <h3 className="second">Get started here</h3> */}
            </div>
            <div className="videos">
            <div >
            <video  className="video_player_1" autoPlay loop muted>
          <source src={vid1} type="video/mp4" />
        </video>
        </div>
<div>
<video  className="video_player_2" autoPlay loop muted>
          <source src={vid2} type="video/mp4" />
        </video>
</div>
<div >
<video  className="video_player_3" autoPlay loop muted>
          <source src={vid3} type="video/mp4" />
        </video>

          </div>
        </div>
        </div>
            
        

      
    )
}

export default Testing1

