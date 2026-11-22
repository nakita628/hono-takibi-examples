import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAdminAclGetGrantsPhp(
  args: InferRequestType<(typeof client.api.admin.acl)['getGrants.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.acl['getGrants.php'].$get(args, options))
}

export async function postApiAdminAclSaveGrantsPhp(
  args: InferRequestType<(typeof client.api.admin.acl)['saveGrants.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.acl['saveGrants.php'].$post(args, options))
}

export async function postApiAdminAddUserPhp(
  args: InferRequestType<(typeof client.api.admin)['addUser.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['addUser.php'].$post(args, options))
}

export async function postApiAdminChangeUserPasswordPhp(
  args: InferRequestType<(typeof client.api.admin)['changeUserPassword.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['changeUserPassword.php'].$post(args, options))
}

export async function postApiAdminClamavTestPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['clamavTest.php'].$post(undefined, options))
}

export async function postApiAdminDiskUsageDeleteSnapshotPhp(
  args: InferRequestType<(typeof client.api.admin)['diskUsageDeleteSnapshot.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['diskUsageDeleteSnapshot.php'].$post(args, options))
}

export async function getApiAdminDiskUsageSummaryPhp(
  args: InferRequestType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['diskUsageSummary.php'].$get(args, options))
}

export async function postApiAdminDiskUsageTriggerScanPhp(
  args: InferRequestType<(typeof client.api.admin)['diskUsageTriggerScan.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['diskUsageTriggerScan.php'].$post(args, options))
}

export async function postApiAdminDownloadProBundlePhp(
  args: InferRequestType<(typeof client.api.admin)['downloadProBundle.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['downloadProBundle.php'].$post(args, options))
}

export async function getApiAdminGetConfigPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['getConfig.php'].$get(undefined, options))
}

export async function getApiAdminGetUsersPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['getUsers.php'].$get(undefined, options))
}

export async function postApiAdminInstallProBundlePhp(
  args: InferRequestType<(typeof client.api.admin)['installProBundle.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['installProBundle.php'].$post(args, options))
}

export async function getApiAdminOidcDebugInfoPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.admin['oidcDebugInfo.php'].$get(undefined, options))
}

export async function postApiAdminOidcTestPhp(
  args: InferRequestType<(typeof client.api.admin)['oidcTest.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['oidcTest.php'].$post(args, options))
}

export async function getApiAdminReadMetadataPhp(
  args: InferRequestType<(typeof client.api.admin)['readMetadata.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['readMetadata.php'].$get(args, options))
}

export async function deleteApiAdminRemoveUserPhp(
  args: InferRequestType<(typeof client.api.admin)['removeUser.php']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['removeUser.php'].$delete(args, options))
}

export async function postApiAdminResumableCleanupPhp(
  args: InferRequestType<(typeof client.api.admin)['resumableCleanup.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['resumableCleanup.php'].$post(args, options))
}

export async function postApiAdminSetEncryptionKeyPhp(
  args: InferRequestType<(typeof client.api.admin)['setEncryptionKey.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['setEncryptionKey.php'].$post(args, options))
}

export async function postApiAdminSetLicensePhp(
  args: InferRequestType<(typeof client.api.admin)['setLicense.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['setLicense.php'].$post(args, options))
}

export async function putApiAdminUpdateConfigPhp(
  args: InferRequestType<(typeof client.api.admin)['updateConfig.php']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['updateConfig.php'].$put(args, options))
}

export async function putApiAdminUpdateUserPermissionsPhp(
  args: InferRequestType<(typeof client.api.admin)['updateUserPermissions.php']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['updateUserPermissions.php'].$put(args, options))
}

export async function getApiAdminVirusLogPhp(
  args: InferRequestType<(typeof client.api.admin)['virusLog.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin['virusLog.php'].$get(args, options))
}

export async function postApiAuthAuthPhp(
  args: InferRequestType<(typeof client.api.auth)['auth.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth['auth.php'].$post(args, options))
}

export async function getApiAuthCheckAuthPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.auth['checkAuth.php'].$get(undefined, options))
}

export async function getApiAuthLoginBasicPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.auth['login_basic.php'].$get(undefined, options))
}

export async function postApiAuthLogoutPhp(
  args: InferRequestType<(typeof client.api.auth)['logout.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth['logout.php'].$post(args, options))
}

export async function getApiAuthTokenPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.auth['token.php'].$get(undefined, options))
}

export async function postApiFileCopyFilesPhp(
  args: InferRequestType<(typeof client.api.file)['copyFiles.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['copyFiles.php'].$post(args, options))
}

export async function postApiFileCreateFilePhp(
  args: InferRequestType<(typeof client.api.file)['createFile.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['createFile.php'].$post(args, options))
}

export async function postApiFileCreateShareLinkPhp(
  args: InferRequestType<(typeof client.api.file)['createShareLink.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['createShareLink.php'].$post(args, options))
}

export async function postApiFileDeleteFilesPhp(
  args: InferRequestType<(typeof client.api.file)['deleteFiles.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['deleteFiles.php'].$post(args, options))
}

export async function postApiFileDeleteShareLinkPhp(
  args: InferRequestType<(typeof client.api.file)['deleteShareLink.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['deleteShareLink.php'].$post(args, options))
}

export async function postApiFileDeleteTrashFilesPhp(
  args: InferRequestType<(typeof client.api.file)['deleteTrashFiles.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['deleteTrashFiles.php'].$post(args, options))
}

export async function getApiFileDownloadPhp(
  args: InferRequestType<(typeof client.api.file)['download.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['download.php'].$get(args, options))
}

export async function postApiFileDownloadZipPhp(
  args: InferRequestType<(typeof client.api.file)['downloadZip.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['downloadZip.php'].$post(args, options))
}

export async function getApiFileDownloadZipFilePhp(
  args: InferRequestType<(typeof client.api.file)['downloadZipFile.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['downloadZipFile.php'].$get(args, options))
}

export async function postApiFileExtractZipPhp(
  args: InferRequestType<(typeof client.api.file)['extractZip.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['extractZip.php'].$post(args, options))
}

export async function getApiFileGetFileListPhp(
  args: InferRequestType<(typeof client.api.file)['getFileList.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['getFileList.php'].$get(args, options))
}

export async function getApiFileGetFileTagPhp(
  args: InferRequestType<(typeof client.api.file)['getFileTag.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['getFileTag.php'].$get(args, options))
}

export async function getApiFileGetShareLinksPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.file['getShareLinks.php'].$get(undefined, options))
}

export async function getApiFileGetTrashItemsPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.file['getTrashItems.php'].$get(undefined, options))
}

export async function postApiFileMoveFilesPhp(
  args: InferRequestType<(typeof client.api.file)['moveFiles.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['moveFiles.php'].$post(args, options))
}

export async function putApiFileRenameFilePhp(
  args: InferRequestType<(typeof client.api.file)['renameFile.php']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['renameFile.php'].$put(args, options))
}

export async function postApiFileRestoreFilesPhp(
  args: InferRequestType<(typeof client.api.file)['restoreFiles.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['restoreFiles.php'].$post(args, options))
}

export async function putApiFileSaveFilePhp(
  args: InferRequestType<(typeof client.api.file)['saveFile.php']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['saveFile.php'].$put(args, options))
}

export async function postApiFileSaveFileTagPhp(
  args: InferRequestType<(typeof client.api.file)['saveFileTag.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['saveFileTag.php'].$post(args, options))
}

export async function getApiFileSharePhp(
  args: InferRequestType<(typeof client.api.file)['share.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['share.php'].$get(args, options))
}

export async function getApiFileSnippetPhp(
  args: InferRequestType<(typeof client.api.file)['snippet.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['snippet.php'].$get(args, options))
}

export async function getApiFileThumbnailPhp(
  args: InferRequestType<(typeof client.api.file)['thumbnail.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['thumbnail.php'].$get(args, options))
}

export async function getApiFileZipStatusPhp(
  args: InferRequestType<(typeof client.api.file)['zipStatus.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.file['zipStatus.php'].$get(args, options))
}

export async function getApiFolderCapabilitiesPhp(
  args: InferRequestType<(typeof client.api.folder)['capabilities.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['capabilities.php'].$get(args, options))
}

export async function postApiFolderCreateFolderPhp(
  args: InferRequestType<(typeof client.api.folder)['createFolder.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['createFolder.php'].$post(args, options))
}

export async function postApiFolderCreateShareFolderLinkPhp(
  args: InferRequestType<(typeof client.api.folder)['createShareFolderLink.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['createShareFolderLink.php'].$post(args, options))
}

export async function postApiFolderDeleteFolderPhp(
  args: InferRequestType<(typeof client.api.folder)['deleteFolder.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['deleteFolder.php'].$post(args, options))
}

export async function postApiFolderDeleteShareFolderLinkPhp(
  args: InferRequestType<(typeof client.api.folder)['deleteShareFolderLink.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['deleteShareFolderLink.php'].$post(args, options))
}

export async function getApiFolderDownloadSharedFilePhp(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['downloadSharedFile.php'].$get(args, options))
}

export async function getApiFolderDownloadSharedFolderPhp(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['downloadSharedFolder.php'].$get(args, options))
}

export async function postApiFolderEncryptionJobStartPhp(
  args: InferRequestType<(typeof client.api.folder)['encryptionJobStart.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['encryptionJobStart.php'].$post(args, options))
}

export async function getApiFolderEncryptionJobStatusPhp(
  args: InferRequestType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['encryptionJobStatus.php'].$get(args, options))
}

export async function postApiFolderEncryptionJobTickPhp(
  args: InferRequestType<(typeof client.api.folder)['encryptionJobTick.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['encryptionJobTick.php'].$post(args, options))
}

export async function getApiFolderEncryptionPlanPhp(
  args: InferRequestType<(typeof client.api.folder)['encryptionPlan.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['encryptionPlan.php'].$get(args, options))
}

export async function getApiFolderGetFolderColorsPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.folder['getFolderColors.php'].$get(undefined, options))
}

export async function getApiFolderGetFolderEncryptionPhp(
  args: InferRequestType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['getFolderEncryption.php'].$get(args, options))
}

export async function getApiFolderGetFolderListPhp(
  args: InferRequestType<(typeof client.api.folder)['getFolderList.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['getFolderList.php'].$get(args, options))
}

export async function getApiFolderGetShareFolderLinksPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.folder['getShareFolderLinks.php'].$get(undefined, options))
}

export async function getApiFolderIsEmptyPhp(
  args: InferRequestType<(typeof client.api.folder)['isEmpty.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['isEmpty.php'].$get(args, options))
}

export async function getApiFolderListChildrenPhp(
  args: InferRequestType<(typeof client.api.folder)['listChildren.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['listChildren.php'].$get(args, options))
}

export async function postApiFolderMoveFolderPhp(
  args: InferRequestType<(typeof client.api.folder)['moveFolder.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['moveFolder.php'].$post(args, options))
}

export async function postApiFolderRenameFolderPhp(
  args: InferRequestType<(typeof client.api.folder)['renameFolder.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['renameFolder.php'].$post(args, options))
}

export async function postApiFolderSaveFolderColorPhp(
  args: InferRequestType<(typeof client.api.folder)['saveFolderColor.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['saveFolderColor.php'].$post(args, options))
}

export async function postApiFolderSetFolderEncryptionPhp(
  args: InferRequestType<(typeof client.api.folder)['setFolderEncryption.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['setFolderEncryption.php'].$post(args, options))
}

export async function getApiFolderShareFolderPhp(
  args: InferRequestType<(typeof client.api.folder)['shareFolder.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['shareFolder.php'].$get(args, options))
}

export async function postApiFolderUploadToSharedFolderPhp(
  args: InferRequestType<(typeof client.api.folder)['uploadToSharedFolder.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.folder['uploadToSharedFolder.php'].$post(args, options))
}

export async function getApiMediaGetProgressPhp(
  args: InferRequestType<(typeof client.api.media)['getProgress.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.media['getProgress.php'].$get(args, options))
}

export async function getApiMediaGetViewedMapPhp(
  args: InferRequestType<(typeof client.api.media)['getViewedMap.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.media['getViewedMap.php'].$get(args, options))
}

export async function postApiMediaUpdateProgressPhp(
  args: InferRequestType<(typeof client.api.media)['updateProgress.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.media['updateProgress.php'].$post(args, options))
}

export async function postApiOnlyofficeCallbackPhp(
  args: InferRequestType<(typeof client.api.onlyoffice)['callback.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.onlyoffice['callback.php'].$post(args, options))
}

export async function getApiOnlyofficeConfigPhp(
  args: InferRequestType<(typeof client.api.onlyoffice)['config.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.onlyoffice['config.php'].$get(args, options))
}

export async function getApiOnlyofficeSignedDownloadPhp(
  args: InferRequestType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.onlyoffice['signed-download.php'].$get(args, options))
}

export async function getApiOnlyofficeStatusPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.onlyoffice['status.php'].$get(undefined, options))
}

export async function getApiProAuditExportCsvPhp(
  args: InferRequestType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro.audit['exportCsv.php'].$get(args, options))
}

export async function getApiProAuditListPhp(
  args: InferRequestType<(typeof client.api.pro.audit)['list.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro.audit['list.php'].$get(args, options))
}

export async function getApiProDiskUsageChildrenPhp(
  args: InferRequestType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro['diskUsageChildren.php'].$get(args, options))
}

export async function postApiProDiskUsageDeleteFilePermanentPhp(
  args: InferRequestType<(typeof client.api.pro)['diskUsageDeleteFilePermanent.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.pro['diskUsageDeleteFilePermanent.php'].$post(args, options),
  )
}

export async function postApiProDiskUsageDeleteFolderRecursivePhp(
  args: InferRequestType<(typeof client.api.pro)['diskUsageDeleteFolderRecursive.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.pro['diskUsageDeleteFolderRecursive.php'].$post(args, options),
  )
}

export async function getApiProDiskUsageTopFilesPhp(
  args: InferRequestType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro['diskUsageTopFiles.php'].$get(args, options))
}

export async function getApiProGroupsListPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.pro.groups['list.php'].$get(undefined, options))
}

export async function postApiProGroupsSavePhp(
  args: InferRequestType<(typeof client.api.pro.groups)['save.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro.groups['save.php'].$post(args, options))
}

export async function getApiProPortalsGetPhp(
  args: InferRequestType<(typeof client.api.pro.portals)['get.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro.portals['get.php'].$get(args, options))
}

export async function getApiProPortalsListPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.pro.portals['list.php'].$get(undefined, options))
}

export async function getApiProPortalsPublicMetaPhp(
  args: InferRequestType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro.portals['publicMeta.php'].$get(args, options))
}

export async function postApiProPortalsSavePhp(
  args: InferRequestType<(typeof client.api.pro.portals)['save.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro.portals['save.php'].$post(args, options))
}

export async function getApiProPortalsSubmissionsPhp(
  args: InferRequestType<(typeof client.api.pro.portals)['submissions.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro.portals['submissions.php'].$get(args, options))
}

export async function postApiProPortalsSubmitFormPhp(
  args: InferRequestType<(typeof client.api.pro.portals)['submitForm.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro.portals['submitForm.php'].$post(args, options))
}

export async function postApiProPortalsUploadLogoPhp(
  args: InferRequestType<(typeof client.api.pro.portals)['uploadLogo.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro.portals['uploadLogo.php'].$post(args, options))
}

export async function getApiProSearchQueryPhp(
  args: InferRequestType<(typeof client.api.pro.search)['query.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro.search['query.php'].$get(args, options))
}

export async function postApiProUploadBrandLogoPhp(
  args: InferRequestType<(typeof client.api.pro)['uploadBrandLogo.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pro['uploadBrandLogo.php'].$post(args, options))
}

export async function postApiProfileChangePasswordPhp(
  args: InferRequestType<(typeof client.api.profile)['changePassword.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.profile['changePassword.php'].$post(args, options))
}

export async function getApiProfileGetCurrentUserPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.profile['getCurrentUser.php'].$get(undefined, options))
}

export async function getApiProfileGetUserPermissionsPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.profile['getUserPermissions.php'].$get(undefined, options))
}

export async function putApiProfileTotpDisablePhp(
  args: InferRequestType<(typeof client.api.profile)['totp_disable.php']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.profile['totp_disable.php'].$put(args, options))
}

export async function postApiProfileTotpRecoverPhp(
  args: InferRequestType<(typeof client.api.profile)['totp_recover.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.profile['totp_recover.php'].$post(args, options))
}

export async function postApiProfileTotpSaveCodePhp(
  args: InferRequestType<(typeof client.api.profile)['totp_saveCode.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.profile['totp_saveCode.php'].$post(args, options))
}

export async function getApiProfileTotpSetupPhp(
  args: InferRequestType<(typeof client.api.profile)['totp_setup.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.profile['totp_setup.php'].$get(args, options))
}

export async function postApiProfileTotpVerifyPhp(
  args: InferRequestType<(typeof client.api.profile)['totp_verify.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.profile['totp_verify.php'].$post(args, options))
}

export async function putApiProfileUpdateUserPanelPhp(
  args: InferRequestType<(typeof client.api.profile)['updateUserPanel.php']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.profile['updateUserPanel.php'].$put(args, options))
}

export async function postApiProfileUploadPicturePhp(
  args: InferRequestType<(typeof client.api.profile)['uploadPicture.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.profile['uploadPicture.php'].$post(args, options))
}

export async function getApiPublicSiteConfigPhp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.public['siteConfig.php'].$get(undefined, options))
}

export async function postApiUploadCheckExistingPhp(
  args: InferRequestType<(typeof client.api.upload)['checkExisting.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.upload['checkExisting.php'].$post(args, options))
}

export async function postApiUploadRemoveChunksPhp(
  args: InferRequestType<(typeof client.api.upload)['removeChunks.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.upload['removeChunks.php'].$post(args, options))
}

export async function postApiUploadUploadPhp(
  args: InferRequestType<(typeof client.api.upload)['upload.php']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.upload['upload.php'].$post(args, options))
}
