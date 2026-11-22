import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminMetricsApplicationsAppNameRoute,
  getApiAdminClientMetricsFeaturesNameRawRoute,
  getApiAdminClientMetricsFeaturesNameRoute,
  getApiAdminMetricsApplicationsAppNameOverviewRoute,
  getApiAdminMetricsApplicationsAppNameRoute,
  getApiAdminMetricsApplicationsRoute,
  getApiAdminMetricsConnectionRoute,
  getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentRoute,
  getApiAdminMetricsRequestRoute,
  getApiAdminMetricsRpsRoute,
  getApiAdminMetricsSdksOutdatedRoute,
  getApiAdminMetricsTrafficRoute,
  postApiAdminMetricsApplicationsAppNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(getApiAdminMetricsRpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsTrafficRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminMetricsApplicationsAppNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminMetricsApplicationsAppNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsApplicationsAppNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsApplicationsAppNameOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMetricsSdksOutdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminClientMetricsFeaturesNameRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminClientMetricsFeaturesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
