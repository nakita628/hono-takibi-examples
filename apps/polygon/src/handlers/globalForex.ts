import { OpenAPIHono } from '@hono/zod-openapi'
import { getForexV1ExchangesRoute } from '../routes'

const app = new OpenAPIHono()

export const globalForexHandler = app.openapi(getForexV1ExchangesRoute, (c) => {
  throw new Error('Not implemented')
})
