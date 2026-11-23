import { OpenAPIHono } from '@hono/zod-openapi'
import { getVwapRoute } from '../routes'

const app = new OpenAPIHono()

export const vwapHandler = app.openapi(getVwapRoute, (c) => {
  throw new Error('Not implemented')
})
