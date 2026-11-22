import { OpenAPIHono } from '@hono/zod-openapi'
import {
  CreateSavingsPlanHandler,
  DeleteQueuedSavingsPlanHandler,
  DescribeSavingsPlanRatesHandler,
  DescribeSavingsPlansHandler,
  DescribeSavingsPlansOfferingRatesHandler,
  DescribeSavingsPlansOfferingsHandler,
  ListTagsForResourceHandler,
  TagResourceHandler,
  UntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', CreateSavingsPlanHandler)
  .route('/', DeleteQueuedSavingsPlanHandler)
  .route('/', DescribeSavingsPlanRatesHandler)
  .route('/', DescribeSavingsPlansHandler)
  .route('/', DescribeSavingsPlansOfferingRatesHandler)
  .route('/', DescribeSavingsPlansOfferingsHandler)
  .route('/', ListTagsForResourceHandler)
  .route('/', TagResourceHandler)
  .route('/', UntagResourceHandler)

export default app
