import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1VoicesVoiceIdSamplesSampleIdRoute,
  getV1VoicesVoiceIdSamplesSampleIdAudioRoute,
} from '../routes'

const app = new OpenAPIHono()

export const samplesHandler = app
  .openapi(deleteV1VoicesVoiceIdSamplesSampleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesVoiceIdSamplesSampleIdAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
