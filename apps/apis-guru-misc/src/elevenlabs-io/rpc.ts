import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1History(
  args: InferRequestType<typeof client.v1.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.history.$get(args, options))
}

export async function postV1HistoryDelete(
  args: InferRequestType<typeof client.v1.history.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.history.delete.$post(args, options))
}

export async function postV1HistoryDownload(
  args: InferRequestType<typeof client.v1.history.download.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.history.download.$post(args, options))
}

export async function deleteV1HistoryHistoryItemId(
  args: InferRequestType<(typeof client.v1.history)[':history_item_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.history[':history_item_id'].$delete(args, options))
}

export async function getV1HistoryHistoryItemIdAudio(
  args: InferRequestType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.history[':history_item_id'].audio.$get(args, options))
}

export async function postV1TextToSpeechVoiceId(
  args: InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['text-to-speech'][':voice_id'].$post(args, options))
}

export async function postV1TextToSpeechVoiceIdStream(
  args: InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['text-to-speech'][':voice_id'].stream.$post(args, options))
}

export async function getV1User(
  args: InferRequestType<typeof client.v1.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user.$get(args, options))
}

export async function getV1UserSubscription(
  args: InferRequestType<typeof client.v1.user.subscription.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user.subscription.$get(args, options))
}

export async function getV1Voices(
  args: InferRequestType<typeof client.v1.voices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.$get(args, options))
}

export async function postV1VoicesAdd(
  args: InferRequestType<typeof client.v1.voices.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices.add.$post(args, options))
}

export async function getV1VoicesSettingsDefault(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.voices.settings.default.$get(undefined, options))
}

export async function getV1VoicesVoiceId(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices[':voice_id'].$get(args, options))
}

export async function deleteV1VoicesVoiceId(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices[':voice_id'].$delete(args, options))
}

export async function postV1VoicesVoiceIdEdit(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['edit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices[':voice_id'].edit.$post(args, options))
}

export async function deleteV1VoicesVoiceIdSamplesSampleId(
  args: InferRequestType<
    (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices[':voice_id'].samples[':sample_id'].$delete(args, options),
  )
}

export async function getV1VoicesVoiceIdSamplesSampleIdAudio(
  args: InferRequestType<
    (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.voices[':voice_id'].samples[':sample_id'].audio.$get(args, options),
  )
}

export async function getV1VoicesVoiceIdSettings(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices[':voice_id'].settings.$get(args, options))
}

export async function postV1VoicesVoiceIdSettingsEdit(
  args: InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['edit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.voices[':voice_id'].settings.edit.$post(args, options))
}
