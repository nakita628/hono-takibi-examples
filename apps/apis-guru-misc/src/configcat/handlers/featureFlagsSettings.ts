import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SettingsSettingIdRoute,
  getV1ConfigsConfigIdSettingsRoute,
  getV1SettingsSettingIdRoute,
  patchV1SettingsSettingIdRoute,
  postV1ConfigsConfigIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featureFlagsSettingsHandler = app
  .openapi(getV1ConfigsConfigIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsConfigIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SettingsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SettingsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
