import { OpenAPIHono } from '@hono/zod-openapi'
import {
  directoryAPIHandler,
  insightsAPIHandler,
  playlistAPIHandler,
  podcasterAPIHandler,
  searchAPIHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', directoryAPIHandler)
  .route('/', playlistAPIHandler)
  .route('/', podcasterAPIHandler)
  .route('/', insightsAPIHandler)
  .route('/', searchAPIHandler)

export default app
