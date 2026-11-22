import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWWorkspaceHubProjectRoute,
  getWWorkspaceHubProjectsRoute,
  getWWorkspaceHubProjectsSlugExportRoute,
  postWWorkspaceHubAppsRoute,
  postWWorkspaceHubFlowsFlowIdRecordingRoute,
  postWWorkspaceHubFlowsRoute,
  postWWorkspaceHubMigrationsRoute,
  postWWorkspaceHubProjectsSlugDiscardUpdateRoute,
  postWWorkspaceHubProjectsSlugLogoRoute,
  postWWorkspaceHubProjectsSlugPipelineRecordingRoute,
  postWWorkspaceHubProjectsSlugSubmitRoute,
  postWWorkspaceHubProjectsSlugWithdrawRoute,
  postWWorkspaceHubPublishDraftRoute,
  postWWorkspaceHubRawAppsIdRecordingRoute,
  postWWorkspaceHubRawAppsRoute,
  postWWorkspaceHubResourcesRoute,
  postWWorkspaceHubResourceTypesRoute,
  postWWorkspaceHubScriptsAskIdRecordingRoute,
  postWWorkspaceHubScriptsRoute,
  postWWorkspaceHubTriggersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hubPublishHandler = app
  .openapi(postWWorkspaceHubPublishDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubRawAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubRawAppsIdRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubScriptsAskIdRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubFlowsFlowIdRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubProjectsSlugPipelineRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceHubProjectsSlugExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubProjectsSlugLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubProjectsSlugSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubProjectsSlugWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubProjectsSlugDiscardUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceHubProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceHubProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
