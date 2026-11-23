import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchPublishV2AttractionsIdRoute,
  patchPublishV2EventsIdRoute,
  patchPublishV2VenuesIdRoute,
  postPublishV2AttractionsIdVideosRoute,
  postPublishV2AttractionsRoute,
  postPublishV2EntitlementsRoute,
  postPublishV2EventsIdVideosRoute,
  postPublishV2EventsRoute,
  postPublishV2ExtensionsRoute,
  postPublishV2VenuesRoute,
} from './routes'
import {
  patchPublishV2AttractionsIdRouteHandler,
  patchPublishV2EventsIdRouteHandler,
  patchPublishV2VenuesIdRouteHandler,
  postPublishV2AttractionsIdVideosRouteHandler,
  postPublishV2AttractionsRouteHandler,
  postPublishV2EntitlementsRouteHandler,
  postPublishV2EventsIdVideosRouteHandler,
  postPublishV2EventsRouteHandler,
  postPublishV2ExtensionsRouteHandler,
  postPublishV2VenuesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postPublishV2AttractionsRoute, postPublishV2AttractionsRouteHandler)
  .openapi(patchPublishV2AttractionsIdRoute, patchPublishV2AttractionsIdRouteHandler)
  .openapi(postPublishV2AttractionsIdVideosRoute, postPublishV2AttractionsIdVideosRouteHandler)
  .openapi(postPublishV2EntitlementsRoute, postPublishV2EntitlementsRouteHandler)
  .openapi(postPublishV2EventsRoute, postPublishV2EventsRouteHandler)
  .openapi(patchPublishV2EventsIdRoute, patchPublishV2EventsIdRouteHandler)
  .openapi(postPublishV2EventsIdVideosRoute, postPublishV2EventsIdVideosRouteHandler)
  .openapi(postPublishV2ExtensionsRoute, postPublishV2ExtensionsRouteHandler)
  .openapi(postPublishV2VenuesRoute, postPublishV2VenuesRouteHandler)
  .openapi(patchPublishV2VenuesIdRoute, patchPublishV2VenuesIdRouteHandler)

export default app
