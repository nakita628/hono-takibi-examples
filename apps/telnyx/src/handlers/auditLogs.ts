import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuditEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app.openapi(getAuditEventsRoute, (c) => {
  throw new Error('Not implemented')
})
