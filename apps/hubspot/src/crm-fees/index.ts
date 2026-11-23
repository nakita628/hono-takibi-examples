import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609FeesFeeIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609FeesFeeIdAssociationsToObjectTypeRoute,
  getCrmObjects202609FeesFeeIdRoute,
  getCrmObjects202609FeesRoute,
  patchCrmObjects202609FeesFeeIdRoute,
  postCrmObjects202609FeesBatchArchiveRoute,
  postCrmObjects202609FeesBatchCreateRoute,
  postCrmObjects202609FeesBatchReadRoute,
  postCrmObjects202609FeesBatchUpdateRoute,
  postCrmObjects202609FeesBatchUpsertRoute,
  postCrmObjects202609FeesGdprDeleteRoute,
  postCrmObjects202609FeesMergeRoute,
  postCrmObjects202609FeesRoute,
  postCrmObjects202609FeesSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609FeesFeeIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609FeesFeeIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609FeesFeeIdRouteHandler,
  getCrmObjects202609FeesRouteHandler,
  patchCrmObjects202609FeesFeeIdRouteHandler,
  postCrmObjects202609FeesBatchArchiveRouteHandler,
  postCrmObjects202609FeesBatchCreateRouteHandler,
  postCrmObjects202609FeesBatchReadRouteHandler,
  postCrmObjects202609FeesBatchUpdateRouteHandler,
  postCrmObjects202609FeesBatchUpsertRouteHandler,
  postCrmObjects202609FeesGdprDeleteRouteHandler,
  postCrmObjects202609FeesMergeRouteHandler,
  postCrmObjects202609FeesRouteHandler,
  postCrmObjects202609FeesSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609FeesRoute, getCrmObjects202609FeesRouteHandler)
  .openapi(postCrmObjects202609FeesRoute, postCrmObjects202609FeesRouteHandler)
  .openapi(
    postCrmObjects202609FeesBatchArchiveRoute,
    postCrmObjects202609FeesBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609FeesBatchCreateRoute,
    postCrmObjects202609FeesBatchCreateRouteHandler,
  )
  .openapi(postCrmObjects202609FeesBatchReadRoute, postCrmObjects202609FeesBatchReadRouteHandler)
  .openapi(
    postCrmObjects202609FeesBatchUpdateRoute,
    postCrmObjects202609FeesBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609FeesBatchUpsertRoute,
    postCrmObjects202609FeesBatchUpsertRouteHandler,
  )
  .openapi(postCrmObjects202609FeesGdprDeleteRoute, postCrmObjects202609FeesGdprDeleteRouteHandler)
  .openapi(postCrmObjects202609FeesMergeRoute, postCrmObjects202609FeesMergeRouteHandler)
  .openapi(postCrmObjects202609FeesSearchRoute, postCrmObjects202609FeesSearchRouteHandler)
  .openapi(getCrmObjects202609FeesFeeIdRoute, getCrmObjects202609FeesFeeIdRouteHandler)
  .openapi(deleteCrmObjects202609FeesFeeIdRoute, deleteCrmObjects202609FeesFeeIdRouteHandler)
  .openapi(patchCrmObjects202609FeesFeeIdRoute, patchCrmObjects202609FeesFeeIdRouteHandler)
  .openapi(
    getCrmObjects202609FeesFeeIdAssociationsToObjectTypeRoute,
    getCrmObjects202609FeesFeeIdAssociationsToObjectTypeRouteHandler,
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
