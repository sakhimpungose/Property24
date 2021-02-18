import React, { Component } from 'react';


class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.handleChange} />
                    </div>                    
                    
                    <button className="btn btn-sm btn-primary px-3 my-3">Login</button>
                </form>
            </div>
        );
    }
}

export default SignIn;