import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDatasetsNamespaceRepoCommitsRevRoute,
  getApiDatasetsNamespaceRepoCompareCompareRoute,
  getApiDatasetsNamespaceRepoJwtRoute,
  getApiDatasetsNamespaceRepoLeaderboardRoute,
  getApiDatasetsNamespaceRepoLfsFilesRoute,
  getApiDatasetsNamespaceRepoNotebookRevPathRoute,
  getApiDatasetsNamespaceRepoRefsRoute,
  getApiDatasetsNamespaceRepoResourceGroupRoute,
  getApiDatasetsNamespaceRepoScanRoute,
  getApiDatasetsNamespaceRepoTreeRevPathRoute,
  getApiDatasetsNamespaceRepoTreesizeRevPathRoute,
  getApiDatasetsNamespaceRepoUserAccessRequestStatusRoute,
  getApiDatasetsNamespaceRepoXetReadTokenRevRoute,
  getApiDatasetsNamespaceRepoXetWriteTokenRevRoute,
  getApiDatasetsTagsByTypeRoute,
  getApiResolveCacheDatasetsNamespaceRepoRevPathRoute,
  getDatasetsNamespaceRepoResolveRevPathRoute,
  getDatasetsNamespaceRepoUserAccessReportRoute,
  postApiDatasetsNamespaceRepoCommitRevRoute,
  postApiDatasetsNamespaceRepoLfsFilesDuplicateRoute,
  postApiDatasetsNamespaceRepoPathsInfoRevRoute,
  postApiDatasetsNamespaceRepoPreuploadRevRoute,
  postApiDatasetsNamespaceRepoResourceGroupRoute,
  postApiDatasetsNamespaceRepoSuperSquashRevRoute,
  postApiDatasetsNamespaceRepoUserAccessRequestBatchRoute,
  postDatasetsNamespaceRepoAskAccessRoute,
  putApiDatasetsNamespaceRepoSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
  .openapi(getApiDatasetsNamespaceRepoTreesizeRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoLfsFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoLfsFilesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoCommitsRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoCompareCompareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoPathsInfoRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoPreuploadRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoXetWriteTokenRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoXetReadTokenRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoCommitRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoSuperSquashRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDatasetsNamespaceRepoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoTreeRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoNotebookRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoLeaderboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsTagsByTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsNamespaceRepoResolveRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiResolveCacheDatasetsNamespaceRepoRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasetsNamespaceRepoAskAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsNamespaceRepoUserAccessReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoUserAccessRequestStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoUserAccessRequestBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
