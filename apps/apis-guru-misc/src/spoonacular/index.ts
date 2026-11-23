import { OpenAPIHono } from '@hono/zod-openapi'
import { foodHandler, mealplannerHandler, recipesHandler, usersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', foodHandler)
  .route('/', mealplannerHandler)
  .route('/', recipesHandler)
  .route('/', usersHandler)

export default app
