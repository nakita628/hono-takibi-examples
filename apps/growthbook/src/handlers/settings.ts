import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1SettingsRoute, putV1SettingsApprovalsRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getV1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SettingsApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
