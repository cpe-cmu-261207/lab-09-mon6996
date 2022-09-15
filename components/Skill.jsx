import React from 'react'

export default function Skill()
{
  return (
      <div><p className="mx-auto mt-5 p-3 fw-bold h3 text-center text-black">Skills</p>
          {/* 1 */}
          <div className="box card mx-auto mb-3" style={{ maxWidth: "80%" }}>
              <div className="d-flex">
                  <img
                      src="/C++_logo.png"
                      className="-fluid rounded-start"
                      width="150"
                      height="150"
                  />
                  <div className="card-body my-auto">
                      <h5 className="card-title fw-bold h4">C++</h5>
                      <p className="card-text h5">I made game by using C++.</p>
                  </div>
              </div>
          </div>
      </div>
  )
}
