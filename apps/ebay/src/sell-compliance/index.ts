import { OpenAPIHono } from '@hono/zod-openapi'
import { listingViolationHandler, listingViolationSummaryHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', listingViolationHandler)
  .route('/', listingViolationSummaryHandler)

export default app
