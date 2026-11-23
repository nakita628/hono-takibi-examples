import { OpenAPIHono } from '@hono/zod-openapi'
import { postVoiceRoute } from '../routes'

const app = new OpenAPIHono()

export const voiceHandler = app.openapi(postVoiceRoute, (c) => {
  throw new Error('Not implemented')
})
