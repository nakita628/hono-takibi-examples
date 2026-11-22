import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidUsageRecordsAllTimeJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401AllTimeHandler = app.openapi(
  get20100401AccountsAccountSidUsageRecordsAllTimeJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
