import { OpenAPIHono } from '@hono/zod-openapi'
import { getPriceguideIdTransactionsSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const priceguideHandler = app.openapi(getPriceguideIdTransactionsSummaryRoute, (c) => {
  throw new Error('Not implemented')
})
