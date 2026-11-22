import { OpenAPIHono } from '@hono/zod-openapi'
import { postAiAudioTranscriptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const audioHandler = app.openapi(postAiAudioTranscriptionsRoute, (c) => {
  throw new Error('Not implemented')
})
