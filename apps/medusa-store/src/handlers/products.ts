import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreProductsIdRoute, getStoreProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getStoreProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
