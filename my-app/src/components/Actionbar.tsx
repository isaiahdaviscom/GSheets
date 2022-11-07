import React from 'react';
import style from './actionbar.module.css';

function Toolbar() {
  return (
    <section className={style.action_bar}>
      <progress className={style.progress}></progress>
      Actionbar
    </section>
  );
}

export default Toolbar;