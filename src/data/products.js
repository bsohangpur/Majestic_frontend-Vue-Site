const products = [
  // {
  //   id: 1,
  //   name: "Camel Feed",
  //   link: {
  //     name: "Camel Feed",
  //     link: "/camel feed",
  //   },
  //   description: "High-quality feed for healthy camels.",
  //   price: "$19.99",
  //   detail: [
  //     {
  //       title: "Mineral/Vitamin Complex",
  //       content: "Oral Solution",
  //     },
  //     {
  //       title: "COMPOSITION",
  //       content: "Vitamin D3, Lysine, Ca glukonat, Methionine",
  //     },
  //     {
  //       title: "INDICATIONS",
  //       content:
  //         "Calcivit D, as soon as possible after the application supplies the body with bio adoptable calcium, which is necessary in conditions caused by deficiency of calcium. It regulates the metabolism of calcium. It helps in states of rachitis, osteomalacia, and bone diseases with different etiologies. It is used in the prevention of brittle bones as well as in strengthening shell eggs.",
  //     },
  //     {
  //       title: "TARGET SPECIES",
  //       content: "All animal species",
  //     },
  //     {
  //       title: "DOSAGE AND ADMINISTRATION",
  //       content:
  //         "Per oral administration after dissolving in drinking water in this dose:\n\nAll animal species: 1 L per 4000-5000 L of drinking water",
  //     },
  //     {
  //       title: "CONTRAINDICATIONS",
  //       content: "None described.",
  //     },
  //     {
  //       title: "ADVERSE REACTION",
  //       content: "None",
  //     },
  //     {
  //       title: "WITHDRAWAL PERIOD",
  //       content: "None",
  //     },
  //     {
  //       title: "SPECIAL PRECAUTIONS",
  //       content:
  //         "Store protected from humidity and light, on a temperature up to 25°C. Keep away from children.",
  //     },
  //     {
  //       title: "WAY OF ISSUE",
  //       content: "Without a prescription",
  //     },
  //     {
  //       title: "PRESENTATIONS",
  //       content: "PE bottles, net 1 L",
  //     },
  //     {
  //       title: "SHELF LIFE",
  //       content: "2 years",
  //     },
  //     {
  //       title: "ANIMAL CONTROL FACILITY NUMBER",
  //       content: "RS-31029",
  //     },
  //     {
  //       title: "PRODUCER NAME AND HEADQUARTERS",
  //       content: "Vetplanet doo, Vrsac, Vojvodjanskih brigada 16, Serbia",
  //     },
  //   ],
  //   image:
  //     "https://img.freepik.com/free-photo/front-view-preserved-corn-cans_23-2148793629.jpg?w=740&t=st=1685104660~exp=1685105260~hmac=486697b02d69d91c59c810b589a0653cacbaa83322df309e191fc966739f666c",
  // },
  // {
  //   id: 2,
  //   name: "Camel Grooming Kit",
  //   link: {
  //     name: "Camel Grooming Kit",
  //     link: "/camel grooming kit",
  //   },
  //   description: "Essential grooming tools for maintaining camel hygiene.",
  //   price: "$29.99",
  //   detail: [
  //     {
  //       title: "Mineral/Vitamin Complex",
  //       content: "Oral Solution",
  //     },
  //     {
  //       title: "COMPOSITION",
  //       content: "Vitamin D3, Lysine, Ca glukonat, Methionine",
  //     },
  //     {
  //       title: "INDICATIONS",
  //       content:
  //         "Calcivit D, as soon as possible after the application supplies the body with bio adoptable calcium, which is necessary in conditions caused by deficiency of calcium. It regulates the metabolism of calcium. It helps in states of rachitis, osteomalacia, and bone diseases with different etiologies. It is used in the prevention of brittle bones as well as in strengthening shell eggs.",
  //     },
  //     {
  //       title: "TARGET SPECIES",
  //       content: "All animal species",
  //     },
  //     {
  //       title: "DOSAGE AND ADMINISTRATION",
  //       content:
  //         "Per oral administration after dissolving in drinking water in this dose:\n\nAll animal species: 1 L per 4000-5000 L of drinking water",
  //     },
  //     {
  //       title: "CONTRAINDICATIONS",
  //       content: "None described.",
  //     },
  //     {
  //       title: "ADVERSE REACTION",
  //       content: "None",
  //     },
  //     {
  //       title: "WITHDRAWAL PERIOD",
  //       content: "None",
  //     },
  //     {
  //       title: "SPECIAL PRECAUTIONS",
  //       content:
  //         "Store protected from humidity and light, on a temperature up to 25°C. Keep away from children.",
  //     },
  //     {
  //       title: "WAY OF ISSUE",
  //       content: "Without a prescription",
  //     },
  //     {
  //       title: "PRESENTATIONS",
  //       content: "PE bottles, net 1 L",
  //     },
  //     {
  //       title: "SHELF LIFE",
  //       content: "2 years",
  //     },
  //     {
  //       title: "ANIMAL CONTROL FACILITY NUMBER",
  //       content: "RS-31029",
  //     },
  //     {
  //       title: "PRODUCER NAME AND HEADQUARTERS",
  //       content: "Vetplanet doo, Vrsac, Vojvodjanskih brigada 16, Serbia",
  //     },
  //   ],
  //   image:
  //     "https://img.freepik.com/free-photo/close-up-man-selfcare-products_23-2149313033.jpg?w=900&t=st=1685104695~exp=1685105295~hmac=e496ed2b2bd086eff4f11c66a0166e0e801564833f7fdfebd35c3ee71a9ff9ff",
  // },
  // {
  //   id: 3,
  //   name: "Rabbit Saddle",
  //   link: {
  //     name: "Rabbit Saddle",
  //     link: "/rabbit saddle",
  //   },
  //   description: "Comfortable and durable saddle for camel riding.",
  //   price: "$149.99",
  //   detail: [
  //     {
  //       title: "Mineral/Vitamin Complex",
  //       content: "Oral Solution",
  //     },
  //     {
  //       title: "COMPOSITION",
  //       content: "Vitamin D3, Lysine, Ca glukonat, Methionine",
  //     },
  //     {
  //       title: "INDICATIONS",
  //       content:
  //         "Calcivit D, as soon as possible after the application supplies the body with bio adoptable calcium, which is necessary in conditions caused by deficiency of calcium. It regulates the metabolism of calcium. It helps in states of rachitis, osteomalacia, and bone diseases with different etiologies. It is used in the prevention of brittle bones as well as in strengthening shell eggs.",
  //     },
  //     {
  //       title: "TARGET SPECIES",
  //       content: "All animal species",
  //     },
  //     {
  //       title: "DOSAGE AND ADMINISTRATION",
  //       content:
  //         "Per oral administration after dissolving in drinking water in this dose:\n\nAll animal species: 1 L per 4000-5000 L of drinking water",
  //     },
  //     {
  //       title: "CONTRAINDICATIONS",
  //       content: "None described.",
  //     },
  //     {
  //       title: "ADVERSE REACTION",
  //       content: "None",
  //     },
  //     {
  //       title: "WITHDRAWAL PERIOD",
  //       content: "None",
  //     },
  //     {
  //       title: "SPECIAL PRECAUTIONS",
  //       content:
  //         "Store protected from humidity and light, on a temperature up to 25°C. Keep away from children.",
  //     },
  //     {
  //       title: "WAY OF ISSUE",
  //       content: "Without a prescription",
  //     },
  //     {
  //       title: "PRESENTATIONS",
  //       content: "PE bottles, net 1 L",
  //     },
  //     {
  //       title: "SHELF LIFE",
  //       content: "2 years",
  //     },
  //     {
  //       title: "ANIMAL CONTROL FACILITY NUMBER",
  //       content: "RS-31029",
  //     },
  //     {
  //       title: "PRODUCER NAME AND HEADQUARTERS",
  //       content: "Vetplanet doo, Vrsac, Vojvodjanskih brigada 16, Serbia",
  //     },
  //   ],
  //   image:
  //     "https://img.freepik.com/free-photo/girls-ride-horses_1321-1272.jpg?w=900&t=st=1685104735~exp=1685105335~hmac=f4c5d38b2d6a38cd8622458d53694e3f7461b5290dec6df4258edcb8c23b7c8c",
  // },
];

export default products;
