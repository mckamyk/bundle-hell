import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import { createServerFn } from '@tanstack/react-start'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  transport: http(),
})

const test = createServerFn().handler(async () => {
  return client.getBlockNumber()
})

export const Route = createFileRoute('/')({
  component: App,
  loader() {
    return test()
  },
})

function App() {
  const number = Route.useLoaderData()

  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p>{number}</p>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
      </header>
    </div>
  )
}
