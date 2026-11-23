import { OpenAPIHono } from '@hono/zod-openapi'
import { getSwissIdTrfRoute } from '../routes'

const app = new OpenAPIHono()

export const swissHandler = app.openapi(getSwissIdTrfRoute, (c) => {
  throw new Error('Not implemented')
})
