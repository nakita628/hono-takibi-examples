import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAssistant(
  args: InferRequestType<typeof client.assistant.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistant.$get(args, options))
}

export async function postAssistant(
  args: InferRequestType<typeof client.assistant.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistant.$post(args, options))
}

export async function getAssistantId(
  args: InferRequestType<(typeof client.assistant)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistant[':id'].$get(args, options))
}

export async function deleteAssistantId(
  args: InferRequestType<(typeof client.assistant)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistant[':id'].$delete(args, options))
}

export async function patchAssistantId(
  args: InferRequestType<(typeof client.assistant)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assistant[':id'].$patch(args, options))
}

export async function getSquad(
  args: InferRequestType<typeof client.squad.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.squad.$get(args, options))
}

export async function postSquad(
  args: InferRequestType<typeof client.squad.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.squad.$post(args, options))
}

export async function getSquadId(
  args: InferRequestType<(typeof client.squad)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.squad[':id'].$get(args, options))
}

export async function deleteSquadId(
  args: InferRequestType<(typeof client.squad)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.squad[':id'].$delete(args, options))
}

export async function patchSquadId(
  args: InferRequestType<(typeof client.squad)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.squad[':id'].$patch(args, options))
}

export async function getCall(
  args: InferRequestType<typeof client.call.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call.$get(args, options))
}

export async function postCall(
  args: InferRequestType<typeof client.call.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call.$post(args, options))
}

export async function getCallId(
  args: InferRequestType<(typeof client.call)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call[':id'].$get(args, options))
}

export async function deleteCallId(
  args: InferRequestType<(typeof client.call)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call[':id'].$delete(args, options))
}

export async function patchCallId(
  args: InferRequestType<(typeof client.call)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call[':id'].$patch(args, options))
}

export async function getCallIdMonoRecording(
  args: InferRequestType<(typeof client.call)[':id']['mono-recording']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call[':id']['mono-recording'].$get(args, options))
}

export async function getCallIdStereoRecording(
  args: InferRequestType<(typeof client.call)[':id']['stereo-recording']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call[':id']['stereo-recording'].$get(args, options))
}

export async function getCallIdVideoRecording(
  args: InferRequestType<(typeof client.call)[':id']['video-recording']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call[':id']['video-recording'].$get(args, options))
}

export async function getCallIdCustomerRecording(
  args: InferRequestType<(typeof client.call)[':id']['customer-recording']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call[':id']['customer-recording'].$get(args, options))
}

export async function getCallIdAssistantRecording(
  args: InferRequestType<(typeof client.call)[':id']['assistant-recording']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call[':id']['assistant-recording'].$get(args, options))
}

export async function getCallIdPcap(
  args: InferRequestType<(typeof client.call)[':id']['pcap']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call[':id'].pcap.$get(args, options))
}

export async function getCallIdCallLogs(
  args: InferRequestType<(typeof client.call)[':id']['call-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call[':id']['call-logs'].$get(args, options))
}

export async function getChat(
  args: InferRequestType<typeof client.chat.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.$get(args, options))
}

export async function postChat(
  args: InferRequestType<typeof client.chat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.$post(args, options))
}

export async function getChatId(
  args: InferRequestType<(typeof client.chat)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat[':id'].$get(args, options))
}

export async function deleteChatId(
  args: InferRequestType<(typeof client.chat)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat[':id'].$delete(args, options))
}

export async function postChatResponses(
  args: InferRequestType<typeof client.chat.responses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.responses.$post(args, options))
}

export async function getCampaign(
  args: InferRequestType<typeof client.campaign.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaign.$get(args, options))
}

export async function postCampaign(
  args: InferRequestType<typeof client.campaign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaign.$post(args, options))
}

export async function getV2Campaign(
  args: InferRequestType<typeof client.v2.campaign.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.campaign.$get(args, options))
}

export async function postV2Campaign(
  args: InferRequestType<typeof client.v2.campaign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.campaign.$post(args, options))
}

export async function getV2CampaignId(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.campaign[':id'].$get(args, options))
}

export async function deleteV2CampaignId(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.campaign[':id'].$delete(args, options))
}

export async function patchV2CampaignId(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.campaign[':id'].$patch(args, options))
}

export async function getCampaignId(
  args: InferRequestType<(typeof client.campaign)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaign[':id'].$get(args, options))
}

export async function deleteCampaignId(
  args: InferRequestType<(typeof client.campaign)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaign[':id'].$delete(args, options))
}

export async function patchCampaignId(
  args: InferRequestType<(typeof client.campaign)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaign[':id'].$patch(args, options))
}

export async function getV2CampaignIdContacts(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.campaign[':id'].contacts.$get(args, options))
}

export async function getSession(
  args: InferRequestType<typeof client.session.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session.$get(args, options))
}

export async function postSession(
  args: InferRequestType<typeof client.session.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session.$post(args, options))
}

export async function getSessionId(
  args: InferRequestType<(typeof client.session)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session[':id'].$get(args, options))
}

export async function deleteSessionId(
  args: InferRequestType<(typeof client.session)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session[':id'].$delete(args, options))
}

export async function patchSessionId(
  args: InferRequestType<(typeof client.session)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session[':id'].$patch(args, options))
}

export async function getTrafficAllocations(
  args: InferRequestType<(typeof client)['traffic-allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['traffic-allocations'].$get(args, options))
}

export async function postTrafficAllocations(
  args: InferRequestType<(typeof client)['traffic-allocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['traffic-allocations'].$post(args, options))
}

export async function getTrafficAllocationsLatest(
  args: InferRequestType<(typeof client)['traffic-allocations']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['traffic-allocations'].latest.$get(args, options))
}

export async function getTrafficAllocationsMetrics(
  args: InferRequestType<(typeof client)['traffic-allocations']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['traffic-allocations'].metrics.$get(args, options))
}

export async function getTrafficAllocationsId(
  args: InferRequestType<(typeof client)['traffic-allocations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['traffic-allocations'][':id'].$get(args, options))
}

export async function getPhoneNumber(
  args: InferRequestType<(typeof client)['phone-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number'].$get(args, options))
}

export async function postPhoneNumber(
  args: InferRequestType<(typeof client)['phone-number']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number'].$post(args, options))
}

export async function getV2PhoneNumber(
  args: InferRequestType<(typeof client.v2)['phone-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['phone-number'].$get(args, options))
}

export async function getPhoneNumberId(
  args: InferRequestType<(typeof client)['phone-number'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number'][':id'].$get(args, options))
}

export async function deletePhoneNumberId(
  args: InferRequestType<(typeof client)['phone-number'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number'][':id'].$delete(args, options))
}

export async function patchPhoneNumberId(
  args: InferRequestType<(typeof client)['phone-number'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number'][':id'].$patch(args, options))
}

export async function getTool(
  args: InferRequestType<typeof client.tool.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tool.$get(args, options))
}

export async function postTool(
  args: InferRequestType<typeof client.tool.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tool.$post(args, options))
}

export async function getToolId(
  args: InferRequestType<(typeof client.tool)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tool[':id'].$get(args, options))
}

export async function deleteToolId(
  args: InferRequestType<(typeof client.tool)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tool[':id'].$delete(args, options))
}

export async function patchToolId(
  args: InferRequestType<(typeof client.tool)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tool[':id'].$patch(args, options))
}

export async function getFile(
  args: InferRequestType<typeof client.file.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file.$get(args, options))
}

export async function postFile(
  args: InferRequestType<typeof client.file.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file.$post(args, options))
}

export async function getFileId(
  args: InferRequestType<(typeof client.file)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file[':id'].$get(args, options))
}

export async function deleteFileId(
  args: InferRequestType<(typeof client.file)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file[':id'].$delete(args, options))
}

export async function patchFileId(
  args: InferRequestType<(typeof client.file)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file[':id'].$patch(args, options))
}

export async function getV2KnowledgeBase(
  args: InferRequestType<(typeof client.v2)['knowledge-base']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['knowledge-base'].$get(args, options))
}

export async function postV2KnowledgeBase(
  args: InferRequestType<(typeof client.v2)['knowledge-base']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['knowledge-base'].$post(args, options))
}

export async function getV2KnowledgeBaseIdFile(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['knowledge-base'][':id'].file.$get(args, options))
}

export async function postV2KnowledgeBaseIdFile(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['knowledge-base'][':id'].file.$post(args, options))
}

export async function deleteV2KnowledgeBaseIdFileFileId(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['knowledge-base'][':id'].file[':fileId'].$delete(args, options),
  )
}

export async function postV2KnowledgeBaseIdFileFileIdRetry(
  args: InferRequestType<
    (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['knowledge-base'][':id'].file[':fileId'].retry.$post(args, options),
  )
}

export async function getV2KnowledgeBaseId(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['knowledge-base'][':id'].$get(args, options))
}

export async function deleteV2KnowledgeBaseId(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['knowledge-base'][':id'].$delete(args, options))
}

export async function patchV2KnowledgeBaseId(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['knowledge-base'][':id'].$patch(args, options))
}

export async function getStructuredOutput(
  args: InferRequestType<(typeof client)['structured-output']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['structured-output'].$get(args, options))
}

export async function postStructuredOutput(
  args: InferRequestType<(typeof client)['structured-output']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['structured-output'].$post(args, options))
}

export async function getStructuredOutputId(
  args: InferRequestType<(typeof client)['structured-output'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['structured-output'][':id'].$get(args, options))
}

export async function deleteStructuredOutputId(
  args: InferRequestType<(typeof client)['structured-output'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['structured-output'][':id'].$delete(args, options))
}

export async function patchStructuredOutputId(
  args: InferRequestType<(typeof client)['structured-output'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['structured-output'][':id'].$patch(args, options))
}

export async function postStructuredOutputRun(
  args: InferRequestType<(typeof client)['structured-output']['run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['structured-output'].run.$post(args, options))
}

export async function getEvalSimulationPersonality(
  args: InferRequestType<typeof client.eval.simulation.personality.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.personality.$get(args, options))
}

export async function postEvalSimulationPersonality(
  args: InferRequestType<typeof client.eval.simulation.personality.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.personality.$post(args, options))
}

export async function getEvalSimulationPersonalityId(
  args: InferRequestType<(typeof client.eval.simulation.personality)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.personality[':id'].$get(args, options))
}

export async function deleteEvalSimulationPersonalityId(
  args: InferRequestType<(typeof client.eval.simulation.personality)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.personality[':id'].$delete(args, options))
}

export async function patchEvalSimulationPersonalityId(
  args: InferRequestType<(typeof client.eval.simulation.personality)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.personality[':id'].$patch(args, options))
}

export async function getEvalSimulationScenario(
  args: InferRequestType<typeof client.eval.simulation.scenario.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.scenario.$get(args, options))
}

export async function postEvalSimulationScenario(
  args: InferRequestType<typeof client.eval.simulation.scenario.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.scenario.$post(args, options))
}

export async function getEvalSimulationScenarioId(
  args: InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.scenario[':id'].$get(args, options))
}

export async function deleteEvalSimulationScenarioId(
  args: InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.scenario[':id'].$delete(args, options))
}

export async function patchEvalSimulationScenarioId(
  args: InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.scenario[':id'].$patch(args, options))
}

export async function getEvalSimulationRun(
  args: InferRequestType<typeof client.eval.simulation.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.run.$get(args, options))
}

export async function postEvalSimulationRun(
  args: InferRequestType<typeof client.eval.simulation.run.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.run.$post(args, options))
}

export async function getEvalSimulationRunId(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.run[':id'].$get(args, options))
}

export async function patchEvalSimulationRunId(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.run[':id'].$patch(args, options))
}

export async function getEvalSimulationRunIdItem(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.run[':id'].item.$get(args, options))
}

export async function getEvalSimulationRunIdItemItemId(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.run[':id'].item[':itemId'].$get(args, options))
}

export async function patchEvalSimulationRunIdItemItemId(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eval.simulation.run[':id'].item[':itemId'].$patch(args, options),
  )
}

export async function postEvalSimulationRunIdItemItemIdGenerate(
  args: InferRequestType<
    (typeof client.eval.simulation.run)[':id']['item'][':itemId']['generate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eval.simulation.run[':id'].item[':itemId'].generate.$post(args, options),
  )
}

export async function getEvalSimulationSuite(
  args: InferRequestType<typeof client.eval.simulation.suite.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.suite.$get(args, options))
}

export async function postEvalSimulationSuite(
  args: InferRequestType<typeof client.eval.simulation.suite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.suite.$post(args, options))
}

export async function postEvalSimulationSuiteIdDuplicate(
  args: InferRequestType<(typeof client.eval.simulation.suite)[':id']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.suite[':id'].duplicate.$post(args, options))
}

export async function getEvalSimulationSuiteId(
  args: InferRequestType<(typeof client.eval.simulation.suite)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.suite[':id'].$get(args, options))
}

export async function deleteEvalSimulationSuiteId(
  args: InferRequestType<(typeof client.eval.simulation.suite)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.suite[':id'].$delete(args, options))
}

export async function patchEvalSimulationSuiteId(
  args: InferRequestType<(typeof client.eval.simulation.suite)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.suite[':id'].$patch(args, options))
}

export async function postEvalSimulationOnboardingRequirements(
  args: InferRequestType<typeof client.eval.simulation.onboarding.requirements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.onboarding.requirements.$post(args, options))
}

export async function postEvalSimulationOnboardingSuite(
  args: InferRequestType<typeof client.eval.simulation.onboarding.suite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.onboarding.suite.$post(args, options))
}

export async function patchEvalSimulationOnboardingSuiteSuiteId(
  args: InferRequestType<(typeof client.eval.simulation.onboarding.suite)[':suiteId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eval.simulation.onboarding.suite[':suiteId'].$patch(args, options),
  )
}

export async function getEvalSimulation(
  args: InferRequestType<typeof client.eval.simulation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.$get(args, options))
}

export async function postEvalSimulation(
  args: InferRequestType<typeof client.eval.simulation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation.$post(args, options))
}

export async function getEvalSimulationConcurrency(options?: ClientRequestOptions) {
  return await parseResponse(client.eval.simulation.concurrency.$get(undefined, options))
}

export async function getEvalSimulationId(
  args: InferRequestType<(typeof client.eval.simulation)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation[':id'].$get(args, options))
}

export async function deleteEvalSimulationId(
  args: InferRequestType<(typeof client.eval.simulation)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation[':id'].$delete(args, options))
}

export async function patchEvalSimulationId(
  args: InferRequestType<(typeof client.eval.simulation)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.simulation[':id'].$patch(args, options))
}

export async function getReportingInsight(
  args: InferRequestType<typeof client.reporting.insight.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.insight.$get(args, options))
}

export async function postReportingInsight(
  args: InferRequestType<typeof client.reporting.insight.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.insight.$post(args, options))
}

export async function getReportingInsightId(
  args: InferRequestType<(typeof client.reporting.insight)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.insight[':id'].$get(args, options))
}

export async function deleteReportingInsightId(
  args: InferRequestType<(typeof client.reporting.insight)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.insight[':id'].$delete(args, options))
}

export async function patchReportingInsightId(
  args: InferRequestType<(typeof client.reporting.insight)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.insight[':id'].$patch(args, options))
}

export async function postReportingInsightIdRun(
  args: InferRequestType<(typeof client.reporting.insight)[':id']['run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.insight[':id'].run.$post(args, options))
}

export async function postReportingInsightPreview(
  args: InferRequestType<typeof client.reporting.insight.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.insight.preview.$post(args, options))
}

export async function getReportingBoard(
  args: InferRequestType<typeof client.reporting.board.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.board.$get(args, options))
}

export async function postReportingBoard(
  args: InferRequestType<typeof client.reporting.board.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.board.$post(args, options))
}

export async function getReportingBoardDefaultMetricsOverview(options?: ClientRequestOptions) {
  return await parseResponse(
    client.reporting.board.default['metrics-overview'].$get(undefined, options),
  )
}

export async function getReportingBoardId(
  args: InferRequestType<(typeof client.reporting.board)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.board[':id'].$get(args, options))
}

export async function deleteReportingBoardId(
  args: InferRequestType<(typeof client.reporting.board)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.board[':id'].$delete(args, options))
}

export async function patchReportingBoardId(
  args: InferRequestType<(typeof client.reporting.board)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reporting.board[':id'].$patch(args, options))
}

export async function getEval(
  args: InferRequestType<typeof client.eval.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.$get(args, options))
}

export async function postEval(
  args: InferRequestType<typeof client.eval.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.$post(args, options))
}

export async function getEvalId(
  args: InferRequestType<(typeof client.eval)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval[':id'].$get(args, options))
}

export async function deleteEvalId(
  args: InferRequestType<(typeof client.eval)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval[':id'].$delete(args, options))
}

export async function patchEvalId(
  args: InferRequestType<(typeof client.eval)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval[':id'].$patch(args, options))
}

export async function getEvalRunId(
  args: InferRequestType<(typeof client.eval.run)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.run[':id'].$get(args, options))
}

export async function deleteEvalRunId(
  args: InferRequestType<(typeof client.eval.run)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.run[':id'].$delete(args, options))
}

export async function getEvalRun(
  args: InferRequestType<typeof client.eval.run.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.run.$get(args, options))
}

export async function postEvalRun(
  args: InferRequestType<typeof client.eval.run.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eval.run.$post(args, options))
}

export async function getObservabilityScorecardId(
  args: InferRequestType<(typeof client.observability.scorecard)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.observability.scorecard[':id'].$get(args, options))
}

export async function deleteObservabilityScorecardId(
  args: InferRequestType<(typeof client.observability.scorecard)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.observability.scorecard[':id'].$delete(args, options))
}

export async function patchObservabilityScorecardId(
  args: InferRequestType<(typeof client.observability.scorecard)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.observability.scorecard[':id'].$patch(args, options))
}

export async function getObservabilityScorecard(
  args: InferRequestType<typeof client.observability.scorecard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.observability.scorecard.$get(args, options))
}

export async function postObservabilityScorecard(
  args: InferRequestType<typeof client.observability.scorecard.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.observability.scorecard.$post(args, options))
}

export async function getProviderProviderResourceName(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.provider[':provider'][':resourceName'].$get(args, options))
}

export async function postProviderProviderResourceName(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.provider[':provider'][':resourceName'].$post(args, options))
}

export async function getProviderProviderResourceNameId(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.provider[':provider'][':resourceName'][':id'].$get(args, options),
  )
}

export async function deleteProviderProviderResourceNameId(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.provider[':provider'][':resourceName'][':id'].$delete(args, options),
  )
}

export async function patchProviderProviderResourceNameId(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.provider[':provider'][':resourceName'][':id'].$patch(args, options),
  )
}

export async function postAnalytics(
  args: InferRequestType<typeof client.analytics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.$post(args, options))
}
