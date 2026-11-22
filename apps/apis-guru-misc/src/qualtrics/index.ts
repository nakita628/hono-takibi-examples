import { OpenAPIHono } from '@hono/zod-openapi'
import {
  directoriesHandler,
  distributionsHandler,
  eventsubscriptionsHandler,
  surveyDefinitionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', directoriesHandler)
  .route('/', distributionsHandler)
  .route('/', eventsubscriptionsHandler)
  .route('/', surveyDefinitionsHandler)

export default app
