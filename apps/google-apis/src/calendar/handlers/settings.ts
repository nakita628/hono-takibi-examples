import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersMeSettingsRoute,
  getUsersMeSettingsSettingRoute,
  postUsersMeSettingsWatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getUsersMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeSettingsWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeSettingsSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
