import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuditLogsActionsActionNameSchemasRoute,
  getAuditLogsActionsRoute,
  getAuditLogsExportsAuditLogExportIdRoute,
  getOrganizationsIdAuditLogsRetentionRoute,
  postAuditLogsActionsActionNameSchemasRoute,
  postAuditLogsEventsRoute,
  postAuditLogsExportsRoute,
  putOrganizationsIdAuditLogsRetentionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app
  .openapi(getAuditLogsActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditLogsActionsActionNameSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditLogsActionsActionNameSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditLogsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditLogsExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditLogsExportsAuditLogExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdAuditLogsRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdAuditLogsRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
