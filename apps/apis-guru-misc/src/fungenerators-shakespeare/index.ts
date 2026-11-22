import { OpenAPIHono } from '@hono/zod-openapi'
import { generationHandler, translationHandler, worksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', generationHandler)
  .route('/', worksHandler)
  .route('/', translationHandler)

export default app
