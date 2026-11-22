import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ConnectorBuilderProjectsCapabilitiesRoute,
  postV1ConnectorBuilderProjectsCompleteOauthRoute,
  postV1ConnectorBuilderProjectsContributeCheckRoute,
  postV1ConnectorBuilderProjectsContributeGenerateRoute,
  postV1ConnectorBuilderProjectsCreateRoute,
  postV1ConnectorBuilderProjectsDeleteRoute,
  postV1ConnectorBuilderProjectsForkRoute,
  postV1ConnectorBuilderProjectsFullResolveRoute,
  postV1ConnectorBuilderProjectsGetBaseImageRoute,
  postV1ConnectorBuilderProjectsGetForDefinitionIdRoute,
  postV1ConnectorBuilderProjectsGetOauthConsentUrlRoute,
  postV1ConnectorBuilderProjectsGetWithManifestRoute,
  postV1ConnectorBuilderProjectsListRoute,
  postV1ConnectorBuilderProjectsPublishRoute,
  postV1ConnectorBuilderProjectsReadStreamRoute,
  postV1ConnectorBuilderProjectsResolveRoute,
  postV1ConnectorBuilderProjectsUpdateRoute,
  postV1ConnectorBuilderProjectsUpdateTestingValuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectorBuilderProjectHandler = app
  .openapi(postV1ConnectorBuilderProjectsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsGetBaseImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsGetWithManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsGetForDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsUpdateTestingValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsReadStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsFullResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsContributeCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsContributeGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsGetOauthConsentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorBuilderProjectsCompleteOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
