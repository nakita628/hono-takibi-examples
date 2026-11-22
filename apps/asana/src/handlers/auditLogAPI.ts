import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkspacesWorkspaceGidAuditLogEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const auditLogAPIHandler = app.openapi(getWorkspacesWorkspaceGidAuditLogEventsRoute, (c) => {
  throw new Error('Not implemented')
})
