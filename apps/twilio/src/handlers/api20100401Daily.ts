import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidUsageRecordsDailyJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401DailyHandler = app.openapi(
  get20100401AccountsAccountSidUsageRecordsDailyJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
