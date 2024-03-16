
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import * as prod from 'react/jsx-runtime'
import {Fragment, createElement, useEffect, useState} from 'react'

// @ts-expect-error: the react types are missing.
const production = {Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs}

function ProjectContent({description}:any) {
    const [content, setContent] = useState<any>(Fragment)


    useEffect(() => {
        // UNIFIED FOR TEXT WITH HTML
        unified().use(rehypeParse, { fragment: true })
        .use(rehypeReact, production)
        .process(`${description.replace(/["]+/g, '')}`)
        .then((file) => {
                setContent(file.result)
        })
        
    }, [description])

  return (
    <p className='text-[1rem] font-tommyRegular tracking-wider antialiased'>{content}</p>
  )
}

export default ProjectContent