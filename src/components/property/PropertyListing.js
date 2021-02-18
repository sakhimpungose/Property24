import '../../css/PropertyListing.css';
import property from '../../images/property.jfif';

const PropertyListing = () => {

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
                <div class="row"></div>
            </div>
        </div>
    );

};

export default PropertyListing;