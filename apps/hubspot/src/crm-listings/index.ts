import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects2026090420ListingIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects2026090420ListingIdRoute,
  getCrmObjects2026090420Route,
  getCrmObjects202609ListingsListingIdAssociationsToObjectTypeRoute,
  patchCrmObjects2026090420ListingIdRoute,
  postCrmObjects2026090420BatchArchiveRoute,
  postCrmObjects2026090420BatchCreateRoute,
  postCrmObjects2026090420BatchReadRoute,
  postCrmObjects2026090420BatchUpdateRoute,
  postCrmObjects2026090420BatchUpsertRoute,
  postCrmObjects2026090420Route,
  postCrmObjects2026090420SearchRoute,
  postCrmObjects202609ListingsGdprDeleteRoute,
  postCrmObjects202609ListingsMergeRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects2026090420ListingIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects2026090420ListingIdRouteHandler,
  getCrmObjects2026090420RouteHandler,
  getCrmObjects202609ListingsListingIdAssociationsToObjectTypeRouteHandler,
  patchCrmObjects2026090420ListingIdRouteHandler,
  postCrmObjects2026090420BatchArchiveRouteHandler,
  postCrmObjects2026090420BatchCreateRouteHandler,
  postCrmObjects2026090420BatchReadRouteHandler,
  postCrmObjects2026090420BatchUpdateRouteHandler,
  postCrmObjects2026090420BatchUpsertRouteHandler,
  postCrmObjects2026090420RouteHandler,
  postCrmObjects2026090420SearchRouteHandler,
  postCrmObjects202609ListingsGdprDeleteRouteHandler,
  postCrmObjects202609ListingsMergeRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects2026090420Route, getCrmObjects2026090420RouteHandler)
  .openapi(postCrmObjects2026090420Route, postCrmObjects2026090420RouteHandler)
  .openapi(
    postCrmObjects2026090420BatchArchiveRoute,
    postCrmObjects2026090420BatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects2026090420BatchCreateRoute,
    postCrmObjects2026090420BatchCreateRouteHandler,
  )
  .openapi(postCrmObjects2026090420BatchReadRoute, postCrmObjects2026090420BatchReadRouteHandler)
  .openapi(
    postCrmObjects2026090420BatchUpdateRoute,
    postCrmObjects2026090420BatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects2026090420BatchUpsertRoute,
    postCrmObjects2026090420BatchUpsertRouteHandler,
  )
  .openapi(postCrmObjects2026090420SearchRoute, postCrmObjects2026090420SearchRouteHandler)
  .openapi(getCrmObjects2026090420ListingIdRoute, getCrmObjects2026090420ListingIdRouteHandler)
  .openapi(
    deleteCrmObjects2026090420ListingIdRoute,
    deleteCrmObjects2026090420ListingIdRouteHandler,
  )
  .openapi(patchCrmObjects2026090420ListingIdRoute, patchCrmObjects2026090420ListingIdRouteHandler)
  .openapi(
    postCrmObjects202609ListingsGdprDeleteRoute,
    postCrmObjects202609ListingsGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609ListingsMergeRoute, postCrmObjects202609ListingsMergeRouteHandler)
  .openapi(
    getCrmObjects202609ListingsListingIdAssociationsToObjectTypeRoute,
    getCrmObjects202609ListingsListingIdAssociationsToObjectTypeRouteHandler,
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
