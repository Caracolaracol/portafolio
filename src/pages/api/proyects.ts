import projects from '../../db/projects.json'

export interface App {
    id:             string;
    name:           string;
    nameES:         string;
    projectType:    string;
    description:    string;
    descriptionES:  string;
    opinion:        string;
    opinionES:      string;
    images:         string[];
    imagesmobile:   string[];
    video?:         string;
    illustrations?: string;
    github:         string;
    link?:          string;
    technologies:   Technology[];
}

interface Technology {
    idtech:      string;
    name:        string;
    img:         string;
    description: string;
}

export interface Art {
    id:            string;
    name:          string;
    nameES:        string;
    projectType:   string;
    description:   string;
    descriptionES: string;
    opinion?:      string;
    opinionES?:    string;
    images?:       string[];
    video?:         string;
    imagesmobile?:   string[];
    illustrations?: string;
    github?:         string;
    link?:          string;
    technologies?:   Technology[];
}

export interface Video {
    id:            string;
    name:          string;
    nameES?:        string;
    projectType:   string;
    description:   string;
    descriptionES: string;
    opinion?:      string;
    opinionES?:    string;
    imagesmobile?:   string[];
    illustrations?: string;
    images:        string[];
    video:         string;
    github?:         string;
    link?:          string;
    technologies:  Technology[];
}

interface AllProjectsDataArray {
    web:       App[];
    apps:           App[];
    videos:         Video[];
    art:            Art[];
}

export interface ProjectData {
    allProjectsDataArray: (App | Video | Art)[] ;
    projectData: App | Video | Art ;
    projectFound: App | Video | Art | undefined;
    projectType: string | undefined;
    indexOfProject: any,
    previousProject: any,
    nextProject:any,
    lastArrayIndex:any
} 
export interface ProjectsDataTotal {
    web: ProjectData[];
    apps: ProjectData[];
    videos: ProjectData[];
    art: ProjectData[];
}

// GET PROJECTS NAME FOR ASIDE MENU
export async function getProjectsNamesArray() {
    const { web, apps, videos, art }: AllProjectsDataArray = projects
    const allProjectsDataArray = [...web, ...apps, ...videos, ...art]
    const namesArrayData: {id:string, name:string, projectType: string, category: string}[] = []
    allProjectsDataArray.forEach((element: any) => {
        let {id, name, projectType, category}= element
        let newObject = {id, name, projectType, category}
        namesArrayData.push(newObject)
    }); 
    return { namesArrayData }
}

// GET PROJECTS
export async function getProjects(params:String) {
    const {web, apps, videos, art}: AllProjectsDataArray = projects
    const allProjectsDataArray: (App | Video | Art)[] = [...web, ...apps, ...videos, ...art]
    const projectFound = allProjectsDataArray.find((el) => el.id === params)
    let indexOfProject, previousProject, nextProject, lastArrayIndex, projectType
    if (projectFound != undefined) {
        indexOfProject = allProjectsDataArray.indexOf(projectFound)
        previousProject = allProjectsDataArray[indexOfProject-1]
        nextProject = allProjectsDataArray[indexOfProject+1]
        lastArrayIndex = allProjectsDataArray.length - 1
        projectType = projectFound.projectType
    }
    const projectData: (App | Video | Art) = JSON.parse(JSON.stringify(projectFound))
    return  {allProjectsDataArray, projectData, projectFound, indexOfProject, previousProject, nextProject, lastArrayIndex, projectType}
}


// GET ID OF NEXT AND PREVIOUS PROJECTS; FOR PAGINATION
export async function pageControl(data:any) {
        let idPreviousProject: boolean | null = null
        let idNextProject: boolean | null = null
        let isLastWebProject = false
        data.previousProject ? idPreviousProject = data.previousProject.id : idPreviousProject = null
        if (data.nextProject != undefined) {
            idNextProject = data.nextProject.id
        }
        // Is WebProject?
        let isWebProject = true
        if (data.indexProject > data.lastArrayIndex) {
            isWebProject = false
        }
        if (data.indexProject === data.lastArrayIndex) {
            isLastWebProject = true
        }
        return { idPreviousProject, idNextProject }
  }