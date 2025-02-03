import * as React from "react"
import styled from 'styled-components'

const T = styled.text`
  font-size: 0.2em;
  fill: #000;
  fill-opacity: 0.9;
  transition: fill-opacity .2s;
`

export type TextProps = {
  children: string | React.ReactNode | React.ReactNode[]
  x?: string | number
  y?: string | number
  className?: string
} & React.SVGProps<SVGTextElement>

// TODO Text is a separate component so that it could wrap the given text inside the surrounding hexagon
export function Text(props: TextProps) {
  const { children, x, y, ...rest } = props
  return (
    <T x={x || 0} y={y ? y : "0.3em"} textAnchor="middle" {...rest}>
      {children}
    </T>
  )
}

export default Text
