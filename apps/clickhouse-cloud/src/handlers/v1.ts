import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1WhoamiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPrometheusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPrometheusDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdQuotasQuotaCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServiceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdPreviewsPreviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdScalingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdReplicaScalingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdPrometheusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdNotificationTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdUsageCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdInferenceUsageCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdActiveBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdCreditBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickpipesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdClickpipesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1OrganizationsOrganizationIdPostgresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPrometheusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdPostgresPostgresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdPostgresPostgresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdPostgresPostgresIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPrivateEndpointConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdByocInfrastructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdByocInfrastructureValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdUdfUploadsUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdUdfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdUdfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdUdfsFunctionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdUdfsFunctionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdUdfsFunctionNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
