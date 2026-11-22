import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdIntegrationsIntegrationTypeRoute,
  getApiAtlasV2GroupsGroupIdIntegrationsIntegrationTypeRoute,
  getApiAtlasV2GroupsGroupIdIntegrationsRoute,
  postApiAtlasV2GroupsGroupIdIntegrationsIntegrationTypeRoute,
  putApiAtlasV2GroupsGroupIdIntegrationsIntegrationTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thirdPartyIntegrationsHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdIntegrationsIntegrationTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdIntegrationsIntegrationTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdIntegrationsIntegrationTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAtlasV2GroupsGroupIdIntegrationsIntegrationTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
