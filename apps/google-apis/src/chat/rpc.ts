import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1MediaResourceName(
  args: InferRequestType<(typeof client.v1.media)[':resourceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.media[':resourceName'].$get(args, options))
}

export async function getV1Spaces(
  args: InferRequestType<typeof client.v1.spaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.spaces.$get(args, options))
}

export async function postV1Spaces(
  args: InferRequestType<typeof client.v1.spaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.spaces.$post(args, options))
}

export async function getV1SpacesFindDirectMessage(
  args: InferRequestType<(typeof client.v1)['spaces:findDirectMessage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['spaces:findDirectMessage'].$get(args, options))
}

export async function postV1SpacesSetup(
  args: InferRequestType<(typeof client.v1)['spaces:setup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['spaces:setup'].$post(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function putV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$put(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function postV1NameCompleteImport(
  args: InferRequestType<(typeof client.v1)[':name:completeImport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:completeImport'].$post(args, options))
}

export async function postV1ParentAttachmentsUpload(
  args: InferRequestType<(typeof client.v1)[':parent']['attachments:upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['attachments:upload'].$post(args, options))
}

export async function getV1ParentMembers(
  args: InferRequestType<(typeof client.v1)[':parent']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].members.$get(args, options))
}

export async function postV1ParentMembers(
  args: InferRequestType<(typeof client.v1)[':parent']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].members.$post(args, options))
}

export async function getV1ParentMessages(
  args: InferRequestType<(typeof client.v1)[':parent']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].messages.$get(args, options))
}

export async function postV1ParentMessages(
  args: InferRequestType<(typeof client.v1)[':parent']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].messages.$post(args, options))
}

export async function getV1ParentReactions(
  args: InferRequestType<(typeof client.v1)[':parent']['reactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].reactions.$get(args, options))
}

export async function postV1ParentReactions(
  args: InferRequestType<(typeof client.v1)[':parent']['reactions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].reactions.$post(args, options))
}
