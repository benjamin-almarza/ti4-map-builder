import Point from "./models/Point"
import { Size } from "./Layout"

export type PatternProps = {
  id: string
  link: string
  size?: Size
  rotate?: number// 0 | 60 | 120 | 180 | 240;
}
const defaultSize = new Point(10, 10)

/**
 * Defines an `<defs><pattern><image>` group (will not be rendered) in order to allow defining images.
 * The given id can be used on the `Hexagon` to render the image
 */
export function Pattern({ id, link, rotate = 0, size = defaultSize }: PatternProps) {
  const { x, y } = size
  const rotation = `rotate(${rotate})`

  return (
    <defs>
      <pattern
        id={id}
        patternUnits="objectBoundingBox"
        x={0}
        y={0}
        width={x}
        height={y}
        patternTransform={rotation}
      >
        <image
          xlinkHref={link}
          x={0}
          y={0}
          width={x * 2}
          height={y * 2}
        />
      </pattern>
    </defs>
  )
}

export default Pattern
