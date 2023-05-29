import products from "./products";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Products",
    sublinks: products.map((product) => {
      return product.link;
    }),
    link: "/product",
  },
];

export default links;
