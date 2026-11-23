import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBookingAvailabilityDatesRoute,
  getBookingHotelsRoute,
  getBookingMybookingsRoute,
  getBookingPastbookingRoute,
  getBookingsBookingReferenceCancelQuoteRoute,
  getBookingsCancelReasonsRoute,
  getBookingVoucherRoute,
  getHealthCheckRoute,
  getProductPhotosRoute,
  getProductReviewsRoute,
  getProductRoute,
  getTaxonomyCategoriesRoute,
  getTaxonomyDestinationsRoute,
  postAvailableProductsRoute,
  postBookingAvailabilityRoute,
  postBookingAvailabilityTourgradesPricingmatrixRoute,
  postBookingAvailabilityTourgradesRoute,
  postBookingBookRoute,
  postBookingCalculatepriceRoute,
  postBookingPricingmatrixRoute,
  postBookingsBookingReferenceCancelRoute,
  postBookingStatusItemsRoute,
  postBookingStatusRoute,
  postMerchantCancellationRoute,
  postSearchFreetextRoute,
  postSearchProductsCodesRoute,
  postSearchProductsRoute,
  postTaxonomyAttractionsRoute,
} from './routes'
import {
  getBookingAvailabilityDatesRouteHandler,
  getBookingHotelsRouteHandler,
  getBookingMybookingsRouteHandler,
  getBookingPastbookingRouteHandler,
  getBookingsBookingReferenceCancelQuoteRouteHandler,
  getBookingsCancelReasonsRouteHandler,
  getBookingVoucherRouteHandler,
  getHealthCheckRouteHandler,
  getProductPhotosRouteHandler,
  getProductReviewsRouteHandler,
  getProductRouteHandler,
  getTaxonomyCategoriesRouteHandler,
  getTaxonomyDestinationsRouteHandler,
  postAvailableProductsRouteHandler,
  postBookingAvailabilityRouteHandler,
  postBookingAvailabilityTourgradesPricingmatrixRouteHandler,
  postBookingAvailabilityTourgradesRouteHandler,
  postBookingBookRouteHandler,
  postBookingCalculatepriceRouteHandler,
  postBookingPricingmatrixRouteHandler,
  postBookingsBookingReferenceCancelRouteHandler,
  postBookingStatusItemsRouteHandler,
  postBookingStatusRouteHandler,
  postMerchantCancellationRouteHandler,
  postSearchFreetextRouteHandler,
  postSearchProductsCodesRouteHandler,
  postSearchProductsRouteHandler,
  postTaxonomyAttractionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAvailableProductsRoute, postAvailableProductsRouteHandler)
  .openapi(postBookingAvailabilityRoute, postBookingAvailabilityRouteHandler)
  .openapi(getBookingAvailabilityDatesRoute, getBookingAvailabilityDatesRouteHandler)
  .openapi(postBookingAvailabilityTourgradesRoute, postBookingAvailabilityTourgradesRouteHandler)
  .openapi(
    postBookingAvailabilityTourgradesPricingmatrixRoute,
    postBookingAvailabilityTourgradesPricingmatrixRouteHandler,
  )
  .openapi(postBookingBookRoute, postBookingBookRouteHandler)
  .openapi(postBookingCalculatepriceRoute, postBookingCalculatepriceRouteHandler)
  .openapi(getBookingHotelsRoute, getBookingHotelsRouteHandler)
  .openapi(getBookingMybookingsRoute, getBookingMybookingsRouteHandler)
  .openapi(getBookingPastbookingRoute, getBookingPastbookingRouteHandler)
  .openapi(postBookingPricingmatrixRoute, postBookingPricingmatrixRouteHandler)
  .openapi(postBookingStatusRoute, postBookingStatusRouteHandler)
  .openapi(postBookingStatusItemsRoute, postBookingStatusItemsRouteHandler)
  .openapi(getBookingVoucherRoute, getBookingVoucherRouteHandler)
  .openapi(getBookingsCancelReasonsRoute, getBookingsCancelReasonsRouteHandler)
  .openapi(postBookingsBookingReferenceCancelRoute, postBookingsBookingReferenceCancelRouteHandler)
  .openapi(
    getBookingsBookingReferenceCancelQuoteRoute,
    getBookingsBookingReferenceCancelQuoteRouteHandler,
  )
  .openapi(getHealthCheckRoute, getHealthCheckRouteHandler)
  .openapi(postMerchantCancellationRoute, postMerchantCancellationRouteHandler)
  .openapi(getProductRoute, getProductRouteHandler)
  .openapi(getProductPhotosRoute, getProductPhotosRouteHandler)
  .openapi(getProductReviewsRoute, getProductReviewsRouteHandler)
  .openapi(postSearchFreetextRoute, postSearchFreetextRouteHandler)
  .openapi(postSearchProductsRoute, postSearchProductsRouteHandler)
  .openapi(postSearchProductsCodesRoute, postSearchProductsCodesRouteHandler)
  .openapi(postTaxonomyAttractionsRoute, postTaxonomyAttractionsRouteHandler)
  .openapi(getTaxonomyCategoriesRoute, getTaxonomyCategoriesRouteHandler)
  .openapi(getTaxonomyDestinationsRoute, getTaxonomyDestinationsRouteHandler)

export default app
