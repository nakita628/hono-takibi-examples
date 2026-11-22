import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2AuditlogIdRoute,
  getApiV2AuditlogRoute,
  postApiV2AuditlogCountsRoute,
  postApiV2AuditlogRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditLogHandler = app
  .openapi(getApiV2AuditlogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuditlogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuditlogCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuditlogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
