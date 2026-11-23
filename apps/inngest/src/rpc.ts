import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Events(
  args: InferRequestType<typeof client.v1.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.$get(args, options))
}

export async function getV1EventsInternalID(
  args: InferRequestType<(typeof client.v1.events)[':internalID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events[':internalID'].$get(args, options))
}

export async function getV1EventsInternalIDRuns(
  args: InferRequestType<(typeof client.v1.events)[':internalID']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events[':internalID'].runs.$get(args, options))
}

export async function getV1RunsRunID(
  args: InferRequestType<(typeof client.v1.runs)[':runID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.runs[':runID'].$get(args, options))
}

export async function deleteV1RunsRunID(
  args: InferRequestType<(typeof client.v1.runs)[':runID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.runs[':runID'].$delete(args, options))
}

export async function getV1RunsRunIDJobs(
  args: InferRequestType<(typeof client.v1.runs)[':runID']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.runs[':runID'].jobs.$get(args, options))
}

export async function postV1Signals(
  args: InferRequestType<typeof client.v1.signals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.signals.$post(args, options))
}

export async function getV1Cancellations(
  args: InferRequestType<typeof client.v1.cancellations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cancellations.$get(args, options))
}

export async function postV1Cancellations(
  args: InferRequestType<typeof client.v1.cancellations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cancellations.$post(args, options))
}

export async function deleteV1CancellationsId(
  args: InferRequestType<(typeof client.v1.cancellations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cancellations[':id'].$delete(args, options))
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

export async function getV1WebhooksId(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':id'].$get(args, options))
}

export async function putV1WebhooksId(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':id'].$put(args, options))
}

export async function deleteV1WebhooksId(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':id'].$delete(args, options))
}
