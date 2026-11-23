import { OpenAPIHono } from '@hono/zod-openapi'
import {
  internalHandler,
  profilingGroupsClientTokenHandler,
  profilingGroupsHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', profilingGroupsHandler)
  .route('/', profilingGroupsClientTokenHandler)
  .route('/', internalHandler)
  .route('/', tagsHandler)

export default app
