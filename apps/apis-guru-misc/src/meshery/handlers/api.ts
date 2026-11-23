import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiApplicationDeployRoute,
  deleteApiApplicationIdRoute,
  deleteApiFilterIdRoute,
  deleteApiPatternDeployRoute,
  deleteApiPatternIdRoute,
  deleteApiSystemAdapterManageRoute,
  deleteApiSystemKubernetesRoute,
  deleteApiTelemetryMetricsConfigRoute,
  deleteApiTelemetryMetricsGrafanaConfigRoute,
  deleteApiUserPerformanceProfilesIdRoute,
  deleteApiUserPrefsPerfRoute,
  deleteApiUserSchedulesIdRoute,
  getApiApplicationIdRoute,
  getApiApplicationIndexRoute,
  getApiFilterFileIdRoute,
  getApiFilterIdRoute,
  getApiFilterRoute,
  getApiOamTypeRoute,
  getApiPatternIdRoute,
  getApiPatternRoute,
  getApiPerfProfileResultIdRoute,
  getApiPerfProfileResultRoute,
  getApiPerfProfileRoute,
  getApiProviderCapabilitiesRoute,
  getApiProviderExtensionRoute,
  getApiProviderRoute,
  getApiProvidersRoute,
  getApiSystemAdaptersRoute,
  getApiSystemKubernetesPingRoute,
  getApiSystemMeshsyncGrafanaRoute,
  getApiSystemMeshsyncPrometheusRoute,
  getApiSystemSyncRoute,
  getApiSystemVersionRoute,
  getApiTelemetryMetricsConfigRoute,
  getApiTelemetryMetricsGrafanaBoardsRoute,
  getApiTelemetryMetricsGrafanaConfigRoute,
  getApiTelemetryMetricsGrafanaPingRoute,
  getApiTelemetryMetricsGrafanaQueryRoute,
  getApiTelemetryMetricsGrafanaScanRoute,
  getApiTelemetryMetricsPingRoute,
  getApiTelemetryMetricsQueryRoute,
  getApiTelemetryMetricsStaticBoardRoute,
  getApiUserLoginRoute,
  getApiUserLogoutRoute,
  getApiUserPerformanceProfilesIdResultsRoute,
  getApiUserPerformanceProfilesIdRoute,
  getApiUserPerformanceProfilesIdRunRoute,
  getApiUserPerformanceProfilesResultsRoute,
  getApiUserPerformanceProfilesRoute,
  getApiUserPrefsPerfRoute,
  getApiUserPrefsRoute,
  getApiUserSchedulesIdRoute,
  getApiUserSchedulesRoute,
  getApiUserTokenRoute,
  postApiApplicationDeployRoute,
  postApiApplicationIndexRoute,
  postApiFilterRoute,
  postApiOamTypeRoute,
  postApiPatternDeployRoute,
  postApiPatternRoute,
  postApiSystemAdapterManageRoute,
  postApiSystemAdapterOperationRoute,
  postApiSystemKubernetesContextsRoute,
  postApiSystemKubernetesRoute,
  postApiTelemetryMetricsBoardImportRoute,
  postApiTelemetryMetricsBoardsRoute,
  postApiTelemetryMetricsConfigRoute,
  postApiTelemetryMetricsGrafanaBoardsRoute,
  postApiTelemetryMetricsGrafanaConfigRoute,
  postApiUserPerformanceProfilesRoute,
  postApiUserPrefsPerfRoute,
  postApiUserPrefsRoute,
  postApiUserSchedulesRoute,
  postApiUserTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiApplicationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplicationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiApplicationDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplicationDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFilterFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOamTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOamTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPatternDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatternDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPerfProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPerfProfileResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPerfProfileResultIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProviderCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProviderExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSystemAdapterManageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemAdapterManageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemAdapterOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemAdaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSystemKubernetesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemKubernetesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemKubernetesContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemKubernetesPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemMeshsyncGrafanaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemMeshsyncPrometheusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTelemetryMetricsBoardImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTelemetryMetricsBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTelemetryMetricsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTelemetryMetricsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsGrafanaBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTelemetryMetricsGrafanaBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTelemetryMetricsGrafanaConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsGrafanaConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTelemetryMetricsGrafanaConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsGrafanaPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsGrafanaQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsGrafanaScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsStaticBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPerformanceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserPerformanceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPerformanceProfilesResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserPerformanceProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPerformanceProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPerformanceProfilesIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPerformanceProfilesIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserPrefsPerfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPrefsPerfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserPrefsPerfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
