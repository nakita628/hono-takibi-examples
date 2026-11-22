import { OpenAPIHono } from '@hono/zod-openapi'
import {
  meHandler,
  projectHandler,
  projectsHandler,
  recentBuildsHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', meHandler)
  .route('/', projectHandler)
  .route('/', projectsHandler)
  .route('/', recentBuildsHandler)
  .route('/', userHandler)

export default app
