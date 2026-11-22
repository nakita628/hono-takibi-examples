import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionAccountSettingsRoute,
  postApiVersionAccountSettingsManagedEnableRoute,
  putApiVersionAccountSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountSettingsHandler = app
  .openapi(getApiVersionAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountSettingsManagedEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
