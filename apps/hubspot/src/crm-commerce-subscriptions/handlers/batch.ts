import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609SubscriptionsBatchArchiveRoute,
  postCrmObjects202609SubscriptionsBatchCreateRoute,
  postCrmObjects202609SubscriptionsBatchReadRoute,
  postCrmObjects202609SubscriptionsBatchUpdateRoute,
  postCrmObjects202609SubscriptionsBatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
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
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {},
  )
