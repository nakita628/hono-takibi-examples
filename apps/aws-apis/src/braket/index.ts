import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deviceHandler,
  devicesHandler,
  jobHandler,
  jobsHandler,
  quantumTaskHandler,
  quantumTasksHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', jobHandler)
  .route('/', quantumTaskHandler)
  .route('/', deviceHandler)
  .route('/', tagsHandler)
  .route('/', devicesHandler)
  .route('/', jobsHandler)
  .route('/', quantumTasksHandler)

export default app
