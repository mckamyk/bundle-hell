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
