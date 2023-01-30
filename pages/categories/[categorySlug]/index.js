import { useEffect, useState } from "react";

// export const getStaticPaths = async () => {
//   // Static data for designing purposes
//   const slugs = [
//     {
//       FAClassificationSlug: "mopidat",
//     },
//     {
//       FAClassificationSlug: "mopidat2",
//     },
//     {
//       FAClassificationSlug: "organic",
//     },
//   ];

//   const paths = slugs.map((category) => {
//     return {
//       params: { categorySlug: `${category.FAClassificationSlug}` },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async (context) => {
//   const categories = [
//     {
//       FAClassificationName: "مبيدات",
//       FAClassificationPath: "//CATE0000000",
//       FAClassificationPathName: "//Categories",
//       IsItemOnly: false,
//       FAClassificationSlug: "mopidat",
//       ClassificationChildren: [
//         {
//           FAClassificationName: "2 مبيدات",
//           FAClassificationPath: "//CATE0000000",
//           FAClassificationPathName: "//Categories",
//           IsItemOnly: true,
//           FAClassificationSlug: "mopidat2",
//           ClassificationChildren: [],
//         },
//         {
//           FAClassificationName: "2 مبيدات",
//           FAClassificationPath: "//CATE0000000",
//           FAClassificationPathName: "//Categories",
//           IsItemOnly: true,
//           FAClassificationSlug: "mopidat2",
//           ClassificationChildren: [],
//         },
//         {
//           FAClassificationName: "2 مبيدات",
//           FAClassificationPath: "//CATE0000000",
//           FAClassificationPathName: "//Categories",
//           IsItemOnly: true,
//           FAClassificationSlug: "mopidat2",
//           ClassificationChildren: [],
//         },
//         {
//           FAClassificationName: "2 مبيدات",
//           FAClassificationPath: "//CATE0000000",
//           FAClassificationPathName: "//Categories",
//           IsItemOnly: true,
//           FAClassificationSlug: "mopidat2",
//           ClassificationChildren: [],
//         },
//       ],
//     },
//     {
//       FAClassificationName: "Organic",
//       FAClassificationPath: "//CATE0000000",
//       FAClassificationPathName: "//Categories",
//       IsItemOnly: true,
//       FAClassificationSlug: "organic",
//       ClassificationChildren: [],
//     },
//     {
//       FAClassificationName: "Organic 2",
//       FAClassificationPath: "//CATE0000000",
//       FAClassificationPathName: "//Categories",
//       IsItemOnly: true,
//       FAClassificationSlug: "organic2",
//       ClassificationChildren: [],
//     },
//     {
//       FAClassificationName: "2 مبيدات",
//       FAClassificationPath: "//CATE0000000",
//       FAClassificationPathName: "//Categories",
//       IsItemOnly: true,
//       FAClassificationSlug: "mopidat2",
//       ClassificationChildren: [],
//     },
//   ];
//   const subCategories = categories.filter(
//     (cat) => cat.FAClassificationSlug == context.params.categorySlug
//   );

//   return {
//     props: {
//       categories: subCategories[0].ClassificationChildren,
//       categorySlug: context.params.categorySlug,
//     },
//   };
// };

const CategorySlug = (props) => {
  const [lang, setLang] = useState("en");
  const [products, setProducts] = useState();
  const changeLangHandler = () => {
    setProducts("This is the products");
  };

  console.log(props.query);

  useEffect(() => {
    setProducts();
  }, []);
  return (
    <div>
      <h2>{props.categorySlug}</h2>
      <h2>lang is {lang}</h2>
      <button onClick={changeLangHandler}>Fetch Products</button>

      {lang == "en" && <h4>{products}</h4>}
    </div>
  );
};

export default CategorySlug;
