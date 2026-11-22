import { OpenAPIHono } from '@hono/zod-openapi'
import { getCmsAuditLogs202609Route } from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app.openapi(getCmsAuditLogs202609Route, (c) => {
  throw new Error('Not implemented')
})
