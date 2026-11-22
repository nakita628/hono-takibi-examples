import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuditRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const auditHandler = app.openapi(getAuditRecordsRoute, (c) => {
  throw new Error('Not implemented')
})
