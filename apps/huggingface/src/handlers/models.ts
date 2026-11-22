import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiModelsNamespaceRepoCommitsRevRoute,
  getApiModelsNamespaceRepoCompareCompareRoute,
  getApiModelsNamespaceRepoJwtRoute,
  getApiModelsNamespaceRepoLfsFilesRoute,
  getApiModelsNamespaceRepoNotebookRevPathRoute,
  getApiModelsNamespaceRepoRefsRoute,
  getApiModelsNamespaceRepoResourceGroupRoute,
  getApiModelsNamespaceRepoSafetensorsMetadataPathRoute,
  getApiModelsNamespaceRepoScanRoute,
  getApiModelsNamespaceRepoTreeRevPathRoute,
  getApiModelsNamespaceRepoTreesizeRevPathRoute,
  getApiModelsNamespaceRepoUserAccessRequestStatusRoute,
  getApiModelsNamespaceRepoXetReadTokenRevRoute,
  getApiModelsNamespaceRepoXetWriteTokenRevRoute,
  getApiModelsTagsByTypeRoute,
  getApiResolveCacheModelsNamespaceRepoRevPathRoute,
  getApiTrendingRoute,
  getNamespaceRepoResolveRevPathRoute,
  getNamespaceRepoUserAccessReportRoute,
  postApiModelsNamespaceRepoCommitRevRoute,
  postApiModelsNamespaceRepoLfsFilesDuplicateRoute,
  postApiModelsNamespaceRepoPathsInfoRevRoute,
  postApiModelsNamespaceRepoPreuploadRevRoute,
  postApiModelsNamespaceRepoResourceGroupRoute,
  postApiModelsNamespaceRepoSuperSquashRevRoute,
  postApiModelsNamespaceRepoUserAccessRequestBatchRoute,
  postNamespaceRepoAskAccessRoute,
  putApiModelsNamespaceRepoSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app
  .openapi(getApiModelsNamespaceRepoTreesizeRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoSafetensorsMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoLfsFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoLfsFilesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoCommitsRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoCompareCompareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoPathsInfoRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoPreuploadRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoXetWriteTokenRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoXetReadTokenRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoCommitRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoSuperSquashRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiModelsNamespaceRepoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoTreeRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoNotebookRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsTagsByTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespaceRepoResolveRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiResolveCacheModelsNamespaceRepoRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespaceRepoAskAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespaceRepoUserAccessReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoUserAccessRequestStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoUserAccessRequestBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
