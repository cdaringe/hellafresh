import {} from "./deps/fresh/server.ts";
import { PluggableUI } from "../../defresh/mod.ts";
import { ComponentType } from 'preact'
import { ComponentChild } from "preact";
import type { FreshContext, MiddlewareHandler } from "./deps/fresh/server.ts";

export interface AppContext {
  foo?: true;
  bar?: string;
}

export type LayoutFn =  (ctx: FreshContext<AppContext>) => ComponentChild | Promise<ComponentChild>;


export interface AppPluggable extends PluggableUI<AppContext, ComponentType> {
}

export type AppMiddleware = MiddlewareHandler<AppContext>;
