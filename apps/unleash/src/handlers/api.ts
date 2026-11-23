import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminAddonsIdRoute,
  deleteApiAdminApiTokensTokenRoute,
  deleteApiAdminArchiveFeatureNameRoute,
  deleteApiAdminContextContextFieldLegalValuesLegalValueRoute,
  deleteApiAdminContextContextFieldRoute,
  deleteApiAdminEmailSubscriptionSubscriptionRoute,
  deleteApiAdminFeaturesFeatureNameTagsTypeValueRoute,
  deleteApiAdminMetricsApplicationsAppNameRoute,
  deleteApiAdminProjectsProjectIdApiTokensTokenRoute,
  deleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValueRoute,
  deleteApiAdminProjectsProjectIdContextContextFieldRoute,
  deleteApiAdminProjectsProjectIdEnvironmentsEnvironmentRoute,
  deleteApiAdminProjectsProjectIdFavoritesRoute,
  deleteApiAdminProjectsProjectIdFeaturesChildDependenciesParentRoute,
  deleteApiAdminProjectsProjectIdFeaturesChildDependenciesRoute,
  deleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
  deleteApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesRoute,
  deleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdRoute,
  deleteApiAdminProjectsProjectIdFeaturesFeatureNameRoute,
  deleteApiAdminProjectsProjectIdGroupsGroupIdRolesRoute,
  deleteApiAdminProjectsProjectIdRoute,
  deleteApiAdminProjectsProjectIdUsersUserIdRolesRoute,
  deleteApiAdminSegmentsIdRoute,
  deleteApiAdminStrategiesNameRoute,
  deleteApiAdminTagsTypeValueRoute,
  deleteApiAdminTagTypesNameRoute,
  deleteApiAdminUserAdminIdRoute,
  deleteApiAdminUserAdminInactiveDeleteRoute,
  deleteApiAdminUserAdminScimUsersRoute,
  deleteApiAdminUserTokensIdRoute,
  getApiAdminAddonsIdEventsRoute,
  getApiAdminAddonsIdRoute,
  getApiAdminAddonsRoute,
  getApiAdminApiTokensNameRoute,
  getApiAdminApiTokensRoute,
  getApiAdminClientMetricsFeaturesNameRawRoute,
  getApiAdminClientMetricsFeaturesNameRoute,
  getApiAdminContextContextFieldRoute,
  getApiAdminContextContextFieldStrategiesRoute,
  getApiAdminContextRoute,
  getApiAdminEnvironmentsNameRoute,
  getApiAdminEnvironmentsProjectProjectIdRoute,
  getApiAdminEnvironmentsRoute,
  getApiAdminEventCreatorsRoute,
  getApiAdminEventsFeatureNameRoute,
  getApiAdminEventsRoute,
  getApiAdminFeaturesFeatureNameTagsRoute,
  getApiAdminFeatureTypesRoute,
  getApiAdminFlagCreatorsRoute,
  getApiAdminInsightsLifecycleRoute,
  getApiAdminInsightsRoute,
  getApiAdminInstanceAdminStatisticsCsvRoute,
  getApiAdminInstanceAdminStatisticsRoute,
  getApiAdminInviteLinkTokensRoute,
  getApiAdminInviteLinkTokensTokenRoute,
  getApiAdminLicensedUsersRoute,
  getApiAdminLifecycleCountRoute,
  getApiAdminMaintenanceRoute,
  getApiAdminMetricsApplicationsAppNameOverviewRoute,
  getApiAdminMetricsApplicationsAppNameRoute,
  getApiAdminMetricsApplicationsRoute,
  getApiAdminMetricsConnectionRoute,
  getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentRoute,
  getApiAdminMetricsRequestRoute,
  getApiAdminMetricsRpsRoute,
  getApiAdminMetricsSdksOutdatedRoute,
  getApiAdminMetricsTrafficRoute,
  getApiAdminMetricsUnknownFlagsRoute,
  getApiAdminNotificationsRoute,
  getApiAdminPermissionsRoute,
  getApiAdminPersonalDashboardProjectIdRoute,
  getApiAdminPersonalDashboardRoute,
  getApiAdminProjectsProjectIdAccessRoute,
  getApiAdminProjectsProjectIdAddonsRoute,
  getApiAdminProjectsProjectIdApiTokensRoute,
  getApiAdminProjectsProjectIdApplicationsRoute,
  getApiAdminProjectsProjectIdContextContextFieldRoute,
  getApiAdminProjectsProjectIdContextContextFieldStrategiesRoute,
  getApiAdminProjectsProjectIdContextRoute,
  getApiAdminProjectsProjectIdDependenciesRoute,
  getApiAdminProjectsProjectIdDoraRoute,
  getApiAdminProjectsProjectIdFeaturesChildParentsRoute,
  getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentRoute,
  getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesRoute,
  getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
  getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute,
  getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleRoute,
  getApiAdminProjectsProjectIdFeaturesFeatureNameRoute,
  getApiAdminProjectsProjectIdFeaturesParentParentVariantsRoute,
  getApiAdminProjectsProjectIdFeaturesRoute,
  getApiAdminProjectsProjectIdFlagCreatorsRoute,
  getApiAdminProjectsProjectIdHealthReportRoute,
  getApiAdminProjectsProjectIdInsightsRoute,
  getApiAdminProjectsProjectIdOverviewRoute,
  getApiAdminProjectsProjectIdSdksOutdatedRoute,
  getApiAdminProjectsProjectIdStatusRoute,
  getApiAdminProjectsRolesRoleIdAccessRoute,
  getApiAdminProjectsRoute,
  getApiAdminSearchEventsRoute,
  getApiAdminSearchFeaturesRoute,
  getApiAdminSegmentsIdRoute,
  getApiAdminSegmentsIdStrategiesRoute,
  getApiAdminSegmentsRoute,
  getApiAdminSegmentsStrategiesStrategyIdRoute,
  getApiAdminStrategiesNameRoute,
  getApiAdminStrategiesRoute,
  getApiAdminTagsRoute,
  getApiAdminTagsTypeRoute,
  getApiAdminTagsTypeValueRoute,
  getApiAdminTagTypesNameRoute,
  getApiAdminTagTypesNameValuesRoute,
  getApiAdminTagTypesRoute,
  getApiAdminTelemetrySettingsRoute,
  getApiAdminUiConfigRoute,
  getApiAdminUserAdminAccessRoute,
  getApiAdminUserAdminAdminCountRoute,
  getApiAdminUserAdminIdRoute,
  getApiAdminUserAdminInactiveRoute,
  getApiAdminUserAdminRoute,
  getApiAdminUserAdminSearchRoute,
  getApiAdminUserProfileRoute,
  getApiAdminUserRolesRoute,
  getApiAdminUserRoute,
  getApiAdminUserTokensRoute,
  getApiClientFeaturesFeatureNameRoute,
  getApiClientFeaturesRoute,
  getApiFrontendRoute,
  patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
  patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute,
  patchApiAdminProjectsProjectIdFeaturesFeatureNameRoute,
  postApiAdminAddonsRoute,
  postApiAdminApiTokensRoute,
  postApiAdminArchiveReviveFeatureNameRoute,
  postApiAdminConstraintsValidateRoute,
  postApiAdminContextContextFieldLegalValuesRoute,
  postApiAdminContextRoute,
  postApiAdminContextValidateRoute,
  postApiAdminEnvironmentsNameOffRoute,
  postApiAdminEnvironmentsNameOnRoute,
  postApiAdminFeaturesBatchExportRoute,
  postApiAdminFeaturesBatchImportRoute,
  postApiAdminFeaturesBatchValidateRoute,
  postApiAdminFeaturesFeatureNameTagsRoute,
  postApiAdminFeaturesValidateRoute,
  postApiAdminFeedbackRoute,
  postApiAdminInviteLinkTokensRoute,
  postApiAdminMaintenanceRoute,
  postApiAdminMetricsApplicationsAppNameRoute,
  postApiAdminNotificationsReadRoute,
  postApiAdminPlaygroundAdvancedRoute,
  postApiAdminPlaygroundFeaturesFeatureNameRoute,
  postApiAdminPlaygroundRoute,
  postApiAdminProjectsArchiveProjectIdRoute,
  postApiAdminProjectsProjectIdAccessRoute,
  postApiAdminProjectsProjectIdAddonsRoute,
  postApiAdminProjectsProjectIdApiTokensRoute,
  postApiAdminProjectsProjectIdArchiveRoute,
  postApiAdminProjectsProjectIdArchiveValidateRoute,
  postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOffRoute,
  postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOnRoute,
  postApiAdminProjectsProjectIdContextContextFieldLegalValuesRoute,
  postApiAdminProjectsProjectIdContextRoute,
  postApiAdminProjectsProjectIdContextValidateRoute,
  postApiAdminProjectsProjectIdDeleteRoute,
  postApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategyRoute,
  postApiAdminProjectsProjectIdEnvironmentsRoute,
  postApiAdminProjectsProjectIdFavoritesRoute,
  postApiAdminProjectsProjectIdFeaturesChildDependenciesRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameChangeProjectRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameCloneRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOffRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOnRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrderRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleCompleteRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncompleteRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameLinkRoute,
  postApiAdminProjectsProjectIdFeaturesRoute,
  postApiAdminProjectsProjectIdReviveRoute,
  postApiAdminProjectsProjectIdStaleRoute,
  postApiAdminProjectsReviveProjectIdRoute,
  postApiAdminProjectsRoute,
  postApiAdminProjectsValidateRoute,
  postApiAdminRecordUiErrorRoute,
  postApiAdminSegmentsRoute,
  postApiAdminSegmentsStrategiesRoute,
  postApiAdminSegmentsValidateRoute,
  postApiAdminSplashIdRoute,
  postApiAdminStrategiesRoute,
  postApiAdminStrategiesStrategyNameDeprecateRoute,
  postApiAdminStrategiesStrategyNameReactivateRoute,
  postApiAdminTagsRoute,
  postApiAdminTagsTypeValueRenameRoute,
  postApiAdminTagTypesRoute,
  postApiAdminTagTypesValidateRoute,
  postApiAdminUiConfigCorsRoute,
  postApiAdminUserAdminIdChangePasswordRoute,
  postApiAdminUserAdminInactiveDeleteRoute,
  postApiAdminUserAdminResetPasswordRoute,
  postApiAdminUserAdminRoute,
  postApiAdminUserAdminValidatePasswordRoute,
  postApiAdminUserChangePasswordRoute,
  postApiAdminUserTokensRoute,
  postApiClientEdgeLicensingHeartbeatRoute,
  postApiClientMetricsBulkRoute,
  postApiClientMetricsEdgeRoute,
  postApiClientMetricsRoute,
  postApiClientRegisterRoute,
  postApiFrontendClientMetricsRoute,
  postApiFrontendClientRegisterRoute,
  postApiFrontendRoute,
  putApiAdminAddonsIdRoute,
  putApiAdminApiTokensTokenRoute,
  putApiAdminContextContextFieldRoute,
  putApiAdminEmailSubscriptionSubscriptionRoute,
  putApiAdminEnvironmentsSortOrderRoute,
  putApiAdminFeaturesFeatureNameTagsRoute,
  putApiAdminFeatureTypesIdLifetimeRoute,
  putApiAdminFeedbackIdRoute,
  putApiAdminInviteLinkTokensTokenRoute,
  putApiAdminProjectsProjectIdAccessRoute,
  putApiAdminProjectsProjectIdAddonsIdRoute,
  putApiAdminProjectsProjectIdContextContextFieldRoute,
  putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
  putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute,
  putApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdRoute,
  putApiAdminProjectsProjectIdFeaturesFeatureNameRoute,
  putApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatchRoute,
  putApiAdminProjectsProjectIdGroupsGroupIdRolesRoute,
  putApiAdminProjectsProjectIdRoute,
  putApiAdminProjectsProjectIdSettingsRoute,
  putApiAdminProjectsProjectIdTagsRoute,
  putApiAdminProjectsProjectIdUsersUserIdRolesRoute,
  putApiAdminSegmentsIdRoute,
  putApiAdminStrategiesNameRoute,
  putApiAdminTagTypesNameRoute,
  putApiAdminUserAdminIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiAdminProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsArchiveProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsReviveProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsRolesRoleIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdGroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdGroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameChangeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsRpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsTrafficRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminNotificationsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminInsightsLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminEmailSubscriptionSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminEmailSubscriptionSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminLicensedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientMetricsEdgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientEdgeLicensingHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminFeaturesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminFeaturesFeatureNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminFeaturesFeatureNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminFeaturesFeatureNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminFeaturesFeatureNameTagsTypeValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminFeatureTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminFeatureTypesIdLifetimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminArchiveFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminArchiveReviveFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminStrategiesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminStrategiesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminStrategiesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminStrategiesStrategyNameDeprecateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminStrategiesStrategyNameReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminEventsFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminEventCreatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminPlaygroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminPlaygroundAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminPlaygroundFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsUnknownFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminMetricsApplicationsAppNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminMetricsApplicationsAppNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsApplicationsAppNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsApplicationsAppNameOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsSdksOutdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminClientMetricsFeaturesNameRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminClientMetricsFeaturesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminUserTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUiConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUiConfigCorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminContextContextFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminContextContextFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminContextContextFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminContextContextFieldStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminContextContextFieldLegalValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminContextContextFieldLegalValuesLegalValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminContextValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminFeaturesBatchExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminFeaturesBatchValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminFeaturesBatchImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminTagsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminTagsTypeValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminTagsTypeValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminTagsTypeValueRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminTagTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminTagTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminTagTypesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminTagTypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminTagTypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminTagTypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminTagTypesNameValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminAddonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminAddonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminAddonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminAddonsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminApiTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminApiTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminApiTokensNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminApiTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminApiTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserAdminInactiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserAdminInactiveDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminUserAdminInactiveDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserAdminValidatePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserAdminIdChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserAdminResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserAdminSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserAdminAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserAdminAdminCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminUserAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminUserAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminUserAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminUserAdminScimUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminFeedbackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdDoraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdFlagCreatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdSdksOutdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAdminProjectsProjectIdFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAdminProjectsProjectIdFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdStaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesChildDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdFeaturesChildDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdFeaturesChildDependenciesParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdFeaturesChildParentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdFeaturesParentParentVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdEnvironmentsEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdHealthReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdApiTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdApiTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdApiTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdReviveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdArchiveValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdContextContextFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdContextContextFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdContextContextFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdContextContextFieldStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdContextContextFieldLegalValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdContextValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdAddonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminLifecycleCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminPersonalDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminPersonalDashboardProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminEnvironmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminEnvironmentsProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminEnvironmentsSortOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminEnvironmentsNameOnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminEnvironmentsNameOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminSplashIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminConstraintsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminInviteLinkTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminInviteLinkTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminInviteLinkTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminInviteLinkTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminInstanceAdminStatisticsCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminInstanceAdminStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminSegmentsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminSegmentsStrategiesStrategyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminSegmentsStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminSegmentsIdStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminTelemetrySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminSearchFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminSearchEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminFlagCreatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminRecordUiErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClientFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClientFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientMetricsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFrontendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFrontendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFrontendClientMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFrontendClientRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
