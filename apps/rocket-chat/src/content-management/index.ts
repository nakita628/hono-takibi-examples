import { OpenAPIHono } from '@hono/zod-openapi'
import {
  assetsHandler,
  customEmojiHandler,
  customSoundsHandler,
  customUserStatusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', customEmojiHandler)
  .route('/', customSoundsHandler)
  .route('/', customUserStatusHandler)
  .route('/', assetsHandler)

export default app
