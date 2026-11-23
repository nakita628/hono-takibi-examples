import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAssets(
  args: InferRequestType<typeof client.api.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets.$get(args, options))
}

export async function postApiAssets(
  args: InferRequestType<typeof client.api.assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets.$post(args, options))
}

export async function getApiAssetsId(
  args: InferRequestType<(typeof client.api.assets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets[':id'].$get(args, options))
}

export async function putApiAssetsId(
  args: InferRequestType<(typeof client.api.assets)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets[':id'].$put(args, options))
}

export async function deleteApiAssetsId(
  args: InferRequestType<(typeof client.api.assets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets[':id'].$delete(args, options))
}

export async function getApiAssetsIdContent(
  args: InferRequestType<(typeof client.api.assets)[':id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets[':id'].content.$get(args, options))
}

export async function postApiAssetsIdTags(
  args: InferRequestType<(typeof client.api.assets)[':id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets[':id'].tags.$post(args, options))
}

export async function deleteApiAssetsIdTags(
  args: InferRequestType<(typeof client.api.assets)[':id']['tags']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets[':id'].tags.$delete(args, options))
}

export async function postApiAssetsFromHash(
  args: InferRequestType<(typeof client.api.assets)['from-hash']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets['from-hash'].$post(args, options))
}

export async function headApiAssetsHashHash(
  args: InferRequestType<(typeof client.api.assets.hash)[':hash']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets.hash[':hash'].$head(args, options))
}

export async function postApiAssetsPrune(options?: ClientRequestOptions) {
  return await parseResponse(client.api.assets.prune.$post(undefined, options))
}

export async function postApiAssetsSeed(
  args: InferRequestType<typeof client.api.assets.seed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets.seed.$post(args, options))
}

export async function postApiAssetsSeedCancel(options?: ClientRequestOptions) {
  return await parseResponse(client.api.assets.seed.cancel.$post(undefined, options))
}

export async function getApiAssetsSeedStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.assets.seed.status.$get(undefined, options))
}

export async function getApiAssetsTagsRefine(
  args: InferRequestType<typeof client.api.assets.tags.refine.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets.tags.refine.$get(args, options))
}

export async function getApiBillingChurnkeyAuth(options?: ClientRequestOptions) {
  return await parseResponse(client.api.billing.churnkey.auth.$get(undefined, options))
}

export async function getApiDefaultWorkflow(options?: ClientRequestOptions) {
  return await parseResponse(client.api.default_workflow.$get(undefined, options))
}

export async function postApiDeployBundle(
  args: InferRequestType<typeof client.api.deploy.bundle.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.deploy.bundle.$post(args, options))
}

export async function getApiDeploySummary(options?: ClientRequestOptions) {
  return await parseResponse(client.api.deploy.summary.$get(undefined, options))
}

export async function getApiEmbeddings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.embeddings.$get(undefined, options))
}

export async function getApiExperimentModels(options?: ClientRequestOptions) {
  return await parseResponse(client.api.experiment.models.$get(undefined, options))
}

export async function getApiExperimentModelsFolder(
  args: InferRequestType<(typeof client.api.experiment.models)[':folder']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.experiment.models[':folder'].$get(args, options))
}

export async function getApiExtensions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.extensions.$get(undefined, options))
}

export async function getApiFeatures(options?: ClientRequestOptions) {
  return await parseResponse(client.api.features.$get(undefined, options))
}

export async function postApiFeedback(
  args: InferRequestType<typeof client.api.feedback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.feedback.$post(args, options))
}

export async function getApiFilesMaskLayers(
  args: InferRequestType<(typeof client.api.files)['mask-layers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.files['mask-layers'].$get(args, options))
}

export async function postApiFree(
  args: InferRequestType<typeof client.api.free.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.free.$post(args, options))
}

export async function getApiGlobalSubgraphs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.global_subgraphs.$get(undefined, options))
}

export async function getApiGlobalSubgraphsId(
  args: InferRequestType<(typeof client.api.global_subgraphs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.global_subgraphs[':id'].$get(args, options))
}

export async function postApiHistory(
  args: InferRequestType<typeof client.api.history.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.history.$post(args, options))
}

export async function getApiHistoryV2(
  args: InferRequestType<typeof client.api.history_v2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.history_v2.$get(args, options))
}

export async function getApiHistoryV2PromptId(
  args: InferRequestType<(typeof client.api.history_v2)[':prompt_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.history_v2[':prompt_id'].$get(args, options))
}

export async function getApiI18n(options?: ClientRequestOptions) {
  return await parseResponse(client.api.i18n.$get(undefined, options))
}

export async function postApiInterrupt(options?: ClientRequestOptions) {
  return await parseResponse(client.api.interrupt.$post(undefined, options))
}

export async function getApiJobJobIdStatus(
  args: InferRequestType<(typeof client.api.job)[':job_id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.job[':job_id'].status.$get(args, options))
}

export async function getApiJobs(
  args: InferRequestType<typeof client.api.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs.$get(args, options))
}

export async function getApiJobsJobId(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':job_id'].$get(args, options))
}

export async function getApiJobsJobIdAssets(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':job_id'].assets.$get(args, options))
}

export async function postApiJobsJobIdCancel(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':job_id'].cancel.$post(args, options))
}

export async function postApiJobsCancel(
  args: InferRequestType<typeof client.api.jobs.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs.cancel.$post(args, options))
}

export async function getApiNodeReplacements(options?: ClientRequestOptions) {
  return await parseResponse(client.api.node_replacements.$get(undefined, options))
}

export async function getApiObjectInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.api.object_info.$get(undefined, options))
}

export async function getApiPrompt(options?: ClientRequestOptions) {
  return await parseResponse(client.api.prompt.$get(undefined, options))
}

export async function postApiPrompt(
  args: InferRequestType<typeof client.api.prompt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.prompt.$post(args, options))
}

export async function getApiQueue(options?: ClientRequestOptions) {
  return await parseResponse(client.api.queue.$get(undefined, options))
}

export async function postApiQueue(
  args: InferRequestType<typeof client.api.queue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.queue.$post(args, options))
}

export async function getApiSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.settings.$get(undefined, options))
}

export async function postApiSettings(
  args: InferRequestType<typeof client.api.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.settings.$post(args, options))
}

export async function getApiSettingsId(
  args: InferRequestType<(typeof client.api.settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.settings[':id'].$get(args, options))
}

export async function postApiSettingsId(
  args: InferRequestType<(typeof client.api.settings)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.settings[':id'].$post(args, options))
}

export async function getApiSystemStats(options?: ClientRequestOptions) {
  return await parseResponse(client.api.system_stats.$get(undefined, options))
}

export async function getApiTags(
  args: InferRequestType<typeof client.api.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags.$get(args, options))
}

export async function getApiTasks(
  args: InferRequestType<typeof client.api.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks.$get(args, options))
}

export async function getApiTasksTaskId(
  args: InferRequestType<(typeof client.api.tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':task_id'].$get(args, options))
}

export async function postApiUploadImage(
  args: InferRequestType<typeof client.api.upload.image.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.upload.image.$post(args, options))
}

export async function postApiUploadMask(
  args: InferRequestType<typeof client.api.upload.mask.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.upload.mask.$post(args, options))
}

export async function getApiUser(options?: ClientRequestOptions) {
  return await parseResponse(client.api.user.$get(undefined, options))
}

export async function getApiUserdata(
  args: InferRequestType<typeof client.api.userdata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.userdata.$get(args, options))
}

export async function getApiUserdataFile(
  args: InferRequestType<(typeof client.api.userdata)[':file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.userdata[':file'].$get(args, options))
}

export async function postApiUserdataFile(
  args: InferRequestType<(typeof client.api.userdata)[':file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.userdata[':file'].$post(args, options))
}

export async function deleteApiUserdataFile(
  args: InferRequestType<(typeof client.api.userdata)[':file']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.userdata[':file'].$delete(args, options))
}

export async function postApiUserdataFileMoveDest(
  args: InferRequestType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.userdata[':file'].move[':dest'].$post(args, options))
}

export async function getApiUserdataFilePublish(
  args: InferRequestType<(typeof client.api.userdata)[':file']['publish']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.userdata[':file'].publish.$get(args, options))
}

export async function postApiUserdataFilePublish(
  args: InferRequestType<(typeof client.api.userdata)[':file']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.userdata[':file'].publish.$post(args, options))
}

export async function getApiUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.api.users.$get(undefined, options))
}

export async function getApiVhsQueryvideo(
  args: InferRequestType<typeof client.api.vhs.queryvideo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vhs.queryvideo.$get(args, options))
}

export async function getApiView(
  args: InferRequestType<typeof client.api.view.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.view.$get(args, options))
}

export async function getApiWorkflowTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.api.workflow_templates.$get(undefined, options))
}

export async function getApiWorkflows(
  args: InferRequestType<typeof client.api.workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.workflows.$get(args, options))
}

export async function postApiWorkflows(
  args: InferRequestType<typeof client.api.workflows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.workflows.$post(args, options))
}

export async function getApiWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.workflows[':workflow_id'].$get(args, options))
}

export async function deleteApiWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.workflows[':workflow_id'].$delete(args, options))
}

export async function patchApiWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.workflows[':workflow_id'].$patch(args, options))
}

export async function getApiWorkflowsWorkflowIdContent(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.workflows[':workflow_id'].content.$get(args, options))
}

export async function postApiWorkflowsWorkflowIdFork(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.workflows[':workflow_id'].fork.$post(args, options))
}

export async function postApiWorkflowsWorkflowIdVersions(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.workflows[':workflow_id'].versions.$post(args, options))
}

export async function getApiWorkflowsPublishedShareId(
  args: InferRequestType<(typeof client.api.workflows.published)[':share_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.workflows.published[':share_id'].$get(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getInternalFolderPaths(options?: ClientRequestOptions) {
  return await parseResponse(client.internal.folder_paths.$get(undefined, options))
}

export async function getInternalLogs(options?: ClientRequestOptions) {
  return await parseResponse(client.internal.logs.$get(undefined, options))
}

export async function getInternalLogsRaw(options?: ClientRequestOptions) {
  return await parseResponse(client.internal.logs.raw.$get(undefined, options))
}

export async function patchInternalLogsSubscribe(
  args: InferRequestType<typeof client.internal.logs.subscribe.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.internal.logs.subscribe.$patch(args, options))
}
