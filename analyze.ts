import { $ } from 'bun'

await $`bunx depcruise --no-config -T json index.mjs > ../../imports.json`
  .cwd('.output/server')
  .then((r) => console.log(r.text()))
  .catch((r) => console.log(r))

const data = await Bun.file('./imports.json').json()

const modules = data.modules

const map = new Map<string, number>()

for (const m of modules) {
  if (m.source.includes('chains')) {
    console.log(m)
  }
  map.set(m.source, m.dependencies.length)
}

const v = [...map.entries()].sort((a, b) => b[1] - a[1])

console.log(v.slice(0, 10))
