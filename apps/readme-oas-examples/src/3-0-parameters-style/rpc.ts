import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCookies(
  args: InferRequestType<typeof client.cookies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cookies.$get(args, options))
}

export async function getCookiesFormNonExploded(
  args: InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cookies#formNonExploded'].$get(args, options))
}

export async function getCookiesFormExploded(
  args: InferRequestType<(typeof client)['cookies#formExploded']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cookies#formExploded'].$get(args, options))
}

export async function getAnythingHeaders(
  args: InferRequestType<typeof client.anything.headers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.headers.$get(args, options))
}

export async function getAnythingHeadersSimple(
  args: InferRequestType<typeof client.anything.headers.simple.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.headers.simple.$get(args, options))
}

export async function postAnythingHeadersSimple(
  args: InferRequestType<typeof client.anything.headers.simple.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.headers.simple.$post(args, options))
}

export async function getAnythingPathPrimitiveArrayObject(
  args: InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.anything.path[':primitive'][':array'][':object'].$get(args, options),
  )
}

export async function getAnythingPathMatrixPrimitiveArrayObject(
  args: InferRequestType<
    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.anything.path.matrix[':primitive'][':array'][':object'].$get(args, options),
  )
}

export async function postAnythingPathMatrixPrimitiveArrayObject(
  args: InferRequestType<
    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.anything.path.matrix[':primitive'][':array'][':object'].$post(args, options),
  )
}

export async function getAnythingPathLabelPrimitiveArrayObject(
  args: InferRequestType<
    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.anything.path.label[':primitive'][':array'][':object'].$get(args, options),
  )
}

export async function postAnythingPathLabelPrimitiveArrayObject(
  args: InferRequestType<
    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.anything.path.label[':primitive'][':array'][':object'].$post(args, options),
  )
}

export async function getAnythingPathSimplePrimitiveArrayObject(
  args: InferRequestType<
    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.anything.path.simple[':primitive'][':array'][':object'].$get(args, options),
  )
}

export async function postAnythingPathSimplePrimitiveArrayObject(
  args: InferRequestType<
    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.anything.path.simple[':primitive'][':array'][':object'].$post(args, options),
  )
}

export async function getAnythingQuery(
  args: InferRequestType<typeof client.anything.query.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.query.$get(args, options))
}

export async function getAnythingQueryForm(
  args: InferRequestType<typeof client.anything.query.form.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.query.form.$get(args, options))
}

export async function postAnythingQueryForm(
  args: InferRequestType<typeof client.anything.query.form.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.query.form.$post(args, options))
}

export async function getAnythingQuerySpaceDelimited(
  args: InferRequestType<typeof client.anything.query.spaceDelimited.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.query.spaceDelimited.$get(args, options))
}

export async function getAnythingQueryPipeDelimited(
  args: InferRequestType<typeof client.anything.query.pipeDelimited.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.query.pipeDelimited.$get(args, options))
}

export async function getAnythingQueryDeepObject(
  args: InferRequestType<typeof client.anything.query.deepObject.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.query.deepObject.$get(args, options))
}

export async function postAnythingFormData(
  args: InferRequestType<(typeof client.anything)['form-data']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['form-data'].$post(args, options))
}

export async function putAnythingFormDataForm(
  args: InferRequestType<(typeof client.anything)['form-data']['form']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['form-data'].form.$put(args, options))
}

export async function postAnythingFormDataForm(
  args: InferRequestType<(typeof client.anything)['form-data']['form']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['form-data'].form.$post(args, options))
}

export async function postAnythingFormDataSpaceDelimited(
  args: InferRequestType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['form-data'].spaceDelimited.$post(args, options))
}

export async function postAnythingFormDataPipeDelimited(
  args: InferRequestType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['form-data'].pipeDelimited.$post(args, options))
}

export async function postAnythingFormDataDeepObject(
  args: InferRequestType<(typeof client.anything)['form-data']['deepObject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['form-data'].deepObject.$post(args, options))
}
