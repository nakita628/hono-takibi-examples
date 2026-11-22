import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnythingArrayOfPrimitives(options?: ClientRequestOptions) {
  return await parseResponse(client.anything['array-of-primitives'].$get(undefined, options))
}

export async function getAnythingObject(
  args: InferRequestType<typeof client.anything.object.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.object.$get(args, options))
}

export async function getAnythingMarkdown(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.markdown.$get(undefined, options))
}

export async function getAnythingArrayOfObjects(options?: ClientRequestOptions) {
  return await parseResponse(client.anything['array-of-objects'].$get(undefined, options))
}

export async function getAnythingPolymorphism(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.polymorphism.$get(undefined, options))
}

export async function getAnythingRecursive(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.recursive.$get(undefined, options))
}

export async function getAnythingReturnsAsJsonButIsActuallyString(options?: ClientRequestOptions) {
  return await parseResponse(
    client.anything['returns-as-json-but-is-actually-string'].$get(undefined, options),
  )
}

export async function getMultipleResponsesObject(options?: ClientRequestOptions) {
  return await parseResponse(client['multiple-responses'].object.$get(undefined, options))
}
