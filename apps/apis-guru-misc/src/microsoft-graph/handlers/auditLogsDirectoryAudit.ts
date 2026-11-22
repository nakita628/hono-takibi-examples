import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuditLogsDirectoryAuditsDirectoryAuditIdRoute,
  getAuditLogsDirectoryAuditsDirectoryAuditIdRoute,
  getAuditLogsDirectoryAuditsRoute,
  patchAuditLogsDirectoryAuditsDirectoryAuditIdRoute,
  postAuditLogsDirectoryAuditsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditLogsDirectoryAuditHandler = app
  .openapi(getAuditLogsDirectoryAuditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditLogsDirectoryAuditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuditLogsDirectoryAuditsDirectoryAuditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditLogsDirectoryAuditsDirectoryAuditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuditLogsDirectoryAuditsDirectoryAuditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
