import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute,
  deleteFeatureFlags202609AppIdFlagsFlagNameRoute,
  getFeatureFlags202609AppIdFlagsAllRoute,
  getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute,
  getFeatureFlags202609AppIdFlagsFlagNamePortalsRoute,
  getFeatureFlags202609AppIdFlagsFlagNameRoute,
  postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteRoute,
  postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertRoute,
  putFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute,
  putFeatureFlags202609AppIdFlagsFlagNameRoute,
} from './routes'
import {
  deleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRouteHandler,
  deleteFeatureFlags202609AppIdFlagsFlagNameRouteHandler,
  getFeatureFlags202609AppIdFlagsAllRouteHandler,
  getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRouteHandler,
  getFeatureFlags202609AppIdFlagsFlagNamePortalsRouteHandler,
  getFeatureFlags202609AppIdFlagsFlagNameRouteHandler,
  postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteRouteHandler,
  postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertRouteHandler,
  putFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRouteHandler,
  putFeatureFlags202609AppIdFlagsFlagNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFeatureFlags202609AppIdFlagsAllRoute, getFeatureFlags202609AppIdFlagsAllRouteHandler)
  .openapi(
    getFeatureFlags202609AppIdFlagsFlagNameRoute,
    getFeatureFlags202609AppIdFlagsFlagNameRouteHandler,
  )
  .openapi(
    putFeatureFlags202609AppIdFlagsFlagNameRoute,
    putFeatureFlags202609AppIdFlagsFlagNameRouteHandler,
  )
  .openapi(
    deleteFeatureFlags202609AppIdFlagsFlagNameRoute,
    deleteFeatureFlags202609AppIdFlagsFlagNameRouteHandler,
  )
  .openapi(
    getFeatureFlags202609AppIdFlagsFlagNamePortalsRoute,
    getFeatureFlags202609AppIdFlagsFlagNamePortalsRouteHandler,
  )
  .openapi(
    postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteRoute,
    postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteRouteHandler,
  )
  .openapi(
    postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertRoute,
    postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertRouteHandler,
  )
  .openapi(
    getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute,
    getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRouteHandler,
  )
  .openapi(
    putFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute,
    putFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRouteHandler,
  )
  .openapi(
    deleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute,
    deleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRouteHandler,
  )

export default app
