import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function patchPets(
  args: InferRequestType<typeof client.pets.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pets.$patch(args, options))
}

export async function postAnythingAllOfObject(
  args: InferRequestType<(typeof client.anything)['all-of-object']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['all-of-object'].$post(args, options))
}

export async function postAnythingAnyOfObject(
  args: InferRequestType<(typeof client.anything)['any-of-object']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['any-of-object'].$post(args, options))
}

export async function postAnythingAnyOfPrimitive(
  args: InferRequestType<(typeof client.anything)['any-of-primitive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['any-of-primitive'].$post(args, options))
}

export async function postAnyOfWithType(
  args: InferRequestType<(typeof client)['any-of-with-type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['any-of-with-type'].$post(args, options))
}

export async function postAnythingOneOfObject(
  args: InferRequestType<(typeof client.anything)['one-of-object']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['one-of-object'].$post(args, options))
}

export async function postAnythingOneOfPrimitive(
  args: InferRequestType<(typeof client.anything)['one-of-primitive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['one-of-primitive'].$post(args, options))
}

export async function postAnythingOneOfObjectRef(
  args: InferRequestType<(typeof client.anything)['one-of-object-ref']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['one-of-object-ref'].$post(args, options))
}

export async function postOneOfComplex(
  args: InferRequestType<(typeof client)['one-of-complex']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['one-of-complex'].$post(args, options))
}

export async function postAnythingNestedOneOfObjectRef(
  args: InferRequestType<(typeof client.anything)['nested-one-of-object-ref']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['nested-one-of-object-ref'].$post(args, options))
}

export async function postAnythingNestedOneOfRef(
  args: InferRequestType<(typeof client.anything)['nested-one-of-ref']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['nested-one-of-ref'].$post(args, options))
}

export async function postAnythingNestedOneOfObjectWithNestedOneOf(
  args: InferRequestType<
    (typeof client.anything)['nested-one-of-object-with-nested-one-of']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.anything['nested-one-of-object-with-nested-one-of'].$post(args, options),
  )
}

export async function postOneOfWithType(
  args: InferRequestType<(typeof client)['one-of-with-type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['one-of-with-type'].$post(args, options))
}
