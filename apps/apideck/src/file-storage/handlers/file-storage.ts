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
} from '../routes'

const app = new OpenAPIHono()

export const fileStorageHandler = app
  .openapi(getFileStorageDriveGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageDriveGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileStorageDriveGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageDriveGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFileStorageDriveGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileStorageDrivesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageDrivesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFileStorageDrivesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageFilesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileStorageFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFileStorageFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageFilesIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileStorageFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFileStorageFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageFoldersIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageSharedLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageSharedLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileStorageSharedLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageSharedLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFileStorageSharedLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageUploadSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileStorageUploadSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageUploadSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFileStorageUploadSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageUploadSessionsIdFinishRoute, (c) => {
    throw new Error('Not implemented')
  })
