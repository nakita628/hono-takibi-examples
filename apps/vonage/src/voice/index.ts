import { OpenAPIHono } from '@hono/zod-openapi'
import { callsHandler, playDTMFHandler, playTTSHandler, streamAudioHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', callsHandler)
  .route('/', playDTMFHandler)
  .route('/', streamAudioHandler)
  .route('/', playTTSHandler)

export default app
