import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  courseMappingsHandler,
  coursesHandler,
  offeringsHandler,
  orgHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', courseMappingsHandler)
  .route('/', coursesHandler)
  .route('/', offeringsHandler)
  .route('/', orgHandler)
  .route('/', usersHandler)

export default app
