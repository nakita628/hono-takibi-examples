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
} from './routes'
import {
  deleteApiAdminRemoveUserPhpRouteHandler,
  getApiAdminAclGetGrantsPhpRouteHandler,
  getApiAdminDiskUsageSummaryPhpRouteHandler,
  getApiAdminGetConfigPhpRouteHandler,
  getApiAdminGetUsersPhpRouteHandler,
  getApiAdminOidcDebugInfoPhpRouteHandler,
  getApiAdminReadMetadataPhpRouteHandler,
  getApiAdminVirusLogPhpRouteHandler,
  getApiAuthCheckAuthPhpRouteHandler,
  getApiAuthLoginBasicPhpRouteHandler,
  getApiAuthTokenPhpRouteHandler,
  getApiFileDownloadPhpRouteHandler,
  getApiFileDownloadZipFilePhpRouteHandler,
  getApiFileGetFileListPhpRouteHandler,
  getApiFileGetFileTagPhpRouteHandler,
  getApiFileGetShareLinksPhpRouteHandler,
  getApiFileGetTrashItemsPhpRouteHandler,
  getApiFileSharePhpRouteHandler,
  getApiFileSnippetPhpRouteHandler,
  getApiFileThumbnailPhpRouteHandler,
  getApiFileZipStatusPhpRouteHandler,
  getApiFolderCapabilitiesPhpRouteHandler,
  getApiFolderDownloadSharedFilePhpRouteHandler,
  getApiFolderDownloadSharedFolderPhpRouteHandler,
  getApiFolderEncryptionJobStatusPhpRouteHandler,
  getApiFolderEncryptionPlanPhpRouteHandler,
  getApiFolderGetFolderColorsPhpRouteHandler,
  getApiFolderGetFolderEncryptionPhpRouteHandler,
  getApiFolderGetFolderListPhpRouteHandler,
  getApiFolderGetShareFolderLinksPhpRouteHandler,
  getApiFolderIsEmptyPhpRouteHandler,
  getApiFolderListChildrenPhpRouteHandler,
  getApiFolderShareFolderPhpRouteHandler,
  getApiMediaGetProgressPhpRouteHandler,
  getApiMediaGetViewedMapPhpRouteHandler,
  getApiOnlyofficeConfigPhpRouteHandler,
  getApiOnlyofficeSignedDownloadPhpRouteHandler,
  getApiOnlyofficeStatusPhpRouteHandler,
  getApiProAuditExportCsvPhpRouteHandler,
  getApiProAuditListPhpRouteHandler,
  getApiProDiskUsageChildrenPhpRouteHandler,
  getApiProDiskUsageTopFilesPhpRouteHandler,
  getApiProfileGetCurrentUserPhpRouteHandler,
  getApiProfileGetUserPermissionsPhpRouteHandler,
  getApiProfileTotpSetupPhpRouteHandler,
  getApiProGroupsListPhpRouteHandler,
  getApiProPortalsGetPhpRouteHandler,
  getApiProPortalsListPhpRouteHandler,
  getApiProPortalsPublicMetaPhpRouteHandler,
  getApiProPortalsSubmissionsPhpRouteHandler,
  getApiProSearchQueryPhpRouteHandler,
  getApiPublicSiteConfigPhpRouteHandler,
  postApiAdminAclSaveGrantsPhpRouteHandler,
  postApiAdminAddUserPhpRouteHandler,
  postApiAdminChangeUserPasswordPhpRouteHandler,
  postApiAdminClamavTestPhpRouteHandler,
  postApiAdminDiskUsageDeleteSnapshotPhpRouteHandler,
  postApiAdminDiskUsageTriggerScanPhpRouteHandler,
  postApiAdminDownloadProBundlePhpRouteHandler,
  postApiAdminInstallProBundlePhpRouteHandler,
  postApiAdminOidcTestPhpRouteHandler,
  postApiAdminResumableCleanupPhpRouteHandler,
  postApiAdminSetEncryptionKeyPhpRouteHandler,
  postApiAdminSetLicensePhpRouteHandler,
  postApiAuthAuthPhpRouteHandler,
  postApiAuthLogoutPhpRouteHandler,
  postApiFileCopyFilesPhpRouteHandler,
  postApiFileCreateFilePhpRouteHandler,
  postApiFileCreateShareLinkPhpRouteHandler,
  postApiFileDeleteFilesPhpRouteHandler,
  postApiFileDeleteShareLinkPhpRouteHandler,
  postApiFileDeleteTrashFilesPhpRouteHandler,
  postApiFileDownloadZipPhpRouteHandler,
  postApiFileExtractZipPhpRouteHandler,
  postApiFileMoveFilesPhpRouteHandler,
  postApiFileRestoreFilesPhpRouteHandler,
  postApiFileSaveFileTagPhpRouteHandler,
  postApiFolderCreateFolderPhpRouteHandler,
  postApiFolderCreateShareFolderLinkPhpRouteHandler,
  postApiFolderDeleteFolderPhpRouteHandler,
  postApiFolderDeleteShareFolderLinkPhpRouteHandler,
  postApiFolderEncryptionJobStartPhpRouteHandler,
  postApiFolderEncryptionJobTickPhpRouteHandler,
  postApiFolderMoveFolderPhpRouteHandler,
  postApiFolderRenameFolderPhpRouteHandler,
  postApiFolderSaveFolderColorPhpRouteHandler,
  postApiFolderSetFolderEncryptionPhpRouteHandler,
  postApiFolderUploadToSharedFolderPhpRouteHandler,
  postApiMediaUpdateProgressPhpRouteHandler,
  postApiOnlyofficeCallbackPhpRouteHandler,
  postApiProDiskUsageDeleteFilePermanentPhpRouteHandler,
  postApiProDiskUsageDeleteFolderRecursivePhpRouteHandler,
  postApiProfileChangePasswordPhpRouteHandler,
  postApiProfileTotpRecoverPhpRouteHandler,
  postApiProfileTotpSaveCodePhpRouteHandler,
  postApiProfileTotpVerifyPhpRouteHandler,
  postApiProfileUploadPicturePhpRouteHandler,
  postApiProGroupsSavePhpRouteHandler,
  postApiProPortalsSavePhpRouteHandler,
  postApiProPortalsSubmitFormPhpRouteHandler,
  postApiProPortalsUploadLogoPhpRouteHandler,
  postApiProUploadBrandLogoPhpRouteHandler,
  postApiUploadCheckExistingPhpRouteHandler,
  postApiUploadRemoveChunksPhpRouteHandler,
  postApiUploadUploadPhpRouteHandler,
  putApiAdminUpdateConfigPhpRouteHandler,
  putApiAdminUpdateUserPermissionsPhpRouteHandler,
  putApiFileRenameFilePhpRouteHandler,
  putApiFileSaveFilePhpRouteHandler,
  putApiProfileTotpDisablePhpRouteHandler,
  putApiProfileUpdateUserPanelPhpRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiAdminAclGetGrantsPhpRoute, getApiAdminAclGetGrantsPhpRouteHandler)
  .openapi(postApiAdminAclSaveGrantsPhpRoute, postApiAdminAclSaveGrantsPhpRouteHandler)
  .openapi(postApiAdminAddUserPhpRoute, postApiAdminAddUserPhpRouteHandler)
  .openapi(postApiAdminChangeUserPasswordPhpRoute, postApiAdminChangeUserPasswordPhpRouteHandler)
  .openapi(postApiAdminClamavTestPhpRoute, postApiAdminClamavTestPhpRouteHandler)
  .openapi(
    postApiAdminDiskUsageDeleteSnapshotPhpRoute,
    postApiAdminDiskUsageDeleteSnapshotPhpRouteHandler,
  )
  .openapi(getApiAdminDiskUsageSummaryPhpRoute, getApiAdminDiskUsageSummaryPhpRouteHandler)
  .openapi(
    postApiAdminDiskUsageTriggerScanPhpRoute,
    postApiAdminDiskUsageTriggerScanPhpRouteHandler,
  )
  .openapi(postApiAdminDownloadProBundlePhpRoute, postApiAdminDownloadProBundlePhpRouteHandler)
  .openapi(getApiAdminGetConfigPhpRoute, getApiAdminGetConfigPhpRouteHandler)
  .openapi(getApiAdminGetUsersPhpRoute, getApiAdminGetUsersPhpRouteHandler)
  .openapi(postApiAdminInstallProBundlePhpRoute, postApiAdminInstallProBundlePhpRouteHandler)
  .openapi(getApiAdminOidcDebugInfoPhpRoute, getApiAdminOidcDebugInfoPhpRouteHandler)
  .openapi(postApiAdminOidcTestPhpRoute, postApiAdminOidcTestPhpRouteHandler)
  .openapi(getApiAdminReadMetadataPhpRoute, getApiAdminReadMetadataPhpRouteHandler)
  .openapi(deleteApiAdminRemoveUserPhpRoute, deleteApiAdminRemoveUserPhpRouteHandler)
  .openapi(postApiAdminResumableCleanupPhpRoute, postApiAdminResumableCleanupPhpRouteHandler)
  .openapi(postApiAdminSetEncryptionKeyPhpRoute, postApiAdminSetEncryptionKeyPhpRouteHandler)
  .openapi(postApiAdminSetLicensePhpRoute, postApiAdminSetLicensePhpRouteHandler)
  .openapi(putApiAdminUpdateConfigPhpRoute, putApiAdminUpdateConfigPhpRouteHandler)
  .openapi(
    putApiAdminUpdateUserPermissionsPhpRoute,
    putApiAdminUpdateUserPermissionsPhpRouteHandler,
  )
  .openapi(getApiAdminVirusLogPhpRoute, getApiAdminVirusLogPhpRouteHandler)
  .openapi(postApiAuthAuthPhpRoute, postApiAuthAuthPhpRouteHandler)
  .openapi(getApiAuthCheckAuthPhpRoute, getApiAuthCheckAuthPhpRouteHandler)
  .openapi(getApiAuthLoginBasicPhpRoute, getApiAuthLoginBasicPhpRouteHandler)
  .openapi(postApiAuthLogoutPhpRoute, postApiAuthLogoutPhpRouteHandler)
  .openapi(getApiAuthTokenPhpRoute, getApiAuthTokenPhpRouteHandler)
  .openapi(postApiFileCopyFilesPhpRoute, postApiFileCopyFilesPhpRouteHandler)
  .openapi(postApiFileCreateFilePhpRoute, postApiFileCreateFilePhpRouteHandler)
  .openapi(postApiFileCreateShareLinkPhpRoute, postApiFileCreateShareLinkPhpRouteHandler)
  .openapi(postApiFileDeleteFilesPhpRoute, postApiFileDeleteFilesPhpRouteHandler)
  .openapi(postApiFileDeleteShareLinkPhpRoute, postApiFileDeleteShareLinkPhpRouteHandler)
  .openapi(postApiFileDeleteTrashFilesPhpRoute, postApiFileDeleteTrashFilesPhpRouteHandler)
  .openapi(getApiFileDownloadPhpRoute, getApiFileDownloadPhpRouteHandler)
  .openapi(postApiFileDownloadZipPhpRoute, postApiFileDownloadZipPhpRouteHandler)
  .openapi(getApiFileDownloadZipFilePhpRoute, getApiFileDownloadZipFilePhpRouteHandler)
  .openapi(postApiFileExtractZipPhpRoute, postApiFileExtractZipPhpRouteHandler)
  .openapi(getApiFileGetFileListPhpRoute, getApiFileGetFileListPhpRouteHandler)
  .openapi(getApiFileGetFileTagPhpRoute, getApiFileGetFileTagPhpRouteHandler)
  .openapi(getApiFileGetShareLinksPhpRoute, getApiFileGetShareLinksPhpRouteHandler)
  .openapi(getApiFileGetTrashItemsPhpRoute, getApiFileGetTrashItemsPhpRouteHandler)
  .openapi(postApiFileMoveFilesPhpRoute, postApiFileMoveFilesPhpRouteHandler)
  .openapi(putApiFileRenameFilePhpRoute, putApiFileRenameFilePhpRouteHandler)
  .openapi(postApiFileRestoreFilesPhpRoute, postApiFileRestoreFilesPhpRouteHandler)
  .openapi(putApiFileSaveFilePhpRoute, putApiFileSaveFilePhpRouteHandler)
  .openapi(postApiFileSaveFileTagPhpRoute, postApiFileSaveFileTagPhpRouteHandler)
  .openapi(getApiFileSharePhpRoute, getApiFileSharePhpRouteHandler)
  .openapi(getApiFileSnippetPhpRoute, getApiFileSnippetPhpRouteHandler)
  .openapi(getApiFileThumbnailPhpRoute, getApiFileThumbnailPhpRouteHandler)
  .openapi(getApiFileZipStatusPhpRoute, getApiFileZipStatusPhpRouteHandler)
  .openapi(getApiFolderCapabilitiesPhpRoute, getApiFolderCapabilitiesPhpRouteHandler)
  .openapi(postApiFolderCreateFolderPhpRoute, postApiFolderCreateFolderPhpRouteHandler)
  .openapi(
    postApiFolderCreateShareFolderLinkPhpRoute,
    postApiFolderCreateShareFolderLinkPhpRouteHandler,
  )
  .openapi(postApiFolderDeleteFolderPhpRoute, postApiFolderDeleteFolderPhpRouteHandler)
  .openapi(
    postApiFolderDeleteShareFolderLinkPhpRoute,
    postApiFolderDeleteShareFolderLinkPhpRouteHandler,
  )
  .openapi(getApiFolderDownloadSharedFilePhpRoute, getApiFolderDownloadSharedFilePhpRouteHandler)
  .openapi(
    getApiFolderDownloadSharedFolderPhpRoute,
    getApiFolderDownloadSharedFolderPhpRouteHandler,
  )
  .openapi(postApiFolderEncryptionJobStartPhpRoute, postApiFolderEncryptionJobStartPhpRouteHandler)
  .openapi(getApiFolderEncryptionJobStatusPhpRoute, getApiFolderEncryptionJobStatusPhpRouteHandler)
  .openapi(postApiFolderEncryptionJobTickPhpRoute, postApiFolderEncryptionJobTickPhpRouteHandler)
  .openapi(getApiFolderEncryptionPlanPhpRoute, getApiFolderEncryptionPlanPhpRouteHandler)
  .openapi(getApiFolderGetFolderColorsPhpRoute, getApiFolderGetFolderColorsPhpRouteHandler)
  .openapi(getApiFolderGetFolderEncryptionPhpRoute, getApiFolderGetFolderEncryptionPhpRouteHandler)
  .openapi(getApiFolderGetFolderListPhpRoute, getApiFolderGetFolderListPhpRouteHandler)
  .openapi(getApiFolderGetShareFolderLinksPhpRoute, getApiFolderGetShareFolderLinksPhpRouteHandler)
  .openapi(getApiFolderIsEmptyPhpRoute, getApiFolderIsEmptyPhpRouteHandler)
  .openapi(getApiFolderListChildrenPhpRoute, getApiFolderListChildrenPhpRouteHandler)
  .openapi(postApiFolderMoveFolderPhpRoute, postApiFolderMoveFolderPhpRouteHandler)
  .openapi(postApiFolderRenameFolderPhpRoute, postApiFolderRenameFolderPhpRouteHandler)
  .openapi(postApiFolderSaveFolderColorPhpRoute, postApiFolderSaveFolderColorPhpRouteHandler)
  .openapi(
    postApiFolderSetFolderEncryptionPhpRoute,
    postApiFolderSetFolderEncryptionPhpRouteHandler,
  )
  .openapi(getApiFolderShareFolderPhpRoute, getApiFolderShareFolderPhpRouteHandler)
  .openapi(
    postApiFolderUploadToSharedFolderPhpRoute,
    postApiFolderUploadToSharedFolderPhpRouteHandler,
  )
  .openapi(getApiMediaGetProgressPhpRoute, getApiMediaGetProgressPhpRouteHandler)
  .openapi(getApiMediaGetViewedMapPhpRoute, getApiMediaGetViewedMapPhpRouteHandler)
  .openapi(postApiMediaUpdateProgressPhpRoute, postApiMediaUpdateProgressPhpRouteHandler)
  .openapi(postApiOnlyofficeCallbackPhpRoute, postApiOnlyofficeCallbackPhpRouteHandler)
  .openapi(getApiOnlyofficeConfigPhpRoute, getApiOnlyofficeConfigPhpRouteHandler)
  .openapi(getApiOnlyofficeSignedDownloadPhpRoute, getApiOnlyofficeSignedDownloadPhpRouteHandler)
  .openapi(getApiOnlyofficeStatusPhpRoute, getApiOnlyofficeStatusPhpRouteHandler)
  .openapi(getApiProAuditExportCsvPhpRoute, getApiProAuditExportCsvPhpRouteHandler)
  .openapi(getApiProAuditListPhpRoute, getApiProAuditListPhpRouteHandler)
  .openapi(getApiProDiskUsageChildrenPhpRoute, getApiProDiskUsageChildrenPhpRouteHandler)
  .openapi(
    postApiProDiskUsageDeleteFilePermanentPhpRoute,
    postApiProDiskUsageDeleteFilePermanentPhpRouteHandler,
  )
  .openapi(
    postApiProDiskUsageDeleteFolderRecursivePhpRoute,
    postApiProDiskUsageDeleteFolderRecursivePhpRouteHandler,
  )
  .openapi(getApiProDiskUsageTopFilesPhpRoute, getApiProDiskUsageTopFilesPhpRouteHandler)
  .openapi(getApiProGroupsListPhpRoute, getApiProGroupsListPhpRouteHandler)
  .openapi(postApiProGroupsSavePhpRoute, postApiProGroupsSavePhpRouteHandler)
  .openapi(getApiProPortalsGetPhpRoute, getApiProPortalsGetPhpRouteHandler)
  .openapi(getApiProPortalsListPhpRoute, getApiProPortalsListPhpRouteHandler)
  .openapi(getApiProPortalsPublicMetaPhpRoute, getApiProPortalsPublicMetaPhpRouteHandler)
  .openapi(postApiProPortalsSavePhpRoute, postApiProPortalsSavePhpRouteHandler)
  .openapi(getApiProPortalsSubmissionsPhpRoute, getApiProPortalsSubmissionsPhpRouteHandler)
  .openapi(postApiProPortalsSubmitFormPhpRoute, postApiProPortalsSubmitFormPhpRouteHandler)
  .openapi(postApiProPortalsUploadLogoPhpRoute, postApiProPortalsUploadLogoPhpRouteHandler)
  .openapi(getApiProSearchQueryPhpRoute, getApiProSearchQueryPhpRouteHandler)
  .openapi(postApiProUploadBrandLogoPhpRoute, postApiProUploadBrandLogoPhpRouteHandler)
  .openapi(postApiProfileChangePasswordPhpRoute, postApiProfileChangePasswordPhpRouteHandler)
  .openapi(getApiProfileGetCurrentUserPhpRoute, getApiProfileGetCurrentUserPhpRouteHandler)
  .openapi(getApiProfileGetUserPermissionsPhpRoute, getApiProfileGetUserPermissionsPhpRouteHandler)
  .openapi(putApiProfileTotpDisablePhpRoute, putApiProfileTotpDisablePhpRouteHandler)
  .openapi(postApiProfileTotpRecoverPhpRoute, postApiProfileTotpRecoverPhpRouteHandler)
  .openapi(postApiProfileTotpSaveCodePhpRoute, postApiProfileTotpSaveCodePhpRouteHandler)
  .openapi(getApiProfileTotpSetupPhpRoute, getApiProfileTotpSetupPhpRouteHandler)
  .openapi(postApiProfileTotpVerifyPhpRoute, postApiProfileTotpVerifyPhpRouteHandler)
  .openapi(putApiProfileUpdateUserPanelPhpRoute, putApiProfileUpdateUserPanelPhpRouteHandler)
  .openapi(postApiProfileUploadPicturePhpRoute, postApiProfileUploadPicturePhpRouteHandler)
  .openapi(getApiPublicSiteConfigPhpRoute, getApiPublicSiteConfigPhpRouteHandler)
  .openapi(postApiUploadCheckExistingPhpRoute, postApiUploadCheckExistingPhpRouteHandler)
  .openapi(postApiUploadRemoveChunksPhpRoute, postApiUploadRemoveChunksPhpRouteHandler)
  .openapi(postApiUploadUploadPhpRoute, postApiUploadUploadPhpRouteHandler)

export default app
