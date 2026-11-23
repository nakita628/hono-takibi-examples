import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccessControlRoles(
  args: InferRequestType<(typeof client)['access-control']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].roles.$get(args, options))
}

export async function postAccessControlRoles(
  args: InferRequestType<(typeof client)['access-control']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].roles.$post(args, options))
}

export async function getAccessControlRolesRoleUID(
  args: InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].roles[':roleUID'].$get(args, options))
}

export async function putAccessControlRolesRoleUID(
  args: InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].roles[':roleUID'].$put(args, options))
}

export async function deleteAccessControlRolesRoleUID(
  args: InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].roles[':roleUID'].$delete(args, options))
}

export async function getAccessControlRolesRoleUIDAssignments(
  args: InferRequestType<
    (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['access-control'].roles[':roleUID'].assignments.$get(args, options),
  )
}

export async function putAccessControlRolesRoleUIDAssignments(
  args: InferRequestType<
    (typeof client)['access-control']['roles'][':roleUID']['assignments']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['access-control'].roles[':roleUID'].assignments.$put(args, options),
  )
}

export async function getAccessControlStatus(options?: ClientRequestOptions) {
  return await parseResponse(client['access-control'].status.$get(undefined, options))
}

export async function postAccessControlTeamsRolesSearch(
  args: InferRequestType<(typeof client)['access-control']['teams']['roles']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].teams.roles.search.$post(args, options))
}

export async function getAccessControlTeamsTeamIdRoles(
  args: InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].teams[':teamId'].roles.$get(args, options))
}

export async function putAccessControlTeamsTeamIdRoles(
  args: InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].teams[':teamId'].roles.$put(args, options))
}

export async function postAccessControlTeamsTeamIdRoles(
  args: InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].teams[':teamId'].roles.$post(args, options))
}

export async function deleteAccessControlTeamsTeamIdRolesRoleUID(
  args: InferRequestType<
    (typeof client)['access-control']['teams'][':teamId']['roles'][':roleUID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['access-control'].teams[':teamId'].roles[':roleUID'].$delete(args, options),
  )
}

export async function postAccessControlUsersRolesSearch(
  args: InferRequestType<(typeof client)['access-control']['users']['roles']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].users.roles.search.$post(args, options))
}

export async function getAccessControlUsersUserIdRoles(
  args: InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].users[':userId'].roles.$get(args, options))
}

export async function putAccessControlUsersUserIdRoles(
  args: InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].users[':userId'].roles.$put(args, options))
}

export async function postAccessControlUsersUserIdRoles(
  args: InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'].users[':userId'].roles.$post(args, options))
}

export async function deleteAccessControlUsersUserIdRolesRoleUID(
  args: InferRequestType<
    (typeof client)['access-control']['users'][':userId']['roles'][':roleUID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['access-control'].users[':userId'].roles[':roleUID'].$delete(args, options),
  )
}

export async function getAccessControlResourceDescription(
  args: InferRequestType<(typeof client)['access-control'][':resource']['description']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-control'][':resource'].description.$get(args, options))
}

export async function getAccessControlResourceResourceID(
  args: InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['access-control'][':resource'][':resourceID'].$get(args, options),
  )
}

export async function postAccessControlResourceResourceID(
  args: InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['access-control'][':resource'][':resourceID'].$post(args, options),
  )
}

export async function postAccessControlResourceResourceIDBuiltInRolesBuiltInRole(
  args: InferRequestType<
    (typeof client)['access-control'][':resource'][':resourceID']['builtInRoles'][':builtInRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['access-control'][':resource'][':resourceID'].builtInRoles[':builtInRole'].$post(
      args,
      options,
    ),
  )
}

export async function postAccessControlResourceResourceIDTeamsTeamID(
  args: InferRequestType<
    (typeof client)['access-control'][':resource'][':resourceID']['teams'][':teamID']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['access-control'][':resource'][':resourceID'].teams[':teamID'].$post(args, options),
  )
}

export async function postAccessControlResourceResourceIDUsersUserID(
  args: InferRequestType<
    (typeof client)['access-control'][':resource'][':resourceID']['users'][':userID']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['access-control'][':resource'][':resourceID'].users[':userID'].$post(args, options),
  )
}

export async function getAdminLdapSyncStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.admin['ldap-sync-status'].$get(undefined, options))
}

export async function postAdminLdapReload(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.ldap.reload.$post(undefined, options))
}

export async function getAdminLdapStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.ldap.status.$get(undefined, options))
}

export async function postAdminLdapSyncUserId(
  args: InferRequestType<(typeof client.admin.ldap.sync)[':user_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.ldap.sync[':user_id'].$post(args, options))
}

export async function getAdminLdapUserName(
  args: InferRequestType<(typeof client.admin.ldap)[':user_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.ldap[':user_name'].$get(args, options))
}

export async function postAdminProvisioningAccessControlReload(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.provisioning['access-control'].reload.$post(undefined, options),
  )
}

export async function postAdminProvisioningDashboardsReload(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.provisioning.dashboards.reload.$post(undefined, options))
}

export async function postAdminProvisioningDatasourcesReload(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.provisioning.datasources.reload.$post(undefined, options))
}

export async function postAdminProvisioningPluginsReload(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.provisioning.plugins.reload.$post(undefined, options))
}

export async function getAdminSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.settings.$get(undefined, options))
}

export async function getAdminStats(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.stats.$get(undefined, options))
}

export async function postAdminUsers(
  args: InferRequestType<typeof client.admin.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.$post(args, options))
}

export async function deleteAdminUsersUserId(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':user_id'].$delete(args, options))
}

export async function getAdminUsersUserIdAuthTokens(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':user_id']['auth-tokens'].$get(args, options))
}

export async function postAdminUsersUserIdDisable(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':user_id'].disable.$post(args, options))
}

export async function postAdminUsersUserIdEnable(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':user_id'].enable.$post(args, options))
}

export async function postAdminUsersUserIdLogout(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['logout']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':user_id'].logout.$post(args, options))
}

export async function putAdminUsersUserIdPassword(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':user_id'].password.$put(args, options))
}

export async function putAdminUsersUserIdPermissions(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['permissions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':user_id'].permissions.$put(args, options))
}

export async function getAdminUsersUserIdQuotas(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['quotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':user_id'].quotas.$get(args, options))
}

export async function putAdminUsersUserIdQuotasQuotaTarget(
  args: InferRequestType<
    (typeof client.admin.users)[':user_id']['quotas'][':quota_target']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.users[':user_id'].quotas[':quota_target'].$put(args, options),
  )
}

export async function postAdminUsersUserIdRevokeAuthToken(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['revoke-auth-token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.users[':user_id']['revoke-auth-token'].$post(args, options),
  )
}

export async function getAnnotations(
  args: InferRequestType<typeof client.annotations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations.$get(args, options))
}

export async function postAnnotations(
  args: InferRequestType<typeof client.annotations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations.$post(args, options))
}

export async function postAnnotationsGraphite(
  args: InferRequestType<typeof client.annotations.graphite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations.graphite.$post(args, options))
}

export async function postAnnotationsMassDelete(
  args: InferRequestType<(typeof client.annotations)['mass-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations['mass-delete'].$post(args, options))
}

export async function getAnnotationsTags(
  args: InferRequestType<typeof client.annotations.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations.tags.$get(args, options))
}

export async function getAnnotationsAnnotationId(
  args: InferRequestType<(typeof client.annotations)[':annotation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations[':annotation_id'].$get(args, options))
}

export async function putAnnotationsAnnotationId(
  args: InferRequestType<(typeof client.annotations)[':annotation_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations[':annotation_id'].$put(args, options))
}

export async function deleteAnnotationsAnnotationId(
  args: InferRequestType<(typeof client.annotations)[':annotation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations[':annotation_id'].$delete(args, options))
}

export async function patchAnnotationsAnnotationId(
  args: InferRequestType<(typeof client.annotations)[':annotation_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotations[':annotation_id'].$patch(args, options))
}

export async function getAnonymousDevices(options?: ClientRequestOptions) {
  return await parseResponse(client.anonymous.devices.$get(undefined, options))
}

export async function getAnonymousSearch(options?: ClientRequestOptions) {
  return await parseResponse(client.anonymous.search.$get(undefined, options))
}

export async function getCloudmigrationMigration(options?: ClientRequestOptions) {
  return await parseResponse(client.cloudmigration.migration.$get(undefined, options))
}

export async function postCloudmigrationMigration(
  args: InferRequestType<typeof client.cloudmigration.migration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cloudmigration.migration.$post(args, options))
}

export async function getCloudmigrationMigrationUid(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cloudmigration.migration[':uid'].$get(args, options))
}

export async function deleteCloudmigrationMigrationUid(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cloudmigration.migration[':uid'].$delete(args, options))
}

export async function postCloudmigrationMigrationUidSnapshot(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cloudmigration.migration[':uid'].snapshot.$post(args, options))
}

export async function getCloudmigrationMigrationUidSnapshotSnapshotUid(
  args: InferRequestType<
    (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cloudmigration.migration[':uid'].snapshot[':snapshotUid'].$get(args, options),
  )
}

export async function postCloudmigrationMigrationUidSnapshotSnapshotUidCancel(
  args: InferRequestType<
    (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cloudmigration.migration[':uid'].snapshot[':snapshotUid'].cancel.$post(args, options),
  )
}

export async function postCloudmigrationMigrationUidSnapshotSnapshotUidUpload(
  args: InferRequestType<
    (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cloudmigration.migration[':uid'].snapshot[':snapshotUid'].upload.$post(args, options),
  )
}

export async function getCloudmigrationMigrationUidSnapshots(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cloudmigration.migration[':uid'].snapshots.$get(args, options))
}

export async function getCloudmigrationResourcesDependencies(options?: ClientRequestOptions) {
  return await parseResponse(client.cloudmigration.resources.dependencies.$get(undefined, options))
}

export async function getCloudmigrationToken(options?: ClientRequestOptions) {
  return await parseResponse(client.cloudmigration.token.$get(undefined, options))
}

export async function postCloudmigrationToken(options?: ClientRequestOptions) {
  return await parseResponse(client.cloudmigration.token.$post(undefined, options))
}

export async function deleteCloudmigrationTokenUid(
  args: InferRequestType<(typeof client.cloudmigration.token)[':uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cloudmigration.token[':uid'].$delete(args, options))
}

export async function getConvertApiPromRules(options?: ClientRequestOptions) {
  return await parseResponse(client.convert.api.prom.rules.$get(undefined, options))
}

export async function postConvertApiPromRules(options?: ClientRequestOptions) {
  return await parseResponse(client.convert.api.prom.rules.$post(undefined, options))
}

export async function getConvertApiPromRulesNamespaceTitle(
  args: InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.convert.api.prom.rules[':NamespaceTitle'].$get(args, options))
}

export async function postConvertApiPromRulesNamespaceTitle(
  args: InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.convert.api.prom.rules[':NamespaceTitle'].$post(args, options))
}

export async function deleteConvertApiPromRulesNamespaceTitle(
  args: InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.convert.api.prom.rules[':NamespaceTitle'].$delete(args, options),
  )
}

export async function getConvertApiPromRulesNamespaceTitleGroup(
  args: InferRequestType<
    (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.convert.api.prom.rules[':NamespaceTitle'][':Group'].$get(args, options),
  )
}

export async function deleteConvertApiPromRulesNamespaceTitleGroup(
  args: InferRequestType<
    (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.convert.api.prom.rules[':NamespaceTitle'][':Group'].$delete(args, options),
  )
}

export async function getConvertPrometheusConfigV1Rules(options?: ClientRequestOptions) {
  return await parseResponse(client.convert.prometheus.config.v1.rules.$get(undefined, options))
}

export async function postConvertPrometheusConfigV1Rules(options?: ClientRequestOptions) {
  return await parseResponse(client.convert.prometheus.config.v1.rules.$post(undefined, options))
}

export async function getConvertPrometheusConfigV1RulesNamespaceTitle(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.convert.prometheus.config.v1.rules[':NamespaceTitle'].$get(args, options),
  )
}

export async function postConvertPrometheusConfigV1RulesNamespaceTitle(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.convert.prometheus.config.v1.rules[':NamespaceTitle'].$post(args, options),
  )
}

export async function deleteConvertPrometheusConfigV1RulesNamespaceTitle(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.convert.prometheus.config.v1.rules[':NamespaceTitle'].$delete(args, options),
  )
}

export async function getConvertPrometheusConfigV1RulesNamespaceTitleGroup(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.convert.prometheus.config.v1.rules[':NamespaceTitle'][':Group'].$get(args, options),
  )
}

export async function deleteConvertPrometheusConfigV1RulesNamespaceTitleGroup(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.convert.prometheus.config.v1.rules[':NamespaceTitle'][':Group'].$delete(args, options),
  )
}

export async function getDashboardSnapshots(
  args: InferRequestType<typeof client.dashboard.snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard.snapshots.$get(args, options))
}

export async function postDashboardsDb(
  args: InferRequestType<typeof client.dashboards.db.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.db.$post(args, options))
}

export async function getDashboardsHome(options?: ClientRequestOptions) {
  return await parseResponse(client.dashboards.home.$get(undefined, options))
}

export async function postDashboardsImport(
  args: InferRequestType<typeof client.dashboards.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.import.$post(args, options))
}

export async function postDashboardsInterpolate(options?: ClientRequestOptions) {
  return await parseResponse(client.dashboards.interpolate.$post(undefined, options))
}

export async function getDashboardsPublicDashboards(options?: ClientRequestOptions) {
  return await parseResponse(client.dashboards['public-dashboards'].$get(undefined, options))
}

export async function getDashboardsTags(options?: ClientRequestOptions) {
  return await parseResponse(client.dashboards.tags.$get(undefined, options))
}

export async function getDashboardsUidDashboardUidPublicDashboards(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards.uid[':dashboardUid']['public-dashboards'].$get(args, options),
  )
}

export async function postDashboardsUidDashboardUidPublicDashboards(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards.uid[':dashboardUid']['public-dashboards'].$post(args, options),
  )
}

export async function deleteDashboardsUidDashboardUidPublicDashboardsUid(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards.uid[':dashboardUid']['public-dashboards'][':uid'].$delete(args, options),
  )
}

export async function patchDashboardsUidDashboardUidPublicDashboardsUid(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards.uid[':dashboardUid']['public-dashboards'][':uid'].$patch(args, options),
  )
}

export async function getDashboardsUidUid(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.uid[':uid'].$get(args, options))
}

export async function deleteDashboardsUidUid(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.uid[':uid'].$delete(args, options))
}

export async function getDashboardsUidUidPermissions(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.uid[':uid'].permissions.$get(args, options))
}

export async function postDashboardsUidUidPermissions(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.uid[':uid'].permissions.$post(args, options))
}

export async function postDashboardsUidUidRestore(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.uid[':uid'].restore.$post(args, options))
}

export async function getDashboardsUidUidVersions(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.uid[':uid'].versions.$get(args, options))
}

export async function getDashboardsUidUidVersionsDashboardVersionID(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards.uid[':uid'].versions[':DashboardVersionID'].$get(args, options),
  )
}

export async function postDashboardsVariablesPromote(
  args: InferRequestType<typeof client.dashboards.variables.promote.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.variables.promote.$post(args, options))
}

export async function getDashboardsVariablesSharedClusters(options?: ClientRequestOptions) {
  return await parseResponse(
    client.dashboards.variables['shared-clusters'].$get(undefined, options),
  )
}

export async function getDashboardsVariablesSharedClustersOccurrences(
  args: InferRequestType<
    (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards.variables['shared-clusters'].occurrences.$get(args, options),
  )
}

export async function postDashboardsVariablesSharedClustersRescan(options?: ClientRequestOptions) {
  return await parseResponse(
    client.dashboards.variables['shared-clusters'].rescan.$post(undefined, options),
  )
}

export async function getDatasources(options?: ClientRequestOptions) {
  return await parseResponse(client.datasources.$get(undefined, options))
}

export async function postDatasources(
  args: InferRequestType<typeof client.datasources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.$post(args, options))
}

export async function getDatasourcesCorrelations(
  args: InferRequestType<typeof client.datasources.correlations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.correlations.$get(args, options))
}

export async function getDatasourcesIdName(
  args: InferRequestType<(typeof client.datasources.id)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.id[':name'].$get(args, options))
}

export async function getDatasourcesNameName(
  args: InferRequestType<(typeof client.datasources.name)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.name[':name'].$get(args, options))
}

export async function deleteDatasourcesNameName(
  args: InferRequestType<(typeof client.datasources.name)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.name[':name'].$delete(args, options))
}

export async function getDatasourcesProxyUidUidDatasourceProxyRoute(
  args: InferRequestType<
    (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasources.proxy.uid[':uid'][':datasource_proxy_route'].$get(args, options),
  )
}

export async function postDatasourcesProxyUidUidDatasourceProxyRoute(
  args: InferRequestType<
    (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasources.proxy.uid[':uid'][':datasource_proxy_route'].$post(args, options),
  )
}

export async function deleteDatasourcesProxyUidUidDatasourceProxyRoute(
  args: InferRequestType<
    (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasources.proxy.uid[':uid'][':datasource_proxy_route'].$delete(args, options),
  )
}

export async function getDatasourcesUidSourceUIDCorrelations(
  args: InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.uid[':sourceUID'].correlations.$get(args, options))
}

export async function postDatasourcesUidSourceUIDCorrelations(
  args: InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.uid[':sourceUID'].correlations.$post(args, options))
}

export async function getDatasourcesUidSourceUIDCorrelationsCorrelationUID(
  args: InferRequestType<
    (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasources.uid[':sourceUID'].correlations[':correlationUID'].$get(args, options),
  )
}

export async function patchDatasourcesUidSourceUIDCorrelationsCorrelationUID(
  args: InferRequestType<
    (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasources.uid[':sourceUID'].correlations[':correlationUID'].$patch(args, options),
  )
}

export async function getDatasourcesUidUid(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.uid[':uid'].$get(args, options))
}

export async function putDatasourcesUidUid(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.uid[':uid'].$put(args, options))
}

export async function deleteDatasourcesUidUid(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.uid[':uid'].$delete(args, options))
}

export async function deleteDatasourcesUidUidCorrelationsCorrelationUID(
  args: InferRequestType<
    (typeof client.datasources.uid)[':uid']['correlations'][':correlationUID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasources.uid[':uid'].correlations[':correlationUID'].$delete(args, options),
  )
}

export async function getDatasourcesUidUidHealth(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['health']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.uid[':uid'].health.$get(args, options))
}

export async function getDatasourcesUidUidLbacTeams(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.uid[':uid'].lbac.teams.$get(args, options))
}

export async function putDatasourcesUidUidLbacTeams(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.uid[':uid'].lbac.teams.$put(args, options))
}

export async function getDatasourcesUidUidResourcesDatasourceProxyRoute(
  args: InferRequestType<
    (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasources.uid[':uid'].resources[':datasource_proxy_route'].$get(args, options),
  )
}

export async function getDatasourcesDataSourceUIDCache(
  args: InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources[':dataSourceUID'].cache.$get(args, options))
}

export async function postDatasourcesDataSourceUIDCache(
  args: InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources[':dataSourceUID'].cache.$post(args, options))
}

export async function postDatasourcesDataSourceUIDCacheClean(
  args: InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['clean']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources[':dataSourceUID'].cache.clean.$post(args, options))
}

export async function postDatasourcesDataSourceUIDCacheDisable(
  args: InferRequestType<
    (typeof client.datasources)[':dataSourceUID']['cache']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasources[':dataSourceUID'].cache.disable.$post(args, options),
  )
}

export async function postDatasourcesDataSourceUIDCacheEnable(
  args: InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources[':dataSourceUID'].cache.enable.$post(args, options))
}

export async function postDsQuery(
  args: InferRequestType<typeof client.ds.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ds.query.$post(args, options))
}

export async function getFolders(
  args: InferRequestType<typeof client.folders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders.$get(args, options))
}

export async function postFolders(
  args: InferRequestType<typeof client.folders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders.$post(args, options))
}

export async function getFoldersFolderUid(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_uid'].$get(args, options))
}

export async function putFoldersFolderUid(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_uid'].$put(args, options))
}

export async function deleteFoldersFolderUid(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_uid'].$delete(args, options))
}

export async function getFoldersFolderUidCounts(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['counts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_uid'].counts.$get(args, options))
}

export async function postFoldersFolderUidMove(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_uid'].move.$post(args, options))
}

export async function getFoldersFolderUidPermissions(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_uid'].permissions.$get(args, options))
}

export async function postFoldersFolderUidPermissions(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_uid'].permissions.$post(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getLibraryElements(
  args: InferRequestType<(typeof client)['library-elements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['library-elements'].$get(args, options))
}

export async function postLibraryElements(
  args: InferRequestType<(typeof client)['library-elements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['library-elements'].$post(args, options))
}

export async function getLibraryElementsNameLibraryElementName(
  args: InferRequestType<
    (typeof client)['library-elements']['name'][':library_element_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['library-elements'].name[':library_element_name'].$get(args, options),
  )
}

export async function getLibraryElementsLibraryElementUid(
  args: InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['library-elements'][':library_element_uid'].$get(args, options))
}

export async function deleteLibraryElementsLibraryElementUid(
  args: InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['library-elements'][':library_element_uid'].$delete(args, options),
  )
}

export async function patchLibraryElementsLibraryElementUid(
  args: InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['library-elements'][':library_element_uid'].$patch(args, options),
  )
}

export async function getLibraryElementsLibraryElementUidConnectionsIndex(
  args: InferRequestType<
    (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['library-elements'][':library_element_uid'].connections.index.$get(args, options),
  )
}

export async function getLicensingCheck(options?: ClientRequestOptions) {
  return await parseResponse(client.licensing.check.$get(undefined, options))
}

export async function getLicensingCustomPermissions(options?: ClientRequestOptions) {
  return await parseResponse(client.licensing['custom-permissions'].$get(undefined, options))
}

export async function getLicensingCustomPermissionsCsv(options?: ClientRequestOptions) {
  return await parseResponse(client.licensing['custom-permissions-csv'].$get(undefined, options))
}

export async function getLicensingRefreshStats(options?: ClientRequestOptions) {
  return await parseResponse(client.licensing['refresh-stats'].$get(undefined, options))
}

export async function getLicensingToken(options?: ClientRequestOptions) {
  return await parseResponse(client.licensing.token.$get(undefined, options))
}

export async function postLicensingToken(
  args: InferRequestType<typeof client.licensing.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licensing.token.$post(args, options))
}

export async function deleteLicensingToken(
  args: InferRequestType<typeof client.licensing.token.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licensing.token.$delete(args, options))
}

export async function postLicensingTokenRenew(
  args: InferRequestType<typeof client.licensing.token.renew.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licensing.token.renew.$post(args, options))
}

export async function getLogoutSaml(options?: ClientRequestOptions) {
  return await parseResponse(client.logout.saml.$get(undefined, options))
}

export async function getOrg(options?: ClientRequestOptions) {
  return await parseResponse(client.org.$get(undefined, options))
}

export async function putOrg(
  args: InferRequestType<typeof client.org.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.$put(args, options))
}

export async function putOrgAddress(
  args: InferRequestType<typeof client.org.address.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.address.$put(args, options))
}

export async function getOrgInvites(options?: ClientRequestOptions) {
  return await parseResponse(client.org.invites.$get(undefined, options))
}

export async function postOrgInvites(
  args: InferRequestType<typeof client.org.invites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.invites.$post(args, options))
}

export async function deleteOrgInvitesInvitationCodeRevoke(
  args: InferRequestType<(typeof client.org.invites)[':invitation_code']['revoke']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.invites[':invitation_code'].revoke.$delete(args, options))
}

export async function getOrgPreferences(options?: ClientRequestOptions) {
  return await parseResponse(client.org.preferences.$get(undefined, options))
}

export async function putOrgPreferences(
  args: InferRequestType<typeof client.org.preferences.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.preferences.$put(args, options))
}

export async function patchOrgPreferences(
  args: InferRequestType<typeof client.org.preferences.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.preferences.$patch(args, options))
}

export async function getOrgQuotas(options?: ClientRequestOptions) {
  return await parseResponse(client.org.quotas.$get(undefined, options))
}

export async function getOrgUsers(
  args: InferRequestType<typeof client.org.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.users.$get(args, options))
}

export async function postOrgUsers(
  args: InferRequestType<typeof client.org.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.users.$post(args, options))
}

export async function getOrgUsersLookup(
  args: InferRequestType<typeof client.org.users.lookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.users.lookup.$get(args, options))
}

export async function deleteOrgUsersUserId(
  args: InferRequestType<(typeof client.org.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.users[':user_id'].$delete(args, options))
}

export async function patchOrgUsersUserId(
  args: InferRequestType<(typeof client.org.users)[':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.users[':user_id'].$patch(args, options))
}

export async function getOrgs(
  args: InferRequestType<typeof client.orgs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs.$get(args, options))
}

export async function postOrgs(
  args: InferRequestType<typeof client.orgs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs.$post(args, options))
}

export async function getOrgsNameOrgName(
  args: InferRequestType<(typeof client.orgs.name)[':org_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs.name[':org_name'].$get(args, options))
}

export async function getOrgsOrgId(
  args: InferRequestType<(typeof client.orgs)[':org_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org_id'].$get(args, options))
}

export async function putOrgsOrgId(
  args: InferRequestType<(typeof client.orgs)[':org_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org_id'].$put(args, options))
}

export async function deleteOrgsOrgId(
  args: InferRequestType<(typeof client.orgs)[':org_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org_id'].$delete(args, options))
}

export async function putOrgsOrgIdAddress(
  args: InferRequestType<(typeof client.orgs)[':org_id']['address']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org_id'].address.$put(args, options))
}

export async function getOrgsOrgIdQuotas(
  args: InferRequestType<(typeof client.orgs)[':org_id']['quotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org_id'].quotas.$get(args, options))
}

export async function putOrgsOrgIdQuotasQuotaTarget(
  args: InferRequestType<(typeof client.orgs)[':org_id']['quotas'][':quota_target']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org_id'].quotas[':quota_target'].$put(args, options))
}

export async function getOrgsOrgIdUsers(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org_id'].users.$get(args, options))
}

export async function postOrgsOrgIdUsers(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org_id'].users.$post(args, options))
}

export async function getOrgsOrgIdUsersSearch(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org_id'].users.search.$get(args, options))
}

export async function deleteOrgsOrgIdUsersUserId(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users'][':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org_id'].users[':user_id'].$delete(args, options))
}

export async function patchOrgsOrgIdUsersUserId(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users'][':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org_id'].users[':user_id'].$patch(args, options))
}

export async function getPlaylists(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists.$get(args, options))
}

export async function postPlaylists(
  args: InferRequestType<typeof client.playlists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists.$post(args, options))
}

export async function getPlaylistsUid(
  args: InferRequestType<(typeof client.playlists)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':uid'].$get(args, options))
}

export async function putPlaylistsUid(
  args: InferRequestType<(typeof client.playlists)[':uid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':uid'].$put(args, options))
}

export async function deletePlaylistsUid(
  args: InferRequestType<(typeof client.playlists)[':uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':uid'].$delete(args, options))
}

export async function getPlaylistsUidItems(
  args: InferRequestType<(typeof client.playlists)[':uid']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':uid'].items.$get(args, options))
}

export async function getPublicDashboardsAccessToken(
  args: InferRequestType<(typeof client.public.dashboards)[':accessToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.dashboards[':accessToken'].$get(args, options))
}

export async function getPublicDashboardsAccessTokenAnnotations(
  args: InferRequestType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.dashboards[':accessToken'].annotations.$get(args, options),
  )
}

export async function postPublicDashboardsAccessTokenPanelsPanelIdQuery(
  args: InferRequestType<
    (typeof client.public.dashboards)[':accessToken']['panels'][':panelId']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.dashboards[':accessToken'].panels[':panelId'].query.$post(args, options),
  )
}

export async function getQueryHistory(
  args: InferRequestType<(typeof client)['query-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['query-history'].$get(args, options))
}

export async function postQueryHistory(
  args: InferRequestType<(typeof client)['query-history']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['query-history'].$post(args, options))
}

export async function postQueryHistoryStarQueryHistoryUid(
  args: InferRequestType<(typeof client)['query-history']['star'][':query_history_uid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['query-history'].star[':query_history_uid'].$post(args, options),
  )
}

export async function deleteQueryHistoryStarQueryHistoryUid(
  args: InferRequestType<(typeof client)['query-history']['star'][':query_history_uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['query-history'].star[':query_history_uid'].$delete(args, options),
  )
}

export async function deleteQueryHistoryQueryHistoryUid(
  args: InferRequestType<(typeof client)['query-history'][':query_history_uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['query-history'][':query_history_uid'].$delete(args, options))
}

export async function patchQueryHistoryQueryHistoryUid(
  args: InferRequestType<(typeof client)['query-history'][':query_history_uid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['query-history'][':query_history_uid'].$patch(args, options))
}

export async function getRecordingRules(options?: ClientRequestOptions) {
  return await parseResponse(client['recording-rules'].$get(undefined, options))
}

export async function putRecordingRules(
  args: InferRequestType<(typeof client)['recording-rules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['recording-rules'].$put(args, options))
}

export async function postRecordingRules(
  args: InferRequestType<(typeof client)['recording-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['recording-rules'].$post(args, options))
}

export async function postRecordingRulesTest(
  args: InferRequestType<(typeof client)['recording-rules']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['recording-rules'].test.$post(args, options))
}

export async function getRecordingRulesWriter(options?: ClientRequestOptions) {
  return await parseResponse(client['recording-rules'].writer.$get(undefined, options))
}

export async function postRecordingRulesWriter(
  args: InferRequestType<(typeof client)['recording-rules']['writer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['recording-rules'].writer.$post(args, options))
}

export async function deleteRecordingRulesWriter(options?: ClientRequestOptions) {
  return await parseResponse(client['recording-rules'].writer.$delete(undefined, options))
}

export async function deleteRecordingRulesRecordingRuleID(
  args: InferRequestType<(typeof client)['recording-rules'][':recordingRuleID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['recording-rules'][':recordingRuleID'].$delete(args, options))
}

export async function getReports(options?: ClientRequestOptions) {
  return await parseResponse(client.reports.$get(undefined, options))
}

export async function postReports(
  args: InferRequestType<typeof client.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.$post(args, options))
}

export async function getReportsDashboardsUid(
  args: InferRequestType<(typeof client.reports.dashboards)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.dashboards[':uid'].$get(args, options))
}

export async function postReportsEmail(
  args: InferRequestType<typeof client.reports.email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.email.$post(args, options))
}

export async function getReportsImagesImage(options?: ClientRequestOptions) {
  return await parseResponse(client.reports.images[':image'].$get(undefined, options))
}

export async function getReportsRenderCsvs(
  args: InferRequestType<typeof client.reports.render.csvs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.render.csvs.$get(args, options))
}

export async function getReportsRenderPdfs(
  args: InferRequestType<typeof client.reports.render.pdfs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.render.pdfs.$get(args, options))
}

export async function getReportsSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.reports.settings.$get(undefined, options))
}

export async function postReportsSettings(
  args: InferRequestType<typeof client.reports.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.settings.$post(args, options))
}

export async function postReportsTestEmail(
  args: InferRequestType<(typeof client.reports)['test-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports['test-email'].$post(args, options))
}

export async function getReportsId(
  args: InferRequestType<(typeof client.reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':id'].$get(args, options))
}

export async function putReportsId(
  args: InferRequestType<(typeof client.reports)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':id'].$put(args, options))
}

export async function deleteReportsId(
  args: InferRequestType<(typeof client.reports)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':id'].$delete(args, options))
}

export async function postSamlAcs(
  args: InferRequestType<typeof client.saml.acs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saml.acs.$post(args, options))
}

export async function getSamlMetadata(options?: ClientRequestOptions) {
  return await parseResponse(client.saml.metadata.$get(undefined, options))
}

export async function getSamlSlo(options?: ClientRequestOptions) {
  return await parseResponse(client.saml.slo.$get(undefined, options))
}

export async function postSamlSlo(
  args: InferRequestType<typeof client.saml.slo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saml.slo.$post(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getSearchSorting(options?: ClientRequestOptions) {
  return await parseResponse(client.search.sorting.$get(undefined, options))
}

export async function postServiceaccounts(
  args: InferRequestType<typeof client.serviceaccounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.serviceaccounts.$post(args, options))
}

export async function getServiceaccountsSearch(
  args: InferRequestType<typeof client.serviceaccounts.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.serviceaccounts.search.$get(args, options))
}

export async function getServiceaccountsServiceAccountId(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.serviceaccounts[':serviceAccountId'].$get(args, options))
}

export async function deleteServiceaccountsServiceAccountId(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.serviceaccounts[':serviceAccountId'].$delete(args, options))
}

export async function patchServiceaccountsServiceAccountId(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.serviceaccounts[':serviceAccountId'].$patch(args, options))
}

export async function getServiceaccountsServiceAccountIdTokens(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.serviceaccounts[':serviceAccountId'].tokens.$get(args, options))
}

export async function postServiceaccountsServiceAccountIdTokens(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.serviceaccounts[':serviceAccountId'].tokens.$post(args, options),
  )
}

export async function deleteServiceaccountsServiceAccountIdTokensTokenId(
  args: InferRequestType<
    (typeof client.serviceaccounts)[':serviceAccountId']['tokens'][':tokenId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.serviceaccounts[':serviceAccountId'].tokens[':tokenId'].$delete(args, options),
  )
}

export async function getSigningKeysKeys(options?: ClientRequestOptions) {
  return await parseResponse(client['signing-keys'].keys.$get(undefined, options))
}

export async function getSnapshotSharedOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.snapshot['shared-options'].$get(undefined, options))
}

export async function postSnapshots(
  args: InferRequestType<typeof client.snapshots.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots.$post(args, options))
}

export async function getSnapshotsDeleteDeleteKey(
  args: InferRequestType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['snapshots-delete'][':deleteKey'].$get(args, options))
}

export async function getSnapshotsKey(
  args: InferRequestType<(typeof client.snapshots)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':key'].$get(args, options))
}

export async function deleteSnapshotsKey(
  args: InferRequestType<(typeof client.snapshots)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':key'].$delete(args, options))
}

export async function postTeams(
  args: InferRequestType<typeof client.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$post(args, options))
}

export async function getTeamsSearch(
  args: InferRequestType<typeof client.teams.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.search.$get(args, options))
}

export async function getTeamsTeamIdGroups(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].groups.$get(args, options))
}

export async function postTeamsTeamIdGroups(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].groups.$post(args, options))
}

export async function deleteTeamsTeamIdGroups(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].groups.$delete(args, options))
}

export async function getTeamsTeamIdGroupsSearch(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].groups.search.$get(args, options))
}

export async function getTeamsTeamId(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].$get(args, options))
}

export async function putTeamsTeamId(
  args: InferRequestType<(typeof client.teams)[':team_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].$put(args, options))
}

export async function deleteTeamsTeamId(
  args: InferRequestType<(typeof client.teams)[':team_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].$delete(args, options))
}

export async function getTeamsTeamIdMembers(
  args: InferRequestType<(typeof client.teams)[':team_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].members.$get(args, options))
}

export async function putTeamsTeamIdMembers(
  args: InferRequestType<(typeof client.teams)[':team_id']['members']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].members.$put(args, options))
}

export async function postTeamsTeamIdMembers(
  args: InferRequestType<(typeof client.teams)[':team_id']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].members.$post(args, options))
}

export async function putTeamsTeamIdMembersUserId(
  args: InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].members[':user_id'].$put(args, options))
}

export async function deleteTeamsTeamIdMembersUserId(
  args: InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].members[':user_id'].$delete(args, options))
}

export async function getTeamsTeamIdPreferences(
  args: InferRequestType<(typeof client.teams)[':team_id']['preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].preferences.$get(args, options))
}

export async function putTeamsTeamIdPreferences(
  args: InferRequestType<(typeof client.teams)[':team_id']['preferences']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].preferences.$put(args, options))
}

export async function getUser(options?: ClientRequestOptions) {
  return await parseResponse(client.user.$get(undefined, options))
}

export async function putUser(
  args: InferRequestType<typeof client.user.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$put(args, options))
}

export async function getUserAuthTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.user['auth-tokens'].$get(undefined, options))
}

export async function getUserEmailUpdate(options?: ClientRequestOptions) {
  return await parseResponse(client.user.email.update.$get(undefined, options))
}

export async function getUserOrgs(options?: ClientRequestOptions) {
  return await parseResponse(client.user.orgs.$get(undefined, options))
}

export async function putUserPassword(
  args: InferRequestType<typeof client.user.password.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.password.$put(args, options))
}

export async function getUserPreferences(options?: ClientRequestOptions) {
  return await parseResponse(client.user.preferences.$get(undefined, options))
}

export async function putUserPreferences(
  args: InferRequestType<typeof client.user.preferences.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.preferences.$put(args, options))
}

export async function patchUserPreferences(
  args: InferRequestType<typeof client.user.preferences.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.preferences.$patch(args, options))
}

export async function getUserQuotas(options?: ClientRequestOptions) {
  return await parseResponse(client.user.quotas.$get(undefined, options))
}

export async function postUserRevokeAuthToken(
  args: InferRequestType<(typeof client.user)['revoke-auth-token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user['revoke-auth-token'].$post(args, options))
}

export async function postUserStarsDashboardUidDashboardUid(
  args: InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.stars.dashboard.uid[':dashboard_uid'].$post(args, options))
}

export async function deleteUserStarsDashboardUidDashboardUid(
  args: InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.stars.dashboard.uid[':dashboard_uid'].$delete(args, options),
  )
}

export async function getUserTeams(options?: ClientRequestOptions) {
  return await parseResponse(client.user.teams.$get(undefined, options))
}

export async function postUserUsingOrgId(
  args: InferRequestType<(typeof client.user.using)[':org_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.using[':org_id'].$post(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function getUsersLookup(
  args: InferRequestType<typeof client.users.lookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.lookup.$get(args, options))
}

export async function getUsersSearch(options?: ClientRequestOptions) {
  return await parseResponse(client.users.search.$get(undefined, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$get(args, options))
}

export async function putUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$put(args, options))
}

export async function getUsersUserIdOrgs(
  args: InferRequestType<(typeof client.users)[':user_id']['orgs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].orgs.$get(args, options))
}

export async function getUsersUserIdTeams(
  args: InferRequestType<(typeof client.users)[':user_id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].teams.$get(args, options))
}

export async function getV1ProvisioningAlertRules(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.provisioning['alert-rules'].$get(undefined, options))
}

export async function postV1ProvisioningAlertRules(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['alert-rules'].$post(args, options))
}

export async function getV1ProvisioningAlertRulesExport(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['alert-rules'].export.$get(args, options))
}

export async function getV1ProvisioningAlertRulesUID(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['alert-rules'][':UID'].$get(args, options))
}

export async function putV1ProvisioningAlertRulesUID(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['alert-rules'][':UID'].$put(args, options))
}

export async function deleteV1ProvisioningAlertRulesUID(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['alert-rules'][':UID'].$delete(args, options))
}

export async function getV1ProvisioningAlertRulesUIDExport(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.provisioning['alert-rules'][':UID'].export.$get(args, options),
  )
}

export async function getV1ProvisioningContactPoints(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['contact-points'].$get(args, options))
}

export async function postV1ProvisioningContactPoints(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['contact-points'].$post(args, options))
}

export async function getV1ProvisioningContactPointsExport(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['contact-points'].export.$get(args, options))
}

export async function putV1ProvisioningContactPointsUID(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['contact-points'][':UID'].$put(args, options))
}

export async function deleteV1ProvisioningContactPointsUID(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.provisioning['contact-points'][':UID'].$delete(args, options),
  )
}

export async function getV1ProvisioningFolderFolderUIDRuleGroupsGroup(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].$get(args, options),
  )
}

export async function putV1ProvisioningFolderFolderUIDRuleGroupsGroup(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].$put(args, options),
  )
}

export async function deleteV1ProvisioningFolderFolderUIDRuleGroupsGroup(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].$delete(args, options),
  )
}

export async function getV1ProvisioningFolderFolderUIDRuleGroupsGroupExport(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].export.$get(args, options),
  )
}

export async function getV1ProvisioningMuteTimings(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.provisioning['mute-timings'].$get(undefined, options))
}

export async function postV1ProvisioningMuteTimings(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['mute-timings'].$post(args, options))
}

export async function getV1ProvisioningMuteTimingsExport(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['mute-timings'].export.$get(args, options))
}

export async function getV1ProvisioningMuteTimingsName(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['mute-timings'][':name'].$get(args, options))
}

export async function putV1ProvisioningMuteTimingsName(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['mute-timings'][':name'].$put(args, options))
}

export async function deleteV1ProvisioningMuteTimingsName(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning['mute-timings'][':name'].$delete(args, options))
}

export async function getV1ProvisioningMuteTimingsNameExport(
  args: InferRequestType<
    (typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.provisioning['mute-timings'][':name'].export.$get(args, options),
  )
}

export async function getV1ProvisioningPolicies(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.provisioning.policies.$get(undefined, options))
}

export async function putV1ProvisioningPolicies(
  args: InferRequestType<typeof client.v1.provisioning.policies.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning.policies.$put(args, options))
}

export async function deleteV1ProvisioningPolicies(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.provisioning.policies.$delete(undefined, options))
}

export async function getV1ProvisioningPoliciesExport(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.provisioning.policies.export.$get(undefined, options))
}

export async function getV1ProvisioningTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.provisioning.templates.$get(undefined, options))
}

export async function getV1ProvisioningTemplatesName(
  args: InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning.templates[':name'].$get(args, options))
}

export async function putV1ProvisioningTemplatesName(
  args: InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning.templates[':name'].$put(args, options))
}

export async function deleteV1ProvisioningTemplatesName(
  args: InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.provisioning.templates[':name'].$delete(args, options))
}

export async function getV1SsoSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['sso-settings'].$get(undefined, options))
}

export async function getV1SsoSettingsKey(
  args: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sso-settings'][':key'].$get(args, options))
}

export async function putV1SsoSettingsKey(
  args: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sso-settings'][':key'].$put(args, options))
}

export async function deleteV1SsoSettingsKey(
  args: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sso-settings'][':key'].$delete(args, options))
}

export async function patchV1SsoSettingsKey(
  args: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sso-settings'][':key'].$patch(args, options))
}
