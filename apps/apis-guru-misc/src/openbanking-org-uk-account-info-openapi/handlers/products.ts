import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdProductRoute, getProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getAccountsAccountIdProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
