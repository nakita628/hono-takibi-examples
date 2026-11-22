import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectSubscriptionIdRoute,
  getV1ObjectSubscriptionIdRoute,
  getV1SubscriptionsAccountsAccountKeyRoute,
  getV1SubscriptionsSubscriptionKeyRoute,
  getV1SubscriptionsSubscriptionKeyVersionsVersionRoute,
  postV1SubscriptionsPreviewRoute,
  postV1SubscriptionsRoute,
  putV1ObjectSubscriptionIdRoute,
  putV1SubscriptionsSubscriptionKeyCancelRoute,
  putV1SubscriptionsSubscriptionKeyRenewRoute,
  putV1SubscriptionsSubscriptionKeyResumeRoute,
  putV1SubscriptionsSubscriptionKeyRoute,
  putV1SubscriptionsSubscriptionKeySuspendRoute,
  putV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(deleteV1ObjectSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsAccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSubscriptionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionKeyCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionKeyRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionKeyResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionKeySuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSubscriptionKeyVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionNumberVersionsVersionCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
