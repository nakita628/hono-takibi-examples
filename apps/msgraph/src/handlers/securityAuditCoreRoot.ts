import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityAuditLogQueriesAuditLogQueryIdRoute,
  deleteSecurityAuditLogRoute,
  getSecurityAuditLogQueriesAuditLogQueryIdRecordsAuditLogRecordIdRoute,
  getSecurityAuditLogQueriesAuditLogQueryIdRecordsCountRoute,
  getSecurityAuditLogQueriesAuditLogQueryIdRecordsRoute,
  getSecurityAuditLogQueriesAuditLogQueryIdRoute,
  getSecurityAuditLogQueriesCountRoute,
  getSecurityAuditLogQueriesRoute,
  getSecurityAuditLogRoute,
  patchSecurityAuditLogRoute,
  postSecurityAuditLogQueriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityAuditCoreRootHandler = app
  .openapi(getSecurityAuditLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAuditLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAuditLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAuditLogQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAuditLogQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAuditLogQueriesAuditLogQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAuditLogQueriesAuditLogQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAuditLogQueriesAuditLogQueryIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAuditLogQueriesAuditLogQueryIdRecordsAuditLogRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAuditLogQueriesAuditLogQueryIdRecordsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAuditLogQueriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
