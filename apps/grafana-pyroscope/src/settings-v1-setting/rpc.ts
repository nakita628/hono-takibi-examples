import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSettingsV1SettingsServiceDelete(
  args: InferRequestType<(typeof client)['settings.v1.SettingsService']['Delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['settings.v1.SettingsService'].Delete.$post(args, options))
}

export async function postSettingsV1SettingsServiceGet(
  args: InferRequestType<(typeof client)['settings.v1.SettingsService']['Get']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['settings.v1.SettingsService'].Get.$post(args, options))
}

export async function postSettingsV1SettingsServiceSet(
  args: InferRequestType<(typeof client)['settings.v1.SettingsService']['Set']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['settings.v1.SettingsService'].Set.$post(args, options))
}
