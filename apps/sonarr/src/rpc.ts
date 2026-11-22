import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApi(options?: ClientRequestOptions) {
  return await parseResponse(client.api.$get(undefined, options))
}

export async function getLoginSso(
  args: InferRequestType<typeof client.login.sso.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.login.sso.$get(args, options))
}

export async function getLogin(options?: ClientRequestOptions) {
  return await parseResponse(client.login.$get(undefined, options))
}

export async function postLogin(
  args: InferRequestType<typeof client.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.login.$post(args, options))
}

export async function postResetPasswordRequest(options?: ClientRequestOptions) {
  return await parseResponse(client['reset-password'].request.$post(undefined, options))
}

export async function postResetPassword(
  args: InferRequestType<(typeof client)['reset-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reset-password'].$post(args, options))
}

export async function getLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.logout.$get(undefined, options))
}

export async function getApiV3Autotagging(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.autotagging.$get(undefined, options))
}

export async function postApiV3Autotagging(
  args: InferRequestType<typeof client.api.v3.autotagging.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.autotagging.$post(args, options))
}

export async function getApiV3AutotaggingId(
  args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.autotagging[':id'].$get(args, options))
}

export async function putApiV3AutotaggingId(
  args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.autotagging[':id'].$put(args, options))
}

export async function deleteApiV3AutotaggingId(
  args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.autotagging[':id'].$delete(args, options))
}

export async function getApiV3AutotaggingSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.autotagging.schema.$get(undefined, options))
}

export async function getApiV3SystemBackup(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.system.backup.$get(undefined, options))
}

export async function deleteApiV3SystemBackupId(
  args: InferRequestType<(typeof client.api.v3.system.backup)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.system.backup[':id'].$delete(args, options))
}

export async function postApiV3SystemBackupRestoreId(
  args: InferRequestType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.system.backup.restore[':id'].$post(args, options))
}

export async function postApiV3SystemBackupRestoreUpload(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.system.backup.restore.upload.$post(undefined, options))
}

export async function getApiV3Blocklist(
  args: InferRequestType<typeof client.api.v3.blocklist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.blocklist.$get(args, options))
}

export async function deleteApiV3BlocklistId(
  args: InferRequestType<(typeof client.api.v3.blocklist)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.blocklist[':id'].$delete(args, options))
}

export async function deleteApiV3BlocklistBulk(
  args: InferRequestType<typeof client.api.v3.blocklist.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.blocklist.bulk.$delete(args, options))
}

export async function getApiV3Calendar(
  args: InferRequestType<typeof client.api.v3.calendar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.calendar.$get(args, options))
}

export async function getApiV3CalendarId(
  args: InferRequestType<(typeof client.api.v3.calendar)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.calendar[':id'].$get(args, options))
}

export async function getFeedV3CalendarSonarrIcs(
  args: InferRequestType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feed.v3.calendar['sonarr.ics'].$get(args, options))
}

export async function getApiV3Command(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.command.$get(undefined, options))
}

export async function postApiV3Command(
  args: InferRequestType<typeof client.api.v3.command.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.command.$post(args, options))
}

export async function getApiV3CommandId(
  args: InferRequestType<(typeof client.api.v3.command)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.command[':id'].$get(args, options))
}

export async function deleteApiV3CommandId(
  args: InferRequestType<(typeof client.api.v3.command)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.command[':id'].$delete(args, options))
}

export async function getApiV3Customfilter(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.customfilter.$get(undefined, options))
}

export async function postApiV3Customfilter(
  args: InferRequestType<typeof client.api.v3.customfilter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.customfilter.$post(args, options))
}

export async function getApiV3CustomfilterId(
  args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.customfilter[':id'].$get(args, options))
}

export async function putApiV3CustomfilterId(
  args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.customfilter[':id'].$put(args, options))
}

export async function deleteApiV3CustomfilterId(
  args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.customfilter[':id'].$delete(args, options))
}

export async function getApiV3Customformat(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.customformat.$get(undefined, options))
}

export async function postApiV3Customformat(
  args: InferRequestType<typeof client.api.v3.customformat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.customformat.$post(args, options))
}

export async function getApiV3CustomformatId(
  args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.customformat[':id'].$get(args, options))
}

export async function putApiV3CustomformatId(
  args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.customformat[':id'].$put(args, options))
}

export async function deleteApiV3CustomformatId(
  args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.customformat[':id'].$delete(args, options))
}

export async function putApiV3CustomformatBulk(
  args: InferRequestType<typeof client.api.v3.customformat.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.customformat.bulk.$put(args, options))
}

export async function deleteApiV3CustomformatBulk(
  args: InferRequestType<typeof client.api.v3.customformat.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.customformat.bulk.$delete(args, options))
}

export async function getApiV3CustomformatSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.customformat.schema.$get(undefined, options))
}

export async function getApiV3WantedCutoff(
  args: InferRequestType<typeof client.api.v3.wanted.cutoff.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.wanted.cutoff.$get(args, options))
}

export async function getApiV3WantedCutoffId(
  args: InferRequestType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.wanted.cutoff[':id'].$get(args, options))
}

export async function getApiV3Delayprofile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.delayprofile.$get(undefined, options))
}

export async function postApiV3Delayprofile(
  args: InferRequestType<typeof client.api.v3.delayprofile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.delayprofile.$post(args, options))
}

export async function getApiV3DelayprofileId(
  args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.delayprofile[':id'].$get(args, options))
}

export async function putApiV3DelayprofileId(
  args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.delayprofile[':id'].$put(args, options))
}

export async function deleteApiV3DelayprofileId(
  args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.delayprofile[':id'].$delete(args, options))
}

export async function putApiV3DelayprofileReorderId(
  args: InferRequestType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.delayprofile.reorder[':id'].$put(args, options))
}

export async function getApiV3Diskspace(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.diskspace.$get(undefined, options))
}

export async function getApiV3Downloadclient(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.downloadclient.$get(undefined, options))
}

export async function postApiV3Downloadclient(
  args: InferRequestType<typeof client.api.v3.downloadclient.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.downloadclient.$post(args, options))
}

export async function getApiV3DownloadclientId(
  args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.downloadclient[':id'].$get(args, options))
}

export async function putApiV3DownloadclientId(
  args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.downloadclient[':id'].$put(args, options))
}

export async function deleteApiV3DownloadclientId(
  args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.downloadclient[':id'].$delete(args, options))
}

export async function putApiV3DownloadclientBulk(
  args: InferRequestType<typeof client.api.v3.downloadclient.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.downloadclient.bulk.$put(args, options))
}

export async function deleteApiV3DownloadclientBulk(
  args: InferRequestType<typeof client.api.v3.downloadclient.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.downloadclient.bulk.$delete(args, options))
}

export async function getApiV3DownloadclientSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.downloadclient.schema.$get(undefined, options))
}

export async function postApiV3DownloadclientTest(
  args: InferRequestType<typeof client.api.v3.downloadclient.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.downloadclient.test.$post(args, options))
}

export async function postApiV3DownloadclientTestall(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.downloadclient.testall.$post(undefined, options))
}

export async function postApiV3DownloadclientActionName(
  args: InferRequestType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.downloadclient.action[':name'].$post(args, options))
}

export async function getApiV3ConfigDownloadclient(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.config.downloadclient.$get(undefined, options))
}

export async function getApiV3ConfigDownloadclientId(
  args: InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.downloadclient[':id'].$get(args, options))
}

export async function putApiV3ConfigDownloadclientId(
  args: InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.downloadclient[':id'].$put(args, options))
}

export async function getApiV3Episode(
  args: InferRequestType<typeof client.api.v3.episode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.episode.$get(args, options))
}

export async function getApiV3EpisodeId(
  args: InferRequestType<(typeof client.api.v3.episode)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.episode[':id'].$get(args, options))
}

export async function putApiV3EpisodeId(
  args: InferRequestType<(typeof client.api.v3.episode)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.episode[':id'].$put(args, options))
}

export async function putApiV3EpisodeMonitor(
  args: InferRequestType<typeof client.api.v3.episode.monitor.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.episode.monitor.$put(args, options))
}

export async function getApiV3Episodefile(
  args: InferRequestType<typeof client.api.v3.episodefile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.episodefile.$get(args, options))
}

export async function getApiV3EpisodefileId(
  args: InferRequestType<(typeof client.api.v3.episodefile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.episodefile[':id'].$get(args, options))
}

export async function putApiV3EpisodefileId(
  args: InferRequestType<(typeof client.api.v3.episodefile)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.episodefile[':id'].$put(args, options))
}

export async function deleteApiV3EpisodefileId(
  args: InferRequestType<(typeof client.api.v3.episodefile)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.episodefile[':id'].$delete(args, options))
}

export async function putApiV3EpisodefileEditor(
  args: InferRequestType<typeof client.api.v3.episodefile.editor.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.episodefile.editor.$put(args, options))
}

export async function putApiV3EpisodefileBulk(
  args: InferRequestType<typeof client.api.v3.episodefile.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.episodefile.bulk.$put(args, options))
}

export async function deleteApiV3EpisodefileBulk(
  args: InferRequestType<typeof client.api.v3.episodefile.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.episodefile.bulk.$delete(args, options))
}

export async function getApiV3Filesystem(
  args: InferRequestType<typeof client.api.v3.filesystem.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.filesystem.$get(args, options))
}

export async function getApiV3FilesystemType(
  args: InferRequestType<typeof client.api.v3.filesystem.type.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.filesystem.type.$get(args, options))
}

export async function getApiV3FilesystemMediafiles(
  args: InferRequestType<typeof client.api.v3.filesystem.mediafiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.filesystem.mediafiles.$get(args, options))
}

export async function getApiV3Health(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.health.$get(undefined, options))
}

export async function getApiV3History(
  args: InferRequestType<typeof client.api.v3.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.history.$get(args, options))
}

export async function getApiV3HistorySince(
  args: InferRequestType<typeof client.api.v3.history.since.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.history.since.$get(args, options))
}

export async function getApiV3HistorySeries(
  args: InferRequestType<typeof client.api.v3.history.series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.history.series.$get(args, options))
}

export async function postApiV3HistoryFailedId(
  args: InferRequestType<(typeof client.api.v3.history.failed)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.history.failed[':id'].$post(args, options))
}

export async function getApiV3ConfigHost(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.config.host.$get(undefined, options))
}

export async function getApiV3ConfigHostId(
  args: InferRequestType<(typeof client.api.v3.config.host)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.host[':id'].$get(args, options))
}

export async function putApiV3ConfigHostId(
  args: InferRequestType<(typeof client.api.v3.config.host)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.host[':id'].$put(args, options))
}

export async function getApiV3Importlist(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.importlist.$get(undefined, options))
}

export async function postApiV3Importlist(
  args: InferRequestType<typeof client.api.v3.importlist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlist.$post(args, options))
}

export async function getApiV3ImportlistId(
  args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlist[':id'].$get(args, options))
}

export async function putApiV3ImportlistId(
  args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlist[':id'].$put(args, options))
}

export async function deleteApiV3ImportlistId(
  args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlist[':id'].$delete(args, options))
}

export async function putApiV3ImportlistBulk(
  args: InferRequestType<typeof client.api.v3.importlist.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlist.bulk.$put(args, options))
}

export async function deleteApiV3ImportlistBulk(
  args: InferRequestType<typeof client.api.v3.importlist.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlist.bulk.$delete(args, options))
}

export async function getApiV3ImportlistSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.importlist.schema.$get(undefined, options))
}

export async function postApiV3ImportlistTest(
  args: InferRequestType<typeof client.api.v3.importlist.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlist.test.$post(args, options))
}

export async function postApiV3ImportlistTestall(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.importlist.testall.$post(undefined, options))
}

export async function postApiV3ImportlistActionName(
  args: InferRequestType<(typeof client.api.v3.importlist.action)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlist.action[':name'].$post(args, options))
}

export async function getApiV3ConfigImportlist(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.config.importlist.$get(undefined, options))
}

export async function getApiV3ConfigImportlistId(
  args: InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.importlist[':id'].$get(args, options))
}

export async function putApiV3ConfigImportlistId(
  args: InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.importlist[':id'].$put(args, options))
}

export async function getApiV3Importlistexclusion(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.importlistexclusion.$get(undefined, options))
}

export async function postApiV3Importlistexclusion(
  args: InferRequestType<typeof client.api.v3.importlistexclusion.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlistexclusion.$post(args, options))
}

export async function getApiV3ImportlistexclusionPaged(
  args: InferRequestType<typeof client.api.v3.importlistexclusion.paged.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlistexclusion.paged.$get(args, options))
}

export async function getApiV3ImportlistexclusionId(
  args: InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlistexclusion[':id'].$get(args, options))
}

export async function putApiV3ImportlistexclusionId(
  args: InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlistexclusion[':id'].$put(args, options))
}

export async function deleteApiV3ImportlistexclusionId(
  args: InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlistexclusion[':id'].$delete(args, options))
}

export async function deleteApiV3ImportlistexclusionBulk(
  args: InferRequestType<typeof client.api.v3.importlistexclusion.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.importlistexclusion.bulk.$delete(args, options))
}

export async function getApiV3Indexer(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.indexer.$get(undefined, options))
}

export async function postApiV3Indexer(
  args: InferRequestType<typeof client.api.v3.indexer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.indexer.$post(args, options))
}

export async function getApiV3IndexerId(
  args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.indexer[':id'].$get(args, options))
}

export async function putApiV3IndexerId(
  args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.indexer[':id'].$put(args, options))
}

export async function deleteApiV3IndexerId(
  args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.indexer[':id'].$delete(args, options))
}

export async function putApiV3IndexerBulk(
  args: InferRequestType<typeof client.api.v3.indexer.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.indexer.bulk.$put(args, options))
}

export async function deleteApiV3IndexerBulk(
  args: InferRequestType<typeof client.api.v3.indexer.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.indexer.bulk.$delete(args, options))
}

export async function getApiV3IndexerSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.indexer.schema.$get(undefined, options))
}

export async function postApiV3IndexerTest(
  args: InferRequestType<typeof client.api.v3.indexer.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.indexer.test.$post(args, options))
}

export async function postApiV3IndexerTestall(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.indexer.testall.$post(undefined, options))
}

export async function postApiV3IndexerActionName(
  args: InferRequestType<(typeof client.api.v3.indexer.action)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.indexer.action[':name'].$post(args, options))
}

export async function getApiV3ConfigIndexer(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.config.indexer.$get(undefined, options))
}

export async function getApiV3ConfigIndexerId(
  args: InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.indexer[':id'].$get(args, options))
}

export async function putApiV3ConfigIndexerId(
  args: InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.indexer[':id'].$put(args, options))
}

export async function getApiV3Indexerflag(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.indexerflag.$get(undefined, options))
}

export async function getApiV3Language(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.language.$get(undefined, options))
}

export async function getApiV3LanguageId(
  args: InferRequestType<(typeof client.api.v3.language)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.language[':id'].$get(args, options))
}

export async function getApiV3Languageprofile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.languageprofile.$get(undefined, options))
}

export async function postApiV3Languageprofile(
  args: InferRequestType<typeof client.api.v3.languageprofile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.languageprofile.$post(args, options))
}

export async function getApiV3LanguageprofileId(
  args: InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.languageprofile[':id'].$get(args, options))
}

export async function putApiV3LanguageprofileId(
  args: InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.languageprofile[':id'].$put(args, options))
}

export async function deleteApiV3LanguageprofileId(
  args: InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.languageprofile[':id'].$delete(args, options))
}

export async function getApiV3LanguageprofileSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.languageprofile.schema.$get(undefined, options))
}

export async function getApiV3Localization(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.localization.$get(undefined, options))
}

export async function getApiV3LocalizationLanguage(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.localization.language.$get(undefined, options))
}

export async function getApiV3LocalizationId(
  args: InferRequestType<(typeof client.api.v3.localization)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.localization[':id'].$get(args, options))
}

export async function getApiV3Log(
  args: InferRequestType<typeof client.api.v3.log.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.log.$get(args, options))
}

export async function getApiV3LogFile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.log.file.$get(undefined, options))
}

export async function getApiV3LogFileFilename(
  args: InferRequestType<(typeof client.api.v3.log.file)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.log.file[':filename'].$get(args, options))
}

export async function getApiV3Manualimport(
  args: InferRequestType<typeof client.api.v3.manualimport.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.manualimport.$get(args, options))
}

export async function postApiV3Manualimport(
  args: InferRequestType<typeof client.api.v3.manualimport.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.manualimport.$post(args, options))
}

export async function getApiV3MediacoverSeriesIdFilename(
  args: InferRequestType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.mediacover[':seriesId'][':filename'].$get(args, options))
}

export async function getApiV3ConfigMediamanagement(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.config.mediamanagement.$get(undefined, options))
}

export async function getApiV3ConfigMediamanagementId(
  args: InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.mediamanagement[':id'].$get(args, options))
}

export async function putApiV3ConfigMediamanagementId(
  args: InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.mediamanagement[':id'].$put(args, options))
}

export async function getApiV3Metadata(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.metadata.$get(undefined, options))
}

export async function postApiV3Metadata(
  args: InferRequestType<typeof client.api.v3.metadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.metadata.$post(args, options))
}

export async function getApiV3MetadataId(
  args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.metadata[':id'].$get(args, options))
}

export async function putApiV3MetadataId(
  args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.metadata[':id'].$put(args, options))
}

export async function deleteApiV3MetadataId(
  args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.metadata[':id'].$delete(args, options))
}

export async function getApiV3MetadataSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.metadata.schema.$get(undefined, options))
}

export async function postApiV3MetadataTest(
  args: InferRequestType<typeof client.api.v3.metadata.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.metadata.test.$post(args, options))
}

export async function postApiV3MetadataTestall(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.metadata.testall.$post(undefined, options))
}

export async function postApiV3MetadataActionName(
  args: InferRequestType<(typeof client.api.v3.metadata.action)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.metadata.action[':name'].$post(args, options))
}

export async function getApiV3WantedMissing(
  args: InferRequestType<typeof client.api.v3.wanted.missing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.wanted.missing.$get(args, options))
}

export async function getApiV3WantedMissingId(
  args: InferRequestType<(typeof client.api.v3.wanted.missing)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.wanted.missing[':id'].$get(args, options))
}

export async function getApiV3ConfigNaming(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.config.naming.$get(undefined, options))
}

export async function getApiV3ConfigNamingId(
  args: InferRequestType<(typeof client.api.v3.config.naming)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.naming[':id'].$get(args, options))
}

export async function putApiV3ConfigNamingId(
  args: InferRequestType<(typeof client.api.v3.config.naming)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.naming[':id'].$put(args, options))
}

export async function getApiV3ConfigNamingExamples(
  args: InferRequestType<typeof client.api.v3.config.naming.examples.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.naming.examples.$get(args, options))
}

export async function getApiV3Notification(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.notification.$get(undefined, options))
}

export async function postApiV3Notification(
  args: InferRequestType<typeof client.api.v3.notification.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.notification.$post(args, options))
}

export async function getApiV3NotificationId(
  args: InferRequestType<(typeof client.api.v3.notification)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.notification[':id'].$get(args, options))
}

export async function putApiV3NotificationId(
  args: InferRequestType<(typeof client.api.v3.notification)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.notification[':id'].$put(args, options))
}

export async function deleteApiV3NotificationId(
  args: InferRequestType<(typeof client.api.v3.notification)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.notification[':id'].$delete(args, options))
}

export async function getApiV3NotificationSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.notification.schema.$get(undefined, options))
}

export async function postApiV3NotificationTest(
  args: InferRequestType<typeof client.api.v3.notification.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.notification.test.$post(args, options))
}

export async function postApiV3NotificationTestall(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.notification.testall.$post(undefined, options))
}

export async function postApiV3NotificationActionName(
  args: InferRequestType<(typeof client.api.v3.notification.action)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.notification.action[':name'].$post(args, options))
}

export async function getApiV3Parse(
  args: InferRequestType<typeof client.api.v3.parse.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.parse.$get(args, options))
}

export async function getPing(options?: ClientRequestOptions) {
  return await parseResponse(client.ping.$get(undefined, options))
}

export async function headPing(options?: ClientRequestOptions) {
  return await parseResponse(client.ping.$head(undefined, options))
}

export async function getApiV3QualitydefinitionId(
  args: InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.qualitydefinition[':id'].$get(args, options))
}

export async function putApiV3QualitydefinitionId(
  args: InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.qualitydefinition[':id'].$put(args, options))
}

export async function getApiV3Qualitydefinition(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.qualitydefinition.$get(undefined, options))
}

export async function putApiV3QualitydefinitionUpdate(
  args: InferRequestType<typeof client.api.v3.qualitydefinition.update.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.qualitydefinition.update.$put(args, options))
}

export async function getApiV3QualitydefinitionLimits(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.qualitydefinition.limits.$get(undefined, options))
}

export async function getApiV3Qualityprofile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.qualityprofile.$get(undefined, options))
}

export async function postApiV3Qualityprofile(
  args: InferRequestType<typeof client.api.v3.qualityprofile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.qualityprofile.$post(args, options))
}

export async function getApiV3QualityprofileId(
  args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.qualityprofile[':id'].$get(args, options))
}

export async function putApiV3QualityprofileId(
  args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.qualityprofile[':id'].$put(args, options))
}

export async function deleteApiV3QualityprofileId(
  args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.qualityprofile[':id'].$delete(args, options))
}

export async function getApiV3QualityprofileSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.qualityprofile.schema.$get(undefined, options))
}

export async function deleteApiV3QueueId(
  args: InferRequestType<(typeof client.api.v3.queue)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.queue[':id'].$delete(args, options))
}

export async function deleteApiV3QueueBulk(
  args: InferRequestType<typeof client.api.v3.queue.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.queue.bulk.$delete(args, options))
}

export async function getApiV3Queue(
  args: InferRequestType<typeof client.api.v3.queue.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.queue.$get(args, options))
}

export async function postApiV3QueueGrabId(
  args: InferRequestType<(typeof client.api.v3.queue.grab)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.queue.grab[':id'].$post(args, options))
}

export async function postApiV3QueueGrabBulk(
  args: InferRequestType<typeof client.api.v3.queue.grab.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.queue.grab.bulk.$post(args, options))
}

export async function getApiV3QueueDetails(
  args: InferRequestType<typeof client.api.v3.queue.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.queue.details.$get(args, options))
}

export async function getApiV3QueueStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.queue.status.$get(undefined, options))
}

export async function getApiV3Release(
  args: InferRequestType<typeof client.api.v3.release.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.release.$get(args, options))
}

export async function postApiV3Release(
  args: InferRequestType<typeof client.api.v3.release.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.release.$post(args, options))
}

export async function getApiV3Releaseprofile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.releaseprofile.$get(undefined, options))
}

export async function postApiV3Releaseprofile(
  args: InferRequestType<typeof client.api.v3.releaseprofile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.releaseprofile.$post(args, options))
}

export async function getApiV3ReleaseprofileId(
  args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.releaseprofile[':id'].$get(args, options))
}

export async function putApiV3ReleaseprofileId(
  args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.releaseprofile[':id'].$put(args, options))
}

export async function deleteApiV3ReleaseprofileId(
  args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.releaseprofile[':id'].$delete(args, options))
}

export async function postApiV3ReleasePush(
  args: InferRequestType<typeof client.api.v3.release.push.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.release.push.$post(args, options))
}

export async function getApiV3Remotepathmapping(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.remotepathmapping.$get(undefined, options))
}

export async function postApiV3Remotepathmapping(
  args: InferRequestType<typeof client.api.v3.remotepathmapping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.remotepathmapping.$post(args, options))
}

export async function getApiV3RemotepathmappingId(
  args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.remotepathmapping[':id'].$get(args, options))
}

export async function putApiV3RemotepathmappingId(
  args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.remotepathmapping[':id'].$put(args, options))
}

export async function deleteApiV3RemotepathmappingId(
  args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.remotepathmapping[':id'].$delete(args, options))
}

export async function getApiV3Rename(
  args: InferRequestType<typeof client.api.v3.rename.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.rename.$get(args, options))
}

export async function getApiV3RenameBulk(
  args: InferRequestType<typeof client.api.v3.rename.bulk.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.rename.bulk.$get(args, options))
}

export async function getApiV3Rootfolder(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.rootfolder.$get(undefined, options))
}

export async function postApiV3Rootfolder(
  args: InferRequestType<typeof client.api.v3.rootfolder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.rootfolder.$post(args, options))
}

export async function getApiV3RootfolderId(
  args: InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.rootfolder[':id'].$get(args, options))
}

export async function deleteApiV3RootfolderId(
  args: InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.rootfolder[':id'].$delete(args, options))
}

export async function postApiV3Seasonpass(
  args: InferRequestType<typeof client.api.v3.seasonpass.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.seasonpass.$post(args, options))
}

export async function getApiV3Series(
  args: InferRequestType<typeof client.api.v3.series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.series.$get(args, options))
}

export async function postApiV3Series(
  args: InferRequestType<typeof client.api.v3.series.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.series.$post(args, options))
}

export async function getApiV3SeriesId(
  args: InferRequestType<(typeof client.api.v3.series)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.series[':id'].$get(args, options))
}

export async function putApiV3SeriesId(
  args: InferRequestType<(typeof client.api.v3.series)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.series[':id'].$put(args, options))
}

export async function deleteApiV3SeriesId(
  args: InferRequestType<(typeof client.api.v3.series)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.series[':id'].$delete(args, options))
}

export async function putApiV3SeriesEditor(
  args: InferRequestType<typeof client.api.v3.series.editor.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.series.editor.$put(args, options))
}

export async function deleteApiV3SeriesEditor(
  args: InferRequestType<typeof client.api.v3.series.editor.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.series.editor.$delete(args, options))
}

export async function getApiV3SeriesIdFolder(
  args: InferRequestType<(typeof client.api.v3.series)[':id']['folder']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.series[':id'].folder.$get(args, options))
}

export async function postApiV3SeriesImport(
  args: InferRequestType<typeof client.api.v3.series.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.series.import.$post(args, options))
}

export async function getApiV3SeriesLookup(
  args: InferRequestType<typeof client.api.v3.series.lookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.series.lookup.$get(args, options))
}

export async function getLoggedout(options?: ClientRequestOptions) {
  return await parseResponse(client.loggedout.$get(undefined, options))
}

export async function getContentPath(
  args: InferRequestType<(typeof client.content)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content[':path'].$get(args, options))
}

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function getPath(
  args: InferRequestType<(typeof client)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':path'].$get(args, options))
}

export async function getApiV3SystemStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.system.status.$get(undefined, options))
}

export async function getApiV3SystemRoutes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.system.routes.$get(undefined, options))
}

export async function getApiV3SystemRoutesDuplicate(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.system.routes.duplicate.$get(undefined, options))
}

export async function postApiV3SystemShutdown(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.system.shutdown.$post(undefined, options))
}

export async function postApiV3SystemRestart(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.system.restart.$post(undefined, options))
}

export async function getApiV3Tag(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.tag.$get(undefined, options))
}

export async function postApiV3Tag(
  args: InferRequestType<typeof client.api.v3.tag.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.tag.$post(args, options))
}

export async function getApiV3TagId(
  args: InferRequestType<(typeof client.api.v3.tag)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.tag[':id'].$get(args, options))
}

export async function putApiV3TagId(
  args: InferRequestType<(typeof client.api.v3.tag)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.tag[':id'].$put(args, options))
}

export async function deleteApiV3TagId(
  args: InferRequestType<(typeof client.api.v3.tag)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.tag[':id'].$delete(args, options))
}

export async function getApiV3TagDetail(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.tag.detail.$get(undefined, options))
}

export async function getApiV3TagDetailId(
  args: InferRequestType<(typeof client.api.v3.tag.detail)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.tag.detail[':id'].$get(args, options))
}

export async function getApiV3SystemTask(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.system.task.$get(undefined, options))
}

export async function getApiV3SystemTaskId(
  args: InferRequestType<(typeof client.api.v3.system.task)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.system.task[':id'].$get(args, options))
}

export async function getApiV3ConfigUiId(
  args: InferRequestType<(typeof client.api.v3.config.ui)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.ui[':id'].$get(args, options))
}

export async function putApiV3ConfigUiId(
  args: InferRequestType<(typeof client.api.v3.config.ui)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.ui[':id'].$put(args, options))
}

export async function getApiV3ConfigUi(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.config.ui.$get(undefined, options))
}

export async function getApiV3Update(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.update.$get(undefined, options))
}

export async function getApiV3LogFileUpdate(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.log.file.update.$get(undefined, options))
}

export async function getApiV3LogFileUpdateFilename(
  args: InferRequestType<(typeof client.api.v3.log.file.update)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.log.file.update[':filename'].$get(args, options))
}
