import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdSettingsCsamScannerThirdPartyRoute,
  patchZonesZoneIdSettingsCsamScannerThirdPartyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const csamScannerSettingsHandler = app
  .openapi(getZonesZoneIdSettingsCsamScannerThirdPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSettingsCsamScannerThirdPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
