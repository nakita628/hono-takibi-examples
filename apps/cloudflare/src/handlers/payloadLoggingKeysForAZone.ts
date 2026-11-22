import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdFirewallPayloadLoggingKeyRoute,
  getZonesZoneIdFirewallPayloadLoggingKeyRoute,
  putZonesZoneIdFirewallPayloadLoggingKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payloadLoggingKeysForAZoneHandler = app
  .openapi(deleteZonesZoneIdFirewallPayloadLoggingKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdFirewallPayloadLoggingKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdFirewallPayloadLoggingKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
