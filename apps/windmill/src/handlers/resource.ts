import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceResourcesDeleteBulkRoute,
  deleteWWorkspaceResourcesDeletePathRoute,
  deleteWWorkspaceResourcesHistoryPPathRoute,
  deleteWWorkspaceResourcesTypeDeletePathRoute,
  getWWorkspaceEmbeddingsQueryResourceTypesRoute,
  getWWorkspaceResourcesExistsPathRoute,
  getWWorkspaceResourcesFileResourceTypeToFileExtMapRoute,
  getWWorkspaceResourcesGetPathRoute,
  getWWorkspaceResourcesGetValueInterpolatedPathRoute,
  getWWorkspaceResourcesGetValuePathRoute,
  getWWorkspaceResourcesGitCommitHashPathRoute,
  getWWorkspaceResourcesHistoryPPathRoute,
  getWWorkspaceResourcesHistoryVIdRoute,
  getWWorkspaceResourcesListNamesNameRoute,
  getWWorkspaceResourcesListRoute,
  getWWorkspaceResourcesListSearchRoute,
  getWWorkspaceResourcesMcpToolsPathRoute,
  getWWorkspaceResourcesTypeExistsPathRoute,
  getWWorkspaceResourcesTypeGetPathRoute,
  getWWorkspaceResourcesTypeHubInfoRoute,
  getWWorkspaceResourcesTypeListnamesRoute,
  getWWorkspaceResourcesTypeListRoute,
  getWWorkspaceResourcesTypeResourceCountsRoute,
  postWWorkspaceResourcesCreateRoute,
  postWWorkspaceResourcesHistoryRestoreVIdRoute,
  postWWorkspaceResourcesMcpCallToolPathRoute,
  postWWorkspaceResourcesTypeCreateRoute,
  postWWorkspaceResourcesTypeHubPickNameRoute,
  postWWorkspaceResourcesTypeUpdatePathRoute,
  postWWorkspaceResourcesUpdatePathRoute,
  postWWorkspaceResourcesUpdateValuePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceHandler = app
  .openapi(postWWorkspaceResourcesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceResourcesDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceResourcesDeleteBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesUpdateValuePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesHistoryPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceResourcesHistoryPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesHistoryVIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesHistoryRestoreVIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesGetValueInterpolatedPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesGetValuePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesGitCommitHashPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesListSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesMcpToolsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesMcpCallToolPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesListNamesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesTypeCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesFileResourceTypeToFileExtMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceResourcesTypeDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesTypeUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesTypeGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesTypeExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesTypeListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesTypeListnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesTypeResourceCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesTypeHubInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesTypeHubPickNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceEmbeddingsQueryResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
