import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeletePresetRoute } from '../routes'

const app = new OpenAPIHono()

export const deletePresetHandler = app.openapi(postDeletePresetRoute, (c) => {
  throw new Error('Not implemented')
})
