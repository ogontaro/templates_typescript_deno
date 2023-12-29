#!/usr/bin/env -S deno run

import "npm:zx@7.1.1/globals";

await $`echo "Hello, world!"`;
