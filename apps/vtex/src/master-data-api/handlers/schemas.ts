import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDataentitiesDataEntityNameSchemasSchemaNameRoute,
  getApiDataentitiesDataEntityNameSchemasRoute,
  getApiDataentitiesDataEntityNameSchemasSchemaNameRoute,
  putApiDataentitiesDataEntityNameSchemasSchemaNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schemasHandler = app
  .openapi(getApiDataentitiesDataEntityNameSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataentitiesDataEntityNameSchemasSchemaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesDataEntityNameSchemasSchemaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesDataEntityNameSchemasSchemaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
