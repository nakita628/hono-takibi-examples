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
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609SubscriptionsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609SubscriptionsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609SubscriptionsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609SubscriptionsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609SubscriptionsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609SubscriptionsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609SubscriptionsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609SubscriptionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609SubscriptionsSubscriptionIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
