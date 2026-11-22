import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegacyReportingUsageReportsNumberLookupId2Route,
  deleteLegacyReportingUsageReportsNumberLookupIdRoute,
  getLegacyReportingUsageReportsNumberLookup2Route,
  getLegacyReportingUsageReportsNumberLookupId2Route,
  getLegacyReportingUsageReportsNumberLookupIdRoute,
  getLegacyReportingUsageReportsNumberLookupRoute,
  postLegacyReportingUsageReportsNumberLookup2Route,
  postLegacyReportingUsageReportsNumberLookupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const telcoDataUsageReportsHandler = app
  .openapi(getLegacyReportingUsageReportsNumberLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegacyReportingUsageReportsNumberLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegacyReportingUsageReportsNumberLookupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingUsageReportsNumberLookupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingUsageReportsNumberLookup2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegacyReportingUsageReportsNumberLookup2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegacyReportingUsageReportsNumberLookupId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingUsageReportsNumberLookupId2Route, (c) => {
    throw new Error('Not implemented')
  })
