import React from 'react';

import classNames from 'classnames';

import './DisplayRace.scss';

import { DisplayRace } from './DisplayRace';
import { Faction } from '../galaxy/Types';


interface SelectRaceProps {
  factions: Faction[];
}


function SelectRace({factions}: SelectRaceProps) {
  const imgs = factions.map((faction) => <DisplayRace key={faction.toString()} status={'NORMAL'} faction={faction} />)
  
  return (
    <>
      <h3>Select</h3>
      <div className={classNames('container-fluid')}>
        <div className={classNames('row')}>
          {imgs}
        </div>
      </div>
    </>

  )
}

export { SelectRace, SelectRaceProps }
