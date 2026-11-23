import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSignin(
  args: InferRequestType<typeof client.signin.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signin.$post(args, options))
}

export async function postSignout(
  args: InferRequestType<typeof client.signout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signout.$post(args, options))
}

export async function getPing(options?: ClientRequestOptions) {
  return await parseResponse(client.ping.$get(undefined, options))
}

export async function headPing(options?: ClientRequestOptions) {
  return await parseResponse(client.ping.$head(undefined, options))
}

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function getDbrps(
  args: InferRequestType<typeof client.dbrps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dbrps.$get(args, options))
}

export async function postDbrps(
  args: InferRequestType<typeof client.dbrps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dbrps.$post(args, options))
}

export async function getDbrpsDbrpID(
  args: InferRequestType<(typeof client.dbrps)[':dbrpID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dbrps[':dbrpID'].$get(args, options))
}

export async function deleteDbrpsDbrpID(
  args: InferRequestType<(typeof client.dbrps)[':dbrpID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dbrps[':dbrpID'].$delete(args, options))
}

export async function patchDbrpsDbrpID(
  args: InferRequestType<(typeof client.dbrps)[':dbrpID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dbrps[':dbrpID'].$patch(args, options))
}

export async function getTelegrafPlugins(
  args: InferRequestType<typeof client.telegraf.plugins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telegraf.plugins.$get(args, options))
}

export async function getTelegrafs(
  args: InferRequestType<typeof client.telegrafs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telegrafs.$get(args, options))
}

export async function postTelegrafs(
  args: InferRequestType<typeof client.telegrafs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telegrafs.$post(args, options))
}

export async function getTelegrafsTelegrafID(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telegrafs[':telegrafID'].$get(args, options))
}

export async function putTelegrafsTelegrafID(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telegrafs[':telegrafID'].$put(args, options))
}

export async function deleteTelegrafsTelegrafID(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telegrafs[':telegrafID'].$delete(args, options))
}

export async function getTelegrafsTelegrafIDLabels(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telegrafs[':telegrafID'].labels.$get(args, options))
}

export async function postTelegrafsTelegrafIDLabels(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telegrafs[':telegrafID'].labels.$post(args, options))
}

export async function deleteTelegrafsTelegrafIDLabelsLabelID(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels'][':labelID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.telegrafs[':telegrafID'].labels[':labelID'].$delete(args, options),
  )
}

export async function getTelegrafsTelegrafIDMembers(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telegrafs[':telegrafID'].members.$get(args, options))
}

export async function postTelegrafsTelegrafIDMembers(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telegrafs[':telegrafID'].members.$post(args, options))
}

export async function deleteTelegrafsTelegrafIDMembersUserID(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['members'][':userID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.telegrafs[':telegrafID'].members[':userID'].$delete(args, options),
  )
}

export async function getTelegrafsTelegrafIDOwners(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telegrafs[':telegrafID'].owners.$get(args, options))
}

export async function postTelegrafsTelegrafIDOwners(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telegrafs[':telegrafID'].owners.$post(args, options))
}

export async function deleteTelegrafsTelegrafIDOwnersUserID(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners'][':userID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.telegrafs[':telegrafID'].owners[':userID'].$delete(args, options),
  )
}

export async function getVariablesVariableIDLabels(
  args: InferRequestType<(typeof client.variables)[':variableID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables[':variableID'].labels.$get(args, options))
}

export async function postVariablesVariableIDLabels(
  args: InferRequestType<(typeof client.variables)[':variableID']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables[':variableID'].labels.$post(args, options))
}

export async function deleteVariablesVariableIDLabelsLabelID(
  args: InferRequestType<(typeof client.variables)[':variableID']['labels'][':labelID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.variables[':variableID'].labels[':labelID'].$delete(args, options),
  )
}

export async function postWrite(
  args: InferRequestType<typeof client.write.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.write.$post(args, options))
}

export async function postDelete(
  args: InferRequestType<typeof client.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delete.$post(args, options))
}

export async function getLabels(
  args: InferRequestType<typeof client.labels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels.$get(args, options))
}

export async function postLabels(
  args: InferRequestType<typeof client.labels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels.$post(args, options))
}

export async function getLabelsLabelID(
  args: InferRequestType<(typeof client.labels)[':labelID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':labelID'].$get(args, options))
}

export async function deleteLabelsLabelID(
  args: InferRequestType<(typeof client.labels)[':labelID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':labelID'].$delete(args, options))
}

export async function patchLabelsLabelID(
  args: InferRequestType<(typeof client.labels)[':labelID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':labelID'].$patch(args, options))
}

export async function getDashboardsDashboardID(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardID'].$get(args, options))
}

export async function deleteDashboardsDashboardID(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardID'].$delete(args, options))
}

export async function patchDashboardsDashboardID(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardID'].$patch(args, options))
}

export async function putDashboardsDashboardIDCells(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['cells']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardID'].cells.$put(args, options))
}

export async function postDashboardsDashboardIDCells(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['cells']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardID'].cells.$post(args, options))
}

export async function deleteDashboardsDashboardIDCellsCellID(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards[':dashboardID'].cells[':cellID'].$delete(args, options),
  )
}

export async function patchDashboardsDashboardIDCellsCellID(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards[':dashboardID'].cells[':cellID'].$patch(args, options),
  )
}

export async function getDashboardsDashboardIDCellsCellIDView(
  args: InferRequestType<
    (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards[':dashboardID'].cells[':cellID'].view.$get(args, options),
  )
}

export async function patchDashboardsDashboardIDCellsCellIDView(
  args: InferRequestType<
    (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards[':dashboardID'].cells[':cellID'].view.$patch(args, options),
  )
}

export async function getDashboardsDashboardIDLabels(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardID'].labels.$get(args, options))
}

export async function postDashboardsDashboardIDLabels(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardID'].labels.$post(args, options))
}

export async function deleteDashboardsDashboardIDLabelsLabelID(
  args: InferRequestType<
    (typeof client.dashboards)[':dashboardID']['labels'][':labelID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards[':dashboardID'].labels[':labelID'].$delete(args, options),
  )
}

export async function getDashboardsDashboardIDMembers(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardID'].members.$get(args, options))
}

export async function postDashboardsDashboardIDMembers(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardID'].members.$post(args, options))
}

export async function deleteDashboardsDashboardIDMembersUserID(
  args: InferRequestType<
    (typeof client.dashboards)[':dashboardID']['members'][':userID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards[':dashboardID'].members[':userID'].$delete(args, options),
  )
}

export async function getDashboardsDashboardIDOwners(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardID'].owners.$get(args, options))
}

export async function postDashboardsDashboardIDOwners(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardID'].owners.$post(args, options))
}

export async function deleteDashboardsDashboardIDOwnersUserID(
  args: InferRequestType<
    (typeof client.dashboards)[':dashboardID']['owners'][':userID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dashboards[':dashboardID'].owners[':userID'].$delete(args, options),
  )
}

export async function postQueryAst(
  args: InferRequestType<typeof client.query.ast.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.ast.$post(args, options))
}

export async function getQuerySuggestions(
  args: InferRequestType<typeof client.query.suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.suggestions.$get(args, options))
}

export async function getQuerySuggestionsName(
  args: InferRequestType<(typeof client.query.suggestions)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.suggestions[':name'].$get(args, options))
}

export async function postQueryAnalyze(
  args: InferRequestType<typeof client.query.analyze.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.analyze.$post(args, options))
}

export async function postQuery(
  args: InferRequestType<typeof client.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.$post(args, options))
}

export async function getBuckets(
  args: InferRequestType<typeof client.buckets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets.$get(args, options))
}

export async function postBuckets(
  args: InferRequestType<typeof client.buckets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets.$post(args, options))
}

export async function getBucketsBucketID(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucketID'].$get(args, options))
}

export async function deleteBucketsBucketID(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucketID'].$delete(args, options))
}

export async function patchBucketsBucketID(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucketID'].$patch(args, options))
}

export async function getBucketsBucketIDLabels(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucketID'].labels.$get(args, options))
}

export async function postBucketsBucketIDLabels(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucketID'].labels.$post(args, options))
}

export async function deleteBucketsBucketIDLabelsLabelID(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['labels'][':labelID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucketID'].labels[':labelID'].$delete(args, options))
}

export async function getBucketsBucketIDMembers(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucketID'].members.$get(args, options))
}

export async function postBucketsBucketIDMembers(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucketID'].members.$post(args, options))
}

export async function deleteBucketsBucketIDMembersUserID(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['members'][':userID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucketID'].members[':userID'].$delete(args, options))
}

export async function getBucketsBucketIDOwners(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucketID'].owners.$get(args, options))
}

export async function postBucketsBucketIDOwners(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucketID'].owners.$post(args, options))
}

export async function deleteBucketsBucketIDOwnersUserID(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['owners'][':userID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckets[':bucketID'].owners[':userID'].$delete(args, options))
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

export async function getOrgsOrgID(
  args: InferRequestType<(typeof client.orgs)[':orgID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].$get(args, options))
}

export async function deleteOrgsOrgID(
  args: InferRequestType<(typeof client.orgs)[':orgID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].$delete(args, options))
}

export async function patchOrgsOrgID(
  args: InferRequestType<(typeof client.orgs)[':orgID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].$patch(args, options))
}

export async function getOrgsOrgIDSecrets(
  args: InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].secrets.$get(args, options))
}

export async function patchOrgsOrgIDSecrets(
  args: InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].secrets.$patch(args, options))
}

export async function getOrgsOrgIDMembers(
  args: InferRequestType<(typeof client.orgs)[':orgID']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].members.$get(args, options))
}

export async function postOrgsOrgIDMembers(
  args: InferRequestType<(typeof client.orgs)[':orgID']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].members.$post(args, options))
}

export async function deleteOrgsOrgIDMembersUserID(
  args: InferRequestType<(typeof client.orgs)[':orgID']['members'][':userID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].members[':userID'].$delete(args, options))
}

export async function getOrgsOrgIDOwners(
  args: InferRequestType<(typeof client.orgs)[':orgID']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].owners.$get(args, options))
}

export async function postOrgsOrgIDOwners(
  args: InferRequestType<(typeof client.orgs)[':orgID']['owners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].owners.$post(args, options))
}

export async function deleteOrgsOrgIDOwnersUserID(
  args: InferRequestType<(typeof client.orgs)[':orgID']['owners'][':userID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].owners[':userID'].$delete(args, options))
}

export async function postOrgsOrgIDSecretsDelete(
  args: InferRequestType<(typeof client.orgs)[':orgID']['secrets']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].secrets.delete.$post(args, options))
}

export async function deleteOrgsOrgIDSecretsSecretID(
  args: InferRequestType<(typeof client.orgs)[':orgID']['secrets'][':secretID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgID'].secrets[':secretID'].$delete(args, options))
}

export async function getResources(
  args: InferRequestType<typeof client.resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.$get(args, options))
}

export async function getStacks(
  args: InferRequestType<typeof client.stacks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.$get(args, options))
}

export async function postStacks(
  args: InferRequestType<typeof client.stacks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.$post(args, options))
}

export async function getStacksStackId(
  args: InferRequestType<(typeof client.stacks)[':stack_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':stack_id'].$get(args, options))
}

export async function deleteStacksStackId(
  args: InferRequestType<(typeof client.stacks)[':stack_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':stack_id'].$delete(args, options))
}

export async function patchStacksStackId(
  args: InferRequestType<(typeof client.stacks)[':stack_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':stack_id'].$patch(args, options))
}

export async function postStacksStackIdUninstall(
  args: InferRequestType<(typeof client.stacks)[':stack_id']['uninstall']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':stack_id'].uninstall.$post(args, options))
}

export async function postTemplatesApply(
  args: InferRequestType<typeof client.templates.apply.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.apply.$post(args, options))
}

export async function postTemplatesExport(
  args: InferRequestType<typeof client.templates.export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.export.$post(args, options))
}

export async function getTasksTaskIDRuns(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].runs.$get(args, options))
}

export async function postTasksTaskIDRuns(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].runs.$post(args, options))
}

export async function getTasksTaskIDRunsRunID(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].runs[':runID'].$get(args, options))
}

export async function deleteTasksTaskIDRunsRunID(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].runs[':runID'].$delete(args, options))
}

export async function postTasksTaskIDRunsRunIDRetry(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].runs[':runID'].retry.$post(args, options))
}

export async function getTasksTaskIDLogs(
  args: InferRequestType<(typeof client.tasks)[':taskID']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].logs.$get(args, options))
}

export async function getTasksTaskIDRunsRunIDLogs(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].runs[':runID'].logs.$get(args, options))
}

export async function getTasksTaskIDLabels(
  args: InferRequestType<(typeof client.tasks)[':taskID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].labels.$get(args, options))
}

export async function postTasksTaskIDLabels(
  args: InferRequestType<(typeof client.tasks)[':taskID']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].labels.$post(args, options))
}

export async function deleteTasksTaskIDLabelsLabelID(
  args: InferRequestType<(typeof client.tasks)[':taskID']['labels'][':labelID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].labels[':labelID'].$delete(args, options))
}

export async function getFlags(
  args: InferRequestType<typeof client.flags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flags.$get(args, options))
}

export async function getMe(
  args: InferRequestType<typeof client.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.$get(args, options))
}

export async function putMePassword(
  args: InferRequestType<typeof client.me.password.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.password.$put(args, options))
}

export async function getTasksTaskIDMembers(
  args: InferRequestType<(typeof client.tasks)[':taskID']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].members.$get(args, options))
}

export async function postTasksTaskIDMembers(
  args: InferRequestType<(typeof client.tasks)[':taskID']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].members.$post(args, options))
}

export async function deleteTasksTaskIDMembersUserID(
  args: InferRequestType<(typeof client.tasks)[':taskID']['members'][':userID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].members[':userID'].$delete(args, options))
}

export async function getTasksTaskIDOwners(
  args: InferRequestType<(typeof client.tasks)[':taskID']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].owners.$get(args, options))
}

export async function postTasksTaskIDOwners(
  args: InferRequestType<(typeof client.tasks)[':taskID']['owners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].owners.$post(args, options))
}

export async function deleteTasksTaskIDOwnersUserID(
  args: InferRequestType<(typeof client.tasks)[':taskID']['owners'][':userID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].owners[':userID'].$delete(args, options))
}

export async function putUsersUserIDPassword(
  args: InferRequestType<(typeof client.users)[':userID']['password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userID'].password.$put(args, options))
}

export async function postUsersUserIDPassword(
  args: InferRequestType<(typeof client.users)[':userID']['password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userID'].password.$post(args, options))
}

export async function getChecks(
  args: InferRequestType<typeof client.checks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks.$get(args, options))
}

export async function postChecks(
  args: InferRequestType<typeof client.checks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks.$post(args, options))
}

export async function getChecksCheckID(
  args: InferRequestType<(typeof client.checks)[':checkID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks[':checkID'].$get(args, options))
}

export async function putChecksCheckID(
  args: InferRequestType<(typeof client.checks)[':checkID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks[':checkID'].$put(args, options))
}

export async function deleteChecksCheckID(
  args: InferRequestType<(typeof client.checks)[':checkID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks[':checkID'].$delete(args, options))
}

export async function patchChecksCheckID(
  args: InferRequestType<(typeof client.checks)[':checkID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks[':checkID'].$patch(args, options))
}

export async function getChecksCheckIDLabels(
  args: InferRequestType<(typeof client.checks)[':checkID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks[':checkID'].labels.$get(args, options))
}

export async function postChecksCheckIDLabels(
  args: InferRequestType<(typeof client.checks)[':checkID']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks[':checkID'].labels.$post(args, options))
}

export async function deleteChecksCheckIDLabelsLabelID(
  args: InferRequestType<(typeof client.checks)[':checkID']['labels'][':labelID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks[':checkID'].labels[':labelID'].$delete(args, options))
}

export async function getNotificationRules(
  args: InferRequestType<typeof client.notificationRules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationRules.$get(args, options))
}

export async function postNotificationRules(
  args: InferRequestType<typeof client.notificationRules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationRules.$post(args, options))
}

export async function getChecksCheckIDQuery(
  args: InferRequestType<(typeof client.checks)[':checkID']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks[':checkID'].query.$get(args, options))
}

export async function getNotificationRulesRuleID(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationRules[':ruleID'].$get(args, options))
}

export async function putNotificationRulesRuleID(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationRules[':ruleID'].$put(args, options))
}

export async function deleteNotificationRulesRuleID(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationRules[':ruleID'].$delete(args, options))
}

export async function patchNotificationRulesRuleID(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationRules[':ruleID'].$patch(args, options))
}

export async function getNotificationRulesRuleIDLabels(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationRules[':ruleID'].labels.$get(args, options))
}

export async function postNotificationRulesRuleIDLabels(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationRules[':ruleID'].labels.$post(args, options))
}

export async function deleteNotificationRulesRuleIDLabelsLabelID(
  args: InferRequestType<
    (typeof client.notificationRules)[':ruleID']['labels'][':labelID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notificationRules[':ruleID'].labels[':labelID'].$delete(args, options),
  )
}

export async function getNotificationRulesRuleIDQuery(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationRules[':ruleID'].query.$get(args, options))
}

export async function getNotificationEndpoints(
  args: InferRequestType<typeof client.notificationEndpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationEndpoints.$get(args, options))
}

export async function postNotificationEndpoints(
  args: InferRequestType<typeof client.notificationEndpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationEndpoints.$post(args, options))
}

export async function getNotificationEndpointsEndpointID(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationEndpoints[':endpointID'].$get(args, options))
}

export async function putNotificationEndpointsEndpointID(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationEndpoints[':endpointID'].$put(args, options))
}

export async function deleteNotificationEndpointsEndpointID(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationEndpoints[':endpointID'].$delete(args, options))
}

export async function patchNotificationEndpointsEndpointID(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationEndpoints[':endpointID'].$patch(args, options))
}

export async function getNotificationEndpointsEndpointIDLabels(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notificationEndpoints[':endpointID'].labels.$get(args, options))
}

export async function postNotificationEndpointsEndpointIDLabels(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notificationEndpoints[':endpointID'].labels.$post(args, options),
  )
}

export async function deleteNotificationEndpointsEndpointIDLabelsLabelID(
  args: InferRequestType<
    (typeof client.notificationEndpoints)[':endpointID']['labels'][':labelID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notificationEndpoints[':endpointID'].labels[':labelID'].$delete(args, options),
  )
}

export async function getAuthorizations(
  args: InferRequestType<typeof client.authorizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorizations.$get(args, options))
}

export async function postAuthorizations(
  args: InferRequestType<typeof client.authorizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorizations.$post(args, options))
}

export async function getAuthorizationsAuthID(
  args: InferRequestType<(typeof client.authorizations)[':authID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorizations[':authID'].$get(args, options))
}

export async function deleteAuthorizationsAuthID(
  args: InferRequestType<(typeof client.authorizations)[':authID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorizations[':authID'].$delete(args, options))
}

export async function patchAuthorizationsAuthID(
  args: InferRequestType<(typeof client.authorizations)[':authID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorizations[':authID'].$patch(args, options))
}

export async function getDebugPprofAll(
  args: InferRequestType<typeof client.debug.pprof.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.pprof.all.$get(args, options))
}

export async function getDebugPprofAllocs(
  args: InferRequestType<typeof client.debug.pprof.allocs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.pprof.allocs.$get(args, options))
}

export async function getDebugPprofBlock(
  args: InferRequestType<typeof client.debug.pprof.block.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.pprof.block.$get(args, options))
}

export async function getDebugPprofCmdline(
  args: InferRequestType<typeof client.debug.pprof.cmdline.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.pprof.cmdline.$get(args, options))
}

export async function getDebugPprofGoroutine(
  args: InferRequestType<typeof client.debug.pprof.goroutine.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.pprof.goroutine.$get(args, options))
}

export async function getDebugPprofHeap(
  args: InferRequestType<typeof client.debug.pprof.heap.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.pprof.heap.$get(args, options))
}

export async function getDebugPprofMutex(
  args: InferRequestType<typeof client.debug.pprof.mutex.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.pprof.mutex.$get(args, options))
}

export async function getDebugPprofProfile(
  args: InferRequestType<typeof client.debug.pprof.profile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.pprof.profile.$get(args, options))
}

export async function getDebugPprofThreadcreate(
  args: InferRequestType<typeof client.debug.pprof.threadcreate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.pprof.threadcreate.$get(args, options))
}

export async function getDebugPprofTrace(
  args: InferRequestType<typeof client.debug.pprof.trace.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.pprof.trace.$get(args, options))
}

export async function getHealth(
  args: InferRequestType<typeof client.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.$get(args, options))
}

export async function getMetrics(
  args: InferRequestType<typeof client.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.$get(args, options))
}

export async function getReady(
  args: InferRequestType<typeof client.ready.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ready.$get(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersUserID(
  args: InferRequestType<(typeof client.users)[':userID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userID'].$get(args, options))
}

export async function deleteUsersUserID(
  args: InferRequestType<(typeof client.users)[':userID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userID'].$delete(args, options))
}

export async function patchUsersUserID(
  args: InferRequestType<(typeof client.users)[':userID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userID'].$patch(args, options))
}

export async function getSetup(
  args: InferRequestType<typeof client.setup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.$get(args, options))
}

export async function postSetup(
  args: InferRequestType<typeof client.setup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setup.$post(args, options))
}

export async function getVariables(
  args: InferRequestType<typeof client.variables.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables.$get(args, options))
}

export async function postVariables(
  args: InferRequestType<typeof client.variables.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables.$post(args, options))
}

export async function getVariablesVariableID(
  args: InferRequestType<(typeof client.variables)[':variableID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables[':variableID'].$get(args, options))
}

export async function putVariablesVariableID(
  args: InferRequestType<(typeof client.variables)[':variableID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables[':variableID'].$put(args, options))
}

export async function deleteVariablesVariableID(
  args: InferRequestType<(typeof client.variables)[':variableID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables[':variableID'].$delete(args, options))
}

export async function patchVariablesVariableID(
  args: InferRequestType<(typeof client.variables)[':variableID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables[':variableID'].$patch(args, options))
}

export async function getSources(
  args: InferRequestType<typeof client.sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.$get(args, options))
}

export async function postSources(
  args: InferRequestType<typeof client.sources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.$post(args, options))
}

export async function getSourcesSourceID(
  args: InferRequestType<(typeof client.sources)[':sourceID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':sourceID'].$get(args, options))
}

export async function deleteSourcesSourceID(
  args: InferRequestType<(typeof client.sources)[':sourceID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':sourceID'].$delete(args, options))
}

export async function patchSourcesSourceID(
  args: InferRequestType<(typeof client.sources)[':sourceID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':sourceID'].$patch(args, options))
}

export async function getSourcesSourceIDHealth(
  args: InferRequestType<(typeof client.sources)[':sourceID']['health']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':sourceID'].health.$get(args, options))
}

export async function getSourcesSourceIDBuckets(
  args: InferRequestType<(typeof client.sources)[':sourceID']['buckets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':sourceID'].buckets.$get(args, options))
}

export async function getScrapers(
  args: InferRequestType<typeof client.scrapers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrapers.$get(args, options))
}

export async function postScrapers(
  args: InferRequestType<typeof client.scrapers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrapers.$post(args, options))
}

export async function getScrapersScraperTargetID(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrapers[':scraperTargetID'].$get(args, options))
}

export async function deleteScrapersScraperTargetID(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrapers[':scraperTargetID'].$delete(args, options))
}

export async function patchScrapersScraperTargetID(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrapers[':scraperTargetID'].$patch(args, options))
}

export async function getScrapersScraperTargetIDLabels(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrapers[':scraperTargetID'].labels.$get(args, options))
}

export async function postScrapersScraperTargetIDLabels(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrapers[':scraperTargetID'].labels.$post(args, options))
}

export async function deleteScrapersScraperTargetIDLabelsLabelID(
  args: InferRequestType<
    (typeof client.scrapers)[':scraperTargetID']['labels'][':labelID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scrapers[':scraperTargetID'].labels[':labelID'].$delete(args, options),
  )
}

export async function getScrapersScraperTargetIDMembers(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrapers[':scraperTargetID'].members.$get(args, options))
}

export async function postScrapersScraperTargetIDMembers(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrapers[':scraperTargetID'].members.$post(args, options))
}

export async function deleteScrapersScraperTargetIDMembersUserID(
  args: InferRequestType<
    (typeof client.scrapers)[':scraperTargetID']['members'][':userID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scrapers[':scraperTargetID'].members[':userID'].$delete(args, options),
  )
}

export async function getScrapersScraperTargetIDOwners(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrapers[':scraperTargetID'].owners.$get(args, options))
}

export async function postScrapersScraperTargetIDOwners(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrapers[':scraperTargetID'].owners.$post(args, options))
}

export async function deleteScrapersScraperTargetIDOwnersUserID(
  args: InferRequestType<
    (typeof client.scrapers)[':scraperTargetID']['owners'][':userID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scrapers[':scraperTargetID'].owners[':userID'].$delete(args, options),
  )
}

export async function getBackupKv(
  args: InferRequestType<typeof client.backup.kv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backup.kv.$get(args, options))
}

export async function getBackupMetadata(
  args: InferRequestType<typeof client.backup.metadata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backup.metadata.$get(args, options))
}

export async function getBackupShardsShardID(
  args: InferRequestType<(typeof client.backup.shards)[':shardID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backup.shards[':shardID'].$get(args, options))
}

export async function postRestoreKv(
  args: InferRequestType<typeof client.restore.kv.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restore.kv.$post(args, options))
}

export async function postRestoreSql(
  args: InferRequestType<typeof client.restore.sql.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restore.sql.$post(args, options))
}

export async function postRestoreBucketBucketID(
  args: InferRequestType<(typeof client.restore.bucket)[':bucketID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restore.bucket[':bucketID'].$post(args, options))
}

export async function postRestoreBucketMetadata(
  args: InferRequestType<typeof client.restore.bucketMetadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restore.bucketMetadata.$post(args, options))
}

export async function postRestoreShardsShardID(
  args: InferRequestType<(typeof client.restore.shards)[':shardID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restore.shards[':shardID'].$post(args, options))
}

export async function getConfig(
  args: InferRequestType<typeof client.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.$get(args, options))
}

export async function getRemotes(
  args: InferRequestType<typeof client.remotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remotes.$get(args, options))
}

export async function postRemotes(
  args: InferRequestType<typeof client.remotes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remotes.$post(args, options))
}

export async function getRemotesRemoteID(
  args: InferRequestType<(typeof client.remotes)[':remoteID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remotes[':remoteID'].$get(args, options))
}

export async function deleteRemotesRemoteID(
  args: InferRequestType<(typeof client.remotes)[':remoteID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remotes[':remoteID'].$delete(args, options))
}

export async function patchRemotesRemoteID(
  args: InferRequestType<(typeof client.remotes)[':remoteID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remotes[':remoteID'].$patch(args, options))
}

export async function getReplications(
  args: InferRequestType<typeof client.replications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.replications.$get(args, options))
}

export async function postReplications(
  args: InferRequestType<typeof client.replications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.replications.$post(args, options))
}

export async function getReplicationsReplicationID(
  args: InferRequestType<(typeof client.replications)[':replicationID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.replications[':replicationID'].$get(args, options))
}

export async function deleteReplicationsReplicationID(
  args: InferRequestType<(typeof client.replications)[':replicationID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.replications[':replicationID'].$delete(args, options))
}

export async function patchReplicationsReplicationID(
  args: InferRequestType<(typeof client.replications)[':replicationID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.replications[':replicationID'].$patch(args, options))
}

export async function postReplicationsReplicationIDValidate(
  args: InferRequestType<(typeof client.replications)[':replicationID']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.replications[':replicationID'].validate.$post(args, options))
}

export async function getDashboards(
  args: InferRequestType<typeof client.dashboards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.$get(args, options))
}

export async function postDashboards(
  args: InferRequestType<typeof client.dashboards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.$post(args, options))
}

export async function getTasks(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.$get(args, options))
}

export async function postTasks(
  args: InferRequestType<typeof client.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.$post(args, options))
}

export async function getTasksTaskID(
  args: InferRequestType<(typeof client.tasks)[':taskID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].$get(args, options))
}

export async function deleteTasksTaskID(
  args: InferRequestType<(typeof client.tasks)[':taskID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].$delete(args, options))
}

export async function patchTasksTaskID(
  args: InferRequestType<(typeof client.tasks)[':taskID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskID'].$patch(args, options))
}
