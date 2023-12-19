import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App(){
    return(
        <div>
        <div>Personal Digital Assistant</div>
        <ProfileCard hming="Alexa" awmna="@alexa234" milem={AlexaImage}/>
        <ProfileCard hming="Cortana" awmna="@cortana234" milem={CortanaImage}/>
        <ProfileCard hming="Siri" awmna="@siri234" milem={SiriImage}/>
        </div>
    );

}

export default App;