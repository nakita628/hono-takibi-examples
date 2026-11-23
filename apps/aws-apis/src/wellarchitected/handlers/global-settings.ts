import { OpenAPIHono } from '@hono/zod-openapi'
import { patchGlobalSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const globalSettingsHandler = app.openapi(patchGlobalSettingsRoute, (c) => {
  throw new Error('Not implemented')
})
