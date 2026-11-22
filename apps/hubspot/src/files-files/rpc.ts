import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postFiles202609Files(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].files.$post(args, options))
}

export async function postFiles202609FilesImportFromUrlAsync(
  args: InferRequestType<
    (typeof client.files)['2026-09']['files']['import-from-url']['async']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files['2026-09'].files['import-from-url'].async.$post(args, options),
  )
}

export async function getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatus(
  args: InferRequestType<
    (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files['2026-09'].files['import-from-url'].async.tasks[':taskId'].status.$get(
      args,
      options,
    ),
  )
}

export async function getFiles202609FilesSearch(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].files.search.$get(args, options))
}

export async function getFiles202609FilesStatPath(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].files.stat[':path'].$get(args, options))
}

export async function getFiles202609FilesFileId(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].files[':fileId'].$get(args, options))
}

export async function putFiles202609FilesFileId(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].files[':fileId'].$put(args, options))
}

export async function deleteFiles202609FilesFileId(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].files[':fileId'].$delete(args, options))
}

export async function patchFiles202609FilesFileId(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].files[':fileId'].$patch(args, options))
}

export async function getFiles202609FilesFileIdDownload(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].files[':fileId'].download.$get(args, options))
}

export async function deleteFiles202609FilesFileIdGdprDelete(
  args: InferRequestType<
    (typeof client.files)['2026-09']['files'][':fileId']['gdpr-delete']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files['2026-09'].files[':fileId']['gdpr-delete'].$delete(args, options),
  )
}

export async function getFiles202609FilesFileIdSignedUrl(
  args: InferRequestType<
    (typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files['2026-09'].files[':fileId']['signed-url'].$get(args, options),
  )
}

export async function postFiles202609Folders(
  args: InferRequestType<(typeof client.files)['2026-09']['folders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].folders.$post(args, options))
}

export async function getFiles202609FoldersSearch(
  args: InferRequestType<(typeof client.files)['2026-09']['folders']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].folders.search.$get(args, options))
}

export async function getFiles202609FoldersFolderId(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].folders[':folderId'].$get(args, options))
}

export async function deleteFiles202609FoldersFolderId(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].folders[':folderId'].$delete(args, options))
}

export async function patchFiles202609FoldersFolderId(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].folders[':folderId'].$patch(args, options))
}

export async function getFiles202609FoldersFolderPath(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].folders[':folderPath'].$get(args, options))
}

export async function deleteFiles202609FoldersFolderPath(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files['2026-09'].folders[':folderPath'].$delete(args, options))
}
