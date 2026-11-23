import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609TasksTaskIdRoute,
  getCrmObjects202609TasksRoute,
  getCrmObjects202609TasksTaskIdAssociationsToObjectTypeRoute,
  getCrmObjects202609TasksTaskIdRoute,
  patchCrmObjects202609TasksTaskIdRoute,
  postCrmObjects202609TasksBatchArchiveRoute,
  postCrmObjects202609TasksBatchCreateRoute,
  postCrmObjects202609TasksBatchReadRoute,
  postCrmObjects202609TasksBatchUpdateRoute,
  postCrmObjects202609TasksBatchUpsertRoute,
  postCrmObjects202609TasksGdprDeleteRoute,
  postCrmObjects202609TasksMergeRoute,
  postCrmObjects202609TasksRoute,
  postCrmObjects202609TasksSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609TasksTaskIdRouteHandler,
  getCrmObjects202609TasksRouteHandler,
  getCrmObjects202609TasksTaskIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609TasksTaskIdRouteHandler,
  patchCrmObjects202609TasksTaskIdRouteHandler,
  postCrmObjects202609TasksBatchArchiveRouteHandler,
  postCrmObjects202609TasksBatchCreateRouteHandler,
  postCrmObjects202609TasksBatchReadRouteHandler,
  postCrmObjects202609TasksBatchUpdateRouteHandler,
  postCrmObjects202609TasksBatchUpsertRouteHandler,
  postCrmObjects202609TasksGdprDeleteRouteHandler,
  postCrmObjects202609TasksMergeRouteHandler,
  postCrmObjects202609TasksRouteHandler,
  postCrmObjects202609TasksSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609TasksRoute, getCrmObjects202609TasksRouteHandler)
  .openapi(postCrmObjects202609TasksRoute, postCrmObjects202609TasksRouteHandler)
  .openapi(
    postCrmObjects202609TasksBatchArchiveRoute,
    postCrmObjects202609TasksBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609TasksBatchCreateRoute,
    postCrmObjects202609TasksBatchCreateRouteHandler,
  )
  .openapi(postCrmObjects202609TasksBatchReadRoute, postCrmObjects202609TasksBatchReadRouteHandler)
  .openapi(
    postCrmObjects202609TasksBatchUpdateRoute,
    postCrmObjects202609TasksBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609TasksBatchUpsertRoute,
    postCrmObjects202609TasksBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609TasksGdprDeleteRoute,
    postCrmObjects202609TasksGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609TasksMergeRoute, postCrmObjects202609TasksMergeRouteHandler)
  .openapi(postCrmObjects202609TasksSearchRoute, postCrmObjects202609TasksSearchRouteHandler)
  .openapi(getCrmObjects202609TasksTaskIdRoute, getCrmObjects202609TasksTaskIdRouteHandler)
  .openapi(deleteCrmObjects202609TasksTaskIdRoute, deleteCrmObjects202609TasksTaskIdRouteHandler)
  .openapi(patchCrmObjects202609TasksTaskIdRoute, patchCrmObjects202609TasksTaskIdRouteHandler)
  .openapi(
    getCrmObjects202609TasksTaskIdAssociationsToObjectTypeRoute,
    getCrmObjects202609TasksTaskIdAssociationsToObjectTypeRouteHandler,
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
