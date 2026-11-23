import { OpenAPIHono } from '@hono/zod-openapi'
import { postInvestmentsHoldingsGetRoute, postInvestmentsTransactionsGetRoute } from '../routes'

const app = new OpenAPIHono()

export const investmentsHandler = app
  .openapi(postInvestmentsHoldingsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvestmentsTransactionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
