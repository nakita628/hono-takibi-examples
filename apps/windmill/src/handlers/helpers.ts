import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceJobHelpersDeleteS3FileRoute,
  getWWorkspaceJobHelpersCheckS3FolderExistsRoute,
  getWWorkspaceJobHelpersDownloadS3FileRoute,
  getWWorkspaceJobHelpersDownloadS3ParquetFileAsCsvRoute,
  getWWorkspaceJobHelpersListGitRepoFilesRoute,
  getWWorkspaceJobHelpersListStoredFilesPagedRoute,
  getWWorkspaceJobHelpersListStoredFilesRoute,
  getWWorkspaceJobHelpersLoadCsvPreviewPathRoute,
  getWWorkspaceJobHelpersLoadFileMetadataRoute,
  getWWorkspaceJobHelpersLoadFilePreviewRoute,
  getWWorkspaceJobHelpersLoadGitRepoFileMetadataRoute,
  getWWorkspaceJobHelpersLoadGitRepoFilePreviewRoute,
  getWWorkspaceJobHelpersLoadParquetPreviewPathRoute,
  getWWorkspaceJobHelpersLoadTableCountPathRoute,
  getWWorkspaceJobHelpersMoveS3FileRoute,
  getWWorkspaceJobHelpersStorageUsageRoute,
  getWWorkspaceJobHelpersTestConnectionRoute,
  getWWorkspaceJobHelpersV2S3ProxyBucketRoute,
  postWWorkspaceJobHelpersDuckdbConnectionSettingsRoute,
  postWWorkspaceJobHelpersPolarsConnectionSettingsRoute,
  postWWorkspaceJobHelpersUploadGitRepoFileToInstanceStorageRoute,
  postWWorkspaceJobHelpersUploadS3FileRoute,
  postWWorkspaceJobHelpersV2DuckdbConnectionSettingsRoute,
  postWWorkspaceJobHelpersV2PolarsConnectionSettingsRoute,
  postWWorkspaceJobHelpersV2S3ResourceInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const helpersHandler = app
  .openapi(postWWorkspaceJobHelpersDuckdbConnectionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersV2DuckdbConnectionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersPolarsConnectionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersV2PolarsConnectionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersV2S3ResourceInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersV2S3ProxyBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersTestConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersStorageUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersListStoredFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersListStoredFilesPagedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadFileMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadFilePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersListGitRepoFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadGitRepoFilePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadGitRepoFileMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersCheckS3FolderExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadParquetPreviewPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadTableCountPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadCsvPreviewPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceJobHelpersDeleteS3FileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersMoveS3FileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersUploadS3FileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersUploadGitRepoFileToInstanceStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersDownloadS3FileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersDownloadS3ParquetFileAsCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
