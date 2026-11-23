import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFileStorageDriveGroups(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['drive-groups'].$get(args, options))
}

export async function postFileStorageDriveGroups(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['drive-groups'].$post(args, options))
}

export async function getFileStorageDriveGroupsId(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['drive-groups'][':id'].$get(args, options))
}

export async function deleteFileStorageDriveGroupsId(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['drive-groups'][':id'].$delete(args, options))
}

export async function patchFileStorageDriveGroupsId(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['drive-groups'][':id'].$patch(args, options))
}

export async function getFileStorageDrives(
  args: InferRequestType<(typeof client)['file-storage']['drives']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].drives.$get(args, options))
}

export async function postFileStorageDrives(
  args: InferRequestType<(typeof client)['file-storage']['drives']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].drives.$post(args, options))
}

export async function getFileStorageDrivesId(
  args: InferRequestType<(typeof client)['file-storage']['drives'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].drives[':id'].$get(args, options))
}

export async function deleteFileStorageDrivesId(
  args: InferRequestType<(typeof client)['file-storage']['drives'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].drives[':id'].$delete(args, options))
}

export async function patchFileStorageDrivesId(
  args: InferRequestType<(typeof client)['file-storage']['drives'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].drives[':id'].$patch(args, options))
}

export async function getFileStorageFiles(
  args: InferRequestType<(typeof client)['file-storage']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].files.$get(args, options))
}

export async function postFileStorageFiles(
  args: InferRequestType<(typeof client)['file-storage']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].files.$post(args, options))
}

export async function postFileStorageFilesSearch(
  args: InferRequestType<(typeof client)['file-storage']['files']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].files.search.$post(args, options))
}

export async function getFileStorageFilesId(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].files[':id'].$get(args, options))
}

export async function deleteFileStorageFilesId(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].files[':id'].$delete(args, options))
}

export async function patchFileStorageFilesId(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].files[':id'].$patch(args, options))
}

export async function getFileStorageFilesIdDownload(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].files[':id'].download.$get(args, options))
}

export async function postFileStorageFolders(
  args: InferRequestType<(typeof client)['file-storage']['folders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].folders.$post(args, options))
}

export async function getFileStorageFoldersId(
  args: InferRequestType<(typeof client)['file-storage']['folders'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].folders[':id'].$get(args, options))
}

export async function deleteFileStorageFoldersId(
  args: InferRequestType<(typeof client)['file-storage']['folders'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].folders[':id'].$delete(args, options))
}

export async function patchFileStorageFoldersId(
  args: InferRequestType<(typeof client)['file-storage']['folders'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].folders[':id'].$patch(args, options))
}

export async function postFileStorageFoldersIdCopy(
  args: InferRequestType<(typeof client)['file-storage']['folders'][':id']['copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage'].folders[':id'].copy.$post(args, options))
}

export async function getFileStorageSharedLinks(
  args: InferRequestType<(typeof client)['file-storage']['shared-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['shared-links'].$get(args, options))
}

export async function postFileStorageSharedLinks(
  args: InferRequestType<(typeof client)['file-storage']['shared-links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['shared-links'].$post(args, options))
}

export async function getFileStorageSharedLinksId(
  args: InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['shared-links'][':id'].$get(args, options))
}

export async function deleteFileStorageSharedLinksId(
  args: InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['shared-links'][':id'].$delete(args, options))
}

export async function patchFileStorageSharedLinksId(
  args: InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['shared-links'][':id'].$patch(args, options))
}

export async function postFileStorageUploadSessions(
  args: InferRequestType<(typeof client)['file-storage']['upload-sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['upload-sessions'].$post(args, options))
}

export async function getFileStorageUploadSessionsId(
  args: InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['upload-sessions'][':id'].$get(args, options))
}

export async function putFileStorageUploadSessionsId(
  args: InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['file-storage']['upload-sessions'][':id'].$put(args, options))
}

export async function deleteFileStorageUploadSessionsId(
  args: InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['file-storage']['upload-sessions'][':id'].$delete(args, options),
  )
}

export async function postFileStorageUploadSessionsIdFinish(
  args: InferRequestType<
    (typeof client)['file-storage']['upload-sessions'][':id']['finish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['file-storage']['upload-sessions'][':id'].finish.$post(args, options),
  )
}
