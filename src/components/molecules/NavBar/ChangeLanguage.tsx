import React from 'react'

function ChangeLanguage({ language }: { language: string | undefined }) {
  
  return (
    <div>
      <p className="font-tommyregular text-dark dark:text-snow text-center text-[0.65rem] tracking-wider antialiased">
        {language == "es" ? "english" : "español"}
      </p>
    </div>
  
  )
}

export default ChangeLanguage