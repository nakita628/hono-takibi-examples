import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePredictorSettingsScopeRoute,
  getPredictorSettingsRoute,
  getPredictorSettingsScopeRoute,
  patchPredictorSettingsScopeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const predictorSettingsHandler = app
  .openapi(getPredictorSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePredictorSettingsScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPredictorSettingsScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPredictorSettingsScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
