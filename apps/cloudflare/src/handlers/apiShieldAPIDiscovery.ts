import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdApiGatewayDiscoveryOperationsDiscoveryIdRoute,
  getZonesZoneIdApiGatewayDiscoveryOperationsRoute,
  getZonesZoneIdApiGatewayDiscoveryRoute,
  patchZonesZoneIdApiGatewayDiscoveryOperationsDiscoveryIdRoute,
  patchZonesZoneIdApiGatewayDiscoveryOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiShieldAPIDiscoveryHandler = app
  .openapi(getZonesZoneIdApiGatewayDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewayDiscoveryOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdApiGatewayDiscoveryOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdApiGatewayDiscoveryOperationsDiscoveryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdApiGatewayDiscoveryOperationsDiscoveryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
