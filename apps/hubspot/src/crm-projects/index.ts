import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609ProjectsProjectIdRoute,
  getCrmObjects202609ProjectsProjectIdAssociationsToObjectTypeRoute,
  getCrmObjects202609ProjectsProjectIdRoute,
  getCrmObjects202609ProjectsRoute,
  patchCrmObjects202609ProjectsProjectIdRoute,
  postCrmObjects202609ObjectTypeGdprDeleteRoute,
  postCrmObjects202609ProjectsBatchArchiveRoute,
  postCrmObjects202609ProjectsBatchCreateRoute,
  postCrmObjects202609ProjectsBatchReadRoute,
  postCrmObjects202609ProjectsBatchUpdateRoute,
  postCrmObjects202609ProjectsBatchUpsertRoute,
  postCrmObjects202609ProjectsMergeRoute,
  postCrmObjects202609ProjectsRoute,
  postCrmObjects202609ProjectsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609ProjectsProjectIdRouteHandler,
  getCrmObjects202609ProjectsProjectIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609ProjectsProjectIdRouteHandler,
  getCrmObjects202609ProjectsRouteHandler,
  patchCrmObjects202609ProjectsProjectIdRouteHandler,
  postCrmObjects202609ObjectTypeGdprDeleteRouteHandler,
  postCrmObjects202609ProjectsBatchArchiveRouteHandler,
  postCrmObjects202609ProjectsBatchCreateRouteHandler,
  postCrmObjects202609ProjectsBatchReadRouteHandler,
  postCrmObjects202609ProjectsBatchUpdateRouteHandler,
  postCrmObjects202609ProjectsBatchUpsertRouteHandler,
  postCrmObjects202609ProjectsMergeRouteHandler,
  postCrmObjects202609ProjectsRouteHandler,
  postCrmObjects202609ProjectsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609ProjectsRoute, getCrmObjects202609ProjectsRouteHandler)
  .openapi(postCrmObjects202609ProjectsRoute, postCrmObjects202609ProjectsRouteHandler)
  .openapi(
    postCrmObjects202609ProjectsBatchArchiveRoute,
    postCrmObjects202609ProjectsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609ProjectsBatchCreateRoute,
    postCrmObjects202609ProjectsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609ProjectsBatchReadRoute,
    postCrmObjects202609ProjectsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609ProjectsBatchUpdateRoute,
    postCrmObjects202609ProjectsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609ProjectsBatchUpsertRoute,
    postCrmObjects202609ProjectsBatchUpsertRouteHandler,
  )
  .openapi(postCrmObjects202609ProjectsMergeRoute, postCrmObjects202609ProjectsMergeRouteHandler)
  .openapi(postCrmObjects202609ProjectsSearchRoute, postCrmObjects202609ProjectsSearchRouteHandler)
  .openapi(
    getCrmObjects202609ProjectsProjectIdRoute,
    getCrmObjects202609ProjectsProjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ProjectsProjectIdRoute,
    deleteCrmObjects202609ProjectsProjectIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609ProjectsProjectIdRoute,
    patchCrmObjects202609ProjectsProjectIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609ProjectsProjectIdAssociationsToObjectTypeRoute,
    getCrmObjects202609ProjectsProjectIdAssociationsToObjectTypeRouteHandler,
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeGdprDeleteRoute,
    postCrmObjects202609ObjectTypeGdprDeleteRouteHandler,
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
