import React from 'react';

function Button(props: any) {
  const { 
    id, 
    role, 
    tooltip 
  } = props;
  return (
    <div
      id={id} 
      role={role} 
      data-tooltip={tooltip}>Button</div>
  )
}

export default Button;