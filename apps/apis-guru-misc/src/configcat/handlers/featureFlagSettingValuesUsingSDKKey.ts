import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1SettingsSettingKeyOrIdValueRoute,
  patchV1SettingsSettingKeyOrIdValueRoute,
  putV1SettingsSettingKeyOrIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featureFlagSettingValuesUsingSDKKeyHandler = app
  .openapi(getV1SettingsSettingKeyOrIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SettingsSettingKeyOrIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SettingsSettingKeyOrIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
