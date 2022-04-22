 import { memo } from "react";

 
function Children({count}) {
    console.log("Children");
    return ( <div>Children  </div> );
}
 

export default memo(Children);
 