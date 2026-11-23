import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiAdminRemoveUserPhpRoute,
  getApiAdminAclGetGrantsPhpRoute,
  getApiAdminDiskUsageSummaryPhpRoute,
  getApiAdminGetConfigPhpRoute,
  getApiAdminGetUsersPhpRoute,
  getApiAdminOidcDebugInfoPhpRoute,
  getApiAdminReadMetadataPhpRoute,
  getApiAdminVirusLogPhpRoute,
  getApiAuthCheckAuthPhpRoute,
  getApiAuthLoginBasicPhpRoute,
  getApiAuthTokenPhpRoute,
  getApiFileDownloadPhpRoute,
  getApiFileDownloadZipFilePhpRoute,
  getApiFileGetFileListPhpRoute,
  getApiFileGetFileTagPhpRoute,
  getApiFileGetShareLinksPhpRoute,
  getApiFileGetTrashItemsPhpRoute,
  getApiFileSharePhpRoute,
  getApiFileSnippetPhpRoute,
  getApiFileThumbnailPhpRoute,
  getApiFileZipStatusPhpRoute,
  getApiFolderCapabilitiesPhpRoute,
  getApiFolderDownloadSharedFilePhpRoute,
  getApiFolderDownloadSharedFolderPhpRoute,
  getApiFolderEncryptionJobStatusPhpRoute,
  getApiFolderEncryptionPlanPhpRoute,
  getApiFolderGetFolderColorsPhpRoute,
  getApiFolderGetFolderEncryptionPhpRoute,
  getApiFolderGetFolderListPhpRoute,
  getApiFolderGetShareFolderLinksPhpRoute,
  getApiFolderIsEmptyPhpRoute,
  getApiFolderListChildrenPhpRoute,
  getApiFolderShareFolderPhpRoute,
  getApiMediaGetProgressPhpRoute,
  getApiMediaGetViewedMapPhpRoute,
  getApiOnlyofficeConfigPhpRoute,
  getApiOnlyofficeSignedDownloadPhpRoute,
  getApiOnlyofficeStatusPhpRoute,
  getApiProAuditExportCsvPhpRoute,
  getApiProAuditListPhpRoute,
  getApiProDiskUsageChildrenPhpRoute,
  getApiProDiskUsageTopFilesPhpRoute,
  getApiProfileGetCurrentUserPhpRoute,
  getApiProfileGetUserPermissionsPhpRoute,
  getApiProfileTotpSetupPhpRoute,
  getApiProGroupsListPhpRoute,
  getApiProPortalsGetPhpRoute,
  getApiProPortalsListPhpRoute,
  getApiProPortalsPublicMetaPhpRoute,
  getApiProPortalsSubmissionsPhpRoute,
  getApiProSearchQueryPhpRoute,
  getApiPublicSiteConfigPhpRoute,
  postApiAdminAclSaveGrantsPhpRoute,
  postApiAdminAddUserPhpRoute,
  postApiAdminChangeUserPasswordPhpRoute,
  postApiAdminClamavTestPhpRoute,
  postApiAdminDiskUsageDeleteSnapshotPhpRoute,
  postApiAdminDiskUsageTriggerScanPhpRoute,
  postApiAdminDownloadProBundlePhpRoute,
  postApiAdminInstallProBundlePhpRoute,
  postApiAdminOidcTestPhpRoute,
  postApiAdminResumableCleanupPhpRoute,
  postApiAdminSetEncryptionKeyPhpRoute,
  postApiAdminSetLicensePhpRoute,
  postApiAuthAuthPhpRoute,
  postApiAuthLogoutPhpRoute,
  postApiFileCopyFilesPhpRoute,
  postApiFileCreateFilePhpRoute,
  postApiFileCreateShareLinkPhpRoute,
  postApiFileDeleteFilesPhpRoute,
  postApiFileDeleteShareLinkPhpRoute,
  postApiFileDeleteTrashFilesPhpRoute,
  postApiFileDownloadZipPhpRoute,
  postApiFileExtractZipPhpRoute,
  postApiFileMoveFilesPhpRoute,
  postApiFileRestoreFilesPhpRoute,
  postApiFileSaveFileTagPhpRoute,
  postApiFolderCreateFolderPhpRoute,
  postApiFolderCreateShareFolderLinkPhpRoute,
  postApiFolderDeleteFolderPhpRoute,
  postApiFolderDeleteShareFolderLinkPhpRoute,
  postApiFolderEncryptionJobStartPhpRoute,
  postApiFolderEncryptionJobTickPhpRoute,
  postApiFolderMoveFolderPhpRoute,
  postApiFolderRenameFolderPhpRoute,
  postApiFolderSaveFolderColorPhpRoute,
  postApiFolderSetFolderEncryptionPhpRoute,
  postApiFolderUploadToSharedFolderPhpRoute,
  postApiMediaUpdateProgressPhpRoute,
  postApiOnlyofficeCallbackPhpRoute,
  postApiProDiskUsageDeleteFilePermanentPhpRoute,
  postApiProDiskUsageDeleteFolderRecursivePhpRoute,
  postApiProfileChangePasswordPhpRoute,
  postApiProfileTotpRecoverPhpRoute,
  postApiProfileTotpSaveCodePhpRoute,
  postApiProfileTotpVerifyPhpRoute,
  postApiProfileUploadPicturePhpRoute,
  postApiProGroupsSavePhpRoute,
  postApiProPortalsSavePhpRoute,
  postApiProPortalsSubmitFormPhpRoute,
  postApiProPortalsUploadLogoPhpRoute,
  postApiProUploadBrandLogoPhpRoute,
  postApiUploadCheckExistingPhpRoute,
  postApiUploadRemoveChunksPhpRoute,
  postApiUploadUploadPhpRoute,
  putApiAdminUpdateConfigPhpRoute,
  putApiAdminUpdateUserPermissionsPhpRoute,
  putApiFileRenameFilePhpRoute,
  putApiFileSaveFilePhpRoute,
  putApiProfileTotpDisablePhpRoute,
  putApiProfileUpdateUserPanelPhpRoute,
} from '../routes'

export const getApiAdminAclGetGrantsPhpRouteHandler: RouteHandler<
  typeof getApiAdminAclGetGrantsPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminAclSaveGrantsPhpRouteHandler: RouteHandler<
  typeof postApiAdminAclSaveGrantsPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminAddUserPhpRouteHandler: RouteHandler<
  typeof postApiAdminAddUserPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminChangeUserPasswordPhpRouteHandler: RouteHandler<
  typeof postApiAdminChangeUserPasswordPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminClamavTestPhpRouteHandler: RouteHandler<
  typeof postApiAdminClamavTestPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminDiskUsageDeleteSnapshotPhpRouteHandler: RouteHandler<
  typeof postApiAdminDiskUsageDeleteSnapshotPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminDiskUsageSummaryPhpRouteHandler: RouteHandler<
  typeof getApiAdminDiskUsageSummaryPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminDiskUsageTriggerScanPhpRouteHandler: RouteHandler<
  typeof postApiAdminDiskUsageTriggerScanPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminDownloadProBundlePhpRouteHandler: RouteHandler<
  typeof postApiAdminDownloadProBundlePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminGetConfigPhpRouteHandler: RouteHandler<
  typeof getApiAdminGetConfigPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminGetUsersPhpRouteHandler: RouteHandler<
  typeof getApiAdminGetUsersPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminInstallProBundlePhpRouteHandler: RouteHandler<
  typeof postApiAdminInstallProBundlePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminOidcDebugInfoPhpRouteHandler: RouteHandler<
  typeof getApiAdminOidcDebugInfoPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminOidcTestPhpRouteHandler: RouteHandler<
  typeof postApiAdminOidcTestPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminReadMetadataPhpRouteHandler: RouteHandler<
  typeof getApiAdminReadMetadataPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAdminRemoveUserPhpRouteHandler: RouteHandler<
  typeof deleteApiAdminRemoveUserPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminResumableCleanupPhpRouteHandler: RouteHandler<
  typeof postApiAdminResumableCleanupPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminSetEncryptionKeyPhpRouteHandler: RouteHandler<
  typeof postApiAdminSetEncryptionKeyPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAdminSetLicensePhpRouteHandler: RouteHandler<
  typeof postApiAdminSetLicensePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminUpdateConfigPhpRouteHandler: RouteHandler<
  typeof putApiAdminUpdateConfigPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAdminUpdateUserPermissionsPhpRouteHandler: RouteHandler<
  typeof putApiAdminUpdateUserPermissionsPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminVirusLogPhpRouteHandler: RouteHandler<
  typeof getApiAdminVirusLogPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAuthAuthPhpRouteHandler: RouteHandler<typeof postApiAuthAuthPhpRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiAuthCheckAuthPhpRouteHandler: RouteHandler<
  typeof getApiAuthCheckAuthPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAuthLoginBasicPhpRouteHandler: RouteHandler<
  typeof getApiAuthLoginBasicPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAuthLogoutPhpRouteHandler: RouteHandler<
  typeof postApiAuthLogoutPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAuthTokenPhpRouteHandler: RouteHandler<typeof getApiAuthTokenPhpRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiFileCopyFilesPhpRouteHandler: RouteHandler<
  typeof postApiFileCopyFilesPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFileCreateFilePhpRouteHandler: RouteHandler<
  typeof postApiFileCreateFilePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFileCreateShareLinkPhpRouteHandler: RouteHandler<
  typeof postApiFileCreateShareLinkPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFileDeleteFilesPhpRouteHandler: RouteHandler<
  typeof postApiFileDeleteFilesPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFileDeleteShareLinkPhpRouteHandler: RouteHandler<
  typeof postApiFileDeleteShareLinkPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFileDeleteTrashFilesPhpRouteHandler: RouteHandler<
  typeof postApiFileDeleteTrashFilesPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFileDownloadPhpRouteHandler: RouteHandler<
  typeof getApiFileDownloadPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFileDownloadZipPhpRouteHandler: RouteHandler<
  typeof postApiFileDownloadZipPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFileDownloadZipFilePhpRouteHandler: RouteHandler<
  typeof getApiFileDownloadZipFilePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFileExtractZipPhpRouteHandler: RouteHandler<
  typeof postApiFileExtractZipPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFileGetFileListPhpRouteHandler: RouteHandler<
  typeof getApiFileGetFileListPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFileGetFileTagPhpRouteHandler: RouteHandler<
  typeof getApiFileGetFileTagPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFileGetShareLinksPhpRouteHandler: RouteHandler<
  typeof getApiFileGetShareLinksPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFileGetTrashItemsPhpRouteHandler: RouteHandler<
  typeof getApiFileGetTrashItemsPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFileMoveFilesPhpRouteHandler: RouteHandler<
  typeof postApiFileMoveFilesPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiFileRenameFilePhpRouteHandler: RouteHandler<
  typeof putApiFileRenameFilePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFileRestoreFilesPhpRouteHandler: RouteHandler<
  typeof postApiFileRestoreFilesPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiFileSaveFilePhpRouteHandler: RouteHandler<
  typeof putApiFileSaveFilePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFileSaveFileTagPhpRouteHandler: RouteHandler<
  typeof postApiFileSaveFileTagPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFileSharePhpRouteHandler: RouteHandler<typeof getApiFileSharePhpRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiFileSnippetPhpRouteHandler: RouteHandler<
  typeof getApiFileSnippetPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFileThumbnailPhpRouteHandler: RouteHandler<
  typeof getApiFileThumbnailPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFileZipStatusPhpRouteHandler: RouteHandler<
  typeof getApiFileZipStatusPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFolderCapabilitiesPhpRouteHandler: RouteHandler<
  typeof getApiFolderCapabilitiesPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFolderCreateFolderPhpRouteHandler: RouteHandler<
  typeof postApiFolderCreateFolderPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFolderCreateShareFolderLinkPhpRouteHandler: RouteHandler<
  typeof postApiFolderCreateShareFolderLinkPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFolderDeleteFolderPhpRouteHandler: RouteHandler<
  typeof postApiFolderDeleteFolderPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFolderDeleteShareFolderLinkPhpRouteHandler: RouteHandler<
  typeof postApiFolderDeleteShareFolderLinkPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFolderDownloadSharedFilePhpRouteHandler: RouteHandler<
  typeof getApiFolderDownloadSharedFilePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFolderDownloadSharedFolderPhpRouteHandler: RouteHandler<
  typeof getApiFolderDownloadSharedFolderPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFolderEncryptionJobStartPhpRouteHandler: RouteHandler<
  typeof postApiFolderEncryptionJobStartPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFolderEncryptionJobStatusPhpRouteHandler: RouteHandler<
  typeof getApiFolderEncryptionJobStatusPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFolderEncryptionJobTickPhpRouteHandler: RouteHandler<
  typeof postApiFolderEncryptionJobTickPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFolderEncryptionPlanPhpRouteHandler: RouteHandler<
  typeof getApiFolderEncryptionPlanPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFolderGetFolderColorsPhpRouteHandler: RouteHandler<
  typeof getApiFolderGetFolderColorsPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFolderGetFolderEncryptionPhpRouteHandler: RouteHandler<
  typeof getApiFolderGetFolderEncryptionPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFolderGetFolderListPhpRouteHandler: RouteHandler<
  typeof getApiFolderGetFolderListPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFolderGetShareFolderLinksPhpRouteHandler: RouteHandler<
  typeof getApiFolderGetShareFolderLinksPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFolderIsEmptyPhpRouteHandler: RouteHandler<
  typeof getApiFolderIsEmptyPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFolderListChildrenPhpRouteHandler: RouteHandler<
  typeof getApiFolderListChildrenPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFolderMoveFolderPhpRouteHandler: RouteHandler<
  typeof postApiFolderMoveFolderPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFolderRenameFolderPhpRouteHandler: RouteHandler<
  typeof postApiFolderRenameFolderPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFolderSaveFolderColorPhpRouteHandler: RouteHandler<
  typeof postApiFolderSaveFolderColorPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFolderSetFolderEncryptionPhpRouteHandler: RouteHandler<
  typeof postApiFolderSetFolderEncryptionPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFolderShareFolderPhpRouteHandler: RouteHandler<
  typeof getApiFolderShareFolderPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFolderUploadToSharedFolderPhpRouteHandler: RouteHandler<
  typeof postApiFolderUploadToSharedFolderPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMediaGetProgressPhpRouteHandler: RouteHandler<
  typeof getApiMediaGetProgressPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMediaGetViewedMapPhpRouteHandler: RouteHandler<
  typeof getApiMediaGetViewedMapPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiMediaUpdateProgressPhpRouteHandler: RouteHandler<
  typeof postApiMediaUpdateProgressPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOnlyofficeCallbackPhpRouteHandler: RouteHandler<
  typeof postApiOnlyofficeCallbackPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOnlyofficeConfigPhpRouteHandler: RouteHandler<
  typeof getApiOnlyofficeConfigPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOnlyofficeSignedDownloadPhpRouteHandler: RouteHandler<
  typeof getApiOnlyofficeSignedDownloadPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOnlyofficeStatusPhpRouteHandler: RouteHandler<
  typeof getApiOnlyofficeStatusPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProAuditExportCsvPhpRouteHandler: RouteHandler<
  typeof getApiProAuditExportCsvPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProAuditListPhpRouteHandler: RouteHandler<
  typeof getApiProAuditListPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProDiskUsageChildrenPhpRouteHandler: RouteHandler<
  typeof getApiProDiskUsageChildrenPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProDiskUsageDeleteFilePermanentPhpRouteHandler: RouteHandler<
  typeof postApiProDiskUsageDeleteFilePermanentPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProDiskUsageDeleteFolderRecursivePhpRouteHandler: RouteHandler<
  typeof postApiProDiskUsageDeleteFolderRecursivePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProDiskUsageTopFilesPhpRouteHandler: RouteHandler<
  typeof getApiProDiskUsageTopFilesPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProGroupsListPhpRouteHandler: RouteHandler<
  typeof getApiProGroupsListPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProGroupsSavePhpRouteHandler: RouteHandler<
  typeof postApiProGroupsSavePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProPortalsGetPhpRouteHandler: RouteHandler<
  typeof getApiProPortalsGetPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProPortalsListPhpRouteHandler: RouteHandler<
  typeof getApiProPortalsListPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProPortalsPublicMetaPhpRouteHandler: RouteHandler<
  typeof getApiProPortalsPublicMetaPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProPortalsSavePhpRouteHandler: RouteHandler<
  typeof postApiProPortalsSavePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProPortalsSubmissionsPhpRouteHandler: RouteHandler<
  typeof getApiProPortalsSubmissionsPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProPortalsSubmitFormPhpRouteHandler: RouteHandler<
  typeof postApiProPortalsSubmitFormPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProPortalsUploadLogoPhpRouteHandler: RouteHandler<
  typeof postApiProPortalsUploadLogoPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProSearchQueryPhpRouteHandler: RouteHandler<
  typeof getApiProSearchQueryPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProUploadBrandLogoPhpRouteHandler: RouteHandler<
  typeof postApiProUploadBrandLogoPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProfileChangePasswordPhpRouteHandler: RouteHandler<
  typeof postApiProfileChangePasswordPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProfileGetCurrentUserPhpRouteHandler: RouteHandler<
  typeof getApiProfileGetCurrentUserPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProfileGetUserPermissionsPhpRouteHandler: RouteHandler<
  typeof getApiProfileGetUserPermissionsPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiProfileTotpDisablePhpRouteHandler: RouteHandler<
  typeof putApiProfileTotpDisablePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProfileTotpRecoverPhpRouteHandler: RouteHandler<
  typeof postApiProfileTotpRecoverPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProfileTotpSaveCodePhpRouteHandler: RouteHandler<
  typeof postApiProfileTotpSaveCodePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProfileTotpSetupPhpRouteHandler: RouteHandler<
  typeof getApiProfileTotpSetupPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProfileTotpVerifyPhpRouteHandler: RouteHandler<
  typeof postApiProfileTotpVerifyPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiProfileUpdateUserPanelPhpRouteHandler: RouteHandler<
  typeof putApiProfileUpdateUserPanelPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProfileUploadPicturePhpRouteHandler: RouteHandler<
  typeof postApiProfileUploadPicturePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicSiteConfigPhpRouteHandler: RouteHandler<
  typeof getApiPublicSiteConfigPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadCheckExistingPhpRouteHandler: RouteHandler<
  typeof postApiUploadCheckExistingPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadRemoveChunksPhpRouteHandler: RouteHandler<
  typeof postApiUploadRemoveChunksPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadUploadPhpRouteHandler: RouteHandler<
  typeof postApiUploadUploadPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}
