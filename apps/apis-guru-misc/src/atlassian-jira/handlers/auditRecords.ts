import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3AuditingRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const auditRecordsHandler = app.openapi(getRestApi3AuditingRecordRoute, (c) => {
  throw new Error('Not implemented')
})
