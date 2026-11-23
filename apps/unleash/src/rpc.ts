import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAdminProjects(
  args: InferRequestType<typeof client.api.admin.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects.$get(args, options))
}

export async function postApiAdminProjects(
  args: InferRequestType<typeof client.api.admin.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects.$post(args, options))
}

export async function postApiAdminProjectsValidate(
  args: InferRequestType<typeof client.api.admin.projects.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects.validate.$post(args, options))
}

export async function putApiAdminProjectsProjectId(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].$put(args, options))
}

export async function deleteApiAdminProjectsProjectId(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].$delete(args, options))
}

export async function putApiAdminProjectsProjectIdSettings(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].settings.$put(args, options))
}

export async function postApiAdminProjectsArchiveProjectId(
  args: InferRequestType<(typeof client.api.admin.projects.archive)[':projectId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects.archive[':projectId'].$post(args, options))
}

export async function postApiAdminProjectsReviveProjectId(
  args: InferRequestType<(typeof client.api.admin.projects.revive)[':projectId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects.revive[':projectId'].$post(args, options))
}

export async function getApiAdminProjectsProjectIdAccess(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].access.$get(args, options))
}

export async function putApiAdminProjectsProjectIdAccess(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].access.$put(args, options))
}

export async function postApiAdminProjectsProjectIdAccess(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].access.$post(args, options))
}

export async function getApiAdminProjectsRolesRoleIdAccess(
  args: InferRequestType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects.roles[':roleId'].access.$get(args, options))
}

export async function putApiAdminProjectsProjectIdUsersUserIdRoles(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].users[':userId'].roles.$put(args, options),
  )
}

export async function deleteApiAdminProjectsProjectIdUsersUserIdRoles(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].users[':userId'].roles.$delete(args, options),
  )
}

export async function putApiAdminProjectsProjectIdGroupsGroupIdRoles(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].groups[':groupId'].roles.$put(args, options),
  )
}

export async function deleteApiAdminProjectsProjectIdGroupsGroupIdRoles(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].groups[':groupId'].roles.$delete(args, options),
  )
}

export async function postApiAdminProjectsProjectIdFeaturesFeatureNameChangeProject(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['changeProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].changeProject.$post(
      args,
      options,
    ),
  )
}

export async function getApiAdminPermissions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.permissions.$get(undefined, options))
}

export async function getApiAdminMetricsRps(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.metrics.rps.$get(undefined, options))
}

export async function getApiAdminMetricsTraffic(
  args: InferRequestType<typeof client.api.admin.metrics.traffic.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.metrics.traffic.$get(args, options))
}

export async function getApiAdminMetricsConnection(
  args: InferRequestType<typeof client.api.admin.metrics.connection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.metrics.connection.$get(args, options))
}

export async function getApiAdminMetricsRequest(
  args: InferRequestType<typeof client.api.admin.metrics.request.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.metrics.request.$get(args, options))
}

export async function getApiAdminNotifications(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.notifications.$get(undefined, options))
}

export async function postApiAdminNotificationsRead(
  args: InferRequestType<typeof client.api.admin.notifications.read.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.notifications.read.$post(args, options))
}

export async function getApiAdminInsightsLifecycle(
  args: InferRequestType<typeof client.api.admin.insights.lifecycle.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.insights.lifecycle.$get(args, options))
}

export async function getApiAdminInsights(
  args: InferRequestType<typeof client.api.admin.insights.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.insights.$get(args, options))
}

export async function putApiAdminEmailSubscriptionSubscription(
  args: InferRequestType<(typeof client.api.admin)['email-subscription'][':subscription']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin['email-subscription'][':subscription'].$put(args, options),
  )
}

export async function deleteApiAdminEmailSubscriptionSubscription(
  args: InferRequestType<
    (typeof client.api.admin)['email-subscription'][':subscription']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin['email-subscription'][':subscription'].$delete(args, options),
  )
}

export async function getApiAdminLicensedUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['licensed-users'].$get(undefined, options))
}

export async function postApiClientMetricsEdge(
  args: InferRequestType<typeof client.api.client.metrics.edge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.client.metrics.edge.$post(args, options))
}

export async function postApiClientEdgeLicensingHeartbeat(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.client['edge-licensing'].heartbeat.$post(undefined, options),
  )
}

export async function getReady(options?: ClientRequestOptions) {
  return await parseResponse(client.ready.$get(undefined, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getInviteTokenValidate(
  args: InferRequestType<(typeof client.invite)[':token']['validate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invite[':token'].validate.$get(args, options))
}

export async function postInviteTokenSignup(
  args: InferRequestType<(typeof client.invite)[':token']['signup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invite[':token'].signup.$post(args, options))
}

export async function postAuthSimpleLogin(
  args: InferRequestType<typeof client.auth.simple.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.simple.login.$post(args, options))
}

export async function getAuthResetValidate(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.reset.validate.$get(undefined, options))
}

export async function postAuthResetPassword(
  args: InferRequestType<typeof client.auth.reset.password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.reset.password.$post(args, options))
}

export async function postAuthResetValidatePassword(
  args: InferRequestType<(typeof client.auth.reset)['validate-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.reset['validate-password'].$post(args, options))
}

export async function postAuthResetPasswordEmail(
  args: InferRequestType<(typeof client.auth.reset)['password-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.reset['password-email'].$post(args, options))
}

export async function postApiAdminFeaturesValidate(
  args: InferRequestType<typeof client.api.admin.features.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.features.validate.$post(args, options))
}

export async function getApiAdminFeaturesFeatureNameTags(
  args: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.features[':featureName'].tags.$get(args, options))
}

export async function putApiAdminFeaturesFeatureNameTags(
  args: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.features[':featureName'].tags.$put(args, options))
}

export async function postApiAdminFeaturesFeatureNameTags(
  args: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.features[':featureName'].tags.$post(args, options))
}

export async function deleteApiAdminFeaturesFeatureNameTagsTypeValue(
  args: InferRequestType<
    (typeof client.api.admin.features)[':featureName']['tags'][':type'][':value']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.features[':featureName'].tags[':type'][':value'].$delete(args, options),
  )
}

export async function getApiAdminFeatureTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['feature-types'].$get(undefined, options))
}

export async function putApiAdminFeatureTypesIdLifetime(
  args: InferRequestType<(typeof client.api.admin)['feature-types'][':id']['lifetime']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['feature-types'][':id'].lifetime.$put(args, options))
}

export async function deleteApiAdminArchiveFeatureName(
  args: InferRequestType<(typeof client.api.admin.archive)[':featureName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.archive[':featureName'].$delete(args, options))
}

export async function postApiAdminArchiveReviveFeatureName(
  args: InferRequestType<(typeof client.api.admin.archive.revive)[':featureName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.archive.revive[':featureName'].$post(args, options))
}

export async function getApiAdminStrategies(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.strategies.$get(undefined, options))
}

export async function postApiAdminStrategies(
  args: InferRequestType<typeof client.api.admin.strategies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.strategies.$post(args, options))
}

export async function getApiAdminStrategiesName(
  args: InferRequestType<(typeof client.api.admin.strategies)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.strategies[':name'].$get(args, options))
}

export async function putApiAdminStrategiesName(
  args: InferRequestType<(typeof client.api.admin.strategies)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.strategies[':name'].$put(args, options))
}

export async function deleteApiAdminStrategiesName(
  args: InferRequestType<(typeof client.api.admin.strategies)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.strategies[':name'].$delete(args, options))
}

export async function postApiAdminStrategiesStrategyNameDeprecate(
  args: InferRequestType<
    (typeof client.api.admin.strategies)[':strategyName']['deprecate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.strategies[':strategyName'].deprecate.$post(args, options),
  )
}

export async function postApiAdminStrategiesStrategyNameReactivate(
  args: InferRequestType<
    (typeof client.api.admin.strategies)[':strategyName']['reactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.strategies[':strategyName'].reactivate.$post(args, options),
  )
}

export async function getApiAdminEvents(
  args: InferRequestType<typeof client.api.admin.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.events.$get(args, options))
}

export async function getApiAdminEventsFeatureName(
  args: InferRequestType<(typeof client.api.admin.events)[':featureName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.events[':featureName'].$get(args, options))
}

export async function getApiAdminEventCreators(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['event-creators'].$get(undefined, options))
}

export async function postApiAdminPlayground(
  args: InferRequestType<typeof client.api.admin.playground.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.playground.$post(args, options))
}

export async function postApiAdminPlaygroundAdvanced(
  args: InferRequestType<typeof client.api.admin.playground.advanced.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.playground.advanced.$post(args, options))
}

export async function postApiAdminPlaygroundFeaturesFeatureName(
  args: InferRequestType<(typeof client.api.admin.playground.features)[':featureName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.playground.features[':featureName'].$post(args, options),
  )
}

export async function getApiAdminMetricsUnknownFlags(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.metrics['unknown-flags'].$get(undefined, options))
}

export async function getApiAdminMetricsApplicationsAppName(
  args: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.metrics.applications[':appName'].$get(args, options))
}

export async function postApiAdminMetricsApplicationsAppName(
  args: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.metrics.applications[':appName'].$post(args, options))
}

export async function deleteApiAdminMetricsApplicationsAppName(
  args: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.metrics.applications[':appName'].$delete(args, options),
  )
}

export async function getApiAdminMetricsApplications(
  args: InferRequestType<typeof client.api.admin.metrics.applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.metrics.applications.$get(args, options))
}

export async function getApiAdminMetricsApplicationsAppNameOverview(
  args: InferRequestType<
    (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.metrics.applications[':appName'].overview.$get(args, options),
  )
}

export async function getApiAdminMetricsInstancesAppNameEnvironmentEnvironment(
  args: InferRequestType<
    (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.metrics.instances[':appName'].environment[':environment'].$get(args, options),
  )
}

export async function getApiAdminMetricsSdksOutdated(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.metrics.sdks.outdated.$get(undefined, options))
}

export async function getApiAdminClientMetricsFeaturesNameRaw(
  args: InferRequestType<
    (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin['client-metrics'].features[':name'].raw.$get(args, options),
  )
}

export async function getApiAdminClientMetricsFeaturesName(
  args: InferRequestType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin['client-metrics'].features[':name'].$get(args, options),
  )
}

export async function getApiAdminUser(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.user.$get(undefined, options))
}

export async function getApiAdminUserProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.user.profile.$get(undefined, options))
}

export async function postApiAdminUserChangePassword(
  args: InferRequestType<(typeof client.api.admin.user)['change-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.user['change-password'].$post(args, options))
}

export async function getApiAdminUserRoles(
  args: InferRequestType<typeof client.api.admin.user.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.user.roles.$get(args, options))
}

export async function getApiAdminUserTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.user.tokens.$get(undefined, options))
}

export async function postApiAdminUserTokens(
  args: InferRequestType<typeof client.api.admin.user.tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.user.tokens.$post(args, options))
}

export async function deleteApiAdminUserTokensId(
  args: InferRequestType<(typeof client.api.admin.user.tokens)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.user.tokens[':id'].$delete(args, options))
}

export async function getApiAdminUiConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['ui-config'].$get(undefined, options))
}

export async function postApiAdminUiConfigCors(
  args: InferRequestType<(typeof client.api.admin)['ui-config']['cors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['ui-config'].cors.$post(args, options))
}

export async function getApiAdminContext(
  args: InferRequestType<typeof client.api.admin.context.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.context.$get(args, options))
}

export async function postApiAdminContext(
  args: InferRequestType<typeof client.api.admin.context.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.context.$post(args, options))
}

export async function getApiAdminContextContextField(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.context[':contextField'].$get(args, options))
}

export async function putApiAdminContextContextField(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.context[':contextField'].$put(args, options))
}

export async function deleteApiAdminContextContextField(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.context[':contextField'].$delete(args, options))
}

export async function getApiAdminContextContextFieldStrategies(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.context[':contextField'].strategies.$get(args, options),
  )
}

export async function postApiAdminContextContextFieldLegalValues(
  args: InferRequestType<
    (typeof client.api.admin.context)[':contextField']['legal-values']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.context[':contextField']['legal-values'].$post(args, options),
  )
}

export async function deleteApiAdminContextContextFieldLegalValuesLegalValue(
  args: InferRequestType<
    (typeof client.api.admin.context)[':contextField']['legal-values'][':legalValue']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.context[':contextField']['legal-values'][':legalValue'].$delete(args, options),
  )
}

export async function postApiAdminContextValidate(
  args: InferRequestType<typeof client.api.admin.context.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.context.validate.$post(args, options))
}

export async function postApiAdminFeaturesBatchExport(
  args: InferRequestType<(typeof client.api.admin)['features-batch']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['features-batch'].export.$post(args, options))
}

export async function postApiAdminFeaturesBatchValidate(
  args: InferRequestType<(typeof client.api.admin)['features-batch']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['features-batch'].validate.$post(args, options))
}

export async function postApiAdminFeaturesBatchImport(
  args: InferRequestType<(typeof client.api.admin)['features-batch']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['features-batch'].import.$post(args, options))
}

export async function getApiAdminTags(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.tags.$get(undefined, options))
}

export async function postApiAdminTags(
  args: InferRequestType<typeof client.api.admin.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.tags.$post(args, options))
}

export async function getApiAdminTagsType(
  args: InferRequestType<(typeof client.api.admin.tags)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.tags[':type'].$get(args, options))
}

export async function getApiAdminTagsTypeValue(
  args: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.tags[':type'][':value'].$get(args, options))
}

export async function deleteApiAdminTagsTypeValue(
  args: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.tags[':type'][':value'].$delete(args, options))
}

export async function postApiAdminTagsTypeValueRename(
  args: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['rename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.tags[':type'][':value'].rename.$post(args, options))
}

export async function getApiAdminTagTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['tag-types'].$get(undefined, options))
}

export async function postApiAdminTagTypes(
  args: InferRequestType<(typeof client.api.admin)['tag-types']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['tag-types'].$post(args, options))
}

export async function postApiAdminTagTypesValidate(
  args: InferRequestType<(typeof client.api.admin)['tag-types']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['tag-types'].validate.$post(args, options))
}

export async function getApiAdminTagTypesName(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['tag-types'][':name'].$get(args, options))
}

export async function putApiAdminTagTypesName(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['tag-types'][':name'].$put(args, options))
}

export async function deleteApiAdminTagTypesName(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['tag-types'][':name'].$delete(args, options))
}

export async function getApiAdminTagTypesNameValues(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['tag-types'][':name'].values.$get(args, options))
}

export async function getApiAdminAddons(
  args: InferRequestType<typeof client.api.admin.addons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.addons.$get(args, options))
}

export async function postApiAdminAddons(
  args: InferRequestType<typeof client.api.admin.addons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.addons.$post(args, options))
}

export async function getApiAdminAddonsId(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.addons[':id'].$get(args, options))
}

export async function putApiAdminAddonsId(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.addons[':id'].$put(args, options))
}

export async function deleteApiAdminAddonsId(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.addons[':id'].$delete(args, options))
}

export async function getApiAdminAddonsIdEvents(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.addons[':id'].events.$get(args, options))
}

export async function getApiAdminApiTokens(
  args: InferRequestType<(typeof client.api.admin)['api-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['api-tokens'].$get(args, options))
}

export async function postApiAdminApiTokens(
  args: InferRequestType<(typeof client.api.admin)['api-tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['api-tokens'].$post(args, options))
}

export async function getApiAdminApiTokensName(
  args: InferRequestType<(typeof client.api.admin)['api-tokens'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['api-tokens'][':name'].$get(args, options))
}

export async function putApiAdminApiTokensToken(
  args: InferRequestType<(typeof client.api.admin)['api-tokens'][':token']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['api-tokens'][':token'].$put(args, options))
}

export async function deleteApiAdminApiTokensToken(
  args: InferRequestType<(typeof client.api.admin)['api-tokens'][':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['api-tokens'][':token'].$delete(args, options))
}

export async function getApiAdminUserAdminInactive(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['user-admin'].inactive.$get(undefined, options))
}

export async function postApiAdminUserAdminInactiveDelete(
  args: InferRequestType<(typeof client.api.admin)['user-admin']['inactive']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['user-admin'].inactive.delete.$post(args, options))
}

export async function deleteApiAdminUserAdminInactiveDelete(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.admin['user-admin'].inactive.delete.$delete(undefined, options),
  )
}

export async function postApiAdminUserAdminValidatePassword(
  args: InferRequestType<(typeof client.api.admin)['user-admin']['validate-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin['user-admin']['validate-password'].$post(args, options),
  )
}

export async function postApiAdminUserAdminIdChangePassword(
  args: InferRequestType<
    (typeof client.api.admin)['user-admin'][':id']['change-password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin['user-admin'][':id']['change-password'].$post(args, options),
  )
}

export async function postApiAdminUserAdminResetPassword(
  args: InferRequestType<(typeof client.api.admin)['user-admin']['reset-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['user-admin']['reset-password'].$post(args, options))
}

export async function getApiAdminUserAdmin(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['user-admin'].$get(undefined, options))
}

export async function postApiAdminUserAdmin(
  args: InferRequestType<(typeof client.api.admin)['user-admin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['user-admin'].$post(args, options))
}

export async function getApiAdminUserAdminSearch(
  args: InferRequestType<(typeof client.api.admin)['user-admin']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['user-admin'].search.$get(args, options))
}

export async function getApiAdminUserAdminAccess(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['user-admin'].access.$get(undefined, options))
}

export async function getApiAdminUserAdminAdminCount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['user-admin']['admin-count'].$get(undefined, options))
}

export async function getApiAdminUserAdminId(
  args: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['user-admin'][':id'].$get(args, options))
}

export async function putApiAdminUserAdminId(
  args: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['user-admin'][':id'].$put(args, options))
}

export async function deleteApiAdminUserAdminId(
  args: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['user-admin'][':id'].$delete(args, options))
}

export async function deleteApiAdminUserAdminScimUsers(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.admin['user-admin']['scim-users'].$delete(undefined, options),
  )
}

export async function postApiAdminFeedback(
  args: InferRequestType<typeof client.api.admin.feedback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.feedback.$post(args, options))
}

export async function putApiAdminFeedbackId(
  args: InferRequestType<(typeof client.api.admin.feedback)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.feedback[':id'].$put(args, options))
}

export async function getApiAdminProjectsProjectIdOverview(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].overview.$get(args, options))
}

export async function getApiAdminProjectsProjectIdDora(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].dora.$get(args, options))
}

export async function getApiAdminProjectsProjectIdApplications(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].applications.$get(args, options),
  )
}

export async function getApiAdminProjectsProjectIdFlagCreators(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId']['flag-creators'].$get(args, options),
  )
}

export async function getApiAdminProjectsProjectIdSdksOutdated(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].sdks.outdated.$get(args, options),
  )
}

export async function getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironment(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].$get(args, options),
  )
}

export async function postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOff(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['off']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].off.$post(args, options),
  )
}

export async function postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOn(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['on']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].on.$post(args, options),
  )
}

export async function postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOn(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['on']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].bulk_features.environments[':environment'].on.$post(
      args,
      options,
    ),
  )
}

export async function postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOff(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['off']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].bulk_features.environments[':environment'].off.$post(
      args,
      options,
    ),
  )
}

export async function getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategies(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].strategies.$get(args, options),
  )
}

export async function postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategies(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].strategies.$post(args, options),
  )
}

export async function getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].strategies[':strategyId'].$get(args, options),
  )
}

export async function putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].strategies[':strategyId'].$put(args, options),
  )
}

export async function deleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].strategies[':strategyId'].$delete(args, options),
  )
}

export async function patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].strategies[':strategyId'].$patch(args, options),
  )
}

export async function postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrder(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['set-sort-order']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].strategies['set-sort-order'].$post(args, options),
  )
}

export async function getApiAdminProjectsProjectIdFeatures(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].features.$get(args, options))
}

export async function postApiAdminProjectsProjectIdFeatures(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].features.$post(args, options))
}

export async function postApiAdminProjectsProjectIdFeaturesFeatureNameClone(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].clone.$post(args, options),
  )
}

export async function getApiAdminProjectsProjectIdFeaturesFeatureName(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].$get(args, options),
  )
}

export async function putApiAdminProjectsProjectIdFeaturesFeatureName(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].$put(args, options),
  )
}

export async function deleteApiAdminProjectsProjectIdFeaturesFeatureName(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].$delete(args, options),
  )
}

export async function patchApiAdminProjectsProjectIdFeaturesFeatureName(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].$patch(args, options),
  )
}

export async function postApiAdminProjectsProjectIdStale(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['stale']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].stale.$post(args, options))
}

export async function putApiAdminProjectsProjectIdTags(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].tags.$put(args, options))
}

export async function postApiAdminProjectsProjectIdFeaturesChildDependencies(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':child'].dependencies.$post(args, options),
  )
}

export async function deleteApiAdminProjectsProjectIdFeaturesChildDependencies(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':child'].dependencies.$delete(args, options),
  )
}

export async function deleteApiAdminProjectsProjectIdFeaturesChildDependenciesParent(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies'][':parent']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':child'].dependencies[':parent'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiAdminProjectsProjectIdFeaturesChildParents(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':child'].parents.$get(args, options),
  )
}

export async function getApiAdminProjectsProjectIdFeaturesParentParentVariants(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':parent']['parent-variants'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAdminProjectsProjectIdDependencies(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].dependencies.$get(args, options),
  )
}

export async function postApiAdminProjectsProjectIdEnvironments(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].environments.$post(args, options),
  )
}

export async function deleteApiAdminProjectsProjectIdEnvironmentsEnvironment(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].environments[':environment'].$delete(args, options),
  )
}

export async function postApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategy(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['default-strategy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].environments[':environment']['default-strategy'].$post(
      args,
      options,
    ),
  )
}

export async function getApiAdminProjectsProjectIdHealthReport(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId']['health-report'].$get(args, options),
  )
}

export async function getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariants(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].variants.$get(args, options),
  )
}

export async function putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariants(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].variants.$put(args, options),
  )
}

export async function patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariants(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].environments[
      ':environment'
    ].variants.$patch(args, options),
  )
}

export async function putApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatch(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['variants-batch']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName']['variants-batch'].$put(
      args,
      options,
    ),
  )
}

export async function getApiAdminProjectsProjectIdApiTokens(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId']['api-tokens'].$get(args, options),
  )
}

export async function postApiAdminProjectsProjectIdApiTokens(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId']['api-tokens'].$post(args, options),
  )
}

export async function deleteApiAdminProjectsProjectIdApiTokensToken(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['api-tokens'][':token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId']['api-tokens'][':token'].$delete(args, options),
  )
}

export async function postApiAdminProjectsProjectIdDelete(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].delete.$post(args, options))
}

export async function postApiAdminProjectsProjectIdRevive(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['revive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].revive.$post(args, options))
}

export async function postApiAdminProjectsProjectIdArchiveValidate(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['archive']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].archive.validate.$post(args, options),
  )
}

export async function postApiAdminProjectsProjectIdArchive(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].archive.$post(args, options))
}

export async function getApiAdminProjectsProjectIdInsights(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].insights.$get(args, options))
}

export async function getApiAdminProjectsProjectIdStatus(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].status.$get(args, options))
}

export async function getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycle(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].lifecycle.$get(args, options),
  )
}

export async function postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleComplete(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].lifecycle.complete.$post(
      args,
      options,
    ),
  )
}

export async function postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncomplete(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['uncomplete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].lifecycle.uncomplete.$post(
      args,
      options,
    ),
  )
}

export async function postApiAdminProjectsProjectIdFeaturesFeatureNameLink(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].link.$post(args, options),
  )
}

export async function putApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkId(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].link[':linkId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkId(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].link[':linkId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiAdminProjectsProjectIdContext(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].context.$get(args, options))
}

export async function postApiAdminProjectsProjectIdContext(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].context.$post(args, options))
}

export async function getApiAdminProjectsProjectIdContextContextField(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].context[':contextField'].$get(args, options),
  )
}

export async function putApiAdminProjectsProjectIdContextContextField(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].context[':contextField'].$put(args, options),
  )
}

export async function deleteApiAdminProjectsProjectIdContextContextField(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].context[':contextField'].$delete(args, options),
  )
}

export async function getApiAdminProjectsProjectIdContextContextFieldStrategies(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].context[':contextField'].strategies.$get(args, options),
  )
}

export async function postApiAdminProjectsProjectIdContextContextFieldLegalValues(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].context[':contextField']['legal-values'].$post(
      args,
      options,
    ),
  )
}

export async function deleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValue(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values'][':legalValue']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].context[':contextField']['legal-values'][
      ':legalValue'
    ].$delete(args, options),
  )
}

export async function postApiAdminProjectsProjectIdContextValidate(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].context.validate.$post(args, options),
  )
}

export async function getApiAdminProjectsProjectIdAddons(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].addons.$get(args, options))
}

export async function postApiAdminProjectsProjectIdAddons(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].addons.$post(args, options))
}

export async function putApiAdminProjectsProjectIdAddonsId(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].addons[':id'].$put(args, options),
  )
}

export async function getApiAdminLifecycleCount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.lifecycle.count.$get(undefined, options))
}

export async function getApiAdminPersonalDashboard(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['personal-dashboard'].$get(undefined, options))
}

export async function getApiAdminPersonalDashboardProjectId(
  args: InferRequestType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin['personal-dashboard'][':projectId'].$get(args, options),
  )
}

export async function getApiAdminEnvironments(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.environments.$get(undefined, options))
}

export async function getApiAdminEnvironmentsName(
  args: InferRequestType<(typeof client.api.admin.environments)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.environments[':name'].$get(args, options))
}

export async function getApiAdminEnvironmentsProjectProjectId(
  args: InferRequestType<(typeof client.api.admin.environments.project)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.environments.project[':projectId'].$get(args, options),
  )
}

export async function putApiAdminEnvironmentsSortOrder(
  args: InferRequestType<(typeof client.api.admin.environments)['sort-order']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.environments['sort-order'].$put(args, options))
}

export async function postApiAdminEnvironmentsNameOn(
  args: InferRequestType<(typeof client.api.admin.environments)[':name']['on']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.environments[':name'].on.$post(args, options))
}

export async function postApiAdminEnvironmentsNameOff(
  args: InferRequestType<(typeof client.api.admin.environments)[':name']['off']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.environments[':name'].off.$post(args, options))
}

export async function postApiAdminSplashId(
  args: InferRequestType<(typeof client.api.admin.splash)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.splash[':id'].$post(args, options))
}

export async function postApiAdminConstraintsValidate(
  args: InferRequestType<typeof client.api.admin.constraints.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.constraints.validate.$post(args, options))
}

export async function getApiAdminInviteLinkTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['invite-link'].tokens.$get(undefined, options))
}

export async function postApiAdminInviteLinkTokens(
  args: InferRequestType<(typeof client.api.admin)['invite-link']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['invite-link'].tokens.$post(args, options))
}

export async function getApiAdminInviteLinkTokensToken(
  args: InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['invite-link'].tokens[':token'].$get(args, options))
}

export async function putApiAdminInviteLinkTokensToken(
  args: InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['invite-link'].tokens[':token'].$put(args, options))
}

export async function getApiAdminInstanceAdminStatisticsCsv(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.admin['instance-admin'].statistics.csv.$get(undefined, options),
  )
}

export async function getApiAdminInstanceAdminStatistics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['instance-admin'].statistics.$get(undefined, options))
}

export async function postApiAdminProjectsProjectIdFeaturesFeatureNameFavorites(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].favorites.$post(args, options),
  )
}

export async function deleteApiAdminProjectsProjectIdFeaturesFeatureNameFavorites(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].features[':featureName'].favorites.$delete(
      args,
      options,
    ),
  )
}

export async function postApiAdminProjectsProjectIdFavorites(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['favorites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.projects[':projectId'].favorites.$post(args, options))
}

export async function deleteApiAdminProjectsProjectIdFavorites(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['favorites']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.projects[':projectId'].favorites.$delete(args, options),
  )
}

export async function postApiAdminSegmentsValidate(
  args: InferRequestType<typeof client.api.admin.segments.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.segments.validate.$post(args, options))
}

export async function getApiAdminSegmentsStrategiesStrategyId(
  args: InferRequestType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.admin.segments.strategies[':strategyId'].$get(args, options),
  )
}

export async function postApiAdminSegmentsStrategies(
  args: InferRequestType<typeof client.api.admin.segments.strategies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.segments.strategies.$post(args, options))
}

export async function getApiAdminSegmentsIdStrategies(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.segments[':id'].strategies.$get(args, options))
}

export async function getApiAdminSegmentsId(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.segments[':id'].$get(args, options))
}

export async function putApiAdminSegmentsId(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.segments[':id'].$put(args, options))
}

export async function deleteApiAdminSegmentsId(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.segments[':id'].$delete(args, options))
}

export async function getApiAdminSegments(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.segments.$get(undefined, options))
}

export async function postApiAdminSegments(
  args: InferRequestType<typeof client.api.admin.segments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.segments.$post(args, options))
}

export async function getApiAdminMaintenance(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.maintenance.$get(undefined, options))
}

export async function postApiAdminMaintenance(
  args: InferRequestType<typeof client.api.admin.maintenance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.maintenance.$post(args, options))
}

export async function getApiAdminTelemetrySettings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin.telemetry.settings.$get(undefined, options))
}

export async function getApiAdminSearchFeatures(
  args: InferRequestType<typeof client.api.admin.search.features.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.search.features.$get(args, options))
}

export async function getApiAdminSearchEvents(
  args: InferRequestType<typeof client.api.admin.search.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.search.events.$get(args, options))
}

export async function getApiAdminFlagCreators(
  args: InferRequestType<(typeof client.api.admin)['flag-creators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['flag-creators'].$get(args, options))
}

export async function postApiAdminRecordUiError(
  args: InferRequestType<(typeof client.api.admin)['record-ui-error']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['record-ui-error'].$post(args, options))
}

export async function getApiClientFeaturesFeatureName(
  args: InferRequestType<(typeof client.api.client.features)[':featureName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.client.features[':featureName'].$get(args, options))
}

export async function getApiClientFeatures(options?: ClientRequestOptions) {
  return await parseResponse(client.api.client.features.$get(undefined, options))
}

export async function postApiClientMetrics(
  args: InferRequestType<typeof client.api.client.metrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.client.metrics.$post(args, options))
}

export async function postApiClientMetricsBulk(
  args: InferRequestType<typeof client.api.client.metrics.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.client.metrics.bulk.$post(args, options))
}

export async function postApiClientRegister(
  args: InferRequestType<typeof client.api.client.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.client.register.$post(args, options))
}

export async function getApiFrontend(options?: ClientRequestOptions) {
  return await parseResponse(client.api.frontend.$get(undefined, options))
}

export async function postApiFrontend(
  args: InferRequestType<typeof client.api.frontend.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.frontend.$post(args, options))
}

export async function postApiFrontendClientMetrics(
  args: InferRequestType<typeof client.api.frontend.client.metrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.frontend.client.metrics.$post(args, options))
}

export async function postApiFrontendClientRegister(
  args: InferRequestType<typeof client.api.frontend.client.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.frontend.client.register.$post(args, options))
}

export async function postEdgeValidate(
  args: InferRequestType<typeof client.edge.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge.validate.$post(args, options))
}

export async function postEdgeIssueToken(
  args: InferRequestType<(typeof client.edge)['issue-token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge['issue-token'].$post(args, options))
}
