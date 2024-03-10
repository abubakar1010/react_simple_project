import './Greeting.css'
export default function RenderingList(){


    const foods= [
        {title: "Dates", isFoods: true, id: 1},
        {title: "Milk", isFoods: true, id: 2},
        {title: "Gourd", isFoods: false, id: 3},
        {title: "Shoulder Roast", isFoods: true, id: 4},
    ]

    const food = foods.map( element => <li key={element.id} style={{color: element.isFoods? 'magenta' : 'darkgreen'}}>{element.title}</li>)

    return (
        <div className='welcome'>
            <ol>
                {food}
            </ol>
        </div>
    )
}