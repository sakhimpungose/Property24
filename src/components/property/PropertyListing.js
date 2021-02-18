import '../../css/PropertyListing.css';
import property from '../../images/property.jfif';

import ContactForm from './ContactForm';

const PropertyListing = (props) => {

    const id = props.match.params.id;

    return (
        <div className="PropertyListing">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="PropertyListing-slideshow d-flex align-items-center">
                            <div className="PropertyListing-prev-container">
                                <i className="fa fa-4x fa-angle-left"></i>
                            </div>
                            <div className="PropertyListing-img-container">
                                <img className="PropertyListing-img" src={property} />
                            </div>
                            <div className="PPropertyListing-prev-container">
                                <i className="fa fa-4x fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 offset-md-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default PropertyListing;