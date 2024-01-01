import React from "react";
import "./Skill.css";

function Skill() {
  return (
    <div className="skill component__space" id="Skills">

      <div className="heading">
        <h1 className="heading">My Skills</h1>
      </div>

      <div className="container">
        <div className="row">
         
          <div className="col__2">
            <div className="skill__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="skill__meta">
                <h1 className="skill__text">Frontend Website Development</h1>
                <br></br>
                <p className="p skill__text p__color">
                  <li>HTML</li>
                </p>
                <p className="p skill__text p__color">
                  <li>CSS</li>
                </p>
                <p className="p skill__text p__color">
                  <li>JavaScript</li>
                </p>
                <p className="p skill__text p__color">
                  <li>React</li>
                </p>
              </div>
            </div>
          </div>

          <div className="col__2">
            <div className="skill__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="skill__meta">
                <h1 className="skill__text">Backend Website Development</h1>
                <br></br>
                <p className="p skill__text p__color">
                  <li>NodeJs</li>
                </p>
                <p className="p skill__text p__color">
                  <li>Django</li>
                </p>
                <p className="p skill__text p__color">
                  <li>NextJs</li>
                </p>
                <p className="p skill__text p__color">
                  <li>ExpressJs</li>
                </p>
              </div>
            </div>
          </div>

          <div className="col__2">
            <div className="skill__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="skill__meta">
                <h1 className="skill__text">Competitive Programming</h1>
                <p className="p skill__text p__color" style={{margin:"15px"}}>
                  Languages:
                </p>
                <p className="p skill__text p__color">
                  <li>C++</li>
                </p>
                <p className="p skill__text p__color">
                  <li>C</li>
                </p>
                <p className="p skill__text p__color">
                  <li>Python</li>
                </p>
              </div>
            </div>
          </div>
         
          <div className="col__2">
            <div className="skill__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="skill__meta">
                <h1 className="skill__text">Data Structures Algorithms</h1>
                <p className="p skill__text p__color" style={{marginTop:"15px"}}>
                  <li>Stack,Queue</li>
                </p>
                <p className="p skill__text p__color">
                  <li>Linked List</li>
                </p>
                <p className="p skill__text p__color">
                  <li>Recursion,DP</li>
                </p>
                <p className="p skill__text p__color">
                  <li>Graph,Trees</li>
                </p>
              </div>
            </div>
          </div>

          <div className="col__2">
            <div className="skill__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="skill__meta">
                <h1 className="skill__text">Tech Handles</h1>
                <p className="p skill__text p__color" style={{marginTop:"15px"}} >
                  <li><a href="https://codeforces.com/profile/priti2002bwn">Codeforces</a></li>
                </p>
                <p className="p skill__text p__color" >
                  <li><a href="https://github.com/amyra98">Github</a></li>
                </p>
                <p className="p skill__text p__color" >
                  <li><a href="https://leetcode.com/priti2002bwn/">Leetcode</a></li>
                </p>
                <p className="p skill__text p__color" >
                  <li><a href="https://www.hackerrank.com/priti2002bwn">Hackerrank</a></li>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skill;
