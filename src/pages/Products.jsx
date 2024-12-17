import React from 'react';
import { Data } from '../data/product';
import { useLocation, useNavigate } from 'react-router-dom';

const Products = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryparams = new URLSearchParams(location.search);

    // Extract parameters
    const category = queryparams.get("category");
    const sort = queryparams.get("sort");

    // Filter Products
    const filteredProducts = Data.filter((product) =>
        category ? product.category === category : true
    );

    // Sort Products
    if (sort) {
        if (sort === "asc") {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sort === "des") {
            filteredProducts.sort((a, b) => b.price - a.price);
        }
    }

    // Handle Filter
    function HandleFilter(key, value) {
        if (value) {
            queryparams.set(key, value);
        } else {
            queryparams.delete(key);
        }
        navigate(`${location.pathname}?${queryparams.toString()}`);
    }

    return (
        <div>
            <h1>Shop The Best Summer Deals</h1>

            {/* Category Filters Section */}
            <div className="category">
                <h3>Filter By Category</h3>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={() => HandleFilter("category", "men's clothing")} className="btn btn-primary">Men's Clothing</button>
                    <button type="button" onClick={() => HandleFilter("category", "women's clothing")} className="btn btn-warning">Women's Clothing</button>
                    <button type="button" onClick={() => HandleFilter("category", "electronics")} className="btn btn-danger">Electronics</button>
                    <button type="button" onClick={() => HandleFilter("category", "jewelery")} className="btn btn-info">Jewelery</button>
                    <button type="button" onClick={() => HandleFilter("category")} className="btn btn-success">All Products</button>
                </div>
            </div>

            {/* Sorting Buttons */}
            <div className="sort-products my-3">
            <h3>Sort By</h3>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={() => HandleFilter("sort", "asc")} className="btn btn-secondary">Low</button>
                    <button type="button" onClick={() => HandleFilter("sort", "des")} className="btn btn-dark">High</button>
                </div>
            </div>

            {/* Products Display */}
            <div className="row gy-3 my-3 ">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((ele) => (
                        <div className="col-sm-12 col-md-4 col-lg-4 bg-info-subtle"  key={ele.id} >
                            <div className="card shadow p-3 bg-dark-subtle">
                                <img src={ele.image} alt={ele.title} width={"100%"} height={"250px"} className="rounded-5" />
                                <h3 className="card-title">{ele.title.slice(0,10)}</h3>
                                <p className="card-text">${ele.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-danger my-5">No Products Found</div>
                )}
            </div>
        </div>
    );
};

export default Products;   