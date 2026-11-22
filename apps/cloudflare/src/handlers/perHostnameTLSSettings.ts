import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdHostnamesSettingsSettingIdHostnameRoute,
  getZonesZoneIdHostnamesSettingsSettingIdHostnameRoute,
  getZonesZoneIdHostnamesSettingsSettingIdRoute,
  putZonesZoneIdHostnamesSettingsSettingIdHostnameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const perHostnameTLSSettingsHandler = app
  .openapi(getZonesZoneIdHostnamesSettingsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdHostnamesSettingsSettingIdHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdHostnamesSettingsSettingIdHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdHostnamesSettingsSettingIdHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
