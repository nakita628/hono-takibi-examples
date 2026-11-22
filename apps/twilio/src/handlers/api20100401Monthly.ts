import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidUsageRecordsMonthlyJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401MonthlyHandler = app.openapi(
  get20100401AccountsAccountSidUsageRecordsMonthlyJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
