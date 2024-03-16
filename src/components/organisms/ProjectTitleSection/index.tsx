
import type { ProjectData } from 'src/pages/api/proyects'
import NavigateButton from '../../atoms/NavigateButton'
import ProjectsButton from '../../atoms/ProjectsButton'
import Title from '../../atoms/Title'

interface Props {
  name: string  | undefined,
  nameES?: string  | undefined,
  idPreviousProject: string | boolean | null | undefined,
  idNextProject: string | boolean | null | undefined,
  pathname: string | undefined
}

function ProjectTitleSection({ name, nameES, idPreviousProject, idNextProject, pathname }: Props ) {
console.log(name)
  return (
    <div className="flex justify-between items-center border-b-[1px] border-spacing-2 border-timberwolf dark:border-b-timberwolf !border-opacity-30 pb-3 mb-6 h-[3rem] tablet:h-[3.6rem] laptop:h-[3.8rem] desktop:h-[4rem]">
      <ProjectsButton />
      <Title name={name} nameES={nameES} />
      <NavigateButton idPreviousProject={idPreviousProject} idNextProject={idNextProject} pathname={pathname}/>
    </div>
  )
}

export default ProjectTitleSection