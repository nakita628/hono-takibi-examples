import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdApiGatewayConfigurationRoute,
  putZonesZoneIdApiGatewayConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiShieldSettingsHandler = app
  .openapi(getZonesZoneIdApiGatewayConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdApiGatewayConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
