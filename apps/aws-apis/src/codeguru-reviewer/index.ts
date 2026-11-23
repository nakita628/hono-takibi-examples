import { OpenAPIHono } from '@hono/zod-openapi'
import {
  associationsHandler,
  codereviewsHandler,
  codereviewsTypeHandler,
  feedbackHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', associationsHandler)
  .route('/', codereviewsHandler)
  .route('/', feedbackHandler)
  .route('/', codereviewsTypeHandler)
  .route('/', tagsHandler)

export default app
