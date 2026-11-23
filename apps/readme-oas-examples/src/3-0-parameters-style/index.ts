import { OpenAPIHono } from '@hono/zod-openapi'
import {
  anythingHandler,
  cookiesFormExplodedHandler,
  cookiesFormNonExplodedHandler,
  cookiesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cookiesHandler)
  .route('/', cookiesFormNonExplodedHandler)
  .route('/', cookiesFormExplodedHandler)
  .route('/', anythingHandler)

export default app
