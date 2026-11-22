import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdatePresetRoute } from '../routes'

const app = new OpenAPIHono()

export const updatePresetHandler = app.openapi(postUpdatePresetRoute, (c) => {
  throw new Error('Not implemented')
})
