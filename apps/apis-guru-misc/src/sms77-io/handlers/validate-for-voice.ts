import { OpenAPIHono } from '@hono/zod-openapi'
import { postValidateForVoiceRoute } from '../routes'

const app = new OpenAPIHono()

export const validateForVoiceHandler = app.openapi(postValidateForVoiceRoute, (c) => {
  throw new Error('Not implemented')
})
