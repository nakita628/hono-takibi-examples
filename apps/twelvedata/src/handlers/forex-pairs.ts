import { OpenAPIHono } from '@hono/zod-openapi'
import { getForexPairsRoute } from '../routes'

const app = new OpenAPIHono()

export const forexPairsHandler = app.openapi(getForexPairsRoute, (c) => {
  throw new Error('Not implemented')
})
