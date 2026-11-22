import { OpenAPIHono } from '@hono/zod-openapi'
import {
  photoHandler,
  photoSequenceHandler,
  photoSequencesHandler,
  photosHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', photoHandler)
  .route('/', photoSequenceHandler)
  .route('/', photoSequencesHandler)
  .route('/', photosHandler)

export default app
