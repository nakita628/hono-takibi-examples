import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1AccountsAccountIdAuditLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app.openapi(getApiV1AccountsAccountIdAuditLogsRoute, (c) => {
  throw new Error('Not implemented')
})
