import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdAccessLogsAccessRequestsRoute } from '../routes'

const app = new OpenAPIHono()

export const accessAuthenticationLogsHandler = app.openapi(
  getAccountsAccountIdAccessLogsAccessRequestsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
