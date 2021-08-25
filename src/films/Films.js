import React, { Component } from "react"
import Film from "./Film"


class Films extends Component {
    // state and props 
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            loaded: false,
            results: [],
            people: [],
            fname: this.props.fname
        }
        console.log(this.state)
    }

    // this is the same goal as the useEffect(() => {}, [])
    async componentDidMount() {
        let res = await fetch("https://ghibliapi.herokuapp.com/films")
        let json = await res.json()

        this.setState({
            loaded: true,
            results: json
        })
    }

    // after the results are set, if the people [] is empty, get all the people from each film
    async componentDidUpdate() {

    }

    render() {
        let { favNumber } = this.props
        return (
            <div>
                {favNumber}
                {!this.state.loaded
                    ? "loading"
                    // display films with a custom Film Class Comp? 
                    : this.state.results.map(film => <Film film={film}/>)
                }

                {/* Display peoples names? */}
            </div>
        )
    }
}

export default Films