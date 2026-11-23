import { OpenAPIHono } from '@hono/zod-openapi'
import { getSalePriceRoute } from '../routes'

const app = new OpenAPIHono()

export const salePriceHandler = app.openapi(getSalePriceRoute, (c) => {
  throw new Error('Not implemented')
})
