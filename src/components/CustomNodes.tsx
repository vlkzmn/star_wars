import Image from 'next/image';
import { Handle, Position } from 'reactflow';
import { Film } from '@/types/Film';
import { StarShip } from '@/types/StarShip';
import { Character } from '@/types/Character';

/**
 * CustomCharacterNode component renders a node representing a character in a flow diagram.
 * Used in the @Flow component when creating an object @nodeTypes
 *
 * @component
 * @param {Object} props - The component props
 * @param {Character} props.data - The character data to display
 * @returns {JSX.Element} The rendered component
 */

export function CustomCharacterNode({
  data,
}: {
  data: Character;
}): JSX.Element {
  return (
    <div className="min-w-48 cursor-default">
      <div className="group flex">
        <Image
          className="rounded-l-lg"
          src={`/characters/${data.id}.webp`}
          alt={data.name}
          width={200}
          height={112}
        />

        <div
          className="relative w-max min-w-48 h-28 p-3 bg-stone-900 rounded-r-lg after:absolute after:content-'' after:right-3 after:-bottom-1 after:w-p34 after:h-4 after:bg-black after:z-20
        after:[clip-path:polygon(15%_0,_85%_0%,_100%_100%,_0_100%)]"
        >
          <div className="relative w-8 h-1 mt-1 my-1.5 mr-1.5 bg-stone-500 rounded-md group-hover:shadow-3xl group-hover:bg-white after:absolute after:block after:left-9 after:w-2 after:h-1 after:content-'' after:bg-stone-500 after:rounded-md group-hover:after:shadow-3xl group-hover:after:bg-white" />
          {data.name}
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ left: 20, borderColor: '#000000' }}
      />
    </div>
  );
}

/**
 * CustomFilmNode component renders a node representing a film in a flow diagram.
 * Used in the @Flow component when creating an object @nodeTypes
 *
 * @component
 * @param {Object} props - The component props
 * @param {Film} props.data - The film data to display
 * @returns {JSX.Element} The rendered component
 */

export function CustomFilmNode({ data }: { data: Film }): JSX.Element {
  return (
    <div className="group relative cursor-help">
      <div className="hidden group-hover:block absolute -top-48 -left-20 p-2 w-450 bg-stone-900 rounded-lg shadow-3xl z-10">
        <p className="text-xs text-stone-400">{data.opening_crawl}</p>
        <p className="text-xs text-stone-400">{`Director: ${data.director}`}</p>
        <p className="text-xs text-stone-400">{`Producer: ${data.producer}`}</p>
        <p className="text-xs text-stone-400">{`Release Date: ${data.release_date}`}</p>
      </div>

      <div className="rounded-lg w-72 h-36 p-2 bg-stone-900 after:absolute after:content-'' after:right-3 after:-bottom-1 after:w-p34 after:h-4 after:bg-black after:z-20 after:[clip-path:polygon(15%_0,_85%_0%,_100%_100%,_0_100%)]">
        <Image
          src={`/films/${data.id}.webp`}
          alt={data.title}
          width={320}
          height={136}
          priority
        />
        <Handle
          type="target"
          position={Position.Left}
          style={{ borderColor: '#000000' }}
        />
        <Handle
          type="source"
          position={Position.Right}
          style={{ borderColor: '#000000' }}
        />
      </div>
    </div>
  );
}

/**
 * CustomStarShipNode component renders a node representing a starship in a flow diagram.
 * Used in the @Flow component when creating an object @nodeTypes
 *
 * @component
 * @param {Object} props - The component props
 * @param {StarShip} props.data - The starship data to display
 * @returns {JSX.Element} The rendered component
 */

export function CustomStarShipNode({ data }: { data: StarShip }): JSX.Element {
  return (
    <div className="group relative cursor-help">
      <div className="hidden group-hover:block absolute -top-48 w-full p-2 bg-stone-900 rounded-lg shadow-3xl z-10">
        <p className="text-xs text-stone-400">{`Model: ${data.model}`}</p>
        <p className="text-xs text-stone-400">{`Cost: ${data.cost_in_credits}`}</p>
        <p className="text-xs text-stone-400">{`Lenght: ${data.length}`}</p>
        <p className="text-xs text-stone-400">{`Max speed: ${data.max_atmosphering_speed}`}</p>
        <p className="text-xs text-stone-400">{`Crew: ${data.crew}`}</p>
        <p className="text-xs text-stone-400">{`Passengers: ${data.passengers}`}</p>
        <p className="text-xs text-stone-400">{`Cargo Capacity: ${data.cargo_capacity}`}</p>
        <p className="text-xs text-stone-400">{`Consumables: ${data.consumables}`}</p>
        <p className="text-xs text-stone-400">{`Hyperdrive Rating: ${data.hyperdrive_rating}`}</p>
        <p className="text-xs text-stone-400">{`Starship Class: ${data.starship_class}`}</p>
      </div>

      <div className="group flex">
        <Image
          className="rounded-l-lg"
          src={`/star-ships/${data.id}.webp`}
          alt={data.name}
          width={200}
          height={112}
          priority
        />

        <div className="relative w-max min-w-56 p-3 bg-stone-900 rounded-r-lg after:absolute after:right-3 after:-bottom-1 after:w-p34 after:h-4 after:content-'' after:bg-black after:[clip-path:polygon(15%_0,_85%_0%,_100%_100%,_0_100%)] after:z-20">
          <div className="group-hover:shadow-3xl group-hover:bg-white relative w-8 h-1 mt-1 my-1.5 bg-stone-500 rounded-md mr-1.5 after:absolute after:block after:left-9 after:w-2 after:h-1 after:content-'' after:bg-stone-500 after:rounded-md group-hover:after:shadow-3xl group-hover:after:bg-white" />
          {data.name}
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        style={{ borderColor: '#000000' }}
      />
    </div>
  );
}
