
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

    return (<div className="card">
            <div className="card-image">
                     <figure className="image is-1by1">
                        <img src={props.milem} alt="pda logo"/>
                    </figure>
            </div>
        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">{props.hming}</p>
                <p className="subtitle is-6">{props.awmna}</p>
        </div>
            <div className="content">
              {props.description}
            </div>
        </div>
        </div>
    );
}

export default ProfileCard;