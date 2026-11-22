import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAuditLogsRoute,
  getAccountsAccountIdLogsAuditIdHistoryRoute,
  getAccountsAccountIdLogsAuditProductCategoriesRoute,
  getAccountsAccountIdLogsAuditRoute,
  getOrganizationsOrganizationIdLogsAuditIdHistoryRoute,
  getOrganizationsOrganizationIdLogsAuditRoute,
  getUserAuditLogsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app
  .openapi(getAccountsAccountIdAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogsAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogsAuditProductCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogsAuditIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdLogsAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdLogsAuditIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
