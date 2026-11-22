import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMiscRefreshExtensionSettingsRoute,
  postMiscRefreshExtensionSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const miscHandler = app
  .openapi(getMiscRefreshExtensionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMiscRefreshExtensionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
