import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1FinanceReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const financeReportsHandler = app.openapi(getV1FinanceReportsRoute, (c) => {
  throw new Error('Not implemented')
})
