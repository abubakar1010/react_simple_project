import Admin from "./Admin";
import Login from "./Login";
import './Conditional.css'
// import './Greeting.css'


export default function Condition(){

    let content;
    const isLoggedOut = true;

    if (isLoggedOut) {
        content = <Login />
    }else{
        content = <Admin />
    }

    return (
        <>
        <div className="condition">
        {content}
        </div>
        <div className="condition">
        {
            isLoggedOut?  <Admin /> : <Login /> 
        
        }
        </div>

        <div>
            {
                isLoggedOut || <Admin />
            }
        </div>
        </>

    )
}