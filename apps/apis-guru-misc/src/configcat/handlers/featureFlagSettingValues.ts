import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesRoute,
  getV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute,
  patchV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute,
  putV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featureFlagSettingValuesHandler = app
  .openapi(getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
