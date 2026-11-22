import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidUsageRecordsYesterdayJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401YesterdayHandler = app.openapi(
  get20100401AccountsAccountSidUsageRecordsYesterdayJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
