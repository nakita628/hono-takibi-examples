import { OpenAPIHono } from '@hono/zod-openapi'
import { getPriceRoute } from '../routes'

const app = new OpenAPIHono()

export const priceHandler = app.openapi(getPriceRoute, (c) => {
  throw new Error('Not implemented')
})
