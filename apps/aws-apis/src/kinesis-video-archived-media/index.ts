import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClipHandler,
  getDASHStreamingSessionURLHandler,
  getHLSStreamingSessionURLHandler,
  getImagesHandler,
  getMediaForFragmentListHandler,
  listFragmentsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', getClipHandler)
  .route('/', getDASHStreamingSessionURLHandler)
  .route('/', getHLSStreamingSessionURLHandler)
  .route('/', getImagesHandler)
  .route('/', getMediaForFragmentListHandler)
  .route('/', listFragmentsHandler)

export default app
