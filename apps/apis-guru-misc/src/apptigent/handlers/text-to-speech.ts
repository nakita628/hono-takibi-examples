import { OpenAPIHono } from '@hono/zod-openapi'
import { postTextToSpeechRoute } from '../routes'

const app = new OpenAPIHono()

export const textToSpeechHandler = app.openapi(postTextToSpeechRoute, (c) => {
  throw new Error('Not implemented')
})
