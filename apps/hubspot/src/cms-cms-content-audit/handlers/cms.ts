import { OpenAPIHono } from '@hono/zod-openapi'
import { getCmsAuditLogs202609Route, postCmsAuditLogs202609ExportRoute } from '../routes'

const app = new OpenAPIHono()

export const cmsHandler = app
  .openapi(getCmsAuditLogs202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsAuditLogs202609ExportRoute, (c) => {
    throw new Error('Not implemented')
  })
