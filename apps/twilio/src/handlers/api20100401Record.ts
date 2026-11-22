import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidUsageRecordsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401RecordHandler = app.openapi(
  get20100401AccountsAccountSidUsageRecordsJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
