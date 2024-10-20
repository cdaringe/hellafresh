import * as parseArgs from "jsr:@std/cli/parse-args";
import * as assert from "jsr:@std/assert";

const {_: [cmd, ...restcmd]} = parseArgs.parseArgs(Deno.args);
if (cmd === 'run') {
  const [url] = restcmd;
  assert.assert(typeof url === 'string', 'url is required');
  const cmd = new Deno.Command(Deno.execPath(), {
    args: ['run', '-A', url],
  });
  await cmd.spawn()
} else {
  assert.assert(false, `unknown command: ${cmd ?? 'MISSING_COMMAND'}`);
}
