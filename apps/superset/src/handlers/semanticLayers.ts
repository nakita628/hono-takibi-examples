import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SemanticLayerUuidRoute,
  getApiV1SemanticLayerConnectionsIndexRoute,
  getApiV1SemanticLayerIndexRoute,
  getApiV1SemanticLayerTypesRoute,
  getApiV1SemanticLayerUuidRoute,
  postApiV1SemanticLayerIndexRoute,
  postApiV1SemanticLayerSchemaConfigurationRoute,
  postApiV1SemanticLayerUuidClearCacheRoute,
  postApiV1SemanticLayerUuidSchemaRuntimeRoute,
  postApiV1SemanticLayerUuidViewsRoute,
  putApiV1SemanticLayerUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const semanticLayersHandler = app
  .openapi(getApiV1SemanticLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SemanticLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SemanticLayerConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SemanticLayerSchemaConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SemanticLayerTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SemanticLayerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SemanticLayerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SemanticLayerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SemanticLayerUuidClearCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SemanticLayerUuidSchemaRuntimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SemanticLayerUuidViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
