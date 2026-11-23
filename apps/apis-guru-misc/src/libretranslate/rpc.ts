import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDetect(
  args: InferRequestType<typeof client.detect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detect.$post(args, options))
}

export async function getFrontendSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.frontend.settings.$get(undefined, options))
}

export async function getLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client.languages.$get(undefined, options))
}

export async function postSuggest(
  args: InferRequestType<typeof client.suggest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suggest.$post(args, options))
}

export async function postTranslate(
  args: InferRequestType<typeof client.translate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.translate.$post(args, options))
}

export async function postTranslateFile(
  args: InferRequestType<typeof client.translate_file.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.translate_file.$post(args, options))
}
