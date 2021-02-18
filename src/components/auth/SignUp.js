import React, { Component } from 'react';


class SignUp extends Component {

    state = {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
                    <h5 className="text-grey">Sign Up</h5>
                    <div className="from-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" className="form-control" id="fullName" placeholder="Full Name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" placeholder="Email address"  id="email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" placeholder="Password"  id="password" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Password</label>
                        <input type="password" className="form-control" placeholder="Confirm Password"  id="confirmPassword" onChange={this.handleChange} />
                    </div>
  
                    <button className="btn btn-sm btn-primary px-3 my-3">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;