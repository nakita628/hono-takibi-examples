import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getTeamsTeamIDMetrics(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamID'].metrics.$get(args, options))
}

export async function getTeamsTeamIDMetricsMax(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamID'].metrics.max.$get(args, options))
}

export async function getUnstableTeamsTeamIDStatus(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.teams[':teamID'].status.$get(args, options))
}

export async function getUnstableTeamsTeamIDLimits(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.teams[':teamID'].limits.$get(args, options))
}

export async function getSandboxes(
  args: InferRequestType<typeof client.sandboxes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes.$get(args, options))
}

export async function postSandboxes(
  args: InferRequestType<typeof client.sandboxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes.$post(args, options))
}

export async function getV2Sandboxes(
  args: InferRequestType<typeof client.v2.sandboxes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.$get(args, options))
}

export async function postV2Sandboxes(
  args: InferRequestType<typeof client.v2.sandboxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.$post(args, options))
}

export async function getSandboxesMetrics(
  args: InferRequestType<typeof client.sandboxes.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes.metrics.$get(args, options))
}

export async function getSandboxesSandboxIDLogs(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxID'].logs.$get(args, options))
}

export async function getV2SandboxesSandboxIDLogs(
  args: InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes[':sandboxID'].logs.$get(args, options))
}

export async function getSandboxesSandboxID(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxID'].$get(args, options))
}

export async function deleteSandboxesSandboxID(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxID'].$delete(args, options))
}

export async function getSandboxesSandboxIDMetrics(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxID'].metrics.$get(args, options))
}

export async function getUnstableSandboxesSandboxIDRecord(
  args: InferRequestType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.sandboxes[':sandboxID'].record.$get(args, options))
}

export async function postSandboxesSandboxIDPause(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxID'].pause.$post(args, options))
}

export async function postSandboxesSandboxIDResume(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxID'].resume.$post(args, options))
}

export async function postSandboxesSandboxIDFork(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['fork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxID'].fork.$post(args, options))
}

export async function postSandboxesSandboxIDConnect(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['connect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxID'].connect.$post(args, options))
}

export async function postV2SandboxesSandboxIDConnect(
  args: InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['connect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes[':sandboxID'].connect.$post(args, options))
}

export async function postSandboxesSandboxIDTimeout(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['timeout']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxID'].timeout.$post(args, options))
}

export async function putSandboxesSandboxIDNetwork(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['network']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxID'].network.$put(args, options))
}

export async function postSandboxesSandboxIDRefreshes(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['refreshes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxID'].refreshes.$post(args, options))
}

export async function postSandboxesSandboxIDSnapshots(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['snapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxID'].snapshots.$post(args, options))
}

export async function getSnapshots(
  args: InferRequestType<typeof client.snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots.$get(args, options))
}

export async function postV3Templates(
  args: InferRequestType<typeof client.v3.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.templates.$post(args, options))
}

export async function getV2Templates(
  args: InferRequestType<typeof client.v2.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.templates.$get(args, options))
}

export async function getTemplatesTemplateIDFilesHash(
  args: InferRequestType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':templateID'].files[':hash'].$get(args, options))
}

export async function getTemplates(
  args: InferRequestType<typeof client.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$get(args, options))
}

export async function getDefaultTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client['default-templates'].$get(undefined, options))
}

export async function getUnstableTemplatesSearch(
  args: InferRequestType<typeof client.unstable.templates.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.templates.search.$get(args, options))
}

export async function getUnstableBuilds(
  args: InferRequestType<typeof client.unstable.builds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.builds.$get(args, options))
}

export async function getUnstableBuildsStatuses(
  args: InferRequestType<typeof client.unstable.builds.statuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.builds.statuses.$get(args, options))
}

export async function getUnstableBuildsBuildID(
  args: InferRequestType<(typeof client.unstable.builds)[':buildID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.builds[':buildID'].$get(args, options))
}

export async function getTemplatesTemplateID(
  args: InferRequestType<(typeof client.templates)[':templateID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':templateID'].$get(args, options))
}

export async function deleteTemplatesTemplateID(
  args: InferRequestType<(typeof client.templates)[':templateID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':templateID'].$delete(args, options))
}

export async function patchTemplatesTemplateID(
  args: InferRequestType<(typeof client.templates)[':templateID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':templateID'].$patch(args, options))
}

export async function getTemplatesTemplateIDBuilds(
  args: InferRequestType<(typeof client.templates)[':templateID']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':templateID'].builds.$get(args, options))
}

export async function postV2TemplatesTemplateIDBuildsBuildID(
  args: InferRequestType<
    (typeof client.v2.templates)[':templateID']['builds'][':buildID']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.templates[':templateID'].builds[':buildID'].$post(args, options),
  )
}

export async function getV2TemplatesTemplateID(
  args: InferRequestType<(typeof client.v2.templates)[':templateID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.templates[':templateID'].$get(args, options))
}

export async function patchV2TemplatesTemplateID(
  args: InferRequestType<(typeof client.v2.templates)[':templateID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.templates[':templateID'].$patch(args, options))
}

export async function getTemplatesTemplateIDBuildsBuildIDStatus(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.templates[':templateID'].builds[':buildID'].status.$get(args, options),
  )
}

export async function getTemplatesTemplateIDBuildsBuildIDLogs(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.templates[':templateID'].builds[':buildID'].logs.$get(args, options),
  )
}

export async function postTemplatesTags(
  args: InferRequestType<typeof client.templates.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.tags.$post(args, options))
}

export async function deleteTemplatesTags(
  args: InferRequestType<typeof client.templates.tags.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.tags.$delete(args, options))
}

export async function getTemplatesTemplateIDTags(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':templateID'].tags.$get(args, options))
}

export async function getTemplatesTemplateIDTagsGroups(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':templateID'].tags.groups.$get(args, options))
}

export async function getTemplatesTemplateIDTagsCount(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':templateID'].tags.count.$get(args, options))
}

export async function getTemplatesTemplateIDTagsExists(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':templateID'].tags.exists.$get(args, options))
}

export async function getTemplatesTemplateIDTagsTagAssignments(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.templates[':templateID'].tags[':tag'].assignments.$get(args, options),
  )
}

export async function getTemplatesAliasesAlias(
  args: InferRequestType<(typeof client.templates.aliases)[':alias']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.aliases[':alias'].$get(args, options))
}

export async function getNodes(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes.$get(args, options))
}

export async function getNodesNodeID(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':nodeID'].$get(args, options))
}

export async function postNodesNodeID(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':nodeID'].$post(args, options))
}

export async function getNodesNodeIDSandboxes(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':nodeID'].sandboxes.$get(args, options))
}

export async function postAdminTeamsTeamIDSandboxesKill(
  args: InferRequestType<(typeof client.admin.teams)[':teamID']['sandboxes']['kill']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.teams[':teamID'].sandboxes.kill.$post(args, options))
}

export async function getAdminSandboxesRunningCounts(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.sandboxes['running-counts'].$get(undefined, options))
}

export async function getAdminSandboxesSandboxID(
  args: InferRequestType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.sandboxes[':sandboxID'].$get(args, options))
}

export async function getUnstableAdminSandboxesSandboxIDOverview(
  args: InferRequestType<
    (typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.admin.sandboxes[':sandboxID'].overview.$get(args, options),
  )
}

export async function getUnstableAdminSandboxesSandboxIDBuilds(
  args: InferRequestType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.admin.sandboxes[':sandboxID'].builds.$get(args, options),
  )
}

export async function postUnstableAdminSandboxesSandboxIDBuildsRestore(
  args: InferRequestType<
    (typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.admin.sandboxes[':sandboxID'].builds.restore.$post(args, options),
  )
}

export async function postAdminTeamsTeamIDBuildsCancel(
  args: InferRequestType<(typeof client.admin.teams)[':teamID']['builds']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.teams[':teamID'].builds.cancel.$post(args, options))
}

export async function getAdminTeamsTeamIDApiKeys(
  args: InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.teams[':teamID']['api-keys'].$get(args, options))
}

export async function postAdminTeamsTeamIDApiKeys(
  args: InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.teams[':teamID']['api-keys'].$post(args, options))
}

export async function deleteAdminTeamsTeamIDApiKeysApiKeyID(
  args: InferRequestType<
    (typeof client.admin.teams)[':teamID']['api-keys'][':apiKeyID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.teams[':teamID']['api-keys'][':apiKeyID'].$delete(args, options),
  )
}

export async function getUnstableManagementTelemetryNames(options?: ClientRequestOptions) {
  return await parseResponse(client.unstable.management.telemetry.names.$get(undefined, options))
}

export async function putUnstableManagementClustersClusterID(
  args: InferRequestType<(typeof client.unstable.management.clusters)[':clusterID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.management.clusters[':clusterID'].$put(args, options))
}

export async function deleteUnstableManagementClustersClusterID(
  args: InferRequestType<(typeof client.unstable.management.clusters)[':clusterID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.clusters[':clusterID'].$delete(args, options),
  )
}

export async function putUnstableManagementClustersClusterIDTelemetry(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['telemetry']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.clusters[':clusterID'].telemetry.$put(args, options),
  )
}

export async function getUnstableManagementClustersClusterIDProjects(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.clusters[':clusterID'].projects.$get(args, options),
  )
}

export async function putUnstableManagementClustersClusterIDDeletion(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['deletion']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.clusters[':clusterID'].deletion.$put(args, options),
  )
}

export async function getUnstableManagementClustersClusterIDDestroyReadiness(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.clusters[':clusterID']['destroy-readiness'].$get(args, options),
  )
}

export async function putUnstableManagementProjectsProjectIDClusterClusterID(
  args: InferRequestType<
    (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.projects[':projectID'].cluster[':clusterID'].$put(args, options),
  )
}

export async function deleteUnstableManagementProjectsProjectIDClusterClusterID(
  args: InferRequestType<
    (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.projects[':projectID'].cluster[':clusterID'].$delete(args, options),
  )
}

export async function putUnstableManagementProjectsProjectID(
  args: InferRequestType<(typeof client.unstable.management.projects)[':projectID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.management.projects[':projectID'].$put(args, options))
}

export async function deleteUnstableManagementProjectsProjectID(
  args: InferRequestType<(typeof client.unstable.management.projects)[':projectID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.projects[':projectID'].$delete(args, options),
  )
}

export async function putUnstableManagementProjectsProjectIDMembersUserID(
  args: InferRequestType<
    (typeof client.unstable.management.projects)[':projectID']['members'][':userID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.projects[':projectID'].members[':userID'].$put(args, options),
  )
}

export async function putUnstableManagementProjectsProjectIDLimits(
  args: InferRequestType<
    (typeof client.unstable.management.projects)[':projectID']['limits']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.projects[':projectID'].limits.$put(args, options),
  )
}

export async function putUnstableManagementProjectsProjectIDSettings(
  args: InferRequestType<
    (typeof client.unstable.management.projects)[':projectID']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.projects[':projectID'].settings.$put(args, options),
  )
}

export async function putUnstableManagementProjectsProjectIDBlock(
  args: InferRequestType<
    (typeof client.unstable.management.projects)[':projectID']['block']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.projects[':projectID'].block.$put(args, options),
  )
}

export async function putUnstableManagementProjectsProjectIDBan(
  args: InferRequestType<(typeof client.unstable.management.projects)[':projectID']['ban']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.management.projects[':projectID'].ban.$put(args, options),
  )
}

export async function postUnstableAdminTeamsQuery(
  args: InferRequestType<typeof client.unstable.admin.teams.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.teams.query.$post(args, options))
}

export async function postUnstableAdminTeamsBans(
  args: InferRequestType<typeof client.unstable.admin.teams.bans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.teams.bans.$post(args, options))
}

export async function getUnstableAdminTeamsTeamID(
  args: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.teams[':teamID'].$get(args, options))
}

export async function putUnstableAdminTeamsTeamIDSchedulingLabels(
  args: InferRequestType<
    (typeof client.unstable.admin.teams)[':teamID']['scheduling-labels']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.admin.teams[':teamID']['scheduling-labels'].$put(args, options),
  )
}

export async function putUnstableAdminTeamsTeamIDBan(
  args: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.teams[':teamID'].ban.$put(args, options))
}

export async function deleteUnstableAdminTeamsTeamIDBan(
  args: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.teams[':teamID'].ban.$delete(args, options))
}

export async function getUnstableAdminClusters(
  args: InferRequestType<typeof client.unstable.admin.clusters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.clusters.$get(args, options))
}

export async function postUnstableAdminClusters(
  args: InferRequestType<typeof client.unstable.admin.clusters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.clusters.$post(args, options))
}

export async function getUnstableAdminClustersClusterID(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.clusters[':clusterID'].$get(args, options))
}

export async function deleteUnstableAdminClustersClusterID(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.clusters[':clusterID'].$delete(args, options))
}

export async function patchUnstableAdminClustersClusterID(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.clusters[':clusterID'].$patch(args, options))
}

export async function getUnstableAdminClustersClusterIDMetadata(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.admin.clusters[':clusterID'].metadata.$get(args, options),
  )
}

export async function getUnstableAdminClustersClusterIDTeams(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.clusters[':clusterID'].teams.$get(args, options))
}

export async function putUnstableAdminClustersClusterIDToken(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['token']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.clusters[':clusterID'].token.$put(args, options))
}

export async function getUnstableAdminTemplatesAliases(
  args: InferRequestType<typeof client.unstable.admin.templates.aliases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.templates.aliases.$get(args, options))
}

export async function postUnstableAdminTemplatesAliases(
  args: InferRequestType<typeof client.unstable.admin.templates.aliases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.templates.aliases.$post(args, options))
}

export async function deleteUnstableAdminTemplatesAliasesAliasID(
  args: InferRequestType<(typeof client.unstable.admin.templates.aliases)[':aliasID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.admin.templates.aliases[':aliasID'].$delete(args, options),
  )
}

export async function postUnstableAdminTemplatesDefaults(
  args: InferRequestType<typeof client.unstable.admin.templates.defaults.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.templates.defaults.$post(args, options))
}

export async function deleteUnstableAdminTemplatesDefaultsTemplateID(
  args: InferRequestType<
    (typeof client.unstable.admin.templates.defaults)[':templateID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.admin.templates.defaults[':templateID'].$delete(args, options),
  )
}

export async function patchUnstableAdminTemplatesDefaultsTemplateID(
  args: InferRequestType<
    (typeof client.unstable.admin.templates.defaults)[':templateID']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unstable.admin.templates.defaults[':templateID'].$patch(args, options),
  )
}

export async function getUnstableAdminTemplatesLookup(
  args: InferRequestType<typeof client.unstable.admin.templates.lookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unstable.admin.templates.lookup.$get(args, options))
}

export async function getApiKeys(options?: ClientRequestOptions) {
  return await parseResponse(client['api-keys'].$get(undefined, options))
}

export async function postApiKeys(
  args: InferRequestType<(typeof client)['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'].$post(args, options))
}

export async function deleteApiKeysApiKeyID(
  args: InferRequestType<(typeof client)['api-keys'][':apiKeyID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':apiKeyID'].$delete(args, options))
}

export async function patchApiKeysApiKeyID(
  args: InferRequestType<(typeof client)['api-keys'][':apiKeyID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':apiKeyID'].$patch(args, options))
}

export async function getVolumes(options?: ClientRequestOptions) {
  return await parseResponse(client.volumes.$get(undefined, options))
}

export async function postVolumes(
  args: InferRequestType<typeof client.volumes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.$post(args, options))
}

export async function getVolumesVolumeID(
  args: InferRequestType<(typeof client.volumes)[':volumeID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':volumeID'].$get(args, options))
}

export async function deleteVolumesVolumeID(
  args: InferRequestType<(typeof client.volumes)[':volumeID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':volumeID'].$delete(args, options))
}

export async function getSecrets(
  args: InferRequestType<typeof client.secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.$get(args, options))
}

export async function postSecrets(
  args: InferRequestType<typeof client.secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.$post(args, options))
}

export async function getSecretsSecretID(
  args: InferRequestType<(typeof client.secrets)[':secretID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':secretID'].$get(args, options))
}

export async function postSecretsSecretID(
  args: InferRequestType<(typeof client.secrets)[':secretID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':secretID'].$post(args, options))
}

export async function deleteSecretsSecretID(
  args: InferRequestType<(typeof client.secrets)[':secretID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':secretID'].$delete(args, options))
}

export async function getClustersClusterIDRigs(
  args: InferRequestType<(typeof client.clusters)[':clusterID']['rigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':clusterID'].rigs.$get(args, options))
}

export async function putClustersClusterIDRigsRigIDCapacity(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['capacity']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':clusterID'].rigs[':rigID'].capacity.$put(args, options),
  )
}

export async function deleteClustersClusterIDRigsInstancesInstanceID(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs']['instances'][':instanceID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':clusterID'].rigs.instances[':instanceID'].$delete(args, options),
  )
}

export async function getClustersClusterIDRigsRigIDInstances(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':clusterID'].rigs[':rigID'].instances.$get(args, options),
  )
}

export async function getClustersClusterIDRigsRigIDErrors(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':clusterID'].rigs[':rigID'].errors.$get(args, options),
  )
}

export async function getEventsSandboxesSandboxID(
  args: InferRequestType<(typeof client.events.sandboxes)[':sandboxID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.sandboxes[':sandboxID'].$get(args, options))
}

export async function getEventsSandboxes(
  args: InferRequestType<typeof client.events.sandboxes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.sandboxes.$get(args, options))
}

export async function getEventsWebhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.events.webhooks.$get(undefined, options))
}

export async function postEventsWebhooks(
  args: InferRequestType<typeof client.events.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.webhooks.$post(args, options))
}

export async function getEventsWebhooksWebhookID(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.webhooks[':webhookID'].$get(args, options))
}

export async function deleteEventsWebhooksWebhookID(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.webhooks[':webhookID'].$delete(args, options))
}

export async function patchEventsWebhooksWebhookID(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.webhooks[':webhookID'].$patch(args, options))
}

export async function getEventsWebhooksWebhookIDDeliveries(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.webhooks[':webhookID'].deliveries.$get(args, options))
}

export async function getEventsWebhooksWebhookIDStats(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.webhooks[':webhookID'].stats.$get(args, options))
}
