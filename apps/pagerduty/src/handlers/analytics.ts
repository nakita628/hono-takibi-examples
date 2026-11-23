import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnalyticsRawIncidentsIdResponsesRoute,
  getAnalyticsRawIncidentsIdRoute,
  postAnalyticsMetricsIncidentsAllRoute,
  postAnalyticsMetricsIncidentsEscalationPoliciesAllRoute,
  postAnalyticsMetricsIncidentsEscalationPoliciesRoute,
  postAnalyticsMetricsIncidentsServicesAllRoute,
  postAnalyticsMetricsIncidentsServicesRoute,
  postAnalyticsMetricsIncidentsTeamsAllRoute,
  postAnalyticsMetricsIncidentsTeamsRoute,
  postAnalyticsMetricsPdAdvanceUsageFeaturesRoute,
  postAnalyticsMetricsRespondersAllRoute,
  postAnalyticsMetricsRespondersTeamsRoute,
  postAnalyticsMetricsUsersAllRoute,
  postAnalyticsRawIncidentsRoute,
  postAnalyticsRawRespondersResponderIdIncidentsRoute,
  postAnalyticsRawUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app
  .openapi(postAnalyticsMetricsIncidentsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsMetricsIncidentsEscalationPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsMetricsIncidentsEscalationPoliciesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsMetricsIncidentsServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsMetricsIncidentsServicesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsMetricsIncidentsTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsMetricsIncidentsTeamsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsMetricsPdAdvanceUsageFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsMetricsRespondersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsMetricsRespondersTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsMetricsUsersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsRawIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsRawIncidentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsRawIncidentsIdResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsRawRespondersResponderIdIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsRawUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
