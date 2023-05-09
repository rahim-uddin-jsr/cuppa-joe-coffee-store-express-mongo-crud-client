/* eslint-disable react/prop-types */
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Coffee = ({ coffee }) => {
  const { name, chef, supplier, photo, _id } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl justify-evenly ">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body flex-row  justify-between items-center">
        <div className="text-left">
          <p>Name: {name}</p>
          <p>Chef: {chef}</p>
          <p>Price:{supplier}</p>
        </div>
        <div className="card-actions justify-end flex-col">
          <button className="btn  btn-circle btn-sm">
            <FaEye />
          </button>
          <Link to={`update/${_id}`}>
            <button className="btn  btn-circle btn-sm">
              <FaPencilAlt></FaPencilAlt>
            </button>
          </Link>
          <button className="btn  btn-circle btn-sm">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
