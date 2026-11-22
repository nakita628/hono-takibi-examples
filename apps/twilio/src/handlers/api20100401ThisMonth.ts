import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidUsageRecordsThisMonthJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401ThisMonthHandler = app.openapi(
  get20100401AccountsAccountSidUsageRecordsThisMonthJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
