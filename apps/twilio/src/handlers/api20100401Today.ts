import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidUsageRecordsTodayJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401TodayHandler = app.openapi(
  get20100401AccountsAccountSidUsageRecordsTodayJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
