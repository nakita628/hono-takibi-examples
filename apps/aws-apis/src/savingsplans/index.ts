import { OpenAPIHono } from '@hono/zod-openapi'
import {
  createSavingsPlanHandler,
  deleteQueuedSavingsPlanHandler,
  describeSavingsPlanRatesHandler,
  describeSavingsPlansHandler,
  describeSavingsPlansOfferingRatesHandler,
  describeSavingsPlansOfferingsHandler,
  listTagsForResourceHandler,
  tagResourceHandler,
  untagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', createSavingsPlanHandler)
  .route('/', deleteQueuedSavingsPlanHandler)
  .route('/', describeSavingsPlanRatesHandler)
  .route('/', describeSavingsPlansHandler)
  .route('/', describeSavingsPlansOfferingRatesHandler)
  .route('/', describeSavingsPlansOfferingsHandler)
  .route('/', listTagsForResourceHandler)
  .route('/', tagResourceHandler)
  .route('/', untagResourceHandler)

export default app
