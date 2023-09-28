import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Select from "react-select";

const iceCreamFlavors = [
  {
    value: "vanilla",
    label: "Vanilla",
    slogan: "Pure Pleasure in Every Scoop!",
  },
  {
    value: "chocolate",
    label: "Chocolate",
    slogan: "Indulge in Chocolate Bliss!",
  },
  {
    value: "strawberry",
    label: "Strawberry",
    slogan: "Sweet, Juicy, and Simply Berrylicious!",
  },
  {
    value: "mintChocolateChip",
    label: "Mint Chocolate Chip",
    slogan: "Cool Mint, Chocolate Bliss!",
  },
  {
    value: "rockyRoad",
    label: "Rocky Road",
    slogan: "A Bumpy Road to Chocolate Heaven!",
  },
  {
    value: "cookieDough",
    label: "Cookie Dough",
    slogan: "Dig In for a Dough-licious Delight!",
  },
  {
    value: "butterPecan",
    label: "Butter Pecan",
    slogan: "Rich, Creamy, and Nutty Perfection!",
  },
  {
    value: "coffee",
    label: "Coffee",
    slogan: "Wake Up Your Taste Buds with Coffee Creaminess!",
  },
  {
    value: "raspberryRipple",
    label: "Raspberry Ripple",
    slogan: "Swirls of Raspberry Delight in Every Bite!",
  },
  {
    value: "pistachio",
    label: "Pistachio",
    slogan: "Nuts for Pistachio? You Bet-chachio!",
  },
  {
    value: "cookiesAndCream",
    label: "Cookies and Cream",
    slogan: "Classic Cookies Meet Dreamy Cream!",
  },
  {
    value: "caramelSwirl",
    label: "Caramel Swirl",
    slogan: "Caramel Heaven in Every Swirl!",
  },
  {
    value: "neapolitan",
    label: "Neapolitan",
    slogan: "Three Flavors, One Spoonful of Happiness!",
  },
  {
    value: "toffeeCrunch",
    label: "Toffee Crunch",
    slogan: "Crunch Your Way to Toffee Delight!",
  },
  {
    value: "blueberryCheesecake",
    label: "Blueberry Cheesecake",
    slogan: "Creamy Cheesecake with a Blueberry Burst!",
  },
  {
    value: "rainbowSherbet",
    label: "Rainbow Sherbet",
    slogan: "Taste the Rainbow, Scoop by Scoop!",
  },
  {
    value: "cherryGarcia",
    label: "Cherry Garcia",
    slogan: "Cherry Goodness with a Dash of Fun!",
  },
  {
    value: "lemonSorbet",
    label: "Lemon Sorbet",
    slogan: "Tangy and Refreshing, Lemon Sorbet Delight!",
  },
  {
    value: "coconutBliss",
    label: "Coconut Bliss",
    slogan: "Escape to the Tropics with Every Bite!",
  },
  {
    value: "mapleWalnut",
    label: "Maple Walnut",
    slogan: "A Taste of Maple Syrup Magic!",
  },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid gray",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "blue" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "",
    },
  }),
};

const formatOptionLabel = ({ label, slogan }) => (
  <div>
    <strong>{label}</strong>
    <span style={{ color: "gray" }}> ({slogan})</span>
  </div>
);

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleMultiSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <Container>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Typography variant="h3">React Select Tutorial</Typography>
          <Select
            options={iceCreamFlavors}
            value={selectedOptions}
            onChange={handleMultiSelectChange}
            isLoading={isLoading}
            placeholder="Select your flavour"
            styles={customStyles}
            isMulti
            formatOptionLabel={formatOptionLabel}
            noOptionsMessage={() => "No options found"}
          />
          {selectedOptions.length > 0 && (
            <Typography variant="body1">
              You selected:{" "}
              {selectedOptions.map((option) => option.label).join(", ")}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
