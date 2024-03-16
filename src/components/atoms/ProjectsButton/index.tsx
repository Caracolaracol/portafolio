
import { useStore } from "@nanostores/react"
import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, languageAtom, showSideMenuAtom } from "../../../store"

function ProjectsButton() {
    const isShowingSideMenu = useStore(isShowingSideMenuAtom)
    const language = useStore(languageAtom)


    const handlerSide = () => {
        if (isShowingSideMenu == false){
            showSideMenuAtom.set(true)
            isShowingSideMenuAtom.set(true)
        } else {
            hideSideMenuAnimationAtom.set(true)
            setTimeout(() => {
                showSideMenuAtom.set(false)
                isShowingSideMenuAtom.set(false)
                hideSideMenuAnimationAtom.set(false)  
            }, 452);
        }
    }

    return (
        <div onClick={handlerSide} className='laptop:hidden shrink flex flex-col items-center  group ' >
            <div className='flex justify-center bg-violet  dark:bg-violet filtromorado w-8 h-8 tablet:w-10 tablet:h-10 items-center active:bg-violetlight dark:active:bg-violetlight transition-colors cursor-pointer rounded-full -translate-x-[1px]'>
                <p className='text-ocre dark:text-ocre font-tommybold font-black text-lg tablet:text-xl svg group-hover:text-fucsia'>{`{ }`}</p>
            </div>
            <div className="cursor-pointer min-w-[59px]">
                <p className='font-tommyregular text-[0.6rem] tablet:text-[0.7rem] opacity-80 antialiased text-center text-black dark:text-snow transition-colors tracking-wider '>{language == 'en' ? 'projects' : 'proyectos'}</p>
            </div>
        </div>
    )
}

export default ProjectsButton