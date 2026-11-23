import { OpenAPIHono } from '@hono/zod-openapi'
import { getGlobalSettingsRoute, putGlobalSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const globalSettingsHandler = app
  .openapi(getGlobalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGlobalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
