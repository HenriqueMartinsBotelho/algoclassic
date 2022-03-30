import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <div className="table">
        <div className="row header">
          <div className="cell">Name</div>
          <div className="cell">Age</div>
          <div className="cell">Occupation</div>
          <div className="cell">Location</div>
        </div>
        <div className="row">
          <div className="cell" data-title="Name">
            Luke Peters
          </div>
          <div className="cell" data-title="Age">
            25
          </div>
          <div className="cell" data-title="Occupation">
            Freelance Web Developer
          </div>
          <div className="cell" data-title="Location">
            Brookline, MA
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Name">
            Joseph Smith
          </div>
          <div className="cell" data-title="Age">
            27
          </div>
          <div className="cell" data-title="Occupation">
            Project Manager
          </div>
          <div className="cell" data-title="Location">
            Somerville, MA
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Name">
            Maxwell Johnson
          </div>
          <div className="cell" data-title="Age">
            26
          </div>
          <div className="cell" data-title="Occupation">
            UX Architect &amp; Designer
          </div>
          <div className="cell" data-title="Location">
            Arlington, MA
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Name">
            Harry Harrison
          </div>
          <div className="cell" data-title="Age">
            25
          </div>
          <div className="cell" data-title="Occupation">
            Front-End Developer
          </div>
          <div className="cell" data-title="Location">
            Boston, MA
          </div>
        </div>
      </div>
      <div className="table">
        <div className="row header green">
          <div className="cell">Product</div>
          <div className="cell">Unit Price</div>
          <div className="cell">Quantity</div>
          <div className="cell">Date Sold</div>
          <div className="cell">Status</div>
        </div>
        <div className="row">
          <div className="cell" data-title="Product">
            Solid oak work table
          </div>
          <div className="cell" data-title="Unit Price">
            $800
          </div>
          <div className="cell" data-title="Quantity">
            10
          </div>
          <div className="cell" data-title="Date Sold">
            03/15/2014
          </div>
          <div className="cell" data-title="Status">
            Waiting for Pickup
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Product">
            Leather iPhone wallet
          </div>
          <div className="cell" data-title="Unit Price">
            $45
          </div>
          <div className="cell" data-title="Quantity">
            120
          </div>
          <div className="cell" data-title="Date Sold">
            02/28/2014
          </div>
          <div className="cell" data-title="Status">
            In Transit
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Product">
            27 Apple Thunderbolt displays
          </div>
          <div className="cell" data-title="Unit Price">
            $1000
          </div>
          <div className="cell" data-title="Quantity">
            25
          </div>
          <div className="cell" data-title="Date Sold">
            02/10/2014
          </div>
          <div className="cell" data-title="Status">
            Delivered
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Product">
            Bose studio headphones
          </div>
          <div className="cell" data-title="Unit Price">
            $60
          </div>
          <div className="cell" data-title="Quantity">
            90
          </div>
          <div className="cell" data-title="Date Sold">
            01/14/2014
          </div>
          <div className="cell" data-title="Status">
            Delivered
          </div>
        </div>
      </div>
      <div className="table">
        <div className="row header blue">
          <div className="cell">Username</div>
          <div className="cell">Email</div>
          <div className="cell">Password</div>
          <div className="cell">Active</div>
        </div>
        <div className="row">
          <div className="cell" data-title="Username">
            ninjalug
          </div>
          <div className="cell" data-title="Email">
            misterninja@hotmail.com
          </div>
          <div className="cell" data-title="Password">
            ************
          </div>
          <div className="cell" data-title="Active">
            Yes
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Username">
            jsmith41
          </div>
          <div className="cell" data-title="Email">
            joseph.smith@gmail.com
          </div>
          <div className="cell" data-title="Password">
            ************
          </div>
          <div className="cell" data-title="Active">
            No
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Username">
            1337hax0r15
          </div>
          <div className="cell" data-title="Email">
            hackerdude1000@aol.com
          </div>
          <div className="cell" data-title="Password">
            ************
          </div>
          <div className="cell" data-title="Active">
            Yes
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Username">
            hairyharry19
          </div>
          <div className="cell" data-title="Email">
            harryharry@gmail.com
          </div>
          <div className="cell" data-title="Password">
            ************
          </div>
          <div className="cell" data-title="Active">
            Yes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
