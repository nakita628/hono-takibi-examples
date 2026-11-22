import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdSettingsOhttpGatewayRoute,
  getZonesZoneIdSettingsOhttpGatewayRoute,
  putZonesZoneIdSettingsOhttpGatewayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ohttpGatewayHandler = app
  .openapi(deleteZonesZoneIdSettingsOhttpGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSettingsOhttpGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSettingsOhttpGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
