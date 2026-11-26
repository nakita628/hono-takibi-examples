import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2Prompts(
  args: InferRequestType<typeof client.v2.prompts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.prompts.$get(args, options))
}

export async function postV2Prompts(
  args: InferRequestType<typeof client.v2.prompts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.prompts.$post(args, options))
}

export async function getV2PromptsPromptId(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.prompts[':prompt_id'].$get(args, options))
}

export async function deleteV2PromptsPromptId(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.prompts[':prompt_id'].$delete(args, options))
}

export async function patchV2PromptsPromptId(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.prompts[':prompt_id'].$patch(args, options))
}

export async function getV2PromptsPromptIdVersions(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.prompts[':prompt_id'].versions.$get(args, options))
}

export async function postV2PromptsPromptIdVersions(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.prompts[':prompt_id'].versions.$post(args, options))
}

export async function getV2PromptsPromptIdVersionsVersion(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.prompts[':prompt_id'].versions[':version'].$get(args, options),
  )
}

export async function patchV2PromptsPromptIdVersionsVersion(
  args: InferRequestType<
    (typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.prompts[':prompt_id'].versions[':version'].$patch(args, options),
  )
}

export async function getV2Skills(
  args: InferRequestType<typeof client.v2.skills.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.skills.$get(args, options))
}

export async function postV2Skills(
  args: InferRequestType<typeof client.v2.skills.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.skills.$post(args, options))
}

export async function getV2SkillsSkillId(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.skills[':skill_id'].$get(args, options))
}

export async function deleteV2SkillsSkillId(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.skills[':skill_id'].$delete(args, options))
}

export async function patchV2SkillsSkillId(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.skills[':skill_id'].$patch(args, options))
}

export async function getV2SkillsSkillIdVersions(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.skills[':skill_id'].versions.$get(args, options))
}

export async function postV2SkillsSkillIdVersions(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.skills[':skill_id'].versions.$post(args, options))
}

export async function getV2SkillsSkillIdVersionsVersion(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.skills[':skill_id'].versions[':version'].$get(args, options))
}

export async function patchV2SkillsSkillIdVersionsVersion(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.skills[':skill_id'].versions[':version'].$patch(args, options),
  )
}

export async function postV1AudioSpeech(
  args: InferRequestType<typeof client.v1.audio.speech.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.speech.$post(args, options))
}

export async function getV1Models(
  args: InferRequestType<typeof client.v1.models.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.models.$get(args, options))
}

export async function getV1ModelsModelId(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.models[':model_id'].$get(args, options))
}

export async function deleteV1ModelsModelId(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.models[':model_id'].$delete(args, options))
}

export async function postV1Responses(
  args: InferRequestType<typeof client.v1.responses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.responses.$post(args, options))
}

export async function postV1ResponsesInputTokens(
  args: InferRequestType<typeof client.v1.responses.input_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.responses.input_tokens.$post(args, options))
}

export async function postV1ClientSessions(
  args: InferRequestType<typeof client.v1.client.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.client.sessions.$post(args, options))
}

export async function getV1ServiceAccounts(
  args: InferRequestType<(typeof client.v1)['service-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['service-accounts'].$get(args, options))
}

export async function postV1ServiceAccounts(
  args: InferRequestType<(typeof client.v1)['service-accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['service-accounts'].$post(args, options))
}

export async function getV1ServiceAccountsAssignableRoles(
  args: InferRequestType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['service-accounts']['assignable-roles'].$get(args, options))
}

export async function getV1ServiceAccountsServiceAccountId(
  args: InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['service-accounts'][':service_account_id'].$get(args, options),
  )
}

export async function deleteV1ServiceAccountsServiceAccountId(
  args: InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['service-accounts'][':service_account_id'].$delete(args, options),
  )
}

export async function patchV1ServiceAccountsServiceAccountId(
  args: InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['service-accounts'][':service_account_id'].$patch(args, options),
  )
}

export async function getV1ServiceAccountsServiceAccountIdRoles(
  args: InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['service-accounts'][':service_account_id'].roles.$get(args, options),
  )
}

export async function putV1ServiceAccountsServiceAccountIdRoles(
  args: InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['service-accounts'][':service_account_id'].roles.$put(args, options),
  )
}

export async function getV1Conversations(
  args: InferRequestType<typeof client.v1.conversations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.conversations.$get(args, options))
}

export async function postV1Conversations(
  args: InferRequestType<typeof client.v1.conversations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.conversations.$post(args, options))
}

export async function getV1ConversationsConversationId(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.conversations[':conversation_id'].$get(args, options))
}

export async function postV1ConversationsConversationId(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.conversations[':conversation_id'].$post(args, options))
}

export async function deleteV1ConversationsConversationId(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.conversations[':conversation_id'].$delete(args, options))
}

export async function getV1ConversationsConversationIdHistory(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.conversations[':conversation_id'].history.$get(args, options),
  )
}

export async function getV1ConversationsConversationIdMessages(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.conversations[':conversation_id'].messages.$get(args, options),
  )
}

export async function postV1ConversationsConversationIdRestart(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['restart']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.conversations[':conversation_id'].restart.$post(args, options),
  )
}

export async function getV1Agents(
  args: InferRequestType<typeof client.v1.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.$get(args, options))
}

export async function postV1Agents(
  args: InferRequestType<typeof client.v1.agents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.$post(args, options))
}

export async function getV1AgentsPages(
  args: InferRequestType<typeof client.v1.agents.pages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.pages.$get(args, options))
}

export async function getV1AgentsAgentId(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':agent_id'].$get(args, options))
}

export async function deleteV1AgentsAgentId(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':agent_id'].$delete(args, options))
}

export async function patchV1AgentsAgentId(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':agent_id'].$patch(args, options))
}

export async function patchV1AgentsAgentIdVersion(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['version']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':agent_id'].version.$patch(args, options))
}

export async function getV1AgentsAgentIdVersions(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':agent_id'].versions.$get(args, options))
}

export async function getV1AgentsAgentIdVersionsVersion(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':agent_id'].versions[':version'].$get(args, options))
}

export async function getV1AgentsAgentIdAliases(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':agent_id'].aliases.$get(args, options))
}

export async function putV1AgentsAgentIdAliases(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':agent_id'].aliases.$put(args, options))
}

export async function deleteV1AgentsAgentIdAliases(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents[':agent_id'].aliases.$delete(args, options))
}

export async function postV1ConversationsStream(
  args: InferRequestType<(typeof client.v1)['conversations#stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['conversations#stream'].$post(args, options))
}

export async function postV1ConversationsConversationIdStream(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id#stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.conversations[':conversation_id#stream'].$post(args, options),
  )
}

export async function postV1ConversationsConversationIdRestartStream(
  args: InferRequestType<
    (typeof client.v1.conversations)[':conversation_id']['restart#stream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.conversations[':conversation_id']['restart#stream'].$post(args, options),
  )
}

export async function getV1Files(
  args: InferRequestType<typeof client.v1.files.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files.$get(args, options))
}

export async function postV1Files(
  args: InferRequestType<typeof client.v1.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files.$post(args, options))
}

export async function getV1FilesFileId(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_id'].$get(args, options))
}

export async function deleteV1FilesFileId(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_id'].$delete(args, options))
}

export async function getV1FilesFileIdContent(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_id'].content.$get(args, options))
}

export async function getV1FilesFileIdUrl(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file_id'].url.$get(args, options))
}

export async function patchV1FineTuningModelsModelId(
  args: InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.fine_tuning.models[':model_id'].$patch(args, options))
}

export async function postV1FineTuningModelsModelIdArchive(
  args: InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.fine_tuning.models[':model_id'].archive.$post(args, options))
}

export async function deleteV1FineTuningModelsModelIdArchive(
  args: InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.fine_tuning.models[':model_id'].archive.$delete(args, options),
  )
}

export async function getV1BatchJobs(
  args: InferRequestType<typeof client.v1.batch.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batch.jobs.$get(args, options))
}

export async function postV1BatchJobs(
  args: InferRequestType<typeof client.v1.batch.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batch.jobs.$post(args, options))
}

export async function getV1BatchJobsJobId(
  args: InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batch.jobs[':job_id'].$get(args, options))
}

export async function deleteV1BatchJobsJobId(
  args: InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batch.jobs[':job_id'].$delete(args, options))
}

export async function postV1BatchJobsJobIdCancel(
  args: InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batch.jobs[':job_id'].cancel.$post(args, options))
}

export async function postV1ChatCompletions(
  args: InferRequestType<typeof client.v1.chat.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chat.completions.$post(args, options))
}

export async function postV1FimCompletions(
  args: InferRequestType<typeof client.v1.fim.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.fim.completions.$post(args, options))
}

export async function postV1AgentsCompletions(
  args: InferRequestType<typeof client.v1.agents.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.completions.$post(args, options))
}

export async function postV1Embeddings(
  args: InferRequestType<typeof client.v1.embeddings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.embeddings.$post(args, options))
}

export async function postV1Moderations(
  args: InferRequestType<typeof client.v1.moderations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.moderations.$post(args, options))
}

export async function postV1ChatModerations(
  args: InferRequestType<typeof client.v1.chat.moderations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chat.moderations.$post(args, options))
}

export async function postV1Ocr(
  args: InferRequestType<typeof client.v1.ocr.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ocr.$post(args, options))
}

export async function postV1Classifications(
  args: InferRequestType<typeof client.v1.classifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.classifications.$post(args, options))
}

export async function postV1ChatClassifications(
  args: InferRequestType<typeof client.v1.chat.classifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chat.classifications.$post(args, options))
}

export async function postV1AudioTranscriptions(
  args: InferRequestType<typeof client.v1.audio.transcriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.transcriptions.$post(args, options))
}

export async function postV1AudioTranscriptionsStream(
  args: InferRequestType<(typeof client.v1.audio)['transcriptions#stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio['transcriptions#stream'].$post(args, options))
}

export async function getV1Libraries(
  args: InferRequestType<typeof client.v1.libraries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.libraries.$get(args, options))
}

export async function postV1Libraries(
  args: InferRequestType<typeof client.v1.libraries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.libraries.$post(args, options))
}

export async function getV1LibrariesLibraryId(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.libraries[':library_id'].$get(args, options))
}

export async function putV1LibrariesLibraryId(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.libraries[':library_id'].$put(args, options))
}

export async function deleteV1LibrariesLibraryId(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.libraries[':library_id'].$delete(args, options))
}

export async function patchV1LibrariesLibraryId(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.libraries[':library_id'].$patch(args, options))
}

export async function getV1LibrariesLibraryIdDocuments(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.libraries[':library_id'].documents.$get(args, options))
}

export async function postV1LibrariesLibraryIdDocuments(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.libraries[':library_id'].documents.$post(args, options))
}

export async function getV1LibrariesLibraryIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.libraries[':library_id'].documents[':document_id'].$get(args, options),
  )
}

export async function putV1LibrariesLibraryIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.libraries[':library_id'].documents[':document_id'].$put(args, options),
  )
}

export async function deleteV1LibrariesLibraryIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.libraries[':library_id'].documents[':document_id'].$delete(args, options),
  )
}

export async function patchV1LibrariesLibraryIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.libraries[':library_id'].documents[':document_id'].$patch(args, options),
  )
}

export async function getV1LibrariesLibraryIdDocumentsDocumentIdTextContent(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.libraries[':library_id'].documents[':document_id'].text_content.$get(args, options),
  )
}

export async function getV1LibrariesLibraryIdDocumentsDocumentIdStatus(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.libraries[':library_id'].documents[':document_id'].status.$get(args, options),
  )
}

export async function getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrl(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.libraries[':library_id'].documents[':document_id']['signed-url'].$get(args, options),
  )
}

export async function getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrl(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.libraries[':library_id'].documents[':document_id']['extracted-text-signed-url'].$get(
      args,
      options,
    ),
  )
}

export async function postV1LibrariesLibraryIdDocumentsDocumentIdReprocess(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['reprocess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.libraries[':library_id'].documents[':document_id'].reprocess.$post(args, options),
  )
}

export async function getV1LibrariesLibraryIdShare(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.libraries[':library_id'].share.$get(args, options))
}

export async function putV1LibrariesLibraryIdShare(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.libraries[':library_id'].share.$put(args, options))
}

export async function deleteV1LibrariesLibraryIdShare(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.libraries[':library_id'].share.$delete(args, options))
}

export async function getV1ObservabilityDatasets(
  args: InferRequestType<typeof client.v1.observability.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.datasets.$get(args, options))
}

export async function postV1ObservabilityDatasets(
  args: InferRequestType<typeof client.v1.observability.datasets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.datasets.$post(args, options))
}

export async function getV1ObservabilityDatasetsDatasetId(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.datasets[':dataset_id'].$get(args, options))
}

export async function deleteV1ObservabilityDatasetsDatasetId(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.datasets[':dataset_id'].$delete(args, options))
}

export async function patchV1ObservabilityDatasetsDatasetId(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.datasets[':dataset_id'].$patch(args, options))
}

export async function getV1ObservabilityDatasetsDatasetIdRecords(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.datasets[':dataset_id'].records.$get(args, options),
  )
}

export async function postV1ObservabilityDatasetsDatasetIdRecords(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['records']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.datasets[':dataset_id'].records.$post(args, options),
  )
}

export async function postV1ObservabilityDatasetsDatasetIdRecordsBulk(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['records']['bulk']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.datasets[':dataset_id'].records.bulk.$post(args, options),
  )
}

export async function postV1ObservabilityDatasetsDatasetIdImportsFromFile(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-file']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.datasets[':dataset_id'].imports['from-file'].$post(args, options),
  )
}

export async function postV1ObservabilityDatasetsDatasetIdImportsFromSpans(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-spans']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.datasets[':dataset_id'].imports['from-spans'].$post(args, options),
  )
}

export async function postV1ObservabilityDatasetsDatasetIdImportsFromDataset(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-dataset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.datasets[':dataset_id'].imports['from-dataset'].$post(args, options),
  )
}

export async function getV1ObservabilityDatasetsDatasetIdExportsToJsonl(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.datasets[':dataset_id'].exports['to-jsonl'].$get(args, options),
  )
}

export async function getV1ObservabilityDatasetsDatasetIdTasksTaskId(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.datasets[':dataset_id'].tasks[':task_id'].$get(args, options),
  )
}

export async function getV1ObservabilityDatasetsDatasetIdTasks(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.datasets[':dataset_id'].tasks.$get(args, options),
  )
}

export async function getV1ObservabilityDatasetRecordsDatasetRecordId(
  args: InferRequestType<
    (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability['dataset-records'][':dataset_record_id'].$get(args, options),
  )
}

export async function deleteV1ObservabilityDatasetRecordsDatasetRecordId(
  args: InferRequestType<
    (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability['dataset-records'][':dataset_record_id'].$delete(args, options),
  )
}

export async function postV1ObservabilityDatasetRecordsBulkDelete(
  args: InferRequestType<
    (typeof client.v1.observability)['dataset-records']['bulk-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability['dataset-records']['bulk-delete'].$post(args, options),
  )
}

export async function putV1ObservabilityDatasetRecordsDatasetRecordIdPayload(
  args: InferRequestType<
    (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['payload']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability['dataset-records'][':dataset_record_id'].payload.$put(args, options),
  )
}

export async function putV1ObservabilityDatasetRecordsDatasetRecordIdProperties(
  args: InferRequestType<
    (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['properties']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability['dataset-records'][':dataset_record_id'].properties.$put(args, options),
  )
}

export async function getV1ObservabilityPipelines(
  args: InferRequestType<typeof client.v1.observability.pipelines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.pipelines.$get(args, options))
}

export async function postV1ObservabilityPipelines(
  args: InferRequestType<typeof client.v1.observability.pipelines.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.pipelines.$post(args, options))
}

export async function getV1ObservabilityPipelinesPipelineId(
  args: InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.pipelines[':pipeline_id'].$get(args, options))
}

export async function putV1ObservabilityPipelinesPipelineId(
  args: InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.pipelines[':pipeline_id'].$put(args, options))
}

export async function deleteV1ObservabilityPipelinesPipelineId(
  args: InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.pipelines[':pipeline_id'].$delete(args, options),
  )
}

export async function postV1ObservabilityLogsSearch(
  args: InferRequestType<typeof client.v1.observability.logs.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.logs.search.$post(args, options))
}

export async function postV1ObservabilityTracesSearch(
  args: InferRequestType<typeof client.v1.observability.traces.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.traces.search.$post(args, options))
}

export async function postV1ObservabilityTracesAggregate(
  args: InferRequestType<typeof client.v1.observability.traces.aggregate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.traces.aggregate.$post(args, options))
}

export async function postV1ObservabilitySpansSearch(
  args: InferRequestType<typeof client.v1.observability.spans.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.spans.search.$post(args, options))
}

export async function postV1ObservabilitySpansAggregate(
  args: InferRequestType<typeof client.v1.observability.spans.aggregate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.spans.aggregate.$post(args, options))
}

export async function postV1ObservabilitySpansEvaluationsAggregate(
  args: InferRequestType<typeof client.v1.observability.spans.evaluations.aggregate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.spans.evaluations.aggregate.$post(args, options),
  )
}

export async function postV1ObservabilitySpansEvaluationsSearch(
  args: InferRequestType<typeof client.v1.observability.spans.evaluations.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.spans.evaluations.search.$post(args, options))
}

export async function postV1ObservabilitySpansEvaluationsSearchLatest(
  args: InferRequestType<typeof client.v1.observability.spans.evaluations.search.latest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.spans.evaluations.search.latest.$post(args, options),
  )
}

export async function postV1ObservabilityPipelineResultsSearch(
  args: InferRequestType<(typeof client.v1.observability)['pipeline-results']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability['pipeline-results'].search.$post(args, options),
  )
}

export async function getV1ObservabilityPipelinesPipelineIdResultsFields(
  args: InferRequestType<
    (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.pipelines[':pipeline_id'].results.fields.$get(args, options),
  )
}

export async function getV1ObservabilityTracesFields(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.observability.traces.fields.$get(undefined, options))
}

export async function getV1ObservabilityTracesTraceId(
  args: InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.traces[':trace_id'].$get(args, options))
}

export async function getV1ObservabilityTracesTraceIdSpans(
  args: InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.traces[':trace_id'].spans.$get(args, options))
}

export async function getV1ObservabilityLogsFields(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.observability.logs.fields.$get(undefined, options))
}

export async function getV1ObservabilitySpansFields(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.observability.spans.fields.$get(undefined, options))
}

export async function getV1ObservabilitySpansEvaluationsFields(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.observability.spans.evaluations.fields.$get(undefined, options),
  )
}

export async function getV1ObservabilityTracesFieldsFieldNameOptions(
  args: InferRequestType<
    (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.traces.fields[':field_name'].options.$get(args, options),
  )
}

export async function getV1ObservabilityLogsFieldsFieldNameOptions(
  args: InferRequestType<
    (typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.logs.fields[':field_name'].options.$get(args, options),
  )
}

export async function getV1ObservabilitySpansFieldsFieldNameOptions(
  args: InferRequestType<
    (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.spans.fields[':field_name'].options.$get(args, options),
  )
}

export async function getV1ObservabilitySpansEvaluationsFieldsFieldNameOptions(
  args: InferRequestType<
    (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.spans.evaluations.fields[':field_name'].options.$get(args, options),
  )
}

export async function getV1ObservabilityTracesTraceIdSpansSpanId(
  args: InferRequestType<
    (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.traces[':trace_id'].spans[':span_id'].$get(args, options),
  )
}

export async function getV1ObservabilityProjects(
  args: InferRequestType<typeof client.v1.observability.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.projects.$get(args, options))
}

export async function getV1ObservabilityProjectsProjectSlug(
  args: InferRequestType<(typeof client.v1.observability.projects)[':project_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.projects[':project_slug'].$get(args, options))
}

export async function getV1ObservabilityProjectsProjectSlugEvaluationsV2(
  args: InferRequestType<
    (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.projects[':project_slug'].evaluations_v2.$get(args, options),
  )
}

export async function getV1ObservabilityEvaluationsV2EvaluationSlug(
  args: InferRequestType<
    (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.evaluations_v2[':evaluation_slug'].$get(args, options),
  )
}

export async function postV1ObservabilityEvaluationsV2EvaluationSlugRunsSearch(
  args: InferRequestType<
    (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['runs']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.evaluations_v2[':evaluation_slug'].runs.search.$post(args, options),
  )
}

export async function postV1ObservabilityEvaluationRunsV2Search(
  args: InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability['evaluation-runs_v2'].search.$post(args, options),
  )
}

export async function getV1ObservabilityEvaluationRunsV2RunId(
  args: InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability['evaluation-runs_v2'][':run_id'].$get(args, options),
  )
}

export async function getV1ObservabilityEvaluationRunsV2RunIdStatistics(
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability['evaluation-runs_v2'][':run_id'].statistics.$get(args, options),
  )
}

export async function postV1ObservabilityEvaluationRunsV2RunIdStatisticsCompute(
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['compute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability['evaluation-runs_v2'][':run_id'].statistics.compute.$post(
      args,
      options,
    ),
  )
}

export async function getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordId(
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability['evaluation-runs_v2'][':run_id'].records[':record_id'].$get(
      args,
      options,
    ),
  )
}

export async function postV1ObservabilityEvaluationRunsV2RunIdRecordsSearch(
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability['evaluation-runs_v2'][':run_id'].records.search.$post(args, options),
  )
}

export async function getV1ObservabilityOptimizations(
  args: InferRequestType<typeof client.v1.observability.optimizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.optimizations.$get(args, options))
}

export async function getV1ObservabilityOptimizationsOptimizationId(
  args: InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.optimizations[':optimization_id'].$get(args, options),
  )
}

export async function getV1ObservabilityOptimizationsOptimizationIdTrials(
  args: InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.optimizations[':optimization_id'].trials.$get(args, options),
  )
}

export async function getV1ObservabilityScorers(
  args: InferRequestType<typeof client.v1.observability.scorers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.scorers.$get(args, options))
}

export async function postV1ObservabilityScorers(
  args: InferRequestType<typeof client.v1.observability.scorers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.scorers.$post(args, options))
}

export async function getV1ObservabilityScorersScorerSlug(
  args: InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.scorers[':scorer_slug'].$get(args, options))
}

export async function patchV1ObservabilityScorersScorerSlug(
  args: InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.observability.scorers[':scorer_slug'].$patch(args, options))
}

export async function getV1Connectors(
  args: InferRequestType<typeof client.v1.connectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors.$get(args, options))
}

export async function postV1Connectors(
  args: InferRequestType<typeof client.v1.connectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors.$post(args, options))
}

export async function getV1ConnectorsConnectorIdOrNameAuthUrl(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id_or_name'].auth_url.$get(args, options),
  )
}

export async function putV1ConnectorsConnectorIdShare(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors[':connector_id'].share.$put(args, options))
}

export async function deleteV1ConnectorsConnectorIdShare(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors[':connector_id'].share.$delete(args, options))
}

export async function putV1ConnectorsConnectorIdOrganizationShare(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id']['organization']['share']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id'].organization.share.$put(args, options),
  )
}

export async function deleteV1ConnectorsConnectorIdOrganizationShare(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id']['organization']['share']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id'].organization.share.$delete(args, options),
  )
}

export async function postV1ConnectorsConnectorIdConsumerScopeActivate(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id'][':consumer_scope'].activate.$post(args, options),
  )
}

export async function postV1ConnectorsConnectorIdConsumerScopeDeactivate(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id'][':consumer_scope'].deactivate.$post(args, options),
  )
}

export async function postV1ConnectorsConnectorIdOrNameToolsToolNameCall(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['tools'][':tool_name']['call']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id_or_name'].tools[':tool_name'].call.$post(args, options),
  )
}

export async function getV1ConnectorsConnectorIdOrNameTools(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id_or_name'].tools.$get(args, options),
  )
}

export async function getV1ConnectorsConnectorIdOrNameAuthenticationMethods(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id_or_name'].authentication_methods.$get(args, options),
  )
}

export async function getV1ConnectorsConnectorIdOrNameOrganizationCredentials(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id_or_name'].organization.credentials.$get(args, options),
  )
}

export async function getV1ConnectorsConnectorIdOrNameWorkspaceCredentials(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id_or_name'].workspace.credentials.$get(args, options),
  )
}

export async function getV1ConnectorsConnectorIdOrNameUserCredentials(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id_or_name'].user.credentials.$get(args, options),
  )
}

export async function deleteV1ConnectorsConnectorIdOrNameUserCredentials(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id_or_name'].user.credentials.$delete(args, options),
  )
}

export async function postV1ConnectorsConnectorIdOrNameConsumerScopeCredentials(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id_or_name'][':consumer_scope'].credentials.$post(
      args,
      options,
    ),
  )
}

export async function patchV1ConnectorsConnectorIdOrNameConsumerScopeCredentials(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id_or_name'][':consumer_scope'].credentials.$patch(
      args,
      options,
    ),
  )
}

export async function deleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsName(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials'][':credentials_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id_or_name'][':consumer_scope'].credentials[
      ':credentials_name'
    ].$delete(args, options),
  )
}

export async function getV1ConnectorsConnectorIdOrNameIdOrName(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connectors[':connector_id_or_name#idOrName'].$get(args, options),
  )
}

export async function deleteV1ConnectorsConnectorIdId(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id#id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors[':connector_id#id'].$delete(args, options))
}

export async function patchV1ConnectorsConnectorIdId(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id#id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors[':connector_id#id'].$patch(args, options))
}

export async function getV1AudioVoices(
  args: InferRequestType<typeof client.v1.audio.voices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.voices.$get(args, options))
}

export async function postV1AudioVoices(
  args: InferRequestType<typeof client.v1.audio.voices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.voices.$post(args, options))
}

export async function getV1AudioVoicesVoiceId(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.voices[':voice_id'].$get(args, options))
}

export async function deleteV1AudioVoicesVoiceId(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.voices[':voice_id'].$delete(args, options))
}

export async function patchV1AudioVoicesVoiceId(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.voices[':voice_id'].$patch(args, options))
}

export async function getV1AudioVoicesVoiceIdSample(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.voices[':voice_id'].sample.$get(args, options))
}

export async function postV1AudioSessions(
  args: InferRequestType<typeof client.v1.audio.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.sessions.$post(args, options))
}

export async function getV1AudioSessionsSessionId(
  args: InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.sessions[':session_id'].$get(args, options))
}

export async function deleteV1AudioSessionsSessionId(
  args: InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.sessions[':session_id'].$delete(args, options))
}

export async function patchV1AudioSessionsSessionId(
  args: InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.sessions[':session_id'].$patch(args, options))
}

export async function getV1AudioAgents(
  args: InferRequestType<typeof client.v1.audio.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.agents.$get(args, options))
}

export async function postV1AudioAgents(
  args: InferRequestType<typeof client.v1.audio.agents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.agents.$post(args, options))
}

export async function getV1AudioAgentsAgentId(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.agents[':agent_id'].$get(args, options))
}

export async function putV1AudioAgentsAgentId(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.agents[':agent_id'].$put(args, options))
}

export async function deleteV1AudioAgentsAgentId(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.agents[':agent_id'].$delete(args, options))
}

export async function getV1AudioAgentsAgentIdVersions(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.agents[':agent_id'].versions.$get(args, options))
}

export async function getV1AudioAgentsAgentIdSessions(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.agents[':agent_id'].sessions.$get(args, options))
}

export async function getV2AudioVoices(
  args: InferRequestType<typeof client.v2.audio.voices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.voices.$get(args, options))
}

export async function getV1WorkflowsExecutionsExecutionId(
  args: InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.executions[':execution_id'].$get(args, options))
}

export async function getV1WorkflowsExecutionsExecutionIdHistory(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].history.$get(args, options),
  )
}

export async function postV1WorkflowsExecutionsExecutionIdSignals(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['signals']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].signals.$post(args, options),
  )
}

export async function postV1WorkflowsExecutionsExecutionIdQueries(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['queries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].queries.$post(args, options),
  )
}

export async function postV1WorkflowsExecutionsExecutionIdTerminate(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['terminate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].terminate.$post(args, options),
  )
}

export async function postV1WorkflowsExecutionsTerminate(
  args: InferRequestType<typeof client.v1.workflows.executions.terminate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.executions.terminate.$post(args, options))
}

export async function postV1WorkflowsExecutionsExecutionIdCancel(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].cancel.$post(args, options),
  )
}

export async function postV1WorkflowsExecutionsCancel(
  args: InferRequestType<typeof client.v1.workflows.executions.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.executions.cancel.$post(args, options))
}

export async function postV1WorkflowsExecutionsExecutionIdReset(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].reset.$post(args, options),
  )
}

export async function postV1WorkflowsExecutionsExecutionIdUpdates(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['updates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].updates.$post(args, options),
  )
}

export async function getV1WorkflowsExecutionsExecutionIdTraceInfo(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].trace.info.$get(args, options),
  )
}

export async function getV1WorkflowsExecutionsExecutionIdTraceOtel(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].trace.otel.$get(args, options),
  )
}

export async function getV1WorkflowsExecutionsExecutionIdTraceSummary(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].trace.summary.$get(args, options),
  )
}

export async function getV1WorkflowsExecutionsExecutionIdTraceEvents(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].trace.events.$get(args, options),
  )
}

export async function getV1WorkflowsExecutionsExecutionIdStream(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].stream.$get(args, options),
  )
}

export async function getV1WorkflowsExecutionsExecutionIdLogs(
  args: InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].logs.$get(args, options),
  )
}

export async function getV1WorkflowsExecutionsExecutionIdLogsStream(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.executions[':execution_id'].logs.stream.$get(args, options),
  )
}

export async function getV1WorkflowsWorkflowNameMetrics(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':workflow_name'].metrics.$get(args, options))
}

export async function getV1WorkflowsRuns(
  args: InferRequestType<typeof client.v1.workflows.runs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.runs.$get(args, options))
}

export async function getV1WorkflowsRunsRunId(
  args: InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.runs[':run_id'].$get(args, options))
}

export async function getV1WorkflowsRunsRunIdHistory(
  args: InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.runs[':run_id'].history.$get(args, options))
}

export async function getV1WorkflowsSchedules(
  args: InferRequestType<typeof client.v1.workflows.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.schedules.$get(args, options))
}

export async function postV1WorkflowsSchedules(
  args: InferRequestType<typeof client.v1.workflows.schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.schedules.$post(args, options))
}

export async function getV1WorkflowsSchedulesScheduleId(
  args: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.schedules[':schedule_id'].$get(args, options))
}

export async function deleteV1WorkflowsSchedulesScheduleId(
  args: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.schedules[':schedule_id'].$delete(args, options))
}

export async function patchV1WorkflowsSchedulesScheduleId(
  args: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.schedules[':schedule_id'].$patch(args, options))
}

export async function postV1WorkflowsSchedulesScheduleIdPause(
  args: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.schedules[':schedule_id'].pause.$post(args, options),
  )
}

export async function postV1WorkflowsSchedulesScheduleIdResume(
  args: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.schedules[':schedule_id'].resume.$post(args, options),
  )
}

export async function postV1WorkflowsSchedulesScheduleIdTrigger(
  args: InferRequestType<
    (typeof client.v1.workflows.schedules)[':schedule_id']['trigger']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.schedules[':schedule_id'].trigger.$post(args, options),
  )
}

export async function getV1WorkflowsEventsStream(
  args: InferRequestType<typeof client.v1.workflows.events.stream.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.events.stream.$get(args, options))
}

export async function getV1WorkflowsEventsList(
  args: InferRequestType<typeof client.v1.workflows.events.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.events.list.$get(args, options))
}

export async function postV1WorkflowsDeploymentsDeploymentIdUnharden(
  args: InferRequestType<
    (typeof client.v1.workflows.deployments)[':deployment_id']['unharden']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.deployments[':deployment_id'].unharden.$post(args, options),
  )
}

export async function getV1WorkflowsDeployments(
  args: InferRequestType<typeof client.v1.workflows.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.deployments.$get(args, options))
}

export async function postV1WorkflowsDeployments(
  args: InferRequestType<typeof client.v1.workflows.deployments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.deployments.$post(args, options))
}

export async function getV1WorkflowsDeploymentsName(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.deployments[':name'].$get(args, options))
}

export async function deleteV1WorkflowsDeploymentsName(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.deployments[':name'].$delete(args, options))
}

export async function patchV1WorkflowsDeploymentsName(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.deployments[':name'].$patch(args, options))
}

export async function postV1WorkflowsDeploymentsNameStop(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.deployments[':name'].stop.$post(args, options))
}

export async function postV1WorkflowsDeploymentsNameStart(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.deployments[':name'].start.$post(args, options))
}

export async function postV1WorkflowsDeploymentsNameRestart(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['restart']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.deployments[':name'].restart.$post(args, options))
}

export async function getV1WorkflowsDeploymentsNameWorkers(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.deployments[':name'].workers.$get(args, options))
}

export async function getV1WorkflowsDeploymentsNameArchive(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.deployments[':name'].archive.$get(args, options))
}

export async function postV1WorkflowsDeploymentsArchives(
  args: InferRequestType<typeof client.v1.workflows.deployments.archives.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.deployments.archives.$post(args, options))
}

export async function getV1WorkflowsDeploymentsNameLogs(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.deployments[':name'].logs.$get(args, options))
}

export async function getV1WorkflowsDeploymentsNameLogsStream(
  args: InferRequestType<
    (typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.deployments[':name'].logs.stream.$get(args, options),
  )
}

export async function getV1Workflows(
  args: InferRequestType<typeof client.v1.workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.$get(args, options))
}

export async function getV1WorkflowsRegistrations(
  args: InferRequestType<typeof client.v1.workflows.registrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.registrations.$get(args, options))
}

export async function postV1WorkflowsWorkflowIdentifierExecute(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['execute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows[':workflow_identifier'].execute.$post(args, options),
  )
}

export async function postV1WorkflowsRegistrationsWorkflowRegistrationIdExecute(
  args: InferRequestType<
    (typeof client.v1.workflows.registrations)[':workflow_registration_id']['execute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.registrations[':workflow_registration_id'].execute.$post(args, options),
  )
}

export async function getV1WorkflowsWorkflowIdentifier(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':workflow_identifier'].$get(args, options))
}

export async function putV1WorkflowsWorkflowIdentifier(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':workflow_identifier'].$put(args, options))
}

export async function getV1WorkflowsRegistrationsWorkflowRegistrationId(
  args: InferRequestType<
    (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows.registrations[':workflow_registration_id'].$get(args, options),
  )
}

export async function putV1WorkflowsArchive(
  args: InferRequestType<typeof client.v1.workflows.archive.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.archive.$put(args, options))
}

export async function putV1WorkflowsUnarchive(
  args: InferRequestType<typeof client.v1.workflows.unarchive.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.unarchive.$put(args, options))
}

export async function postV1WorkflowsWorkflowIdentifierTags(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':workflow_identifier'].tags.$post(args, options))
}

export async function putV1WorkflowsWorkflowIdentifierArchive(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['archive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows[':workflow_identifier'].archive.$put(args, options),
  )
}

export async function putV1WorkflowsWorkflowIdentifierUnarchive(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['unarchive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows[':workflow_identifier'].unarchive.$put(args, options),
  )
}

export async function getV1RagIngestionPipelineConfigurations(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.rag.ingestion_pipeline_configurations.$get(undefined, options),
  )
}

export async function putV1RagIngestionPipelineConfigurations(
  args: InferRequestType<typeof client.v1.rag.ingestion_pipeline_configurations.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rag.ingestion_pipeline_configurations.$put(args, options))
}

export async function putV1RagIngestionPipelineConfigurationsIdRunInfo(
  args: InferRequestType<
    (typeof client.v1.rag.ingestion_pipeline_configurations)[':id']['run_info']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.rag.ingestion_pipeline_configurations[':id'].run_info.$put(args, options),
  )
}

export async function getV1ContextSearchIndexes(
  args: InferRequestType<(typeof client.v1.context)['search-indexes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.context['search-indexes'].$get(args, options))
}

export async function postV1ContextSearchIndexes(
  args: InferRequestType<(typeof client.v1.context)['search-indexes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.context['search-indexes'].$post(args, options))
}

export async function getV1ContextSearchIndexesIndexName(
  args: InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.context['search-indexes'][':index_name'].$get(args, options))
}

export async function putV1ContextSearchIndexesIndexName(
  args: InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.context['search-indexes'][':index_name'].$put(args, options))
}

export async function deleteV1ContextSearchIndexesIndexName(
  args: InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.context['search-indexes'][':index_name'].$delete(args, options),
  )
}

export async function postV1ContextSearchIndexesIndexNameDocuments(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.context['search-indexes'][':index_name'].documents.$post(args, options),
  )
}

export async function deleteV1ContextSearchIndexesIndexNameDocuments(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.context['search-indexes'][':index_name'].documents.$delete(args, options),
  )
}

export async function postV1ContextSearchIndexesIndexNameSearch(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.context['search-indexes'][':index_name'].search.$post(args, options),
  )
}

export async function postV1ContextSearchIndexesIndexNameNavigate(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['navigate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.context['search-indexes'][':index_name'].navigate.$post(args, options),
  )
}

export async function postV1ContextSearchIndexesIndexNameRead(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.context['search-indexes'][':index_name'].read.$post(args, options),
  )
}

export async function postV1ContextSearchIndexesIndexNameGrep(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['grep']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.context['search-indexes'][':index_name'].grep.$post(args, options),
  )
}

export async function getV1ContextSearchIndexesIndexNameChunksChunkId(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.context['search-indexes'][':index_name'].chunks[':chunk_id'].$get(args, options),
  )
}

export async function getV1ContextSearchIndexesIndexNameSummaryFieldLanguage(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.context['search-indexes'][':index_name'].summary_field[':language'].$get(
      args,
      options,
    ),
  )
}

export async function putV1ContextSearchIndexesIndexNameSummaryFieldLanguage(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.context['search-indexes'][':index_name'].summary_field[':language'].$put(
      args,
      options,
    ),
  )
}

export async function postV1ContextSearchIndexesIndexNameSummaryFieldLanguage(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.context['search-indexes'][':index_name'].summary_field[':language'].$post(
      args,
      options,
    ),
  )
}

export async function getV1Triggers(
  args: InferRequestType<typeof client.v1.triggers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.triggers.$get(args, options))
}

export async function postV1Triggers(
  args: InferRequestType<typeof client.v1.triggers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.triggers.$post(args, options))
}

export async function getV1TriggersTriggerId(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.triggers[':trigger_id'].$get(args, options))
}

export async function deleteV1TriggersTriggerId(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.triggers[':trigger_id'].$delete(args, options))
}

export async function getV1TriggersTriggerIdEvents(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.triggers[':trigger_id'].events.$get(args, options))
}

export async function getV1Webhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.webhooks.$get(undefined, options))
}

export async function postV1Webhooks(
  args: InferRequestType<typeof client.v1.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks.$post(args, options))
}

export async function getV1WebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':webhook_id'].$get(args, options))
}

export async function deleteV1WebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':webhook_id'].$delete(args, options))
}

export async function getV1WebhooksWebhookIdSigningSecret(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.webhooks[':webhook_id']['signing-secret'].$get(args, options),
  )
}

export async function getV1UsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.users.me.$get(undefined, options))
}

export async function getV1UsersMeOrganizations(
  args: InferRequestType<typeof client.v1.users.me.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.me.organizations.$get(args, options))
}

export async function getV1UsersMeWorkspaces(
  args: InferRequestType<typeof client.v1.users.me.workspaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.me.workspaces.$get(args, options))
}

export async function getV1Whoami(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.whoami.$get(undefined, options))
}

export async function getV1BillingBudget(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.billing.budget.$get(undefined, options))
}

export async function getV1BillingSubscription(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.billing.subscription.$get(undefined, options))
}

export async function postV1AdminUsageQuery(
  args: InferRequestType<typeof client.v1.admin.usage.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.usage.query.$post(args, options))
}

export async function getV1AdminUsers(
  args: InferRequestType<typeof client.v1.admin.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.users.$get(args, options))
}

export async function postV1AdminUsers(
  args: InferRequestType<typeof client.v1.admin.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.users.$post(args, options))
}

export async function getV1AdminUsersInvite(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.admin['users-invite'].$get(undefined, options))
}

export async function postV1AdminUsersInvite(
  args: InferRequestType<(typeof client.v1.admin)['users-invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin['users-invite'].$post(args, options))
}

export async function deleteV1AdminUsersInviteInviteUuid(
  args: InferRequestType<(typeof client.v1.admin)['users-invite'][':invite_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin['users-invite'][':invite_uuid'].$delete(args, options))
}

export async function getV1AdminUsersUserId(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.users[':user_id'].$get(args, options))
}

export async function deleteV1AdminUsersUserId(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.users[':user_id'].$delete(args, options))
}

export async function patchV1AdminUsersUserId(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.users[':user_id'].$patch(args, options))
}

export async function postV1AdminUsersUserIdDeactivate(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['deactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.users[':user_id'].deactivate.$post(args, options))
}

export async function postV1AdminUsersUserIdReactivate(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['reactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.users[':user_id'].reactivate.$post(args, options))
}

export async function getV1AdminUsersUserIdWorkspaces(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.users[':user_id'].workspaces.$get(args, options))
}

export async function getV1AdminRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.admin.roles.$get(undefined, options))
}

export async function getV1AdminWorkspaces(
  args: InferRequestType<typeof client.v1.admin.workspaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.workspaces.$get(args, options))
}

export async function postV1AdminWorkspaces(
  args: InferRequestType<typeof client.v1.admin.workspaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.workspaces.$post(args, options))
}

export async function deleteV1AdminWorkspacesWorkspaceUuid(
  args: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.workspaces[':workspace_uuid'].$delete(args, options))
}

export async function patchV1AdminWorkspacesWorkspaceUuid(
  args: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.workspaces[':workspace_uuid'].$patch(args, options))
}

export async function getV1AdminWorkspacesWorkspaceUuidUsers(
  args: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin.workspaces[':workspace_uuid'].users.$get(args, options),
  )
}

export async function patchV1AdminWorkspacesWorkspaceUuidUsers(
  args: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin.workspaces[':workspace_uuid'].users.$patch(args, options),
  )
}

export async function postV1AdminWorkspacesWorkspaceUuidAddUsers(
  args: InferRequestType<
    (typeof client.v1.admin.workspaces)[':workspace_uuid']['add-users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin.workspaces[':workspace_uuid']['add-users'].$post(args, options),
  )
}

export async function deleteV1AdminWorkspacesWorkspaceUuidRemoveUsers(
  args: InferRequestType<
    (typeof client.v1.admin.workspaces)[':workspace_uuid']['remove-users']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin.workspaces[':workspace_uuid']['remove-users'].$delete(args, options),
  )
}

export async function getV1AdminRateLimit(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.admin['rate-limit'].$get(undefined, options))
}

export async function getV1AdminSpendLimit(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.admin['spend-limit'].$get(undefined, options))
}

export async function postV1AdminSpendLimit(
  args: InferRequestType<(typeof client.v1.admin)['spend-limit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin['spend-limit'].$post(args, options))
}

export async function getV1AdminUsage(
  args: InferRequestType<typeof client.v1.admin.usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.usage.$get(args, options))
}

export async function getV1AdminAuditLogs(
  args: InferRequestType<(typeof client.v1.admin)['audit-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin['audit-logs'].$get(args, options))
}

export async function getV1AdminUserGroups(
  args: InferRequestType<(typeof client.v1.admin)['user-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin['user-groups'].$get(args, options))
}

export async function postV1AdminUserGroups(
  args: InferRequestType<(typeof client.v1.admin)['user-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin['user-groups'].$post(args, options))
}

export async function postV1AdminUserGroupsProvisionWorkspace(
  args: InferRequestType<(typeof client.v1.admin)['user-groups']['provision-workspace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin['user-groups']['provision-workspace'].$post(args, options),
  )
}

export async function getV1AdminUserGroupsGroupUuid(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin['user-groups'][':group_uuid'].$get(args, options))
}

export async function deleteV1AdminUserGroupsGroupUuid(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin['user-groups'][':group_uuid'].$delete(args, options))
}

export async function patchV1AdminUserGroupsGroupUuid(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin['user-groups'][':group_uuid'].$patch(args, options))
}

export async function getV1AdminUserGroupsGroupUuidMembers(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin['user-groups'][':group_uuid'].members.$get(args, options),
  )
}

export async function postV1AdminUserGroupsGroupUuidMembers(
  args: InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin['user-groups'][':group_uuid'].members.$post(args, options),
  )
}

export async function deleteV1AdminUserGroupsGroupUuidMembers(
  args: InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin['user-groups'][':group_uuid'].members.$delete(args, options),
  )
}

export async function getV1AdminUserGroupsGroupUuidWorkspaces(
  args: InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin['user-groups'][':group_uuid'].workspaces.$get(args, options),
  )
}

export async function postV1AdminUserGroupsGroupUuidWorkspaces(
  args: InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin['user-groups'][':group_uuid'].workspaces.$post(args, options),
  )
}

export async function deleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuid(
  args: InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin['user-groups'][':group_uuid'].workspaces[':workspace_uuid'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuid(
  args: InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin['user-groups'][':group_uuid'].workspaces[':workspace_uuid'].$patch(
      args,
      options,
    ),
  )
}

export async function patchV1AdminUserGroupsGroupUuidOrganizationRole(
  args: InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['organization-role']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin['user-groups'][':group_uuid']['organization-role'].$patch(args, options),
  )
}

export async function getV1AdminApiKeys(
  args: InferRequestType<(typeof client.v1.admin)['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin['api-keys'].$get(args, options))
}

export async function postV1AdminApiKeys(
  args: InferRequestType<(typeof client.v1.admin)['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin['api-keys'].$post(args, options))
}

export async function deleteV1AdminApiKeysKeyId(
  args: InferRequestType<(typeof client.v1.admin)['api-keys'][':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin['api-keys'][':key_id'].$delete(args, options))
}

export async function postV1AdminScimSync(
  args: InferRequestType<typeof client.v1.admin.scim.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.scim.sync.$post(args, options))
}

export async function getV1AdminScimSyncRunId(
  args: InferRequestType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin.scim.sync[':run_id'].$get(args, options))
}

export async function getV1AdminAnalyticsVibeWorkUsageByUserStats(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get(args, options),
  )
}

export async function getV1AdminAnalyticsVibeWorkUsageByAgentStats(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get(args, options),
  )
}

export async function getV1AdminAnalyticsVibeWorkUsageByTimeStats(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get(args, options),
  )
}

export async function getV1AdminAnalyticsVibeCodeUsageByWorkspace(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin.analytics.vibe.code.usage.by_workspace.$get(args, options),
  )
}

export async function getV1AdminAnalyticsVibeCodeUsageByOrganization(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.admin.analytics.vibe.code.usage.by_organization.$get(args, options),
  )
}
