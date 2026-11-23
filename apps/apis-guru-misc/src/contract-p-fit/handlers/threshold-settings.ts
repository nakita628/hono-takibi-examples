import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteThresholdSettingsScopeRoute,
  getThresholdSettingsRoute,
  getThresholdSettingsScopeRoute,
  patchThresholdSettingsScopeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thresholdSettingsHandler = app
  .openapi(getThresholdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteThresholdSettingsScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThresholdSettingsScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchThresholdSettingsScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
