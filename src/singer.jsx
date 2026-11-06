export default function Singer({singer}) {
    const Style={
        backgroundColor: 'lightblue',
        border: '2px solid blue',
    }
    return(
        <li style={Style}>Singer List :{singer.name}, Age: {singer.age}</li>
    )
}