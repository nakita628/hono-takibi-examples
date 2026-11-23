import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeSettingsCategoryRoute,
  getMeRoute,
  getMeSettingsRoute,
  postMeDashboardsResetRoute,
  putMeSettingsCategoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeSettingsCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeDashboardsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
