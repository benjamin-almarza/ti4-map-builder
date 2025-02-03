import { Pattern } from '../hex';
import { BoardMap } from './Types';


function Tiles({tiles}: { tiles: BoardMap['tiles']}) {
    const elements = tiles.map(({ source, rotate = 0}) => {
        const link = `./tiles/ST_${source}.webp`

        return<Pattern id={source} link={link} rotate={Number(rotate) }/>
    })
    return <>
        {elements}
    </>
}

export { Tiles }
