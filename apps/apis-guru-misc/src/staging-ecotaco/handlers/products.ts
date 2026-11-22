import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductsIdRoute, getProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
