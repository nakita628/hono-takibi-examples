import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  analyticsHandler,
  authenticationHandler,
  captionsHandler,
  chaptersHandler,
  liveHandler,
  playersHandler,
  videos__DelegatedUploadHandler,
  videosHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', analyticsHandler)
  .route('/', authenticationHandler)
  .route('/', liveHandler)
  .route('/', playersHandler)
  .route('/', videos__DelegatedUploadHandler)
  .route('/', videosHandler)
  .route('/', captionsHandler)
  .route('/', chaptersHandler)
  .route('/', webhooksHandler)

export default app
