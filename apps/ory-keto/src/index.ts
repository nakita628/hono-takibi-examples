import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRelationTuplesRoute,
  getHealthAliveRoute,
  getHealthReadyRoute,
  getNamespacesRoute,
  getRelationTuplesCheckOpenapiRoute,
  getRelationTuplesCheckRoute,
  getRelationTuplesExpandRoute,
  getRelationTuplesRoute,
  getVersionRoute,
  patchAdminRelationTuplesRoute,
  postOplSyntaxCheckRoute,
  postRelationTuplesBatchCheckRoute,
  postRelationTuplesCheckOpenapiRoute,
  postRelationTuplesCheckRoute,
  putAdminRelationTuplesRoute,
} from './routes'
import {
  deleteAdminRelationTuplesRouteHandler,
  getHealthAliveRouteHandler,
  getHealthReadyRouteHandler,
  getNamespacesRouteHandler,
  getRelationTuplesCheckOpenapiRouteHandler,
  getRelationTuplesCheckRouteHandler,
  getRelationTuplesExpandRouteHandler,
  getRelationTuplesRouteHandler,
  getVersionRouteHandler,
  patchAdminRelationTuplesRouteHandler,
  postOplSyntaxCheckRouteHandler,
  postRelationTuplesBatchCheckRouteHandler,
  postRelationTuplesCheckOpenapiRouteHandler,
  postRelationTuplesCheckRouteHandler,
  putAdminRelationTuplesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteAdminRelationTuplesRoute, deleteAdminRelationTuplesRouteHandler)
  .openapi(patchAdminRelationTuplesRoute, patchAdminRelationTuplesRouteHandler)
  .openapi(putAdminRelationTuplesRoute, putAdminRelationTuplesRouteHandler)
  .openapi(getHealthAliveRoute, getHealthAliveRouteHandler)
  .openapi(getHealthReadyRoute, getHealthReadyRouteHandler)
  .openapi(getNamespacesRoute, getNamespacesRouteHandler)
  .openapi(postOplSyntaxCheckRoute, postOplSyntaxCheckRouteHandler)
  .openapi(getRelationTuplesRoute, getRelationTuplesRouteHandler)
  .openapi(postRelationTuplesBatchCheckRoute, postRelationTuplesBatchCheckRouteHandler)
  .openapi(getRelationTuplesCheckRoute, getRelationTuplesCheckRouteHandler)
  .openapi(postRelationTuplesCheckRoute, postRelationTuplesCheckRouteHandler)
  .openapi(getRelationTuplesCheckOpenapiRoute, getRelationTuplesCheckOpenapiRouteHandler)
  .openapi(postRelationTuplesCheckOpenapiRoute, postRelationTuplesCheckOpenapiRouteHandler)
  .openapi(getRelationTuplesExpandRoute, getRelationTuplesExpandRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)

export default app
