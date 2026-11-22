import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2UserAnalyticsReportsBydayRoute,
  postV2UserAnalyticsStoreIdReportsBycategoryRoute,
  postV2UserAnalyticsStoreIdReportsBychannelRoute,
  postV2UserAnalyticsStoreIdReportsBydayRoute,
  postV2UserAnalyticsStoreIdReportsByproductRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analytics__StatisticsHandler = app
  .openapi(postV2UserAnalyticsReportsBydayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdReportsBycategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdReportsBychannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdReportsBydayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdReportsByproductRoute, (c) => {
    throw new Error('Not implemented')
  })
