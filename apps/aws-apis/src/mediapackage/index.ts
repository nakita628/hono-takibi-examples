import { OpenAPIHono } from '@hono/zod-openapi'
import {
  channelsHandler,
  harvestJobsHandler,
  originEndpointsHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', channelsHandler)
  .route('/', harvestJobsHandler)
  .route('/', originEndpointsHandler)
  .route('/', tagsHandler)

export default app
