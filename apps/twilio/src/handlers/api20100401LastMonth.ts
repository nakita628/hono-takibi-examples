import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidUsageRecordsLastMonthJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401LastMonthHandler = app.openapi(
  get20100401AccountsAccountSidUsageRecordsLastMonthJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
