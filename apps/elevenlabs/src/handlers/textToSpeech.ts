import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1TextToSpeechVoiceIdRoute,
  postV1TextToSpeechVoiceIdStreamRoute,
  postV1TextToSpeechVoiceIdStreamWithTimestampsRoute,
  postV1TextToSpeechVoiceIdWithTimestampsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const textToSpeechHandler = app
  .openapi(postV1TextToSpeechVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToSpeechVoiceIdWithTimestampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToSpeechVoiceIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToSpeechVoiceIdStreamWithTimestampsRoute, (c) => {
    throw new Error('Not implemented')
  })
