import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609SubscriptionsSubscriptionIdRoute,
  getCrmObjects202609SubscriptionsRoute,
  getCrmObjects202609SubscriptionsSubscriptionIdAssociationsToObjectTypeRoute,
  getCrmObjects202609SubscriptionsSubscriptionIdRoute,
  patchCrmObjects202609SubscriptionsSubscriptionIdRoute,
  postCrmObjects202609SubscriptionsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609SubscriptionsRoute, (c) => {
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
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
