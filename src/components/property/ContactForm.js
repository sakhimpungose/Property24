const ContactForm = () => {
    
    return (
        <div className="ContactForm border border-2 p-2 rounded my-3">
            <form>
                <h5 className="grey-text text-darken-3">Contact Agent</h5>
                <div className="form-group">
                    <label htmlFor="email">Your Name</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Your Email</label>
                    <input type="password" className="form-control" id="password" />
                </div>                    
                <div className="form-group">
                    <label htmlFor="password">Your Mobile Number</label>
                    <input type="password" className="form-control" id="password" />
                </div>                    
                <div className="form-group">
                    <label htmlFor="password">Your Message</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>                    
                
                <button type="button" className="btn btn-sm btn-primary btn-block px-3 mt-3">Send Message</button>             
            </form>
        </div>
    );

};

export default ContactForm;