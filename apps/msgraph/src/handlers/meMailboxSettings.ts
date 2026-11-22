import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeMailboxSettingsRoute, patchMeMailboxSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const meMailboxSettingsHandler = app
  .openapi(getMeMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
