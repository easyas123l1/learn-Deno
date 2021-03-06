import { Schema } from "https://deno.land/x/nessie/mod.ts";

export const up = (schema: Schema): void => {
  schema.create("products", (table) => {
    table.id();
    table.string("name", 100).nullable();
    table.string("model", 100).nullable();
    table.integer("year").nullable();
  });
};

export const down = (schema: Schema): void => {
  schema.drop("products");
};
