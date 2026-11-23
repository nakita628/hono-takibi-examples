import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects2026090162ServiceIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects2026090162Route,
  getCrmObjects2026090162ServiceIdRoute,
  getCrmObjects202609ServicesServiceIdAssociationsToObjectTypeRoute,
  patchCrmObjects2026090162ServiceIdRoute,
  postCrmObjects2026090162BatchArchiveRoute,
  postCrmObjects2026090162BatchCreateRoute,
  postCrmObjects2026090162BatchReadRoute,
  postCrmObjects2026090162BatchUpdateRoute,
  postCrmObjects2026090162BatchUpsertRoute,
  postCrmObjects2026090162Route,
  postCrmObjects2026090162SearchRoute,
  postCrmObjects202609ServicesGdprDeleteRoute,
  postCrmObjects202609ServicesMergeRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects2026090162ServiceIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects2026090162RouteHandler,
  getCrmObjects2026090162ServiceIdRouteHandler,
  getCrmObjects202609ServicesServiceIdAssociationsToObjectTypeRouteHandler,
  patchCrmObjects2026090162ServiceIdRouteHandler,
  postCrmObjects2026090162BatchArchiveRouteHandler,
  postCrmObjects2026090162BatchCreateRouteHandler,
  postCrmObjects2026090162BatchReadRouteHandler,
  postCrmObjects2026090162BatchUpdateRouteHandler,
  postCrmObjects2026090162BatchUpsertRouteHandler,
  postCrmObjects2026090162RouteHandler,
  postCrmObjects2026090162SearchRouteHandler,
  postCrmObjects202609ServicesGdprDeleteRouteHandler,
  postCrmObjects202609ServicesMergeRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects2026090162Route, getCrmObjects2026090162RouteHandler)
  .openapi(postCrmObjects2026090162Route, postCrmObjects2026090162RouteHandler)
  .openapi(
    postCrmObjects2026090162BatchArchiveRoute,
    postCrmObjects2026090162BatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects2026090162BatchCreateRoute,
    postCrmObjects2026090162BatchCreateRouteHandler,
  )
  .openapi(postCrmObjects2026090162BatchReadRoute, postCrmObjects2026090162BatchReadRouteHandler)
  .openapi(
    postCrmObjects2026090162BatchUpdateRoute,
    postCrmObjects2026090162BatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects2026090162BatchUpsertRoute,
    postCrmObjects2026090162BatchUpsertRouteHandler,
  )
  .openapi(postCrmObjects2026090162SearchRoute, postCrmObjects2026090162SearchRouteHandler)
  .openapi(getCrmObjects2026090162ServiceIdRoute, getCrmObjects2026090162ServiceIdRouteHandler)
  .openapi(
    deleteCrmObjects2026090162ServiceIdRoute,
    deleteCrmObjects2026090162ServiceIdRouteHandler,
  )
  .openapi(patchCrmObjects2026090162ServiceIdRoute, patchCrmObjects2026090162ServiceIdRouteHandler)
  .openapi(
    postCrmObjects202609ServicesGdprDeleteRoute,
    postCrmObjects202609ServicesGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609ServicesMergeRoute, postCrmObjects202609ServicesMergeRouteHandler)
  .openapi(
    getCrmObjects202609ServicesServiceIdAssociationsToObjectTypeRoute,
    getCrmObjects202609ServicesServiceIdAssociationsToObjectTypeRouteHandler,
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )

export default app
