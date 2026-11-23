import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionsHandler,
  experimentsHandler,
  experimentTemplatesHandler,
  tagsHandler,
  targetResourceTypesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', experimentTemplatesHandler)
  .route('/', actionsHandler)
  .route('/', experimentsHandler)
  .route('/', targetResourceTypesHandler)
  .route('/', tagsHandler)

export default app
