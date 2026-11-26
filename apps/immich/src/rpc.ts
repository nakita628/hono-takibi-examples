import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActivities(
  args: InferRequestType<typeof client.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activities.$get(args, options))
}

export async function postActivities(
  args: InferRequestType<typeof client.activities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activities.$post(args, options))
}

export async function getActivitiesStatistics(
  args: InferRequestType<typeof client.activities.statistics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activities.statistics.$get(args, options))
}

export async function deleteActivitiesId(
  args: InferRequestType<(typeof client.activities)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activities[':id'].$delete(args, options))
}

export async function postAdminAuthUnlinkAll(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.auth['unlink-all'].$post(undefined, options))
}

export async function getAdminConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.$get(undefined, options))
}

export async function putAdminConfig(
  args: InferRequestType<typeof client.admin.config.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.$put(args, options))
}

export async function getAdminConfigDefaults(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.defaults.$get(undefined, options))
}

export async function getAdminConfigStorageTemplate(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config['storage-template'].$get(undefined, options))
}

export async function postAdminConfigStorageTemplatePreview(
  args: InferRequestType<(typeof client.admin.config)['storage-template']['preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config['storage-template'].preview.$post(args, options))
}

export async function getAdminDatabaseBackups(options?: ClientRequestOptions) {
  return await parseResponse(client.admin['database-backups'].$get(undefined, options))
}

export async function deleteAdminDatabaseBackups(
  args: InferRequestType<(typeof client.admin)['database-backups']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['database-backups'].$delete(args, options))
}

export async function postAdminDatabaseBackupsStartRestore(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin['database-backups']['start-restore'].$post(undefined, options),
  )
}

export async function postAdminDatabaseBackupsUpload(
  args: InferRequestType<(typeof client.admin)['database-backups']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['database-backups'].upload.$post(args, options))
}

export async function getAdminDatabaseBackupsFilename(
  args: InferRequestType<(typeof client.admin)['database-backups'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['database-backups'][':filename'].$get(args, options))
}

export async function getAdminIntegrityReport(
  args: InferRequestType<typeof client.admin.integrity.report.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.integrity.report.$get(args, options))
}

export async function deleteAdminIntegrityReportId(
  args: InferRequestType<(typeof client.admin.integrity.report)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.integrity.report[':id'].$delete(args, options))
}

export async function getAdminIntegrityReportIdFile(
  args: InferRequestType<(typeof client.admin.integrity.report)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.integrity.report[':id'].file.$get(args, options))
}

export async function getAdminIntegrityReportTypeCsv(
  args: InferRequestType<(typeof client.admin.integrity.report)[':type']['csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.integrity.report[':type'].csv.$get(args, options))
}

export async function getAdminIntegritySummary(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.integrity.summary.$get(undefined, options))
}

export async function postAdminMaintenance(
  args: InferRequestType<typeof client.admin.maintenance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.maintenance.$post(args, options))
}

export async function getAdminMaintenanceDetectInstall(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.maintenance['detect-install'].$get(undefined, options))
}

export async function postAdminMaintenanceLogin(
  args: InferRequestType<typeof client.admin.maintenance.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.maintenance.login.$post(args, options))
}

export async function getAdminMaintenanceStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.maintenance.status.$get(undefined, options))
}

export async function postAdminNotifications(
  args: InferRequestType<typeof client.admin.notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.notifications.$post(args, options))
}

export async function postAdminNotificationsTemplatesName(
  args: InferRequestType<(typeof client.admin.notifications.templates)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.notifications.templates[':name'].$post(args, options))
}

export async function postAdminNotificationsTemplatesNamePreview(
  args: InferRequestType<
    (typeof client.admin.notifications.templates)[':name']['preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.notifications.templates[':name'].preview.$post(args, options),
  )
}

export async function postAdminNotificationsTestEmail(
  args: InferRequestType<(typeof client.admin.notifications)['test-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.notifications['test-email'].$post(args, options))
}

export async function getAdminUsers(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.$get(args, options))
}

export async function postAdminUsers(
  args: InferRequestType<typeof client.admin.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.$post(args, options))
}

export async function getAdminUsersId(
  args: InferRequestType<(typeof client.admin.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].$get(args, options))
}

export async function putAdminUsersId(
  args: InferRequestType<(typeof client.admin.users)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].$put(args, options))
}

export async function deleteAdminUsersId(
  args: InferRequestType<(typeof client.admin.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].$delete(args, options))
}

export async function getAdminUsersIdCalendarHeatmap(
  args: InferRequestType<(typeof client.admin.users)[':id']['calendar-heatmap']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id']['calendar-heatmap'].$get(args, options))
}

export async function getAdminUsersIdPreferences(
  args: InferRequestType<(typeof client.admin.users)[':id']['preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].preferences.$get(args, options))
}

export async function putAdminUsersIdPreferences(
  args: InferRequestType<(typeof client.admin.users)[':id']['preferences']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].preferences.$put(args, options))
}

export async function postAdminUsersIdRestore(
  args: InferRequestType<(typeof client.admin.users)[':id']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].restore.$post(args, options))
}

export async function getAdminUsersIdSessions(
  args: InferRequestType<(typeof client.admin.users)[':id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].sessions.$get(args, options))
}

export async function getAdminUsersIdStatistics(
  args: InferRequestType<(typeof client.admin.users)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].statistics.$get(args, options))
}

export async function getAlbums(
  args: InferRequestType<typeof client.albums.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums.$get(args, options))
}

export async function postAlbums(
  args: InferRequestType<typeof client.albums.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums.$post(args, options))
}

export async function putAlbumsAssets(
  args: InferRequestType<typeof client.albums.assets.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums.assets.$put(args, options))
}

export async function getAlbumsStatistics(options?: ClientRequestOptions) {
  return await parseResponse(client.albums.statistics.$get(undefined, options))
}

export async function getAlbumsId(
  args: InferRequestType<(typeof client.albums)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums[':id'].$get(args, options))
}

export async function deleteAlbumsId(
  args: InferRequestType<(typeof client.albums)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums[':id'].$delete(args, options))
}

export async function patchAlbumsId(
  args: InferRequestType<(typeof client.albums)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums[':id'].$patch(args, options))
}

export async function putAlbumsIdAssets(
  args: InferRequestType<(typeof client.albums)[':id']['assets']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums[':id'].assets.$put(args, options))
}

export async function deleteAlbumsIdAssets(
  args: InferRequestType<(typeof client.albums)[':id']['assets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums[':id'].assets.$delete(args, options))
}

export async function getAlbumsIdMapMarkers(
  args: InferRequestType<(typeof client.albums)[':id']['map-markers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums[':id']['map-markers'].$get(args, options))
}

export async function putAlbumsIdUserUserId(
  args: InferRequestType<(typeof client.albums)[':id']['user'][':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums[':id'].user[':userId'].$put(args, options))
}

export async function deleteAlbumsIdUserUserId(
  args: InferRequestType<(typeof client.albums)[':id']['user'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums[':id'].user[':userId'].$delete(args, options))
}

export async function putAlbumsIdUsers(
  args: InferRequestType<(typeof client.albums)[':id']['users']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums[':id'].users.$put(args, options))
}

export async function getApiKeys(options?: ClientRequestOptions) {
  return await parseResponse(client['api-keys'].$get(undefined, options))
}

export async function postApiKeys(
  args: InferRequestType<(typeof client)['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'].$post(args, options))
}

export async function getApiKeysMe(options?: ClientRequestOptions) {
  return await parseResponse(client['api-keys'].me.$get(undefined, options))
}

export async function getApiKeysId(
  args: InferRequestType<(typeof client)['api-keys'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':id'].$get(args, options))
}

export async function putApiKeysId(
  args: InferRequestType<(typeof client)['api-keys'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':id'].$put(args, options))
}

export async function deleteApiKeysId(
  args: InferRequestType<(typeof client)['api-keys'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':id'].$delete(args, options))
}

export async function postApiKeysIdRotate(
  args: InferRequestType<(typeof client)['api-keys'][':id']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':id'].rotate.$post(args, options))
}

export async function getAssetFiles(
  args: InferRequestType<(typeof client)['asset-files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['asset-files'].$get(args, options))
}

export async function getAssetFilesId(
  args: InferRequestType<(typeof client)['asset-files'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['asset-files'][':id'].$get(args, options))
}

export async function deleteAssetFilesId(
  args: InferRequestType<(typeof client)['asset-files'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['asset-files'][':id'].$delete(args, options))
}

export async function getAssetFilesIdDownload(
  args: InferRequestType<(typeof client)['asset-files'][':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['asset-files'][':id'].download.$get(args, options))
}

export async function putAssets(
  args: InferRequestType<typeof client.assets.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$put(args, options))
}

export async function postAssets(
  args: InferRequestType<typeof client.assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$post(args, options))
}

export async function deleteAssets(
  args: InferRequestType<typeof client.assets.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$delete(args, options))
}

export async function postAssetsBulkUploadCheck(
  args: InferRequestType<(typeof client.assets)['bulk-upload-check']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets['bulk-upload-check'].$post(args, options))
}

export async function putAssetsCopy(
  args: InferRequestType<typeof client.assets.copy.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.copy.$put(args, options))
}

export async function postAssetsJobs(
  args: InferRequestType<typeof client.assets.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.jobs.$post(args, options))
}

export async function putAssetsMetadata(
  args: InferRequestType<typeof client.assets.metadata.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.metadata.$put(args, options))
}

export async function deleteAssetsMetadata(
  args: InferRequestType<typeof client.assets.metadata.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.metadata.$delete(args, options))
}

export async function getAssetsStatistics(
  args: InferRequestType<typeof client.assets.statistics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.statistics.$get(args, options))
}

export async function getAssetsId(
  args: InferRequestType<(typeof client.assets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].$get(args, options))
}

export async function putAssetsId(
  args: InferRequestType<(typeof client.assets)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].$put(args, options))
}

export async function getAssetsIdEdits(
  args: InferRequestType<(typeof client.assets)[':id']['edits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].edits.$get(args, options))
}

export async function putAssetsIdEdits(
  args: InferRequestType<(typeof client.assets)[':id']['edits']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].edits.$put(args, options))
}

export async function deleteAssetsIdEdits(
  args: InferRequestType<(typeof client.assets)[':id']['edits']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].edits.$delete(args, options))
}

export async function getAssetsIdMetadata(
  args: InferRequestType<(typeof client.assets)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].metadata.$get(args, options))
}

export async function putAssetsIdMetadata(
  args: InferRequestType<(typeof client.assets)[':id']['metadata']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].metadata.$put(args, options))
}

export async function getAssetsIdMetadataKey(
  args: InferRequestType<(typeof client.assets)[':id']['metadata'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].metadata[':key'].$get(args, options))
}

export async function deleteAssetsIdMetadataKey(
  args: InferRequestType<(typeof client.assets)[':id']['metadata'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].metadata[':key'].$delete(args, options))
}

export async function getAssetsIdOcr(
  args: InferRequestType<(typeof client.assets)[':id']['ocr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].ocr.$get(args, options))
}

export async function getAssetsIdOriginal(
  args: InferRequestType<(typeof client.assets)[':id']['original']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].original.$get(args, options))
}

export async function getAssetsIdThumbnail(
  args: InferRequestType<(typeof client.assets)[':id']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].thumbnail.$get(args, options))
}

export async function getAssetsIdVideoPlayback(
  args: InferRequestType<(typeof client.assets)[':id']['video']['playback']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].video.playback.$get(args, options))
}

export async function getAssetsIdVideoStreamMainM3u8(
  args: InferRequestType<(typeof client.assets)[':id']['video']['stream']['main.m3u8']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].video.stream['main.m3u8'].$get(args, options))
}

export async function deleteAssetsIdVideoStreamSessionId(
  args: InferRequestType<(typeof client.assets)[':id']['video']['stream'][':sessionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].video.stream[':sessionId'].$delete(args, options))
}

export async function getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8(
  args: InferRequestType<
    (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex']['playlist.m3u8']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assets[':id'].video.stream[':sessionId'][':variantIndex']['playlist.m3u8'].$get(
      args,
      options,
    ),
  )
}

export async function getAssetsIdVideoStreamSessionIdVariantIndexFilename(
  args: InferRequestType<
    (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex'][':filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assets[':id'].video.stream[':sessionId'][':variantIndex'][':filename'].$get(
      args,
      options,
    ),
  )
}

export async function postAuthAdminSignUp(
  args: InferRequestType<(typeof client.auth)['admin-sign-up']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['admin-sign-up'].$post(args, options))
}

export async function postAuthChangePassword(
  args: InferRequestType<(typeof client.auth)['change-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['change-password'].$post(args, options))
}

export async function postAuthCode(
  args: InferRequestType<typeof client.auth.code.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.code.$post(args, options))
}

export async function postAuthExchange(
  args: InferRequestType<typeof client.auth.exchange.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.exchange.$post(args, options))
}

export async function postAuthLogin(
  args: InferRequestType<typeof client.auth.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.login.$post(args, options))
}

export async function postAuthLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.logout.$post(undefined, options))
}

export async function putAuthPinCode(
  args: InferRequestType<(typeof client.auth)['pin-code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['pin-code'].$put(args, options))
}

export async function postAuthPinCode(
  args: InferRequestType<(typeof client.auth)['pin-code']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['pin-code'].$post(args, options))
}

export async function deleteAuthPinCode(
  args: InferRequestType<(typeof client.auth)['pin-code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['pin-code'].$delete(args, options))
}

export async function postAuthSessionLock(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.session.lock.$post(undefined, options))
}

export async function postAuthSessionUnlock(
  args: InferRequestType<typeof client.auth.session.unlock.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.session.unlock.$post(args, options))
}

export async function getAuthStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.status.$get(undefined, options))
}

export async function postAuthValidateToken(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.validateToken.$post(undefined, options))
}

export async function getClusterGroupsRequests(options?: ClientRequestOptions) {
  return await parseResponse(client['cluster-groups'].requests.$get(undefined, options))
}

export async function deleteClusterGroupsRequestsId(
  args: InferRequestType<(typeof client)['cluster-groups']['requests'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cluster-groups'].requests[':id'].$delete(args, options))
}

export async function postClusterGroupsRequestsIdAccept(
  args: InferRequestType<(typeof client)['cluster-groups']['requests'][':id']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cluster-groups'].requests[':id'].accept.$post(args, options))
}

export async function postClusterGroupsIdLeave(
  args: InferRequestType<(typeof client)['cluster-groups'][':id']['leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cluster-groups'][':id'].leave.$post(args, options))
}

export async function postClusterGroupsIdRegeneratePeople(
  args: InferRequestType<(typeof client)['cluster-groups'][':id']['regenerate-people']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['cluster-groups'][':id']['regenerate-people'].$post(args, options),
  )
}

export async function getClusterGroupsIdRequests(
  args: InferRequestType<(typeof client)['cluster-groups'][':id']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cluster-groups'][':id'].requests.$get(args, options))
}

export async function putClusterGroupsIdRequests(
  args: InferRequestType<(typeof client)['cluster-groups'][':id']['requests']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cluster-groups'][':id'].requests.$put(args, options))
}

export async function getClusterGroupsIdUsers(
  args: InferRequestType<(typeof client)['cluster-groups'][':id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cluster-groups'][':id'].users.$get(args, options))
}

export async function getConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.config.$get(undefined, options))
}

export async function getConfigDefaults(options?: ClientRequestOptions) {
  return await parseResponse(client.config.defaults.$get(undefined, options))
}

export async function postDownloadArchive(
  args: InferRequestType<typeof client.download.archive.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.download.archive.$post(args, options))
}

export async function postDownloadInfo(
  args: InferRequestType<typeof client.download.info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.download.info.$post(args, options))
}

export async function getDuplicates(options?: ClientRequestOptions) {
  return await parseResponse(client.duplicates.$get(undefined, options))
}

export async function deleteDuplicates(
  args: InferRequestType<typeof client.duplicates.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.duplicates.$delete(args, options))
}

export async function postDuplicatesResolve(
  args: InferRequestType<typeof client.duplicates.resolve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.duplicates.resolve.$post(args, options))
}

export async function deleteDuplicatesId(
  args: InferRequestType<(typeof client.duplicates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.duplicates[':id'].$delete(args, options))
}

export async function getFaces(
  args: InferRequestType<typeof client.faces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faces.$get(args, options))
}

export async function postFaces(
  args: InferRequestType<typeof client.faces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faces.$post(args, options))
}

export async function putFacesId(
  args: InferRequestType<(typeof client.faces)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faces[':id'].$put(args, options))
}

export async function deleteFacesId(
  args: InferRequestType<(typeof client.faces)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faces[':id'].$delete(args, options))
}

export async function getJobs(options?: ClientRequestOptions) {
  return await parseResponse(client.jobs.$get(undefined, options))
}

export async function postJobs(
  args: InferRequestType<typeof client.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$post(args, options))
}

export async function putJobsName(
  args: InferRequestType<(typeof client.jobs)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':name'].$put(args, options))
}

export async function getLibraries(options?: ClientRequestOptions) {
  return await parseResponse(client.libraries.$get(undefined, options))
}

export async function postLibraries(
  args: InferRequestType<typeof client.libraries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.libraries.$post(args, options))
}

export async function getLibrariesId(
  args: InferRequestType<(typeof client.libraries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.libraries[':id'].$get(args, options))
}

export async function putLibrariesId(
  args: InferRequestType<(typeof client.libraries)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.libraries[':id'].$put(args, options))
}

export async function deleteLibrariesId(
  args: InferRequestType<(typeof client.libraries)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.libraries[':id'].$delete(args, options))
}

export async function postLibrariesIdScan(
  args: InferRequestType<(typeof client.libraries)[':id']['scan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.libraries[':id'].scan.$post(args, options))
}

export async function getLibrariesIdStatistics(
  args: InferRequestType<(typeof client.libraries)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.libraries[':id'].statistics.$get(args, options))
}

export async function postLibrariesIdValidate(
  args: InferRequestType<(typeof client.libraries)[':id']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.libraries[':id'].validate.$post(args, options))
}

export async function getMapMarkers(
  args: InferRequestType<typeof client.map.markers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.map.markers.$get(args, options))
}

export async function getMapReverseGeocode(
  args: InferRequestType<(typeof client.map)['reverse-geocode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.map['reverse-geocode'].$get(args, options))
}

export async function getMemories(
  args: InferRequestType<typeof client.memories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memories.$get(args, options))
}

export async function postMemories(
  args: InferRequestType<typeof client.memories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memories.$post(args, options))
}

export async function getMemoriesStatistics(
  args: InferRequestType<typeof client.memories.statistics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memories.statistics.$get(args, options))
}

export async function getMemoriesId(
  args: InferRequestType<(typeof client.memories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memories[':id'].$get(args, options))
}

export async function putMemoriesId(
  args: InferRequestType<(typeof client.memories)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memories[':id'].$put(args, options))
}

export async function deleteMemoriesId(
  args: InferRequestType<(typeof client.memories)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memories[':id'].$delete(args, options))
}

export async function putMemoriesIdAssets(
  args: InferRequestType<(typeof client.memories)[':id']['assets']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memories[':id'].assets.$put(args, options))
}

export async function deleteMemoriesIdAssets(
  args: InferRequestType<(typeof client.memories)[':id']['assets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memories[':id'].assets.$delete(args, options))
}

export async function getNotifications(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$get(args, options))
}

export async function putNotifications(
  args: InferRequestType<typeof client.notifications.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$put(args, options))
}

export async function deleteNotifications(
  args: InferRequestType<typeof client.notifications.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$delete(args, options))
}

export async function getNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$get(args, options))
}

export async function putNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$put(args, options))
}

export async function deleteNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$delete(args, options))
}

export async function postOauthAuthorize(
  args: InferRequestType<typeof client.oauth.authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorize.$post(args, options))
}

export async function postOauthBackchannelLogout(
  args: InferRequestType<(typeof client.oauth)['backchannel-logout']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth['backchannel-logout'].$post(args, options))
}

export async function postOauthCallback(
  args: InferRequestType<typeof client.oauth.callback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.callback.$post(args, options))
}

export async function postOauthLink(
  args: InferRequestType<typeof client.oauth.link.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.link.$post(args, options))
}

export async function getOauthMobileRedirect(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth['mobile-redirect'].$get(undefined, options))
}

export async function postOauthUnlink(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth.unlink.$post(undefined, options))
}

export async function getPartners(
  args: InferRequestType<typeof client.partners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partners.$get(args, options))
}

export async function postPartners(
  args: InferRequestType<typeof client.partners.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partners.$post(args, options))
}

export async function putPartnersId(
  args: InferRequestType<(typeof client.partners)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partners[':id'].$put(args, options))
}

export async function deletePartnersId(
  args: InferRequestType<(typeof client.partners)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partners[':id'].$delete(args, options))
}

export async function getPasskeys(
  args: InferRequestType<typeof client.passkeys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.passkeys.$get(args, options))
}

export async function postPasskeysAuthenticationFinish(
  args: InferRequestType<typeof client.passkeys.authentication.finish.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.passkeys.authentication.finish.$post(args, options))
}

export async function postPasskeysAuthenticationStart(options?: ClientRequestOptions) {
  return await parseResponse(client.passkeys.authentication.start.$post(undefined, options))
}

export async function postPasskeysRegistrationFinish(
  args: InferRequestType<typeof client.passkeys.registration.finish.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.passkeys.registration.finish.$post(args, options))
}

export async function postPasskeysRegistrationStart(options?: ClientRequestOptions) {
  return await parseResponse(client.passkeys.registration.start.$post(undefined, options))
}

export async function getPasskeysId(
  args: InferRequestType<(typeof client.passkeys)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.passkeys[':id'].$get(args, options))
}

export async function deletePasskeysId(
  args: InferRequestType<(typeof client.passkeys)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.passkeys[':id'].$delete(args, options))
}

export async function patchPasskeysId(
  args: InferRequestType<(typeof client.passkeys)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.passkeys[':id'].$patch(args, options))
}

export async function getPeople(
  args: InferRequestType<typeof client.people.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.$get(args, options))
}

export async function putPeople(
  args: InferRequestType<typeof client.people.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.$put(args, options))
}

export async function postPeople(
  args: InferRequestType<typeof client.people.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.$post(args, options))
}

export async function deletePeople(
  args: InferRequestType<typeof client.people.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.$delete(args, options))
}

export async function postPeopleMerge(
  args: InferRequestType<typeof client.people.merge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.merge.$post(args, options))
}

export async function getPeopleUsers(
  args: InferRequestType<typeof client.people.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.users.$get(args, options))
}

export async function putPeopleUsers(
  args: InferRequestType<typeof client.people.users.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.users.$put(args, options))
}

export async function deletePeopleUsers(
  args: InferRequestType<typeof client.people.users.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.users.$delete(args, options))
}

export async function getPeopleId(
  args: InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].$get(args, options))
}

export async function putPeopleId(
  args: InferRequestType<(typeof client.people)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].$put(args, options))
}

export async function deletePeopleId(
  args: InferRequestType<(typeof client.people)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].$delete(args, options))
}

export async function postPeopleIdMerge(
  args: InferRequestType<(typeof client.people)[':id']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].merge.$post(args, options))
}

export async function putPeopleIdReassign(
  args: InferRequestType<(typeof client.people)[':id']['reassign']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].reassign.$put(args, options))
}

export async function getPeopleIdStatistics(
  args: InferRequestType<(typeof client.people)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].statistics.$get(args, options))
}

export async function getPeopleIdThumbnail(
  args: InferRequestType<(typeof client.people)[':id']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].thumbnail.$get(args, options))
}

export async function getPlugins(
  args: InferRequestType<typeof client.plugins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins.$get(args, options))
}

export async function getPluginsMethods(
  args: InferRequestType<typeof client.plugins.methods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins.methods.$get(args, options))
}

export async function getPluginsTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.plugins.templates.$get(undefined, options))
}

export async function getPluginsId(
  args: InferRequestType<(typeof client.plugins)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins[':id'].$get(args, options))
}

export async function getPublicConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.public.config.$get(undefined, options))
}

export async function getPublicConfigDefaults(options?: ClientRequestOptions) {
  return await parseResponse(client.public.config.defaults.$get(undefined, options))
}

export async function getQueues(options?: ClientRequestOptions) {
  return await parseResponse(client.queues.$get(undefined, options))
}

export async function getQueuesName(
  args: InferRequestType<(typeof client.queues)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':name'].$get(args, options))
}

export async function putQueuesName(
  args: InferRequestType<(typeof client.queues)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':name'].$put(args, options))
}

export async function getQueuesNameJobs(
  args: InferRequestType<(typeof client.queues)[':name']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':name'].jobs.$get(args, options))
}

export async function deleteQueuesNameJobs(
  args: InferRequestType<(typeof client.queues)[':name']['jobs']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':name'].jobs.$delete(args, options))
}

export async function getSearchCities(options?: ClientRequestOptions) {
  return await parseResponse(client.search.cities.$get(undefined, options))
}

export async function getSearchExplore(options?: ClientRequestOptions) {
  return await parseResponse(client.search.explore.$get(undefined, options))
}

export async function postSearchLargeAssets(
  args: InferRequestType<(typeof client.search)['large-assets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search['large-assets'].$post(args, options))
}

export async function postSearchMetadata(
  args: InferRequestType<typeof client.search.metadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.metadata.$post(args, options))
}

export async function getSearchPerson(
  args: InferRequestType<typeof client.search.person.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.person.$get(args, options))
}

export async function getSearchPlaces(
  args: InferRequestType<typeof client.search.places.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.places.$get(args, options))
}

export async function postSearchRandom(
  args: InferRequestType<typeof client.search.random.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.random.$post(args, options))
}

export async function postSearchSmart(
  args: InferRequestType<typeof client.search.smart.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.smart.$post(args, options))
}

export async function postSearchStatistics(
  args: InferRequestType<typeof client.search.statistics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.statistics.$post(args, options))
}

export async function getSearchSuggestions(
  args: InferRequestType<typeof client.search.suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.suggestions.$get(args, options))
}

export async function getServerAbout(options?: ClientRequestOptions) {
  return await parseResponse(client.server.about.$get(undefined, options))
}

export async function getServerApkLinks(options?: ClientRequestOptions) {
  return await parseResponse(client.server['apk-links'].$get(undefined, options))
}

export async function getServerConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.server.config.$get(undefined, options))
}

export async function getServerFeatures(options?: ClientRequestOptions) {
  return await parseResponse(client.server.features.$get(undefined, options))
}

export async function getServerLicense(options?: ClientRequestOptions) {
  return await parseResponse(client.server.license.$get(undefined, options))
}

export async function putServerLicense(
  args: InferRequestType<typeof client.server.license.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.server.license.$put(args, options))
}

export async function deleteServerLicense(options?: ClientRequestOptions) {
  return await parseResponse(client.server.license.$delete(undefined, options))
}

export async function getServerMediaTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.server['media-types'].$get(undefined, options))
}

export async function getServerPing(options?: ClientRequestOptions) {
  return await parseResponse(client.server.ping.$get(undefined, options))
}

export async function getServerStatistics(options?: ClientRequestOptions) {
  return await parseResponse(client.server.statistics.$get(undefined, options))
}

export async function getServerStorage(options?: ClientRequestOptions) {
  return await parseResponse(client.server.storage.$get(undefined, options))
}

export async function getServerVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.server.version.$get(undefined, options))
}

export async function getServerVersionCheck(options?: ClientRequestOptions) {
  return await parseResponse(client.server['version-check'].$get(undefined, options))
}

export async function getServerVersionHistory(options?: ClientRequestOptions) {
  return await parseResponse(client.server['version-history'].$get(undefined, options))
}

export async function getSessions(options?: ClientRequestOptions) {
  return await parseResponse(client.sessions.$get(undefined, options))
}

export async function postSessions(
  args: InferRequestType<typeof client.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.$post(args, options))
}

export async function deleteSessions(options?: ClientRequestOptions) {
  return await parseResponse(client.sessions.$delete(undefined, options))
}

export async function putSessionsId(
  args: InferRequestType<(typeof client.sessions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':id'].$put(args, options))
}

export async function deleteSessionsId(
  args: InferRequestType<(typeof client.sessions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':id'].$delete(args, options))
}

export async function postSessionsIdLock(
  args: InferRequestType<(typeof client.sessions)[':id']['lock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':id'].lock.$post(args, options))
}

export async function getSharedLinks(
  args: InferRequestType<(typeof client)['shared-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shared-links'].$get(args, options))
}

export async function postSharedLinks(
  args: InferRequestType<(typeof client)['shared-links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shared-links'].$post(args, options))
}

export async function postSharedLinksLogin(
  args: InferRequestType<(typeof client)['shared-links']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shared-links'].login.$post(args, options))
}

export async function getSharedLinksMe(
  args: InferRequestType<(typeof client)['shared-links']['me']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shared-links'].me.$get(args, options))
}

export async function getSharedLinksId(
  args: InferRequestType<(typeof client)['shared-links'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shared-links'][':id'].$get(args, options))
}

export async function deleteSharedLinksId(
  args: InferRequestType<(typeof client)['shared-links'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shared-links'][':id'].$delete(args, options))
}

export async function patchSharedLinksId(
  args: InferRequestType<(typeof client)['shared-links'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shared-links'][':id'].$patch(args, options))
}

export async function putSharedLinksIdAssets(
  args: InferRequestType<(typeof client)['shared-links'][':id']['assets']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shared-links'][':id'].assets.$put(args, options))
}

export async function deleteSharedLinksIdAssets(
  args: InferRequestType<(typeof client)['shared-links'][':id']['assets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shared-links'][':id'].assets.$delete(args, options))
}

export async function getStacks(
  args: InferRequestType<typeof client.stacks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.$get(args, options))
}

export async function postStacks(
  args: InferRequestType<typeof client.stacks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.$post(args, options))
}

export async function deleteStacks(
  args: InferRequestType<typeof client.stacks.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.$delete(args, options))
}

export async function getStacksId(
  args: InferRequestType<(typeof client.stacks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].$get(args, options))
}

export async function putStacksId(
  args: InferRequestType<(typeof client.stacks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].$put(args, options))
}

export async function deleteStacksId(
  args: InferRequestType<(typeof client.stacks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].$delete(args, options))
}

export async function deleteStacksIdAssetsAssetId(
  args: InferRequestType<(typeof client.stacks)[':id']['assets'][':assetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].assets[':assetId'].$delete(args, options))
}

export async function getSyncAck(options?: ClientRequestOptions) {
  return await parseResponse(client.sync.ack.$get(undefined, options))
}

export async function postSyncAck(
  args: InferRequestType<typeof client.sync.ack.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.ack.$post(args, options))
}

export async function deleteSyncAck(
  args: InferRequestType<typeof client.sync.ack.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.ack.$delete(args, options))
}

export async function postSyncStream(
  args: InferRequestType<typeof client.sync.stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.stream.$post(args, options))
}

export async function getSystemConfig(options?: ClientRequestOptions) {
  return await parseResponse(client['system-config'].$get(undefined, options))
}

export async function putSystemConfig(
  args: InferRequestType<(typeof client)['system-config']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['system-config'].$put(args, options))
}

export async function getSystemConfigDefaults(options?: ClientRequestOptions) {
  return await parseResponse(client['system-config'].defaults.$get(undefined, options))
}

export async function getSystemConfigStorageTemplateOptions(options?: ClientRequestOptions) {
  return await parseResponse(
    client['system-config']['storage-template-options'].$get(undefined, options),
  )
}

export async function getSystemMetadataAdminOnboarding(options?: ClientRequestOptions) {
  return await parseResponse(client['system-metadata']['admin-onboarding'].$get(undefined, options))
}

export async function postSystemMetadataAdminOnboarding(
  args: InferRequestType<(typeof client)['system-metadata']['admin-onboarding']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['system-metadata']['admin-onboarding'].$post(args, options))
}

export async function getSystemMetadataReverseGeocodingState(options?: ClientRequestOptions) {
  return await parseResponse(
    client['system-metadata']['reverse-geocoding-state'].$get(undefined, options),
  )
}

export async function getSystemMetadataVersionCheckState(options?: ClientRequestOptions) {
  return await parseResponse(
    client['system-metadata']['version-check-state'].$get(undefined, options),
  )
}

export async function getTags(options?: ClientRequestOptions) {
  return await parseResponse(client.tags.$get(undefined, options))
}

export async function putTags(
  args: InferRequestType<typeof client.tags.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$put(args, options))
}

export async function postTags(
  args: InferRequestType<typeof client.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$post(args, options))
}

export async function putTagsAssets(
  args: InferRequestType<typeof client.tags.assets.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.assets.$put(args, options))
}

export async function getTagsId(
  args: InferRequestType<(typeof client.tags)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':id'].$get(args, options))
}

export async function putTagsId(
  args: InferRequestType<(typeof client.tags)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':id'].$put(args, options))
}

export async function deleteTagsId(
  args: InferRequestType<(typeof client.tags)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':id'].$delete(args, options))
}

export async function putTagsIdAssets(
  args: InferRequestType<(typeof client.tags)[':id']['assets']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':id'].assets.$put(args, options))
}

export async function deleteTagsIdAssets(
  args: InferRequestType<(typeof client.tags)[':id']['assets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':id'].assets.$delete(args, options))
}

export async function getTimelineBucket(
  args: InferRequestType<typeof client.timeline.bucket.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeline.bucket.$get(args, options))
}

export async function getTimelineBuckets(
  args: InferRequestType<typeof client.timeline.buckets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeline.buckets.$get(args, options))
}

export async function postTrashEmpty(options?: ClientRequestOptions) {
  return await parseResponse(client.trash.empty.$post(undefined, options))
}

export async function postTrashRestore(options?: ClientRequestOptions) {
  return await parseResponse(client.trash.restore.$post(undefined, options))
}

export async function postTrashRestoreAssets(
  args: InferRequestType<typeof client.trash.restore.assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trash.restore.assets.$post(args, options))
}

export async function getUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.users.$get(undefined, options))
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.$get(undefined, options))
}

export async function putUsersMe(
  args: InferRequestType<typeof client.users.me.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.$put(args, options))
}

export async function getUsersMeCalendarHeatmap(
  args: InferRequestType<(typeof client.users.me)['calendar-heatmap']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me['calendar-heatmap'].$get(args, options))
}

export async function getUsersMeLicense(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.license.$get(undefined, options))
}

export async function putUsersMeLicense(
  args: InferRequestType<typeof client.users.me.license.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.license.$put(args, options))
}

export async function deleteUsersMeLicense(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.license.$delete(undefined, options))
}

export async function getUsersMeOnboarding(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.onboarding.$get(undefined, options))
}

export async function putUsersMeOnboarding(
  args: InferRequestType<typeof client.users.me.onboarding.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.onboarding.$put(args, options))
}

export async function deleteUsersMeOnboarding(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.onboarding.$delete(undefined, options))
}

export async function getUsersMePreferences(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.preferences.$get(undefined, options))
}

export async function putUsersMePreferences(
  args: InferRequestType<typeof client.users.me.preferences.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.preferences.$put(args, options))
}

export async function postUsersProfileImage(
  args: InferRequestType<(typeof client.users)['profile-image']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['profile-image'].$post(args, options))
}

export async function deleteUsersProfileImage(options?: ClientRequestOptions) {
  return await parseResponse(client.users['profile-image'].$delete(undefined, options))
}

export async function getUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$get(args, options))
}

export async function getUsersIdProfileImage(
  args: InferRequestType<(typeof client.users)[':id']['profile-image']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id']['profile-image'].$get(args, options))
}

export async function getViewFolder(
  args: InferRequestType<typeof client.view.folder.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.view.folder.$get(args, options))
}

export async function getViewFolderUniquePaths(options?: ClientRequestOptions) {
  return await parseResponse(client.view.folder['unique-paths'].$get(undefined, options))
}

export async function getWorkflows(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.$get(args, options))
}

export async function postWorkflows(
  args: InferRequestType<typeof client.workflows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.$post(args, options))
}

export async function getWorkflowsTriggers(options?: ClientRequestOptions) {
  return await parseResponse(client.workflows.triggers.$get(undefined, options))
}

export async function getWorkflowsId(
  args: InferRequestType<(typeof client.workflows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':id'].$get(args, options))
}

export async function putWorkflowsId(
  args: InferRequestType<(typeof client.workflows)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':id'].$put(args, options))
}

export async function deleteWorkflowsId(
  args: InferRequestType<(typeof client.workflows)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':id'].$delete(args, options))
}

export async function getWorkflowsIdLogs(
  args: InferRequestType<(typeof client.workflows)[':id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':id'].logs.$get(args, options))
}

export async function getWorkflowsIdShare(
  args: InferRequestType<(typeof client.workflows)[':id']['share']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':id'].share.$get(args, options))
}
