import { OpenAPIHono } from '@hono/zod-openapi'
import { feedbackHandler, frontendHandler, translateHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', translateHandler)
  .route('/', frontendHandler)
  .route('/', feedbackHandler)

export default app
