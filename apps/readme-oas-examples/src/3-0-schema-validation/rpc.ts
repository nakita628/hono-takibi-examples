import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnythingNumbers(
  args: InferRequestType<typeof client.anything.numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.numbers.$get(args, options))
}

export async function getAnythingStrings(
  args: InferRequestType<typeof client.anything.strings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.strings.$get(args, options))
}

export async function getAnythingJsonschemaFormats(
  args: InferRequestType<(typeof client.anything)['jsonschema-formats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['jsonschema-formats'].$get(args, options))
}

export async function getAnythingOasFormats(
  args: InferRequestType<(typeof client.anything)['oas-formats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['oas-formats'].$get(args, options))
}

export async function getAnythingBooleans(
  args: InferRequestType<typeof client.anything.booleans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.booleans.$get(args, options))
}
