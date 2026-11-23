import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFileStorageDriveGroupsIdRoute,
  deleteFileStorageDrivesIdRoute,
  deleteFileStorageFilesIdRoute,
  deleteFileStorageFoldersIdRoute,
  deleteFileStorageSharedLinksIdRoute,
  deleteFileStorageUploadSessionsIdRoute,
  getFileStorageDriveGroupsIdRoute,
  getFileStorageDriveGroupsRoute,
  getFileStorageDrivesIdRoute,
  getFileStorageDrivesRoute,
  getFileStorageFilesIdDownloadRoute,
  getFileStorageFilesIdRoute,
  getFileStorageFilesRoute,
  getFileStorageFoldersIdRoute,
  getFileStorageSharedLinksIdRoute,
  getFileStorageSharedLinksRoute,
  getFileStorageUploadSessionsIdRoute,
  patchFileStorageDriveGroupsIdRoute,
  patchFileStorageDrivesIdRoute,
  patchFileStorageFilesIdRoute,
  patchFileStorageFoldersIdRoute,
  patchFileStorageSharedLinksIdRoute,
  postFileStorageDriveGroupsRoute,
  postFileStorageDrivesRoute,
  postFileStorageFilesRoute,
  postFileStorageFilesSearchRoute,
  postFileStorageFoldersIdCopyRoute,
  postFileStorageFoldersRoute,
  postFileStorageSharedLinksRoute,
  postFileStorageUploadSessionsIdFinishRoute,
  postFileStorageUploadSessionsRoute,
  putFileStorageUploadSessionsIdRoute,
} from './routes'
import {
  deleteFileStorageDriveGroupsIdRouteHandler,
  deleteFileStorageDrivesIdRouteHandler,
  deleteFileStorageFilesIdRouteHandler,
  deleteFileStorageFoldersIdRouteHandler,
  deleteFileStorageSharedLinksIdRouteHandler,
  deleteFileStorageUploadSessionsIdRouteHandler,
  getFileStorageDriveGroupsIdRouteHandler,
  getFileStorageDriveGroupsRouteHandler,
  getFileStorageDrivesIdRouteHandler,
  getFileStorageDrivesRouteHandler,
  getFileStorageFilesIdDownloadRouteHandler,
  getFileStorageFilesIdRouteHandler,
  getFileStorageFilesRouteHandler,
  getFileStorageFoldersIdRouteHandler,
  getFileStorageSharedLinksIdRouteHandler,
  getFileStorageSharedLinksRouteHandler,
  getFileStorageUploadSessionsIdRouteHandler,
  patchFileStorageDriveGroupsIdRouteHandler,
  patchFileStorageDrivesIdRouteHandler,
  patchFileStorageFilesIdRouteHandler,
  patchFileStorageFoldersIdRouteHandler,
  patchFileStorageSharedLinksIdRouteHandler,
  postFileStorageDriveGroupsRouteHandler,
  postFileStorageDrivesRouteHandler,
  postFileStorageFilesRouteHandler,
  postFileStorageFilesSearchRouteHandler,
  postFileStorageFoldersIdCopyRouteHandler,
  postFileStorageFoldersRouteHandler,
  postFileStorageSharedLinksRouteHandler,
  postFileStorageUploadSessionsIdFinishRouteHandler,
  postFileStorageUploadSessionsRouteHandler,
  putFileStorageUploadSessionsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFileStorageDriveGroupsRoute, getFileStorageDriveGroupsRouteHandler)
  .openapi(postFileStorageDriveGroupsRoute, postFileStorageDriveGroupsRouteHandler)
  .openapi(deleteFileStorageDriveGroupsIdRoute, deleteFileStorageDriveGroupsIdRouteHandler)
  .openapi(getFileStorageDriveGroupsIdRoute, getFileStorageDriveGroupsIdRouteHandler)
  .openapi(patchFileStorageDriveGroupsIdRoute, patchFileStorageDriveGroupsIdRouteHandler)
  .openapi(getFileStorageDrivesRoute, getFileStorageDrivesRouteHandler)
  .openapi(postFileStorageDrivesRoute, postFileStorageDrivesRouteHandler)
  .openapi(deleteFileStorageDrivesIdRoute, deleteFileStorageDrivesIdRouteHandler)
  .openapi(getFileStorageDrivesIdRoute, getFileStorageDrivesIdRouteHandler)
  .openapi(patchFileStorageDrivesIdRoute, patchFileStorageDrivesIdRouteHandler)
  .openapi(getFileStorageFilesRoute, getFileStorageFilesRouteHandler)
  .openapi(postFileStorageFilesRoute, postFileStorageFilesRouteHandler)
  .openapi(postFileStorageFilesSearchRoute, postFileStorageFilesSearchRouteHandler)
  .openapi(deleteFileStorageFilesIdRoute, deleteFileStorageFilesIdRouteHandler)
  .openapi(getFileStorageFilesIdRoute, getFileStorageFilesIdRouteHandler)
  .openapi(patchFileStorageFilesIdRoute, patchFileStorageFilesIdRouteHandler)
  .openapi(getFileStorageFilesIdDownloadRoute, getFileStorageFilesIdDownloadRouteHandler)
  .openapi(postFileStorageFoldersRoute, postFileStorageFoldersRouteHandler)
  .openapi(deleteFileStorageFoldersIdRoute, deleteFileStorageFoldersIdRouteHandler)
  .openapi(getFileStorageFoldersIdRoute, getFileStorageFoldersIdRouteHandler)
  .openapi(patchFileStorageFoldersIdRoute, patchFileStorageFoldersIdRouteHandler)
  .openapi(postFileStorageFoldersIdCopyRoute, postFileStorageFoldersIdCopyRouteHandler)
  .openapi(getFileStorageSharedLinksRoute, getFileStorageSharedLinksRouteHandler)
  .openapi(postFileStorageSharedLinksRoute, postFileStorageSharedLinksRouteHandler)
  .openapi(deleteFileStorageSharedLinksIdRoute, deleteFileStorageSharedLinksIdRouteHandler)
  .openapi(getFileStorageSharedLinksIdRoute, getFileStorageSharedLinksIdRouteHandler)
  .openapi(patchFileStorageSharedLinksIdRoute, patchFileStorageSharedLinksIdRouteHandler)
  .openapi(postFileStorageUploadSessionsRoute, postFileStorageUploadSessionsRouteHandler)
  .openapi(deleteFileStorageUploadSessionsIdRoute, deleteFileStorageUploadSessionsIdRouteHandler)
  .openapi(getFileStorageUploadSessionsIdRoute, getFileStorageUploadSessionsIdRouteHandler)
  .openapi(putFileStorageUploadSessionsIdRoute, putFileStorageUploadSessionsIdRouteHandler)
  .openapi(
    postFileStorageUploadSessionsIdFinishRoute,
    postFileStorageUploadSessionsIdFinishRouteHandler,
  )

export default app
