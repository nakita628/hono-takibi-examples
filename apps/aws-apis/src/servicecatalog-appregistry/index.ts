import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationsHandler,
  attributeGroupsHandler,
  configurationHandler,
  syncHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applicationsHandler)
  .route('/', attributeGroupsHandler)
  .route('/', configurationHandler)
  .route('/', tagsHandler)
  .route('/', syncHandler)

export default app
