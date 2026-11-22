import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ParentSkusRoute, getV1ProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSkusRoute, (c) => {
    throw new Error('Not implemented')
  })
