import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApplyYaraRules(
  args: InferRequestType<(typeof client)['apply-yara-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apply-yara-rules'].$post(args, options))
}

export async function headClean(options?: ClientRequestOptions) {
  return await parseResponse(client.clean.$head(undefined, options))
}

export async function postEmulationOutput(
  args: InferRequestType<(typeof client)['emulation-output']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['emulation-output'].$post(args, options))
}

export async function postGeneratePartialYaraRules(
  args: InferRequestType<(typeof client)['generate-partial-yara-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['generate-partial-yara-rules'].$post(args, options))
}

export async function postUnpack(
  args: InferRequestType<typeof client.unpack.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unpack.$post(args, options))
}
