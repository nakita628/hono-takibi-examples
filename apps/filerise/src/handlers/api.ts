import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiAdminAclGetGrantsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminAclSaveGrantsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminAddUserPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminChangeUserPasswordPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminClamavTestPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminDiskUsageDeleteSnapshotPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminDiskUsageSummaryPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminDiskUsageTriggerScanPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminDownloadProBundlePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminGetConfigPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminGetUsersPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminInstallProBundlePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminOidcDebugInfoPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminOidcTestPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminReadMetadataPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminRemoveUserPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminResumableCleanupPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminSetEncryptionKeyPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminSetLicensePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminUpdateConfigPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminUpdateUserPermissionsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminVirusLogPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthAuthPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthCheckAuthPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthLoginBasicPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthLogoutPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthTokenPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileCopyFilesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileCreateFilePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileCreateShareLinkPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileDeleteFilesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileDeleteShareLinkPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileDeleteTrashFilesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileDownloadPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileDownloadZipPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileDownloadZipFilePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileExtractZipPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileGetFileListPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileGetFileTagPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileGetShareLinksPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileGetTrashItemsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileMoveFilesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiFileRenameFilePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileRestoreFilesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiFileSaveFilePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileSaveFileTagPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileSharePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileSnippetPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileThumbnailPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileZipStatusPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderCapabilitiesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderCreateFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderCreateShareFolderLinkPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderDeleteFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderDeleteShareFolderLinkPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderDownloadSharedFilePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderDownloadSharedFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderEncryptionJobStartPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderEncryptionJobStatusPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderEncryptionJobTickPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderEncryptionPlanPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderGetFolderColorsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderGetFolderEncryptionPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderGetFolderListPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderGetShareFolderLinksPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderIsEmptyPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderListChildrenPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderMoveFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderRenameFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderSaveFolderColorPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderSetFolderEncryptionPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderShareFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderUploadToSharedFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMediaGetProgressPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMediaGetViewedMapPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMediaUpdateProgressPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOnlyofficeCallbackPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOnlyofficeConfigPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOnlyofficeSignedDownloadPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOnlyofficeStatusPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProAuditExportCsvPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProAuditListPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProDiskUsageChildrenPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProDiskUsageDeleteFilePermanentPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProDiskUsageDeleteFolderRecursivePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProDiskUsageTopFilesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProGroupsListPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProGroupsSavePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProPortalsGetPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProPortalsListPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProPortalsPublicMetaPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProPortalsSavePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProPortalsSubmissionsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProPortalsSubmitFormPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProPortalsUploadLogoPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProSearchQueryPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProUploadBrandLogoPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProfileChangePasswordPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProfileGetCurrentUserPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProfileGetUserPermissionsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiProfileTotpDisablePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProfileTotpRecoverPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProfileTotpSaveCodePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProfileTotpSetupPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProfileTotpVerifyPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiProfileUpdateUserPanelPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProfileUploadPicturePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicSiteConfigPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadCheckExistingPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadRemoveChunksPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUploadPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
