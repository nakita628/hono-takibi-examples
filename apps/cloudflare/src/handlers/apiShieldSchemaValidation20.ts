import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdApiGatewayUserSchemasSchemaIdRoute,
  getZonesZoneIdApiGatewayOperationsOperationIdSchemaValidationRoute,
  getZonesZoneIdApiGatewaySettingsSchemaValidationRoute,
  getZonesZoneIdApiGatewayUserSchemasHostsRoute,
  getZonesZoneIdApiGatewayUserSchemasRoute,
  getZonesZoneIdApiGatewayUserSchemasSchemaIdOperationsRoute,
  getZonesZoneIdApiGatewayUserSchemasSchemaIdRoute,
  patchZonesZoneIdApiGatewayOperationsSchemaValidationRoute,
  patchZonesZoneIdApiGatewaySettingsSchemaValidationRoute,
  patchZonesZoneIdApiGatewayUserSchemasSchemaIdRoute,
  postZonesZoneIdApiGatewayUserSchemasRoute,
  putZonesZoneIdApiGatewayOperationsOperationIdSchemaValidationRoute,
  putZonesZoneIdApiGatewaySettingsSchemaValidationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiShieldSchemaValidation20Handler = app
  .openapi(patchZonesZoneIdApiGatewayOperationsSchemaValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewayOperationsOperationIdSchemaValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdApiGatewayOperationsOperationIdSchemaValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewaySettingsSchemaValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdApiGatewaySettingsSchemaValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdApiGatewaySettingsSchemaValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewayUserSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdApiGatewayUserSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewayUserSchemasHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdApiGatewayUserSchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewayUserSchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdApiGatewayUserSchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewayUserSchemasSchemaIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
