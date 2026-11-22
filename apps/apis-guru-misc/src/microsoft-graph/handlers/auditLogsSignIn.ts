import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuditLogsSignInsSignInIdRoute,
  getAuditLogsSignInsRoute,
  getAuditLogsSignInsSignInIdRoute,
  patchAuditLogsSignInsSignInIdRoute,
  postAuditLogsSignInsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditLogsSignInHandler = app
  .openapi(getAuditLogsSignInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditLogsSignInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuditLogsSignInsSignInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditLogsSignInsSignInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuditLogsSignInsSignInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
