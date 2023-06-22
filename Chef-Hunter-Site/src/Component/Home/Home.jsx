
import './Home.css'
import baner from '../../assets/png-transparent-chef-food-cooking-recipe-restaurant-cooking-baking-recipe-cooking-removebg.png'
import ChefSection from './chefSection/ChefSection';
import CustomerReview from './CustomarReview/CustomerReview';
import MostPopular from './MostPopular/MostPopular';
import FeauterRecipe from './FeauterRecipe/FeauterRecipe';
const Home = () => {


  
  return (
    <div>
      {/* div baner section */}
      <div className="baner md:flex  mx-auto">
        <div className="baner-ditails text-white pt-[20%] md:pt-[6%] w-full md:w-[50%] ps-5 md:ps-20">
          <h1 className="text-4xl mb-5 ">
            Welcome and Enjoy World-Class cuisine
          </h1>
          <p className="baner-p focus-in-expand-fwd ">
            Welcome to our food recipes website, your go-to destination for
            delicious and easy-to-follow recipes that will inspire your inner
            chef. Whether you're a seasoned home cook or a beginner in the
            kitchen, our website has something for everyone. Our team of
            experienced chefs and food enthusiasts is dedicated to providing you
            with a wide range of recipes that are not only delicious but also
            simple to make...
          </p>
          <button className="btn-b bounce-bottom "> Contact us</button>
        </div>

        <div className="baner-img w-[50%} h-[600px]] md:mt-20 slide-in-fwd-tr">
          <img src={baner} alt="" />
        </div>
      </div>
      {/*  chef section */}
      <div className="feature">
        <FeauterRecipe></FeauterRecipe>
      </div>
      <div className="chef-title  mt-10">
        <h1 className="text-center mt-2 text-6xl uppercase font-serif  chef">
          Our Chef
        </h1>
        <p className="text-center w-[70%] mx-auto mt-2  font-serif mb-10">
          Our team of chefs is a talented and diverse group, each with their own
          unique background and culinary style. With years of experience in the
          industry, our chefs have honed their skills to create dishes that are
          both delicious and visually stunning. From classic French cuisine to
          modern fusion, our menu reflects the diverse backgrounds of our chefs.
          We use only the freshest, highest-quality ingredients to create dishes
          that are bursting with flavor..{" "}
        </p>
        <ChefSection></ChefSection>
      </div>

      {/* Most popular section  */}
      <div className='w-[95%] mx-auto'>
        <MostPopular></MostPopular>
      </div>

      {/* Customer review */}

      <div className=" mt-8 w-[90%] h-[100vh] w-full mx-auto">
        <h1 className="text-center text-6xl font-serif mb-5 what">
          What Customers Are Saying About Us
        </h1>
        <hr className="w-40 mx-auto " />
        <p className="text-center font-serif">
          We pride ourselves on what our happy clients say.
        </p>
        <div className="customer mt-5">
          <CustomerReview></CustomerReview>
        </div>
      </div>
    </div>
  );
};

export default Home;