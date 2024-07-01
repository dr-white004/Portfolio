import React from 'react'

function ProjectCard({item}) {
  return (
    <>
      <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
              <img src={item.img} alt=""  className="w-full h-full "style={{height: '300px', width: '400px', }} />
              <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
                <h1 className="font-bold text-3xl">{item.title}</h1>
                <p className="font-bold">{item.description}</p>
                <button
                    className=" border-black border-[1] py-2 px-4 rounded-lg font-bold text-sm"
                    onClick={() => window.location.href = `${item.link}`}
                  >
                    Visit
                  </button>
              </div>
            </div>
    </>
  )
}

export default ProjectCard