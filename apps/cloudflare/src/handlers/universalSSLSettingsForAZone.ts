import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdSslUniversalSettingsRoute,
  patchZonesZoneIdSslUniversalSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const universalSSLSettingsForAZoneHandler = app
  .openapi(getZonesZoneIdSslUniversalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSslUniversalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
