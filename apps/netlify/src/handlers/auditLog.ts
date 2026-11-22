import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdAuditRoute } from '../routes'

const app = new OpenAPIHono()

export const auditLogHandler = app.openapi(getAccountsAccountIdAuditRoute, (c) => {
  throw new Error('Not implemented')
})
