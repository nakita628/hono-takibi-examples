import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsOptionsTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const productsOptionsTypesHandler = app.openapi(getV1ProductsOptionsTypesRoute, (c) => {
  throw new Error('Not implemented')
})
