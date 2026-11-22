import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsClassRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsPartnerCountRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsSeverityRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsTypeRoute,
  getAccountsAccountIdIntelAttackSurfaceReportIssuesClassRoute,
  getAccountsAccountIdIntelAttackSurfaceReportIssuesRoute,
  getAccountsAccountIdIntelAttackSurfaceReportIssuesSeverityRoute,
  getAccountsAccountIdIntelAttackSurfaceReportIssuesTypeRoute,
  getAccountsAccountIdIntelAttackSurfaceReportIssueTypesRoute,
  getAccountsAccountIdSecurityCenterInsightsClassRoute,
  getAccountsAccountIdSecurityCenterInsightsIssueIdContextRoute,
  getAccountsAccountIdSecurityCenterInsightsPartnerCountRoute,
  getAccountsAccountIdSecurityCenterInsightsRoute,
  getAccountsAccountIdSecurityCenterInsightsSeverityRoute,
  getAccountsAccountIdSecurityCenterInsightsTypeRoute,
  getAccountsAccountIdSecurityCenterStateRoute,
  getZonesZoneIdSecurityCenterInsightsClassRoute,
  getZonesZoneIdSecurityCenterInsightsPartnerCountRoute,
  getZonesZoneIdSecurityCenterInsightsRoute,
  getZonesZoneIdSecurityCenterInsightsSeverityRoute,
  getZonesZoneIdSecurityCenterInsightsTypeRoute,
  patchAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdClassificationRoute,
  patchAccountsAccountIdSecurityCenterInsightsIssueIdClassificationRoute,
  patchZonesZoneIdSecurityCenterInsightsIssueIdClassificationRoute,
  putAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdDismissRoute,
  putAccountsAccountIdIntelAttackSurfaceReportIssuesIssueIdDismissRoute,
  putAccountsAccountIdSecurityCenterInsightsIssueIdDismissRoute,
  putAccountsAccountIdSecurityCenterStateRoute,
  putZonesZoneIdSecurityCenterInsightsIssueIdDismissRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityCenterInsightsHandler = app
  .openapi(getAccountsAccountIdIntelAttackSurfaceReportIssueTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelAttackSurfaceReportIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelAttackSurfaceReportIssuesClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelAttackSurfaceReportIssuesSeverityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelAttackSurfaceReportIssuesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdIntelAttackSurfaceReportIssuesIssueIdDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecurityCenterInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecurityCenterInsightsClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecurityCenterInsightsPartnerCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecurityCenterInsightsSeverityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecurityCenterInsightsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdSecurityCenterInsightsIssueIdClassificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecurityCenterInsightsIssueIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSecurityCenterInsightsIssueIdDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecurityCenterStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSecurityCenterStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecurityCenterInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecurityCenterInsightsClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecurityCenterInsightsPartnerCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecurityCenterInsightsSeverityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecurityCenterInsightsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSecurityCenterInsightsIssueIdClassificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSecurityCenterInsightsIssueIdDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsPartnerCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsSeverityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdClassificationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
