import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceAppsDeletePathRoute,
  deleteWWorkspaceAppsUDeleteS3FileRoute,
  getAppsHubGetIdRoute,
  getAppsHubGetRawIdRoute,
  getAppsHubListRoute,
  getAppsUEmbedTokenByCustomPathCustomPathRoute,
  getAppsUGuestEntryByCustomPathCustomPathRoute,
  getAppsUPublicAppByCustomPathCustomPathRoute,
  getWWorkspaceAppsCustomPathExistsCustomPathRoute,
  getWWorkspaceAppsEmbedTokenPPathRoute,
  getWWorkspaceAppsExistsPathRoute,
  getWWorkspaceAppsGetDataVSecretWithExtensionRoute,
  getWWorkspaceAppsGetLatestVersionPathRoute,
  getWWorkspaceAppsGetLitePathRoute,
  getWWorkspaceAppsGetPPathRoute,
  getWWorkspaceAppsGetVIdRoute,
  getWWorkspaceAppsHistoryPPathRoute,
  getWWorkspaceAppsListPathsFromWorkspaceRunnableRunnableKindPathRoute,
  getWWorkspaceAppsListRoute,
  getWWorkspaceAppsListSearchRoute,
  getWWorkspaceAppsSecretOfLatestVersionPathRoute,
  getWWorkspaceAppsSecretOfPathRoute,
  getWWorkspaceAppsUDownloadS3ParquetFileAsCsvPathRoute,
  getWWorkspaceAppsUEmbedTokenSecretRoute,
  getWWorkspaceAppsUGuestEntryPathRoute,
  getWWorkspaceAppsULoadCsvPreviewPathRoute,
  getWWorkspaceAppsULoadFileMetadataPathRoute,
  getWWorkspaceAppsULoadFilePreviewPathRoute,
  getWWorkspaceAppsULoadParquetPreviewPathRoute,
  getWWorkspaceAppsULoadTableCountPathRoute,
  getWWorkspaceAppsUPublicAppPathRoute,
  getWWorkspaceAppsUPublicResourcePathRoute,
  postWWorkspaceAppsCreateRawRoute,
  postWWorkspaceAppsCreateRawSourceRoute,
  postWWorkspaceAppsCreateRoute,
  postWWorkspaceAppsHistoryUpdateAIdVVersionRoute,
  postWWorkspaceAppsPreviewSdkTokenRoute,
  postWWorkspaceAppsSignS3ObjectsRoute,
  postWWorkspaceAppsUExecuteComponentPathRoute,
  postWWorkspaceAppsUpdatePathRoute,
  postWWorkspaceAppsUpdateRawPathRoute,
  postWWorkspaceAppsUpdateRawSourcePathRoute,
  postWWorkspaceAppsUUploadS3FilePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appHandler = app
  .openapi(getAppsHubListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsHubGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsHubGetRawIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsUGuestEntryByCustomPathCustomPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsUPublicAppByCustomPathCustomPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsUEmbedTokenByCustomPathCustomPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsGetDataVSecretWithExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsListSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsCreateRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsGetPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsPreviewSdkTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsEmbedTokenPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsGetLitePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsHistoryPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsGetLatestVersionPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsListPathsFromWorkspaceRunnableRunnableKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsHistoryUpdateAIdVVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsUGuestEntryPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsUPublicAppPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsUEmbedTokenSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsUPublicResourcePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsSecretOfPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsSecretOfLatestVersionPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsGetVIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAppsDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsCreateRawSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsUpdateRawSourcePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsUpdateRawPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsCustomPathExistsCustomPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsSignS3ObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsUExecuteComponentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsUUploadS3FilePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAppsUDeleteS3FileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsULoadFileMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsULoadFilePreviewPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsULoadParquetPreviewPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsULoadCsvPreviewPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsULoadTableCountPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsUDownloadS3ParquetFileAsCsvPathRoute, (c) => {
    throw new Error('Not implemented')
  })
