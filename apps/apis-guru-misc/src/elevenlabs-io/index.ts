import { OpenAPIHono } from '@hono/zod-openapi'
import {
  historyHandler,
  samplesHandler,
  textToSpeechHandler,
  userHandler,
  voicesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', historyHandler)
  .route('/', textToSpeechHandler)
  .route('/', userHandler)
  .route('/', voicesHandler)
  .route('/', samplesHandler)

export default app
