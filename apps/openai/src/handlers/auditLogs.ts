import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationAuditLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app.openapi(getOrganizationAuditLogsRoute, (c) => {
  throw new Error('Not implemented')
})
