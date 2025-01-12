import * as parseArgs from "jsr:@std/cli/parse-args";
import * as assert from "jsr:@std/assert";
import { MiddlewareHandler } from "$fresh/server.ts";

const { _: [cmd, ...restcmd] } = parseArgs.parseArgs(Deno.args);
if (cmd === "run") {
  const [url] = restcmd;
  assert.assert(typeof url === "string", "url is required");
  const cmd = new Deno.Command(Deno.execPath(), {
    args: ["run", "-A", url],
  });
  await cmd.spawn();
} else {
  assert.assert(false, `unknown command: ${cmd ?? "MISSING_COMMAND"}`);
}

type Maybe<T> = T | undefined;

export interface PluggableUI<
  State = unknown,
  ComponentType = unknown,
  R extends Maybe<string> = undefined,
> {
  server: {
    middleware: MiddlewareHandler<State>;
    // compare: (
    //   other: PluggableUI<
    //     /* we could type these, but they shouldn't be used in comparators */ unknown,
    //     unknown
    //   >,
    // ) => number;
  };
  browser: ComponentType;
  metadata: {
    name: string;
    version: string;
    route?: R;
  };
}

export const run = async () => {
  // update app's import_map to use defresh's fresh.
  // defreshIfyPwdApp(pluggables);
  /// updates import map to use defresh's "fresh" instance
  /// updates import map to use pointers to pluggables UI components and server

  // A
  // processPlugins();
}
