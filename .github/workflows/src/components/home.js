
import Hero from "./hero";

const Home = () => {
  return (
    <div>
      <Hero text="This is my React 201 Final Project" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Enjoy looking for movies and get some cool info about them!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
