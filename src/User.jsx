import './User.css'
function User(){

    const UserDetails = {
        name: "Abdullah",
        Image: "https://i.postimg.cc/c4kWfjvL/All-Frofile-Picture.jpg",
        size: 200,
    }

    const ImageStyles ={
        borderRadius: "22px",
        marginRight: "10px"
    }

    return (
        <div className="user">

            <img src={UserDetails.Image} alt={ 'This image Belongs To'+ UserDetails.name} width={UserDetails.size} style={ImageStyles} />
            <h2>This Project Belongs To {UserDetails.name}</h2>

        </div>
    )

}

export default User