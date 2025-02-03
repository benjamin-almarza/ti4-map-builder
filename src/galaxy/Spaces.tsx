import { Hexagon } from '../hex';
import { SpaceState, BoardMap } from './Types';


function Spaces({spaces}: { spaces: SpaceState[] }) {
    const elements = spaces.map((space) => {
        const {
            position,
            source,
            coordinates: { q, r, s}
          } = space
        return (<Hexagon key={position} q={q} r={r} s={s} fill={source} />)
    })
    return <>
        {elements}
    </>
}

export { Spaces }
