import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiRnsSettingsRoute, postApiRnsSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getApiRnsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
