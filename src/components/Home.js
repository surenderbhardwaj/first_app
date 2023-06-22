import React from "react";

function Home() {
    return (
        <div>
            <h1> Home Component</h1>
            <div className="card">
                <div className="card-wrapper item">
                    <img src="https://birchtree.me/content/images/2021/06/007-copy.jpg"></img>

                </div>
                <div className="card-wrapper item">
                    <h3>i-phone</h3>
                </div>
                <div className="card-wrapper item">
                    <h3>Prices = 1000</h3>

                </div>
                <button className="btn btn-primary btn-wrapped item">Add to Cart</button>
            </div>

        </div>
    )
}
export default Home;