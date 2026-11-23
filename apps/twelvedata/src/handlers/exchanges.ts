import { OpenAPIHono } from '@hono/zod-openapi'
import { getExchangesRoute } from '../routes'

const app = new OpenAPIHono()

export const exchangesHandler = app.openapi(getExchangesRoute, (c) => {
  throw new Error('Not implemented')
})
