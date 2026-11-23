import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClipHandler,
  getDashStreamingSessionUrlHandler,
  getHlsStreamingSessionUrlHandler,
  getImagesHandler,
  getMediaForFragmentListHandler,
  listFragmentsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', getClipHandler)
  .route('/', getDashStreamingSessionUrlHandler)
  .route('/', getHlsStreamingSessionUrlHandler)
  .route('/', getImagesHandler)
  .route('/', getMediaForFragmentListHandler)
  .route('/', listFragmentsHandler)

export default app
