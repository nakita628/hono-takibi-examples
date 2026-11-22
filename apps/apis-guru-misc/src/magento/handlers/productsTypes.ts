import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const productsTypesHandler = app.openapi(getV1ProductsTypesRoute, (c) => {
  throw new Error('Not implemented')
})
