import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getArr(options?: ClientRequestOptions) {
  return await parseResponse(client.arr.$get(undefined, options))
}

export async function getDatabases(options?: ClientRequestOptions) {
  return await parseResponse(client.databases.$get(undefined, options))
}

export async function postDatabases(
  args: InferRequestType<typeof client.databases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.$post(args, options))
}

export async function getDatabasesId(
  args: InferRequestType<(typeof client.databases)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases[':id'].$get(args, options))
}

export async function deleteDatabasesId(
  args: InferRequestType<(typeof client.databases)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases[':id'].$delete(args, options))
}

export async function patchDatabasesId(
  args: InferRequestType<(typeof client.databases)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases[':id'].$patch(args, options))
}

export async function postDatabasesIdSync(
  args: InferRequestType<(typeof client.databases)[':id']['sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases[':id'].sync.$post(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.status.$get(undefined, options))
}

export async function getOpenapiJson(options?: ClientRequestOptions) {
  return await parseResponse(client['openapi.json'].$get(undefined, options))
}

export async function getJobsId(
  args: InferRequestType<(typeof client.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].$get(args, options))
}

export async function getBackups(options?: ClientRequestOptions) {
  return await parseResponse(client.backups.$get(undefined, options))
}

export async function postBackups(options?: ClientRequestOptions) {
  return await parseResponse(client.backups.$post(undefined, options))
}

export async function getBackupsFilename(
  args: InferRequestType<(typeof client.backups)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backups[':filename'].$get(args, options))
}

export async function deleteBackupsFilename(
  args: InferRequestType<(typeof client.backups)[':filename']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backups[':filename'].$delete(args, options))
}

export async function postBackupsUpload(
  args: InferRequestType<typeof client.backups.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backups.upload.$post(args, options))
}

export async function getBackupsSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.backups.settings.$get(undefined, options))
}

export async function patchBackupsSettings(
  args: InferRequestType<typeof client.backups.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backups.settings.$patch(args, options))
}

export async function getAnnouncements(options?: ClientRequestOptions) {
  return await parseResponse(client.announcements.$get(undefined, options))
}

export async function getAnnouncementsId(
  args: InferRequestType<(typeof client.announcements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.announcements[':id'].$get(args, options))
}
