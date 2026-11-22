import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2MetricsDerivedMetricsMetricNameRoute,
  deleteApiV2MetricsHistoricalMetricsConfigurationsMetricNameRoute,
  deleteApiV2MetricsMetricNameTagIndexingRuleExemptionsRoute,
  deleteApiV2MetricsMetricNameTagsRoute,
  deleteApiV2MetricsTagIndexingRulesIdRoute,
  getApiV2MetricsDerivedMetricsMetricNameRoute,
  getApiV2MetricsHistoricalMetricsConfigurationsMetricNameRoute,
  getApiV2MetricsListTagIndexingRuleExemptionsRoute,
  getApiV2MetricsMetricNameActiveConfigurationsRoute,
  getApiV2MetricsMetricNameAllTagsRoute,
  getApiV2MetricsMetricNameAssetsRoute,
  getApiV2MetricsMetricNameEstimateRoute,
  getApiV2MetricsMetricNameTagCardinalitiesRoute,
  getApiV2MetricsMetricNameTagIndexingRuleExemptionsRoute,
  getApiV2MetricsMetricNameTagIndexingRulesRoute,
  getApiV2MetricsMetricNameTagsRoute,
  getApiV2MetricsMetricNameVolumesRoute,
  getApiV2MetricsRoute,
  getApiV2MetricsTagIndexingRulesIdRoute,
  getApiV2MetricsTagIndexingRulesRoute,
  patchApiV2MetricsMetricNameTagsRoute,
  postApiV2MetricsDerivedMetricsRoute,
  postApiV2MetricsHistoricalMetricsConfigurationsRoute,
  postApiV2MetricsMetricNameTagIndexingRuleExemptionsRoute,
  postApiV2MetricsMetricNameTagsRoute,
  postApiV2MetricsTagIndexingRulesOrderRoute,
  postApiV2MetricsTagIndexingRulesRoute,
  postApiV2QueryScalarRoute,
  postApiV2QueryTimeseriesRoute,
  postApiV2SeriesRoute,
  putApiV2MetricsDerivedMetricsMetricNameRoute,
  putApiV2MetricsMetricNameTagIndexingRuleExemptionsRoute,
  putApiV2MetricsTagIndexingRulesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(getApiV2MetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MetricsDerivedMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MetricsDerivedMetricsMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsDerivedMetricsMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2MetricsDerivedMetricsMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MetricsHistoricalMetricsConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MetricsHistoricalMetricsConfigurationsMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsHistoricalMetricsConfigurationsMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsListTagIndexingRuleExemptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsTagIndexingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MetricsTagIndexingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MetricsTagIndexingRulesOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MetricsTagIndexingRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsTagIndexingRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2MetricsTagIndexingRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsMetricNameActiveConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsMetricNameAllTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsMetricNameAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsMetricNameEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsMetricNameTagCardinalitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MetricsMetricNameTagIndexingRuleExemptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsMetricNameTagIndexingRuleExemptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MetricsMetricNameTagIndexingRuleExemptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2MetricsMetricNameTagIndexingRuleExemptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsMetricNameTagIndexingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MetricsMetricNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsMetricNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2MetricsMetricNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MetricsMetricNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsMetricNameVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2QueryScalarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2QueryTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
