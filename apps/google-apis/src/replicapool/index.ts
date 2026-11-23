import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRoute,
  getProjectNameZonesZonePoolsPoolNameReplicasRoute,
  getProjectNameZonesZonePoolsPoolNameRoute,
  getProjectNameZonesZonePoolsRoute,
  postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartRoute,
  postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRoute,
  postProjectNameZonesZonePoolsPoolNameResizeRoute,
  postProjectNameZonesZonePoolsPoolNameRoute,
  postProjectNameZonesZonePoolsPoolNameUpdateTemplateRoute,
  postProjectNameZonesZonePoolsRoute,
} from './routes'
import {
  getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRouteHandler,
  getProjectNameZonesZonePoolsPoolNameReplicasRouteHandler,
  getProjectNameZonesZonePoolsPoolNameRouteHandler,
  getProjectNameZonesZonePoolsRouteHandler,
  postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartRouteHandler,
  postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRouteHandler,
  postProjectNameZonesZonePoolsPoolNameResizeRouteHandler,
  postProjectNameZonesZonePoolsPoolNameRouteHandler,
  postProjectNameZonesZonePoolsPoolNameUpdateTemplateRouteHandler,
  postProjectNameZonesZonePoolsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getProjectNameZonesZonePoolsRoute, getProjectNameZonesZonePoolsRouteHandler)
  .openapi(postProjectNameZonesZonePoolsRoute, postProjectNameZonesZonePoolsRouteHandler)
  .openapi(
    getProjectNameZonesZonePoolsPoolNameRoute,
    getProjectNameZonesZonePoolsPoolNameRouteHandler,
  )
  .openapi(
    postProjectNameZonesZonePoolsPoolNameRoute,
    postProjectNameZonesZonePoolsPoolNameRouteHandler,
  )
  .openapi(
    getProjectNameZonesZonePoolsPoolNameReplicasRoute,
    getProjectNameZonesZonePoolsPoolNameReplicasRouteHandler,
  )
  .openapi(
    getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRoute,
    getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRouteHandler,
  )
  .openapi(
    postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRoute,
    postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRouteHandler,
  )
  .openapi(
    postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartRoute,
    postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartRouteHandler,
  )
  .openapi(
    postProjectNameZonesZonePoolsPoolNameResizeRoute,
    postProjectNameZonesZonePoolsPoolNameResizeRouteHandler,
  )
  .openapi(
    postProjectNameZonesZonePoolsPoolNameUpdateTemplateRoute,
    postProjectNameZonesZonePoolsPoolNameUpdateTemplateRouteHandler,
  )

export default app
