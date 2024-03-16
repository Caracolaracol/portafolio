

function NavBarMobileBtns({themeHandler,maripn, marip, languageHandler, cast, language, actia}:any) {
    return (
        <div className='flex flex-row justify-center'>
            <div onClick={themeHandler} className='flex w-full flex-col cursor-pointer items-center justify-center'>

                <img src={maripn.src} alt='luciernaga' className={`w-12 h-auto ${document.documentElement.classList.contains('dark') ? 'hidden' : ''} cursor-pointer`} />
                <img src={marip.src} alt='abeja' className={`w-12 h-auto ${document.documentElement.classList.contains('') ? 'hidden' : ''} cursor-pointer`} />
                <div>
                    <p className='font-tommyregular text-snow text-xs antialiased text-center tracking-wider'>{document.documentElement.classList.contains('dark') ? 'light mode' : 'dark mode'}</p>
                </div>
            </div>
            <div onClick={languageHandler} className='flex w-full flex-col items-center cursor-pointer justify-center'>
                <img src={cast.src} alt='castnia moth' className={`w-10 grow h-auto ${language == 'es' ? 'hidden' : ''} cursor-pointer`} />
                <img src={actia.src} alt='actias luna' className={`w-10 grow h-auto ${language == 'en' ? 'hidden' : ''} cursor-pointer`} />
                <div>
                    <p className='font-tommyregular text-snow text-xs antialiased text-center tracking-wider'>{language == 'es' ? 'english' : 'español'}</p>
                </div>
            </div>
        </div>
    )
}

export default NavBarMobileBtns