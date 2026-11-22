import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdSettingsGoogleTagGatewayConfigRoute,
  putZonesZoneIdSettingsGoogleTagGatewayConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const googleTagGatewayHandler = app
  .openapi(getZonesZoneIdSettingsGoogleTagGatewayConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSettingsGoogleTagGatewayConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
