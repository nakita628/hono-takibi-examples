import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiResolveCacheSpacesNamespaceRepoRevPathRoute,
  getApiSpacesHardwareRoute,
  getApiSpacesNamespaceRepoCommitsRevRoute,
  getApiSpacesNamespaceRepoCompareCompareRoute,
  getApiSpacesNamespaceRepoJwtRoute,
  getApiSpacesNamespaceRepoLfsFilesRoute,
  getApiSpacesNamespaceRepoNotebookRevPathRoute,
  getApiSpacesNamespaceRepoRefsRoute,
  getApiSpacesNamespaceRepoResourceGroupRoute,
  getApiSpacesNamespaceRepoScanRoute,
  getApiSpacesNamespaceRepoSecretsRoute,
  getApiSpacesNamespaceRepoTreeRevPathRoute,
  getApiSpacesNamespaceRepoTreesizeRevPathRoute,
  getApiSpacesNamespaceRepoVariablesRoute,
  getApiSpacesNamespaceRepoXetReadTokenRevRoute,
  getApiSpacesNamespaceRepoXetWriteTokenRevRoute,
  getApiSpacesTemplatesRoute,
  getApiSpacesZeroGpuQuotaRoute,
  getSpacesNamespaceRepoResolveRevPathRoute,
  postApiSpacesNamespaceRepoCommitRevRoute,
  postApiSpacesNamespaceRepoLfsFilesDuplicateRoute,
  postApiSpacesNamespaceRepoPathsInfoRevRoute,
  postApiSpacesNamespaceRepoPreuploadRevRoute,
  postApiSpacesNamespaceRepoResourceGroupRoute,
  postApiSpacesNamespaceRepoSuperSquashRevRoute,
  putApiSpacesNamespaceRepoSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spacesHandler = app
  .openapi(getApiSpacesNamespaceRepoTreesizeRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoLfsFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesNamespaceRepoLfsFilesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoCommitsRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoCompareCompareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesNamespaceRepoPathsInfoRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesNamespaceRepoPreuploadRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoXetWriteTokenRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoXetReadTokenRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesNamespaceRepoCommitRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesNamespaceRepoSuperSquashRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiSpacesNamespaceRepoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoTreeRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoNotebookRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesHardwareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesZeroGpuQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesNamespaceRepoResolveRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiResolveCacheSpacesNamespaceRepoRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
