import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApiAdminProjectsRouteHandler: RouteHandler<
  typeof getApiAdminProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsRouteHandler: RouteHandler<
  typeof postApiAdminProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsValidateRouteHandler: RouteHandler<
  typeof postApiAdminProjectsValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdSettingsRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsArchiveProjectIdRouteHandler: RouteHandler<
  typeof postApiAdminProjectsArchiveProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsReviveProjectIdRouteHandler: RouteHandler<
  typeof postApiAdminProjectsReviveProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdAccessRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdAccessRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdAccessRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsRolesRoleIdAccessRouteHandler: RouteHandler<
  typeof getApiAdminProjectsRolesRoleIdAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdUsersUserIdRolesRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdUsersUserIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdUsersUserIdRolesRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdUsersUserIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdGroupsGroupIdRolesRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdGroupsGroupIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdGroupsGroupIdRolesRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdGroupsGroupIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFeaturesFeatureNameChangeProjectRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFeaturesFeatureNameChangeProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminPermissionsRouteHandler: RouteHandler<
  typeof getApiAdminPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminMetricsRpsRouteHandler: RouteHandler<
  typeof getApiAdminMetricsRpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminMetricsTrafficRouteHandler: RouteHandler<
  typeof getApiAdminMetricsTrafficRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminMetricsConnectionRouteHandler: RouteHandler<
  typeof getApiAdminMetricsConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminMetricsRequestRouteHandler: RouteHandler<
  typeof getApiAdminMetricsRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminNotificationsRouteHandler: RouteHandler<
  typeof getApiAdminNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminNotificationsReadRouteHandler: RouteHandler<
  typeof postApiAdminNotificationsReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminInsightsLifecycleRouteHandler: RouteHandler<
  typeof getApiAdminInsightsLifecycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminInsightsRouteHandler: RouteHandler<
  typeof getApiAdminInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminEmailSubscriptionSubscriptionRouteHandler: RouteHandler<
  typeof putApiAdminEmailSubscriptionSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminEmailSubscriptionSubscriptionRouteHandler: RouteHandler<
  typeof deleteApiAdminEmailSubscriptionSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminLicensedUsersRouteHandler: RouteHandler<
  typeof getApiAdminLicensedUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiClientMetricsEdgeRouteHandler: RouteHandler<
  typeof postApiClientMetricsEdgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiClientEdgeLicensingHeartbeatRouteHandler: RouteHandler<
  typeof postApiClientEdgeLicensingHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminFeaturesValidateRouteHandler: RouteHandler<
  typeof postApiAdminFeaturesValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminFeaturesFeatureNameTagsRouteHandler: RouteHandler<
  typeof getApiAdminFeaturesFeatureNameTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminFeaturesFeatureNameTagsRouteHandler: RouteHandler<
  typeof postApiAdminFeaturesFeatureNameTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminFeaturesFeatureNameTagsRouteHandler: RouteHandler<
  typeof putApiAdminFeaturesFeatureNameTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminFeaturesFeatureNameTagsTypeValueRouteHandler: RouteHandler<
  typeof deleteApiAdminFeaturesFeatureNameTagsTypeValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminFeatureTypesRouteHandler: RouteHandler<
  typeof getApiAdminFeatureTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminFeatureTypesIdLifetimeRouteHandler: RouteHandler<
  typeof putApiAdminFeatureTypesIdLifetimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminArchiveFeatureNameRouteHandler: RouteHandler<
  typeof deleteApiAdminArchiveFeatureNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminArchiveReviveFeatureNameRouteHandler: RouteHandler<
  typeof postApiAdminArchiveReviveFeatureNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminStrategiesRouteHandler: RouteHandler<
  typeof getApiAdminStrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminStrategiesRouteHandler: RouteHandler<
  typeof postApiAdminStrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminStrategiesNameRouteHandler: RouteHandler<
  typeof getApiAdminStrategiesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminStrategiesNameRouteHandler: RouteHandler<
  typeof deleteApiAdminStrategiesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminStrategiesNameRouteHandler: RouteHandler<
  typeof putApiAdminStrategiesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminStrategiesStrategyNameDeprecateRouteHandler: RouteHandler<
  typeof postApiAdminStrategiesStrategyNameDeprecateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminStrategiesStrategyNameReactivateRouteHandler: RouteHandler<
  typeof postApiAdminStrategiesStrategyNameReactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminEventsRouteHandler: RouteHandler<typeof getApiAdminEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiAdminEventsFeatureNameRouteHandler: RouteHandler<
  typeof getApiAdminEventsFeatureNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminEventCreatorsRouteHandler: RouteHandler<
  typeof getApiAdminEventCreatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminPlaygroundRouteHandler: RouteHandler<
  typeof postApiAdminPlaygroundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminPlaygroundAdvancedRouteHandler: RouteHandler<
  typeof postApiAdminPlaygroundAdvancedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminPlaygroundFeaturesFeatureNameRouteHandler: RouteHandler<
  typeof postApiAdminPlaygroundFeaturesFeatureNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminMetricsUnknownFlagsRouteHandler: RouteHandler<
  typeof getApiAdminMetricsUnknownFlagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminMetricsApplicationsAppNameRouteHandler: RouteHandler<
  typeof postApiAdminMetricsApplicationsAppNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminMetricsApplicationsAppNameRouteHandler: RouteHandler<
  typeof deleteApiAdminMetricsApplicationsAppNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminMetricsApplicationsAppNameRouteHandler: RouteHandler<
  typeof getApiAdminMetricsApplicationsAppNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminMetricsApplicationsRouteHandler: RouteHandler<
  typeof getApiAdminMetricsApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminMetricsApplicationsAppNameOverviewRouteHandler: RouteHandler<
  typeof getApiAdminMetricsApplicationsAppNameOverviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentRouteHandler: RouteHandler<
  typeof getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminMetricsSdksOutdatedRouteHandler: RouteHandler<
  typeof getApiAdminMetricsSdksOutdatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminClientMetricsFeaturesNameRawRouteHandler: RouteHandler<
  typeof getApiAdminClientMetricsFeaturesNameRawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminClientMetricsFeaturesNameRouteHandler: RouteHandler<
  typeof getApiAdminClientMetricsFeaturesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminUserRouteHandler: RouteHandler<typeof getApiAdminUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminUserProfileRouteHandler: RouteHandler<
  typeof getApiAdminUserProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminUserChangePasswordRouteHandler: RouteHandler<
  typeof postApiAdminUserChangePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminUserRolesRouteHandler: RouteHandler<
  typeof getApiAdminUserRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminUserTokensRouteHandler: RouteHandler<
  typeof getApiAdminUserTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminUserTokensRouteHandler: RouteHandler<
  typeof postApiAdminUserTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminUserTokensIdRouteHandler: RouteHandler<
  typeof deleteApiAdminUserTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminUiConfigRouteHandler: RouteHandler<
  typeof getApiAdminUiConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminUiConfigCorsRouteHandler: RouteHandler<
  typeof postApiAdminUiConfigCorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminContextRouteHandler: RouteHandler<typeof getApiAdminContextRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiAdminContextRouteHandler: RouteHandler<
  typeof postApiAdminContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminContextContextFieldRouteHandler: RouteHandler<
  typeof getApiAdminContextContextFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminContextContextFieldRouteHandler: RouteHandler<
  typeof putApiAdminContextContextFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminContextContextFieldRouteHandler: RouteHandler<
  typeof deleteApiAdminContextContextFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminContextContextFieldStrategiesRouteHandler: RouteHandler<
  typeof getApiAdminContextContextFieldStrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminContextContextFieldLegalValuesRouteHandler: RouteHandler<
  typeof postApiAdminContextContextFieldLegalValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminContextContextFieldLegalValuesLegalValueRouteHandler: RouteHandler<
  typeof deleteApiAdminContextContextFieldLegalValuesLegalValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminContextValidateRouteHandler: RouteHandler<
  typeof postApiAdminContextValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminFeaturesBatchExportRouteHandler: RouteHandler<
  typeof postApiAdminFeaturesBatchExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminFeaturesBatchValidateRouteHandler: RouteHandler<
  typeof postApiAdminFeaturesBatchValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminFeaturesBatchImportRouteHandler: RouteHandler<
  typeof postApiAdminFeaturesBatchImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminTagsRouteHandler: RouteHandler<typeof getApiAdminTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminTagsRouteHandler: RouteHandler<typeof postApiAdminTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiAdminTagsTypeRouteHandler: RouteHandler<
  typeof getApiAdminTagsTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminTagsTypeValueRouteHandler: RouteHandler<
  typeof getApiAdminTagsTypeValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminTagsTypeValueRouteHandler: RouteHandler<
  typeof deleteApiAdminTagsTypeValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminTagsTypeValueRenameRouteHandler: RouteHandler<
  typeof postApiAdminTagsTypeValueRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminTagTypesRouteHandler: RouteHandler<
  typeof getApiAdminTagTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminTagTypesRouteHandler: RouteHandler<
  typeof postApiAdminTagTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminTagTypesValidateRouteHandler: RouteHandler<
  typeof postApiAdminTagTypesValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminTagTypesNameRouteHandler: RouteHandler<
  typeof getApiAdminTagTypesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminTagTypesNameRouteHandler: RouteHandler<
  typeof putApiAdminTagTypesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminTagTypesNameRouteHandler: RouteHandler<
  typeof deleteApiAdminTagTypesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminTagTypesNameValuesRouteHandler: RouteHandler<
  typeof getApiAdminTagTypesNameValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminAddonsRouteHandler: RouteHandler<typeof getApiAdminAddonsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiAdminAddonsRouteHandler: RouteHandler<typeof postApiAdminAddonsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiAdminAddonsIdRouteHandler: RouteHandler<
  typeof getApiAdminAddonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminAddonsIdRouteHandler: RouteHandler<
  typeof putApiAdminAddonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminAddonsIdRouteHandler: RouteHandler<
  typeof deleteApiAdminAddonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminAddonsIdEventsRouteHandler: RouteHandler<
  typeof getApiAdminAddonsIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminApiTokensRouteHandler: RouteHandler<
  typeof getApiAdminApiTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminApiTokensRouteHandler: RouteHandler<
  typeof postApiAdminApiTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminApiTokensNameRouteHandler: RouteHandler<
  typeof getApiAdminApiTokensNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminApiTokensTokenRouteHandler: RouteHandler<
  typeof putApiAdminApiTokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminApiTokensTokenRouteHandler: RouteHandler<
  typeof deleteApiAdminApiTokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminUserAdminInactiveRouteHandler: RouteHandler<
  typeof getApiAdminUserAdminInactiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminUserAdminInactiveDeleteRouteHandler: RouteHandler<
  typeof postApiAdminUserAdminInactiveDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminUserAdminInactiveDeleteRouteHandler: RouteHandler<
  typeof deleteApiAdminUserAdminInactiveDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminUserAdminValidatePasswordRouteHandler: RouteHandler<
  typeof postApiAdminUserAdminValidatePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminUserAdminIdChangePasswordRouteHandler: RouteHandler<
  typeof postApiAdminUserAdminIdChangePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminUserAdminResetPasswordRouteHandler: RouteHandler<
  typeof postApiAdminUserAdminResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminUserAdminRouteHandler: RouteHandler<
  typeof getApiAdminUserAdminRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminUserAdminRouteHandler: RouteHandler<
  typeof postApiAdminUserAdminRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminUserAdminSearchRouteHandler: RouteHandler<
  typeof getApiAdminUserAdminSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminUserAdminAccessRouteHandler: RouteHandler<
  typeof getApiAdminUserAdminAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminUserAdminAdminCountRouteHandler: RouteHandler<
  typeof getApiAdminUserAdminAdminCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminUserAdminIdRouteHandler: RouteHandler<
  typeof getApiAdminUserAdminIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminUserAdminIdRouteHandler: RouteHandler<
  typeof putApiAdminUserAdminIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminUserAdminIdRouteHandler: RouteHandler<
  typeof deleteApiAdminUserAdminIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminUserAdminScimUsersRouteHandler: RouteHandler<
  typeof deleteApiAdminUserAdminScimUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminFeedbackRouteHandler: RouteHandler<
  typeof postApiAdminFeedbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminFeedbackIdRouteHandler: RouteHandler<
  typeof putApiAdminFeedbackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdOverviewRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdOverviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdDoraRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdDoraRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdApplicationsRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdFlagCreatorsRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdFlagCreatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdSdksOutdatedRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdSdksOutdatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOffRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOnRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOnRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOffRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRouteHandler: RouteHandler<
  typeof patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrderRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdFeaturesRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFeaturesRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFeaturesFeatureNameCloneRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFeaturesFeatureNameCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdFeaturesFeatureNameRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdFeaturesFeatureNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdFeaturesFeatureNameRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdFeaturesFeatureNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiAdminProjectsProjectIdFeaturesFeatureNameRouteHandler: RouteHandler<
  typeof patchApiAdminProjectsProjectIdFeaturesFeatureNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdFeaturesFeatureNameRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdFeaturesFeatureNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdStaleRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdStaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdTagsRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFeaturesChildDependenciesRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFeaturesChildDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdFeaturesChildDependenciesRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdFeaturesChildDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdFeaturesChildDependenciesParentRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdFeaturesChildDependenciesParentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdFeaturesChildParentsRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdFeaturesChildParentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdFeaturesParentParentVariantsRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdFeaturesParentParentVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdDependenciesRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdEnvironmentsRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdEnvironmentsEnvironmentRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdEnvironmentsEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategyRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdHealthReportRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdHealthReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRouteHandler: RouteHandler<
  typeof patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatchRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdApiTokensRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdApiTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdApiTokensRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdApiTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdApiTokensTokenRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdApiTokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdDeleteRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdReviveRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdReviveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdArchiveValidateRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdArchiveValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdArchiveRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdInsightsRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdStatusRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleCompleteRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncompleteRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFeaturesFeatureNameLinkRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFeaturesFeatureNameLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdContextRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdContextRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdContextContextFieldRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdContextContextFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdContextContextFieldRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdContextContextFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdContextContextFieldRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdContextContextFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdContextContextFieldStrategiesRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdContextContextFieldStrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdContextContextFieldLegalValuesRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdContextContextFieldLegalValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValueRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdContextValidateRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdContextValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminProjectsProjectIdAddonsRouteHandler: RouteHandler<
  typeof getApiAdminProjectsProjectIdAddonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdAddonsRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdAddonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminProjectsProjectIdAddonsIdRouteHandler: RouteHandler<
  typeof putApiAdminProjectsProjectIdAddonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminLifecycleCountRouteHandler: RouteHandler<
  typeof getApiAdminLifecycleCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminPersonalDashboardRouteHandler: RouteHandler<
  typeof getApiAdminPersonalDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminPersonalDashboardProjectIdRouteHandler: RouteHandler<
  typeof getApiAdminPersonalDashboardProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminEnvironmentsRouteHandler: RouteHandler<
  typeof getApiAdminEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminEnvironmentsNameRouteHandler: RouteHandler<
  typeof getApiAdminEnvironmentsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminEnvironmentsProjectProjectIdRouteHandler: RouteHandler<
  typeof getApiAdminEnvironmentsProjectProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminEnvironmentsSortOrderRouteHandler: RouteHandler<
  typeof putApiAdminEnvironmentsSortOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminEnvironmentsNameOnRouteHandler: RouteHandler<
  typeof postApiAdminEnvironmentsNameOnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminEnvironmentsNameOffRouteHandler: RouteHandler<
  typeof postApiAdminEnvironmentsNameOffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminSplashIdRouteHandler: RouteHandler<
  typeof postApiAdminSplashIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminConstraintsValidateRouteHandler: RouteHandler<
  typeof postApiAdminConstraintsValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminInviteLinkTokensRouteHandler: RouteHandler<
  typeof getApiAdminInviteLinkTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminInviteLinkTokensRouteHandler: RouteHandler<
  typeof postApiAdminInviteLinkTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminInviteLinkTokensTokenRouteHandler: RouteHandler<
  typeof getApiAdminInviteLinkTokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminInviteLinkTokensTokenRouteHandler: RouteHandler<
  typeof putApiAdminInviteLinkTokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminInstanceAdminStatisticsCsvRouteHandler: RouteHandler<
  typeof getApiAdminInstanceAdminStatisticsCsvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminInstanceAdminStatisticsRouteHandler: RouteHandler<
  typeof getApiAdminInstanceAdminStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminProjectsProjectIdFavoritesRouteHandler: RouteHandler<
  typeof postApiAdminProjectsProjectIdFavoritesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminProjectsProjectIdFavoritesRouteHandler: RouteHandler<
  typeof deleteApiAdminProjectsProjectIdFavoritesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminSegmentsValidateRouteHandler: RouteHandler<
  typeof postApiAdminSegmentsValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminSegmentsStrategiesStrategyIdRouteHandler: RouteHandler<
  typeof getApiAdminSegmentsStrategiesStrategyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminSegmentsStrategiesRouteHandler: RouteHandler<
  typeof postApiAdminSegmentsStrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminSegmentsIdStrategiesRouteHandler: RouteHandler<
  typeof getApiAdminSegmentsIdStrategiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminSegmentsIdRouteHandler: RouteHandler<
  typeof deleteApiAdminSegmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminSegmentsIdRouteHandler: RouteHandler<
  typeof putApiAdminSegmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminSegmentsIdRouteHandler: RouteHandler<
  typeof getApiAdminSegmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminSegmentsRouteHandler: RouteHandler<
  typeof postApiAdminSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminSegmentsRouteHandler: RouteHandler<
  typeof getApiAdminSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminMaintenanceRouteHandler: RouteHandler<
  typeof postApiAdminMaintenanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminMaintenanceRouteHandler: RouteHandler<
  typeof getApiAdminMaintenanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminTelemetrySettingsRouteHandler: RouteHandler<
  typeof getApiAdminTelemetrySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminSearchFeaturesRouteHandler: RouteHandler<
  typeof getApiAdminSearchFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminSearchEventsRouteHandler: RouteHandler<
  typeof getApiAdminSearchEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminFlagCreatorsRouteHandler: RouteHandler<
  typeof getApiAdminFlagCreatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminRecordUiErrorRouteHandler: RouteHandler<
  typeof postApiAdminRecordUiErrorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiClientFeaturesFeatureNameRouteHandler: RouteHandler<
  typeof getApiClientFeaturesFeatureNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiClientFeaturesRouteHandler: RouteHandler<
  typeof getApiClientFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiClientMetricsRouteHandler: RouteHandler<
  typeof postApiClientMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiClientMetricsBulkRouteHandler: RouteHandler<
  typeof postApiClientMetricsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiClientRegisterRouteHandler: RouteHandler<
  typeof postApiClientRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFrontendRouteHandler: RouteHandler<typeof getApiFrontendRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFrontendRouteHandler: RouteHandler<typeof postApiFrontendRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFrontendClientMetricsRouteHandler: RouteHandler<
  typeof postApiFrontendClientMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFrontendClientRegisterRouteHandler: RouteHandler<
  typeof postApiFrontendClientRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
