import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAlarmsAcknowledge(
  args: InferRequestType<typeof client.alarms.acknowledge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alarms.acknowledge.$post(args, options))
}

export async function postDetectorsDelete(
  args: InferRequestType<typeof client.detectors.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detectors.delete.$post(args, options))
}

export async function postAlarmsDisable(
  args: InferRequestType<typeof client.alarms.disable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alarms.disable.$post(args, options))
}

export async function postAlarmsEnable(
  args: InferRequestType<typeof client.alarms.enable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alarms.enable.$post(args, options))
}

export async function postInputsMessages(
  args: InferRequestType<typeof client.inputs.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inputs.messages.$post(args, options))
}

export async function postAlarmsReset(
  args: InferRequestType<typeof client.alarms.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alarms.reset.$post(args, options))
}

export async function postAlarmsSnooze(
  args: InferRequestType<typeof client.alarms.snooze.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alarms.snooze.$post(args, options))
}

export async function postDetectors(
  args: InferRequestType<typeof client.detectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detectors.$post(args, options))
}

export async function getAlarmsAlarmModelNameKeyValuesIndex(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alarms[':alarmModelName'].keyValues.index.$get(args, options))
}

export async function getDetectorsDetectorModelNameKeyValuesIndex(
  args: InferRequestType<
    (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detectors[':detectorModelName'].keyValues.index.$get(args, options),
  )
}

export async function getAlarmsAlarmModelName(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alarms[':alarmModelName'].$get(args, options))
}

export async function getDetectorsDetectorModelName(
  args: InferRequestType<(typeof client.detectors)[':detectorModelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detectors[':detectorModelName'].$get(args, options))
}
