import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendAudioRoute } from '../routes'

const app = new OpenAPIHono()

export const sendAudioHandler = app.openapi(postSendAudioRoute, (c) => {
  throw new Error('Not implemented')
})
