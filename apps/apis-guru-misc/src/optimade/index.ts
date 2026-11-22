import { OpenAPIHono } from '@hono/zod-openapi'
import {
  infoHandler,
  linksHandler,
  referencesHandler,
  structuresHandler,
  versionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', infoHandler)
  .route('/', linksHandler)
  .route('/', referencesHandler)
  .route('/', structuresHandler)
  .route('/', versionsHandler)

export default app
