import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdSettingsSslAutomaticModeRoute,
  patchZonesZoneIdSettingsSslAutomaticModeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const automaticSSLTLSHandler = app
  .openapi(getZonesZoneIdSettingsSslAutomaticModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSettingsSslAutomaticModeRoute, (c) => {
    throw new Error('Not implemented')
  })
