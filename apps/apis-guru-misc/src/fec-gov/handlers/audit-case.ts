import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuditCaseIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const auditCaseHandler = app.openapi(getAuditCaseIndexRoute, (c) => {
  throw new Error('Not implemented')
})
