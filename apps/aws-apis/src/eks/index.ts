import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addonsHandler,
  clusterRegistrationsHandler,
  clustersHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', clustersHandler)
  .route('/', clusterRegistrationsHandler)
  .route('/', addonsHandler)
  .route('/', tagsHandler)

export default app
