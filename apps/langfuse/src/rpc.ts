import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiPublicAnnotationQueues(
  args: InferRequestType<(typeof client.api.public)['annotation-queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['annotation-queues'].$get(args, options))
}

export async function postApiPublicAnnotationQueues(
  args: InferRequestType<(typeof client.api.public)['annotation-queues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['annotation-queues'].$post(args, options))
}

export async function getApiPublicAnnotationQueuesQueueId(
  args: InferRequestType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['annotation-queues'][':queueId'].$get(args, options))
}

export async function getApiPublicAnnotationQueuesQueueIdItems(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public['annotation-queues'][':queueId'].items.$get(args, options),
  )
}

export async function postApiPublicAnnotationQueuesQueueIdItems(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public['annotation-queues'][':queueId'].items.$post(args, options),
  )
}

export async function getApiPublicAnnotationQueuesQueueIdItemsItemId(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public['annotation-queues'][':queueId'].items[':itemId'].$get(args, options),
  )
}

export async function deleteApiPublicAnnotationQueuesQueueIdItemsItemId(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public['annotation-queues'][':queueId'].items[':itemId'].$delete(args, options),
  )
}

export async function patchApiPublicAnnotationQueuesQueueIdItemsItemId(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public['annotation-queues'][':queueId'].items[':itemId'].$patch(args, options),
  )
}

export async function postApiPublicAnnotationQueuesQueueIdAssignments(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public['annotation-queues'][':queueId'].assignments.$post(args, options),
  )
}

export async function deleteApiPublicAnnotationQueuesQueueIdAssignments(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public['annotation-queues'][':queueId'].assignments.$delete(args, options),
  )
}

export async function getApiPublicIntegrationsBlobStorage(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.public.integrations['blob-storage'].$get(undefined, options),
  )
}

export async function putApiPublicIntegrationsBlobStorage(
  args: InferRequestType<(typeof client.api.public.integrations)['blob-storage']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.integrations['blob-storage'].$put(args, options))
}

export async function getApiPublicIntegrationsBlobStorageId(
  args: InferRequestType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.integrations['blob-storage'][':id'].$get(args, options),
  )
}

export async function deleteApiPublicIntegrationsBlobStorageId(
  args: InferRequestType<(typeof client.api.public.integrations)['blob-storage'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.integrations['blob-storage'][':id'].$delete(args, options),
  )
}

export async function getApiPublicComments(
  args: InferRequestType<typeof client.api.public.comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.comments.$get(args, options))
}

export async function postApiPublicComments(
  args: InferRequestType<typeof client.api.public.comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.comments.$post(args, options))
}

export async function getApiPublicCommentsCommentId(
  args: InferRequestType<(typeof client.api.public.comments)[':commentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.comments[':commentId'].$get(args, options))
}

export async function getApiPublicDatasetItems(
  args: InferRequestType<(typeof client.api.public)['dataset-items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['dataset-items'].$get(args, options))
}

export async function postApiPublicDatasetItems(
  args: InferRequestType<(typeof client.api.public)['dataset-items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['dataset-items'].$post(args, options))
}

export async function getApiPublicDatasetItemsId(
  args: InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['dataset-items'][':id'].$get(args, options))
}

export async function deleteApiPublicDatasetItemsId(
  args: InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['dataset-items'][':id'].$delete(args, options))
}

export async function getApiPublicV2Datasets(
  args: InferRequestType<typeof client.api.public.v2.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.datasets.$get(args, options))
}

export async function postApiPublicV2Datasets(
  args: InferRequestType<typeof client.api.public.v2.datasets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.datasets.$post(args, options))
}

export async function getApiPublicV2DatasetsDatasetName(
  args: InferRequestType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.datasets[':datasetName'].$get(args, options))
}

export async function getApiPublicV2EvaluationRules(
  args: InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2['evaluation-rules'].$get(args, options))
}

export async function postApiPublicV2EvaluationRules(
  args: InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2['evaluation-rules'].$post(args, options))
}

export async function getApiPublicV2EvaluationRulesEvaluationRuleId(
  args: InferRequestType<
    (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.v2['evaluation-rules'][':evaluationRuleId'].$get(args, options),
  )
}

export async function deleteApiPublicV2EvaluationRulesEvaluationRuleId(
  args: InferRequestType<
    (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.v2['evaluation-rules'][':evaluationRuleId'].$delete(args, options),
  )
}

export async function patchApiPublicV2EvaluationRulesEvaluationRuleId(
  args: InferRequestType<
    (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.v2['evaluation-rules'][':evaluationRuleId'].$patch(args, options),
  )
}

export async function getApiPublicV2Evaluators(
  args: InferRequestType<typeof client.api.public.v2.evaluators.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.evaluators.$get(args, options))
}

export async function postApiPublicV2Evaluators(
  args: InferRequestType<typeof client.api.public.v2.evaluators.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.evaluators.$post(args, options))
}

export async function getApiPublicV2EvaluatorsEvaluatorId(
  args: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.evaluators[':evaluatorId'].$get(args, options))
}

export async function deleteApiPublicV2EvaluatorsEvaluatorId(
  args: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.evaluators[':evaluatorId'].$delete(args, options))
}

export async function patchApiPublicV2EvaluatorsEvaluatorId(
  args: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.evaluators[':evaluatorId'].$patch(args, options))
}

export async function getApiPublicV2EvaluatorsEvaluatorIdVersions(
  args: InferRequestType<
    (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.v2.evaluators[':evaluatorId'].versions.$get(args, options),
  )
}

export async function getApiPublicExperiments(
  args: InferRequestType<typeof client.api.public.experiments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.experiments.$get(args, options))
}

export async function getApiPublicExperimentItems(
  args: InferRequestType<(typeof client.api.public)['experiment-items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['experiment-items'].$get(args, options))
}

export async function postApiPublicFeedback(
  args: InferRequestType<typeof client.api.public.feedback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.feedback.$post(args, options))
}

export async function getApiPublicHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.api.public.health.$get(undefined, options))
}

export async function getApiPublicLlmConnections(
  args: InferRequestType<(typeof client.api.public)['llm-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['llm-connections'].$get(args, options))
}

export async function putApiPublicLlmConnections(
  args: InferRequestType<(typeof client.api.public)['llm-connections']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['llm-connections'].$put(args, options))
}

export async function deleteApiPublicLlmConnectionsId(
  args: InferRequestType<(typeof client.api.public)['llm-connections'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['llm-connections'][':id'].$delete(args, options))
}

export async function getApiPublicOrganizationsLlmConnections(
  args: InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.organizations['llm-connections'].$get(args, options))
}

export async function putApiPublicOrganizationsLlmConnections(
  args: InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.organizations['llm-connections'].$put(args, options))
}

export async function deleteApiPublicOrganizationsLlmConnectionsId(
  args: InferRequestType<
    (typeof client.api.public.organizations)['llm-connections'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.organizations['llm-connections'][':id'].$delete(args, options),
  )
}

export async function getApiPublicMediaMediaId(
  args: InferRequestType<(typeof client.api.public.media)[':mediaId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.media[':mediaId'].$get(args, options))
}

export async function patchApiPublicMediaMediaId(
  args: InferRequestType<(typeof client.api.public.media)[':mediaId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.media[':mediaId'].$patch(args, options))
}

export async function postApiPublicMedia(
  args: InferRequestType<typeof client.api.public.media.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.media.$post(args, options))
}

export async function getApiPublicV2Metrics(
  args: InferRequestType<typeof client.api.public.v2.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.metrics.$get(args, options))
}

export async function getApiPublicModels(
  args: InferRequestType<typeof client.api.public.models.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.models.$get(args, options))
}

export async function postApiPublicModels(
  args: InferRequestType<typeof client.api.public.models.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.models.$post(args, options))
}

export async function getApiPublicModelsId(
  args: InferRequestType<(typeof client.api.public.models)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.models[':id'].$get(args, options))
}

export async function putApiPublicModelsId(
  args: InferRequestType<(typeof client.api.public.models)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.models[':id'].$put(args, options))
}

export async function deleteApiPublicModelsId(
  args: InferRequestType<(typeof client.api.public.models)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.models[':id'].$delete(args, options))
}

export async function getApiPublicV2Observations(
  args: InferRequestType<typeof client.api.public.v2.observations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.observations.$get(args, options))
}

export async function postApiPublicOtelV1Traces(
  args: InferRequestType<typeof client.api.public.otel.v1.traces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.otel.v1.traces.$post(args, options))
}

export async function getApiPublicOrganizationsMemberships(options?: ClientRequestOptions) {
  return await parseResponse(client.api.public.organizations.memberships.$get(undefined, options))
}

export async function putApiPublicOrganizationsMemberships(
  args: InferRequestType<typeof client.api.public.organizations.memberships.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.organizations.memberships.$put(args, options))
}

export async function deleteApiPublicOrganizationsMemberships(
  args: InferRequestType<typeof client.api.public.organizations.memberships.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.organizations.memberships.$delete(args, options))
}

export async function getApiPublicProjectsProjectIdMemberships(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.projects[':projectId'].memberships.$get(args, options),
  )
}

export async function putApiPublicProjectsProjectIdMemberships(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.projects[':projectId'].memberships.$put(args, options),
  )
}

export async function deleteApiPublicProjectsProjectIdMemberships(
  args: InferRequestType<
    (typeof client.api.public.projects)[':projectId']['memberships']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.projects[':projectId'].memberships.$delete(args, options),
  )
}

export async function getApiPublicOrganizationsProjects(options?: ClientRequestOptions) {
  return await parseResponse(client.api.public.organizations.projects.$get(undefined, options))
}

export async function getApiPublicOrganizationsApiKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.api.public.organizations.apiKeys.$get(undefined, options))
}

export async function getApiPublicProjects(options?: ClientRequestOptions) {
  return await parseResponse(client.api.public.projects.$get(undefined, options))
}

export async function postApiPublicProjects(
  args: InferRequestType<typeof client.api.public.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.projects.$post(args, options))
}

export async function putApiPublicProjectsProjectId(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.projects[':projectId'].$put(args, options))
}

export async function deleteApiPublicProjectsProjectId(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.projects[':projectId'].$delete(args, options))
}

export async function getApiPublicProjectsProjectIdApiKeys(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.projects[':projectId'].apiKeys.$get(args, options))
}

export async function postApiPublicProjectsProjectIdApiKeys(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.projects[':projectId'].apiKeys.$post(args, options))
}

export async function deleteApiPublicProjectsProjectIdApiKeysApiKeyId(
  args: InferRequestType<
    (typeof client.api.public.projects)[':projectId']['apiKeys'][':apiKeyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.projects[':projectId'].apiKeys[':apiKeyId'].$delete(args, options),
  )
}

export async function patchApiPublicV2PromptsNameVersionsVersion(
  args: InferRequestType<
    (typeof client.api.public.v2.prompts)[':name']['versions'][':version']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.v2.prompts[':name'].versions[':version'].$patch(args, options),
  )
}

export async function getApiPublicV2PromptsPromptName(
  args: InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.prompts[':promptName'].$get(args, options))
}

export async function deleteApiPublicV2PromptsPromptName(
  args: InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.prompts[':promptName'].$delete(args, options))
}

export async function getApiPublicV2Prompts(
  args: InferRequestType<typeof client.api.public.v2.prompts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.prompts.$get(args, options))
}

export async function postApiPublicV2Prompts(
  args: InferRequestType<typeof client.api.public.v2.prompts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v2.prompts.$post(args, options))
}

export async function getApiPublicScimServiceProviderConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.public.scim.ServiceProviderConfig.$get(undefined, options))
}

export async function getApiPublicScimResourceTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.public.scim.ResourceTypes.$get(undefined, options))
}

export async function getApiPublicScimSchemas(options?: ClientRequestOptions) {
  return await parseResponse(client.api.public.scim.Schemas.$get(undefined, options))
}

export async function getApiPublicScimUsers(
  args: InferRequestType<typeof client.api.public.scim.Users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.scim.Users.$get(args, options))
}

export async function postApiPublicScimUsers(
  args: InferRequestType<typeof client.api.public.scim.Users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.scim.Users.$post(args, options))
}

export async function getApiPublicScimUsersUserId(
  args: InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.scim.Users[':userId'].$get(args, options))
}

export async function deleteApiPublicScimUsersUserId(
  args: InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.scim.Users[':userId'].$delete(args, options))
}

export async function getApiPublicScoreConfigs(
  args: InferRequestType<(typeof client.api.public)['score-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['score-configs'].$get(args, options))
}

export async function postApiPublicScoreConfigs(
  args: InferRequestType<(typeof client.api.public)['score-configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['score-configs'].$post(args, options))
}

export async function getApiPublicScoreConfigsConfigId(
  args: InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['score-configs'][':configId'].$get(args, options))
}

export async function patchApiPublicScoreConfigsConfigId(
  args: InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public['score-configs'][':configId'].$patch(args, options))
}

export async function postApiPublicScores(
  args: InferRequestType<typeof client.api.public.scores.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.scores.$post(args, options))
}

export async function deleteApiPublicScoresScoreId(
  args: InferRequestType<(typeof client.api.public.scores)[':scoreId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.scores[':scoreId'].$delete(args, options))
}

export async function getApiPublicV3Scores(
  args: InferRequestType<typeof client.api.public.v3.scores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.v3.scores.$get(args, options))
}

export async function getApiPublicSkills(
  args: InferRequestType<typeof client.api.public.skills.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.skills.$get(args, options))
}

export async function postApiPublicSkills(
  args: InferRequestType<typeof client.api.public.skills.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.skills.$post(args, options))
}

export async function getApiPublicSkillsSkillName(
  args: InferRequestType<(typeof client.api.public.skills)[':skillName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.skills[':skillName'].$get(args, options))
}

export async function patchApiPublicSkillsSkillName(
  args: InferRequestType<(typeof client.api.public.skills)[':skillName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.skills[':skillName'].$patch(args, options))
}

export async function getApiPublicSkillsFilesContent(
  args: InferRequestType<typeof client.api.public.skills.files.content.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.skills.files.content.$get(args, options))
}

export async function deleteApiPublicSkillsSkillNameVersionsSkillVersion(
  args: InferRequestType<
    (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.skills[':skillName'].versions[':skillVersion'].$delete(args, options),
  )
}

export async function patchApiPublicSkillsSkillNameVersionsSkillVersion(
  args: InferRequestType<
    (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.skills[':skillName'].versions[':skillVersion'].$patch(args, options),
  )
}

export async function deleteApiPublicTracesTraceId(
  args: InferRequestType<(typeof client.api.public.traces)[':traceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.traces[':traceId'].$delete(args, options))
}

export async function deleteApiPublicTraces(
  args: InferRequestType<typeof client.api.public.traces.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.traces.$delete(args, options))
}

export async function getApiPublicUnstableOrganizationsBillableUnits(
  args: InferRequestType<
    (typeof client.api.public.unstable.organizations)['billable-units']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable.organizations['billable-units'].$get(args, options),
  )
}

export async function getApiPublicUnstableDashboardWidgets(
  args: InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.unstable['dashboard-widgets'].$get(args, options))
}

export async function postApiPublicUnstableDashboardWidgets(
  args: InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.unstable['dashboard-widgets'].$post(args, options))
}

export async function getApiPublicUnstableDashboardWidgetsWidgetId(
  args: InferRequestType<
    (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable['dashboard-widgets'][':widgetId'].$get(args, options),
  )
}

export async function deleteApiPublicUnstableDashboardWidgetsWidgetId(
  args: InferRequestType<
    (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable['dashboard-widgets'][':widgetId'].$delete(args, options),
  )
}

export async function patchApiPublicUnstableDashboardWidgetsWidgetId(
  args: InferRequestType<
    (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable['dashboard-widgets'][':widgetId'].$patch(args, options),
  )
}

export async function getApiPublicUnstableDashboards(
  args: InferRequestType<typeof client.api.public.unstable.dashboards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.unstable.dashboards.$get(args, options))
}

export async function postApiPublicUnstableDashboards(
  args: InferRequestType<typeof client.api.public.unstable.dashboards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.unstable.dashboards.$post(args, options))
}

export async function getApiPublicUnstableDashboardsDashboardId(
  args: InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable.dashboards[':dashboardId'].$get(args, options),
  )
}

export async function deleteApiPublicUnstableDashboardsDashboardId(
  args: InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable.dashboards[':dashboardId'].$delete(args, options),
  )
}

export async function patchApiPublicUnstableDashboardsDashboardId(
  args: InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable.dashboards[':dashboardId'].$patch(args, options),
  )
}

export async function postApiPublicUnstableDashboardsDashboardIdPlacements(
  args: InferRequestType<
    (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable.dashboards[':dashboardId'].placements.$post(args, options),
  )
}

export async function deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementId(
  args: InferRequestType<
    (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable.dashboards[':dashboardId'].placements[':placementId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementId(
  args: InferRequestType<
    (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable.dashboards[':dashboardId'].placements[':placementId'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiPublicUnstableTopicFacets(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.unstable['topic-facets'].$get(args, options))
}

export async function getApiPublicUnstableTopicFacetsFacetId(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable['topic-facets'][':facetId'].$get(args, options),
  )
}

export async function getApiPublicUnstableTopics(
  args: InferRequestType<typeof client.api.public.unstable.topics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.unstable.topics.$get(args, options))
}

export async function getApiPublicUnstableTopicsTopicStableId(
  args: InferRequestType<(typeof client.api.public.unstable.topics)[':topicStableId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable.topics[':topicStableId'].$get(args, options),
  )
}

export async function getApiPublicUnstableTopicRules(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.unstable['topic-rules'].$get(args, options))
}

export async function getApiPublicUnstableTopicRulesRuleId(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.public.unstable['topic-rules'][':ruleId'].$get(args, options),
  )
}

export async function getApiPublicUnstableTopicSummaries(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-summaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.unstable['topic-summaries'].$get(args, options))
}

export async function getApiPublicUnstableTopicAssignments(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.public.unstable['topic-assignments'].$get(args, options))
}
