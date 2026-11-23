import { OpenAPIHono } from '@hono/zod-openapi'
import { cemstHandler, cfmstHandler, hscerHandler, micerHandler, sscerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cemstHandler)
  .route('/', cfmstHandler)
  .route('/', hscerHandler)
  .route('/', micerHandler)
  .route('/', sscerHandler)

export default app
