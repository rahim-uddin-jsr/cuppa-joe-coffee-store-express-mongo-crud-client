import { Link, useLoaderData } from "react-router-dom";
import Coffee from "../Coffee/Coffee";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <span>--- Sip & Savor ---</span>
      <h2 className="card-title">Our Popular Products</h2>
      <Link to="/add-coffees">
        <button className="btn btn-sm">Add Coffee</button>
      </Link>
      <div className="grid md:grid-cols-2 md:gap-8">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Home;
