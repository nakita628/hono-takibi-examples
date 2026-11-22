import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2AuditEventsRoute, postApiV2AuditEventsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const auditHandler = app
  .openapi(getApiV2AuditEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuditEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
