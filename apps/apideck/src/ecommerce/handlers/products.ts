import { OpenAPIHono } from '@hono/zod-openapi'
import { getEcommerceProductsIdRoute, getEcommerceProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getEcommerceProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
