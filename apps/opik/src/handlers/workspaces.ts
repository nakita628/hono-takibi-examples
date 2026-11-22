import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateWorkspacesConfigurationsRoute,
  getV1PrivateWorkspacesConfigurationsRoute,
  postV1PrivateWorkspacesCostsRoute,
  postV1PrivateWorkspacesCostsSummariesRoute,
  postV1PrivateWorkspacesMetricsRoute,
  postV1PrivateWorkspacesMetricsSpansRoute,
  postV1PrivateWorkspacesMetricsSummariesRoute,
  postV1PrivateWorkspacesTokenUsageNamesRoute,
  putV1PrivateWorkspacesConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(postV1PrivateWorkspacesCostsSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateWorkspacesConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateWorkspacesConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateWorkspacesConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWorkspacesCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWorkspacesMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWorkspacesMetricsSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWorkspacesTokenUsageNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWorkspacesMetricsSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
