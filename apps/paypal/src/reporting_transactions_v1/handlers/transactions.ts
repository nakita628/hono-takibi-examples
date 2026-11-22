import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReportingTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app.openapi(getV1ReportingTransactionsRoute, (c) => {
  throw new Error('Not implemented')
})
