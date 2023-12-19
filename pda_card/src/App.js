import ProfileCard from "./ProfileCard";

function App(){
    return(
        <div>
        <div>Personal Digital Assistant</div>
        <ProfileCard hming="Alexa" awmna="@alexa234"/>
        <ProfileCard hming="Cortana" awmna="@cortana234"/>
        <ProfileCard hming="Siri" awmna="@siri234"/>
        </div>
    );

}

export default App;