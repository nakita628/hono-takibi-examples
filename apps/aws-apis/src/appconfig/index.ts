import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationsHandler,
  deployementstrategiesHandler,
  deploymentstrategiesHandler,
  extensionassociationsHandler,
  extensionsHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applicationsHandler)
  .route('/', deploymentstrategiesHandler)
  .route('/', extensionsHandler)
  .route('/', extensionassociationsHandler)
  .route('/', deployementstrategiesHandler)
  .route('/', tagsHandler)

export default app
