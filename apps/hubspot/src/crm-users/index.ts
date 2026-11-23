import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609UsersUserIdRoute,
  getCrmObjects202609UsersRoute,
  getCrmObjects202609UsersUserIdAssociationsToObjectTypeRoute,
  getCrmObjects202609UsersUserIdRoute,
  patchCrmObjects202609UsersUserIdRoute,
  postCrmObjects202609UsersBatchArchiveRoute,
  postCrmObjects202609UsersBatchCreateRoute,
  postCrmObjects202609UsersBatchReadRoute,
  postCrmObjects202609UsersBatchUpdateRoute,
  postCrmObjects202609UsersBatchUpsertRoute,
  postCrmObjects202609UsersGdprDeleteRoute,
  postCrmObjects202609UsersMergeRoute,
  postCrmObjects202609UsersRoute,
  postCrmObjects202609UsersSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609UsersUserIdRouteHandler,
  getCrmObjects202609UsersRouteHandler,
  getCrmObjects202609UsersUserIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609UsersUserIdRouteHandler,
  patchCrmObjects202609UsersUserIdRouteHandler,
  postCrmObjects202609UsersBatchArchiveRouteHandler,
  postCrmObjects202609UsersBatchCreateRouteHandler,
  postCrmObjects202609UsersBatchReadRouteHandler,
  postCrmObjects202609UsersBatchUpdateRouteHandler,
  postCrmObjects202609UsersBatchUpsertRouteHandler,
  postCrmObjects202609UsersGdprDeleteRouteHandler,
  postCrmObjects202609UsersMergeRouteHandler,
  postCrmObjects202609UsersRouteHandler,
  postCrmObjects202609UsersSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609UsersRoute, getCrmObjects202609UsersRouteHandler)
  .openapi(postCrmObjects202609UsersRoute, postCrmObjects202609UsersRouteHandler)
  .openapi(
    postCrmObjects202609UsersBatchArchiveRoute,
    postCrmObjects202609UsersBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609UsersBatchCreateRoute,
    postCrmObjects202609UsersBatchCreateRouteHandler,
  )
  .openapi(postCrmObjects202609UsersBatchReadRoute, postCrmObjects202609UsersBatchReadRouteHandler)
  .openapi(
    postCrmObjects202609UsersBatchUpdateRoute,
    postCrmObjects202609UsersBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609UsersBatchUpsertRoute,
    postCrmObjects202609UsersBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609UsersGdprDeleteRoute,
    postCrmObjects202609UsersGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609UsersMergeRoute, postCrmObjects202609UsersMergeRouteHandler)
  .openapi(postCrmObjects202609UsersSearchRoute, postCrmObjects202609UsersSearchRouteHandler)
  .openapi(getCrmObjects202609UsersUserIdRoute, getCrmObjects202609UsersUserIdRouteHandler)
  .openapi(deleteCrmObjects202609UsersUserIdRoute, deleteCrmObjects202609UsersUserIdRouteHandler)
  .openapi(patchCrmObjects202609UsersUserIdRoute, patchCrmObjects202609UsersUserIdRouteHandler)
  .openapi(
    getCrmObjects202609UsersUserIdAssociationsToObjectTypeRoute,
    getCrmObjects202609UsersUserIdAssociationsToObjectTypeRouteHandler,
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
