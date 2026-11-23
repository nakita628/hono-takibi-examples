import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgOrgIdIntegrationsIntegrationIdAuthenticationRoute,
  deleteOrgOrgIdMembersUserIdRoute,
  deleteOrgOrgIdProjectProjectIdIgnoreIssueIdRoute,
  deleteOrgOrgIdProjectProjectIdRoute,
  deleteOrgOrgIdProjectProjectIdSettingsRoute,
  deleteOrgOrgIdProvisionRoute,
  deleteOrgOrgIdRoute,
  deleteOrgOrgIdWebhooksWebhookIdRoute,
  getOrgOrgIdEntitlementEntitlementKeyRoute,
  getOrgOrgIdEntitlementsRoute,
  getOrgOrgIdIntegrationsIntegrationIdImportJobIdRoute,
  getOrgOrgIdIntegrationsIntegrationIdSettingsRoute,
  getOrgOrgIdIntegrationsRoute,
  getOrgOrgIdIntegrationsTypeRoute,
  getOrgOrgIdMembersRoute,
  getOrgOrgIdNotificationSettingsRoute,
  getOrgOrgIdProjectProjectIdDepGraphRoute,
  getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsRoute,
  getOrgOrgIdProjectProjectIdIgnoreIssueIdRoute,
  getOrgOrgIdProjectProjectIdIgnoresRoute,
  getOrgOrgIdProjectProjectIdIssueIssueIdPathsRoute,
  getOrgOrgIdProjectProjectIdJiraIssuesRoute,
  getOrgOrgIdProjectProjectIdRoute,
  getOrgOrgIdProjectProjectIdSettingsRoute,
  getOrgOrgIdProvisionRoute,
  getOrgOrgIdSettingsRoute,
  getOrgOrgIdWebhooksRoute,
  getOrgOrgIdWebhooksWebhookIdRoute,
  postOrgOrgIdAuditRoute,
  postOrgOrgIdDependenciesRoute,
  postOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenRoute,
  postOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenRoute,
  postOrgOrgIdIntegrationsIntegrationIdCloneRoute,
  postOrgOrgIdIntegrationsIntegrationIdImportRoute,
  postOrgOrgIdIntegrationsRoute,
  postOrgOrgIdInviteRoute,
  postOrgOrgIdLicensesRoute,
  postOrgOrgIdProjectProjectIdActivateRoute,
  postOrgOrgIdProjectProjectIdAggregatedIssuesRoute,
  postOrgOrgIdProjectProjectIdAttributesRoute,
  postOrgOrgIdProjectProjectIdDeactivateRoute,
  postOrgOrgIdProjectProjectIdHistoryRoute,
  postOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesRoute,
  postOrgOrgIdProjectProjectIdIgnoreIssueIdRoute,
  postOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueRoute,
  postOrgOrgIdProjectProjectIdTagsRemoveRoute,
  postOrgOrgIdProjectProjectIdTagsRoute,
  postOrgOrgIdProjectsRoute,
  postOrgOrgIdProvisionRoute,
  postOrgOrgIdWebhooksRoute,
  postOrgOrgIdWebhooksWebhookIdPingRoute,
  postOrgRoute,
  putOrgOrgIdIntegrationsIntegrationIdRoute,
  putOrgOrgIdIntegrationsIntegrationIdSettingsRoute,
  putOrgOrgIdMembersUpdateUserIdRoute,
  putOrgOrgIdMembersUserIdRoute,
  putOrgOrgIdNotificationSettingsRoute,
  putOrgOrgIdProjectProjectIdIgnoreIssueIdRoute,
  putOrgOrgIdProjectProjectIdMoveRoute,
  putOrgOrgIdProjectProjectIdRoute,
  putOrgOrgIdProjectProjectIdSettingsRoute,
  putOrgOrgIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgHandler = app
  .openapi(postOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdEntitlementEntitlementKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdIntegrationsIntegrationIdAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdIntegrationsIntegrationIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdIntegrationsIntegrationIdImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdIntegrationsIntegrationIdImportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdIntegrationsIntegrationIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdIntegrationsIntegrationIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdIntegrationsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdMembersUpdateUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdAggregatedIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdDepGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdProjectProjectIdIgnoreIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdIgnoreIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdIgnoreIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdProjectProjectIdIgnoreIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdIgnoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdIssueIssueIdPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdJiraIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdProjectProjectIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdProjectProjectIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdProjectProjectIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdTagsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdWebhooksWebhookIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
