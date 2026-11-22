import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdSchemaValidationSettingsOperationsOperationIdRoute,
  getZonesZoneIdSchemaValidationSettingsOperationsOperationIdRoute,
  getZonesZoneIdSchemaValidationSettingsOperationsRoute,
  getZonesZoneIdSchemaValidationSettingsRoute,
  patchZonesZoneIdSchemaValidationSettingsOperationsRoute,
  patchZonesZoneIdSchemaValidationSettingsRoute,
  putZonesZoneIdSchemaValidationSettingsOperationsOperationIdRoute,
  putZonesZoneIdSchemaValidationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schemaValidationSettingsHandler = app
  .openapi(getZonesZoneIdSchemaValidationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSchemaValidationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSchemaValidationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSchemaValidationSettingsOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSchemaValidationSettingsOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdSchemaValidationSettingsOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSchemaValidationSettingsOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSchemaValidationSettingsOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
