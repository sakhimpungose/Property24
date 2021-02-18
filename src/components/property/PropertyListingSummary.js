import property from '../../images/property.jfif';
import '../../css/PropertyListingSummary.css';

const PropertyListingSummary = () => {

    return (
        <a href="/property/id" className="PropertyListingSummary my-3">
            <div className="container">
                <div className="row g-0 shadow-sm border rounded">
                    <div className="col-md-3">
                        <div className="PropertyListingSummary-img-container">
                            <img className="PropertyListingSummary-img" src={property} />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="PropertyListingSummary-info-container p-2 pl-3 d-flex flex-column">
                            <span className="PropertyListingSummary-price">
                                R 1 650 000
                            </span>
                            <span className="PropertyListingSummary-title">
                                Somerset West Central
                            </span>
                            <span className="PropertyListingSummary-location">
                                Knysna Central
                            </span>
                            <span className="PropertyListingSummary-description">                                
                                Sole and exclusive mandate A Unique opportunity to own these two side by side units within this perfect business hub in Central ...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default PropertyListingSummary;