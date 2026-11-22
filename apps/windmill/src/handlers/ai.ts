import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceAiSharedArtifactsDeleteIdRoute,
  deleteWWorkspaceAiSharedSessionsDeleteIdRoute,
  deleteWWorkspaceAiSharedSessionsOpenedIdRoute,
  getWWorkspaceAiSessionsListRoute,
  getWWorkspaceAiSharedArtifactsGetIdRoute,
  getWWorkspaceAiSharedArtifactsListRoute,
  getWWorkspaceAiSharedArtifactsStatusRoute,
  getWWorkspaceAiSharedSessionsListRoute,
  getWWorkspaceAiSharedSessionsStatusRoute,
  getWWorkspaceAiUsageRoute,
  getWWorkspaceAiUSharedSessionsGetIdRoute,
  postWWorkspaceAiCompleteRoute,
  postWWorkspaceAiSessionsPullRoute,
  postWWorkspaceAiSessionsPushRoute,
  postWWorkspaceAiSessionToolsNameRoute,
  postWWorkspaceAiSharedArtifactsShareRoute,
  postWWorkspaceAiSharedSessionsSetPublicIdRoute,
  postWWorkspaceAiSharedSessionsShareRoute,
  postWWorkspaceAiUsageRoute,
  postWWorkspaceAiWebFetchRoute,
  postWWorkspaceAiWebSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiHandler = app
  .openapi(postWWorkspaceAiCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiWebSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiWebFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiSessionToolsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiSessionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiSessionsPullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiSessionsPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiSharedArtifactsShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiSharedArtifactsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiSharedArtifactsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiSharedArtifactsGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAiSharedArtifactsDeleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiSharedSessionsShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiSharedSessionsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiSharedSessionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiSharedSessionsSetPublicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiUSharedSessionsGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAiSharedSessionsOpenedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAiSharedSessionsDeleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
