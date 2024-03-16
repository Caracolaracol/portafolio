import React, { useEffect, useState } from 'react'
import ProjectLink from '../../atoms/ProyectLink'
import Subtitle from '../../atoms/Subtitle'
import { LINKLIST } from '../../../config/links'
import { getProjectsNamesArray } from '../../../pages/api/proyects'


function MenuList({ pathname, params }: { pathname: String | undefined, params: any }) {
    const [dataProjects, setDataProjects] = useState<any>([])
    const [blogEntries, setBlogEntries] = useState<any>([])
    const [isOutside, setIsOutside] = useState<boolean | null>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchProjectNames = async () => {
            const data = await getProjectsNamesArray()
            setDataProjects(data.namesArrayData)
        }

        fetchProjectNames()
        setIsLoading(false)
    }, [setDataProjects, setIsOutside])

    if (isLoading) {
        return <div></div>
    } else {
        return (
            <>
                {pathname?.startsWith('/portfolio') && (
                    <div>
                        <Subtitle>Web</Subtitle>
                        <ul>
                            {dataProjects && dataProjects.filter((el: any) => el.category == "web").map((element: any) => (
                                <ProjectLink
                                    key={`key_${element.id}`}
                                    id={element.id}
                                    name={element.name}
                                    projectname={params.project}
                                    pathname={pathname}
                                    outside={isOutside}
                                    routeInitial={'/portfolio'} />
                            ))}
                        </ul>
                        <Subtitle>Apps</Subtitle>
                        <ul>
                            {dataProjects
                                .filter(
                                    (element: any) => element.category == "apps"
                                )
                                .map((filtered: any) => (
                                    <ProjectLink
                                    key={`key_${filtered.id}`}
                                        id={filtered.id}
                                        projectname={params.project}
                                        name={filtered.name}
                                        pathname={pathname}
                                        outside={isOutside}
                                        routeInitial={'/portfolio'}
                                    />
                                ))}
                        </ul>
                        <Subtitle>Videos</Subtitle>
                        <ul>
                            {dataProjects
                                .filter(
                                    (element: any) => element.category == "videos"
                                )
                                .map((filtered: any) => (
                                    <ProjectLink
                                        key={`key_${filtered.id}`}
                                        id={filtered.id}
                                        projectname={params.project}
                                        name={filtered.name}
                                        pathname={pathname}
                                        outside={isOutside}
                                        routeInitial={'/portfolio'}
                                    />
                                ))}
                        </ul>
                        <Subtitle>Art</Subtitle>
                        <ul>
                            {dataProjects
                                .filter(
                                    (element: any) => element.projectType == "Projectos musicales" ||
                                        element.projectType == "Artes Visuales" ||
                                        element.projectType == "Fotografia Macro"
                                )
                                .map((filtered: any) => (
                                    <ProjectLink
                                        key={`key_${filtered.id}`}
                                        id={filtered.id}
                                        projectname={params.project}
                                        name={filtered.name}
                                        pathname={pathname}
                                        outside={isOutside}
                                        routeInitial={'/portfolio'}
                                    />
                                ))}
                        </ul>
                    </div>
                )}

                {pathname?.startsWith("/about") && (
                    <div>
                        <Subtitle>Links</Subtitle>
                        <ul>
                            {LINKLIST.map((el) => {
                                return (
                                    <li key={el.name}>
                                        <a
                                            className="font-tommyregular indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased text-snow dark:text-dark laptop:dark:text-snow dark:hover:text-cerise hover:text-ocrelight"
                                            href={el.link}
                                            target="_blank"
                                        >
                                            {el.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}

                {pathname?.startsWith("/blog") && (
                    <div>
                        <Subtitle>Blog Entries</Subtitle>
                        <ul>
                            {blogEntries &&
                                blogEntries.map((element: any) => (
                                    <a
                                        href={`/blog/${element.id}`}
                                        key={element.id}
                                    >
                                        <li key={element.id} className="font-tommyregular indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased text-snow dark:text-dark laptop:dark:text-snow dark:hover:text-cerise hover:text-ocrelight">
                                            -{" "}
                                            {`${element.name} (${element.date[1]} ${element.date[0]})`}
                                        </li>
                                    </a>
                                ))}
                        </ul>
                    </div>
                )}
            </>
        )
    }
}

export default MenuList