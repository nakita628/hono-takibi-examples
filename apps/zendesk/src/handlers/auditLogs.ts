import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2AuditLogsAuditLogIdRoute,
  getApiV2AuditLogsRoute,
  postApiV2AuditLogsExportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app
  .openapi(getApiV2AuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuditLogsAuditLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuditLogsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
