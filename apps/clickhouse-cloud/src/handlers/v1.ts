import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute,
  deleteV1OrganizationsOrganizationIdInvitationsInvitationIdRoute,
  deleteV1OrganizationsOrganizationIdKeysKeyIdRoute,
  deleteV1OrganizationsOrganizationIdMembersUserIdRoute,
  deleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute,
  deleteV1OrganizationsOrganizationIdPostgresPostgresIdRoute,
  deleteV1OrganizationsOrganizationIdRolesRoleIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowRoute,
  deleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute,
  deleteV1OrganizationsOrganizationIdUdfsFunctionNameRoute,
  deleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionRoute,
  getV1OrganizationsOrganizationIdActiveBalancesRoute,
  getV1OrganizationsOrganizationIdActivitiesActivityIdRoute,
  getV1OrganizationsOrganizationIdActivitiesRoute,
  getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessRoute,
  getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigRoute,
  getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressRoute,
  getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute,
  getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsRoute,
  getV1OrganizationsOrganizationIdCreditBalancesRoute,
  getV1OrganizationsOrganizationIdInferenceUsageCostRoute,
  getV1OrganizationsOrganizationIdInvitationsInvitationIdRoute,
  getV1OrganizationsOrganizationIdInvitationsRoute,
  getV1OrganizationsOrganizationIdKeysKeyIdRoute,
  getV1OrganizationsOrganizationIdKeysRoute,
  getV1OrganizationsOrganizationIdMembersRoute,
  getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsRoute,
  getV1OrganizationsOrganizationIdMembersUserIdRoute,
  getV1OrganizationsOrganizationIdNotificationsRoute,
  getV1OrganizationsOrganizationIdNotificationTypesRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdLogsRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsRoute,
  getV1OrganizationsOrganizationIdPostgresPrometheusRoute,
  getV1OrganizationsOrganizationIdPostgresRoute,
  getV1OrganizationsOrganizationIdPreviewsRoute,
  getV1OrganizationsOrganizationIdPrivateEndpointConfigRoute,
  getV1OrganizationsOrganizationIdPrometheusDiscoveryRoute,
  getV1OrganizationsOrganizationIdPrometheusRoute,
  getV1OrganizationsOrganizationIdQuotasQuotaCodeRoute,
  getV1OrganizationsOrganizationIdQuotasRoute,
  getV1OrganizationsOrganizationIdRolesRoleIdRoute,
  getV1OrganizationsOrganizationIdRolesRoute,
  getV1OrganizationsOrganizationIdRoute,
  getV1OrganizationsOrganizationIdServiceProfilesRoute,
  getV1OrganizationsOrganizationIdServicesRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdBackupsRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdPrometheusRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowRoute,
  getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsRoute,
  getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute,
  getV1OrganizationsOrganizationIdUdfsFunctionNameRoute,
  getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsRoute,
  getV1OrganizationsOrganizationIdUdfsRoute,
  getV1OrganizationsOrganizationIdUsageCostRoute,
  getV1OrganizationsRoute,
  getV1WhoamiRoute,
  patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessRoute,
  patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute,
  patchV1OrganizationsOrganizationIdKeysKeyIdRoute,
  patchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsRoute,
  patchV1OrganizationsOrganizationIdMembersUserIdRoute,
  patchV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute,
  patchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordRoute,
  patchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute,
  patchV1OrganizationsOrganizationIdPostgresPostgresIdRoute,
  patchV1OrganizationsOrganizationIdPostgresPostgresIdStateRoute,
  patchV1OrganizationsOrganizationIdPreviewsPreviewIdRoute,
  patchV1OrganizationsOrganizationIdRolesRoleIdRoute,
  patchV1OrganizationsOrganizationIdRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdPasswordRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdReplicaScalingRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdScalingRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdStateRoute,
  postV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenRoute,
  postV1OrganizationsOrganizationIdByocInfrastructureRoute,
  postV1OrganizationsOrganizationIdByocInfrastructureValidateRoute,
  postV1OrganizationsOrganizationIdInvitationsRoute,
  postV1OrganizationsOrganizationIdKeysRoute,
  postV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute,
  postV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute,
  postV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaRoute,
  postV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceRoute,
  postV1OrganizationsOrganizationIdPostgresRoute,
  postV1OrganizationsOrganizationIdRolesRoute,
  postV1OrganizationsOrganizationIdServicesRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickpipesRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidateRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidateRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointRoute,
  postV1OrganizationsOrganizationIdUdfsFunctionNameVersionsRoute,
  postV1OrganizationsOrganizationIdUdfsRoute,
  postV1OrganizationsOrganizationIdUdfUploadsUrlRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowRoute,
  putV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute,
} from '../routes'

export const getV1WhoamiRouteHandler: RouteHandler<typeof getV1WhoamiRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsRouteHandler: RouteHandler<typeof getV1OrganizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPrometheusRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPrometheusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPrometheusDiscoveryRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPrometheusDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdRolesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdRolesRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdRolesRoleIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdRolesRoleIdRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdRolesRoleIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdQuotasRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdQuotasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdQuotasQuotaCodeRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdQuotasQuotaCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServiceProfilesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServiceProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPreviewsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPreviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdPreviewsPreviewIdRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdPreviewsPreviewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdStateRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdScalingRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdScalingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdReplicaScalingRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdReplicaScalingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdPasswordRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdPrometheusRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdPrometheusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdBackupsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdKeysRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdKeysRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdKeysKeyIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdKeysKeyIdRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdKeysKeyIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdMembersRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdMembersUserIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdMembersUserIdRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdMembersUserIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdInvitationsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdInvitationsRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdInvitationsInvitationIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdInvitationsInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdInvitationsInvitationIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdInvitationsInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdActivitiesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdActivitiesActivityIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdActivitiesActivityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdNotificationsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdNotificationTypesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdNotificationTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdUsageCostRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdUsageCostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdInferenceUsageCostRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdInferenceUsageCostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdActiveBalancesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdActiveBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdCreditBalancesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdCreditBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickpipesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdClickpipesRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdClickpipesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidateRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidateRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdPostgresRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdPostgresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresPrometheusRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresPrometheusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresPostgresIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresPostgresIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdPostgresPostgresIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdPostgresPostgresIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdPostgresPostgresIdRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdPostgresPostgresIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdPostgresPostgresIdStateRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdPostgresPostgresIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresPostgresIdConfigRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdPostgresPostgresIdConfigRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdPostgresPostgresIdConfigRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPostgresPostgresIdLogsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPostgresPostgresIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdPrivateEndpointConfigRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdPrivateEndpointConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdByocInfrastructureRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdByocInfrastructureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdByocInfrastructureValidateRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdByocInfrastructureValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdUdfUploadsUrlRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdUdfUploadsUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdUdfsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdUdfsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdUdfsRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdUdfsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdUdfsFunctionNameRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdUdfsFunctionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdUdfsFunctionNameRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdUdfsFunctionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdUdfsFunctionNameVersionsRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdUdfsFunctionNameVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
