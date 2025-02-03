import { HexGrid, Layout } from '../hex';
import { BoardMap } from './Types';
import { Tiles } from './Tiles';
import { Spaces } from './Spaces';

const mecatol =  {
  position: 0,
  source: "18",
  coordinates: {
      q: 0,
      r: 0,
      s: 0,
  }
}

function GalaxyDisplay({ tiles, homes, rings, hyperlanes} : BoardMap) {
  const spaces = [mecatol, ...homes, ...rings.flatMap((ring) => ring), ...hyperlanes]

  return (
    <div>
      <HexGrid width={1200} height={800} viewBox="-100 -100 200 200">
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1} origin={{ x: 0, y: 0 }}>
          <Spaces spaces={spaces}/>
        </Layout>
        <Tiles tiles={tiles} />
      </HexGrid>
    </div>
  )
}

export { GalaxyDisplay }
