import { middleware as Header } from 'Header/server.tsx';
import { AppMiddleware } from "meta";


/**
 * @description efficient compose adapted from koa-compose
 */
export const composeMiddleware = (middlewares: AppMiddleware[]): AppMiddleware => {
  const composed: AppMiddleware = function (req, ctx) {
    const originalFreshNext = ctx.next;
    let index = -1
    return dispatch(0)
    function dispatch (i: number): Promise<Response> {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      const mw = middlewares[i];
      if (!mw) {
        return originalFreshNext();
      }
      try {
        ctx.next = dispatch.bind(null, i + 1)
        return Promise.resolve(mw(req, ctx))
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
  return composed
};

const orderedMiddlewares = {
  Header,
}

const composedMiddleware = composeMiddleware(Object.values(orderedMiddlewares));

export const handler: AppMiddleware = composedMiddleware;
