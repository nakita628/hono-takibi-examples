import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1beta1TextSynthesize(
  args: InferRequestType<(typeof client.v1beta1)['text:synthesize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['text:synthesize'].$post(args, options))
}

export async function getV1beta1Voices(
  args: InferRequestType<typeof client.v1beta1.voices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.voices.$get(args, options))
}

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function getV1beta1NameOperations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].operations.$get(args, options))
}

export async function postV1beta1ParentSynthesizeLongAudio(
  args: InferRequestType<(typeof client.v1beta1)[':parent:synthesizeLongAudio']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent:synthesizeLongAudio'].$post(args, options))
}
