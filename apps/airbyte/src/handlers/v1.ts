import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConnectionsConnectionIdEnablementRoute,
  deleteV1DestinationsDestinationIdEnablementRoute,
  deleteV1SourcesSourceIdEnablementRoute,
  getV1ConnectionsConnectionIdEnablementRoute,
  getV1DestinationsDestinationIdEnablementRoute,
  getV1DestinationsDestinationIdSearchStatusRoute,
  getV1HealthRoute,
  getV1InstanceConfigurationRoute,
  getV1OpenapiRoute,
  getV1OrganizationPaymentConfigOrganizationIdRoute,
  getV1OrganizationsOrganizationIdToolCallsUsageRoute,
  getV1SourcesSourceIdEnablementRoute,
  getV1SourcesSourceIdSearchStatusRoute,
  getV1UserInvitationsByCodeInviteCodeRoute,
  getV1WebBackendConfigRoute,
  getV1WorkspacesWorkspaceIdSkillsDocsRoute,
  postV1ActorDefinitionsCreateRoute,
  postV1ActorDefinitionsFinishRoute,
  postV1ActorDefinitionsResultRoute,
  postV1ActorDefinitionsUpdateRoute,
  postV1ActorDefinitionVersionsGetDefaultRoute,
  postV1ActorDefinitionVersionsGetForDestinationRoute,
  postV1ActorDefinitionVersionsGetForSourceRoute,
  postV1ActorDefinitionVersionsResolveRoute,
  postV1AirbyteReleasesCreateRoute,
  postV1ApplicationsCreateRoute,
  postV1ApplicationsDeleteRoute,
  postV1ApplicationsListRoute,
  postV1ApplicationsTokenRoute,
  postV1AttemptCreateNewAttemptNumberRoute,
  postV1AttemptFailRoute,
  postV1AttemptGetCombinedStatsRoute,
  postV1AttemptGetForJobRoute,
  postV1AttemptSaveStatsRoute,
  postV1AttemptSaveStreamMetadataRoute,
  postV1AttemptSaveSyncConfigRoute,
  postV1AuditLogsListRoute,
  postV1BillingBackfillUsageRoute,
  postV1BillingCancelSubscriptionRoute,
  postV1BillingCustomerPortalRoute,
  postV1BillingDisableDelinquentWorkspacesRoute,
  postV1BillingHandleWebhookRoute,
  postV1BillingListInvoicesRoute,
  postV1BillingNotificationSettingsGetRoute,
  postV1BillingNotificationSettingsUpdateRoute,
  postV1BillingPaymentInformationRoute,
  postV1BillingSubscriptionInfoRoute,
  postV1BillingTrialStatusRoute,
  postV1BillingUnscheduleCancelSubscriptionRoute,
  postV1BillingUnschedulePlanChangeRoute,
  postV1CatalogsDiffRoute,
  postV1CommandsCancelRoute,
  postV1CommandsGetRoute,
  postV1CommandsOutputCheckRoute,
  postV1CommandsOutputConnectRoute,
  postV1CommandsOutputDiscoverRoute,
  postV1CommandsOutputReplicateRoute,
  postV1CommandsOutputSpecRoute,
  postV1CommandsRunCheckRoute,
  postV1CommandsRunConnectRoute,
  postV1CommandsRunDiscoverRoute,
  postV1CommandsRunReplicateRoute,
  postV1CommandsRunSpecRoute,
  postV1CommandsStatusRoute,
  postV1ConnectionsApplySchemaChangesRoute,
  postV1ConnectionsAutoDisableRoute,
  postV1ConnectionsClearRoute,
  postV1ConnectionsClearStreamRoute,
  postV1ConnectionsConnectionIdBackfillRoute,
  postV1ConnectionsConnectionIdEnablementRoute,
  postV1ConnectionsCreateRoute,
  postV1ConnectionsDeleteRoute,
  postV1ConnectionsEventsBackfillRoute,
  postV1ConnectionsEventsGetRoute,
  postV1ConnectionsEventsListForJobRoute,
  postV1ConnectionsEventsListMinimalRoute,
  postV1ConnectionsEventsListRoute,
  postV1ConnectionsGetContextRoute,
  postV1ConnectionsGetForJobRoute,
  postV1ConnectionsGetRoute,
  postV1ConnectionsHistoryDataRoute,
  postV1ConnectionsHistoryUptimeRoute,
  postV1ConnectionsLastJobPerStreamRoute,
  postV1ConnectionsListAllRoute,
  postV1ConnectionsListByActorDefinitionRoute,
  postV1ConnectionsListPaginatedRoute,
  postV1ConnectionsListRoute,
  postV1ConnectionsPostprocessDiscoveredCatalogRoute,
  postV1ConnectionsRefreshRoute,
  postV1ConnectionsResetRoute,
  postV1ConnectionsResetStreamRoute,
  postV1ConnectionsResolveEnablementForSyncRoute,
  postV1ConnectionsSearchRoute,
  postV1ConnectionsStatusRoute,
  postV1ConnectionsStreamHistoryRoute,
  postV1ConnectionsSyncProgressRoute,
  postV1ConnectionsSyncRoute,
  postV1ConnectionsUpdateRoute,
  postV1ConnectionsUpdateWithReasonRoute,
  postV1ConnectorBuilderAssistProcessRoute,
  postV1ConnectorBuilderAssistWarmRoute,
  postV1ConnectorBuilderProjectsCapabilitiesRoute,
  postV1ConnectorBuilderProjectsCompleteOauthRoute,
  postV1ConnectorBuilderProjectsContributeCheckRoute,
  postV1ConnectorBuilderProjectsContributeGenerateRoute,
  postV1ConnectorBuilderProjectsCreateRoute,
  postV1ConnectorBuilderProjectsDeleteRoute,
  postV1ConnectorBuilderProjectsForkRoute,
  postV1ConnectorBuilderProjectsFullResolveRoute,
  postV1ConnectorBuilderProjectsGetBaseImageRoute,
  postV1ConnectorBuilderProjectsGetForDefinitionIdRoute,
  postV1ConnectorBuilderProjectsGetOauthConsentUrlRoute,
  postV1ConnectorBuilderProjectsGetWithManifestRoute,
  postV1ConnectorBuilderProjectsListRoute,
  postV1ConnectorBuilderProjectsPublishRoute,
  postV1ConnectorBuilderProjectsReadStreamRoute,
  postV1ConnectorBuilderProjectsResolveRoute,
  postV1ConnectorBuilderProjectsUpdateRoute,
  postV1ConnectorBuilderProjectsUpdateTestingValuesRoute,
  postV1ConnectorDocumentationGetRoute,
  postV1ConnectorRolloutFinalizeRoute,
  postV1ConnectorRolloutGetActorSyncInfoRoute,
  postV1ConnectorRolloutGetRoute,
  postV1ConnectorRolloutListAllRoute,
  postV1ConnectorRolloutListByActorDefinitionIdRoute,
  postV1ConnectorRolloutListRoute,
  postV1ConnectorRolloutManualFinalizeRoute,
  postV1ConnectorRolloutManualPauseRoute,
  postV1ConnectorRolloutManualRolloutRoute,
  postV1ConnectorRolloutManualStartRoute,
  postV1ConnectorRolloutRolloutRoute,
  postV1ConnectorRolloutStartRoute,
  postV1ConnectorRolloutUpdateStateRoute,
  postV1DataplaneGroupCreateRoute,
  postV1DataplaneGroupDeleteRoute,
  postV1DataplaneGroupListRoute,
  postV1DataplaneGroupUpdateRoute,
  postV1DataplanesCreateRoute,
  postV1DataplanesDeleteRoute,
  postV1DataplanesHealthRoute,
  postV1DataplanesHeartbeatRoute,
  postV1DataplanesInitializeRoute,
  postV1DataplanesListRoute,
  postV1DataplanesSecretStoragesListRoute,
  postV1DataplanesTokenRoute,
  postV1DataplanesUpdateRoute,
  postV1DataWorkerAllocationAddCapacityRoute,
  postV1DataWorkerAllocationGetRoute,
  postV1DataWorkerAllocationListRoute,
  postV1DataWorkerAllocationReallocateRoute,
  postV1DataWorkerAllocationRemoveCapacityRoute,
  postV1DeclarativeSourceDefinitionsCreateManifestRoute,
  postV1DeclarativeSourceDefinitionsListManifestsRoute,
  postV1DeclarativeSourceDefinitionsUpdateActiveManifestRoute,
  postV1DeploymentMetadataRoute,
  postV1DestinationDefinitionsCreateCustomRoute,
  postV1DestinationDefinitionsDeleteRoute,
  postV1DestinationDefinitionsGetForScopeRoute,
  postV1DestinationDefinitionsGetForWorkspaceRoute,
  postV1DestinationDefinitionsGetRoute,
  postV1DestinationDefinitionsGrantDefinitionRoute,
  postV1DestinationDefinitionsListEnterpriseStubsForWorkspaceRoute,
  postV1DestinationDefinitionsListForWorkspaceRoute,
  postV1DestinationDefinitionsListLatestRoute,
  postV1DestinationDefinitionsListPrivateRoute,
  postV1DestinationDefinitionsListRoute,
  postV1DestinationDefinitionSpecificationsGetForDestinationRoute,
  postV1DestinationDefinitionSpecificationsGetRoute,
  postV1DestinationDefinitionsRevokeDefinitionRoute,
  postV1DestinationDefinitionsUpdateRoute,
  postV1DestinationOauthsCompleteOauthRoute,
  postV1DestinationOauthsGetConsentUrlRoute,
  postV1DestinationOauthsOauthParamsCreateRoute,
  postV1DestinationsCheckConnectionForUpdateRoute,
  postV1DestinationsCheckConnectionRoute,
  postV1DestinationsCreateRoute,
  postV1DestinationsDeleteRoute,
  postV1DestinationsDestinationIdEnablementRoute,
  postV1DestinationsDestinationIdExecuteRoute,
  postV1DestinationsDestinationIdSearchRoute,
  postV1DestinationsDiscoverSchemaRoute,
  postV1DestinationsGetCatalogForConnectionRoute,
  postV1DestinationsGetRoute,
  postV1DestinationsListPaginatedRoute,
  postV1DestinationsListRoute,
  postV1DestinationsPartialUpdateRoute,
  postV1DestinationsSearchRoute,
  postV1DestinationsUpdateRoute,
  postV1DestinationsUpgradeVersionRoute,
  postV1DestinationsWriteDiscoverCatalogResultRoute,
  postV1DiagnosticToolGenerateReportRoute,
  postV1DomainVerificationsCheckRoute,
  postV1DomainVerificationsCreateRoute,
  postV1DomainVerificationsDeleteRoute,
  postV1DomainVerificationsListPendingRoute,
  postV1DomainVerificationsListRoute,
  postV1DomainVerificationsResetRoute,
  postV1EntitlementsGetEntitlementsRoute,
  postV1EntitlementsIsEntitledRoute,
  postV1EntitlementsListPlansRoute,
  postV1EntitlementsUpdatePlanRoute,
  postV1GroupPermissionsCreateRoute,
  postV1GroupPermissionsDeleteRoute,
  postV1GroupPermissionsListRoute,
  postV1GroupsAddMemberRoute,
  postV1GroupsCreateRoute,
  postV1GroupsDeleteRoute,
  postV1GroupsGetRoute,
  postV1GroupsListMembersRoute,
  postV1GroupsListRoute,
  postV1GroupsRemoveMemberRoute,
  postV1GroupsUpdateRoute,
  postV1InstanceConfigurationSetupRoute,
  postV1JobsCancelQueuedJobRoute,
  postV1JobsCancelRoute,
  postV1JobsCheckDataWorkerCapacityRoute,
  postV1JobsCreateRoute,
  postV1JobsDeleteStreamResetRecordsRoute,
  postV1JobsDidPreviousJobSucceedRoute,
  postV1JobsEvaluateOutlierRoute,
  postV1JobsExplainRoute,
  postV1JobsFailNonTerminalRoute,
  postV1JobsFinalizeRoute,
  postV1JobsGetDebugInfoRoute,
  postV1JobsGetInputRoute,
  postV1JobsGetLastReplicationJobRoute,
  postV1JobsGetLastReplicationJobWithCancelRoute,
  postV1JobsGetLightRoute,
  postV1JobsGetRoute,
  postV1JobsGetWebhookConfigRoute,
  postV1JobsGetWithoutLogsRoute,
  postV1JobsJobFailureRoute,
  postV1JobsJobSuccessWithAttemptNumberRoute,
  postV1JobsListForWorkspacesRoute,
  postV1JobsListRoute,
  postV1JobsPersistCancellationRoute,
  postV1JobsReportJobStartRoute,
  postV1JobsRetryStatesCreateOrUpdateRoute,
  postV1JobsRetryStatesGetRoute,
  postV1JobsSetJobQueuedRoute,
  postV1NotificationsTryRoute,
  postV1NotificationsTryWebhookRoute,
  postV1OperationsCheckRoute,
  postV1OperationsCreateRoute,
  postV1OperationsDeleteRoute,
  postV1OperationsGetRoute,
  postV1OperationsListRoute,
  postV1OperationsUpdateRoute,
  postV1OrganizationPaymentConfigOrganizationIdEndGracePeriodRoute,
  postV1OrganizationPaymentConfigRoute,
  postV1OrganizationsAgenticStatusRoute,
  postV1OrganizationsCreateRoute,
  postV1OrganizationsDeleteRoute,
  postV1OrganizationsGetDataWorkerUsageRoute,
  postV1OrganizationsGetOrganizationInfoRoute,
  postV1OrganizationsGetRoute,
  postV1OrganizationsGetSemanticSearchEnablementRoute,
  postV1OrganizationsGetUsageRoute,
  postV1OrganizationsListByUserIdRoute,
  postV1OrganizationsListSummariesRoute,
  postV1OrganizationsOnboardingSendMobileHandoffEmailRoute,
  postV1OrganizationsOnboardingUpdateRoute,
  postV1OrganizationsUpdateRoute,
  postV1OrganizationsUpdateSemanticSearchEnablementRoute,
  postV1PermissionsCheckMultipleWorkspacesRoute,
  postV1PermissionsCheckRoute,
  postV1PermissionsCreateRoute,
  postV1PermissionsDeleteRoute,
  postV1PermissionsDeleteUserFromWorkspaceRoute,
  postV1PermissionsGetRoute,
  postV1PermissionsListByUserRoute,
  postV1PermissionsUpdateRoute,
  postV1PrivateLinkCreateRoute,
  postV1PrivateLinkDeleteRoute,
  postV1PrivateLinkGetRoute,
  postV1PrivateLinkListByStatusRoute,
  postV1PrivateLinkListRoute,
  postV1PrivateLinkUpdateRoute,
  postV1SchedulerDestinationsCheckConnectionRoute,
  postV1SchedulerSourcesCheckConnectionRoute,
  postV1SchedulerSourcesDiscoverSchemaRoute,
  postV1ScimConfigDisableRoute,
  postV1ScimConfigEnableRoute,
  postV1ScimConfigGetRoute,
  postV1ScimConfigRotateTokenRoute,
  postV1ScopedConfigurationCreateRoute,
  postV1ScopedConfigurationDeleteRoute,
  postV1ScopedConfigurationGetContextRoute,
  postV1ScopedConfigurationGetRoute,
  postV1ScopedConfigurationListRoute,
  postV1ScopedConfigurationUpdateRoute,
  postV1SecretsPersistenceConfigCreateOrUpdateRoute,
  postV1SecretsPersistenceConfigGetRoute,
  postV1SecretStorageCreateRoute,
  postV1SecretStorageDeleteRoute,
  postV1SecretStorageGetRoute,
  postV1SecretStorageListRoute,
  postV1SecretStorageMigrateRoute,
  postV1ServiceAccountsTokenRoute,
  postV1SignalRoute,
  postV1SourceDefinitionsCreateCustomRoute,
  postV1SourceDefinitionsDeleteRoute,
  postV1SourceDefinitionsGetForScopeRoute,
  postV1SourceDefinitionsGetForWorkspaceRoute,
  postV1SourceDefinitionsGetRoute,
  postV1SourceDefinitionsGrantDefinitionRoute,
  postV1SourceDefinitionsListEnterpriseSourceStubsRoute,
  postV1SourceDefinitionsListEnterpriseStubsForWorkspaceRoute,
  postV1SourceDefinitionsListForWorkspaceRoute,
  postV1SourceDefinitionsListLatestRoute,
  postV1SourceDefinitionsListPrivateRoute,
  postV1SourceDefinitionsListRoute,
  postV1SourceDefinitionSpecificationsGetForSourceRoute,
  postV1SourceDefinitionSpecificationsGetRoute,
  postV1SourceDefinitionsRevokeDefinitionRoute,
  postV1SourceDefinitionsUpdateRoute,
  postV1SourceOauthsCompleteOauthRoute,
  postV1SourceOauthsGetConsentUrlRoute,
  postV1SourceOauthsGetEmbeddedConsentUrlRoute,
  postV1SourceOauthsGetScopesRoute,
  postV1SourceOauthsOauthParamsCreateRoute,
  postV1SourceOauthsRevokeRoute,
  postV1SourcesApplySchemaChangesRoute,
  postV1SourcesCheckConnectionForUpdateRoute,
  postV1SourcesCheckConnectionRoute,
  postV1SourcesCreateRoute,
  postV1SourcesDeleteRoute,
  postV1SourcesDiscoverSchemaRoute,
  postV1SourcesGetRoute,
  postV1SourcesGetWithMetadataRoute,
  postV1SourcesListPaginatedRoute,
  postV1SourcesListRoute,
  postV1SourcesMostRecentSourceActorCatalogRoute,
  postV1SourcesPartialUpdateRoute,
  postV1SourcesSearchRoute,
  postV1SourcesSourceIdEnablementRoute,
  postV1SourcesSourceIdExecuteRoute,
  postV1SourcesSourceIdSearchRoute,
  postV1SourcesUpdateRoute,
  postV1SourcesUpgradeVersionRoute,
  postV1SourcesWriteDiscoverCatalogResultRoute,
  postV1SsoConfigActivateRoute,
  postV1SsoConfigCreateRoute,
  postV1SsoConfigDeleteRoute,
  postV1SsoConfigGetRoute,
  postV1SsoConfigUpdateCredentialsRoute,
  postV1SsoConfigValidateTokenRoute,
  postV1StateCreateOrUpdateRoute,
  postV1StateCreateOrUpdateSafeRoute,
  postV1StateGetRoute,
  postV1StreamStatusesCreateRoute,
  postV1StreamStatusesLatestPerRunStateRoute,
  postV1StreamStatusesListRoute,
  postV1StreamStatusesUpdateRoute,
  postV1TagsCreateRoute,
  postV1TagsDeleteRoute,
  postV1TagsListRoute,
  postV1TagsUpdateRoute,
  postV1UserInvitationsAcceptRoute,
  postV1UserInvitationsCancelRoute,
  postV1UserInvitationsCreateRoute,
  postV1UserInvitationsDeclineRoute,
  postV1UserInvitationsListPendingRoute,
  postV1UsersDeleteRoute,
  postV1UsersGetByAuthIdRoute,
  postV1UsersGetByEmailRoute,
  postV1UsersGetOrCreateByAuthIdRoute,
  postV1UsersGetRoute,
  postV1UsersListAccessInfoByWorkspaceIdRoute,
  postV1UsersListByOrganizationIdRoute,
  postV1UsersListInstanceAdminRoute,
  postV1UsersUpdateRoute,
  postV1WebBackendCheckUpdatesRoute,
  postV1WebBackendConnectionsCreateRoute,
  postV1WebBackendConnectionsGetRoute,
  postV1WebBackendConnectionsListRoute,
  postV1WebBackendConnectionsStatusCountsRoute,
  postV1WebBackendConnectionsUpdateRoute,
  postV1WebBackendDescribeCronExpressionRoute,
  postV1WebBackendMappersValidateRoute,
  postV1WebBackendStateGetTypeRoute,
  postV1WebBackendWorkspaceStateRoute,
  postV1WorkloadOutputWriteRoute,
  postV1WorkspacesCreateIfNotExistRoute,
  postV1WorkspacesCreateRoute,
  postV1WorkspacesDeleteRoute,
  postV1WorkspacesGetAvailableDbtJobsRoute,
  postV1WorkspacesGetByConnectionIdRoute,
  postV1WorkspacesGetByConnectionIdWithTombstoneRoute,
  postV1WorkspacesGetBySlugRoute,
  postV1WorkspacesGetDataWorkerAvailabilityRoute,
  postV1WorkspacesGetOrganizationInfoRoute,
  postV1WorkspacesGetRoute,
  postV1WorkspacesGetUsageRoute,
  postV1WorkspacesListByOrganizationIdRoute,
  postV1WorkspacesListByUserIdRoute,
  postV1WorkspacesListPaginatedRoute,
  postV1WorkspacesTagFeedbackStatusAsDoneRoute,
  postV1WorkspacesUpdateNameRoute,
  postV1WorkspacesUpdateOrganizationRoute,
  postV1WorkspacesUpdateRoute,
  putV1ConnectionsConnectionIdEnablementRoute,
  putV1DestinationsDestinationIdEnablementRoute,
  putV1SourcesSourceIdEnablementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1SourcesSourceIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsDestinationIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesSourceIdSearchStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DestinationsDestinationIdSearchStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesSourceIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesSourceIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SourcesSourceIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SourcesSourceIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsDestinationIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DestinationsDestinationIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DestinationsDestinationIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DestinationsDestinationIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsConnectionIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectionsConnectionIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConnectionsConnectionIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectionsConnectionIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsResolveEnablementForSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsConnectionIdBackfillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesCreateIfNotExistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesListPaginatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesListByOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesListByUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetAvailableDbtJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetBySlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetByConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetByConnectionIdWithTombstoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetOrganizationInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesUpdateOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetDataWorkerAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesTagFeedbackStatusAsDoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NotificationsTryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NotificationsTryWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListEnterpriseSourceStubsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListEnterpriseStubsForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsCreateCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsGetForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsGetForScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsGrantDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsRevokeDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionVersionsGetForSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionSpecificationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionSpecificationsGetForSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionVersionsResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionVersionsGetDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionsFinishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionsResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeclarativeSourceDefinitionsCreateManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeclarativeSourceDefinitionsUpdateActiveManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeclarativeSourceDefinitionsListManifestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsGetBaseImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsGetWithManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsGetForDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsUpdateTestingValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsReadStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsFullResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsContributeCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsContributeGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderAssistProcessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderAssistWarmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorDocumentationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesPartialUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesUpgradeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesListPaginatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesGetWithMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesMostRecentSourceActorCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspacesWorkspaceIdSkillsDocsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsDestinationIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesSourceIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesCheckConnectionForUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesDiscoverSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesApplySchemaChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesWriteDiscoverCatalogResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsWriteDiscoverCatalogResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListEnterpriseStubsForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsCreateCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsGetForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsGetForScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsGrantDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsRevokeDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActorDefinitionVersionsGetForDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionSpecificationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionSpecificationsGetForDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsPartialUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsUpgradeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsListPaginatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsDiscoverSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsGetCatalogForConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCheckConnectionForUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsUpdateWithReasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsListPaginatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsSyncProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsHistoryUptimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsHistoryDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsStreamHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsEventsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsEventsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsEventsListMinimalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsEventsBackfillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsEventsListForJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsLastJobPerStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsGetForJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsListByActorDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsApplySchemaChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsPostprocessDiscoveredCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsGetContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StateGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StateCreateOrUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StateCreateOrUpdateSafeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsAutoDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsClearStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsResetStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SchedulerSourcesCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SchedulerSourcesDiscoverSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SchedulerDestinationsCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsOauthParamsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsGetConsentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsGetEmbeddedConsentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsGetOauthConsentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsCompleteOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsCompleteOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsGetScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationOauthsGetConsentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationOauthsCompleteOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationOauthsOauthParamsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendCheckUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendMappersValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsStatusCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendDescribeCronExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendStateGetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendWorkspaceStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebBackendConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsJobSuccessWithAttemptNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsListForWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetLastReplicationJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetLastReplicationJobWithCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetWithoutLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetLightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetDebugInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsFailNonTerminalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsReportJobStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsSetJobQueuedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsCancelQueuedJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsCheckDataWorkerCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetWebhookConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsJobFailureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsDeleteStreamResetRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsEvaluateOutlierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersGetByAuthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersGetByEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersGetOrCreateByAuthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersListAccessInfoByWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersListByOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersListInstanceAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsCheckMultipleWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecretsPersistenceConfigGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecretsPersistenceConfigCreateOrUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecretStorageCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecretStorageListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecretStorageDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecretStorageGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecretStorageMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsDeleteUserFromWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsListByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptCreateNewAttemptNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptSaveStreamMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptSaveStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptSaveSyncConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptFailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptGetCombinedStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptGetForJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StreamStatusesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StreamStatusesLatestPerRunStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StreamStatusesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StreamStatusesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstanceConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstanceConfigurationSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsRetryStatesCreateOrUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsRetryStatesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsDidPreviousJobSucceedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsPersistCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingCustomerPortalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingBackfillUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingHandleWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingListInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingSubscriptionInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingTrialStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingCancelSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingUnscheduleCancelSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingUnschedulePlanChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingDisableDelinquentWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingNotificationSettingsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingNotificationSettingsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationPaymentConfigOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationPaymentConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationPaymentConfigOrganizationIdEndGracePeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsGetSemanticSearchEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsUpdateSemanticSearchEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOnboardingUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOnboardingSendMobileHandoffEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsAgenticStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsListByUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsGetUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsGetDataWorkerUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsListSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsGetOrganizationInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsListMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsAddMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsRemoveMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupPermissionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupPermissionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupPermissionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainVerificationsListPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainVerificationsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeploymentMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApplicationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApplicationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApplicationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApplicationsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScopedConfigurationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScopedConfigurationGetContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScopedConfigurationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScopedConfigurationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScopedConfigurationUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScopedConfigurationDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutListByActorDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutGetActorSyncInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutRolloutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutUpdateStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutManualStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutManualRolloutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutManualFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutManualPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EntitlementsIsEntitledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EntitlementsGetEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EntitlementsListPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EntitlementsUpdatePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserInvitationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserInvitationsByCodeInviteCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserInvitationsListPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserInvitationsAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserInvitationsDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserInvitationsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DiagnosticToolGenerateReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SignalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CatalogsDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRunCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRunDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRunConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRunReplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRunSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsOutputCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsOutputConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsOutputDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsOutputReplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsOutputSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkloadOutputWriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplaneGroupCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplaneGroupUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplaneGroupDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplaneGroupListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataWorkerAllocationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataWorkerAllocationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataWorkerAllocationReallocateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataWorkerAllocationAddCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataWorkerAllocationRemoveCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesSecretStoragesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SsoConfigGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SsoConfigCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SsoConfigDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SsoConfigUpdateCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SsoConfigActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SsoConfigValidateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScimConfigGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScimConfigEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScimConfigRotateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScimConfigDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuditLogsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServiceAccountsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainVerificationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainVerificationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainVerificationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainVerificationsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AirbyteReleasesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLinkCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLinkListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLinkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLinkGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLinkUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLinkListByStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdToolCallsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
