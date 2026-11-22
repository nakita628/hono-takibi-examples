import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3AccountsAccountIdAuditLogsDownloadIndexRoute,
  getApiV3AccountsAccountIdAuditLogsExportIndexRoute,
  getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexRoute,
  getApiV3AccountsAccountIdAuditLogsIndexRoute,
  postApiV3AccountsAccountIdAuditLogsExportIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app
  .openapi(getApiV3AccountsAccountIdAuditLogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdAuditLogsDownloadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdAuditLogsExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdAuditLogsExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
