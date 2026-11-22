import { OpenAPIHono } from '@hono/zod-openapi'
import {
  signingJobsHandler,
  signingPlatformsHandler,
  signingProfilesHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', signingProfilesHandler)
  .route('/', signingJobsHandler)
  .route('/', signingPlatformsHandler)
  .route('/', tagsHandler)

export default app
