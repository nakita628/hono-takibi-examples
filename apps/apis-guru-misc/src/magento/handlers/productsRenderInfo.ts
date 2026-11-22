import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsRenderInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const productsRenderInfoHandler = app.openapi(getV1ProductsRenderInfoRoute, (c) => {
  throw new Error('Not implemented')
})
