import React from 'react'

export default function About(props) {
    return (
        <>
            <div className={`container my-5 text-${props.mode==="black"?"white":"black"}`}>
                <h3 className="container my-3 text-center">About</h3>
                <div id="accordion">
                    <div className="card">
                        <div className={`card-header bg-${props.mode==="black"?"black":"light"}`} id="headingOne">
                            <h5 className="mb-0">
                                <button className={`btn text-${props.mode==="black"?"white":"black"}`} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    React TextUtil Application
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className={`card-body bg-${props.mode==="black"?"black":"light"} text-${props.mode==="black"?"white":"black"}`}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
