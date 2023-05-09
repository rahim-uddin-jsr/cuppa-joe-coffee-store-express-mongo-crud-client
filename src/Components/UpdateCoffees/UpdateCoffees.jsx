import { useLoaderData } from "react-router-dom";

const UpdateCoffees = () => {
  const loaderdata = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo, _id } =
    loaderdata;
  console.log(_id);

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`https://coffee-store-server-dev-rahim.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("updated");
        }
      });
  };
  return (
    <div className="md:max-w-lg mx-auto m-12">
      <h2 className="text-3xl font-medium mb-8">Update Coffee</h2>

      <form onSubmit={handleUpdateCoffee}>
        {/* row 1 */}
        <div className="grid md:grid-cols-2 md:gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={name}
              type="text"
              placeholder="Enter coffee name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              defaultValue={chef}
              type="text"
              placeholder="Enter coffee chef"
              name="chef"
              className="input input-bordered"
            />
          </div>
        </div>
        {/* row 2 */}
        <div className="grid md:grid-cols-2 md:gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              defaultValue={supplier}
              type="text"
              placeholder="Enter coffee supplier"
              name="supplier"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              defaultValue={taste}
              type="text"
              placeholder="Enter coffee taste"
              name="taste"
              className="input input-bordered"
            />
          </div>
        </div>
        {/* row 1 */}
        <div className="grid md:grid-cols-2 md:gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              defaultValue={category}
              type="text"
              placeholder="Enter coffee category"
              name="category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              defaultValue={details}
              type="text"
              placeholder="Enter coffee details"
              name="details"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            defaultValue={photo}
            type="url"
            placeholder="Enter coffee photo url"
            name="photo"
            className="input input-bordered"
          />
        </div>
        <button type="submit" className="btn btn-block mt-4">
          Update coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffees;
