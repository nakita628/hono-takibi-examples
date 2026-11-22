import { OpenAPIHono } from '@hono/zod-openapi'
import { filesHandler, imagesHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', filesHandler)
  .route('/', imagesHandler)
  .route('/', projectsHandler)

export default app
