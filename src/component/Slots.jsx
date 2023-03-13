import React from 'react'

export default function Slots(props) {
    const { x, y, z} = props;
    if( (x===y) && (y===z))
    {
      var message = "This Is Matching!" ;
    }
    else
    {
      var message = "This Is Not Matching!" ;
    }
  return (
    <>
     <div className='slot_box_inner'>
     <h3>{`${x} ${y} ${z}`}</h3>
    <h3>{message}</h3>
        </div>
        <hr/>
    </>
  )
}
