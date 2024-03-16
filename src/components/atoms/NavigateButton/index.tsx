import React, { useEffect, useState } from 'react'
import prev from '../../../assets/images/buttons/previo.png'
import next from '../../../assets/images/buttons/proximo.png'
import { useStore } from '@nanostores/react'
import { locationAtom } from '../../../store'

function NavigateButton({idPreviousProject, idNextProject, pathname}:any) {
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const $location = useStore(locationAtom)
    
    useEffect(() => {
        locationAtom.set('/portfolio')
        console.log($location)
        console.log(pathname)
        idNextProject == null ? setAtEnd(true) : setAtEnd(false)
        idPreviousProject == null ? setAtStart(true) : setAtStart(false)
    },[idPreviousProject, idNextProject, locationAtom, pathname])

    return (
        <div className='flex justify-end items-center grow gap-2 tablet:pb-0 '>
            <div className="w-12 min-w-12 tablet:w-16 tablet:min-w-16 min-h-10 rounded-full">
                {atStart ? null : <a href={`/portfolio/${idPreviousProject ? idPreviousProject : null}`}>
                    <button className={`font-tommyregular tablet:text-xl flex flex-col items-center filtromorado group`}>
                        <div className='p-1 circleround bg-violet  dark:bg-violet group-hover:bg-violetlight'>
                            <img src={prev.src} alt='anterior proyecto' width={20} height={30} className={`p-[0.1rem] tablet:w-[25px] tablet:h-[25px] group-active:brightness-50  `} />
                        </div>
                        <p className='text-[0.65rem] tablet:text-[0.7rem] tracking-wider'>previous</p>
                    </button>
                </a>
                }
            </div>

            <div className="w-12 min-w-12 tablet:w-16 tablet:min-w-16 min-h-10 rounded-full">
                {atEnd ? null : <a href={`/portfolio/${idNextProject}`} >
                    <button className='font-tommyregular tablet:text-xl flex flex-col items-center filtromorado group'>
                        <div className='p-1 circleround bg-violet  dark:bg-violet group-hover:bg-violetlight'>
                            <img src={next.src} alt='siguiente' width={20} height={30} className={`p-[0.1rem] tablet:w-[25px] tablet:h-[25px] group-active:brightness-50 `} />
                        </div>
                        <p className='text-[0.65rem] tablet:text-[0.7rem] tracking-wider'>next</p>
                    </button>
                </a>}
            </div>
        </div>
  )
}

export default NavigateButton