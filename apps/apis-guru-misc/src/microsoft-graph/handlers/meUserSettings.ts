import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeSettingsRoute,
  deleteMeSettingsShiftPreferencesRoute,
  getMeSettingsRoute,
  getMeSettingsShiftPreferencesRoute,
  patchMeSettingsRoute,
  patchMeSettingsShiftPreferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meUserSettingsHandler = app
  .openapi(deleteMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsShiftPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsShiftPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSettingsShiftPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
