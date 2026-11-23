import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeRoute,
  patchCrmObjects202609ObjectTypeObjectIdRoute,
  postCrmObjects202609ObjectTypeBatchArchiveRoute,
  postCrmObjects202609ObjectTypeBatchCreateRoute,
  postCrmObjects202609ObjectTypeBatchReadRoute,
  postCrmObjects202609ObjectTypeBatchUpdateRoute,
  postCrmObjects202609ObjectTypeBatchUpsertRoute,
  postCrmObjects202609ObjectTypeMergeRoute,
  postCrmObjects202609ObjectTypeRoute,
  postCrmObjects202609ObjectTypeSearchRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdRouteHandler,
  getCrmObjects202609ObjectTypeObjectIdRouteHandler,
  getCrmObjects202609ObjectTypeRouteHandler,
  patchCrmObjects202609ObjectTypeObjectIdRouteHandler,
  postCrmObjects202609ObjectTypeBatchArchiveRouteHandler,
  postCrmObjects202609ObjectTypeBatchCreateRouteHandler,
  postCrmObjects202609ObjectTypeBatchReadRouteHandler,
  postCrmObjects202609ObjectTypeBatchUpdateRouteHandler,
  postCrmObjects202609ObjectTypeBatchUpsertRouteHandler,
  postCrmObjects202609ObjectTypeMergeRouteHandler,
  postCrmObjects202609ObjectTypeRouteHandler,
  postCrmObjects202609ObjectTypeSearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609ObjectTypeRoute, getCrmObjects202609ObjectTypeRouteHandler)
  .openapi(postCrmObjects202609ObjectTypeRoute, postCrmObjects202609ObjectTypeRouteHandler)
  .openapi(
    postCrmObjects202609ObjectTypeBatchArchiveRoute,
    postCrmObjects202609ObjectTypeBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeBatchCreateRoute,
    postCrmObjects202609ObjectTypeBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeBatchReadRoute,
    postCrmObjects202609ObjectTypeBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeBatchUpdateRoute,
    postCrmObjects202609ObjectTypeBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeBatchUpsertRoute,
    postCrmObjects202609ObjectTypeBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeMergeRoute,
    postCrmObjects202609ObjectTypeMergeRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeSearchRoute,
    postCrmObjects202609ObjectTypeSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609ObjectTypeObjectIdRoute,
    getCrmObjects202609ObjectTypeObjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdRoute,
    deleteCrmObjects202609ObjectTypeObjectIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609ObjectTypeObjectIdRoute,
    patchCrmObjects202609ObjectTypeObjectIdRouteHandler,
  )

export default app
