import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
    return <div className="card card-body zoom">
        <Link to={`/lecture/${props.id}`}>
            <div className="row">
                <div className="card-img">
                    <p>{props.type}</p>
                    <img src={props.image} alt="lecture" className="img-circle img-responsive" />
                </div>
                <div className="mt-3">
                    <h4 className="box-title m-b-0">{props.title}</h4>
                    <small>{props.category}</small> <br />
                    <small>{props.scholar}</small>
                </div>
            </div>
        </Link>
    </div>
}
export default Card;