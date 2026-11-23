import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendVoiceRoute } from '../routes'

const app = new OpenAPIHono()

export const sendVoiceHandler = app.openapi(postSendVoiceRoute, (c) => {
  throw new Error('Not implemented')
})
