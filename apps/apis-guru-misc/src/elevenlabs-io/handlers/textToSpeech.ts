import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1TextToSpeechVoiceIdRoute, postV1TextToSpeechVoiceIdStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const textToSpeechHandler = app
  .openapi(postV1TextToSpeechVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToSpeechVoiceIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
