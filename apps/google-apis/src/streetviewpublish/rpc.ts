import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1Photo(
  args: InferRequestType<typeof client.v1.photo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.photo.$post(args, options))
}

export async function putV1PhotoId(
  args: InferRequestType<(typeof client.v1.photo)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.photo[':id'].$put(args, options))
}

export async function getV1PhotoPhotoId(
  args: InferRequestType<(typeof client.v1.photo)[':photoId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.photo[':photoId'].$get(args, options))
}

export async function deleteV1PhotoPhotoId(
  args: InferRequestType<(typeof client.v1.photo)[':photoId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.photo[':photoId'].$delete(args, options))
}

export async function postV1PhotoStartUpload(
  args: InferRequestType<(typeof client.v1)['photo:startUpload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['photo:startUpload'].$post(args, options))
}

export async function postV1PhotoSequence(
  args: InferRequestType<typeof client.v1.photoSequence.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.photoSequence.$post(args, options))
}

export async function getV1PhotoSequenceSequenceId(
  args: InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.photoSequence[':sequenceId'].$get(args, options))
}

export async function deleteV1PhotoSequenceSequenceId(
  args: InferRequestType<(typeof client.v1.photoSequence)[':sequenceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.photoSequence[':sequenceId'].$delete(args, options))
}

export async function postV1PhotoSequenceStartUpload(
  args: InferRequestType<(typeof client.v1)['photoSequence:startUpload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['photoSequence:startUpload'].$post(args, options))
}

export async function getV1PhotoSequences(
  args: InferRequestType<typeof client.v1.photoSequences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.photoSequences.$get(args, options))
}

export async function getV1Photos(
  args: InferRequestType<typeof client.v1.photos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.photos.$get(args, options))
}

export async function postV1PhotosBatchDelete(
  args: InferRequestType<(typeof client.v1)['photos:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['photos:batchDelete'].$post(args, options))
}

export async function getV1PhotosBatchGet(
  args: InferRequestType<(typeof client.v1)['photos:batchGet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['photos:batchGet'].$get(args, options))
}

export async function postV1PhotosBatchUpdate(
  args: InferRequestType<(typeof client.v1)['photos:batchUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['photos:batchUpdate'].$post(args, options))
}
