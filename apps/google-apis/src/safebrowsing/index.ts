import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4EncodedFullHashesEncodedRequestRoute,
  getV4EncodedUpdatesEncodedRequestRoute,
  getV4ThreatListsRoute,
  postV4FullHashesFindRoute,
  postV4ThreatHitsRoute,
  postV4ThreatListUpdatesFetchRoute,
  postV4ThreatMatchesFindRoute,
} from './routes'
import {
  getV4EncodedFullHashesEncodedRequestRouteHandler,
  getV4EncodedUpdatesEncodedRequestRouteHandler,
  getV4ThreatListsRouteHandler,
  postV4FullHashesFindRouteHandler,
  postV4ThreatHitsRouteHandler,
  postV4ThreatListUpdatesFetchRouteHandler,
  postV4ThreatMatchesFindRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV4EncodedFullHashesEncodedRequestRoute,
    getV4EncodedFullHashesEncodedRequestRouteHandler,
  )
  .openapi(getV4EncodedUpdatesEncodedRequestRoute, getV4EncodedUpdatesEncodedRequestRouteHandler)
  .openapi(postV4FullHashesFindRoute, postV4FullHashesFindRouteHandler)
  .openapi(postV4ThreatHitsRoute, postV4ThreatHitsRouteHandler)
  .openapi(postV4ThreatListUpdatesFetchRoute, postV4ThreatListUpdatesFetchRouteHandler)
  .openapi(getV4ThreatListsRoute, getV4ThreatListsRouteHandler)
  .openapi(postV4ThreatMatchesFindRoute, postV4ThreatMatchesFindRouteHandler)

export default app
