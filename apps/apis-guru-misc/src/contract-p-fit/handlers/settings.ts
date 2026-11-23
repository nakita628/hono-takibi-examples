import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSettingsDashboardRoute,
  getSettingsReviewRoute,
  patchSettingsDashboardRoute,
  patchSettingsReviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getSettingsDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
