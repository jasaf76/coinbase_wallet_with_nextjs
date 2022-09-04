import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    {
      title: "Coins",
      name: "coins",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Symbols",
          name: "symbols",
          type: "string",
        },
        {
          title: "Contract Address",
          name: "contractAddress",
          type: "string",
        },
        {
          title: "Euro Price",
          name: "euroPrice",
          type: "string",
        },
        {
          title: "Logo",
          name: "logo",
          type: "image",
        },
      ],
    },
  ]),
});
