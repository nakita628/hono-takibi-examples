import { OpenAPIHono } from '@hono/zod-openapi'
import {
  datasetsHandler,
  jobsHandler,
  profileJobsHandler,
  projectsHandler,
  recipeJobsHandler,
  recipesHandler,
  recipeVersionsNameHandler,
  rulesetsHandler,
  schedulesHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', recipesHandler)
  .route('/', datasetsHandler)
  .route('/', profileJobsHandler)
  .route('/', projectsHandler)
  .route('/', recipeJobsHandler)
  .route('/', rulesetsHandler)
  .route('/', schedulesHandler)
  .route('/', jobsHandler)
  .route('/', recipeVersionsNameHandler)
  .route('/', tagsHandler)

export default app
