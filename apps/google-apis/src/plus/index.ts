import { OpenAPIHono } from '@hono/zod-openapi'
import { activitiesHandler, commentsHandler, peopleHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', activitiesHandler)
  .route('/', commentsHandler)
  .route('/', peopleHandler)

export default app
