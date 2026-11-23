import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductInfoJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productInfoJsonHandler = app.openapi(getProductInfoJsonRoute, (c) => {
  throw new Error('Not implemented')
})
