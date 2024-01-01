import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';
import Project5 from './img/portfolio-5.jpg';
import Project6 from './img/portfolio-6.jpg';

function Project() {
  return (
    <div className="project component__space" id="Projects">
      <div className="heading">
        <h1 className="heading">My Projects</h1>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">ChildCare</h5>
                     <h4 className="project__text">A website that NGO's will use for assisting health care of children</h4>
                     <a href="https://github.com/amyra98/Debugit_2022" className="project__btn">View Code</a>
                     <a href="http://debugit-2022-three.vercel.app/" className="project__btn">View Website</a>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">NewsAdda</h5>
                     <h4 className="project__text">A website where you may read news about any topic you like.</h4>
                     <a href="https://github.com/amyra98/NewsAdda" className="project__btn">View Code</a>
                     <a href="#" className="project__btn">View Website</a>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">SnakeMania</h5>
                     <h4 className="project__text">A website has a snake game similar to the Nokia one.</h4>
                     <a href="https://github.com/amyra98/SnakeGame" className="project__btn">View Code</a>
                     <a href="https://snake-game-eight-beta.vercel.app/" className="project__btn">View Website</a>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Picky</h5>
                     <h4 className="project__text">A website where you can come up with pickup lines to wow your crush</h4>
                     <a href="https://github.com/amyra98/Picky" className="project__btn">View Code</a>
                     <a href="http://picky-bay.vercel.app/" className="project__btn">View Website</a>
                     </div>
                 </div>
             </div>

            
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">JsChallenge</h5>
                     <h4 className="project__text">A website with a variety of little games</h4>
                     <a href="https://github.com/amyra98/JSChallenge" className="project__btn">View Code</a>
                     <a href="https://js-challenge-eta.vercel.app/" className="project__btn">View Website</a>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">SchoolBus</h5>
                     <h4 className="project__text">A website that allows schools and parents to monitor their children's travel status</h4>
                     <a href="https://github.com/amyra98/UberHackTag2.0_TeamBugs_Website" className="project__btn">View Code</a>
                     <a href="https://vercel.com/amyra98/uber-hack-tag2-0-team-bugs-website" className="project__btn">View Website</a>
                     </div>
                 </div>
             </div>


           </div>
       </div>
    </div>
  );
}

export default Project;
