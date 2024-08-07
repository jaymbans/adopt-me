import { Component } from "react";
import { Link } from 'react-router-dom'

class ErrorBoundary extends Component {
    state = { hasError: false }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        // You'd want to log this to an error tracker
        console.error("ErrorBoundary component caught an error", error, info)
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    There was an erorr with this listing. <Link to='/'>Click here to go back to the home page</Link>
                </h2>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary