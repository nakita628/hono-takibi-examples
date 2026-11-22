import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getParameterExamplesParam1Param2(
  args: InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parameterExamples[':param1'][':param2'].$get(args, options))
}

export async function putParameterExamplesParam1Param2(
  args: InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parameterExamples[':param1'][':param2'].$put(args, options))
}

export async function patchParameterExamplesParam1Param2(
  args: InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parameterExamples[':param1'][':param2'].$patch(args, options))
}

export async function putRequestBody(
  args: InferRequestType<typeof client.requestBody.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requestBody.$put(args, options))
}

export async function postRequestBody(
  args: InferRequestType<typeof client.requestBody.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requestBody.$post(args, options))
}

export async function patchRequestBody(
  args: InferRequestType<typeof client.requestBody.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requestBody.$patch(args, options))
}

export async function putRequestBodyPrimitiveExample(
  args: InferRequestType<(typeof client)['requestBody-primitive-example']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['requestBody-primitive-example'].$put(args, options))
}

export async function postRequestBodyPrimitiveExample(
  args: InferRequestType<(typeof client)['requestBody-primitive-example']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['requestBody-primitive-example'].$post(args, options))
}

export async function patchRequestBodyPrimitiveExample(
  args: InferRequestType<(typeof client)['requestBody-primitive-example']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['requestBody-primitive-example'].$patch(args, options))
}

export async function postRequestBodyMultiMediaTypes(options?: ClientRequestOptions) {
  return await parseResponse(client['requestBody-multi-media-types'].$post(undefined, options))
}

export async function postRequestBodyFormDataExample(
  args: InferRequestType<(typeof client)['requestBody-form-data-example']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['requestBody-form-data-example'].$post(args, options))
}
