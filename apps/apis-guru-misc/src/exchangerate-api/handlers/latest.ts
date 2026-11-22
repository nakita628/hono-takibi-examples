import { OpenAPIHono } from '@hono/zod-openapi'
import { getLatestBaseCurrencyRoute } from '../routes'

const app = new OpenAPIHono()

export const latestHandler = app.openapi(getLatestBaseCurrencyRoute, (c) => {
  throw new Error('Not implemented')
})
