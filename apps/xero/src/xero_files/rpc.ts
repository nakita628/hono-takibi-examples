import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFiles(
  args: InferRequestType<typeof client.Files.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Files.$get(args, options))
}

export async function postFiles(
  args: InferRequestType<typeof client.Files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Files.$post(args, options))
}

export async function getFilesFileId(
  args: InferRequestType<(typeof client.Files)[':FileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Files[':FileId'].$get(args, options))
}

export async function putFilesFileId(
  args: InferRequestType<(typeof client.Files)[':FileId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Files[':FileId'].$put(args, options))
}

export async function deleteFilesFileId(
  args: InferRequestType<(typeof client.Files)[':FileId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Files[':FileId'].$delete(args, options))
}

export async function postFilesFolderId(
  args: InferRequestType<(typeof client.Files)[':FolderId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Files[':FolderId'].$post(args, options))
}

export async function getFilesFileIdContent(
  args: InferRequestType<(typeof client.Files)[':FileId']['Content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Files[':FileId'].Content.$get(args, options))
}

export async function getFilesFileIdAssociations(
  args: InferRequestType<(typeof client.Files)[':FileId']['Associations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Files[':FileId'].Associations.$get(args, options))
}

export async function postFilesFileIdAssociations(
  args: InferRequestType<(typeof client.Files)[':FileId']['Associations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Files[':FileId'].Associations.$post(args, options))
}

export async function deleteFilesFileIdAssociationsObjectId(
  args: InferRequestType<(typeof client.Files)[':FileId']['Associations'][':ObjectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Files[':FileId'].Associations[':ObjectId'].$delete(args, options),
  )
}

export async function getAssociationsObjectId(
  args: InferRequestType<(typeof client.Associations)[':ObjectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Associations[':ObjectId'].$get(args, options))
}

export async function getAssociationsCount(
  args: InferRequestType<typeof client.Associations.Count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Associations.Count.$get(args, options))
}

export async function getFolders(
  args: InferRequestType<typeof client.Folders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Folders.$get(args, options))
}

export async function postFolders(
  args: InferRequestType<typeof client.Folders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Folders.$post(args, options))
}

export async function getFoldersFolderId(
  args: InferRequestType<(typeof client.Folders)[':FolderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Folders[':FolderId'].$get(args, options))
}

export async function putFoldersFolderId(
  args: InferRequestType<(typeof client.Folders)[':FolderId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Folders[':FolderId'].$put(args, options))
}

export async function deleteFoldersFolderId(
  args: InferRequestType<(typeof client.Folders)[':FolderId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Folders[':FolderId'].$delete(args, options))
}

export async function getInbox(
  args: InferRequestType<typeof client.Inbox.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Inbox.$get(args, options))
}
