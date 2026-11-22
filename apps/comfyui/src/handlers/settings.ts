import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiSettingsIdRoute,
  getApiSettingsRoute,
  postApiSettingsIdRoute,
  postApiSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getApiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
