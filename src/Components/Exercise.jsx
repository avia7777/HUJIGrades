function Exercise(props) {
    console.log(props)
    return (
        <div>
            <span>Exercise {props.index}: </span>
            <span>{props.grade}</span>
        </div>
    )
}

export default Exercise;