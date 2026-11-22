import { OpenAPIHono } from '@hono/zod-openapi'
import {
  httptestingHandler,
  pizzaHandler,
  pizzaTextHandler,
  ratingsHandler,
  systemHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', pizzaHandler)
  .route('/', ratingsHandler)
  .route('/', usersHandler)
  .route('/', pizzaTextHandler)
  .route('/', systemHandler)
  .route('/', httptestingHandler)

export default app
