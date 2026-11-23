import { OpenAPIHono } from '@hono/zod-openapi'
import { postAudioQueryFromPresetRoute } from '../routes'

const app = new OpenAPIHono()

export const audioQueryFromPresetHandler = app.openapi(postAudioQueryFromPresetRoute, (c) => {
  throw new Error('Not implemented')
})
