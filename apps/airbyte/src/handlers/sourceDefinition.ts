import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1SourceDefinitionsCreateCustomRoute,
  postV1SourceDefinitionsDeleteRoute,
  postV1SourceDefinitionsGetForScopeRoute,
  postV1SourceDefinitionsGetForWorkspaceRoute,
  postV1SourceDefinitionsGetRoute,
  postV1SourceDefinitionsGrantDefinitionRoute,
  postV1SourceDefinitionsListEnterpriseSourceStubsRoute,
  postV1SourceDefinitionsListEnterpriseStubsForWorkspaceRoute,
  postV1SourceDefinitionsListForWorkspaceRoute,
  postV1SourceDefinitionsListLatestRoute,
  postV1SourceDefinitionsListPrivateRoute,
  postV1SourceDefinitionsListRoute,
  postV1SourceDefinitionsRevokeDefinitionRoute,
  postV1SourceDefinitionsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourceDefinitionHandler = app
  .openapi(postV1SourceDefinitionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListEnterpriseSourceStubsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListEnterpriseStubsForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsCreateCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsGetForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsGetForScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsGrantDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsRevokeDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
