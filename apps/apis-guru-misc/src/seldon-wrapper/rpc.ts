import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAggregate(
  args: InferRequestType<typeof client.aggregate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aggregate.$get(args, options))
}

export async function postAggregate(
  args: InferRequestType<typeof client.aggregate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aggregate.$post(args, options))
}

export async function getPredict(
  args: InferRequestType<typeof client.predict.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predict.$get(args, options))
}

export async function postPredict(
  args: InferRequestType<typeof client.predict.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predict.$post(args, options))
}

export async function getRoute(
  args: InferRequestType<typeof client.route.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route.$get(args, options))
}

export async function postRoute(
  args: InferRequestType<typeof client.route.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route.$post(args, options))
}

export async function getSendFeedback(
  args: InferRequestType<(typeof client)['send-feedback']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['send-feedback'].$get(args, options))
}

export async function postSendFeedback(
  args: InferRequestType<(typeof client)['send-feedback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['send-feedback'].$post(args, options))
}

export async function getTransformInput(
  args: InferRequestType<(typeof client)['transform-input']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['transform-input'].$get(args, options))
}

export async function postTransformInput(
  args: InferRequestType<(typeof client)['transform-input']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['transform-input'].$post(args, options))
}

export async function getTransformOutput(
  args: InferRequestType<(typeof client)['transform-output']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['transform-output'].$get(args, options))
}

export async function postTransformOutput(
  args: InferRequestType<(typeof client)['transform-output']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['transform-output'].$post(args, options))
}
