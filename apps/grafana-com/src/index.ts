import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accesspoliciesHandler,
  instancesHandler,
  orgsHandler,
  orgStackRegionsHandler,
  pluginsHandler,
  pluginsMarketplaceHandler,
  stackRegionsHandler,
  stacksHandler,
  tokensHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', instancesHandler)
  .route('/', orgStackRegionsHandler)
  .route('/', orgsHandler)
  .route('/', pluginsMarketplaceHandler)
  .route('/', pluginsHandler)
  .route('/', stackRegionsHandler)
  .route('/', accesspoliciesHandler)
  .route('/', tokensHandler)
  .route('/', stacksHandler)

export default app
