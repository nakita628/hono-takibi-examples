import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3VoiceRealtimeRoute, postV3VoiceRealtimeRoute } from '../routes'

const app = new OpenAPIHono()

export const voiceAPIHandler = app
  .openapi(postV3VoiceRealtimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VoiceRealtimeRoute, (c) => {
    throw new Error('Not implemented')
  })
