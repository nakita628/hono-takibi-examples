import { hc } from 'hono/client'
import type { api } from './index'

type Client = ReturnType<typeof hc<typeof api>>

const hcWithType = (...args: Parameters<typeof hc>): Client => hc<typeof api>(...args)

export const client = hcWithType('/')
