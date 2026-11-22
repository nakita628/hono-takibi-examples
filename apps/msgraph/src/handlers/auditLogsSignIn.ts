import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuditLogsSignInsSignInIdRoute,
  getAuditLogsSignInsCountRoute,
  getAuditLogsSignInsRoute,
  getAuditLogsSignInsSignInIdRoute,
  patchAuditLogsSignInsSignInIdRoute,
  postAuditLogsSignInsConfirmCompromisedRoute,
  postAuditLogsSignInsConfirmSafeRoute,
  postAuditLogsSignInsDismissRoute,
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
  .openapi(getAuditLogsSignInsSignInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuditLogsSignInsSignInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuditLogsSignInsSignInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditLogsSignInsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditLogsSignInsConfirmCompromisedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditLogsSignInsConfirmSafeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditLogsSignInsDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
