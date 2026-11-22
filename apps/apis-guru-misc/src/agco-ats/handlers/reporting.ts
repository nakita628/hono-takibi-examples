import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ReportingBundlesInUpdateGroupRoute,
  getApiV2ReportingBundleStatusSummaryRoute,
  getApiV2ReportingClientInfoRoute,
  getApiV2ReportingCurrentPackagesInUpdateGroupRoute,
  getApiV2ReportingGetClientRoute,
  getApiV2ReportingGetSubscriptionsRoute,
  getApiV2ReportingPackageStatusSummaryRoute,
  getApiV2ReportingRegisteredClientsRoute,
  getApiV2ReportingUpdateGroupsRoute,
  getApiV2ReportingUpdateMetricsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportingHandler = app
  .openapi(getApiV2ReportingBundleStatusSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingBundlesInUpdateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingClientInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingCurrentPackagesInUpdateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingGetClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingGetSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingPackageStatusSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingRegisteredClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingUpdateGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingUpdateMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
