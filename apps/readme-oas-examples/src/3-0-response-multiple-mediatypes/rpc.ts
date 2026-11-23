import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMultipleTypesMultipleExamples(
  args: InferRequestType<(typeof client)['multiple-types-multiple-examples']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multiple-types-multiple-examples'].$post(args, options))
}

export async function postMultipleTypesSingleExample(
  args: InferRequestType<(typeof client)['multiple-types-single-example']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multiple-types-single-example'].$post(args, options))
}

export async function getSingleTypeMultipleExamples(options?: ClientRequestOptions) {
  return await parseResponse(client['single-type-multiple-examples'].$get(undefined, options))
}

export async function getSingleTypeSingleExample(options?: ClientRequestOptions) {
  return await parseResponse(client['single-type-single-example'].$get(undefined, options))
}
