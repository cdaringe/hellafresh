import { AppPluggable } from "../app-meta/mod.ts";

export const middleware: AppPluggable["server"]["middleware"] = async (
  _req,
  ctx,
) => {
  const response = await ctx.next();
  response.headers.set("X-Hello", "World");
  return response;
};

export const compare: AppPluggable["server"]["compare"] = (_other) => 1;
