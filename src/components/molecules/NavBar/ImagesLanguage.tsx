import React from 'react'
import actia from "../../../assets/images/buttons/actia.png";
import cast from "../../../assets/images/buttons/castn.png";

const ImagesLanguage = ({ language }: { language: string | undefined }) => {
  
  return (
    <>
    <img
      src={cast.src}
      alt="castnia moth"
      className={`h-auto w-[2.6rem]  ${language == "es" ? "hidden" : ""} cursor-pointer`}
      />
    <img
      src={actia.src}
      alt="actias luna"
      className={`h-auto w-[2.6rem]  ${language == "en" ? "hidden" : ""} cursor-pointer`}
      />
      </>
  )
}

export default ImagesLanguage