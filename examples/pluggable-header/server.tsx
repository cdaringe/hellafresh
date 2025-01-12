import { type AppMiddleware } from "../app-meta/mod.ts";

export const middleware: AppMiddleware = async (
  _req,
  ctx,
) => {
  ctx.state.foo = true;
  const response = await ctx.next();
  response.headers.set("X-Hello", "World");
  return response;
};

// export const compare: AppPluggable["server"]["compare"] = (_other) => 1;
