import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsRoute, postV1ProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
