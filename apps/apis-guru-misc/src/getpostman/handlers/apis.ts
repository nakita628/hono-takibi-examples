import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisApiIdRoute,
  deleteApisApiIdVersionsApiVersionIdRoute,
  getApisApiIdRoute,
  getApisApiIdVersionsApiVersionIdContracttestRoute,
  getApisApiIdVersionsApiVersionIdDocumentationRoute,
  getApisApiIdVersionsApiVersionIdEnvironmentRoute,
  getApisApiIdVersionsApiVersionIdIntegrationtestRoute,
  getApisApiIdVersionsApiVersionIdMonitorRoute,
  getApisApiIdVersionsApiVersionIdRelationsRoute,
  getApisApiIdVersionsApiVersionIdRoute,
  getApisApiIdVersionsApiVersionIdSchemasSchemaIdRoute,
  getApisApiIdVersionsApiVersionIdTestsuiteRoute,
  getApisApiIdVersionsRoute,
  getApisRoute,
  postApisApiIdVersionsApiVersionIdRelationsRoute,
  postApisApiIdVersionsApiVersionIdSchemasRoute,
  postApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsRoute,
  postApisApiIdVersionsRoute,
  postApisRoute,
  putApisApiIdRoute,
  putApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaRoute,
  putApisApiIdVersionsApiVersionIdRoute,
  putApisApiIdVersionsApiVersionIdSchemasSchemaIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apisHandler = app
  .openapi(getApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisApiIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisApiIdVersionsApiVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiIdVersionsApiVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisApiIdVersionsApiVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiIdVersionsApiVersionIdContracttestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiIdVersionsApiVersionIdDocumentationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiIdVersionsApiVersionIdEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiIdVersionsApiVersionIdIntegrationtestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiIdVersionsApiVersionIdMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiIdVersionsApiVersionIdRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisApiIdVersionsApiVersionIdRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisApiIdVersionsApiVersionIdSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiIdVersionsApiVersionIdSchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisApiIdVersionsApiVersionIdSchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiIdVersionsApiVersionIdTestsuiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
