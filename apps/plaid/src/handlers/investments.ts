import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postInvestmentsAuthGetRoute,
  postInvestmentsHoldingsGetRoute,
  postInvestmentsRefreshRoute,
  postInvestmentsTransactionsGetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const investmentsHandler = app
  .openapi(postInvestmentsHoldingsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvestmentsTransactionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvestmentsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvestmentsAuthGetRoute, (c) => {
    throw new Error('Not implemented')
  })
