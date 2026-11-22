import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidUsageRecordsYearlyJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401YearlyHandler = app.openapi(
  get20100401AccountsAccountSidUsageRecordsYearlyJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
