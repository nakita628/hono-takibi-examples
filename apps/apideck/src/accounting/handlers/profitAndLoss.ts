import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountingProfitAndLossRoute } from '../routes'

const app = new OpenAPIHono()

export const profitAndLossHandler = app.openapi(getAccountingProfitAndLossRoute, (c) => {
  throw new Error('Not implemented')
})
