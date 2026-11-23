import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1SmsVoiceConfigurationSets(
  args: InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sms-voice']['configuration-sets'].$get(args, options))
}

export async function postV1SmsVoiceConfigurationSets(
  args: InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sms-voice']['configuration-sets'].$post(args, options))
}

export async function getV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinations(
  args: InferRequestType<
    (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName'][
      'event-destinations'
    ].$get(args, options),
  )
}

export async function postV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinations(
  args: InferRequestType<
    (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName'][
      'event-destinations'
    ].$post(args, options),
  )
}

export async function deleteV1SmsVoiceConfigurationSetsConfigurationSetName(
  args: InferRequestType<
    (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName'].$delete(args, options),
  )
}

export async function putV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName(
  args: InferRequestType<
    (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][
      ':EventDestinationName'
    ].$put(args, options),
  )
}

export async function deleteV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName(
  args: InferRequestType<
    (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][
      ':EventDestinationName'
    ].$delete(args, options),
  )
}

export async function postV1SmsVoiceVoiceMessage(
  args: InferRequestType<(typeof client.v1)['sms-voice']['voice']['message']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sms-voice'].voice.message.$post(args, options))
}
