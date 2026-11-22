import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1VoiceChangerVoiceIdRoute, postV1VoiceChangerVoiceIdStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const voiceChangerHandler = app
  .openapi(postV1VoiceChangerVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoiceChangerVoiceIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
