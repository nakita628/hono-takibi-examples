import { OpenAPIHono } from '@hono/zod-openapi'
import { findEligibleItemsHandler, sendOfferToInterestedBuyersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', findEligibleItemsHandler)
  .route('/', sendOfferToInterestedBuyersHandler)

export default app
