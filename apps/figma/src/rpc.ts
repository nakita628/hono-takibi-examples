import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1FilesFileKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].$get(args, options))
}

export async function getV1FilesFileKeyNodes(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].nodes.$get(args, options))
}

export async function getV1ImagesFileKey(
  args: InferRequestType<(typeof client.v1.images)[':file_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.images[':file_key'].$get(args, options))
}

export async function getV1FilesFileKeyImages(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].images.$get(args, options))
}

export async function getV1FilesFileKeyMeta(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].meta.$get(args, options))
}

export async function postV1FilesFileKeyDuplicate(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].duplicate.$post(args, options))
}

export async function postV1Teams(
  args: InferRequestType<typeof client.v1.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams.$post(args, options))
}

export async function getV1TeamsTeamId(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':team_id'].$get(args, options))
}

export async function postV1TeamsTeamIdInvites(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['invites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':team_id'].invites.$post(args, options))
}

export async function getV1TeamsTeamIdProjects(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':team_id'].projects.$get(args, options))
}

export async function getV1ProjectsProjectIdMeta(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].meta.$get(args, options))
}

export async function getV1ProjectsProjectIdFiles(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].files.$get(args, options))
}

export async function postV1TeamsTeamIdFolders(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['folders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':team_id'].folders.$post(args, options))
}

export async function getV2TeamsTeamIdFolders(
  args: InferRequestType<(typeof client.v2.teams)[':team_id']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.teams[':team_id'].folders.$get(args, options))
}

export async function getV2FoldersFolderIdFolders(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.folders[':folder_id'].folders.$get(args, options))
}

export async function getV2FoldersFolderIdFiles(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.folders[':folder_id'].files.$get(args, options))
}

export async function getV2FoldersFolderIdMeta(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.folders[':folder_id'].meta.$get(args, options))
}

export async function getV1FilesFileKeyVersions(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].versions.$get(args, options))
}

export async function getV1FilesFileKeyComments(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].comments.$get(args, options))
}

export async function postV1FilesFileKeyComments(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].comments.$post(args, options))
}

export async function deleteV1FilesFileKeyCommentsCommentId(
  args: InferRequestType<
    (typeof client.v1.files)[':file_key']['comments'][':comment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.files[':file_key'].comments[':comment_id'].$delete(args, options),
  )
}

export async function getV1FilesFileKeyCommentsCommentIdReactions(
  args: InferRequestType<
    (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.files[':file_key'].comments[':comment_id'].reactions.$get(args, options),
  )
}

export async function postV1FilesFileKeyCommentsCommentIdReactions(
  args: InferRequestType<
    (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.files[':file_key'].comments[':comment_id'].reactions.$post(args, options),
  )
}

export async function deleteV1FilesFileKeyCommentsCommentIdReactions(
  args: InferRequestType<
    (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.files[':file_key'].comments[':comment_id'].reactions.$delete(args, options),
  )
}

export async function getV1Me(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.me.$get(undefined, options))
}

export async function getV1TeamsTeamIdComponents(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['components']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':team_id'].components.$get(args, options))
}

export async function getV1FilesFileKeyComponents(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['components']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].components.$get(args, options))
}

export async function getV1ComponentsKey(
  args: InferRequestType<(typeof client.v1.components)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.components[':key'].$get(args, options))
}

export async function getV1TeamsTeamIdComponentSets(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':team_id'].component_sets.$get(args, options))
}

export async function getV1FilesFileKeyComponentSets(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].component_sets.$get(args, options))
}

export async function getV1ComponentSetsKey(
  args: InferRequestType<(typeof client.v1.component_sets)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.component_sets[':key'].$get(args, options))
}

export async function getV1TeamsTeamIdStyles(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['styles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':team_id'].styles.$get(args, options))
}

export async function getV1FilesFileKeyStyles(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['styles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].styles.$get(args, options))
}

export async function getV1StylesKey(
  args: InferRequestType<(typeof client.v1.styles)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.styles[':key'].$get(args, options))
}

export async function getV2Webhooks(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks.$get(args, options))
}

export async function postV2Webhooks(
  args: InferRequestType<typeof client.v2.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks.$post(args, options))
}

export async function getV2WebhooksWebhookId(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhook_id'].$get(args, options))
}

export async function putV2WebhooksWebhookId(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhook_id'].$put(args, options))
}

export async function deleteV2WebhooksWebhookId(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhook_id'].$delete(args, options))
}

export async function getV2TeamsTeamIdWebhooks(
  args: InferRequestType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.teams[':team_id'].webhooks.$get(args, options))
}

export async function getV2WebhooksWebhookIdRequests(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhook_id'].requests.$get(args, options))
}

export async function getV1ActivityLogs(
  args: InferRequestType<typeof client.v1.activity_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.activity_logs.$get(args, options))
}

export async function postV1DeveloperLogs(
  args: InferRequestType<typeof client.v1.developer_logs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.developer_logs.$post(args, options))
}

export async function getV1AiUsageDaily(
  args: InferRequestType<typeof client.v1.ai_usage.daily.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ai_usage.daily.$get(args, options))
}

export async function getV1Payments(
  args: InferRequestType<typeof client.v1.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments.$get(args, options))
}

export async function getV1FilesFileKeyVariablesLocal(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].variables.local.$get(args, options))
}

export async function getV1FilesFileKeyVariablesPublished(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].variables.published.$get(args, options))
}

export async function postV1FilesFileKeyVariables(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].variables.$post(args, options))
}

export async function getV1FilesFileKeyDevResources(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_key'].dev_resources.$get(args, options))
}

export async function putV1DevResources(
  args: InferRequestType<typeof client.v1.dev_resources.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dev_resources.$put(args, options))
}

export async function postV1DevResources(
  args: InferRequestType<typeof client.v1.dev_resources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dev_resources.$post(args, options))
}

export async function deleteV1FilesFileKeyDevResourcesDevResourceId(
  args: InferRequestType<
    (typeof client.v1.files)[':file_key']['dev_resources'][':dev_resource_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.files[':file_key'].dev_resources[':dev_resource_id'].$delete(args, options),
  )
}

export async function getV1AnalyticsLibrariesFileKeyComponentActions(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.analytics.libraries[':file_key'].component.actions.$get(args, options),
  )
}

export async function getV1AnalyticsLibrariesFileKeyComponentUsages(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.analytics.libraries[':file_key'].component.usages.$get(args, options),
  )
}

export async function getV1AnalyticsLibrariesFileKeyStyleActions(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.analytics.libraries[':file_key'].style.actions.$get(args, options),
  )
}

export async function getV1AnalyticsLibrariesFileKeyStyleUsages(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.analytics.libraries[':file_key'].style.usages.$get(args, options),
  )
}

export async function getV1AnalyticsLibrariesFileKeyVariableActions(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.analytics.libraries[':file_key'].variable.actions.$get(args, options),
  )
}

export async function getV1AnalyticsLibrariesFileKeyVariableUsages(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.analytics.libraries[':file_key'].variable.usages.$get(args, options),
  )
}

export async function getV1Oembed(
  args: InferRequestType<typeof client.v1.oembed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oembed.$get(args, options))
}
