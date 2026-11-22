import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute,
  getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute,
  getV2UserAnalyticsStoreIdReportsFiltersRoute,
  putV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analytics__ReportsHandler = app
  .openapi(getV2UserAnalyticsStoreIdReportsFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
