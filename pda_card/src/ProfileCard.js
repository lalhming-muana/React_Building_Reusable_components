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
        <div>{props.hming}</div>
        <div>{props.awmna}</div>
    </div>);
}

export default ProfileCard;