import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCargoGetRouteOriginDestinationFromDateProductCodeRoute,
  getCargoShipmentTrackingAWBPrefixAWBNumberRoute,
  getOffersLoungesLocationRoute,
  getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassRoute,
  getOperationsFlightstatusArrivalsAirportCodeFromDateTimeRoute,
  getOperationsFlightstatusDeparturesAirportCodeFromDateTimeRoute,
  getOperationsFlightstatusFlightNumberDateRoute,
  getOperationsFlightstatusRouteOriginDestinationDateRoute,
  getOperationsSchedulesOriginDestinationFromDateTimeRoute,
  getReferencesAircraftAircraftCodeRoute,
  getReferencesAirlinesAirlineCodeRoute,
  getReferencesAirportsAirportCodeRoute,
  getReferencesAirportsNearestLatitudeLongitudeRoute,
  getReferencesCitiesCityCodeRoute,
  getReferencesCountriesCountryCodeRoute,
} from './routes'
import {
  getCargoGetRouteOriginDestinationFromDateProductCodeRouteHandler,
  getCargoShipmentTrackingAWBPrefixAWBNumberRouteHandler,
  getOffersLoungesLocationRouteHandler,
  getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassRouteHandler,
  getOperationsFlightstatusArrivalsAirportCodeFromDateTimeRouteHandler,
  getOperationsFlightstatusDeparturesAirportCodeFromDateTimeRouteHandler,
  getOperationsFlightstatusFlightNumberDateRouteHandler,
  getOperationsFlightstatusRouteOriginDestinationDateRouteHandler,
  getOperationsSchedulesOriginDestinationFromDateTimeRouteHandler,
  getReferencesAircraftAircraftCodeRouteHandler,
  getReferencesAirlinesAirlineCodeRouteHandler,
  getReferencesAirportsAirportCodeRouteHandler,
  getReferencesAirportsNearestLatitudeLongitudeRouteHandler,
  getReferencesCitiesCityCodeRouteHandler,
  getReferencesCountriesCountryCodeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCargoGetRouteOriginDestinationFromDateProductCodeRoute,
    getCargoGetRouteOriginDestinationFromDateProductCodeRouteHandler,
  )
  .openapi(
    getCargoShipmentTrackingAWBPrefixAWBNumberRoute,
    getCargoShipmentTrackingAWBPrefixAWBNumberRouteHandler,
  )
  .openapi(getOffersLoungesLocationRoute, getOffersLoungesLocationRouteHandler)
  .openapi(
    getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassRoute,
    getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassRouteHandler,
  )
  .openapi(
    getOperationsFlightstatusArrivalsAirportCodeFromDateTimeRoute,
    getOperationsFlightstatusArrivalsAirportCodeFromDateTimeRouteHandler,
  )
  .openapi(
    getOperationsFlightstatusDeparturesAirportCodeFromDateTimeRoute,
    getOperationsFlightstatusDeparturesAirportCodeFromDateTimeRouteHandler,
  )
  .openapi(
    getOperationsFlightstatusRouteOriginDestinationDateRoute,
    getOperationsFlightstatusRouteOriginDestinationDateRouteHandler,
  )
  .openapi(
    getOperationsFlightstatusFlightNumberDateRoute,
    getOperationsFlightstatusFlightNumberDateRouteHandler,
  )
  .openapi(
    getOperationsSchedulesOriginDestinationFromDateTimeRoute,
    getOperationsSchedulesOriginDestinationFromDateTimeRouteHandler,
  )
  .openapi(getReferencesAircraftAircraftCodeRoute, getReferencesAircraftAircraftCodeRouteHandler)
  .openapi(getReferencesAirlinesAirlineCodeRoute, getReferencesAirlinesAirlineCodeRouteHandler)
  .openapi(
    getReferencesAirportsNearestLatitudeLongitudeRoute,
    getReferencesAirportsNearestLatitudeLongitudeRouteHandler,
  )
  .openapi(getReferencesAirportsAirportCodeRoute, getReferencesAirportsAirportCodeRouteHandler)
  .openapi(getReferencesCitiesCityCodeRoute, getReferencesCitiesCityCodeRouteHandler)
  .openapi(getReferencesCountriesCountryCodeRoute, getReferencesCountriesCountryCodeRouteHandler)

export default app
