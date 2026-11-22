import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsAuditLogRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdAuditLogRoute,
  getAccountsAccountIdSecurityCenterInsightsAuditLogRoute,
  getAccountsAccountIdSecurityCenterInsightsIssueIdAuditLogRoute,
  getZonesZoneIdSecurityCenterInsightsAuditLogRoute,
  getZonesZoneIdSecurityCenterInsightsIssueIdAuditLogRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityCenterAuditLogHandler = app
  .openapi(getAccountsAccountIdSecurityCenterInsightsAuditLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecurityCenterInsightsIssueIdAuditLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecurityCenterInsightsAuditLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecurityCenterInsightsIssueIdAuditLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsAuditLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdAuditLogRoute, (c) => {
    throw new Error('Not implemented')
  })
