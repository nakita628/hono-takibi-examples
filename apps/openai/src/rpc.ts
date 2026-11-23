import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAssistants(
  args: InferRequestType<typeof client.assistants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistants.$get(args, options))
}

export async function postAssistants(
  args: InferRequestType<typeof client.assistants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistants.$post(args, options))
}

export async function getAssistantsAssistantId(
  args: InferRequestType<(typeof client.assistants)[':assistant_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistants[':assistant_id'].$get(args, options))
}

export async function postAssistantsAssistantId(
  args: InferRequestType<(typeof client.assistants)[':assistant_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistants[':assistant_id'].$post(args, options))
}

export async function deleteAssistantsAssistantId(
  args: InferRequestType<(typeof client.assistants)[':assistant_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistants[':assistant_id'].$delete(args, options))
}

export async function postAudioSpeech(
  args: InferRequestType<typeof client.audio.speech.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.speech.$post(args, options))
}

export async function postAudioTranscriptions(
  args: InferRequestType<typeof client.audio.transcriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.transcriptions.$post(args, options))
}

export async function postAudioTranslations(
  args: InferRequestType<typeof client.audio.translations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.translations.$post(args, options))
}

export async function getAudioVoiceConsents(
  args: InferRequestType<typeof client.audio.voice_consents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.voice_consents.$get(args, options))
}

export async function postAudioVoiceConsents(
  args: InferRequestType<typeof client.audio.voice_consents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.voice_consents.$post(args, options))
}

export async function getAudioVoiceConsentsConsentId(
  args: InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.voice_consents[':consent_id'].$get(args, options))
}

export async function postAudioVoiceConsentsConsentId(
  args: InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.voice_consents[':consent_id'].$post(args, options))
}

export async function deleteAudioVoiceConsentsConsentId(
  args: InferRequestType<(typeof client.audio.voice_consents)[':consent_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.voice_consents[':consent_id'].$delete(args, options))
}

export async function postAudioVoices(
  args: InferRequestType<typeof client.audio.voices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.voices.$post(args, options))
}

export async function deleteAudioVoicesVoiceId(
  args: InferRequestType<(typeof client.audio.voices)[':voice_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.voices[':voice_id'].$delete(args, options))
}

export async function getBatches(
  args: InferRequestType<typeof client.batches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches.$get(args, options))
}

export async function postBatches(
  args: InferRequestType<typeof client.batches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches.$post(args, options))
}

export async function getBatchesBatchId(
  args: InferRequestType<(typeof client.batches)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches[':batch_id'].$get(args, options))
}

export async function postBatchesBatchIdCancel(
  args: InferRequestType<(typeof client.batches)[':batch_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches[':batch_id'].cancel.$post(args, options))
}

export async function getChatCompletions(
  args: InferRequestType<typeof client.chat.completions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.completions.$get(args, options))
}

export async function postChatCompletions(
  args: InferRequestType<typeof client.chat.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.completions.$post(args, options))
}

export async function getChatCompletionsCompletionId(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.completions[':completion_id'].$get(args, options))
}

export async function postChatCompletionsCompletionId(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.completions[':completion_id'].$post(args, options))
}

export async function deleteChatCompletionsCompletionId(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.completions[':completion_id'].$delete(args, options))
}

export async function getChatCompletionsCompletionIdMessages(
  args: InferRequestType<(typeof client.chat.completions)[':completion_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.completions[':completion_id'].messages.$get(args, options))
}

export async function postCompletions(
  args: InferRequestType<typeof client.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.completions.$post(args, options))
}

export async function getContainers(
  args: InferRequestType<typeof client.containers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.containers.$get(args, options))
}

export async function postContainers(
  args: InferRequestType<typeof client.containers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.containers.$post(args, options))
}

export async function getContainersContainerId(
  args: InferRequestType<(typeof client.containers)[':container_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.containers[':container_id'].$get(args, options))
}

export async function deleteContainersContainerId(
  args: InferRequestType<(typeof client.containers)[':container_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.containers[':container_id'].$delete(args, options))
}

export async function getContainersContainerIdFiles(
  args: InferRequestType<(typeof client.containers)[':container_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.containers[':container_id'].files.$get(args, options))
}

export async function postContainersContainerIdFiles(
  args: InferRequestType<(typeof client.containers)[':container_id']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.containers[':container_id'].files.$post(args, options))
}

export async function getContainersContainerIdFilesFileId(
  args: InferRequestType<(typeof client.containers)[':container_id']['files'][':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.containers[':container_id'].files[':file_id'].$get(args, options),
  )
}

export async function deleteContainersContainerIdFilesFileId(
  args: InferRequestType<
    (typeof client.containers)[':container_id']['files'][':file_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.containers[':container_id'].files[':file_id'].$delete(args, options),
  )
}

export async function getContainersContainerIdFilesFileIdContent(
  args: InferRequestType<
    (typeof client.containers)[':container_id']['files'][':file_id']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.containers[':container_id'].files[':file_id'].content.$get(args, options),
  )
}

export async function getConversationsConversationIdItems(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].items.$get(args, options))
}

export async function postConversationsConversationIdItems(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].items.$post(args, options))
}

export async function getConversationsConversationIdItemsItemId(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['items'][':item_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':conversation_id'].items[':item_id'].$get(args, options),
  )
}

export async function deleteConversationsConversationIdItemsItemId(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['items'][':item_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':conversation_id'].items[':item_id'].$delete(args, options),
  )
}

export async function postEmbeddings(
  args: InferRequestType<typeof client.embeddings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.embeddings.$post(args, options))
}

export async function getEvals(
  args: InferRequestType<typeof client.evals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evals.$get(args, options))
}

export async function postEvals(
  args: InferRequestType<typeof client.evals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evals.$post(args, options))
}

export async function getEvalsEvalId(
  args: InferRequestType<(typeof client.evals)[':eval_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evals[':eval_id'].$get(args, options))
}

export async function postEvalsEvalId(
  args: InferRequestType<(typeof client.evals)[':eval_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evals[':eval_id'].$post(args, options))
}

export async function deleteEvalsEvalId(
  args: InferRequestType<(typeof client.evals)[':eval_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evals[':eval_id'].$delete(args, options))
}

export async function getEvalsEvalIdRuns(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evals[':eval_id'].runs.$get(args, options))
}

export async function postEvalsEvalIdRuns(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evals[':eval_id'].runs.$post(args, options))
}

export async function getEvalsEvalIdRunsRunId(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evals[':eval_id'].runs[':run_id'].$get(args, options))
}

export async function deleteEvalsEvalIdRunsRunId(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evals[':eval_id'].runs[':run_id'].$delete(args, options))
}

export async function postEvalsEvalIdRunsRunIdCancel(
  args: InferRequestType<(typeof client.evals)[':eval_id']['runs'][':run_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evals[':eval_id'].runs[':run_id'].cancel.$post(args, options))
}

export async function getEvalsEvalIdRunsRunIdOutputItems(
  args: InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.evals[':eval_id'].runs[':run_id'].output_items.$get(args, options),
  )
}

export async function getEvalsEvalIdRunsRunIdOutputItemsOutputItemId(
  args: InferRequestType<
    (typeof client.evals)[':eval_id']['runs'][':run_id']['output_items'][':output_item_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.evals[':eval_id'].runs[':run_id'].output_items[':output_item_id'].$get(args, options),
  )
}

export async function getFiles(
  args: InferRequestType<typeof client.files.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$get(args, options))
}

export async function postFiles(
  args: InferRequestType<typeof client.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$post(args, options))
}

export async function getFilesFileId(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].$get(args, options))
}

export async function deleteFilesFileId(
  args: InferRequestType<(typeof client.files)[':file_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].$delete(args, options))
}

export async function getFilesFileIdContent(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].content.$get(args, options))
}

export async function postFineTuningAlphaGradersRun(
  args: InferRequestType<typeof client.fine_tuning.alpha.graders.run.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fine_tuning.alpha.graders.run.$post(args, options))
}

export async function postFineTuningAlphaGradersValidate(
  args: InferRequestType<typeof client.fine_tuning.alpha.graders.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fine_tuning.alpha.graders.validate.$post(args, options))
}

export async function getFineTuningCheckpointsFineTunedModelCheckpointPermissions(
  args: InferRequestType<
    (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.fine_tuning.checkpoints[':fine_tuned_model_checkpoint'].permissions.$get(args, options),
  )
}

export async function postFineTuningCheckpointsFineTunedModelCheckpointPermissions(
  args: InferRequestType<
    (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.fine_tuning.checkpoints[':fine_tuned_model_checkpoint'].permissions.$post(args, options),
  )
}

export async function deleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionId(
  args: InferRequestType<
    (typeof client.fine_tuning.checkpoints)[':fine_tuned_model_checkpoint']['permissions'][':permission_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.fine_tuning.checkpoints[':fine_tuned_model_checkpoint'].permissions[
      ':permission_id'
    ].$delete(args, options),
  )
}

export async function getFineTuningJobs(
  args: InferRequestType<typeof client.fine_tuning.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fine_tuning.jobs.$get(args, options))
}

export async function postFineTuningJobs(
  args: InferRequestType<typeof client.fine_tuning.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fine_tuning.jobs.$post(args, options))
}

export async function getFineTuningJobsFineTuningJobId(
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fine_tuning.jobs[':fine_tuning_job_id'].$get(args, options))
}

export async function postFineTuningJobsFineTuningJobIdCancel(
  args: InferRequestType<
    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.fine_tuning.jobs[':fine_tuning_job_id'].cancel.$post(args, options),
  )
}

export async function getFineTuningJobsFineTuningJobIdCheckpoints(
  args: InferRequestType<
    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['checkpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.fine_tuning.jobs[':fine_tuning_job_id'].checkpoints.$get(args, options),
  )
}

export async function getFineTuningJobsFineTuningJobIdEvents(
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.fine_tuning.jobs[':fine_tuning_job_id'].events.$get(args, options),
  )
}

export async function postFineTuningJobsFineTuningJobIdPause(
  args: InferRequestType<(typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.fine_tuning.jobs[':fine_tuning_job_id'].pause.$post(args, options),
  )
}

export async function postFineTuningJobsFineTuningJobIdResume(
  args: InferRequestType<
    (typeof client.fine_tuning.jobs)[':fine_tuning_job_id']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.fine_tuning.jobs[':fine_tuning_job_id'].resume.$post(args, options),
  )
}

export async function postImagesEdits(
  args: InferRequestType<typeof client.images.edits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.edits.$post(args, options))
}

export async function postImagesGenerations(
  args: InferRequestType<typeof client.images.generations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.generations.$post(args, options))
}

export async function postImagesVariations(
  args: InferRequestType<typeof client.images.variations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.variations.$post(args, options))
}

export async function postLiveSessions(
  args: InferRequestType<typeof client.live.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.live.sessions.$post(args, options))
}

export async function postLiveSessionsSessionIdAccept(
  args: InferRequestType<(typeof client.live.sessions)[':session_id']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.live.sessions[':session_id'].accept.$post(args, options))
}

export async function postLiveSessionsSessionIdFork(
  args: InferRequestType<(typeof client.live.sessions)[':session_id']['fork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.live.sessions[':session_id'].fork.$post(args, options))
}

export async function postLiveSessionsSessionIdHangup(
  args: InferRequestType<(typeof client.live.sessions)[':session_id']['hangup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.live.sessions[':session_id'].hangup.$post(args, options))
}

export async function postLiveSessionsSessionIdRefer(
  args: InferRequestType<(typeof client.live.sessions)[':session_id']['refer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.live.sessions[':session_id'].refer.$post(args, options))
}

export async function postLiveSessionsSessionIdReject(
  args: InferRequestType<(typeof client.live.sessions)[':session_id']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.live.sessions[':session_id'].reject.$post(args, options))
}

export async function getModels(options?: ClientRequestOptions) {
  return await parseResponse(client.models.$get(undefined, options))
}

export async function getModelsModel(
  args: InferRequestType<(typeof client.models)[':model']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':model'].$get(args, options))
}

export async function deleteModelsModel(
  args: InferRequestType<(typeof client.models)[':model']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':model'].$delete(args, options))
}

export async function postModerations(
  args: InferRequestType<typeof client.moderations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderations.$post(args, options))
}

export async function getOrganizationAdminApiKeys(
  args: InferRequestType<typeof client.organization.admin_api_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.admin_api_keys.$get(args, options))
}

export async function postOrganizationAdminApiKeys(
  args: InferRequestType<typeof client.organization.admin_api_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.admin_api_keys.$post(args, options))
}

export async function getOrganizationAdminApiKeysKeyId(
  args: InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.admin_api_keys[':key_id'].$get(args, options))
}

export async function deleteOrganizationAdminApiKeysKeyId(
  args: InferRequestType<(typeof client.organization.admin_api_keys)[':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.admin_api_keys[':key_id'].$delete(args, options))
}

export async function getOrganizationAuditLogs(
  args: InferRequestType<typeof client.organization.audit_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.audit_logs.$get(args, options))
}

export async function getOrganizationCertificates(
  args: InferRequestType<typeof client.organization.certificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.certificates.$get(args, options))
}

export async function postOrganizationCertificates(
  args: InferRequestType<typeof client.organization.certificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.certificates.$post(args, options))
}

export async function postOrganizationCertificatesActivate(
  args: InferRequestType<typeof client.organization.certificates.activate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.certificates.activate.$post(args, options))
}

export async function postOrganizationCertificatesDeactivate(
  args: InferRequestType<typeof client.organization.certificates.deactivate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.certificates.deactivate.$post(args, options))
}

export async function getOrganizationCertificatesCertificateId(
  args: InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.certificates[':certificate_id'].$get(args, options),
  )
}

export async function postOrganizationCertificatesCertificateId(
  args: InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.certificates[':certificate_id'].$post(args, options),
  )
}

export async function deleteOrganizationCertificatesCertificateId(
  args: InferRequestType<(typeof client.organization.certificates)[':certificate_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.certificates[':certificate_id'].$delete(args, options),
  )
}

export async function getOrganizationCosts(
  args: InferRequestType<typeof client.organization.costs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.costs.$get(args, options))
}

export async function getOrganizationDataRetention(options?: ClientRequestOptions) {
  return await parseResponse(client.organization.data_retention.$get(undefined, options))
}

export async function postOrganizationDataRetention(
  args: InferRequestType<typeof client.organization.data_retention.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.data_retention.$post(args, options))
}

export async function getOrganizationGroups(
  args: InferRequestType<typeof client.organization.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.groups.$get(args, options))
}

export async function postOrganizationGroups(
  args: InferRequestType<typeof client.organization.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.groups.$post(args, options))
}

export async function getOrganizationGroupsGroupId(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.groups[':group_id'].$get(args, options))
}

export async function postOrganizationGroupsGroupId(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.groups[':group_id'].$post(args, options))
}

export async function deleteOrganizationGroupsGroupId(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.groups[':group_id'].$delete(args, options))
}

export async function getOrganizationGroupsGroupIdRoles(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.groups[':group_id'].roles.$get(args, options))
}

export async function postOrganizationGroupsGroupIdRoles(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.groups[':group_id'].roles.$post(args, options))
}

export async function getOrganizationGroupsGroupIdRolesRoleId(
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.groups[':group_id'].roles[':role_id'].$get(args, options),
  )
}

export async function deleteOrganizationGroupsGroupIdRolesRoleId(
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['roles'][':role_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.groups[':group_id'].roles[':role_id'].$delete(args, options),
  )
}

export async function getOrganizationGroupsGroupIdUsers(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.groups[':group_id'].users.$get(args, options))
}

export async function postOrganizationGroupsGroupIdUsers(
  args: InferRequestType<(typeof client.organization.groups)[':group_id']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.groups[':group_id'].users.$post(args, options))
}

export async function getOrganizationGroupsGroupIdUsersUserId(
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['users'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.groups[':group_id'].users[':user_id'].$get(args, options),
  )
}

export async function deleteOrganizationGroupsGroupIdUsersUserId(
  args: InferRequestType<
    (typeof client.organization.groups)[':group_id']['users'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.groups[':group_id'].users[':user_id'].$delete(args, options),
  )
}

export async function getOrganizationInvites(
  args: InferRequestType<typeof client.organization.invites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.invites.$get(args, options))
}

export async function postOrganizationInvites(
  args: InferRequestType<typeof client.organization.invites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.invites.$post(args, options))
}

export async function getOrganizationInvitesInviteId(
  args: InferRequestType<(typeof client.organization.invites)[':invite_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.invites[':invite_id'].$get(args, options))
}

export async function deleteOrganizationInvitesInviteId(
  args: InferRequestType<(typeof client.organization.invites)[':invite_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.invites[':invite_id'].$delete(args, options))
}

export async function getOrganizationProjects(
  args: InferRequestType<typeof client.organization.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.projects.$get(args, options))
}

export async function postOrganizationProjects(
  args: InferRequestType<typeof client.organization.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.projects.$post(args, options))
}

export async function getOrganizationProjectsProjectId(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.projects[':project_id'].$get(args, options))
}

export async function postOrganizationProjectsProjectId(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.projects[':project_id'].$post(args, options))
}

export async function getOrganizationProjectsProjectIdApiKeys(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['api_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].api_keys.$get(args, options),
  )
}

export async function getOrganizationProjectsProjectIdApiKeysApiKeyId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].api_keys[':api_key_id'].$get(args, options),
  )
}

export async function postOrganizationProjectsProjectIdApiKeysApiKeyId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].api_keys[':api_key_id'].$post(args, options),
  )
}

export async function deleteOrganizationProjectsProjectIdApiKeysApiKeyId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['api_keys'][':api_key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].api_keys[':api_key_id'].$delete(args, options),
  )
}

export async function postOrganizationProjectsProjectIdArchive(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].archive.$post(args, options),
  )
}

export async function getOrganizationProjectsProjectIdCertificates(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['certificates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].certificates.$get(args, options),
  )
}

export async function postOrganizationProjectsProjectIdCertificatesActivate(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['certificates']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].certificates.activate.$post(args, options),
  )
}

export async function postOrganizationProjectsProjectIdCertificatesDeactivate(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['certificates']['deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].certificates.deactivate.$post(args, options),
  )
}

export async function getOrganizationProjectsProjectIdDataRetention(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['data_retention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].data_retention.$get(args, options),
  )
}

export async function postOrganizationProjectsProjectIdDataRetention(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['data_retention']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].data_retention.$post(args, options),
  )
}

export async function getOrganizationProjectsProjectIdGroups(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.projects[':project_id'].groups.$get(args, options))
}

export async function postOrganizationProjectsProjectIdGroups(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].groups.$post(args, options),
  )
}

export async function getOrganizationProjectsProjectIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].groups[':group_id'].$get(args, options),
  )
}

export async function deleteOrganizationProjectsProjectIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['groups'][':group_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].groups[':group_id'].$delete(args, options),
  )
}

export async function getOrganizationProjectsProjectIdHostedToolPermissions(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].hosted_tool_permissions.$get(args, options),
  )
}

export async function postOrganizationProjectsProjectIdHostedToolPermissions(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['hosted_tool_permissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].hosted_tool_permissions.$post(args, options),
  )
}

export async function getOrganizationProjectsProjectIdModelPermissions(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['model_permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].model_permissions.$get(args, options),
  )
}

export async function postOrganizationProjectsProjectIdModelPermissions(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['model_permissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].model_permissions.$post(args, options),
  )
}

export async function deleteOrganizationProjectsProjectIdModelPermissions(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['model_permissions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].model_permissions.$delete(args, options),
  )
}

export async function getOrganizationProjectsProjectIdRateLimits(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['rate_limits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].rate_limits.$get(args, options),
  )
}

export async function postOrganizationProjectsProjectIdRateLimitsRateLimitId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['rate_limits'][':rate_limit_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].rate_limits[':rate_limit_id'].$post(args, options),
  )
}

export async function getOrganizationProjectsProjectIdServiceAccounts(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].service_accounts.$get(args, options),
  )
}

export async function postOrganizationProjectsProjectIdServiceAccounts(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].service_accounts.$post(args, options),
  )
}

export async function getOrganizationProjectsProjectIdServiceAccountsServiceAccountId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].service_accounts[':service_account_id'].$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationProjectsProjectIdServiceAccountsServiceAccountId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].service_accounts[':service_account_id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationProjectsProjectIdServiceAccountsServiceAccountId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].service_accounts[':service_account_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationProjectsProjectIdSpendAlerts(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].spend_alerts.$get(args, options),
  )
}

export async function postOrganizationProjectsProjectIdSpendAlerts(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].spend_alerts.$post(args, options),
  )
}

export async function getOrganizationProjectsProjectIdSpendAlertsAlertId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].spend_alerts[':alert_id'].$get(args, options),
  )
}

export async function postOrganizationProjectsProjectIdSpendAlertsAlertId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].spend_alerts[':alert_id'].$post(args, options),
  )
}

export async function deleteOrganizationProjectsProjectIdSpendAlertsAlertId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_alerts'][':alert_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].spend_alerts[':alert_id'].$delete(args, options),
  )
}

export async function getOrganizationProjectsProjectIdUsers(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.projects[':project_id'].users.$get(args, options))
}

export async function postOrganizationProjectsProjectIdUsers(
  args: InferRequestType<(typeof client.organization.projects)[':project_id']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.projects[':project_id'].users.$post(args, options))
}

export async function getOrganizationProjectsProjectIdUsersUserId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].users[':user_id'].$get(args, options),
  )
}

export async function postOrganizationProjectsProjectIdUsersUserId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].users[':user_id'].$post(args, options),
  )
}

export async function deleteOrganizationProjectsProjectIdUsersUserId(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['users'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].users[':user_id'].$delete(args, options),
  )
}

export async function getOrganizationRoles(
  args: InferRequestType<typeof client.organization.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.roles.$get(args, options))
}

export async function postOrganizationRoles(
  args: InferRequestType<typeof client.organization.roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.roles.$post(args, options))
}

export async function getOrganizationRolesRoleId(
  args: InferRequestType<(typeof client.organization.roles)[':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.roles[':role_id'].$get(args, options))
}

export async function postOrganizationRolesRoleId(
  args: InferRequestType<(typeof client.organization.roles)[':role_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.roles[':role_id'].$post(args, options))
}

export async function deleteOrganizationRolesRoleId(
  args: InferRequestType<(typeof client.organization.roles)[':role_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.roles[':role_id'].$delete(args, options))
}

export async function getOrganizationSpendAlerts(
  args: InferRequestType<typeof client.organization.spend_alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.spend_alerts.$get(args, options))
}

export async function postOrganizationSpendAlerts(
  args: InferRequestType<typeof client.organization.spend_alerts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.spend_alerts.$post(args, options))
}

export async function getOrganizationSpendAlertsAlertId(
  args: InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.spend_alerts[':alert_id'].$get(args, options))
}

export async function postOrganizationSpendAlertsAlertId(
  args: InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.spend_alerts[':alert_id'].$post(args, options))
}

export async function deleteOrganizationSpendAlertsAlertId(
  args: InferRequestType<(typeof client.organization.spend_alerts)[':alert_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.spend_alerts[':alert_id'].$delete(args, options))
}

export async function getOrganizationUsageAudioSpeeches(
  args: InferRequestType<typeof client.organization.usage.audio_speeches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.usage.audio_speeches.$get(args, options))
}

export async function getOrganizationUsageAudioTranscriptions(
  args: InferRequestType<typeof client.organization.usage.audio_transcriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.usage.audio_transcriptions.$get(args, options))
}

export async function getOrganizationUsageCodeInterpreterSessions(
  args: InferRequestType<typeof client.organization.usage.code_interpreter_sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.usage.code_interpreter_sessions.$get(args, options),
  )
}

export async function getOrganizationUsageCompletions(
  args: InferRequestType<typeof client.organization.usage.completions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.usage.completions.$get(args, options))
}

export async function getOrganizationUsageEmbeddings(
  args: InferRequestType<typeof client.organization.usage.embeddings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.usage.embeddings.$get(args, options))
}

export async function getOrganizationUsageFileSearchCalls(
  args: InferRequestType<typeof client.organization.usage.file_search_calls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.usage.file_search_calls.$get(args, options))
}

export async function getOrganizationUsageImages(
  args: InferRequestType<typeof client.organization.usage.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.usage.images.$get(args, options))
}

export async function getOrganizationUsageModerations(
  args: InferRequestType<typeof client.organization.usage.moderations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.usage.moderations.$get(args, options))
}

export async function getOrganizationUsageVectorStores(
  args: InferRequestType<typeof client.organization.usage.vector_stores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.usage.vector_stores.$get(args, options))
}

export async function getOrganizationUsageWebSearchCalls(
  args: InferRequestType<typeof client.organization.usage.web_search_calls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.usage.web_search_calls.$get(args, options))
}

export async function getOrganizationUsers(
  args: InferRequestType<typeof client.organization.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.users.$get(args, options))
}

export async function getOrganizationUsersUserId(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.users[':user_id'].$get(args, options))
}

export async function postOrganizationUsersUserId(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.users[':user_id'].$post(args, options))
}

export async function deleteOrganizationUsersUserId(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.users[':user_id'].$delete(args, options))
}

export async function getOrganizationUsersUserIdRoles(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.users[':user_id'].roles.$get(args, options))
}

export async function postOrganizationUsersUserIdRoles(
  args: InferRequestType<(typeof client.organization.users)[':user_id']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.users[':user_id'].roles.$post(args, options))
}

export async function getOrganizationUsersUserIdRolesRoleId(
  args: InferRequestType<
    (typeof client.organization.users)[':user_id']['roles'][':role_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.users[':user_id'].roles[':role_id'].$get(args, options),
  )
}

export async function deleteOrganizationUsersUserIdRolesRoleId(
  args: InferRequestType<
    (typeof client.organization.users)[':user_id']['roles'][':role_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.users[':user_id'].roles[':role_id'].$delete(args, options),
  )
}

export async function getProjectsProjectIdGroupsGroupIdRoles(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].groups[':group_id'].roles.$get(args, options),
  )
}

export async function postProjectsProjectIdGroupsGroupIdRoles(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].groups[':group_id'].roles.$post(args, options),
  )
}

export async function getProjectsProjectIdGroupsGroupIdRolesRoleId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].groups[':group_id'].roles[':role_id'].$get(args, options),
  )
}

export async function deleteProjectsProjectIdGroupsGroupIdRolesRoleId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['groups'][':group_id']['roles'][':role_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].groups[':group_id'].roles[':role_id'].$delete(args, options),
  )
}

export async function getProjectsProjectIdRoles(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].roles.$get(args, options))
}

export async function postProjectsProjectIdRoles(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].roles.$post(args, options))
}

export async function getProjectsProjectIdRolesRoleId(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].roles[':role_id'].$get(args, options))
}

export async function postProjectsProjectIdRolesRoleId(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].roles[':role_id'].$post(args, options))
}

export async function deleteProjectsProjectIdRolesRoleId(
  args: InferRequestType<(typeof client.projects)[':project_id']['roles'][':role_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].roles[':role_id'].$delete(args, options),
  )
}

export async function getProjectsProjectIdUsersUserIdRoles(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].users[':user_id'].roles.$get(args, options),
  )
}

export async function postProjectsProjectIdUsersUserIdRoles(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].users[':user_id'].roles.$post(args, options),
  )
}

export async function getProjectsProjectIdUsersUserIdRolesRoleId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].users[':user_id'].roles[':role_id'].$get(args, options),
  )
}

export async function deleteProjectsProjectIdUsersUserIdRolesRoleId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['users'][':user_id']['roles'][':role_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].users[':user_id'].roles[':role_id'].$delete(args, options),
  )
}

export async function postRealtimeCalls(
  args: InferRequestType<typeof client.realtime.calls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realtime.calls.$post(args, options))
}

export async function postRealtimeCallsCallIdAccept(
  args: InferRequestType<(typeof client.realtime.calls)[':call_id']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realtime.calls[':call_id'].accept.$post(args, options))
}

export async function postRealtimeCallsCallIdHangup(
  args: InferRequestType<(typeof client.realtime.calls)[':call_id']['hangup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realtime.calls[':call_id'].hangup.$post(args, options))
}

export async function postRealtimeCallsCallIdRefer(
  args: InferRequestType<(typeof client.realtime.calls)[':call_id']['refer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realtime.calls[':call_id'].refer.$post(args, options))
}

export async function postRealtimeCallsCallIdReject(
  args: InferRequestType<(typeof client.realtime.calls)[':call_id']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realtime.calls[':call_id'].reject.$post(args, options))
}

export async function postRealtimeClientSecrets(
  args: InferRequestType<typeof client.realtime.client_secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realtime.client_secrets.$post(args, options))
}

export async function postRealtimeSessions(
  args: InferRequestType<typeof client.realtime.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realtime.sessions.$post(args, options))
}

export async function postRealtimeTranscriptionSessions(
  args: InferRequestType<typeof client.realtime.transcription_sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realtime.transcription_sessions.$post(args, options))
}

export async function postRealtimeTranslationsClientSecrets(
  args: InferRequestType<typeof client.realtime.translations.client_secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.realtime.translations.client_secrets.$post(args, options))
}

export async function postResponses(
  args: InferRequestType<typeof client.responses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.responses.$post(args, options))
}

export async function getResponsesResponseId(
  args: InferRequestType<(typeof client.responses)[':response_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.responses[':response_id'].$get(args, options))
}

export async function deleteResponsesResponseId(
  args: InferRequestType<(typeof client.responses)[':response_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.responses[':response_id'].$delete(args, options))
}

export async function postResponsesResponseIdCancel(
  args: InferRequestType<(typeof client.responses)[':response_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.responses[':response_id'].cancel.$post(args, options))
}

export async function getResponsesResponseIdInputItems(
  args: InferRequestType<(typeof client.responses)[':response_id']['input_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.responses[':response_id'].input_items.$get(args, options))
}

export async function postThreads(
  args: InferRequestType<typeof client.threads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threads.$post(args, options))
}

export async function postThreadsRuns(
  args: InferRequestType<typeof client.threads.runs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threads.runs.$post(args, options))
}

export async function getThreadsThreadId(
  args: InferRequestType<(typeof client.threads)[':thread_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threads[':thread_id'].$get(args, options))
}

export async function postThreadsThreadId(
  args: InferRequestType<(typeof client.threads)[':thread_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threads[':thread_id'].$post(args, options))
}

export async function deleteThreadsThreadId(
  args: InferRequestType<(typeof client.threads)[':thread_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threads[':thread_id'].$delete(args, options))
}

export async function getThreadsThreadIdMessages(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threads[':thread_id'].messages.$get(args, options))
}

export async function postThreadsThreadIdMessages(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threads[':thread_id'].messages.$post(args, options))
}

export async function getThreadsThreadIdMessagesMessageId(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.threads[':thread_id'].messages[':message_id'].$get(args, options),
  )
}

export async function postThreadsThreadIdMessagesMessageId(
  args: InferRequestType<(typeof client.threads)[':thread_id']['messages'][':message_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.threads[':thread_id'].messages[':message_id'].$post(args, options),
  )
}

export async function deleteThreadsThreadIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.threads)[':thread_id']['messages'][':message_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.threads[':thread_id'].messages[':message_id'].$delete(args, options),
  )
}

export async function getThreadsThreadIdRuns(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threads[':thread_id'].runs.$get(args, options))
}

export async function postThreadsThreadIdRuns(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threads[':thread_id'].runs.$post(args, options))
}

export async function getThreadsThreadIdRunsRunId(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threads[':thread_id'].runs[':run_id'].$get(args, options))
}

export async function postThreadsThreadIdRunsRunId(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threads[':thread_id'].runs[':run_id'].$post(args, options))
}

export async function postThreadsThreadIdRunsRunIdCancel(
  args: InferRequestType<
    (typeof client.threads)[':thread_id']['runs'][':run_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.threads[':thread_id'].runs[':run_id'].cancel.$post(args, options),
  )
}

export async function getThreadsThreadIdRunsRunIdSteps(
  args: InferRequestType<(typeof client.threads)[':thread_id']['runs'][':run_id']['steps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threads[':thread_id'].runs[':run_id'].steps.$get(args, options))
}

export async function getThreadsThreadIdRunsRunIdStepsStepId(
  args: InferRequestType<
    (typeof client.threads)[':thread_id']['runs'][':run_id']['steps'][':step_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.threads[':thread_id'].runs[':run_id'].steps[':step_id'].$get(args, options),
  )
}

export async function postThreadsThreadIdRunsRunIdSubmitToolOutputs(
  args: InferRequestType<
    (typeof client.threads)[':thread_id']['runs'][':run_id']['submit_tool_outputs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.threads[':thread_id'].runs[':run_id'].submit_tool_outputs.$post(args, options),
  )
}

export async function postUploads(
  args: InferRequestType<typeof client.uploads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads.$post(args, options))
}

export async function postUploadsUploadIdCancel(
  args: InferRequestType<(typeof client.uploads)[':upload_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads[':upload_id'].cancel.$post(args, options))
}

export async function postUploadsUploadIdComplete(
  args: InferRequestType<(typeof client.uploads)[':upload_id']['complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads[':upload_id'].complete.$post(args, options))
}

export async function postUploadsUploadIdParts(
  args: InferRequestType<(typeof client.uploads)[':upload_id']['parts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads[':upload_id'].parts.$post(args, options))
}

export async function getVectorStores(
  args: InferRequestType<typeof client.vector_stores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vector_stores.$get(args, options))
}

export async function postVectorStores(
  args: InferRequestType<typeof client.vector_stores.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vector_stores.$post(args, options))
}

export async function getVectorStoresVectorStoreId(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vector_stores[':vector_store_id'].$get(args, options))
}

export async function postVectorStoresVectorStoreId(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vector_stores[':vector_store_id'].$post(args, options))
}

export async function deleteVectorStoresVectorStoreId(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vector_stores[':vector_store_id'].$delete(args, options))
}

export async function postVectorStoresVectorStoreIdFileBatches(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vector_stores[':vector_store_id'].file_batches.$post(args, options),
  )
}

export async function getVectorStoresVectorStoreIdFileBatchesBatchId(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vector_stores[':vector_store_id'].file_batches[':batch_id'].$get(args, options),
  )
}

export async function postVectorStoresVectorStoreIdFileBatchesBatchIdCancel(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vector_stores[':vector_store_id'].file_batches[':batch_id'].cancel.$post(args, options),
  )
}

export async function getVectorStoresVectorStoreIdFileBatchesBatchIdFiles(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['file_batches'][':batch_id']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vector_stores[':vector_store_id'].file_batches[':batch_id'].files.$get(args, options),
  )
}

export async function getVectorStoresVectorStoreIdFiles(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vector_stores[':vector_store_id'].files.$get(args, options))
}

export async function postVectorStoresVectorStoreIdFiles(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vector_stores[':vector_store_id'].files.$post(args, options))
}

export async function getVectorStoresVectorStoreIdFilesFileId(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vector_stores[':vector_store_id'].files[':file_id'].$get(args, options),
  )
}

export async function postVectorStoresVectorStoreIdFilesFileId(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vector_stores[':vector_store_id'].files[':file_id'].$post(args, options),
  )
}

export async function deleteVectorStoresVectorStoreIdFilesFileId(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vector_stores[':vector_store_id'].files[':file_id'].$delete(args, options),
  )
}

export async function getVectorStoresVectorStoreIdFilesFileIdContent(
  args: InferRequestType<
    (typeof client.vector_stores)[':vector_store_id']['files'][':file_id']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vector_stores[':vector_store_id'].files[':file_id'].content.$get(args, options),
  )
}

export async function postVectorStoresVectorStoreIdSearch(
  args: InferRequestType<(typeof client.vector_stores)[':vector_store_id']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vector_stores[':vector_store_id'].search.$post(args, options))
}

export async function postConversations(
  args: InferRequestType<typeof client.conversations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.$post(args, options))
}

export async function getConversationsConversationId(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].$get(args, options))
}

export async function postConversationsConversationId(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].$post(args, options))
}

export async function deleteConversationsConversationId(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].$delete(args, options))
}

export async function getSafetyCasesId(
  args: InferRequestType<(typeof client.safety.cases)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.safety.cases[':id'].$get(args, options))
}

export async function getSafetyAlertsId(
  args: InferRequestType<(typeof client.safety.alerts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.safety.alerts[':id'].$get(args, options))
}

export async function getOrganizationExternalKeys(
  args: InferRequestType<typeof client.organization.external_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.external_keys.$get(args, options))
}

export async function postOrganizationExternalKeys(
  args: InferRequestType<typeof client.organization.external_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.external_keys.$post(args, options))
}

export async function getOrganizationExternalKeysExternalKeyId(
  args: InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.external_keys[':external_key_id'].$get(args, options),
  )
}

export async function deleteOrganizationExternalKeysExternalKeyId(
  args: InferRequestType<(typeof client.organization.external_keys)[':external_key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.external_keys[':external_key_id'].$delete(args, options),
  )
}

export async function postOrganizationExternalKeysExternalKeyIdValidate(
  args: InferRequestType<
    (typeof client.organization.external_keys)[':external_key_id']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.external_keys[':external_key_id'].validate.$post(args, options),
  )
}

export async function getLiveSessionsSessionIdContent(
  args: InferRequestType<(typeof client.live.sessions)[':session_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.live.sessions[':session_id'].content.$get(args, options))
}

export async function getOrganizationWorkloadIdentityProviders(
  args: InferRequestType<typeof client.organization.workload_identity_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.workload_identity_providers.$get(args, options))
}

export async function postOrganizationWorkloadIdentityProviders(
  args: InferRequestType<typeof client.organization.workload_identity_providers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.workload_identity_providers.$post(args, options))
}

export async function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.workload_identity_providers[':workload_identity_provider_id'].$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.workload_identity_providers[':workload_identity_provider_id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderId(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.workload_identity_providers[':workload_identity_provider_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRules(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.workload_identity_providers[
      ':workload_identity_provider_id'
    ].federation_rules.$get(args, options),
  )
}

export async function postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRules(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.workload_identity_providers[
      ':workload_identity_provider_id'
    ].federation_rules.$post(args, options),
  )
}

export async function getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.workload_identity_providers[
      ':workload_identity_provider_id'
    ].federation_rules[':workload_identity_federation_rule_id'].$get(args, options),
  )
}

export async function postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.workload_identity_providers[
      ':workload_identity_provider_id'
    ].federation_rules[':workload_identity_federation_rule_id'].$post(args, options),
  )
}

export async function deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleId(
  args: InferRequestType<
    (typeof client.organization.workload_identity_providers)[':workload_identity_provider_id']['federation_rules'][':workload_identity_federation_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.workload_identity_providers[
      ':workload_identity_provider_id'
    ].federation_rules[':workload_identity_federation_rule_id'].$delete(args, options),
  )
}

export async function getOrganizationUsageDecisions(
  args: InferRequestType<typeof client.organization.usage.decisions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.usage.decisions.$get(args, options))
}

export async function getOrganizationExternalStorage(
  args: InferRequestType<typeof client.organization.external_storage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.external_storage.$get(args, options))
}

export async function postOrganizationExternalStorage(
  args: InferRequestType<typeof client.organization.external_storage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.external_storage.$post(args, options))
}

export async function getOrganizationExternalStorageExternalStorageId(
  args: InferRequestType<
    (typeof client.organization.external_storage)[':external_storage_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.external_storage[':external_storage_id'].$get(args, options),
  )
}

export async function deleteOrganizationExternalStorageExternalStorageId(
  args: InferRequestType<
    (typeof client.organization.external_storage)[':external_storage_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.external_storage[':external_storage_id'].$delete(args, options),
  )
}

export async function postOrganizationExternalStorageExternalStorageIdValidate(
  args: InferRequestType<
    (typeof client.organization.external_storage)[':external_storage_id']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.external_storage[':external_storage_id'].validate.$post(args, options),
  )
}

export async function getOrganizationSpendLimit(options?: ClientRequestOptions) {
  return await parseResponse(client.organization.spend_limit.$get(undefined, options))
}

export async function postOrganizationSpendLimit(
  args: InferRequestType<typeof client.organization.spend_limit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.spend_limit.$post(args, options))
}

export async function deleteOrganizationSpendLimit(options?: ClientRequestOptions) {
  return await parseResponse(client.organization.spend_limit.$delete(undefined, options))
}

export async function getOrganizationProjectsProjectIdSpendLimit(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_limit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].spend_limit.$get(args, options),
  )
}

export async function postOrganizationProjectsProjectIdSpendLimit(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_limit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].spend_limit.$post(args, options),
  )
}

export async function deleteOrganizationProjectsProjectIdSpendLimit(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['spend_limit']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].spend_limit.$delete(args, options),
  )
}

export async function getOrganizationProjectsProjectIdServiceTierSettings(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_tier_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].service_tier_settings.$get(args, options),
  )
}

export async function postOrganizationProjectsProjectIdServiceTierSettings(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_tier_settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].service_tier_settings.$post(args, options),
  )
}

export async function postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeys(
  args: InferRequestType<
    (typeof client.organization.projects)[':project_id']['service_accounts'][':service_account_id']['api_keys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.projects[':project_id'].service_accounts[
      ':service_account_id'
    ].api_keys.$post(args, options),
  )
}

export async function postContentProvenanceChecks(
  args: InferRequestType<typeof client.content_provenance_checks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content_provenance_checks.$post(args, options))
}

export async function getVideos(
  args: InferRequestType<typeof client.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos.$get(args, options))
}

export async function postVideos(
  args: InferRequestType<typeof client.videos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos.$post(args, options))
}

export async function postVideosCharacters(
  args: InferRequestType<typeof client.videos.characters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos.characters.$post(args, options))
}

export async function getVideosCharactersCharacterId(
  args: InferRequestType<(typeof client.videos.characters)[':character_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos.characters[':character_id'].$get(args, options))
}

export async function postVideosEdits(
  args: InferRequestType<typeof client.videos.edits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos.edits.$post(args, options))
}

export async function postVideosExtensions(
  args: InferRequestType<typeof client.videos.extensions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos.extensions.$post(args, options))
}

export async function getVideosVideoId(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].$get(args, options))
}

export async function deleteVideosVideoId(
  args: InferRequestType<(typeof client.videos)[':video_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].$delete(args, options))
}

export async function getVideosVideoIdContent(
  args: InferRequestType<(typeof client.videos)[':video_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].content.$get(args, options))
}

export async function postVideosVideoIdRemix(
  args: InferRequestType<(typeof client.videos)[':video_id']['remix']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].remix.$post(args, options))
}

export async function postResponsesInputTokens(
  args: InferRequestType<typeof client.responses.input_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.responses.input_tokens.$post(args, options))
}

export async function postResponsesCompact(
  args: InferRequestType<typeof client.responses.compact.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.responses.compact.$post(args, options))
}

export async function getSkills(
  args: InferRequestType<typeof client.skills.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skills.$get(args, options))
}

export async function postSkills(
  args: InferRequestType<typeof client.skills.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skills.$post(args, options))
}

export async function getSkillsSkillId(
  args: InferRequestType<(typeof client.skills)[':skill_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skills[':skill_id'].$get(args, options))
}

export async function postSkillsSkillId(
  args: InferRequestType<(typeof client.skills)[':skill_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skills[':skill_id'].$post(args, options))
}

export async function deleteSkillsSkillId(
  args: InferRequestType<(typeof client.skills)[':skill_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skills[':skill_id'].$delete(args, options))
}

export async function getSkillsSkillIdContent(
  args: InferRequestType<(typeof client.skills)[':skill_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skills[':skill_id'].content.$get(args, options))
}

export async function getSkillsSkillIdVersions(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skills[':skill_id'].versions.$get(args, options))
}

export async function postSkillsSkillIdVersions(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skills[':skill_id'].versions.$post(args, options))
}

export async function getSkillsSkillIdVersionsVersion(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skills[':skill_id'].versions[':version'].$get(args, options))
}

export async function deleteSkillsSkillIdVersionsVersion(
  args: InferRequestType<(typeof client.skills)[':skill_id']['versions'][':version']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skills[':skill_id'].versions[':version'].$delete(args, options))
}

export async function getSkillsSkillIdVersionsVersionContent(
  args: InferRequestType<
    (typeof client.skills)[':skill_id']['versions'][':version']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.skills[':skill_id'].versions[':version'].content.$get(args, options),
  )
}

export async function postChatkitSessionsSessionIdCancel(
  args: InferRequestType<(typeof client.chatkit.sessions)[':session_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chatkit.sessions[':session_id'].cancel.$post(args, options))
}

export async function postChatkitSessions(
  args: InferRequestType<typeof client.chatkit.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chatkit.sessions.$post(args, options))
}

export async function getChatkitThreadsThreadIdItems(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chatkit.threads[':thread_id'].items.$get(args, options))
}

export async function getChatkitThreadsThreadId(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chatkit.threads[':thread_id'].$get(args, options))
}

export async function deleteChatkitThreadsThreadId(
  args: InferRequestType<(typeof client.chatkit.threads)[':thread_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chatkit.threads[':thread_id'].$delete(args, options))
}

export async function getChatkitThreads(
  args: InferRequestType<typeof client.chatkit.threads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chatkit.threads.$get(args, options))
}

export async function postDecisions(
  args: InferRequestType<typeof client.decisions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.decisions.$post(args, options))
}

export async function getAgentsAutomations(
  args: InferRequestType<typeof client.agents.automations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.automations.$get(args, options))
}

export async function postAgentsAutomations(
  args: InferRequestType<typeof client.agents.automations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.automations.$post(args, options))
}

export async function getAgentsAutomationsAutomationId(
  args: InferRequestType<(typeof client.agents.automations)[':automation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.automations[':automation_id'].$get(args, options))
}

export async function postAgentsAutomationsAutomationId(
  args: InferRequestType<(typeof client.agents.automations)[':automation_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.automations[':automation_id'].$post(args, options))
}

export async function deleteAgentsAutomationsAutomationId(
  args: InferRequestType<(typeof client.agents.automations)[':automation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.automations[':automation_id'].$delete(args, options))
}

export async function postAgentsAutomationsAutomationIdPause(
  args: InferRequestType<(typeof client.agents.automations)[':automation_id']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.automations[':automation_id'].pause.$post(args, options))
}

export async function postAgentsAutomationsAutomationIdResume(
  args: InferRequestType<(typeof client.agents.automations)[':automation_id']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.automations[':automation_id'].resume.$post(args, options),
  )
}

export async function getAgentsAutomationsAutomationIdInvocations(
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.automations[':automation_id'].invocations.$get(args, options),
  )
}

export async function postAgentsAutomationsAutomationIdInvocations(
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.automations[':automation_id'].invocations.$post(args, options),
  )
}

export async function getAgentsAutomationsAutomationIdInvocationsInvocationId(
  args: InferRequestType<
    (typeof client.agents.automations)[':automation_id']['invocations'][':invocation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.automations[':automation_id'].invocations[':invocation_id'].$get(args, options),
  )
}

export async function getAgentsEnvironments(
  args: InferRequestType<typeof client.agents.environments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.environments.$get(args, options))
}

export async function postAgentsEnvironments(
  args: InferRequestType<typeof client.agents.environments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.environments.$post(args, options))
}

export async function getAgentsEnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.environments[':environment_id'].$get(args, options))
}

export async function getAgentsEnvironmentsEnvironmentIdFiles(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.environments[':environment_id'].files.$get(args, options),
  )
}

export async function postAgentsEnvironmentsEnvironmentIdFiles(
  args: InferRequestType<(typeof client.agents.environments)[':environment_id']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.environments[':environment_id'].files.$post(args, options),
  )
}

export async function getAgentsSessionsSessionIdSubagents(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['subagents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions[':session_id'].subagents.$get(args, options))
}

export async function getAgentsSessionsSessionIdSubagentsSubagentId(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.sessions[':session_id'].subagents[':subagent_id'].$get(args, options),
  )
}

export async function getAgentsSessionsSessionIdSubagentsSubagentIdItems(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.sessions[':session_id'].subagents[':subagent_id'].items.$get(args, options),
  )
}

export async function getAgentsSessionsSessionIdSubagentsSubagentIdTurns(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.sessions[':session_id'].subagents[':subagent_id'].turns.$get(args, options),
  )
}

export async function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnId(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.sessions[':session_id'].subagents[':subagent_id'].turns[':turn_id'].$get(
      args,
      options,
    ),
  )
}

export async function getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItems(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['subagents'][':subagent_id']['turns'][':turn_id']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.sessions[':session_id'].subagents[':subagent_id'].turns[':turn_id'].items.$get(
      args,
      options,
    ),
  )
}

export async function getAgents(
  args: InferRequestType<typeof client.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.$get(args, options))
}

export async function postAgents(
  args: InferRequestType<typeof client.agents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.$post(args, options))
}

export async function getAgentsAgentId(
  args: InferRequestType<(typeof client.agents)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents[':agent_id'].$get(args, options))
}

export async function postAgentsAgentId(
  args: InferRequestType<(typeof client.agents)[':agent_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents[':agent_id'].$post(args, options))
}

export async function deleteAgentsAgentId(
  args: InferRequestType<(typeof client.agents)[':agent_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents[':agent_id'].$delete(args, options))
}

export async function getAgentsEnvironmentsTemplates(
  args: InferRequestType<typeof client.agents.environments.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.environments.templates.$get(args, options))
}

export async function postAgentsEnvironmentsTemplates(
  args: InferRequestType<typeof client.agents.environments.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.environments.templates.$post(args, options))
}

export async function getAgentsEnvironmentsTemplatesEnvironmentTemplateId(
  args: InferRequestType<
    (typeof client.agents.environments.templates)[':environment_template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.environments.templates[':environment_template_id'].$get(args, options),
  )
}

export async function postAgentsEnvironmentsTemplatesEnvironmentTemplateId(
  args: InferRequestType<
    (typeof client.agents.environments.templates)[':environment_template_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.environments.templates[':environment_template_id'].$post(args, options),
  )
}

export async function deleteAgentsEnvironmentsTemplatesEnvironmentTemplateId(
  args: InferRequestType<
    (typeof client.agents.environments.templates)[':environment_template_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.environments.templates[':environment_template_id'].$delete(args, options),
  )
}

export async function getAgentsSessions(
  args: InferRequestType<typeof client.agents.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions.$get(args, options))
}

export async function postAgentsSessions(
  args: InferRequestType<typeof client.agents.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions.$post(args, options))
}

export async function getAgentsSessionsSessionId(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions[':session_id'].$get(args, options))
}

export async function postAgentsSessionsSessionId(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions[':session_id'].$post(args, options))
}

export async function deleteAgentsSessionsSessionId(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions[':session_id'].$delete(args, options))
}

export async function getAgentsSessionsSessionIdArtifacts(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['artifacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions[':session_id'].artifacts.$get(args, options))
}

export async function getAgentsSessionsSessionIdArtifactsArtifactId(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.sessions[':session_id'].artifacts[':artifact_id'].$get(args, options),
  )
}

export async function deleteAgentsSessionsSessionIdArtifactsArtifactId(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.sessions[':session_id'].artifacts[':artifact_id'].$delete(args, options),
  )
}

export async function getAgentsSessionsSessionIdArtifactsArtifactIdContent(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['artifacts'][':artifact_id']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.sessions[':session_id'].artifacts[':artifact_id'].content.$get(args, options),
  )
}

export async function getAgentsSessionsSessionIdEvents(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions[':session_id'].events.$get(args, options))
}

export async function postAgentsSessionsSessionIdEvents(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions[':session_id'].events.$post(args, options))
}

export async function getAgentsSessionsSessionIdItems(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions[':session_id'].items.$get(args, options))
}

export async function getAgentsSessionsSessionIdTraces(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['traces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions[':session_id'].traces.$get(args, options))
}

export async function getAgentsSessionsSessionIdTurns(
  args: InferRequestType<(typeof client.agents.sessions)[':session_id']['turns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions[':session_id'].turns.$get(args, options))
}

export async function getAgentsSessionsSessionIdTurnsTurnId(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.sessions[':session_id'].turns[':turn_id'].$get(args, options),
  )
}

export async function getAgentsSessionsSessionIdTurnsTurnIdItems(
  args: InferRequestType<
    (typeof client.agents.sessions)[':session_id']['turns'][':turn_id']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.sessions[':session_id'].turns[':turn_id'].items.$get(args, options),
  )
}

export async function getVaults(
  args: InferRequestType<typeof client.vaults.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults.$get(args, options))
}

export async function postVaults(
  args: InferRequestType<typeof client.vaults.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults.$post(args, options))
}

export async function getVaultsVaultId(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vault_id'].$get(args, options))
}

export async function postVaultsVaultId(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vault_id'].$post(args, options))
}

export async function deleteVaultsVaultId(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vault_id'].$delete(args, options))
}

export async function getVaultsVaultIdCredentials(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vault_id'].credentials.$get(args, options))
}

export async function postVaultsVaultIdCredentials(
  args: InferRequestType<(typeof client.vaults)[':vault_id']['credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vault_id'].credentials.$post(args, options))
}

export async function getVaultsVaultIdCredentialsCredentialId(
  args: InferRequestType<
    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vaults[':vault_id'].credentials[':credential_id'].$get(args, options),
  )
}

export async function postVaultsVaultIdCredentialsCredentialId(
  args: InferRequestType<
    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vaults[':vault_id'].credentials[':credential_id'].$post(args, options),
  )
}

export async function deleteVaultsVaultIdCredentialsCredentialId(
  args: InferRequestType<
    (typeof client.vaults)[':vault_id']['credentials'][':credential_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vaults[':vault_id'].credentials[':credential_id'].$delete(args, options),
  )
}

export async function getWebhookEndpoints(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints.$get(args, options))
}

export async function postWebhookEndpoints(
  args: InferRequestType<typeof client.webhook_endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints.$post(args, options))
}

export async function getWebhookEndpointsWebhookEndpointId(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints[':webhook_endpoint_id'].$get(args, options))
}

export async function postWebhookEndpointsWebhookEndpointId(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints[':webhook_endpoint_id'].$post(args, options))
}

export async function deleteWebhookEndpointsWebhookEndpointId(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook_endpoint_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhook_endpoints[':webhook_endpoint_id'].$delete(args, options),
  )
}

export async function postWebhookEndpointsWebhookEndpointIdRotateSecret(
  args: InferRequestType<
    (typeof client.webhook_endpoints)[':webhook_endpoint_id']['rotate_secret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhook_endpoints[':webhook_endpoint_id'].rotate_secret.$post(args, options),
  )
}

export async function postWebhookEndpointsWebhookEndpointIdTest(
  args: InferRequestType<
    (typeof client.webhook_endpoints)[':webhook_endpoint_id']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhook_endpoints[':webhook_endpoint_id'].test.$post(args, options),
  )
}

export async function getWebhookEventTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.webhook_event_types.$get(undefined, options))
}

export async function postResponsesBetaTrue(
  args: InferRequestType<(typeof client)['responses?beta=true']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['responses?beta=true'].$post(args, options))
}

export async function getResponsesResponseIdBetaTrue(
  args: InferRequestType<(typeof client.responses)[':response_id?beta=true']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.responses[':response_id?beta=true'].$get(args, options))
}

export async function deleteResponsesResponseIdBetaTrue(
  args: InferRequestType<(typeof client.responses)[':response_id?beta=true']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.responses[':response_id?beta=true'].$delete(args, options))
}

export async function postResponsesResponseIdCancelBetaTrue(
  args: InferRequestType<(typeof client.responses)[':response_id']['cancel?beta=true']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.responses[':response_id']['cancel?beta=true'].$post(args, options),
  )
}

export async function postResponsesCompactBetaTrue(
  args: InferRequestType<(typeof client.responses)['compact?beta=true']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.responses['compact?beta=true'].$post(args, options))
}

export async function getResponsesResponseIdInputItemsBetaTrue(
  args: InferRequestType<
    (typeof client.responses)[':response_id']['input_items?beta=true']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.responses[':response_id']['input_items?beta=true'].$get(args, options),
  )
}

export async function postResponsesInputTokensBetaTrue(
  args: InferRequestType<(typeof client.responses)['input_tokens?beta=true']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.responses['input_tokens?beta=true'].$post(args, options))
}
