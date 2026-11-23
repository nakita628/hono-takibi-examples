import { OpenAPIHono } from '@hono/zod-openapi'
import { postSpeechToTextRoute } from '../routes'

const app = new OpenAPIHono()

export const speechToTextHandler = app.openapi(postSpeechToTextRoute, (c) => {
  throw new Error('Not implemented')
})
