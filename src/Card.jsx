import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {

    return (<>
        <div id="cta" className="col-md-3 col-10 mx-auto">
            <div class="card">
                <img src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Explore the latest Web Series and Blockbusters Movies.</p>
                        <a href={props.ottlink} target="blank_" className="btn">Watch Now</a>
                    </div>
            </div>
        </div>
        </>

        )
        }
        
        export default Card;
