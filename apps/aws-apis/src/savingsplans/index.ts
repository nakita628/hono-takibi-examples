import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCreateSavingsPlanRoute,
  postDeleteQueuedSavingsPlanRoute,
  postDescribeSavingsPlanRatesRoute,
  postDescribeSavingsPlansOfferingRatesRoute,
  postDescribeSavingsPlansOfferingsRoute,
  postDescribeSavingsPlansRoute,
  postListTagsForResourceRoute,
  postTagResourceRoute,
  postUntagResourceRoute,
} from './routes'
import {
  postCreateSavingsPlanRouteHandler,
  postDeleteQueuedSavingsPlanRouteHandler,
  postDescribeSavingsPlanRatesRouteHandler,
  postDescribeSavingsPlansOfferingRatesRouteHandler,
  postDescribeSavingsPlansOfferingsRouteHandler,
  postDescribeSavingsPlansRouteHandler,
  postListTagsForResourceRouteHandler,
  postTagResourceRouteHandler,
  postUntagResourceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCreateSavingsPlanRoute, postCreateSavingsPlanRouteHandler)
  .openapi(postDeleteQueuedSavingsPlanRoute, postDeleteQueuedSavingsPlanRouteHandler)
  .openapi(postDescribeSavingsPlanRatesRoute, postDescribeSavingsPlanRatesRouteHandler)
  .openapi(postDescribeSavingsPlansRoute, postDescribeSavingsPlansRouteHandler)
  .openapi(
    postDescribeSavingsPlansOfferingRatesRoute,
    postDescribeSavingsPlansOfferingRatesRouteHandler,
  )
  .openapi(postDescribeSavingsPlansOfferingsRoute, postDescribeSavingsPlansOfferingsRouteHandler)
  .openapi(postListTagsForResourceRoute, postListTagsForResourceRouteHandler)
  .openapi(postTagResourceRoute, postTagResourceRouteHandler)
  .openapi(postUntagResourceRoute, postUntagResourceRouteHandler)

export default app
