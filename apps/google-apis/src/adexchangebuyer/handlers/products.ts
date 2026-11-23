import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductsProductIdRoute, getProductsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getProductsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
