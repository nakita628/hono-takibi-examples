import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SettingsRoute, patchApiV1SettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const serverSettingsHandler = app
  .openapi(getApiV1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
