import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putAnythingStrings(
  args: InferRequestType<typeof client.anything.strings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.strings.$put(args, options))
}

export async function postAnythingStrings(
  args: InferRequestType<typeof client.anything.strings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.strings.$post(args, options))
}

export async function postAnythingStringsTopLevelPayloads(
  args: InferRequestType<(typeof client.anything.strings)['top-level-payloads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.strings['top-level-payloads'].$post(args, options))
}

export async function patchAnythingStringsTopLevelPayloads(
  args: InferRequestType<(typeof client.anything.strings)['top-level-payloads']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.strings['top-level-payloads'].$patch(args, options))
}

export async function putAnythingNumbers(
  args: InferRequestType<typeof client.anything.numbers.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.numbers.$put(args, options))
}

export async function postAnythingNumbers(
  args: InferRequestType<typeof client.anything.numbers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.numbers.$post(args, options))
}

export async function patchAnythingNumbers(
  args: InferRequestType<typeof client.anything.numbers.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.numbers.$patch(args, options))
}

export async function postAnythingBooleans(
  args: InferRequestType<typeof client.anything.booleans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.booleans.$post(args, options))
}

export async function patchAnythingBooleans(
  args: InferRequestType<typeof client.anything.booleans.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.booleans.$patch(args, options))
}

export async function postAnythingArrays(
  args: InferRequestType<typeof client.anything.arrays.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.arrays.$post(args, options))
}

export async function postAnythingArraysTopLevelPayloads(
  args: InferRequestType<(typeof client.anything.arrays)['top-level-payloads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.arrays['top-level-payloads'].$post(args, options))
}

export async function patchAnythingArraysTopLevelPayloads(
  args: InferRequestType<(typeof client.anything.arrays)['top-level-payloads']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.arrays['top-level-payloads'].$patch(args, options))
}

export async function postAnythingObjects(
  args: InferRequestType<typeof client.anything.objects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.objects.$post(args, options))
}

export async function postAnythingCircular(
  args: InferRequestType<typeof client.anything.circular.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.circular.$post(args, options))
}

export async function patchAnythingCircular(
  args: InferRequestType<typeof client.anything.circular.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.circular.$patch(args, options))
}

export async function postAnythingRawBodyTopLevelPayloads(
  args: InferRequestType<(typeof client.anything.raw_body)['top-level-payloads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.raw_body['top-level-payloads'].$post(args, options))
}

export async function patchAnythingRawBodyTopLevelPayloads(
  args: InferRequestType<(typeof client.anything.raw_body)['top-level-payloads']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.raw_body['top-level-payloads'].$patch(args, options))
}

export async function postAnythingQuirks(
  args: InferRequestType<typeof client.anything.quirks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.quirks.$post(args, options))
}

export async function putAnythingQuirksPolymorphism(
  args: InferRequestType<typeof client.anything.quirks.polymorphism.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.quirks.polymorphism.$put(args, options))
}

export async function postAnythingQuirksPolymorphism(
  args: InferRequestType<typeof client.anything.quirks.polymorphism.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.quirks.polymorphism.$post(args, options))
}

export async function patchAnythingQuirksPolymorphism(
  args: InferRequestType<typeof client.anything.quirks.polymorphism.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.quirks.polymorphism.$patch(args, options))
}
