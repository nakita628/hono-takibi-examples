import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609DiscountsDiscountIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609DiscountsDiscountIdAssociationsToObjectTypeRoute,
  getCrmObjects202609DiscountsDiscountIdRoute,
  getCrmObjects202609DiscountsRoute,
  patchCrmObjects202609DiscountsDiscountIdRoute,
  postCrmObjects202609DiscountsBatchArchiveRoute,
  postCrmObjects202609DiscountsBatchCreateRoute,
  postCrmObjects202609DiscountsBatchReadRoute,
  postCrmObjects202609DiscountsBatchUpdateRoute,
  postCrmObjects202609DiscountsBatchUpsertRoute,
  postCrmObjects202609DiscountsGdprDeleteRoute,
  postCrmObjects202609DiscountsMergeRoute,
  postCrmObjects202609DiscountsRoute,
  postCrmObjects202609DiscountsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609DiscountsDiscountIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609DiscountsDiscountIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609DiscountsDiscountIdRouteHandler,
  getCrmObjects202609DiscountsRouteHandler,
  patchCrmObjects202609DiscountsDiscountIdRouteHandler,
  postCrmObjects202609DiscountsBatchArchiveRouteHandler,
  postCrmObjects202609DiscountsBatchCreateRouteHandler,
  postCrmObjects202609DiscountsBatchReadRouteHandler,
  postCrmObjects202609DiscountsBatchUpdateRouteHandler,
  postCrmObjects202609DiscountsBatchUpsertRouteHandler,
  postCrmObjects202609DiscountsGdprDeleteRouteHandler,
  postCrmObjects202609DiscountsMergeRouteHandler,
  postCrmObjects202609DiscountsRouteHandler,
  postCrmObjects202609DiscountsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609DiscountsRoute, getCrmObjects202609DiscountsRouteHandler)
  .openapi(postCrmObjects202609DiscountsRoute, postCrmObjects202609DiscountsRouteHandler)
  .openapi(
    postCrmObjects202609DiscountsBatchArchiveRoute,
    postCrmObjects202609DiscountsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609DiscountsBatchCreateRoute,
    postCrmObjects202609DiscountsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609DiscountsBatchReadRoute,
    postCrmObjects202609DiscountsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609DiscountsBatchUpdateRoute,
    postCrmObjects202609DiscountsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609DiscountsBatchUpsertRoute,
    postCrmObjects202609DiscountsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609DiscountsGdprDeleteRoute,
    postCrmObjects202609DiscountsGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609DiscountsMergeRoute, postCrmObjects202609DiscountsMergeRouteHandler)
  .openapi(
    postCrmObjects202609DiscountsSearchRoute,
    postCrmObjects202609DiscountsSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609DiscountsDiscountIdRoute,
    getCrmObjects202609DiscountsDiscountIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609DiscountsDiscountIdRoute,
    deleteCrmObjects202609DiscountsDiscountIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609DiscountsDiscountIdRoute,
    patchCrmObjects202609DiscountsDiscountIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609DiscountsDiscountIdAssociationsToObjectTypeRoute,
    getCrmObjects202609DiscountsDiscountIdAssociationsToObjectTypeRouteHandler,
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
