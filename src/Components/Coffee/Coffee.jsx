/* eslint-disable react/prop-types */
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee }) => {
  const { name, chef, supplier, photo, _id } = coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };
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
          <button
            onClick={() => handleDelete(_id)}
            className="btn  btn-circle btn-sm"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
