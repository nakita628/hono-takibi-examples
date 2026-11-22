import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSamplingSettingsScopeRoute,
  getSamplingSettingsRoute,
  getSamplingSettingsScopeRoute,
  patchSamplingSettingsScopeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const samplingSettingsHandler = app
  .openapi(getSamplingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSamplingSettingsScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSamplingSettingsScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSamplingSettingsScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
