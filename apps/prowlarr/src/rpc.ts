import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApi(options?: ClientRequestOptions) {
  return await parseResponse(client.api.$get(undefined, options))
}

export async function getApiV1ApplicationsId(
  args: InferRequestType<(typeof client.api.v1.applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.applications[':id'].$get(args, options))
}

export async function putApiV1ApplicationsId(
  args: InferRequestType<(typeof client.api.v1.applications)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.applications[':id'].$put(args, options))
}

export async function deleteApiV1ApplicationsId(
  args: InferRequestType<(typeof client.api.v1.applications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.applications[':id'].$delete(args, options))
}

export async function getApiV1Applications(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.applications.$get(undefined, options))
}

export async function postApiV1Applications(
  args: InferRequestType<typeof client.api.v1.applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.applications.$post(args, options))
}

export async function putApiV1ApplicationsBulk(
  args: InferRequestType<typeof client.api.v1.applications.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.applications.bulk.$put(args, options))
}

export async function deleteApiV1ApplicationsBulk(
  args: InferRequestType<typeof client.api.v1.applications.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.applications.bulk.$delete(args, options))
}

export async function getApiV1ApplicationsSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.applications.schema.$get(undefined, options))
}

export async function postApiV1ApplicationsTest(
  args: InferRequestType<typeof client.api.v1.applications.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.applications.test.$post(args, options))
}

export async function postApiV1ApplicationsTestall(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.applications.testall.$post(undefined, options))
}

export async function postApiV1ApplicationsActionName(
  args: InferRequestType<(typeof client.api.v1.applications.action)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.applications.action[':name'].$post(args, options))
}

export async function getApiV1Appprofile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.appprofile.$get(undefined, options))
}

export async function postApiV1Appprofile(
  args: InferRequestType<typeof client.api.v1.appprofile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.appprofile.$post(args, options))
}

export async function getApiV1AppprofileId(
  args: InferRequestType<(typeof client.api.v1.appprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.appprofile[':id'].$get(args, options))
}

export async function putApiV1AppprofileId(
  args: InferRequestType<(typeof client.api.v1.appprofile)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.appprofile[':id'].$put(args, options))
}

export async function deleteApiV1AppprofileId(
  args: InferRequestType<(typeof client.api.v1.appprofile)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.appprofile[':id'].$delete(args, options))
}

export async function getApiV1AppprofileSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.appprofile.schema.$get(undefined, options))
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

export async function getApiV1ConfigDevelopmentId(
  args: InferRequestType<(typeof client.api.v1.config.development)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.development[':id'].$get(args, options))
}

export async function putApiV1ConfigDevelopmentId(
  args: InferRequestType<(typeof client.api.v1.config.development)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.development[':id'].$put(args, options))
}

export async function getApiV1ConfigDevelopment(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.development.$get(undefined, options))
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

export async function getApiV1HistoryIndexer(
  args: InferRequestType<typeof client.api.v1.history.indexer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.history.indexer.$get(args, options))
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

export async function getApiV1IndexerCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.indexer.categories.$get(undefined, options))
}

export async function getApiV1IndexerproxyId(
  args: InferRequestType<(typeof client.api.v1.indexerproxy)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexerproxy[':id'].$get(args, options))
}

export async function putApiV1IndexerproxyId(
  args: InferRequestType<(typeof client.api.v1.indexerproxy)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexerproxy[':id'].$put(args, options))
}

export async function deleteApiV1IndexerproxyId(
  args: InferRequestType<(typeof client.api.v1.indexerproxy)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexerproxy[':id'].$delete(args, options))
}

export async function getApiV1Indexerproxy(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.indexerproxy.$get(undefined, options))
}

export async function postApiV1Indexerproxy(
  args: InferRequestType<typeof client.api.v1.indexerproxy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexerproxy.$post(args, options))
}

export async function getApiV1IndexerproxySchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.indexerproxy.schema.$get(undefined, options))
}

export async function postApiV1IndexerproxyTest(
  args: InferRequestType<typeof client.api.v1.indexerproxy.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexerproxy.test.$post(args, options))
}

export async function postApiV1IndexerproxyTestall(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.indexerproxy.testall.$post(undefined, options))
}

export async function postApiV1IndexerproxyActionName(
  args: InferRequestType<(typeof client.api.v1.indexerproxy.action)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexerproxy.action[':name'].$post(args, options))
}

export async function getApiV1Indexerstats(
  args: InferRequestType<typeof client.api.v1.indexerstats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexerstats.$get(args, options))
}

export async function getApiV1Indexerstatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.indexerstatus.$get(undefined, options))
}

export async function getApiV1Localization(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.localization.$get(undefined, options))
}

export async function getApiV1LocalizationOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.localization.options.$get(undefined, options))
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

export async function getApiV1IndexerIdNewznab(
  args: InferRequestType<(typeof client.api.v1.indexer)[':id']['newznab']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexer[':id'].newznab.$get(args, options))
}

export async function getIdApi(
  args: InferRequestType<(typeof client)[':id']['api']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].api.$get(args, options))
}

export async function getApiV1IndexerIdDownload(
  args: InferRequestType<(typeof client.api.v1.indexer)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.indexer[':id'].download.$get(args, options))
}

export async function getIdDownload(
  args: InferRequestType<(typeof client)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].download.$get(args, options))
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

export async function getPing(options?: ClientRequestOptions) {
  return await parseResponse(client.ping.$get(undefined, options))
}

export async function headPing(options?: ClientRequestOptions) {
  return await parseResponse(client.ping.$head(undefined, options))
}

export async function getApiV1Search(
  args: InferRequestType<typeof client.api.v1.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.search.$get(args, options))
}

export async function postApiV1Search(
  args: InferRequestType<typeof client.api.v1.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.search.$post(args, options))
}

export async function postApiV1SearchBulk(
  args: InferRequestType<typeof client.api.v1.search.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.search.bulk.$post(args, options))
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
