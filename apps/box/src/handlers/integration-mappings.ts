import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIntegrationMappingsSlackIntegrationMappingIdRoute,
  deleteIntegrationMappingsTeamsIntegrationMappingIdRoute,
  getIntegrationMappingsSlackRoute,
  getIntegrationMappingsTeamsRoute,
  postIntegrationMappingsSlackRoute,
  postIntegrationMappingsTeamsRoute,
  putIntegrationMappingsSlackIntegrationMappingIdRoute,
  putIntegrationMappingsTeamsIntegrationMappingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationMappingsHandler = app
  .openapi(getIntegrationMappingsSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationMappingsSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIntegrationMappingsSlackIntegrationMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIntegrationMappingsSlackIntegrationMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationMappingsTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationMappingsTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIntegrationMappingsTeamsIntegrationMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIntegrationMappingsTeamsIntegrationMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
