import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConfiguration(
  args: InferRequestType<typeof client.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configuration.$get(args, options))
}

export async function postIntentAddMedia(
  args: InferRequestType<typeof client.intent.addMedia.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intent.addMedia.$post(args, options))
}

export async function postIntentPlayMedia(
  args: InferRequestType<typeof client.intent.playMedia.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intent.playMedia.$post(args, options))
}

export async function postIntentUpdateMediaAffinity(
  args: InferRequestType<typeof client.intent.updateMediaAffinity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intent.updateMediaAffinity.$post(args, options))
}

export async function postQueuesPlayMedia(
  args: InferRequestType<typeof client.queues.playMedia.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues.playMedia.$post(args, options))
}

export async function postQueuesUpdateActivity(
  args: InferRequestType<typeof client.queues.updateActivity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues.updateActivity.$post(args, options))
}
