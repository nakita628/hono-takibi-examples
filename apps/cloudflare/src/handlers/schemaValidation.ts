import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdSchemaValidationSchemasSchemaIdRoute,
  getZonesZoneIdSchemaValidationSchemasHostsRoute,
  getZonesZoneIdSchemaValidationSchemasRoute,
  getZonesZoneIdSchemaValidationSchemasSchemaIdOperationsRoute,
  getZonesZoneIdSchemaValidationSchemasSchemaIdRoute,
  patchZonesZoneIdSchemaValidationSchemasSchemaIdRoute,
  postZonesZoneIdSchemaValidationSchemasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schemaValidationHandler = app
  .openapi(getZonesZoneIdSchemaValidationSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSchemaValidationSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSchemaValidationSchemasHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdSchemaValidationSchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSchemaValidationSchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSchemaValidationSchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSchemaValidationSchemasSchemaIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
