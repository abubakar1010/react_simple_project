
import './Conditional.css'
function Event({ count, onClick}){

    

    return(
        <div className='condition'>
            <button onClick={onClick} >Clicked {count} times </button>
        </div>
    )
}

export default Event