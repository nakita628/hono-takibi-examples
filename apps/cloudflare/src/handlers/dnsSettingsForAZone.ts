import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdDnsSettingsRoute, patchZonesZoneIdDnsSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const dnsSettingsForAZoneHandler = app
  .openapi(getZonesZoneIdDnsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdDnsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
