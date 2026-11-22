import { OpenAPIHono } from '@hono/zod-openapi'
import { postCmsAuditLogs202609ExportRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app.openapi(postCmsAuditLogs202609ExportRoute, (c) => {
  throw new Error('Not implemented')
})
