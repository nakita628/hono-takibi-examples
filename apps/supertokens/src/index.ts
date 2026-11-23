import { OpenAPIHono } from '@hono/zod-openapi'
import { appidAppIdHandler, configHandler, recipeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appidAppIdHandler)
  .route('/', recipeHandler)
  .route('/', configHandler)

export default app
