import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSettingsV1RecordingRulesServiceDeleteRecordingRule(
  args: InferRequestType<
    (typeof client)['settings.v1.RecordingRulesService']['DeleteRecordingRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['settings.v1.RecordingRulesService'].DeleteRecordingRule.$post(args, options),
  )
}

export async function postSettingsV1RecordingRulesServiceGetRecordingRule(
  args: InferRequestType<
    (typeof client)['settings.v1.RecordingRulesService']['GetRecordingRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['settings.v1.RecordingRulesService'].GetRecordingRule.$post(args, options),
  )
}

export async function postSettingsV1RecordingRulesServiceListRecordingRules(
  args: InferRequestType<
    (typeof client)['settings.v1.RecordingRulesService']['ListRecordingRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['settings.v1.RecordingRulesService'].ListRecordingRules.$post(args, options),
  )
}

export async function postSettingsV1RecordingRulesServiceUpsertRecordingRule(
  args: InferRequestType<
    (typeof client)['settings.v1.RecordingRulesService']['UpsertRecordingRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['settings.v1.RecordingRulesService'].UpsertRecordingRule.$post(args, options),
  )
}
