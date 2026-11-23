import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609SubscriptionsSubscriptionIdRoute,
  getCrmObjects202609SubscriptionsRoute,
  getCrmObjects202609SubscriptionsSubscriptionIdAssociationsToObjectTypeRoute,
  getCrmObjects202609SubscriptionsSubscriptionIdRoute,
  patchCrmObjects202609SubscriptionsSubscriptionIdRoute,
  postCrmObjects202609SubscriptionsBatchArchiveRoute,
  postCrmObjects202609SubscriptionsBatchCreateRoute,
  postCrmObjects202609SubscriptionsBatchReadRoute,
  postCrmObjects202609SubscriptionsBatchUpdateRoute,
  postCrmObjects202609SubscriptionsBatchUpsertRoute,
  postCrmObjects202609SubscriptionsGdprDeleteRoute,
  postCrmObjects202609SubscriptionsMergeRoute,
  postCrmObjects202609SubscriptionsRoute,
  postCrmObjects202609SubscriptionsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609SubscriptionsSubscriptionIdRouteHandler,
  getCrmObjects202609SubscriptionsRouteHandler,
  getCrmObjects202609SubscriptionsSubscriptionIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609SubscriptionsSubscriptionIdRouteHandler,
  patchCrmObjects202609SubscriptionsSubscriptionIdRouteHandler,
  postCrmObjects202609SubscriptionsBatchArchiveRouteHandler,
  postCrmObjects202609SubscriptionsBatchCreateRouteHandler,
  postCrmObjects202609SubscriptionsBatchReadRouteHandler,
  postCrmObjects202609SubscriptionsBatchUpdateRouteHandler,
  postCrmObjects202609SubscriptionsBatchUpsertRouteHandler,
  postCrmObjects202609SubscriptionsGdprDeleteRouteHandler,
  postCrmObjects202609SubscriptionsMergeRouteHandler,
  postCrmObjects202609SubscriptionsRouteHandler,
  postCrmObjects202609SubscriptionsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609SubscriptionsRoute, getCrmObjects202609SubscriptionsRouteHandler)
  .openapi(postCrmObjects202609SubscriptionsRoute, postCrmObjects202609SubscriptionsRouteHandler)
  .openapi(
    postCrmObjects202609SubscriptionsBatchArchiveRoute,
    postCrmObjects202609SubscriptionsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609SubscriptionsBatchCreateRoute,
    postCrmObjects202609SubscriptionsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609SubscriptionsBatchReadRoute,
    postCrmObjects202609SubscriptionsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609SubscriptionsBatchUpdateRoute,
    postCrmObjects202609SubscriptionsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609SubscriptionsBatchUpsertRoute,
    postCrmObjects202609SubscriptionsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609SubscriptionsGdprDeleteRoute,
    postCrmObjects202609SubscriptionsGdprDeleteRouteHandler,
  )
  .openapi(
    postCrmObjects202609SubscriptionsMergeRoute,
    postCrmObjects202609SubscriptionsMergeRouteHandler,
  )
  .openapi(
    postCrmObjects202609SubscriptionsSearchRoute,
    postCrmObjects202609SubscriptionsSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609SubscriptionsSubscriptionIdRoute,
    getCrmObjects202609SubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609SubscriptionsSubscriptionIdRoute,
    deleteCrmObjects202609SubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609SubscriptionsSubscriptionIdRoute,
    patchCrmObjects202609SubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609SubscriptionsSubscriptionIdAssociationsToObjectTypeRoute,
    getCrmObjects202609SubscriptionsSubscriptionIdAssociationsToObjectTypeRouteHandler,
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
