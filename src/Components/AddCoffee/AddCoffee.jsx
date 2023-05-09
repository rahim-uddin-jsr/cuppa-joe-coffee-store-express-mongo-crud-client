const AddCoffee = () => {
  const handleAddCoffee = (e) => {
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
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("added");
        }
      });
  };
  return (
    <div className="md:max-w-lg mx-auto m-12">
      <h2 className="text-3xl font-medium mb-8">Add New Coffee</h2>
      <p>
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddCoffee}>
        {/* row 1 */}
        <div className="grid md:grid-cols-2 md:gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
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
            type="url"
            placeholder="Enter coffee photo url"
            name="photo"
            className="input input-bordered"
          />
        </div>
        <button type="submit" className="btn btn-block mt-4">
          Add coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
