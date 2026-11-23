import { OpenAPIHono } from '@hono/zod-openapi'
import { getSimilarSalePriceRoute } from '../routes'

const app = new OpenAPIHono()

export const similarSalePriceHandler = app.openapi(getSimilarSalePriceRoute, (c) => {
  throw new Error('Not implemented')
})
