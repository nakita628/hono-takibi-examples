import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiSubscriptionUsagesUsageIdRoute,
  getApiSubscriptionPlansRoute,
  getApiSubscriptionPlansSubscriptionPlanIdRoute,
  getApiSubscriptionsRoute,
  getApiSubscriptionsSubscriptionIdCyclesCycleIdRoute,
  getApiSubscriptionsSubscriptionIdCyclesRoute,
  getApiSubscriptionsSubscriptionIdRoute,
  getApiSubscriptionUsagesRoute,
  getApiSubscriptionUsagesUsageIdRoute,
  patchApiSubscriptionsSubscriptionIdRoute,
  patchApiSubscriptionUsagesUsageIdRoute,
  postApiSubscriptionPlansRoute,
  postApiSubscriptionsRoute,
  postApiSubscriptionsSubscriptionIdCancelRoute,
  postApiSubscriptionsSubscriptionIdChangePlanRoute,
  postApiSubscriptionsSubscriptionIdChangeRenewalDateRoute,
  postApiSubscriptionUsagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(postApiSubscriptionPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionPlansSubscriptionPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSubscriptionsSubscriptionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSubscriptionsSubscriptionIdChangePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSubscriptionsSubscriptionIdChangeRenewalDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionsSubscriptionIdCyclesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionsSubscriptionIdCyclesCycleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSubscriptionUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionUsagesUsageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSubscriptionUsagesUsageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSubscriptionUsagesUsageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
