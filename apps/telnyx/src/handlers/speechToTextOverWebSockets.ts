import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpeechToTextTranscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const speechToTextOverWebSocketsHandler = app.openapi(
  getSpeechToTextTranscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
