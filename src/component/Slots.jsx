import React from 'react'

export default function Slots(props) {
    const { x, y, z} = props;
    if( (x===y) && (y===z))
    {
  return (
    <>
     <div className='slot_box_inner'>
     <h3>{`${x} ${y} ${z}`}</h3>
    <h3>This Is Matching</h3>
        </div>
        <hr/>
    </>
  )
    }
    else
    {
        return(
            <>
           <div className='slot_box_inner' >
     <h3>{`${x} ${y} ${z}`}</h3>
    <h3>This Is Not Matching</h3>
        </div>
        <hr/>
           </>
        )
    }
}
