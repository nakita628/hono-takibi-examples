import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1AuditLogsListRoute } from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app.openapi(postV1AuditLogsListRoute, (c) => {
  throw new Error('Not implemented')
})
