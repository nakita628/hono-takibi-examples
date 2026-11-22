import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsLinksTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const productsLinksTypesHandler = app.openapi(getV1ProductsLinksTypesRoute, (c) => {
  throw new Error('Not implemented')
})
