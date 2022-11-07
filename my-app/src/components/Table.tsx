import style from './table.module.css';
import React, { ComponentType, FunctionComponent } from 'react';
import Canvas from './Canvas';

type CellProps = {
  children: ComponentType | string;
};

const Cell: FunctionComponent<CellProps> = (props) => {

  return (
    <div
      spellCheck="false"
      className={style.editable}
    >
      <Canvas></Canvas>
    </div>
  );
};

export default Cell;