import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionsHandler,
  autocompleteProvidersHandler,
  tasksHandler,
  templatesHandler,
  templatingExtensionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', templatesHandler)
  .route('/', actionsHandler)
  .route('/', tasksHandler)
  .route('/', autocompleteProvidersHandler)
  .route('/', templatingExtensionsHandler)

export default app
