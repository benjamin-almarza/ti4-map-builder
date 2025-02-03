import React from 'react';

import { Faction } from '../galaxy/Types';
import classNames from 'classnames';

import './DisplayRace.scss';

import { DisplayRace } from './DisplayRace';


interface SelectFacctionsProps {
  factions: Faction[];
}


function SelectFactions({factions}: SelectFacctionsProps) {
  const imgs = factions.map((faction) => <DisplayRace key={faction} status={'NORMAL'} faction={faction} />)
  
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

export { SelectFactions, SelectFacctionsProps }