import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1Album(
  args: InferRequestType<typeof client.api.v1.album.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.album.$get(args, options))
}

export async function postApiV1Album(
  args: InferRequestType<typeof client.api.v1.album.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.album.$post(args, options))
}

export async function getApiV1AlbumId(
  args: InferRequestType<(typeof client.api.v1.album)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.album[':id'].$get(args, options))
}

export async function putApiV1AlbumId(
  args: InferRequestType<(typeof client.api.v1.album)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.album[':id'].$put(args, options))
}

export async function deleteApiV1AlbumId(
  args: InferRequestType<(typeof client.api.v1.album)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.album[':id'].$delete(args, options))
}

export async function putApiV1AlbumMonitor(
  args: InferRequestType<typeof client.api.v1.album.monitor.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.album.monitor.$put(args, options))
}

export async function getApiV1AlbumLookup(
  args: InferRequestType<typeof client.api.v1.album.lookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.album.lookup.$get(args, options))
}

export async function postApiV1Albumstudio(
  args: InferRequestType<typeof client.api.v1.albumstudio.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.albumstudio.$post(args, options))
}

export async function getApi(options?: ClientRequestOptions) {
  return await parseResponse(client.api.$get(undefined, options))
}

export async function getApiV1ArtistId(
  args: InferRequestType<(typeof client.api.v1.artist)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.artist[':id'].$get(args, options))
}

export async function putApiV1ArtistId(
  args: InferRequestType<(typeof client.api.v1.artist)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.artist[':id'].$put(args, options))
}

export async function deleteApiV1ArtistId(
  args: InferRequestType<(typeof client.api.v1.artist)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.artist[':id'].$delete(args, options))
}

export async function getApiV1Artist(
  args: InferRequestType<typeof client.api.v1.artist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.artist.$get(args, options))
}

export async function postApiV1Artist(
  args: InferRequestType<typeof client.api.v1.artist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.artist.$post(args, options))
}

export async function putApiV1ArtistEditor(
  args: InferRequestType<typeof client.api.v1.artist.editor.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.artist.editor.$put(args, options))
}

export async function deleteApiV1ArtistEditor(
  args: InferRequestType<typeof client.api.v1.artist.editor.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.artist.editor.$delete(args, options))
}

export async function getApiV1ArtistLookup(
  args: InferRequestType<typeof client.api.v1.artist.lookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.artist.lookup.$get(args, options))
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

export async function getLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.logout.$get(undefined, options))
}

export async function getApiV1AutotaggingId(
  args: InferRequestType<(typeof client.api.v1.autotagging)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.autotagging[':id'].$get(args, options))
}

export async function putApiV1AutotaggingId(
  args: InferRequestType<(typeof client.api.v1.autotagging)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.autotagging[':id'].$put(args, options))
}

export async function deleteApiV1AutotaggingId(
  args: InferRequestType<(typeof client.api.v1.autotagging)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.autotagging[':id'].$delete(args, options))
}

export async function getApiV1Autotagging(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.autotagging.$get(undefined, options))
}

export async function postApiV1Autotagging(
  args: InferRequestType<typeof client.api.v1.autotagging.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.autotagging.$post(args, options))
}

export async function getApiV1AutotaggingSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.autotagging.schema.$get(undefined, options))
}

export async function getApiV1SystemBackup(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.system.backup.$get(undefined, options))
}

export async function deleteApiV1SystemBackupId(
  args: InferRequestType<(typeof client.api.v1.system.backup)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.system.backup[':id'].$delete(args, options))
}

export async function postApiV1SystemBackupRestoreId(
  args: InferRequestType<(typeof client.api.v1.system.backup.restore)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.system.backup.restore[':id'].$post(args, options))
}

export async function postApiV1SystemBackupRestoreUpload(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.system.backup.restore.upload.$post(undefined, options))
}

export async function getApiV1Blocklist(
  args: InferRequestType<typeof client.api.v1.blocklist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.blocklist.$get(args, options))
}

export async function deleteApiV1BlocklistId(
  args: InferRequestType<(typeof client.api.v1.blocklist)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.blocklist[':id'].$delete(args, options))
}

export async function deleteApiV1BlocklistBulk(
  args: InferRequestType<typeof client.api.v1.blocklist.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.blocklist.bulk.$delete(args, options))
}

export async function getApiV1Calendar(
  args: InferRequestType<typeof client.api.v1.calendar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.calendar.$get(args, options))
}

export async function getApiV1CalendarId(
  args: InferRequestType<(typeof client.api.v1.calendar)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.calendar[':id'].$get(args, options))
}

export async function getFeedV1CalendarLidarrIcs(
  args: InferRequestType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feed.v1.calendar['lidarr.ics'].$get(args, options))
}

export async function getApiV1CommandId(
  args: InferRequestType<(typeof client.api.v1.command)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.command[':id'].$get(args, options))
}

export async function deleteApiV1CommandId(
  args: InferRequestType<(typeof client.api.v1.command)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.command[':id'].$delete(args, options))
}

export async function getApiV1Command(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.command.$get(undefined, options))
}

export async function postApiV1Command(
  args: InferRequestType<typeof client.api.v1.command.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.command.$post(args, options))
}

export async function getApiV1CustomfilterId(
  args: InferRequestType<(typeof client.api.v1.customfilter)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customfilter[':id'].$get(args, options))
}

export async function putApiV1CustomfilterId(
  args: InferRequestType<(typeof client.api.v1.customfilter)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customfilter[':id'].$put(args, options))
}

export async function deleteApiV1CustomfilterId(
  args: InferRequestType<(typeof client.api.v1.customfilter)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customfilter[':id'].$delete(args, options))
}

export async function getApiV1Customfilter(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.customfilter.$get(undefined, options))
}

export async function postApiV1Customfilter(
  args: InferRequestType<typeof client.api.v1.customfilter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customfilter.$post(args, options))
}

export async function getApiV1CustomformatId(
  args: InferRequestType<(typeof client.api.v1.customformat)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customformat[':id'].$get(args, options))
}

export async function putApiV1CustomformatId(
  args: InferRequestType<(typeof client.api.v1.customformat)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customformat[':id'].$put(args, options))
}

export async function deleteApiV1CustomformatId(
  args: InferRequestType<(typeof client.api.v1.customformat)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customformat[':id'].$delete(args, options))
}

export async function getApiV1Customformat(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.customformat.$get(undefined, options))
}

export async function postApiV1Customformat(
  args: InferRequestType<typeof client.api.v1.customformat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customformat.$post(args, options))
}

export async function putApiV1CustomformatBulk(
  args: InferRequestType<typeof client.api.v1.customformat.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customformat.bulk.$put(args, options))
}

export async function deleteApiV1CustomformatBulk(
  args: InferRequestType<typeof client.api.v1.customformat.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customformat.bulk.$delete(args, options))
}

export async function getApiV1CustomformatSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.customformat.schema.$get(undefined, options))
}

export async function getApiV1WantedCutoff(
  args: InferRequestType<typeof client.api.v1.wanted.cutoff.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.wanted.cutoff.$get(args, options))
}

export async function getApiV1WantedCutoffId(
  args: InferRequestType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.wanted.cutoff[':id'].$get(args, options))
}

export async function getApiV1Delayprofile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.delayprofile.$get(undefined, options))
}

export async function postApiV1Delayprofile(
  args: InferRequestType<typeof client.api.v1.delayprofile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.delayprofile.$post(args, options))
}

export async function getApiV1DelayprofileId(
  args: InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.delayprofile[':id'].$get(args, options))
}

export async function putApiV1DelayprofileId(
  args: InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.delayprofile[':id'].$put(args, options))
}

export async function deleteApiV1DelayprofileId(
  args: InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.delayprofile[':id'].$delete(args, options))
}

export async function putApiV1DelayprofileReorderId(
  args: InferRequestType<(typeof client.api.v1.delayprofile.reorder)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.delayprofile.reorder[':id'].$put(args, options))
}

export async function getApiV1Diskspace(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.diskspace.$get(undefined, options))
}

export async function getApiV1DownloadclientId(
  args: InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.downloadclient[':id'].$get(args, options))
}

export async function putApiV1DownloadclientId(
  args: InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.downloadclient[':id'].$put(args, options))
}

export async function deleteApiV1DownloadclientId(
  args: InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.downloadclient[':id'].$delete(args, options))
}

export async function getApiV1Downloadclient(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.downloadclient.$get(undefined, options))
}

export async function postApiV1Downloadclient(
  args: InferRequestType<typeof client.api.v1.downloadclient.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.downloadclient.$post(args, options))
}

export async function putApiV1DownloadclientBulk(
  args: InferRequestType<typeof client.api.v1.downloadclient.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.downloadclient.bulk.$put(args, options))
}

export async function deleteApiV1DownloadclientBulk(
  args: InferRequestType<typeof client.api.v1.downloadclient.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.downloadclient.bulk.$delete(args, options))
}

export async function getApiV1DownloadclientSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.downloadclient.schema.$get(undefined, options))
}

export async function postApiV1DownloadclientTest(
  args: InferRequestType<typeof client.api.v1.downloadclient.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.downloadclient.test.$post(args, options))
}

export async function postApiV1DownloadclientTestall(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.downloadclient.testall.$post(undefined, options))
}

export async function postApiV1DownloadclientActionName(
  args: InferRequestType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.downloadclient.action[':name'].$post(args, options))
}

export async function getApiV1ConfigDownloadclientId(
  args: InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.downloadclient[':id'].$get(args, options))
}

export async function putApiV1ConfigDownloadclientId(
  args: InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.downloadclient[':id'].$put(args, options))
}

export async function getApiV1ConfigDownloadclient(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.downloadclient.$get(undefined, options))
}

export async function getApiV1Filesystem(
  args: InferRequestType<typeof client.api.v1.filesystem.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.filesystem.$get(args, options))
}

export async function getApiV1FilesystemType(
  args: InferRequestType<typeof client.api.v1.filesystem.type.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.filesystem.type.$get(args, options))
}

export async function getApiV1FilesystemMediafiles(
  args: InferRequestType<typeof client.api.v1.filesystem.mediafiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.filesystem.mediafiles.$get(args, options))
}

export async function getApiV1Health(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.health.$get(undefined, options))
}

export async function getApiV1History(
  args: InferRequestType<typeof client.api.v1.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.history.$get(args, options))
}

export async function getApiV1HistorySince(
  args: InferRequestType<typeof client.api.v1.history.since.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.history.since.$get(args, options))
}

export async function getApiV1HistoryArtist(
  args: InferRequestType<typeof client.api.v1.history.artist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.history.artist.$get(args, options))
}

export async function postApiV1HistoryFailedId(
  args: InferRequestType<(typeof client.api.v1.history.failed)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.history.failed[':id'].$post(args, options))
}

export async function getApiV1ConfigHostId(
  args: InferRequestType<(typeof client.api.v1.config.host)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.host[':id'].$get(args, options))
}

export async function putApiV1ConfigHostId(
  args: InferRequestType<(typeof client.api.v1.config.host)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.host[':id'].$put(args, options))
}

export async function getApiV1ConfigHost(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.host.$get(undefined, options))
}

export async function getApiV1ImportlistId(
  args: InferRequestType<(typeof client.api.v1.importlist)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.importlist[':id'].$get(args, options))
}

export async function putApiV1ImportlistId(
  args: InferRequestType<(typeof client.api.v1.importlist)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.importlist[':id'].$put(args, options))
}

export async function deleteApiV1ImportlistId(
  args: InferRequestType<(typeof client.api.v1.importlist)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.importlist[':id'].$delete(args, options))
}

export async function getApiV1Importlist(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.importlist.$get(undefined, options))
}

export async function postApiV1Importlist(
  args: InferRequestType<typeof client.api.v1.importlist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.importlist.$post(args, options))
}

export async function putApiV1ImportlistBulk(
  args: InferRequestType<typeof client.api.v1.importlist.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.importlist.bulk.$put(args, options))
}

export async function deleteApiV1ImportlistBulk(
  args: InferRequestType<typeof client.api.v1.importlist.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.importlist.bulk.$delete(args, options))
}

export async function getApiV1ImportlistSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.importlist.schema.$get(undefined, options))
}

export async function postApiV1ImportlistTest(
  args: InferRequestType<typeof client.api.v1.importlist.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.importlist.test.$post(args, options))
}

export async function postApiV1ImportlistTestall(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.importlist.testall.$post(undefined, options))
}

export async function postApiV1ImportlistActionName(
  args: InferRequestType<(typeof client.api.v1.importlist.action)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.importlist.action[':name'].$post(args, options))
}

export async function getApiV1ImportlistexclusionId(
  args: InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.importlistexclusion[':id'].$get(args, options))
}

export async function putApiV1ImportlistexclusionId(
  args: InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.importlistexclusion[':id'].$put(args, options))
}

export async function deleteApiV1ImportlistexclusionId(
  args: InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.importlistexclusion[':id'].$delete(args, options))
}

export async function getApiV1Importlistexclusion(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.importlistexclusion.$get(undefined, options))
}

export async function postApiV1Importlistexclusion(
  args: InferRequestType<typeof client.api.v1.importlistexclusion.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.importlistexclusion.$post(args, options))
}

export async function getApiV1IndexerId(
  args: InferRequestType<(typeof client.api.v1.indexer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexer[':id'].$get(args, options))
}

export async function putApiV1IndexerId(
  args: InferRequestType<(typeof client.api.v1.indexer)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexer[':id'].$put(args, options))
}

export async function deleteApiV1IndexerId(
  args: InferRequestType<(typeof client.api.v1.indexer)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexer[':id'].$delete(args, options))
}

export async function getApiV1Indexer(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.indexer.$get(undefined, options))
}

export async function postApiV1Indexer(
  args: InferRequestType<typeof client.api.v1.indexer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexer.$post(args, options))
}

export async function putApiV1IndexerBulk(
  args: InferRequestType<typeof client.api.v1.indexer.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexer.bulk.$put(args, options))
}

export async function deleteApiV1IndexerBulk(
  args: InferRequestType<typeof client.api.v1.indexer.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexer.bulk.$delete(args, options))
}

export async function getApiV1IndexerSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.indexer.schema.$get(undefined, options))
}

export async function postApiV1IndexerTest(
  args: InferRequestType<typeof client.api.v1.indexer.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexer.test.$post(args, options))
}

export async function postApiV1IndexerTestall(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.indexer.testall.$post(undefined, options))
}

export async function postApiV1IndexerActionName(
  args: InferRequestType<(typeof client.api.v1.indexer.action)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexer.action[':name'].$post(args, options))
}

export async function getApiV1ConfigIndexerId(
  args: InferRequestType<(typeof client.api.v1.config.indexer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.indexer[':id'].$get(args, options))
}

export async function putApiV1ConfigIndexerId(
  args: InferRequestType<(typeof client.api.v1.config.indexer)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.indexer[':id'].$put(args, options))
}

export async function getApiV1ConfigIndexer(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.indexer.$get(undefined, options))
}

export async function getApiV1Indexerflag(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.indexerflag.$get(undefined, options))
}

export async function getApiV1LanguageId(
  args: InferRequestType<(typeof client.api.v1.language)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.language[':id'].$get(args, options))
}

export async function getApiV1Language(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.language.$get(undefined, options))
}

export async function getApiV1Localization(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.localization.$get(undefined, options))
}

export async function getApiV1Log(
  args: InferRequestType<typeof client.api.v1.log.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.log.$get(args, options))
}

export async function getApiV1LogFile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.log.file.$get(undefined, options))
}

export async function getApiV1LogFileFilename(
  args: InferRequestType<(typeof client.api.v1.log.file)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.log.file[':filename'].$get(args, options))
}

export async function getApiV1Manualimport(
  args: InferRequestType<typeof client.api.v1.manualimport.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.manualimport.$get(args, options))
}

export async function postApiV1Manualimport(
  args: InferRequestType<typeof client.api.v1.manualimport.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.manualimport.$post(args, options))
}

export async function getApiV1MediacoverArtistArtistIdFilename(
  args: InferRequestType<
    (typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.mediacover.artist[':artistId'][':filename'].$get(args, options),
  )
}

export async function getApiV1MediacoverAlbumAlbumIdFilename(
  args: InferRequestType<(typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.mediacover.album[':albumId'][':filename'].$get(args, options),
  )
}

export async function getApiV1ConfigMediamanagementId(
  args: InferRequestType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.mediamanagement[':id'].$get(args, options))
}

export async function putApiV1ConfigMediamanagementId(
  args: InferRequestType<(typeof client.api.v1.config.mediamanagement)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.mediamanagement[':id'].$put(args, options))
}

export async function getApiV1ConfigMediamanagement(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.mediamanagement.$get(undefined, options))
}

export async function getApiV1MetadataId(
  args: InferRequestType<(typeof client.api.v1.metadata)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.metadata[':id'].$get(args, options))
}

export async function putApiV1MetadataId(
  args: InferRequestType<(typeof client.api.v1.metadata)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.metadata[':id'].$put(args, options))
}

export async function deleteApiV1MetadataId(
  args: InferRequestType<(typeof client.api.v1.metadata)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.metadata[':id'].$delete(args, options))
}

export async function getApiV1Metadata(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.metadata.$get(undefined, options))
}

export async function postApiV1Metadata(
  args: InferRequestType<typeof client.api.v1.metadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.metadata.$post(args, options))
}

export async function getApiV1MetadataSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.metadata.schema.$get(undefined, options))
}

export async function postApiV1MetadataTest(
  args: InferRequestType<typeof client.api.v1.metadata.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.metadata.test.$post(args, options))
}

export async function postApiV1MetadataTestall(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.metadata.testall.$post(undefined, options))
}

export async function postApiV1MetadataActionName(
  args: InferRequestType<(typeof client.api.v1.metadata.action)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.metadata.action[':name'].$post(args, options))
}

export async function getApiV1Metadataprofile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.metadataprofile.$get(undefined, options))
}

export async function postApiV1Metadataprofile(
  args: InferRequestType<typeof client.api.v1.metadataprofile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.metadataprofile.$post(args, options))
}

export async function getApiV1MetadataprofileId(
  args: InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.metadataprofile[':id'].$get(args, options))
}

export async function putApiV1MetadataprofileId(
  args: InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.metadataprofile[':id'].$put(args, options))
}

export async function deleteApiV1MetadataprofileId(
  args: InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.metadataprofile[':id'].$delete(args, options))
}

export async function getApiV1MetadataprofileSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.metadataprofile.schema.$get(undefined, options))
}

export async function getApiV1ConfigMetadataproviderId(
  args: InferRequestType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.metadataprovider[':id'].$get(args, options))
}

export async function putApiV1ConfigMetadataproviderId(
  args: InferRequestType<(typeof client.api.v1.config.metadataprovider)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.metadataprovider[':id'].$put(args, options))
}

export async function getApiV1ConfigMetadataprovider(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.metadataprovider.$get(undefined, options))
}

export async function getApiV1WantedMissing(
  args: InferRequestType<typeof client.api.v1.wanted.missing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.wanted.missing.$get(args, options))
}

export async function getApiV1WantedMissingId(
  args: InferRequestType<(typeof client.api.v1.wanted.missing)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.wanted.missing[':id'].$get(args, options))
}

export async function getApiV1ConfigNamingId(
  args: InferRequestType<(typeof client.api.v1.config.naming)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.naming[':id'].$get(args, options))
}

export async function putApiV1ConfigNamingId(
  args: InferRequestType<(typeof client.api.v1.config.naming)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.naming[':id'].$put(args, options))
}

export async function getApiV1ConfigNaming(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.naming.$get(undefined, options))
}

export async function getApiV1ConfigNamingExamples(
  args: InferRequestType<typeof client.api.v1.config.naming.examples.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.naming.examples.$get(args, options))
}

export async function getApiV1NotificationId(
  args: InferRequestType<(typeof client.api.v1.notification)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification[':id'].$get(args, options))
}

export async function putApiV1NotificationId(
  args: InferRequestType<(typeof client.api.v1.notification)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification[':id'].$put(args, options))
}

export async function deleteApiV1NotificationId(
  args: InferRequestType<(typeof client.api.v1.notification)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification[':id'].$delete(args, options))
}

export async function getApiV1Notification(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.notification.$get(undefined, options))
}

export async function postApiV1Notification(
  args: InferRequestType<typeof client.api.v1.notification.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.$post(args, options))
}

export async function getApiV1NotificationSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.notification.schema.$get(undefined, options))
}

export async function postApiV1NotificationTest(
  args: InferRequestType<typeof client.api.v1.notification.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.test.$post(args, options))
}

export async function postApiV1NotificationTestall(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.notification.testall.$post(undefined, options))
}

export async function postApiV1NotificationActionName(
  args: InferRequestType<(typeof client.api.v1.notification.action)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.action[':name'].$post(args, options))
}

export async function getApiV1Parse(
  args: InferRequestType<typeof client.api.v1.parse.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.parse.$get(args, options))
}

export async function getPing(options?: ClientRequestOptions) {
  return await parseResponse(client.ping.$get(undefined, options))
}

export async function headPing(options?: ClientRequestOptions) {
  return await parseResponse(client.ping.$head(undefined, options))
}

export async function getApiV1QualitydefinitionId(
  args: InferRequestType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.qualitydefinition[':id'].$get(args, options))
}

export async function putApiV1QualitydefinitionId(
  args: InferRequestType<(typeof client.api.v1.qualitydefinition)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.qualitydefinition[':id'].$put(args, options))
}

export async function getApiV1Qualitydefinition(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.qualitydefinition.$get(undefined, options))
}

export async function putApiV1QualitydefinitionUpdate(
  args: InferRequestType<typeof client.api.v1.qualitydefinition.update.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.qualitydefinition.update.$put(args, options))
}

export async function getApiV1Qualityprofile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.qualityprofile.$get(undefined, options))
}

export async function postApiV1Qualityprofile(
  args: InferRequestType<typeof client.api.v1.qualityprofile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.qualityprofile.$post(args, options))
}

export async function getApiV1QualityprofileId(
  args: InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.qualityprofile[':id'].$get(args, options))
}

export async function putApiV1QualityprofileId(
  args: InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.qualityprofile[':id'].$put(args, options))
}

export async function deleteApiV1QualityprofileId(
  args: InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.qualityprofile[':id'].$delete(args, options))
}

export async function getApiV1QualityprofileSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.qualityprofile.schema.$get(undefined, options))
}

export async function deleteApiV1QueueId(
  args: InferRequestType<(typeof client.api.v1.queue)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.queue[':id'].$delete(args, options))
}

export async function deleteApiV1QueueBulk(
  args: InferRequestType<typeof client.api.v1.queue.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.queue.bulk.$delete(args, options))
}

export async function getApiV1Queue(
  args: InferRequestType<typeof client.api.v1.queue.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.queue.$get(args, options))
}

export async function postApiV1QueueGrabId(
  args: InferRequestType<(typeof client.api.v1.queue.grab)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.queue.grab[':id'].$post(args, options))
}

export async function postApiV1QueueGrabBulk(
  args: InferRequestType<typeof client.api.v1.queue.grab.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.queue.grab.bulk.$post(args, options))
}

export async function getApiV1QueueDetails(
  args: InferRequestType<typeof client.api.v1.queue.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.queue.details.$get(args, options))
}

export async function getApiV1QueueStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.queue.status.$get(undefined, options))
}

export async function getApiV1Release(
  args: InferRequestType<typeof client.api.v1.release.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.release.$get(args, options))
}

export async function postApiV1Release(
  args: InferRequestType<typeof client.api.v1.release.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.release.$post(args, options))
}

export async function getApiV1ReleaseprofileId(
  args: InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.releaseprofile[':id'].$get(args, options))
}

export async function putApiV1ReleaseprofileId(
  args: InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.releaseprofile[':id'].$put(args, options))
}

export async function deleteApiV1ReleaseprofileId(
  args: InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.releaseprofile[':id'].$delete(args, options))
}

export async function getApiV1Releaseprofile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.releaseprofile.$get(undefined, options))
}

export async function postApiV1Releaseprofile(
  args: InferRequestType<typeof client.api.v1.releaseprofile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.releaseprofile.$post(args, options))
}

export async function postApiV1ReleasePush(
  args: InferRequestType<typeof client.api.v1.release.push.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.release.push.$post(args, options))
}

export async function getApiV1RemotepathmappingId(
  args: InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.remotepathmapping[':id'].$get(args, options))
}

export async function putApiV1RemotepathmappingId(
  args: InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.remotepathmapping[':id'].$put(args, options))
}

export async function deleteApiV1RemotepathmappingId(
  args: InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.remotepathmapping[':id'].$delete(args, options))
}

export async function getApiV1Remotepathmapping(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.remotepathmapping.$get(undefined, options))
}

export async function postApiV1Remotepathmapping(
  args: InferRequestType<typeof client.api.v1.remotepathmapping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.remotepathmapping.$post(args, options))
}

export async function getApiV1Rename(
  args: InferRequestType<typeof client.api.v1.rename.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.rename.$get(args, options))
}

export async function getApiV1Retag(
  args: InferRequestType<typeof client.api.v1.retag.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.retag.$get(args, options))
}

export async function getApiV1RootfolderId(
  args: InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.rootfolder[':id'].$get(args, options))
}

export async function putApiV1RootfolderId(
  args: InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.rootfolder[':id'].$put(args, options))
}

export async function deleteApiV1RootfolderId(
  args: InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.rootfolder[':id'].$delete(args, options))
}

export async function getApiV1Rootfolder(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.rootfolder.$get(undefined, options))
}

export async function postApiV1Rootfolder(
  args: InferRequestType<typeof client.api.v1.rootfolder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.rootfolder.$post(args, options))
}

export async function getApiV1Search(
  args: InferRequestType<typeof client.api.v1.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.search.$get(args, options))
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

export async function getApiV1SystemStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.system.status.$get(undefined, options))
}

export async function getApiV1SystemRoutes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.system.routes.$get(undefined, options))
}

export async function getApiV1SystemRoutesDuplicate(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.system.routes.duplicate.$get(undefined, options))
}

export async function postApiV1SystemShutdown(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.system.shutdown.$post(undefined, options))
}

export async function postApiV1SystemRestart(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.system.restart.$post(undefined, options))
}

export async function getApiV1TagId(
  args: InferRequestType<(typeof client.api.v1.tag)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag[':id'].$get(args, options))
}

export async function putApiV1TagId(
  args: InferRequestType<(typeof client.api.v1.tag)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag[':id'].$put(args, options))
}

export async function deleteApiV1TagId(
  args: InferRequestType<(typeof client.api.v1.tag)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag[':id'].$delete(args, options))
}

export async function getApiV1Tag(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.tag.$get(undefined, options))
}

export async function postApiV1Tag(
  args: InferRequestType<typeof client.api.v1.tag.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag.$post(args, options))
}

export async function getApiV1TagDetailId(
  args: InferRequestType<(typeof client.api.v1.tag.detail)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag.detail[':id'].$get(args, options))
}

export async function getApiV1TagDetail(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.tag.detail.$get(undefined, options))
}

export async function getApiV1SystemTask(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.system.task.$get(undefined, options))
}

export async function getApiV1SystemTaskId(
  args: InferRequestType<(typeof client.api.v1.system.task)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.system.task[':id'].$get(args, options))
}

export async function getApiV1Track(
  args: InferRequestType<typeof client.api.v1.track.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.track.$get(args, options))
}

export async function getApiV1TrackId(
  args: InferRequestType<(typeof client.api.v1.track)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.track[':id'].$get(args, options))
}

export async function getApiV1TrackfileId(
  args: InferRequestType<(typeof client.api.v1.trackfile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.trackfile[':id'].$get(args, options))
}

export async function putApiV1TrackfileId(
  args: InferRequestType<(typeof client.api.v1.trackfile)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.trackfile[':id'].$put(args, options))
}

export async function deleteApiV1TrackfileId(
  args: InferRequestType<(typeof client.api.v1.trackfile)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.trackfile[':id'].$delete(args, options))
}

export async function getApiV1Trackfile(
  args: InferRequestType<typeof client.api.v1.trackfile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.trackfile.$get(args, options))
}

export async function putApiV1TrackfileEditor(
  args: InferRequestType<typeof client.api.v1.trackfile.editor.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.trackfile.editor.$put(args, options))
}

export async function deleteApiV1TrackfileBulk(
  args: InferRequestType<typeof client.api.v1.trackfile.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.trackfile.bulk.$delete(args, options))
}

export async function getApiV1ConfigUiId(
  args: InferRequestType<(typeof client.api.v1.config.ui)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.ui[':id'].$get(args, options))
}

export async function putApiV1ConfigUiId(
  args: InferRequestType<(typeof client.api.v1.config.ui)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.ui[':id'].$put(args, options))
}

export async function getApiV1ConfigUi(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.ui.$get(undefined, options))
}

export async function getApiV1Update(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.update.$get(undefined, options))
}

export async function getApiV1LogFileUpdate(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.log.file.update.$get(undefined, options))
}

export async function getApiV1LogFileUpdateFilename(
  args: InferRequestType<(typeof client.api.v1.log.file.update)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.log.file.update[':filename'].$get(args, options))
}
