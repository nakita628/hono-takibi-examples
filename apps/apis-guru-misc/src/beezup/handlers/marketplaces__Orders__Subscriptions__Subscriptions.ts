import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UserMarketplacesOrdersSubscriptionsIdRoute,
  getV2UserMarketplacesOrdersSubscriptionsIdReportingRoute,
  getV2UserMarketplacesOrdersSubscriptionsIdRoute,
  getV2UserMarketplacesOrdersSubscriptionsIndexRoute,
  postV2UserMarketplacesOrdersSubscriptionsIdActivateRoute,
  postV2UserMarketplacesOrdersSubscriptionsIdDeactivateRoute,
  postV2UserMarketplacesOrdersSubscriptionsIdRetryRoute,
  postV2UserMarketplacesOrdersSubscriptionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaces__Orders__Subscriptions__SubscriptionsHandler = app
  .openapi(getV2UserMarketplacesOrdersSubscriptionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserMarketplacesOrdersSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersSubscriptionsIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersSubscriptionsIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersSubscriptionsIdReportingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersSubscriptionsIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
