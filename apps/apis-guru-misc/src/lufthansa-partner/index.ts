import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBaggageBaggagetripandcontactSearchIDRoute,
  getOffersFaresAllfaresRoute,
  getOffersFaresBestfaresRoute,
  getOffersFaresDeeplinkFfpRoute,
  getOffersFaresDeeplinkItcoRoute,
  getOffersFaresDeeplinkRoute,
  getOffersFaresFaresRoute,
  getOffersFaresLowestfaresRoute,
  getOffersFaresSubscriptionsRoute,
  getOffersOndRouteOriginDestinationRoute,
  getOffersOndStatusRoute,
  getOffersOndTopRoute,
  getOrdersOrdersOrderIDNameRoute,
  getPromotionsPriceoffersFlightsOndOriginDestinationRoute,
  getReferencesSeatdetailsAircraftCodeCabinCodeRoute,
  putPreflightAutocheckinTicketnumberRoute,
} from './routes'
import {
  getBaggageBaggagetripandcontactSearchIDRouteHandler,
  getOffersFaresAllfaresRouteHandler,
  getOffersFaresBestfaresRouteHandler,
  getOffersFaresDeeplinkFfpRouteHandler,
  getOffersFaresDeeplinkItcoRouteHandler,
  getOffersFaresDeeplinkRouteHandler,
  getOffersFaresFaresRouteHandler,
  getOffersFaresLowestfaresRouteHandler,
  getOffersFaresSubscriptionsRouteHandler,
  getOffersOndRouteOriginDestinationRouteHandler,
  getOffersOndStatusRouteHandler,
  getOffersOndTopRouteHandler,
  getOrdersOrdersOrderIDNameRouteHandler,
  getPromotionsPriceoffersFlightsOndOriginDestinationRouteHandler,
  getReferencesSeatdetailsAircraftCodeCabinCodeRouteHandler,
  putPreflightAutocheckinTicketnumberRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getBaggageBaggagetripandcontactSearchIDRoute,
    getBaggageBaggagetripandcontactSearchIDRouteHandler,
  )
  .openapi(getOffersFaresAllfaresRoute, getOffersFaresAllfaresRouteHandler)
  .openapi(getOffersFaresBestfaresRoute, getOffersFaresBestfaresRouteHandler)
  .openapi(getOffersFaresDeeplinkRoute, getOffersFaresDeeplinkRouteHandler)
  .openapi(getOffersFaresDeeplinkFfpRoute, getOffersFaresDeeplinkFfpRouteHandler)
  .openapi(getOffersFaresDeeplinkItcoRoute, getOffersFaresDeeplinkItcoRouteHandler)
  .openapi(getOffersFaresFaresRoute, getOffersFaresFaresRouteHandler)
  .openapi(getOffersFaresLowestfaresRoute, getOffersFaresLowestfaresRouteHandler)
  .openapi(getOffersFaresSubscriptionsRoute, getOffersFaresSubscriptionsRouteHandler)
  .openapi(getOffersOndRouteOriginDestinationRoute, getOffersOndRouteOriginDestinationRouteHandler)
  .openapi(getOffersOndStatusRoute, getOffersOndStatusRouteHandler)
  .openapi(getOffersOndTopRoute, getOffersOndTopRouteHandler)
  .openapi(getOrdersOrdersOrderIDNameRoute, getOrdersOrdersOrderIDNameRouteHandler)
  .openapi(
    putPreflightAutocheckinTicketnumberRoute,
    putPreflightAutocheckinTicketnumberRouteHandler,
  )
  .openapi(
    getPromotionsPriceoffersFlightsOndOriginDestinationRoute,
    getPromotionsPriceoffersFlightsOndOriginDestinationRouteHandler,
  )
  .openapi(
    getReferencesSeatdetailsAircraftCodeCabinCodeRoute,
    getReferencesSeatdetailsAircraftCodeCabinCodeRouteHandler,
  )

export default app
