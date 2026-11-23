import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putAddon(options?: ClientRequestOptions) {
  return await parseResponse(client.addon.$put(undefined, options))
}

export async function deleteAddon(options?: ClientRequestOptions) {
  return await parseResponse(client.addon.$delete(undefined, options))
}

export async function getAddonLinkers(options?: ClientRequestOptions) {
  return await parseResponse(client.addon.linkers.$get(undefined, options))
}

export async function getAddonLinkersLinkerKey(
  args: InferRequestType<(typeof client.addon.linkers)[':linker_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addon.linkers[':linker_key'].$get(args, options))
}

export async function getAddonLinkersLinkerKeyValues(
  args: InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addon.linkers[':linker_key'].values.$get(args, options))
}

export async function putAddonLinkersLinkerKeyValues(
  args: InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addon.linkers[':linker_key'].values.$put(args, options))
}

export async function postAddonLinkersLinkerKeyValues(
  args: InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addon.linkers[':linker_key'].values.$post(args, options))
}

export async function deleteAddonLinkersLinkerKeyValues(
  args: InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addon.linkers[':linker_key'].values.$delete(args, options))
}

export async function getAddonLinkersLinkerKeyValuesValueId(
  args: InferRequestType<
    (typeof client.addon.linkers)[':linker_key']['values'][':value_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.addon.linkers[':linker_key'].values[':value_id'].$get(args, options),
  )
}

export async function deleteAddonLinkersLinkerKeyValuesValueId(
  args: InferRequestType<
    (typeof client.addon.linkers)[':linker_key']['values'][':value_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.addon.linkers[':linker_key'].values[':value_id'].$delete(args, options),
  )
}

export async function getHookEvents(options?: ClientRequestOptions) {
  return await parseResponse(client.hook_events.$get(undefined, options))
}

export async function getHookEventsSubjectType(
  args: InferRequestType<(typeof client.hook_events)[':subject_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hook_events[':subject_type'].$get(args, options))
}

export async function getPullrequestsSelectedUser(
  args: InferRequestType<(typeof client.pullrequests)[':selected_user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pullrequests[':selected_user'].$get(args, options))
}

export async function getRepositories(
  args: InferRequestType<typeof client.repositories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repositories.$get(args, options))
}

export async function getRepositoriesWorkspace(
  args: InferRequestType<(typeof client.repositories)[':workspace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repositories[':workspace'].$get(args, options))
}

export async function getRepositoriesWorkspaceRepoSlug(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repositories[':workspace'][':repo_slug'].$get(args, options))
}

export async function putRepositoriesWorkspaceRepoSlug(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repositories[':workspace'][':repo_slug'].$put(args, options))
}

export async function postRepositoriesWorkspaceRepoSlug(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repositories[':workspace'][':repo_slug'].$post(args, options))
}

export async function deleteRepositoriesWorkspaceRepoSlug(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repositories[':workspace'][':repo_slug'].$delete(args, options))
}

export async function getRepositoriesWorkspaceRepoSlugBranchRestrictions(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['branch-restrictions'].$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugBranchRestrictions(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['branch-restrictions'].$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugBranchRestrictionsId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['branch-restrictions'][':id'].$get(
      args,
      options,
    ),
  )
}

export async function putRepositoriesWorkspaceRepoSlugBranchRestrictionsId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['branch-restrictions'][':id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['branch-restrictions'][':id'].$delete(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugBranchingModel(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['branching-model'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugBranchingModelSettings(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['branching-model'].settings.$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugBranchingModelSettings(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['branching-model'].settings.$put(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommitCommit(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugCommitCommitApprove(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].approve.$post(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].approve.$delete(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommitCommitComments(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugCommitCommitComments(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments[':comment_id'].$get(
      args,
      options,
    ),
  )
}

export async function putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments[':comment_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments[
      ':comment_id'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].properties[':app_key'][
      ':property_name'
    ].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].properties[':app_key'][
      ':property_name'
    ].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].properties[':app_key'][
      ':property_name'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommitCommitPullrequests(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].pullrequests.$get(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommitCommitReports(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports.$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[':reportId'].$get(
      args,
      options,
    ),
  )
}

export async function putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[':reportId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[':reportId'].$delete(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotations(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
      ':reportId'
    ].annotations.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotations(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
      ':reportId'
    ].annotations.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
      ':reportId'
    ].annotations[':annotationId'].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
      ':reportId'
    ].annotations[':annotationId'].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
      ':reportId'
    ].annotations[':annotationId'].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommitCommitStatuses(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.build.$post(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.build[':key'].$get(
      args,
      options,
    ),
  )
}

export async function putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.build[':key'].$put(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommits(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commits.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugCommits(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commits.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugCommitsRevision(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commits[':revision'].$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugCommitsRevision(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].commits[':revision'].$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugComponents(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['components']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].components.$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugComponentsComponentId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['components'][':component_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].components[':component_id'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugDefaultReviewers(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['default-reviewers'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['default-reviewers'][':target_username'].$get(
      args,
      options,
    ),
  )
}

export async function putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['default-reviewers'][':target_username'].$put(
      args,
      options,
    ),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['default-reviewers'][
      ':target_username'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugDeployKeys(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['deploy-keys'].$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugDeployKeys(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['deploy-keys'].$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugDeployKeysKeyId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['deploy-keys'][':key_id'].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugDeployKeysKeyId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['deploy-keys'][':key_id'].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['deploy-keys'][':key_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugDeploymentsIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].deployments.index.$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].deployments[':deployment_uuid'].$get(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariables(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
      ':environment_uuid'
    ].variables.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariables(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
      ':environment_uuid'
    ].variables.$post(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
      ':environment_uuid'
    ].variables[':variable_uuid'].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
      ':environment_uuid'
    ].variables[':variable_uuid'].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugDiffSpec(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].diff[':spec'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugDiffstatSpec(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].diffstat[':spec'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugDownloads(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].downloads.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugDownloads(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].downloads.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugDownloadsFilename(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].downloads[':filename'].$get(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugDownloadsFilename(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].downloads[':filename'].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugEffectiveBranchingModel(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['effective-branching-model'].$get(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['effective-default-reviewers'].$get(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugEnvironmentsIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].environments.index.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugEnvironmentsIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].environments.index.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].environments[':environment_uuid'].$get(
      args,
      options,
    ),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].environments[':environment_uuid'].$delete(
      args,
      options,
    ),
  )
}

export async function postRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['changes']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].environments[
      ':environment_uuid'
    ].changes.index.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugFilehistoryCommitPath(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].filehistory[':commit'][':path'].$get(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugForks(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].forks.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugForks(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['forks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].forks.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugHooks(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].hooks.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugHooks(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].hooks.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugHooksUid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].hooks[':uid'].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugHooksUid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].hooks[':uid'].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugHooksUid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].hooks[':uid'].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugIssues(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugIssues(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues.$post(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugIssuesExport(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['export']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues.export.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['export'][':repo_name-issues-:task_id.zip']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues.export[
      ':repo_name-issues-:task_id.zip'
    ].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugIssuesImport(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['import']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues.import.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugIssuesImport(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues.import.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugIssuesIssueId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugIssuesIssueId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugIssuesIssueId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].attachments.$get(
      args,
      options,
    ),
  )
}

export async function postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].attachments.$post(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].attachments[':path'].$get(
      args,
      options,
    ),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].attachments[
      ':path'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].changes.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].changes.$post(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes'][':change_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].changes[':change_id'].$get(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].comments.$get(
      args,
      options,
    ),
  )
}

export async function postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].comments.$post(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].comments[
      ':comment_id'
    ].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].comments[
      ':comment_id'
    ].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].comments[
      ':comment_id'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].vote.$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].vote.$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].vote.$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].watch.$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].watch.$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].watch.$delete(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugMergeBaseRevspec(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['merge-base'][':revspec'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugMilestones(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['milestones']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].milestones.$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['milestones'][':milestone_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].milestones[':milestone_id'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugOverrideSettings(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['override-settings'].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugOverrideSettings(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['override-settings'].$put(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPatchSpec(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].patch[':spec'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPermissionsConfigGroups(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['permissions-config'].groups.$get(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['permissions-config'].groups[
      ':group_slug'
    ].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['permissions-config'].groups[
      ':group_slug'
    ].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['permissions-config'].groups[
      ':group_slug'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPermissionsConfigUsers(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['permissions-config'].users.$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['permissions-config'].users[
      ':selected_user_id'
    ].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['permissions-config'].users[
      ':selected_user_id'
    ].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['permissions-config'].users[
      ':selected_user_id'
    ].$delete(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCaches(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches.$delete(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches.index.$get(
      args,
      options,
    ),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches[
      ':cache_uuid'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUri(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches[':cache_uuid'][
      'content-uri'
    ].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines.index.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugPipelinesIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines.index.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps.index.$get(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
      ':step_uuid'
    ].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLog(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
      ':step_uuid'
    ].log.$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
      ':step_uuid'
    ].logs[':log_uuid'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReports(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
      ':step_uuid'
    ].test_reports.$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCases(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
      ':step_uuid'
    ].test_reports.test_cases.$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasons(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
      ':step_uuid'
    ].test_reports.test_cases[':test_case_uuid'].test_case_reasons.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipeline(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['stopPipeline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].stopPipeline.$post(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesConfig(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugPipelinesConfig(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.$put(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumber(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['build_number']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.build_number.$put(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules.index.$get(
      args,
      options,
    ),
  )
}

export async function postRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules.index.$post(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
      ':schedule_uuid'
    ].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
      ':schedule_uuid'
    ].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
      ':schedule_uuid'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
      ':schedule_uuid'
    ].executions.index.$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.key_pair.$get(
      args,
      options,
    ),
  )
}

export async function putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.key_pair.$put(
      args,
      options,
    ),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.key_pair.$delete(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts.index.$get(
      args,
      options,
    ),
  )
}

export async function postRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts.index.$post(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts[
      ':known_host_uuid'
    ].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts[
      ':known_host_uuid'
    ].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts[
      ':known_host_uuid'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.variables.index.$get(
      args,
      options,
    ),
  )
}

export async function postRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndex(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.variables.index.$post(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.variables[
      ':variable_uuid'
    ].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.variables[
      ':variable_uuid'
    ].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pipelines_config.variables[
      ':variable_uuid'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].properties[':app_key'][':property_name'].$get(
      args,
      options,
    ),
  )
}

export async function putRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].properties[':app_key'][':property_name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].properties[':app_key'][
      ':property_name'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequests(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugPullrequests(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequestsActivity(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests.activity.$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].$get(
      args,
      options,
    ),
  )
}

export async function putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].$put(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].activity.$get(
      args,
      options,
    ),
  )
}

export async function postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].approve.$post(
      args,
      options,
    ),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[
      ':pull_request_id'
    ].approve.$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments.$get(
      args,
      options,
    ),
  )
}

export async function postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments.$post(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
      ':comment_id'
    ].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
      ':comment_id'
    ].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
      ':comment_id'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].commits.$get(
      args,
      options,
    ),
  )
}

export async function postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['decline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].decline.$post(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].diff.$get(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].diffstat.$get(
      args,
      options,
    ),
  )
}

export async function postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].merge.$post(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].merge[
      'task-status'
    ][':task_id'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].patch.$get(
      args,
      options,
    ),
  )
}

export async function postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'][
      'request-changes'
    ].$post(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'][
      'request-changes'
    ].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].statuses.$get(
      args,
      options,
    ),
  )
}

export async function getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pullrequest_id'].properties[
      ':app_key'
    ][':property_name'].$get(args, options),
  )
}

export async function putRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pullrequest_id'].properties[
      ':app_key'
    ][':property_name'].$put(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].pullrequests[':pullrequest_id'].properties[
      ':app_key'
    ][':property_name'].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugRefs(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].refs.$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugRefsBranches(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].refs.branches.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugRefsBranches(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].refs.branches.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugRefsBranchesName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].refs.branches[':name'].$get(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugRefsBranchesName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].refs.branches[':name'].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugRefsTags(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].refs.tags.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugRefsTags(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].refs.tags.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugRefsTagsName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].refs.tags[':name'].$get(args, options),
  )
}

export async function deleteRepositoriesWorkspaceRepoSlugRefsTagsName(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].refs.tags[':name'].$delete(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugSrc(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].src.$get(args, options),
  )
}

export async function postRepositoriesWorkspaceRepoSlugSrc(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].src.$post(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugSrcCommitPath(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].src[':commit'][':path'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugVersions(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].versions.$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugVersionsVersionId(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['versions'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].versions[':version_id'].$get(args, options),
  )
}

export async function getRepositoriesWorkspaceRepoSlugWatchers(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repositories[':workspace'][':repo_slug'].watchers.$get(args, options),
  )
}

export async function getSnippets(
  args: InferRequestType<typeof client.snippets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snippets.$get(args, options))
}

export async function postSnippets(
  args: InferRequestType<typeof client.snippets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snippets.$post(args, options))
}

export async function getSnippetsWorkspace(
  args: InferRequestType<(typeof client.snippets)[':workspace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snippets[':workspace'].$get(args, options))
}

export async function postSnippetsWorkspace(
  args: InferRequestType<(typeof client.snippets)[':workspace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snippets[':workspace'].$post(args, options))
}

export async function getSnippetsWorkspaceEncodedId(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snippets[':workspace'][':encoded_id'].$get(args, options))
}

export async function putSnippetsWorkspaceEncodedId(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snippets[':workspace'][':encoded_id'].$put(args, options))
}

export async function deleteSnippetsWorkspaceEncodedId(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snippets[':workspace'][':encoded_id'].$delete(args, options))
}

export async function getSnippetsWorkspaceEncodedIdComments(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'].comments.$get(args, options),
  )
}

export async function postSnippetsWorkspaceEncodedIdComments(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'].comments.$post(args, options),
  )
}

export async function getSnippetsWorkspaceEncodedIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'].comments[':comment_id'].$get(args, options),
  )
}

export async function putSnippetsWorkspaceEncodedIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'].comments[':comment_id'].$put(args, options),
  )
}

export async function deleteSnippetsWorkspaceEncodedIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'].comments[':comment_id'].$delete(args, options),
  )
}

export async function getSnippetsWorkspaceEncodedIdCommits(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'].commits.$get(args, options),
  )
}

export async function getSnippetsWorkspaceEncodedIdCommitsRevision(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'].commits[':revision'].$get(args, options),
  )
}

export async function getSnippetsWorkspaceEncodedIdFilesPath(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'].files[':path'].$get(args, options),
  )
}

export async function getSnippetsWorkspaceEncodedIdWatch(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snippets[':workspace'][':encoded_id'].watch.$get(args, options))
}

export async function putSnippetsWorkspaceEncodedIdWatch(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snippets[':workspace'][':encoded_id'].watch.$put(args, options))
}

export async function deleteSnippetsWorkspaceEncodedIdWatch(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'].watch.$delete(args, options),
  )
}

export async function getSnippetsWorkspaceEncodedIdWatchers(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'].watchers.$get(args, options),
  )
}

export async function getSnippetsWorkspaceEncodedIdNodeId(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'][':node_id'].$get(args, options),
  )
}

export async function putSnippetsWorkspaceEncodedIdNodeId(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'][':node_id'].$put(args, options),
  )
}

export async function deleteSnippetsWorkspaceEncodedIdNodeId(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'][':node_id'].$delete(args, options),
  )
}

export async function getSnippetsWorkspaceEncodedIdNodeIdFilesPath(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'][':node_id'].files[':path'].$get(args, options),
  )
}

export async function getSnippetsWorkspaceEncodedIdRevisionDiff(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'][':revision'].diff.$get(args, options),
  )
}

export async function getSnippetsWorkspaceEncodedIdRevisionPatch(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snippets[':workspace'][':encoded_id'][':revision'].patch.$get(args, options),
  )
}

export async function getTeamsUsernamePipelinesConfigVariablesIndex(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':username'].pipelines_config.variables.index.$get(args, options),
  )
}

export async function postTeamsUsernamePipelinesConfigVariablesIndex(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':username'].pipelines_config.variables.index.$post(args, options),
  )
}

export async function getTeamsUsernamePipelinesConfigVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':username'].pipelines_config.variables[':variable_uuid'].$get(args, options),
  )
}

export async function putTeamsUsernamePipelinesConfigVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':username'].pipelines_config.variables[':variable_uuid'].$put(args, options),
  )
}

export async function deleteTeamsUsernamePipelinesConfigVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':username'].pipelines_config.variables[':variable_uuid'].$delete(args, options),
  )
}

export async function getTeamsUsernameSearchCode(
  args: InferRequestType<(typeof client.teams)[':username']['search']['code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':username'].search.code.$get(args, options))
}

export async function getUser(options?: ClientRequestOptions) {
  return await parseResponse(client.user.$get(undefined, options))
}

export async function getUserEmails(options?: ClientRequestOptions) {
  return await parseResponse(client.user.emails.$get(undefined, options))
}

export async function getUserEmailsEmail(
  args: InferRequestType<(typeof client.user.emails)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.emails[':email'].$get(args, options))
}

export async function getUserPermissionsRepositories(
  args: InferRequestType<typeof client.user.permissions.repositories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.permissions.repositories.$get(args, options))
}

export async function getUserPermissionsWorkspaces(
  args: InferRequestType<typeof client.user.permissions.workspaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.permissions.workspaces.$get(args, options))
}

export async function getUsersSelectedUser(
  args: InferRequestType<(typeof client.users)[':selected_user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':selected_user'].$get(args, options))
}

export async function getUsersSelectedUserPipelinesConfigVariablesIndex(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':selected_user'].pipelines_config.variables.index.$get(args, options),
  )
}

export async function postUsersSelectedUserPipelinesConfigVariablesIndex(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':selected_user'].pipelines_config.variables.index.$post(args, options),
  )
}

export async function getUsersSelectedUserPipelinesConfigVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':selected_user'].pipelines_config.variables[':variable_uuid'].$get(args, options),
  )
}

export async function putUsersSelectedUserPipelinesConfigVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':selected_user'].pipelines_config.variables[':variable_uuid'].$put(args, options),
  )
}

export async function deleteUsersSelectedUserPipelinesConfigVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':selected_user'].pipelines_config.variables[':variable_uuid'].$delete(
      args,
      options,
    ),
  )
}

export async function getUsersSelectedUserPropertiesAppKeyPropertyName(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':selected_user'].properties[':app_key'][':property_name'].$get(args, options),
  )
}

export async function putUsersSelectedUserPropertiesAppKeyPropertyName(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':selected_user'].properties[':app_key'][':property_name'].$put(args, options),
  )
}

export async function deleteUsersSelectedUserPropertiesAppKeyPropertyName(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':selected_user'].properties[':app_key'][':property_name'].$delete(args, options),
  )
}

export async function getUsersSelectedUserSearchCode(
  args: InferRequestType<(typeof client.users)[':selected_user']['search']['code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':selected_user'].search.code.$get(args, options))
}

export async function getUsersSelectedUserSshKeys(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':selected_user']['ssh-keys'].$get(args, options))
}

export async function postUsersSelectedUserSshKeys(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':selected_user']['ssh-keys'].$post(args, options))
}

export async function getUsersSelectedUserSshKeysKeyId(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':selected_user']['ssh-keys'][':key_id'].$get(args, options),
  )
}

export async function putUsersSelectedUserSshKeysKeyId(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':selected_user']['ssh-keys'][':key_id'].$put(args, options),
  )
}

export async function deleteUsersSelectedUserSshKeysKeyId(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':selected_user']['ssh-keys'][':key_id'].$delete(args, options),
  )
}

export async function getWorkspaces(
  args: InferRequestType<typeof client.workspaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.$get(args, options))
}

export async function getWorkspacesWorkspace(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace'].$get(args, options))
}

export async function getWorkspacesWorkspaceHooks(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace'].hooks.$get(args, options))
}

export async function postWorkspacesWorkspaceHooks(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace'].hooks.$post(args, options))
}

export async function getWorkspacesWorkspaceHooksUid(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace'].hooks[':uid'].$get(args, options))
}

export async function putWorkspacesWorkspaceHooksUid(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace'].hooks[':uid'].$put(args, options))
}

export async function deleteWorkspacesWorkspaceHooksUid(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace'].hooks[':uid'].$delete(args, options))
}

export async function getWorkspacesWorkspaceMembers(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace'].members.$get(args, options))
}

export async function getWorkspacesWorkspaceMembersMember(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace'].members[':member'].$get(args, options))
}

export async function getWorkspacesWorkspacePermissions(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace'].permissions.$get(args, options))
}

export async function getWorkspacesWorkspacePermissionsRepositories(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].permissions.repositories.$get(args, options),
  )
}

export async function getWorkspacesWorkspacePermissionsRepositoriesRepoSlug(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].permissions.repositories[':repo_slug'].$get(args, options),
  )
}

export async function getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfiguration(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace']['pipelines-config'].identity.oidc['.well-known'][
      'openid-configuration'
    ].$get(args, options),
  )
}

export async function getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJson(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace']['pipelines-config'].identity.oidc['keys.json'].$get(
      args,
      options,
    ),
  )
}

export async function getWorkspacesWorkspacePipelinesConfigVariables(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace']['pipelines-config'].variables.$get(args, options),
  )
}

export async function postWorkspacesWorkspacePipelinesConfigVariables(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace']['pipelines-config'].variables.$post(args, options),
  )
}

export async function getWorkspacesWorkspacePipelinesConfigVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace']['pipelines-config'].variables[':variable_uuid'].$get(
      args,
      options,
    ),
  )
}

export async function putWorkspacesWorkspacePipelinesConfigVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace']['pipelines-config'].variables[':variable_uuid'].$put(
      args,
      options,
    ),
  )
}

export async function deleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuid(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace']['pipelines-config'].variables[':variable_uuid'].$delete(
      args,
      options,
    ),
  )
}

export async function getWorkspacesWorkspaceProjects(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace'].projects.$get(args, options))
}

export async function postWorkspacesWorkspaceProjects(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace'].projects.$post(args, options))
}

export async function getWorkspacesWorkspaceProjectsProjectKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key'].$get(args, options),
  )
}

export async function putWorkspacesWorkspaceProjectsProjectKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key'].$put(args, options),
  )
}

export async function deleteWorkspacesWorkspaceProjectsProjectKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key'].$delete(args, options),
  )
}

export async function getWorkspacesWorkspaceProjectsProjectKeyBranchingModel(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key']['branching-model'].$get(args, options),
  )
}

export async function getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key']['branching-model'].settings.$get(
      args,
      options,
    ),
  )
}

export async function putWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key']['branching-model'].settings.$put(
      args,
      options,
    ),
  )
}

export async function getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key']['default-reviewers'].$get(
      args,
      options,
    ),
  )
}

export async function getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key']['default-reviewers'][
      ':selected_user'
    ].$get(args, options),
  )
}

export async function putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key']['default-reviewers'][
      ':selected_user'
    ].$put(args, options),
  )
}

export async function deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key']['default-reviewers'][
      ':selected_user'
    ].$delete(args, options),
  )
}

export async function getWorkspacesWorkspaceProjectsProjectKeyDeployKeys(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key']['deploy-keys'].$get(args, options),
  )
}

export async function postWorkspacesWorkspaceProjectsProjectKeyDeployKeys(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key']['deploy-keys'].$post(args, options),
  )
}

export async function getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key']['deploy-keys'][':key_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace'].projects[':project_key']['deploy-keys'][':key_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getWorkspacesWorkspaceSearchCode(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace'].search.code.$get(args, options))
}
