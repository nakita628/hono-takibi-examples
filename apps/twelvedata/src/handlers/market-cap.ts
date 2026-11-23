import { OpenAPIHono } from '@hono/zod-openapi'
import { getMarketCapRoute } from '../routes'

const app = new OpenAPIHono()

export const marketCapHandler = app.openapi(getMarketCapRoute, (c) => {
  throw new Error('Not implemented')
})
