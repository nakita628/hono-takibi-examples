import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AuditLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app.openapi(getV1AuditLogsRoute, (c) => {
  throw new Error('Not implemented')
})
