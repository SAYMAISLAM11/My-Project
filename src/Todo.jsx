// export default function ToDo({learn, isDone}) {
//     return(
//         <li>Task: {learn}</li>
//     )
// }
export default function ToDO({learn, isDone, time=0}) {
    const styleform={
        color: 'black',
        border: '2px solid green',
    }
    if(isDone===true) {
        return(
            <li style={styleform}>Task: {learn} is done by {time}</li>
        )
    }
    else {
        return(
            <li style={styleform}>Task: {learn} is not done by {time}</li>
        )
    }
} 