import { OpenAPIHono } from '@hono/zod-openapi'
import { postAddPresetRoute } from '../routes'

const app = new OpenAPIHono()

export const addPresetHandler = app.openapi(postAddPresetRoute, (c) => {
  throw new Error('Not implemented')
})
