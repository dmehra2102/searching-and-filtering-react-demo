import React, { useEffect, useState } from "react";
import { RadioGroup, Stack } from "@chakra-ui/react";
import { Radio } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Fetching_Data_Function } from "../Redux/actions";

const FilterPage = () => {
	const dispatch = useDispatch();
	  const [searchParams,setSearchParams] = useSearchParams();
      const handleCategory = (e) => {
            const option = e.target.value;
			dispatch(Fetching_Data_Function(option));
			setSearchParams({category : option});
      };


      return (
            <div>
                  <p style={{ fontSize: "1.5rem", padding: "1vw" }}>
                        Filter by category
                  </p>
                  <div>
				  <RadioGroup>
                        <Stack
                              onChange={handleCategory}
                              spacing={5}
                              direction="column"
                              p={"1vw"}
                        >
                              <Radio
                                    value={"smartphones"}
                                    colorScheme="green"
                              >
                                    smartphones
                              </Radio>
                              <Radio
                                    value={"furniture"}
                                    colorScheme="green"
                              >
                                    furniture
                              </Radio>
                              <Radio
                                    value={"womens-dresses"}
                                    colorScheme="green"
                              >
                                    womens-dresses
                              </Radio>
                              <Radio
                                    value={"womens-watches"}
                                    colorScheme="green"
                              >
                                    womens-watches
                              </Radio>
                              <Radio
                                    value={"womens-shoes"}
                                    colorScheme="green"
                              >
                                    womens-shoes
                              </Radio>
							  <Radio
                                    value={"all"}
                                    colorScheme="green"
                              >
                                    All
                              </Radio>
                        </Stack>
						</RadioGroup>
                  </div>
            </div>
      );
};

export default FilterPage;
