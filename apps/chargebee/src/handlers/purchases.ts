import { OpenAPIHono } from '@hono/zod-openapi'
import { postPurchasesEstimateRoute, postPurchasesRoute } from '../routes'

const app = new OpenAPIHono()

export const purchasesHandler = app
  .openapi(postPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPurchasesEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
