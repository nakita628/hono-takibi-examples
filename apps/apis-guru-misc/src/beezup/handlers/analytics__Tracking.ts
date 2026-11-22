import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserAnalyticsStoreIdTrackingClicksRoute,
  getV2UserAnalyticsStoreIdTrackingExternalordersRoute,
  getV2UserAnalyticsStoreIdTrackingOrdersRoute,
  getV2UserAnalyticsStoreIdTrackingStatusRoute,
  getV2UserAnalyticsTrackingStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analytics__TrackingHandler = app
  .openapi(getV2UserAnalyticsTrackingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdTrackingClicksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdTrackingExternalordersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdTrackingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdTrackingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
