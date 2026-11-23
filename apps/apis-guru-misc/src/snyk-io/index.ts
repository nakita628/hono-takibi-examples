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
  getGroupGroupIdMembersRoute,
  getGroupGroupIdOrgsRoute,
  getGroupGroupIdRolesRoute,
  getGroupGroupIdSettingsRoute,
  getGroupGroupIdTagsRoute,
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
  getOrgsRoute,
  getTestGradleGroupNameVersionRoute,
  getTestMavenGroupIdArtifactIdVersionRoute,
  getTestNpmPackageNameVersionRoute,
  getTestPipPackageNameVersionRoute,
  getTestRubygemsGemNameVersionRoute,
  getTestSbtGroupIdArtifactIdVersionRoute,
  getUserMeNotificationSettingsOrgOrgIdProjectProjectIdRoute,
  getUserMeNotificationSettingsOrgOrgIdRoute,
  getUserMeRoute,
  getUserUserIdRoute,
  postGroupGroupIdAuditRoute,
  postGroupGroupIdOrgOrgIdMembersRoute,
  postGroupGroupIdTagsDeleteRoute,
  postMonitorDepGraphRoute,
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
  postReportingCountsIssuesLatestRoute,
  postReportingCountsIssuesRoute,
  postReportingCountsProjectsLatestRoute,
  postReportingCountsProjectsRoute,
  postReportingCountsTestsRoute,
  postReportingIssuesIndexRoute,
  postReportingIssuesLatestRoute,
  postTestComposerRoute,
  postTestDepGraphRoute,
  postTestGolangdepRoute,
  postTestGovendorRoute,
  postTestGradleRoute,
  postTestMavenRoute,
  postTestNpmRoute,
  postTestPipRoute,
  postTestRubygemsRoute,
  postTestSbtRoute,
  postTestYarnRoute,
  putGroupGroupIdSettingsRoute,
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
  putUserMeNotificationSettingsOrgOrgIdProjectProjectIdRoute,
  putUserMeNotificationSettingsOrgOrgIdRoute,
} from './routes'
import {
  deleteOrgOrgIdIntegrationsIntegrationIdAuthenticationRouteHandler,
  deleteOrgOrgIdMembersUserIdRouteHandler,
  deleteOrgOrgIdProjectProjectIdIgnoreIssueIdRouteHandler,
  deleteOrgOrgIdProjectProjectIdRouteHandler,
  deleteOrgOrgIdProjectProjectIdSettingsRouteHandler,
  deleteOrgOrgIdProvisionRouteHandler,
  deleteOrgOrgIdRouteHandler,
  deleteOrgOrgIdWebhooksWebhookIdRouteHandler,
  getGroupGroupIdMembersRouteHandler,
  getGroupGroupIdOrgsRouteHandler,
  getGroupGroupIdRolesRouteHandler,
  getGroupGroupIdSettingsRouteHandler,
  getGroupGroupIdTagsRouteHandler,
  getOrgOrgIdEntitlementEntitlementKeyRouteHandler,
  getOrgOrgIdEntitlementsRouteHandler,
  getOrgOrgIdIntegrationsIntegrationIdImportJobIdRouteHandler,
  getOrgOrgIdIntegrationsIntegrationIdSettingsRouteHandler,
  getOrgOrgIdIntegrationsRouteHandler,
  getOrgOrgIdIntegrationsTypeRouteHandler,
  getOrgOrgIdMembersRouteHandler,
  getOrgOrgIdNotificationSettingsRouteHandler,
  getOrgOrgIdProjectProjectIdDepGraphRouteHandler,
  getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsRouteHandler,
  getOrgOrgIdProjectProjectIdIgnoreIssueIdRouteHandler,
  getOrgOrgIdProjectProjectIdIgnoresRouteHandler,
  getOrgOrgIdProjectProjectIdIssueIssueIdPathsRouteHandler,
  getOrgOrgIdProjectProjectIdJiraIssuesRouteHandler,
  getOrgOrgIdProjectProjectIdRouteHandler,
  getOrgOrgIdProjectProjectIdSettingsRouteHandler,
  getOrgOrgIdProvisionRouteHandler,
  getOrgOrgIdSettingsRouteHandler,
  getOrgOrgIdWebhooksRouteHandler,
  getOrgOrgIdWebhooksWebhookIdRouteHandler,
  getOrgsRouteHandler,
  getTestGradleGroupNameVersionRouteHandler,
  getTestMavenGroupIdArtifactIdVersionRouteHandler,
  getTestNpmPackageNameVersionRouteHandler,
  getTestPipPackageNameVersionRouteHandler,
  getTestRubygemsGemNameVersionRouteHandler,
  getTestSbtGroupIdArtifactIdVersionRouteHandler,
  getUserMeNotificationSettingsOrgOrgIdProjectProjectIdRouteHandler,
  getUserMeNotificationSettingsOrgOrgIdRouteHandler,
  getUserMeRouteHandler,
  getUserUserIdRouteHandler,
  postGroupGroupIdAuditRouteHandler,
  postGroupGroupIdOrgOrgIdMembersRouteHandler,
  postGroupGroupIdTagsDeleteRouteHandler,
  postMonitorDepGraphRouteHandler,
  postOrgOrgIdAuditRouteHandler,
  postOrgOrgIdDependenciesRouteHandler,
  postOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenRouteHandler,
  postOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenRouteHandler,
  postOrgOrgIdIntegrationsIntegrationIdCloneRouteHandler,
  postOrgOrgIdIntegrationsIntegrationIdImportRouteHandler,
  postOrgOrgIdIntegrationsRouteHandler,
  postOrgOrgIdInviteRouteHandler,
  postOrgOrgIdLicensesRouteHandler,
  postOrgOrgIdProjectProjectIdActivateRouteHandler,
  postOrgOrgIdProjectProjectIdAggregatedIssuesRouteHandler,
  postOrgOrgIdProjectProjectIdAttributesRouteHandler,
  postOrgOrgIdProjectProjectIdDeactivateRouteHandler,
  postOrgOrgIdProjectProjectIdHistoryRouteHandler,
  postOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesRouteHandler,
  postOrgOrgIdProjectProjectIdIgnoreIssueIdRouteHandler,
  postOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueRouteHandler,
  postOrgOrgIdProjectProjectIdTagsRemoveRouteHandler,
  postOrgOrgIdProjectProjectIdTagsRouteHandler,
  postOrgOrgIdProjectsRouteHandler,
  postOrgOrgIdProvisionRouteHandler,
  postOrgOrgIdWebhooksRouteHandler,
  postOrgOrgIdWebhooksWebhookIdPingRouteHandler,
  postOrgRouteHandler,
  postReportingCountsIssuesLatestRouteHandler,
  postReportingCountsIssuesRouteHandler,
  postReportingCountsProjectsLatestRouteHandler,
  postReportingCountsProjectsRouteHandler,
  postReportingCountsTestsRouteHandler,
  postReportingIssuesIndexRouteHandler,
  postReportingIssuesLatestRouteHandler,
  postTestComposerRouteHandler,
  postTestDepGraphRouteHandler,
  postTestGolangdepRouteHandler,
  postTestGovendorRouteHandler,
  postTestGradleRouteHandler,
  postTestMavenRouteHandler,
  postTestNpmRouteHandler,
  postTestPipRouteHandler,
  postTestRubygemsRouteHandler,
  postTestSbtRouteHandler,
  postTestYarnRouteHandler,
  putGroupGroupIdSettingsRouteHandler,
  putOrgOrgIdIntegrationsIntegrationIdRouteHandler,
  putOrgOrgIdIntegrationsIntegrationIdSettingsRouteHandler,
  putOrgOrgIdMembersUpdateUserIdRouteHandler,
  putOrgOrgIdMembersUserIdRouteHandler,
  putOrgOrgIdNotificationSettingsRouteHandler,
  putOrgOrgIdProjectProjectIdIgnoreIssueIdRouteHandler,
  putOrgOrgIdProjectProjectIdMoveRouteHandler,
  putOrgOrgIdProjectProjectIdRouteHandler,
  putOrgOrgIdProjectProjectIdSettingsRouteHandler,
  putOrgOrgIdSettingsRouteHandler,
  putUserMeNotificationSettingsOrgOrgIdProjectProjectIdRouteHandler,
  putUserMeNotificationSettingsOrgOrgIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGroupGroupIdAuditRoute, postGroupGroupIdAuditRouteHandler)
  .openapi(getGroupGroupIdMembersRoute, getGroupGroupIdMembersRouteHandler)
  .openapi(postGroupGroupIdOrgOrgIdMembersRoute, postGroupGroupIdOrgOrgIdMembersRouteHandler)
  .openapi(getGroupGroupIdOrgsRoute, getGroupGroupIdOrgsRouteHandler)
  .openapi(getGroupGroupIdRolesRoute, getGroupGroupIdRolesRouteHandler)
  .openapi(getGroupGroupIdSettingsRoute, getGroupGroupIdSettingsRouteHandler)
  .openapi(putGroupGroupIdSettingsRoute, putGroupGroupIdSettingsRouteHandler)
  .openapi(getGroupGroupIdTagsRoute, getGroupGroupIdTagsRouteHandler)
  .openapi(postGroupGroupIdTagsDeleteRoute, postGroupGroupIdTagsDeleteRouteHandler)
  .openapi(postMonitorDepGraphRoute, postMonitorDepGraphRouteHandler)
  .openapi(postOrgRoute, postOrgRouteHandler)
  .openapi(deleteOrgOrgIdRoute, deleteOrgOrgIdRouteHandler)
  .openapi(postOrgOrgIdAuditRoute, postOrgOrgIdAuditRouteHandler)
  .openapi(postOrgOrgIdDependenciesRoute, postOrgOrgIdDependenciesRouteHandler)
  .openapi(
    getOrgOrgIdEntitlementEntitlementKeyRoute,
    getOrgOrgIdEntitlementEntitlementKeyRouteHandler,
  )
  .openapi(getOrgOrgIdEntitlementsRoute, getOrgOrgIdEntitlementsRouteHandler)
  .openapi(getOrgOrgIdIntegrationsRoute, getOrgOrgIdIntegrationsRouteHandler)
  .openapi(postOrgOrgIdIntegrationsRoute, postOrgOrgIdIntegrationsRouteHandler)
  .openapi(
    putOrgOrgIdIntegrationsIntegrationIdRoute,
    putOrgOrgIdIntegrationsIntegrationIdRouteHandler,
  )
  .openapi(
    deleteOrgOrgIdIntegrationsIntegrationIdAuthenticationRoute,
    deleteOrgOrgIdIntegrationsIntegrationIdAuthenticationRouteHandler,
  )
  .openapi(
    postOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenRoute,
    postOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenRouteHandler,
  )
  .openapi(
    postOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenRoute,
    postOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenRouteHandler,
  )
  .openapi(
    postOrgOrgIdIntegrationsIntegrationIdCloneRoute,
    postOrgOrgIdIntegrationsIntegrationIdCloneRouteHandler,
  )
  .openapi(
    postOrgOrgIdIntegrationsIntegrationIdImportRoute,
    postOrgOrgIdIntegrationsIntegrationIdImportRouteHandler,
  )
  .openapi(
    getOrgOrgIdIntegrationsIntegrationIdImportJobIdRoute,
    getOrgOrgIdIntegrationsIntegrationIdImportJobIdRouteHandler,
  )
  .openapi(
    getOrgOrgIdIntegrationsIntegrationIdSettingsRoute,
    getOrgOrgIdIntegrationsIntegrationIdSettingsRouteHandler,
  )
  .openapi(
    putOrgOrgIdIntegrationsIntegrationIdSettingsRoute,
    putOrgOrgIdIntegrationsIntegrationIdSettingsRouteHandler,
  )
  .openapi(getOrgOrgIdIntegrationsTypeRoute, getOrgOrgIdIntegrationsTypeRouteHandler)
  .openapi(postOrgOrgIdInviteRoute, postOrgOrgIdInviteRouteHandler)
  .openapi(postOrgOrgIdLicensesRoute, postOrgOrgIdLicensesRouteHandler)
  .openapi(getOrgOrgIdMembersRoute, getOrgOrgIdMembersRouteHandler)
  .openapi(putOrgOrgIdMembersUpdateUserIdRoute, putOrgOrgIdMembersUpdateUserIdRouteHandler)
  .openapi(deleteOrgOrgIdMembersUserIdRoute, deleteOrgOrgIdMembersUserIdRouteHandler)
  .openapi(putOrgOrgIdMembersUserIdRoute, putOrgOrgIdMembersUserIdRouteHandler)
  .openapi(getOrgOrgIdNotificationSettingsRoute, getOrgOrgIdNotificationSettingsRouteHandler)
  .openapi(putOrgOrgIdNotificationSettingsRoute, putOrgOrgIdNotificationSettingsRouteHandler)
  .openapi(deleteOrgOrgIdProjectProjectIdRoute, deleteOrgOrgIdProjectProjectIdRouteHandler)
  .openapi(getOrgOrgIdProjectProjectIdRoute, getOrgOrgIdProjectProjectIdRouteHandler)
  .openapi(putOrgOrgIdProjectProjectIdRoute, putOrgOrgIdProjectProjectIdRouteHandler)
  .openapi(
    postOrgOrgIdProjectProjectIdActivateRoute,
    postOrgOrgIdProjectProjectIdActivateRouteHandler,
  )
  .openapi(
    postOrgOrgIdProjectProjectIdAggregatedIssuesRoute,
    postOrgOrgIdProjectProjectIdAggregatedIssuesRouteHandler,
  )
  .openapi(
    postOrgOrgIdProjectProjectIdAttributesRoute,
    postOrgOrgIdProjectProjectIdAttributesRouteHandler,
  )
  .openapi(
    postOrgOrgIdProjectProjectIdDeactivateRoute,
    postOrgOrgIdProjectProjectIdDeactivateRouteHandler,
  )
  .openapi(
    getOrgOrgIdProjectProjectIdDepGraphRoute,
    getOrgOrgIdProjectProjectIdDepGraphRouteHandler,
  )
  .openapi(
    postOrgOrgIdProjectProjectIdHistoryRoute,
    postOrgOrgIdProjectProjectIdHistoryRouteHandler,
  )
  .openapi(
    postOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesRoute,
    postOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesRouteHandler,
  )
  .openapi(
    getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsRoute,
    getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsRouteHandler,
  )
  .openapi(
    deleteOrgOrgIdProjectProjectIdIgnoreIssueIdRoute,
    deleteOrgOrgIdProjectProjectIdIgnoreIssueIdRouteHandler,
  )
  .openapi(
    getOrgOrgIdProjectProjectIdIgnoreIssueIdRoute,
    getOrgOrgIdProjectProjectIdIgnoreIssueIdRouteHandler,
  )
  .openapi(
    postOrgOrgIdProjectProjectIdIgnoreIssueIdRoute,
    postOrgOrgIdProjectProjectIdIgnoreIssueIdRouteHandler,
  )
  .openapi(
    putOrgOrgIdProjectProjectIdIgnoreIssueIdRoute,
    putOrgOrgIdProjectProjectIdIgnoreIssueIdRouteHandler,
  )
  .openapi(getOrgOrgIdProjectProjectIdIgnoresRoute, getOrgOrgIdProjectProjectIdIgnoresRouteHandler)
  .openapi(
    postOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueRoute,
    postOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueRouteHandler,
  )
  .openapi(
    getOrgOrgIdProjectProjectIdIssueIssueIdPathsRoute,
    getOrgOrgIdProjectProjectIdIssueIssueIdPathsRouteHandler,
  )
  .openapi(
    getOrgOrgIdProjectProjectIdJiraIssuesRoute,
    getOrgOrgIdProjectProjectIdJiraIssuesRouteHandler,
  )
  .openapi(putOrgOrgIdProjectProjectIdMoveRoute, putOrgOrgIdProjectProjectIdMoveRouteHandler)
  .openapi(
    deleteOrgOrgIdProjectProjectIdSettingsRoute,
    deleteOrgOrgIdProjectProjectIdSettingsRouteHandler,
  )
  .openapi(
    getOrgOrgIdProjectProjectIdSettingsRoute,
    getOrgOrgIdProjectProjectIdSettingsRouteHandler,
  )
  .openapi(
    putOrgOrgIdProjectProjectIdSettingsRoute,
    putOrgOrgIdProjectProjectIdSettingsRouteHandler,
  )
  .openapi(postOrgOrgIdProjectProjectIdTagsRoute, postOrgOrgIdProjectProjectIdTagsRouteHandler)
  .openapi(
    postOrgOrgIdProjectProjectIdTagsRemoveRoute,
    postOrgOrgIdProjectProjectIdTagsRemoveRouteHandler,
  )
  .openapi(postOrgOrgIdProjectsRoute, postOrgOrgIdProjectsRouteHandler)
  .openapi(deleteOrgOrgIdProvisionRoute, deleteOrgOrgIdProvisionRouteHandler)
  .openapi(getOrgOrgIdProvisionRoute, getOrgOrgIdProvisionRouteHandler)
  .openapi(postOrgOrgIdProvisionRoute, postOrgOrgIdProvisionRouteHandler)
  .openapi(getOrgOrgIdSettingsRoute, getOrgOrgIdSettingsRouteHandler)
  .openapi(putOrgOrgIdSettingsRoute, putOrgOrgIdSettingsRouteHandler)
  .openapi(getOrgOrgIdWebhooksRoute, getOrgOrgIdWebhooksRouteHandler)
  .openapi(postOrgOrgIdWebhooksRoute, postOrgOrgIdWebhooksRouteHandler)
  .openapi(deleteOrgOrgIdWebhooksWebhookIdRoute, deleteOrgOrgIdWebhooksWebhookIdRouteHandler)
  .openapi(getOrgOrgIdWebhooksWebhookIdRoute, getOrgOrgIdWebhooksWebhookIdRouteHandler)
  .openapi(postOrgOrgIdWebhooksWebhookIdPingRoute, postOrgOrgIdWebhooksWebhookIdPingRouteHandler)
  .openapi(getOrgsRoute, getOrgsRouteHandler)
  .openapi(postReportingCountsIssuesRoute, postReportingCountsIssuesRouteHandler)
  .openapi(postReportingCountsIssuesLatestRoute, postReportingCountsIssuesLatestRouteHandler)
  .openapi(postReportingCountsProjectsRoute, postReportingCountsProjectsRouteHandler)
  .openapi(postReportingCountsProjectsLatestRoute, postReportingCountsProjectsLatestRouteHandler)
  .openapi(postReportingCountsTestsRoute, postReportingCountsTestsRouteHandler)
  .openapi(postReportingIssuesIndexRoute, postReportingIssuesIndexRouteHandler)
  .openapi(postReportingIssuesLatestRoute, postReportingIssuesLatestRouteHandler)
  .openapi(postTestComposerRoute, postTestComposerRouteHandler)
  .openapi(postTestDepGraphRoute, postTestDepGraphRouteHandler)
  .openapi(postTestGolangdepRoute, postTestGolangdepRouteHandler)
  .openapi(postTestGovendorRoute, postTestGovendorRouteHandler)
  .openapi(postTestGradleRoute, postTestGradleRouteHandler)
  .openapi(getTestGradleGroupNameVersionRoute, getTestGradleGroupNameVersionRouteHandler)
  .openapi(postTestMavenRoute, postTestMavenRouteHandler)
  .openapi(
    getTestMavenGroupIdArtifactIdVersionRoute,
    getTestMavenGroupIdArtifactIdVersionRouteHandler,
  )
  .openapi(postTestNpmRoute, postTestNpmRouteHandler)
  .openapi(getTestNpmPackageNameVersionRoute, getTestNpmPackageNameVersionRouteHandler)
  .openapi(postTestPipRoute, postTestPipRouteHandler)
  .openapi(getTestPipPackageNameVersionRoute, getTestPipPackageNameVersionRouteHandler)
  .openapi(postTestRubygemsRoute, postTestRubygemsRouteHandler)
  .openapi(getTestRubygemsGemNameVersionRoute, getTestRubygemsGemNameVersionRouteHandler)
  .openapi(postTestSbtRoute, postTestSbtRouteHandler)
  .openapi(getTestSbtGroupIdArtifactIdVersionRoute, getTestSbtGroupIdArtifactIdVersionRouteHandler)
  .openapi(postTestYarnRoute, postTestYarnRouteHandler)
  .openapi(getUserMeRoute, getUserMeRouteHandler)
  .openapi(
    getUserMeNotificationSettingsOrgOrgIdRoute,
    getUserMeNotificationSettingsOrgOrgIdRouteHandler,
  )
  .openapi(
    putUserMeNotificationSettingsOrgOrgIdRoute,
    putUserMeNotificationSettingsOrgOrgIdRouteHandler,
  )
  .openapi(
    getUserMeNotificationSettingsOrgOrgIdProjectProjectIdRoute,
    getUserMeNotificationSettingsOrgOrgIdProjectProjectIdRouteHandler,
  )
  .openapi(
    putUserMeNotificationSettingsOrgOrgIdProjectProjectIdRoute,
    putUserMeNotificationSettingsOrgOrgIdProjectProjectIdRouteHandler,
  )
  .openapi(getUserUserIdRoute, getUserUserIdRouteHandler)

export default app
