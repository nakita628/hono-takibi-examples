import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAlarmModels(
  args: InferRequestType<(typeof client)['alarm-models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['alarm-models'].$get(args, options))
}

export async function postAlarmModels(
  args: InferRequestType<(typeof client)['alarm-models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['alarm-models'].$post(args, options))
}

export async function getDetectorModels(
  args: InferRequestType<(typeof client)['detector-models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['detector-models'].$get(args, options))
}

export async function postDetectorModels(
  args: InferRequestType<(typeof client)['detector-models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['detector-models'].$post(args, options))
}

export async function getInputs(
  args: InferRequestType<typeof client.inputs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inputs.$get(args, options))
}

export async function postInputs(
  args: InferRequestType<typeof client.inputs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inputs.$post(args, options))
}

export async function getAlarmModelsAlarmModelName(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['alarm-models'][':alarmModelName'].$get(args, options))
}

export async function postAlarmModelsAlarmModelName(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['alarm-models'][':alarmModelName'].$post(args, options))
}

export async function deleteAlarmModelsAlarmModelName(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['alarm-models'][':alarmModelName'].$delete(args, options))
}

export async function getDetectorModelsDetectorModelName(
  args: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['detector-models'][':detectorModelName'].$get(args, options))
}

export async function postDetectorModelsDetectorModelName(
  args: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['detector-models'][':detectorModelName'].$post(args, options))
}

export async function deleteDetectorModelsDetectorModelName(
  args: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['detector-models'][':detectorModelName'].$delete(args, options))
}

export async function getInputsInputName(
  args: InferRequestType<(typeof client.inputs)[':inputName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inputs[':inputName'].$get(args, options))
}

export async function putInputsInputName(
  args: InferRequestType<(typeof client.inputs)[':inputName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inputs[':inputName'].$put(args, options))
}

export async function deleteInputsInputName(
  args: InferRequestType<(typeof client.inputs)[':inputName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inputs[':inputName'].$delete(args, options))
}

export async function getAnalysisDetectorModelsAnalysisId(
  args: InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analysis['detector-models'][':analysisId'].$get(args, options))
}

export async function getLogging(
  args: InferRequestType<typeof client.logging.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logging.$get(args, options))
}

export async function putLogging(
  args: InferRequestType<typeof client.logging.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logging.$put(args, options))
}

export async function getAnalysisDetectorModelsAnalysisIdResults(
  args: InferRequestType<
    (typeof client.analysis)['detector-models'][':analysisId']['results']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analysis['detector-models'][':analysisId'].results.$get(args, options),
  )
}

export async function getAlarmModelsAlarmModelNameVersions(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['alarm-models'][':alarmModelName'].versions.$get(args, options))
}

export async function getDetectorModelsDetectorModelNameVersions(
  args: InferRequestType<
    (typeof client)['detector-models'][':detectorModelName']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['detector-models'][':detectorModelName'].versions.$get(args, options),
  )
}

export async function postInputRoutings(
  args: InferRequestType<(typeof client)['input-routings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['input-routings'].$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn'].$post(args, options))
}

export async function postAnalysisDetectorModelsIndex(
  args: InferRequestType<(typeof client.analysis)['detector-models']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analysis['detector-models'].index.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn&tagKeys'].$delete(args, options))
}
