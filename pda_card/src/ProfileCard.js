
/**
 * 
 * Hetah hian duh chuan kan props hman tur kha kan dah nghal thei
 *   
 * function ProfileCard({hming, awmna}){}
 *  
 */
function ProfileCard(props){

    /**
     * Hetah hian hetiang hian props.hming emaw props . hrim hrim hmanglo hian a ziah theih 
     * 
     * const hming = props.hming
     * const awmna = props.awmna
     * 
     * Anihloh pawn hetiang hian argument destructuring hmangin a ziah theih bawk
     * 
     * const {hming, awmna} = props; 
     */

    return (<div>
        <img src={props.milem} alt="pda logo"/>
        <div>{props.hming}</div>
        <div>{props.awmna}</div>
        </div>
    );
}

export default ProfileCard;