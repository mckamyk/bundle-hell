## Example of ESM -> CJS degredation

You'll need [bun](https://bun.sh).

to replicate...

```bash
bun i
bun run build
bun run ./analyize.ts
```

This will build the TSS app, then print out the top 10 dependencies by # of files imported by that dependency

This can help find tree-shaking problems, most commonly caused by a drop from ESM down to CJS imports.

example of the output at the time of writing this...

```
../../node_modules/viem/_cjs/index.js depends on 148 files
../../node_modules/viem/_cjs/utils/index.js depends on 102 files
../../node_modules/viem/_cjs/clients/decorators/public.js depends on 52 files
../../node_modules/@tanstack/react-router/dist/cjs/index.cjs depends on 36 files
../../node_modules/viem/_cjs/clients/decorators/test.js depends on 30 files
chunks/nitro/nitro.mjs depends on 28 files
index.mjs depends on 23 files
../../node_modules/viem/_cjs/clients/decorators/wallet.js depends on 23 files
chunks/build/api.demo-names.mjs depends on 22 files
chunks/build/demo.start.server-funcs-C0EtWzjd.mjs depends on 22 files
```

Despite everything being written in ESM imports, `viem`'s exports are being bundled as CJS.
