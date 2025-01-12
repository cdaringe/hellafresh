import { PluggableUI } from "../../defresh/mod.ts";

import * as server from "./server.tsx";
import * as browser from "./browser.tsx";
import * as metadata from "./metadata.ts";

const _ = {
  server,
  browser,
  metadata,
} satisfies PluggableUI;

throw new Error("This file should never be executed");
