import React from "react";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Img1 from "../assets/images/img1.jpeg";
import Img2 from "../assets/images/img22.jpeg";
import Img3 from "../assets/images/img3.jpeg";
import Img4 from "../assets/images/img4.jpeg";
import Img5 from "../assets/images/img5.jpeg";
import Img6 from "../assets/images/img6.jpeg";
import Img7 from "../assets/images/img7.jpeg";

function Home() {
  return (
    <>
     <NavBar/>
      {/* <!-- rest body --> */}
      <div className="container">
        {/* <!-- row 1 --> */}
        <div className="row">
          <div className="row-left">
            <img src={Img1} alt="jamie" />
          </div>
          <div className="row-right">
            <h2>New: Faster Faves, Only in the App</h2>
            <p>
              We now prep when you’re on the way if you choose Curbside, Front
              Counter—or dine in for Table Service. J ust order ahead in the app
              to save time. Because waiting in line for faves? Not our thing
              either.*
            </p>
            <p id="row-small">*At participating McDonald’s.</p>
            <button>Order Ahead in the App</button>
          </div>
        </div>
        {/* <!-- row 2 --> */}
        <div className="row">
          <div className="row-left">
            <img src={Img2} alt="jamie" />
          </div>
          <div className="row-right">
            <h2>Spring Into Shortcake</h2>
            <p>
              As colorful as spring, a budding fave has arrived. Enjoy a new
              Strawberry Shortcake McFlurry® that features our creamy vanilla
              soft serve with strawberry flavored clusters and crispy, buttery
              shortbread cookies, now for a limited time.*
            </p>
            <p id="row-small">
              *At participating McDonald’s for a limited time.
            </p>
            <button>Order in the App</button>
          </div>
        </div>
        {/* <!-- row 3 --> */}
        <div className="row">
          <div className="row-left">
            <img src={Img3} alt="jamie" />
          </div>
          <div className="row-right">
            <h2>Try the New Bacon Ranch McCrispy™*</h2>
            <p>
              Applewood smoked bacon? Yes. Creamy ranch sauce? Double yes... Try
              it today, for a limited time only—or go a little extra with
              toppings and get the Bacon Ranch Deluxe McCrispy™.
            </p>
            <p id="row-small">
              *At participating McDonald's for a limited time.
            </p>
            <button>Order a McCrispy™ in the App</button>
          </div>
        </div>
        {/* <!-- row 4 --> */}
        <div className="row">
          <div className="row-left">
            <img src={Img4} alt="jamie" />
          </div>
          <div className="row-right">
            <h2>Score Free Food with McDelivery®</h2>
            <p>
              We now prep when you’re on the way if you choose Curbside, Front
              Counter—or dine in for Table Service. J ust order ahead in the app
              to save time. Because waiting in line for faves? Not our thing
              either.*
            </p>
            <p id="row-small">*At participating McDonald’s.</p>
            <button>Order Ahead in the App</button>
          </div>
        </div>
        {/* <!-- row 5 --> */}
        <div className="row">
          <div className="row-left">
            <img src={Img5} alt="jamie" />
          </div>
          <div className="row-right">
            <h2>New: Faster Faves, Only in the App</h2>
            <p>
              We now prep when you’re on the way if you choose Curbside, Front
              Counter—or dine in for Table Service. J ust order ahead in the app
              to save time. Because waiting in line for faves? Not our thing
              either.*
            </p>
            <p id="row-small">*At participating McDonald’s.</p>
            <button>Order Ahead in the App</button>
          </div>
        </div>
        {/* <!-- row 6 --> */}
        <div className="row">
          <div className="row-left">
            <img src={Img6} alt="jamie" />
          </div>
          <div className="row-right">
            <h2>New: Faster Faves, Only in the App</h2>
            <p>
              We now prep when you’re on the way if you choose Curbside, Front
              Counter—or dine in for Table Service. J ust order ahead in the app
              to save time. Because waiting in line for faves? Not our thing
              either.*
            </p>
            <p id="row-small">*At participating McDonald’s.</p>
            <button>Order Ahead in the App</button>
          </div>
        </div>
        {/* <!-- row 7 --> */}
        <div className="row">
          <div className="row-left">
            <img src={Img7} alt="jamie" />
          </div>
          <div className="row-right">
            <h2>Deals for Days</h2>
            <p>
              Get <a href="#">exclusive deals</a> on your McDonald’s favorites
              in the app with contactless Mobile Order & Pay* and convenient
              Drive Thru or Curbside pickup.
            </p>
            <p id="row-small">*At participating McDonald’s.</p>
            <button>Order Ahead in the App</button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
