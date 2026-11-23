import { OpenAPIHono } from '@hono/zod-openapi'
import {
  facetsHandler,
  openSearchDescriptionHandler,
  openSearchHandler,
  suggestHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', facetsHandler)
  .route('/', openSearchHandler)
  .route('/', openSearchDescriptionHandler)
  .route('/', suggestHandler)

export default app
