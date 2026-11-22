import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1DestinationDefinitionsCreateCustomRoute,
  postV1DestinationDefinitionsDeleteRoute,
  postV1DestinationDefinitionsGetForScopeRoute,
  postV1DestinationDefinitionsGetForWorkspaceRoute,
  postV1DestinationDefinitionsGetRoute,
  postV1DestinationDefinitionsGrantDefinitionRoute,
  postV1DestinationDefinitionsListEnterpriseStubsForWorkspaceRoute,
  postV1DestinationDefinitionsListForWorkspaceRoute,
  postV1DestinationDefinitionsListLatestRoute,
  postV1DestinationDefinitionsListPrivateRoute,
  postV1DestinationDefinitionsListRoute,
  postV1DestinationDefinitionsRevokeDefinitionRoute,
  postV1DestinationDefinitionsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const destinationDefinitionHandler = app
  .openapi(postV1DestinationDefinitionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListEnterpriseStubsForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsCreateCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsGetForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsGetForScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsGrantDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsRevokeDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
