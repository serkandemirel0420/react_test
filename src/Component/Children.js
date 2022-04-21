import React from 'react'
function Children({count}) {
    console.log("Children");
    return ( <div>Children {count} </div> );
}
 
export const MemoizedChildren = React.memo(Children);