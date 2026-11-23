import { OpenAPIHono } from '@hono/zod-openapi'
import { postAudioTranscriptionsRoute, postAudioTranslationsRoute } from '../routes'

const app = new OpenAPIHono()

export const audioHandler = app
  .openapi(postAudioTranscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAudioTranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
