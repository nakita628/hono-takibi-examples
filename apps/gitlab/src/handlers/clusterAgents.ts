import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdClusterAgentsAgentIdRoute,
  deleteApiV4ProjectsIdClusterAgentsAgentIdTokensTokenIdRoute,
  deleteApiV4ProjectsIdClusterAgentsAgentIdUrlConfigurationsUrlConfigurationIdRoute,
  getApiV4ProjectsIdClusterAgentsAgentIdRoute,
  getApiV4ProjectsIdClusterAgentsAgentIdTokensRoute,
  getApiV4ProjectsIdClusterAgentsAgentIdTokensTokenIdRoute,
  getApiV4ProjectsIdClusterAgentsAgentIdUrlConfigurationsRoute,
  getApiV4ProjectsIdClusterAgentsAgentIdUrlConfigurationsUrlConfigurationIdRoute,
  getApiV4ProjectsIdClusterAgentsRoute,
  postApiV4ProjectsIdClusterAgentsAgentIdTokensRoute,
  postApiV4ProjectsIdClusterAgentsAgentIdUrlConfigurationsRoute,
  postApiV4ProjectsIdClusterAgentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clusterAgentsHandler = app
  .openapi(getApiV4ProjectsIdClusterAgentsAgentIdUrlConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdClusterAgentsAgentIdUrlConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdClusterAgentsAgentIdUrlConfigurationsUrlConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV4ProjectsIdClusterAgentsAgentIdUrlConfigurationsUrlConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4ProjectsIdClusterAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdClusterAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdClusterAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdClusterAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdClusterAgentsAgentIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdClusterAgentsAgentIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdClusterAgentsAgentIdTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdClusterAgentsAgentIdTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
