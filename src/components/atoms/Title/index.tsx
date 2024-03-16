import { languageAtom } from '../../../store'
import { useStore } from '@nanostores/react'

interface Props {
  name: string | undefined,
  nameES?: string | undefined
}

function Title({ name, nameES }:any) {
  const language = useStore(languageAtom)

  return (
    <div className="pl-2 h-[2.7rem] flex items-center">
      <h1 className={`text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl font-tommyMedium opacity-90 transitionshort`}>{language == 'es' ? name : nameES || name} </h1>
    </div>
  )
}

export default Title