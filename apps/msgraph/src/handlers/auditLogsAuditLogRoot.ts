import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuditLogsRoute, patchAuditLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const auditLogsAuditLogRootHandler = app
  .openapi(getAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
