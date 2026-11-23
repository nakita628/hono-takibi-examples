import { OpenAPIHono } from '@hono/zod-openapi'
import {
  listingViolationHandler,
  listingViolationSummaryHandler,
  suppressListingViolationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', listingViolationHandler)
  .route('/', listingViolationSummaryHandler)
  .route('/', suppressListingViolationHandler)

export default app
