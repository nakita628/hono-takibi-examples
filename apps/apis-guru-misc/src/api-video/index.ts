import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  analyticsHandler,
  authHandler,
  liveStreamsHandler,
  playersHandler,
  uploadHandler,
  uploadTokensHandler,
  videosHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', analyticsHandler)
  .route('/', authHandler)
  .route('/', liveStreamsHandler)
  .route('/', playersHandler)
  .route('/', uploadHandler)
  .route('/', uploadTokensHandler)
  .route('/', videosHandler)
  .route('/', webhooksHandler)

export default app
