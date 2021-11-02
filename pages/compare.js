import React from 'react'
import CompareForm from '../components/compares/compare-form'
import FeaturesItem from '../components/comparision_features/features_item'

export default class Compare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "make":["Audi", "BMW", "Honda", "Ford"],
                "models":{
                            "Audi":["A3", "A4", "A5"],
                            "BMW":["X5", "X6", "X7"],
                            "Ford":["Focus", "Fiesta"],
                        },
                "variants":["Diesel", "Petrol", "Electric"],
                "comparisonFeatures":{"Engine":["Engine Size", "Engine Bore", "Compression", "Cylinders", "Power"], "Dimensions":["Height", "Weight", "Length"] },
                "car1Data":{
                    "carImage":"https://suggestrank.com/images/8795e4a4.jpg", "name":"Honda CRV", "make":"Honda", "model":"CRV", "year":"2020"
                },
                "car2Data":{
                    "carImage":"https://suggestrank.com/images/honda-jazz-2017-2019-1519048567.5.jpg", "name":"Honda Jazz", "make":"Honda", "model":"Jazz", "year":"2019"
                }
            }
        };
    }
    render() {
        let comparisonFeatures = this.state.data.comparisonFeatures;
        let features_items = Object.keys(comparisonFeatures).map(function(key) {
            return (
                <div className="features-item-wrapper mb-1">
                    <div className="toggler clearfix" data-bs-toggle="collapse" href={`#${key}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                        <h6 className="float-start">{key}</h6>
                        <i className="fal fa-chevron-down float-end"></i>
                    </div>
                    <div className="collapse" id={key}>
                        <div className="divider mb-1"></div>
                        {comparisonFeatures[key].map((item, index) =>
                            <FeaturesItem item={item} />
                        )}
                    </div>
                </div>
            )
            
        });
        console.log(features_items);
        return (
            <div className="page-car section pt-2 page-wrapper">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="features d-none d-lg-block mt-5 mb-4 p-3 bg-white">
                                    <div className="section-title mb-4">
                                        <h6>Comparision Features</h6>
                                    </div>

                                    <div className="features-items">
                                        
                                        {features_items}

                                        {/* <div className="features-item-wrapper mb-1">
                                            <div className="toggler clearfix" data-bs-toggle="collapse" href="#engine-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <h6 className="float-start">Engine</h6>
                                                <i className="fal fa-chevron-down float-end"></i>
                                            </div>
                                            <div className="collapse" id="engine-collapse">
                                                <div className="divider mb-1"></div>
                                                {this.state.data.comparisonFeatures.Engine&&this.state.data.comparisonFeatures.Engine.map((item, index) =>
                                                    <FeaturesItem item={item} />
                                                )}
                                            </div>
                                        </div>

                                        <div className="features-item-wrapper mb-1">
                                            <div className="toggler clearfix" data-bs-toggle="collapse" href="#dimension-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <h6 className="float-start">Dimension & Weight</h6>
                                                <i className="fal fa-chevron-down float-end"></i>
                                            </div>
                                            <div className="collapse" id="dimension-collapse">
                                                <div className="divider mb-1"></div>
                                                {this.state.data.comparisonFeatures.Dimensions&&this.state.data.comparisonFeatures.Dimensions.map((item, index) =>
                                                    <FeaturesItem item={item} />
                                                )}
                                            </div>
                                        </div>

                                        <div className="features-item-wrapper mb-1">
                                            <div className="toggler clearfix" data-bs-toggle="collapse" href="#transmission-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <h6 className="float-start">Transmission</h6>
                                                <i className="fal fa-chevron-down float-end"></i>
                                            </div>
                                            <div className="collapse" id="transmission-collapse">
                                                <div className="divider mb-1"></div>
                                                <div className="features-item">
                                                    <div className="row">
                                                        <div className="col-9 pe-0">
                                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                            <label className="fw-bold fs-7 ms-2">Transmission</label>
                                                        </div>
                                                        <div className="col-3 text-end">
                                                            <div className="form-check form-switch position-relative">
                                                                <input className="form-check-input" type="checkbox" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-9">
                                <div className="right-panel pl-3">
                                    <div className="compare-wrapper mt-5 mb-4">
                                        <div className="p-4">
                                        <CompareForm make={this.state.data.make} models={this.state.data.models} variants={this.state.data.variants}/>
                                        </div>
                                    </div>

                                    <div className="features d-lg-none mt-5 mb-4 p-3 bg-white">
                                        <div className="clearfix" data-bs-toggle="collapse" href="#features-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <h6 className="mb-0 float-start">Comparision Features</h6>
                                            <i className="far fa-chevron-double-down float-end mt-1"></i>
                                        </div>

                                        <div className="features-items collapse mt-3" id="features-collapse">
                                            
                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#engine-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Engine</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse" id="engine-collapse">
                                                    <div className="divider mb-1"></div>
                                                    {this.state.data.comparisonFeatures.Engine&&this.state.data.comparisonFeatures.Engine.map((item, index) =>
                                                        <div className="features-item">
                                                            <div className="row">
                                                                <div className="col-9 pe-0">
                                                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                    <label className="fw-bold fs-7 ms-2">{item}</label>
                                                                </div>
                                                                <div className="col-3 text-end">
                                                                    <div className="form-check form-switch position-relative">
                                                                        <input className="form-check-input" type="checkbox" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#dimension-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Dimension & Weight</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse" id="dimension-collapse">
                                                    <div className="divider mb-1"></div>
                                                    {this.state.data.comparisonFeatures.Dimensions&&this.state.data.comparisonFeatures.Dimensions.map((item, index) =>
                                                        <div className="features-item">
                                                            <div className="row">
                                                                <div className="col-9 pe-0">
                                                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                    <label className="fw-bold fs-7 ms-2">{item}</label>
                                                                </div>
                                                                <div className="col-3 text-end">
                                                                    <div className="form-check form-switch position-relative">
                                                                        <input className="form-check-input" type="checkbox" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#transmission-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Transmission</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse" id="transmission-collapse">
                                                    <div className="divider mb-1"></div>
                                                    <div className="features-item">
                                                        <div className="row">
                                                            <div className="col-9 pe-0">
                                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                <label className="fw-bold fs-7 ms-2">Transmission</label>
                                                            </div>
                                                            <div className="col-3 text-end">
                                                                <div className="form-check form-switch position-relative">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#suspension-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Suspension</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse" id="suspension-collapse">
                                                    <div className="divider mb-1"></div>
                                                    <div className="features-item">
                                                        <div className="row">
                                                            <div className="col-9 pe-0">
                                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                <label className="fw-bold fs-7 ms-2">Suspension</label>
                                                            </div>
                                                            <div className="col-3 text-end">
                                                                <div className="form-check form-switch position-relative">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#steering-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Steering</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse" id="steering-collapse">
                                                    <div className="divider mb-1"></div>
                                                    <div className="features-item">
                                                        <div className="row">
                                                            <div className="col-9 pe-0">
                                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                <label className="fw-bold fs-7 ms-2">Steering</label>
                                                            </div>
                                                            <div className="col-3 text-end">
                                                                <div className="form-check form-switch position-relative">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#wheels-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Wheels & Tyres</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse" id="wheels-collapse">
                                                    <div className="divider mb-1"></div>
                                                    <div className="features-item">
                                                        <div className="row">
                                                            <div className="col-9 pe-0">
                                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                <label className="fw-bold fs-7 ms-2">Wheels</label>
                                                            </div>
                                                            <div className="col-3 text-end">
                                                                <div className="form-check form-switch position-relative">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#brakes-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Brakes</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse" id="brakes-collapse">
                                                    <div className="divider mb-1"></div>
                                                    <div className="features-item">
                                                        <div className="row">
                                                            <div className="col-9 pe-0">
                                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                <label className="fw-bold fs-7 ms-2">Brakes</label>
                                                            </div>
                                                            <div className="col-3 text-end">
                                                                <div className="form-check form-switch position-relative">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#performance-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Performance</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse" id="performance-collapse">
                                                    <div className="divider mb-1"></div>
                                                    <div className="features-item">
                                                        <div className="row">
                                                            <div className="col-9 pe-0">
                                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                <label className="fw-bold fs-7 ms-2">Performance</label>
                                                            </div>
                                                            <div className="col-3 text-end">
                                                                <div className="form-check form-switch position-relative">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#safety-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Safety</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse" id="safety-collapse">
                                                    <div className="divider mb-1"></div>
                                                    <div className="features-item">
                                                        <div className="row">
                                                            <div className="col-9 pe-0">
                                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                <label className="fw-bold fs-7 ms-2">Safety</label>
                                                            </div>
                                                            <div className="col-3 text-end">
                                                                <div className="form-check form-switch position-relative">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#exterior-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Exterior</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse" id="exterior-collapse">
                                                    <div className="divider mb-1"></div>
                                                    <div className="features-item">
                                                        <div className="row">
                                                            <div className="col-9 pe-0">
                                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                <label className="fw-bold fs-7 ms-2">Exterior</label>
                                                            </div>
                                                            <div className="col-3 text-end">
                                                                <div className="form-check form-switch position-relative">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#seats-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Seats & Upholstery</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse" id="seats-collapse">
                                                    <div className="divider mb-1"></div>
                                                    <div className="features-item">
                                                        <div className="row">
                                                            <div className="col-9 pe-0">
                                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                <label className="fw-bold fs-7 ms-2">Seats</label>
                                                            </div>
                                                            <div className="col-3 text-end">
                                                                <div className="form-check form-switch position-relative">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#instrumentation-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Instrumentation</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse" id="instrumentation-collapse">
                                                    <div className="divider mb-1"></div>
                                                    <div className="features-item">
                                                        <div className="row">
                                                            <div className="col-9 pe-0">
                                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                <label className="fw-bold fs-7 ms-2">Instrumentation</label>
                                                            </div>
                                                            <div className="col-3 text-end">
                                                                <div className="form-check form-switch position-relative">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>

                                    <div className="compare-car mb-4 bg-white p-3 pt-5">
                                        <div className="row">
                                            <div className="col-6 compare-item-left">
                                                <div className="item-img mb-3">
                                                    <img src={this.state.data.car1Data.carImage} />
                                                </div>
                                                <div className="value mb-4">
                                                    <label className="d-block fw-bold">Kia Sonet</label>
                                                    <span className="fs-8">Rs 7.59lakh</span>
                                                </div>
                                                <div className="row value-details">
                                                    <div className="col-md-4 mb-2">
                                                        <div className="value">
                                                            <span className="fs-8">Make</span>
                                                            <label className="d-block fw-bold">{this.state.data.car1Data.make}</label>
                                                        </div>  
                                                    </div>
                                                    <div className="col-md-4 mb-2">
                                                        <div className="value">
                                                            <span className="fs-8">Model</span>
                                                            <label className="d-block fw-bold">{this.state.data.car1Data.model}</label>
                                                            <span className="fs-8">Varient</span>
                                                        </div>  
                                                    </div>
                                                    <div className="col-md-4 mb-2">
                                                        <div className="value">
                                                            <span className="fs-8">Year</span>
                                                            <label className="d-block fw-bold">{this.state.data.car1Data.year}</label>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 compare-item-right">
                                                <div className="item-img mb-3">
                                                    <img src={this.state.data.car2Data.carImage} />
                                                </div>
                                                <div className="value mb-4">
                                                    <label className="d-block fw-bold">Kia Sonet</label>
                                                    <span className="fs-8">Rs 7.59lakh</span>
                                                </div>
                                                <div className="row value-details">
                                                    <div className="col-md-4 mb-2">
                                                        <div className="value">
                                                            <span className="fs-8">Make</span>
                                                            <label className="d-block fw-bold">{this.state.data.car2Data.make}</label>
                                                        </div>  
                                                    </div>
                                                    <div className="col-md-4 mb-2">
                                                        <div className="value">
                                                            <span className="fs-8">Model</span>
                                                            <label className="d-block fw-bold">{this.state.data.car2Data.model}</label>
                                                            <span className="fs-8">Varient</span>
                                                        </div>  
                                                    </div>
                                                    <div className="col-md-4 mb-2">
                                                        <div className="value">
                                                            <span className="fs-8">Year</span>
                                                            <label className="d-block fw-bold">{this.state.data.car2Data.year}</label>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="vs-image">
                                            <img src="image/vs.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}