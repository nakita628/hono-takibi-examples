import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDiscoveryV2AttractionsIdRoute,
  getDiscoveryV2AttractionsRoute,
  getDiscoveryV2ClassificationsGenresIdRoute,
  getDiscoveryV2ClassificationsIdRoute,
  getDiscoveryV2ClassificationsRoute,
  getDiscoveryV2ClassificationsSegmentsIdRoute,
  getDiscoveryV2ClassificationsSubgenresIdRoute,
  getDiscoveryV2EventsIdImagesRoute,
  getDiscoveryV2EventsIdRoute,
  getDiscoveryV2EventsRoute,
  getDiscoveryV2SuggestRoute,
  getDiscoveryV2VenuesIdRoute,
  getDiscoveryV2VenuesRoute,
} from './routes'
import {
  getDiscoveryV2AttractionsIdRouteHandler,
  getDiscoveryV2AttractionsRouteHandler,
  getDiscoveryV2ClassificationsGenresIdRouteHandler,
  getDiscoveryV2ClassificationsIdRouteHandler,
  getDiscoveryV2ClassificationsRouteHandler,
  getDiscoveryV2ClassificationsSegmentsIdRouteHandler,
  getDiscoveryV2ClassificationsSubgenresIdRouteHandler,
  getDiscoveryV2EventsIdImagesRouteHandler,
  getDiscoveryV2EventsIdRouteHandler,
  getDiscoveryV2EventsRouteHandler,
  getDiscoveryV2SuggestRouteHandler,
  getDiscoveryV2VenuesIdRouteHandler,
  getDiscoveryV2VenuesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDiscoveryV2AttractionsRoute, getDiscoveryV2AttractionsRouteHandler)
  .openapi(getDiscoveryV2AttractionsIdRoute, getDiscoveryV2AttractionsIdRouteHandler)
  .openapi(getDiscoveryV2ClassificationsRoute, getDiscoveryV2ClassificationsRouteHandler)
  .openapi(
    getDiscoveryV2ClassificationsGenresIdRoute,
    getDiscoveryV2ClassificationsGenresIdRouteHandler,
  )
  .openapi(
    getDiscoveryV2ClassificationsSegmentsIdRoute,
    getDiscoveryV2ClassificationsSegmentsIdRouteHandler,
  )
  .openapi(
    getDiscoveryV2ClassificationsSubgenresIdRoute,
    getDiscoveryV2ClassificationsSubgenresIdRouteHandler,
  )
  .openapi(getDiscoveryV2ClassificationsIdRoute, getDiscoveryV2ClassificationsIdRouteHandler)
  .openapi(getDiscoveryV2EventsRoute, getDiscoveryV2EventsRouteHandler)
  .openapi(getDiscoveryV2EventsIdRoute, getDiscoveryV2EventsIdRouteHandler)
  .openapi(getDiscoveryV2EventsIdImagesRoute, getDiscoveryV2EventsIdImagesRouteHandler)
  .openapi(getDiscoveryV2SuggestRoute, getDiscoveryV2SuggestRouteHandler)
  .openapi(getDiscoveryV2VenuesRoute, getDiscoveryV2VenuesRouteHandler)
  .openapi(getDiscoveryV2VenuesIdRoute, getDiscoveryV2VenuesIdRouteHandler)

export default app
