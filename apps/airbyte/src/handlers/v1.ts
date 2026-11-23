import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const postV1SourcesSourceIdSearchRouteHandler: RouteHandler<
  typeof postV1SourcesSourceIdSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsDestinationIdSearchRouteHandler: RouteHandler<
  typeof postV1DestinationsDestinationIdSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourcesSourceIdSearchStatusRouteHandler: RouteHandler<
  typeof getV1SourcesSourceIdSearchStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DestinationsDestinationIdSearchStatusRouteHandler: RouteHandler<
  typeof getV1DestinationsDestinationIdSearchStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesSourceIdEnablementRouteHandler: RouteHandler<
  typeof postV1SourcesSourceIdEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourcesSourceIdEnablementRouteHandler: RouteHandler<
  typeof getV1SourcesSourceIdEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SourcesSourceIdEnablementRouteHandler: RouteHandler<
  typeof putV1SourcesSourceIdEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SourcesSourceIdEnablementRouteHandler: RouteHandler<
  typeof deleteV1SourcesSourceIdEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsDestinationIdEnablementRouteHandler: RouteHandler<
  typeof postV1DestinationsDestinationIdEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DestinationsDestinationIdEnablementRouteHandler: RouteHandler<
  typeof getV1DestinationsDestinationIdEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1DestinationsDestinationIdEnablementRouteHandler: RouteHandler<
  typeof putV1DestinationsDestinationIdEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DestinationsDestinationIdEnablementRouteHandler: RouteHandler<
  typeof deleteV1DestinationsDestinationIdEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsConnectionIdEnablementRouteHandler: RouteHandler<
  typeof postV1ConnectionsConnectionIdEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConnectionsConnectionIdEnablementRouteHandler: RouteHandler<
  typeof getV1ConnectionsConnectionIdEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConnectionsConnectionIdEnablementRouteHandler: RouteHandler<
  typeof putV1ConnectionsConnectionIdEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConnectionsConnectionIdEnablementRouteHandler: RouteHandler<
  typeof deleteV1ConnectionsConnectionIdEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsResolveEnablementForSyncRouteHandler: RouteHandler<
  typeof postV1ConnectionsResolveEnablementForSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsConnectionIdBackfillRouteHandler: RouteHandler<
  typeof postV1ConnectionsConnectionIdBackfillRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesCreateRouteHandler: RouteHandler<
  typeof postV1WorkspacesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesCreateIfNotExistRouteHandler: RouteHandler<
  typeof postV1WorkspacesCreateIfNotExistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesDeleteRouteHandler: RouteHandler<
  typeof postV1WorkspacesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesListPaginatedRouteHandler: RouteHandler<
  typeof postV1WorkspacesListPaginatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesListByOrganizationIdRouteHandler: RouteHandler<
  typeof postV1WorkspacesListByOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesListByUserIdRouteHandler: RouteHandler<
  typeof postV1WorkspacesListByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesGetAvailableDbtJobsRouteHandler: RouteHandler<
  typeof postV1WorkspacesGetAvailableDbtJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesGetRouteHandler: RouteHandler<
  typeof postV1WorkspacesGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesGetBySlugRouteHandler: RouteHandler<
  typeof postV1WorkspacesGetBySlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesGetByConnectionIdRouteHandler: RouteHandler<
  typeof postV1WorkspacesGetByConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesGetByConnectionIdWithTombstoneRouteHandler: RouteHandler<
  typeof postV1WorkspacesGetByConnectionIdWithTombstoneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesGetOrganizationInfoRouteHandler: RouteHandler<
  typeof postV1WorkspacesGetOrganizationInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesUpdateRouteHandler: RouteHandler<
  typeof postV1WorkspacesUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesUpdateNameRouteHandler: RouteHandler<
  typeof postV1WorkspacesUpdateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesUpdateOrganizationRouteHandler: RouteHandler<
  typeof postV1WorkspacesUpdateOrganizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesGetUsageRouteHandler: RouteHandler<
  typeof postV1WorkspacesGetUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesGetDataWorkerAvailabilityRouteHandler: RouteHandler<
  typeof postV1WorkspacesGetDataWorkerAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesTagFeedbackStatusAsDoneRouteHandler: RouteHandler<
  typeof postV1WorkspacesTagFeedbackStatusAsDoneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NotificationsTryRouteHandler: RouteHandler<
  typeof postV1NotificationsTryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NotificationsTryWebhookRouteHandler: RouteHandler<
  typeof postV1NotificationsTryWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsUpdateRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsListRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsListLatestRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsListLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsGetRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsDeleteRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsListPrivateRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsListPrivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsListForWorkspaceRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsListForWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsListEnterpriseSourceStubsRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsListEnterpriseSourceStubsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsListEnterpriseStubsForWorkspaceRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsListEnterpriseStubsForWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsCreateCustomRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsCreateCustomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsGetForWorkspaceRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsGetForWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsGetForScopeRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsGetForScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsGrantDefinitionRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsGrantDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionsRevokeDefinitionRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionsRevokeDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActorDefinitionVersionsGetForSourceRouteHandler: RouteHandler<
  typeof postV1ActorDefinitionVersionsGetForSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionSpecificationsGetRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionSpecificationsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceDefinitionSpecificationsGetForSourceRouteHandler: RouteHandler<
  typeof postV1SourceDefinitionSpecificationsGetForSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActorDefinitionVersionsResolveRouteHandler: RouteHandler<
  typeof postV1ActorDefinitionVersionsResolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActorDefinitionVersionsGetDefaultRouteHandler: RouteHandler<
  typeof postV1ActorDefinitionVersionsGetDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActorDefinitionsCreateRouteHandler: RouteHandler<
  typeof postV1ActorDefinitionsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActorDefinitionsUpdateRouteHandler: RouteHandler<
  typeof postV1ActorDefinitionsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActorDefinitionsFinishRouteHandler: RouteHandler<
  typeof postV1ActorDefinitionsFinishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActorDefinitionsResultRouteHandler: RouteHandler<
  typeof postV1ActorDefinitionsResultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DeclarativeSourceDefinitionsCreateManifestRouteHandler: RouteHandler<
  typeof postV1DeclarativeSourceDefinitionsCreateManifestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DeclarativeSourceDefinitionsUpdateActiveManifestRouteHandler: RouteHandler<
  typeof postV1DeclarativeSourceDefinitionsUpdateActiveManifestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DeclarativeSourceDefinitionsListManifestsRouteHandler: RouteHandler<
  typeof postV1DeclarativeSourceDefinitionsListManifestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsCreateRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsPublishRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsGetBaseImageRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsGetBaseImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsUpdateRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsDeleteRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsListRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsGetWithManifestRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsGetWithManifestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsGetForDefinitionIdRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsGetForDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsUpdateTestingValuesRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsUpdateTestingValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsReadStreamRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsReadStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsFullResolveRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsFullResolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsResolveRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsResolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsCapabilitiesRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsCapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsForkRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsForkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsContributeCheckRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsContributeCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsContributeGenerateRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsContributeGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderAssistProcessRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderAssistProcessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderAssistWarmRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderAssistWarmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorDocumentationGetRouteHandler: RouteHandler<
  typeof postV1ConnectorDocumentationGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesCreateRouteHandler: RouteHandler<
  typeof postV1SourcesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesUpdateRouteHandler: RouteHandler<
  typeof postV1SourcesUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesPartialUpdateRouteHandler: RouteHandler<
  typeof postV1SourcesPartialUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesUpgradeVersionRouteHandler: RouteHandler<
  typeof postV1SourcesUpgradeVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesListRouteHandler: RouteHandler<typeof postV1SourcesListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SourcesListPaginatedRouteHandler: RouteHandler<
  typeof postV1SourcesListPaginatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesGetRouteHandler: RouteHandler<typeof postV1SourcesGetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SourcesGetWithMetadataRouteHandler: RouteHandler<
  typeof postV1SourcesGetWithMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesMostRecentSourceActorCatalogRouteHandler: RouteHandler<
  typeof postV1SourcesMostRecentSourceActorCatalogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesSearchRouteHandler: RouteHandler<
  typeof postV1SourcesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesDeleteRouteHandler: RouteHandler<
  typeof postV1SourcesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkspacesWorkspaceIdSkillsDocsRouteHandler: RouteHandler<
  typeof getV1WorkspacesWorkspaceIdSkillsDocsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsDestinationIdExecuteRouteHandler: RouteHandler<
  typeof postV1DestinationsDestinationIdExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesSourceIdExecuteRouteHandler: RouteHandler<
  typeof postV1SourcesSourceIdExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesCheckConnectionRouteHandler: RouteHandler<
  typeof postV1SourcesCheckConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesCheckConnectionForUpdateRouteHandler: RouteHandler<
  typeof postV1SourcesCheckConnectionForUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesDiscoverSchemaRouteHandler: RouteHandler<
  typeof postV1SourcesDiscoverSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesApplySchemaChangesRouteHandler: RouteHandler<
  typeof postV1SourcesApplySchemaChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesWriteDiscoverCatalogResultRouteHandler: RouteHandler<
  typeof postV1SourcesWriteDiscoverCatalogResultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsWriteDiscoverCatalogResultRouteHandler: RouteHandler<
  typeof postV1DestinationsWriteDiscoverCatalogResultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsUpdateRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsListRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsListLatestRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsListLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsGetRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsDeleteRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsListPrivateRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsListPrivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsListForWorkspaceRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsListForWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsListEnterpriseStubsForWorkspaceRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsListEnterpriseStubsForWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsCreateCustomRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsCreateCustomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsGetForWorkspaceRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsGetForWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsGetForScopeRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsGetForScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsGrantDefinitionRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsGrantDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionsRevokeDefinitionRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionsRevokeDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ActorDefinitionVersionsGetForDestinationRouteHandler: RouteHandler<
  typeof postV1ActorDefinitionVersionsGetForDestinationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionSpecificationsGetRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionSpecificationsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationDefinitionSpecificationsGetForDestinationRouteHandler: RouteHandler<
  typeof postV1DestinationDefinitionSpecificationsGetForDestinationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsCreateRouteHandler: RouteHandler<
  typeof postV1DestinationsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsUpdateRouteHandler: RouteHandler<
  typeof postV1DestinationsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsPartialUpdateRouteHandler: RouteHandler<
  typeof postV1DestinationsPartialUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsUpgradeVersionRouteHandler: RouteHandler<
  typeof postV1DestinationsUpgradeVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsListRouteHandler: RouteHandler<
  typeof postV1DestinationsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsListPaginatedRouteHandler: RouteHandler<
  typeof postV1DestinationsListPaginatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsGetRouteHandler: RouteHandler<
  typeof postV1DestinationsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsDiscoverSchemaRouteHandler: RouteHandler<
  typeof postV1DestinationsDiscoverSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsGetCatalogForConnectionRouteHandler: RouteHandler<
  typeof postV1DestinationsGetCatalogForConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsSearchRouteHandler: RouteHandler<
  typeof postV1DestinationsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsCheckConnectionRouteHandler: RouteHandler<
  typeof postV1DestinationsCheckConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsCheckConnectionForUpdateRouteHandler: RouteHandler<
  typeof postV1DestinationsCheckConnectionForUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationsDeleteRouteHandler: RouteHandler<
  typeof postV1DestinationsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsCreateRouteHandler: RouteHandler<
  typeof postV1ConnectionsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsUpdateRouteHandler: RouteHandler<
  typeof postV1ConnectionsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsUpdateWithReasonRouteHandler: RouteHandler<
  typeof postV1ConnectionsUpdateWithReasonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsListRouteHandler: RouteHandler<
  typeof postV1ConnectionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsListPaginatedRouteHandler: RouteHandler<
  typeof postV1ConnectionsListPaginatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsListAllRouteHandler: RouteHandler<
  typeof postV1ConnectionsListAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsStatusRouteHandler: RouteHandler<
  typeof postV1ConnectionsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsSyncProgressRouteHandler: RouteHandler<
  typeof postV1ConnectionsSyncProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsHistoryUptimeRouteHandler: RouteHandler<
  typeof postV1ConnectionsHistoryUptimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsHistoryDataRouteHandler: RouteHandler<
  typeof postV1ConnectionsHistoryDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsStreamHistoryRouteHandler: RouteHandler<
  typeof postV1ConnectionsStreamHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsEventsGetRouteHandler: RouteHandler<
  typeof postV1ConnectionsEventsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsEventsListRouteHandler: RouteHandler<
  typeof postV1ConnectionsEventsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsEventsListMinimalRouteHandler: RouteHandler<
  typeof postV1ConnectionsEventsListMinimalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsEventsBackfillRouteHandler: RouteHandler<
  typeof postV1ConnectionsEventsBackfillRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsEventsListForJobRouteHandler: RouteHandler<
  typeof postV1ConnectionsEventsListForJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsLastJobPerStreamRouteHandler: RouteHandler<
  typeof postV1ConnectionsLastJobPerStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsGetRouteHandler: RouteHandler<
  typeof postV1ConnectionsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsGetForJobRouteHandler: RouteHandler<
  typeof postV1ConnectionsGetForJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsListByActorDefinitionRouteHandler: RouteHandler<
  typeof postV1ConnectionsListByActorDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsApplySchemaChangesRouteHandler: RouteHandler<
  typeof postV1ConnectionsApplySchemaChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsPostprocessDiscoveredCatalogRouteHandler: RouteHandler<
  typeof postV1ConnectionsPostprocessDiscoveredCatalogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsGetContextRouteHandler: RouteHandler<
  typeof postV1ConnectionsGetContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StateGetRouteHandler: RouteHandler<typeof postV1StateGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StateCreateOrUpdateRouteHandler: RouteHandler<
  typeof postV1StateCreateOrUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StateCreateOrUpdateSafeRouteHandler: RouteHandler<
  typeof postV1StateCreateOrUpdateSafeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsSearchRouteHandler: RouteHandler<
  typeof postV1ConnectionsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsDeleteRouteHandler: RouteHandler<
  typeof postV1ConnectionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsSyncRouteHandler: RouteHandler<
  typeof postV1ConnectionsSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsResetRouteHandler: RouteHandler<
  typeof postV1ConnectionsResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsClearRouteHandler: RouteHandler<
  typeof postV1ConnectionsClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsAutoDisableRouteHandler: RouteHandler<
  typeof postV1ConnectionsAutoDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsClearStreamRouteHandler: RouteHandler<
  typeof postV1ConnectionsClearStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsResetStreamRouteHandler: RouteHandler<
  typeof postV1ConnectionsResetStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectionsRefreshRouteHandler: RouteHandler<
  typeof postV1ConnectionsRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OperationsCheckRouteHandler: RouteHandler<
  typeof postV1OperationsCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OperationsCreateRouteHandler: RouteHandler<
  typeof postV1OperationsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OperationsUpdateRouteHandler: RouteHandler<
  typeof postV1OperationsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OperationsListRouteHandler: RouteHandler<
  typeof postV1OperationsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OperationsGetRouteHandler: RouteHandler<
  typeof postV1OperationsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OperationsDeleteRouteHandler: RouteHandler<
  typeof postV1OperationsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SchedulerSourcesCheckConnectionRouteHandler: RouteHandler<
  typeof postV1SchedulerSourcesCheckConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SchedulerSourcesDiscoverSchemaRouteHandler: RouteHandler<
  typeof postV1SchedulerSourcesDiscoverSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SchedulerDestinationsCheckConnectionRouteHandler: RouteHandler<
  typeof postV1SchedulerDestinationsCheckConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceOauthsOauthParamsCreateRouteHandler: RouteHandler<
  typeof postV1SourceOauthsOauthParamsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceOauthsGetConsentUrlRouteHandler: RouteHandler<
  typeof postV1SourceOauthsGetConsentUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceOauthsGetEmbeddedConsentUrlRouteHandler: RouteHandler<
  typeof postV1SourceOauthsGetEmbeddedConsentUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsGetOauthConsentUrlRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsGetOauthConsentUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceOauthsCompleteOauthRouteHandler: RouteHandler<
  typeof postV1SourceOauthsCompleteOauthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorBuilderProjectsCompleteOauthRouteHandler: RouteHandler<
  typeof postV1ConnectorBuilderProjectsCompleteOauthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceOauthsRevokeRouteHandler: RouteHandler<
  typeof postV1SourceOauthsRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourceOauthsGetScopesRouteHandler: RouteHandler<
  typeof postV1SourceOauthsGetScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationOauthsGetConsentUrlRouteHandler: RouteHandler<
  typeof postV1DestinationOauthsGetConsentUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationOauthsCompleteOauthRouteHandler: RouteHandler<
  typeof postV1DestinationOauthsCompleteOauthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DestinationOauthsOauthParamsCreateRouteHandler: RouteHandler<
  typeof postV1DestinationOauthsOauthParamsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebBackendCheckUpdatesRouteHandler: RouteHandler<
  typeof postV1WebBackendCheckUpdatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebBackendMappersValidateRouteHandler: RouteHandler<
  typeof postV1WebBackendMappersValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebBackendConnectionsListRouteHandler: RouteHandler<
  typeof postV1WebBackendConnectionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebBackendConnectionsStatusCountsRouteHandler: RouteHandler<
  typeof postV1WebBackendConnectionsStatusCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebBackendConnectionsGetRouteHandler: RouteHandler<
  typeof postV1WebBackendConnectionsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebBackendConnectionsCreateRouteHandler: RouteHandler<
  typeof postV1WebBackendConnectionsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebBackendConnectionsUpdateRouteHandler: RouteHandler<
  typeof postV1WebBackendConnectionsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebBackendDescribeCronExpressionRouteHandler: RouteHandler<
  typeof postV1WebBackendDescribeCronExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebBackendStateGetTypeRouteHandler: RouteHandler<
  typeof postV1WebBackendStateGetTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebBackendWorkspaceStateRouteHandler: RouteHandler<
  typeof postV1WebBackendWorkspaceStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WebBackendConfigRouteHandler: RouteHandler<
  typeof getV1WebBackendConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsCreateRouteHandler: RouteHandler<typeof postV1JobsCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1JobsJobSuccessWithAttemptNumberRouteHandler: RouteHandler<
  typeof postV1JobsJobSuccessWithAttemptNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsListRouteHandler: RouteHandler<typeof postV1JobsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsListForWorkspacesRouteHandler: RouteHandler<
  typeof postV1JobsListForWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsGetRouteHandler: RouteHandler<typeof postV1JobsGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsGetLastReplicationJobRouteHandler: RouteHandler<
  typeof postV1JobsGetLastReplicationJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsGetLastReplicationJobWithCancelRouteHandler: RouteHandler<
  typeof postV1JobsGetLastReplicationJobWithCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsGetWithoutLogsRouteHandler: RouteHandler<
  typeof postV1JobsGetWithoutLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsGetLightRouteHandler: RouteHandler<typeof postV1JobsGetLightRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1JobsCancelRouteHandler: RouteHandler<typeof postV1JobsCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1JobsGetDebugInfoRouteHandler: RouteHandler<
  typeof postV1JobsGetDebugInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsGetInputRouteHandler: RouteHandler<typeof postV1JobsGetInputRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1JobsFailNonTerminalRouteHandler: RouteHandler<
  typeof postV1JobsFailNonTerminalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsReportJobStartRouteHandler: RouteHandler<
  typeof postV1JobsReportJobStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsSetJobQueuedRouteHandler: RouteHandler<
  typeof postV1JobsSetJobQueuedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsCancelQueuedJobRouteHandler: RouteHandler<
  typeof postV1JobsCancelQueuedJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsCheckDataWorkerCapacityRouteHandler: RouteHandler<
  typeof postV1JobsCheckDataWorkerCapacityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsGetWebhookConfigRouteHandler: RouteHandler<
  typeof postV1JobsGetWebhookConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsJobFailureRouteHandler: RouteHandler<
  typeof postV1JobsJobFailureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsDeleteStreamResetRecordsRouteHandler: RouteHandler<
  typeof postV1JobsDeleteStreamResetRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsExplainRouteHandler: RouteHandler<typeof postV1JobsExplainRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1JobsEvaluateOutlierRouteHandler: RouteHandler<
  typeof postV1JobsEvaluateOutlierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsFinalizeRouteHandler: RouteHandler<typeof postV1JobsFinalizeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1UsersGetRouteHandler: RouteHandler<typeof postV1UsersGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersGetByAuthIdRouteHandler: RouteHandler<
  typeof postV1UsersGetByAuthIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersGetByEmailRouteHandler: RouteHandler<
  typeof postV1UsersGetByEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersGetOrCreateByAuthIdRouteHandler: RouteHandler<
  typeof postV1UsersGetOrCreateByAuthIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersUpdateRouteHandler: RouteHandler<typeof postV1UsersUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1UsersDeleteRouteHandler: RouteHandler<typeof postV1UsersDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1UsersListAccessInfoByWorkspaceIdRouteHandler: RouteHandler<
  typeof postV1UsersListAccessInfoByWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersListByOrganizationIdRouteHandler: RouteHandler<
  typeof postV1UsersListByOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersListInstanceAdminRouteHandler: RouteHandler<
  typeof postV1UsersListInstanceAdminRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PermissionsCreateRouteHandler: RouteHandler<
  typeof postV1PermissionsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PermissionsGetRouteHandler: RouteHandler<
  typeof postV1PermissionsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PermissionsCheckRouteHandler: RouteHandler<
  typeof postV1PermissionsCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PermissionsCheckMultipleWorkspacesRouteHandler: RouteHandler<
  typeof postV1PermissionsCheckMultipleWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PermissionsUpdateRouteHandler: RouteHandler<
  typeof postV1PermissionsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SecretsPersistenceConfigGetRouteHandler: RouteHandler<
  typeof postV1SecretsPersistenceConfigGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SecretsPersistenceConfigCreateOrUpdateRouteHandler: RouteHandler<
  typeof postV1SecretsPersistenceConfigCreateOrUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SecretStorageCreateRouteHandler: RouteHandler<
  typeof postV1SecretStorageCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SecretStorageListRouteHandler: RouteHandler<
  typeof postV1SecretStorageListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SecretStorageDeleteRouteHandler: RouteHandler<
  typeof postV1SecretStorageDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SecretStorageGetRouteHandler: RouteHandler<
  typeof postV1SecretStorageGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SecretStorageMigrateRouteHandler: RouteHandler<
  typeof postV1SecretStorageMigrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PermissionsDeleteRouteHandler: RouteHandler<
  typeof postV1PermissionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PermissionsDeleteUserFromWorkspaceRouteHandler: RouteHandler<
  typeof postV1PermissionsDeleteUserFromWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PermissionsListByUserRouteHandler: RouteHandler<
  typeof postV1PermissionsListByUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1HealthRouteHandler: RouteHandler<typeof getV1HealthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OpenapiRouteHandler: RouteHandler<typeof getV1OpenapiRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AttemptCreateNewAttemptNumberRouteHandler: RouteHandler<
  typeof postV1AttemptCreateNewAttemptNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AttemptSaveStreamMetadataRouteHandler: RouteHandler<
  typeof postV1AttemptSaveStreamMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AttemptSaveStatsRouteHandler: RouteHandler<
  typeof postV1AttemptSaveStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AttemptSaveSyncConfigRouteHandler: RouteHandler<
  typeof postV1AttemptSaveSyncConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AttemptFailRouteHandler: RouteHandler<typeof postV1AttemptFailRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AttemptGetCombinedStatsRouteHandler: RouteHandler<
  typeof postV1AttemptGetCombinedStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AttemptGetForJobRouteHandler: RouteHandler<
  typeof postV1AttemptGetForJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StreamStatusesListRouteHandler: RouteHandler<
  typeof postV1StreamStatusesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StreamStatusesLatestPerRunStateRouteHandler: RouteHandler<
  typeof postV1StreamStatusesLatestPerRunStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StreamStatusesCreateRouteHandler: RouteHandler<
  typeof postV1StreamStatusesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StreamStatusesUpdateRouteHandler: RouteHandler<
  typeof postV1StreamStatusesUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstanceConfigurationRouteHandler: RouteHandler<
  typeof getV1InstanceConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InstanceConfigurationSetupRouteHandler: RouteHandler<
  typeof postV1InstanceConfigurationSetupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsRetryStatesCreateOrUpdateRouteHandler: RouteHandler<
  typeof postV1JobsRetryStatesCreateOrUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsRetryStatesGetRouteHandler: RouteHandler<
  typeof postV1JobsRetryStatesGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsDidPreviousJobSucceedRouteHandler: RouteHandler<
  typeof postV1JobsDidPreviousJobSucceedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsPersistCancellationRouteHandler: RouteHandler<
  typeof postV1JobsPersistCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingCustomerPortalRouteHandler: RouteHandler<
  typeof postV1BillingCustomerPortalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingBackfillUsageRouteHandler: RouteHandler<
  typeof postV1BillingBackfillUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingHandleWebhookRouteHandler: RouteHandler<
  typeof postV1BillingHandleWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingListInvoicesRouteHandler: RouteHandler<
  typeof postV1BillingListInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingPaymentInformationRouteHandler: RouteHandler<
  typeof postV1BillingPaymentInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingSubscriptionInfoRouteHandler: RouteHandler<
  typeof postV1BillingSubscriptionInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingTrialStatusRouteHandler: RouteHandler<
  typeof postV1BillingTrialStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingCancelSubscriptionRouteHandler: RouteHandler<
  typeof postV1BillingCancelSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingUnscheduleCancelSubscriptionRouteHandler: RouteHandler<
  typeof postV1BillingUnscheduleCancelSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingUnschedulePlanChangeRouteHandler: RouteHandler<
  typeof postV1BillingUnschedulePlanChangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingDisableDelinquentWorkspacesRouteHandler: RouteHandler<
  typeof postV1BillingDisableDelinquentWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingNotificationSettingsGetRouteHandler: RouteHandler<
  typeof postV1BillingNotificationSettingsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingNotificationSettingsUpdateRouteHandler: RouteHandler<
  typeof postV1BillingNotificationSettingsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationPaymentConfigOrganizationIdRouteHandler: RouteHandler<
  typeof getV1OrganizationPaymentConfigOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationPaymentConfigRouteHandler: RouteHandler<
  typeof postV1OrganizationPaymentConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationPaymentConfigOrganizationIdEndGracePeriodRouteHandler: RouteHandler<
  typeof postV1OrganizationPaymentConfigOrganizationIdEndGracePeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsGetRouteHandler: RouteHandler<
  typeof postV1OrganizationsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsGetSemanticSearchEnablementRouteHandler: RouteHandler<
  typeof postV1OrganizationsGetSemanticSearchEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsUpdateSemanticSearchEnablementRouteHandler: RouteHandler<
  typeof postV1OrganizationsUpdateSemanticSearchEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOnboardingUpdateRouteHandler: RouteHandler<
  typeof postV1OrganizationsOnboardingUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOnboardingSendMobileHandoffEmailRouteHandler: RouteHandler<
  typeof postV1OrganizationsOnboardingSendMobileHandoffEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsCreateRouteHandler: RouteHandler<
  typeof postV1OrganizationsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsUpdateRouteHandler: RouteHandler<
  typeof postV1OrganizationsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsAgenticStatusRouteHandler: RouteHandler<
  typeof postV1OrganizationsAgenticStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsDeleteRouteHandler: RouteHandler<
  typeof postV1OrganizationsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsListByUserIdRouteHandler: RouteHandler<
  typeof postV1OrganizationsListByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsGetUsageRouteHandler: RouteHandler<
  typeof postV1OrganizationsGetUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsGetDataWorkerUsageRouteHandler: RouteHandler<
  typeof postV1OrganizationsGetDataWorkerUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsListSummariesRouteHandler: RouteHandler<
  typeof postV1OrganizationsListSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsGetOrganizationInfoRouteHandler: RouteHandler<
  typeof postV1OrganizationsGetOrganizationInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GroupsListRouteHandler: RouteHandler<typeof postV1GroupsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1GroupsGetRouteHandler: RouteHandler<typeof postV1GroupsGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GroupsCreateRouteHandler: RouteHandler<typeof postV1GroupsCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1GroupsUpdateRouteHandler: RouteHandler<typeof postV1GroupsUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1GroupsDeleteRouteHandler: RouteHandler<typeof postV1GroupsDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1GroupsListMembersRouteHandler: RouteHandler<
  typeof postV1GroupsListMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GroupsAddMemberRouteHandler: RouteHandler<
  typeof postV1GroupsAddMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GroupsRemoveMemberRouteHandler: RouteHandler<
  typeof postV1GroupsRemoveMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GroupPermissionsListRouteHandler: RouteHandler<
  typeof postV1GroupPermissionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GroupPermissionsCreateRouteHandler: RouteHandler<
  typeof postV1GroupPermissionsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GroupPermissionsDeleteRouteHandler: RouteHandler<
  typeof postV1GroupPermissionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DomainVerificationsListPendingRouteHandler: RouteHandler<
  typeof postV1DomainVerificationsListPendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DomainVerificationsCheckRouteHandler: RouteHandler<
  typeof postV1DomainVerificationsCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DeploymentMetadataRouteHandler: RouteHandler<
  typeof postV1DeploymentMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApplicationsListRouteHandler: RouteHandler<
  typeof postV1ApplicationsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApplicationsDeleteRouteHandler: RouteHandler<
  typeof postV1ApplicationsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApplicationsCreateRouteHandler: RouteHandler<
  typeof postV1ApplicationsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApplicationsTokenRouteHandler: RouteHandler<
  typeof postV1ApplicationsTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ScopedConfigurationListRouteHandler: RouteHandler<
  typeof postV1ScopedConfigurationListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ScopedConfigurationGetContextRouteHandler: RouteHandler<
  typeof postV1ScopedConfigurationGetContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ScopedConfigurationCreateRouteHandler: RouteHandler<
  typeof postV1ScopedConfigurationCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ScopedConfigurationGetRouteHandler: RouteHandler<
  typeof postV1ScopedConfigurationGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ScopedConfigurationUpdateRouteHandler: RouteHandler<
  typeof postV1ScopedConfigurationUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ScopedConfigurationDeleteRouteHandler: RouteHandler<
  typeof postV1ScopedConfigurationDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutListRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutListByActorDefinitionIdRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutListByActorDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutListAllRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutListAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutGetRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutGetActorSyncInfoRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutGetActorSyncInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutStartRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutRolloutRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutRolloutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutUpdateStateRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutUpdateStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutFinalizeRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutManualStartRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutManualStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutManualRolloutRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutManualRolloutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutManualFinalizeRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutManualFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorRolloutManualPauseRouteHandler: RouteHandler<
  typeof postV1ConnectorRolloutManualPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EntitlementsIsEntitledRouteHandler: RouteHandler<
  typeof postV1EntitlementsIsEntitledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EntitlementsGetEntitlementsRouteHandler: RouteHandler<
  typeof postV1EntitlementsGetEntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EntitlementsListPlansRouteHandler: RouteHandler<
  typeof postV1EntitlementsListPlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EntitlementsUpdatePlanRouteHandler: RouteHandler<
  typeof postV1EntitlementsUpdatePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UserInvitationsCreateRouteHandler: RouteHandler<
  typeof postV1UserInvitationsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UserInvitationsByCodeInviteCodeRouteHandler: RouteHandler<
  typeof getV1UserInvitationsByCodeInviteCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UserInvitationsListPendingRouteHandler: RouteHandler<
  typeof postV1UserInvitationsListPendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UserInvitationsAcceptRouteHandler: RouteHandler<
  typeof postV1UserInvitationsAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UserInvitationsDeclineRouteHandler: RouteHandler<
  typeof postV1UserInvitationsDeclineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UserInvitationsCancelRouteHandler: RouteHandler<
  typeof postV1UserInvitationsCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TagsListRouteHandler: RouteHandler<typeof postV1TagsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TagsUpdateRouteHandler: RouteHandler<typeof postV1TagsUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1TagsDeleteRouteHandler: RouteHandler<typeof postV1TagsDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1TagsCreateRouteHandler: RouteHandler<typeof postV1TagsCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1DiagnosticToolGenerateReportRouteHandler: RouteHandler<
  typeof postV1DiagnosticToolGenerateReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SignalRouteHandler: RouteHandler<typeof postV1SignalRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CatalogsDiffRouteHandler: RouteHandler<typeof postV1CatalogsDiffRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CommandsRunCheckRouteHandler: RouteHandler<
  typeof postV1CommandsRunCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CommandsRunDiscoverRouteHandler: RouteHandler<
  typeof postV1CommandsRunDiscoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CommandsRunConnectRouteHandler: RouteHandler<
  typeof postV1CommandsRunConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CommandsRunReplicateRouteHandler: RouteHandler<
  typeof postV1CommandsRunReplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CommandsRunSpecRouteHandler: RouteHandler<
  typeof postV1CommandsRunSpecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CommandsOutputCheckRouteHandler: RouteHandler<
  typeof postV1CommandsOutputCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CommandsOutputConnectRouteHandler: RouteHandler<
  typeof postV1CommandsOutputConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CommandsOutputDiscoverRouteHandler: RouteHandler<
  typeof postV1CommandsOutputDiscoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CommandsOutputReplicateRouteHandler: RouteHandler<
  typeof postV1CommandsOutputReplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CommandsOutputSpecRouteHandler: RouteHandler<
  typeof postV1CommandsOutputSpecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CommandsStatusRouteHandler: RouteHandler<
  typeof postV1CommandsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CommandsGetRouteHandler: RouteHandler<typeof postV1CommandsGetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CommandsCancelRouteHandler: RouteHandler<
  typeof postV1CommandsCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkloadOutputWriteRouteHandler: RouteHandler<
  typeof postV1WorkloadOutputWriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplaneGroupCreateRouteHandler: RouteHandler<
  typeof postV1DataplaneGroupCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplaneGroupUpdateRouteHandler: RouteHandler<
  typeof postV1DataplaneGroupUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplaneGroupDeleteRouteHandler: RouteHandler<
  typeof postV1DataplaneGroupDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplaneGroupListRouteHandler: RouteHandler<
  typeof postV1DataplaneGroupListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataWorkerAllocationListRouteHandler: RouteHandler<
  typeof postV1DataWorkerAllocationListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataWorkerAllocationGetRouteHandler: RouteHandler<
  typeof postV1DataWorkerAllocationGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataWorkerAllocationReallocateRouteHandler: RouteHandler<
  typeof postV1DataWorkerAllocationReallocateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataWorkerAllocationAddCapacityRouteHandler: RouteHandler<
  typeof postV1DataWorkerAllocationAddCapacityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataWorkerAllocationRemoveCapacityRouteHandler: RouteHandler<
  typeof postV1DataWorkerAllocationRemoveCapacityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplanesCreateRouteHandler: RouteHandler<
  typeof postV1DataplanesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplanesUpdateRouteHandler: RouteHandler<
  typeof postV1DataplanesUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplanesDeleteRouteHandler: RouteHandler<
  typeof postV1DataplanesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplanesListRouteHandler: RouteHandler<
  typeof postV1DataplanesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplanesTokenRouteHandler: RouteHandler<
  typeof postV1DataplanesTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplanesHeartbeatRouteHandler: RouteHandler<
  typeof postV1DataplanesHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplanesSecretStoragesListRouteHandler: RouteHandler<
  typeof postV1DataplanesSecretStoragesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplanesHealthRouteHandler: RouteHandler<
  typeof postV1DataplanesHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataplanesInitializeRouteHandler: RouteHandler<
  typeof postV1DataplanesInitializeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SsoConfigGetRouteHandler: RouteHandler<typeof postV1SsoConfigGetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SsoConfigCreateRouteHandler: RouteHandler<
  typeof postV1SsoConfigCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SsoConfigDeleteRouteHandler: RouteHandler<
  typeof postV1SsoConfigDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SsoConfigUpdateCredentialsRouteHandler: RouteHandler<
  typeof postV1SsoConfigUpdateCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SsoConfigActivateRouteHandler: RouteHandler<
  typeof postV1SsoConfigActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SsoConfigValidateTokenRouteHandler: RouteHandler<
  typeof postV1SsoConfigValidateTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ScimConfigGetRouteHandler: RouteHandler<
  typeof postV1ScimConfigGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ScimConfigEnableRouteHandler: RouteHandler<
  typeof postV1ScimConfigEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ScimConfigRotateTokenRouteHandler: RouteHandler<
  typeof postV1ScimConfigRotateTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ScimConfigDisableRouteHandler: RouteHandler<
  typeof postV1ScimConfigDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AuditLogsListRouteHandler: RouteHandler<
  typeof postV1AuditLogsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ServiceAccountsTokenRouteHandler: RouteHandler<
  typeof postV1ServiceAccountsTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DomainVerificationsCreateRouteHandler: RouteHandler<
  typeof postV1DomainVerificationsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DomainVerificationsListRouteHandler: RouteHandler<
  typeof postV1DomainVerificationsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DomainVerificationsDeleteRouteHandler: RouteHandler<
  typeof postV1DomainVerificationsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DomainVerificationsResetRouteHandler: RouteHandler<
  typeof postV1DomainVerificationsResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AirbyteReleasesCreateRouteHandler: RouteHandler<
  typeof postV1AirbyteReleasesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLinkCreateRouteHandler: RouteHandler<
  typeof postV1PrivateLinkCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLinkListRouteHandler: RouteHandler<
  typeof postV1PrivateLinkListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLinkDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateLinkDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLinkGetRouteHandler: RouteHandler<
  typeof postV1PrivateLinkGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLinkUpdateRouteHandler: RouteHandler<
  typeof postV1PrivateLinkUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLinkListByStatusRouteHandler: RouteHandler<
  typeof postV1PrivateLinkListByStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdToolCallsUsageRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdToolCallsUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
