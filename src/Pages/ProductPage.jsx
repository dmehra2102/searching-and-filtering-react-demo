import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fetching_Data_Function } from "../Redux/actions";
import "../styles/productPage.css";
import { Spinner } from "@chakra-ui/react";
import FilterPage from "./FilterPage";

const ProductPage = () => {
      const dispatch = useDispatch();
      const { products, LoadingData,word } = useSelector(
            (state) => state.DataReducer
      );
        // console.log(word);
      useEffect(() => {
            dispatch(Fetching_Data_Function(dispatch));
      }, []);
      return (
            <div className="main-productpage-conatiner">
				{/* Filtering Component */}
                  <div className="filterDiv">
					<FilterPage />
				  </div>

				  {/* Maping all Data below */}
                  <div className="productDiv">
                        {(LoadingData || products.length === 0) && (
                              <Spinner
							  marginLeft={"30vw"}
                                    thickness="4px"
                                    speed="0.65s"
                                    emptyColor="gray.200"
                                    color="blue.500"
                                    size="xl"
                              />
                        )}
                        {products?.filter((el)=> {
							return el.title.toLowerCase().includes(word.toLowerCase());
						}).map((item) => {
                              return (
                                    <div key={item.id} className="prodcut-item-div">
                                          <div className="product-item-image-div">
                                                <img
                                                      src={item.images[0]}
                                                      alt={item.title}
                                                />
                                          </div>
                                          <div className="product-item-text-div">
                                                <p className="item-title">
                                                      {item.title}
                                                </p>
                                                <p className="item-description">
                                                      {item.description}
                                                </p>
                                                <p className="item-brand">
                                                      {item.brand}
                                                </p>
                                          </div>
                                    </div>
                              );
                        })}
                  </div>
            </div>
      );
};

export default ProductPage;
