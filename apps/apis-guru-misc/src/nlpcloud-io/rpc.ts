import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1EnCoreWebSmIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.en_core_web_sm.index.$get(undefined, options))
}

export async function postV1EnCoreWebSmDependencies(
  args: InferRequestType<typeof client.v1.en_core_web_sm.dependencies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.en_core_web_sm.dependencies.$post(args, options))
}

export async function postV1EnCoreWebSmEntities(
  args: InferRequestType<typeof client.v1.en_core_web_sm.entities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.en_core_web_sm.entities.$post(args, options))
}

export async function postV1EnCoreWebSmSentenceDependencies(
  args: InferRequestType<(typeof client.v1.en_core_web_sm)['sentence-dependencies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.en_core_web_sm['sentence-dependencies'].$post(args, options))
}

export async function getV1EnCoreWebSmVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.en_core_web_sm.version.$get(undefined, options))
}
