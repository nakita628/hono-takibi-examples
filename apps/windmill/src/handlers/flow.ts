import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceFlowsDeletePathRoute,
  getFlowsHubGetIdRoute,
  getFlowsHubListRoute,
  getWWorkspaceFlowsDeploymentStatusPPathRoute,
  getWWorkspaceFlowsExistsPathRoute,
  getWWorkspaceFlowsGetLatestVersionPathRoute,
  getWWorkspaceFlowsGetPathRoute,
  getWWorkspaceFlowsGetTriggersCountPathRoute,
  getWWorkspaceFlowsGetVVersionRoute,
  getWWorkspaceFlowsHistoryPPathRoute,
  getWWorkspaceFlowsListPathsFromWorkspaceRunnableRunnableKindPathRoute,
  getWWorkspaceFlowsListPathsLinkingAgentPathRoute,
  getWWorkspaceFlowsListPathsRoute,
  getWWorkspaceFlowsListRoute,
  getWWorkspaceFlowsListSearchRoute,
  getWWorkspaceFlowsListTokensPathRoute,
  postWWorkspaceFlowsArchivePathRoute,
  postWWorkspaceFlowsCreateRoute,
  postWWorkspaceFlowsHistoryUpdateVVersionRoute,
  postWWorkspaceFlowsToggleWorkspaceErrorHandlerPathRoute,
  postWWorkspaceFlowsUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flowHandler = app
  .openapi(getFlowsHubListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsHubGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsListPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsListSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsHistoryPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsGetLatestVersionPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsListPathsFromWorkspaceRunnableRunnableKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsListPathsLinkingAgentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsGetVVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFlowsHistoryUpdateVVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsDeploymentStatusPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsGetTriggersCountPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsListTokensPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFlowsToggleWorkspaceErrorHandlerPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFlowsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFlowsUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFlowsArchivePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceFlowsDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
