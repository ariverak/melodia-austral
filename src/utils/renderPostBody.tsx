import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'

export const RENDER_RICH_TEXT_OPTIONS: any = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <span className='font-bold'>{text}</span>,
    [MARKS.ITALIC]: (text: string) => (
      <span className='italic font-light'>{text}</span>
    )
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: any, children: any) => (
      <p className='mb-2 font-light'>{children}</p>
    ),
    [BLOCKS.UL_LIST]: (_: any, children: any) => {
      const points = ['🔵', '🔴', '🟢', '🟡']
      //create new array repeat list of points 100 times
      const pointList = Array.from(
        { length: 30 },
        (_, index) => points[index % points.length]
      )

      return (
        <ul className='list-none'>
          {children.map((child: any, index: number) => (
            <div key={index} className='flex flex-row'>
              <div className='flex justify-center items-center'>
                <div className='mr-4 mb-2'>{pointList[index]}</div>
                {child}
              </div>
            </div>
          ))}
        </ul>
      )
    },
    [BLOCKS.HR]: () => <hr className='my-4' />,
    [BLOCKS.HEADING_1]: (_: any, children: any) => (
      <h1 className='text-4xl font-bold mb-2'>{children}</h1>
    ),
    [INLINES.HYPERLINK]: (node: any) => {
      return (
        <a
          href={node.data.uri}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          {node.content[0].value}
        </a>
      )
    },
    [BLOCKS.QUOTE]: (_: any, children: any) => (
      //with style
      <blockquote className='border-l-4 border-gray-300 pl-4 my-4'>
        {children}
      </blockquote>
    )
  }
}

export const renderPostBody = (body: any) =>
  renderRichText(body, { ...RENDER_RICH_TEXT_OPTIONS })
