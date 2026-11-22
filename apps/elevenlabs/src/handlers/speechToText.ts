import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SpeechToTextTranscriptsTranscriptionIdRoute,
  getV1SpeechToTextTranscriptsTranscriptionIdRoute,
  postV1SpeechToTextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const speechToTextHandler = app
  .openapi(postV1SpeechToTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SpeechToTextTranscriptsTranscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SpeechToTextTranscriptsTranscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
