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
  getProviderRoute,
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
} from './routes'
import {
  deleteApiApplicationDeployRouteHandler,
  deleteApiApplicationIdRouteHandler,
  deleteApiFilterIdRouteHandler,
  deleteApiPatternDeployRouteHandler,
  deleteApiPatternIdRouteHandler,
  deleteApiSystemAdapterManageRouteHandler,
  deleteApiSystemKubernetesRouteHandler,
  deleteApiTelemetryMetricsConfigRouteHandler,
  deleteApiTelemetryMetricsGrafanaConfigRouteHandler,
  deleteApiUserPerformanceProfilesIdRouteHandler,
  deleteApiUserPrefsPerfRouteHandler,
  deleteApiUserSchedulesIdRouteHandler,
  getApiApplicationIdRouteHandler,
  getApiApplicationIndexRouteHandler,
  getApiFilterFileIdRouteHandler,
  getApiFilterIdRouteHandler,
  getApiFilterRouteHandler,
  getApiOamTypeRouteHandler,
  getApiPatternIdRouteHandler,
  getApiPatternRouteHandler,
  getApiPerfProfileResultIdRouteHandler,
  getApiPerfProfileResultRouteHandler,
  getApiPerfProfileRouteHandler,
  getApiProviderCapabilitiesRouteHandler,
  getApiProviderExtensionRouteHandler,
  getApiProviderRouteHandler,
  getApiProvidersRouteHandler,
  getApiSystemAdaptersRouteHandler,
  getApiSystemKubernetesPingRouteHandler,
  getApiSystemMeshsyncGrafanaRouteHandler,
  getApiSystemMeshsyncPrometheusRouteHandler,
  getApiSystemSyncRouteHandler,
  getApiSystemVersionRouteHandler,
  getApiTelemetryMetricsConfigRouteHandler,
  getApiTelemetryMetricsGrafanaBoardsRouteHandler,
  getApiTelemetryMetricsGrafanaConfigRouteHandler,
  getApiTelemetryMetricsGrafanaPingRouteHandler,
  getApiTelemetryMetricsGrafanaQueryRouteHandler,
  getApiTelemetryMetricsGrafanaScanRouteHandler,
  getApiTelemetryMetricsPingRouteHandler,
  getApiTelemetryMetricsQueryRouteHandler,
  getApiTelemetryMetricsStaticBoardRouteHandler,
  getApiUserLoginRouteHandler,
  getApiUserLogoutRouteHandler,
  getApiUserPerformanceProfilesIdResultsRouteHandler,
  getApiUserPerformanceProfilesIdRouteHandler,
  getApiUserPerformanceProfilesIdRunRouteHandler,
  getApiUserPerformanceProfilesResultsRouteHandler,
  getApiUserPerformanceProfilesRouteHandler,
  getApiUserPrefsPerfRouteHandler,
  getApiUserPrefsRouteHandler,
  getApiUserSchedulesIdRouteHandler,
  getApiUserSchedulesRouteHandler,
  getApiUserTokenRouteHandler,
  getProviderRouteHandler,
  postApiApplicationDeployRouteHandler,
  postApiApplicationIndexRouteHandler,
  postApiFilterRouteHandler,
  postApiOamTypeRouteHandler,
  postApiPatternDeployRouteHandler,
  postApiPatternRouteHandler,
  postApiSystemAdapterManageRouteHandler,
  postApiSystemAdapterOperationRouteHandler,
  postApiSystemKubernetesContextsRouteHandler,
  postApiSystemKubernetesRouteHandler,
  postApiTelemetryMetricsBoardImportRouteHandler,
  postApiTelemetryMetricsBoardsRouteHandler,
  postApiTelemetryMetricsConfigRouteHandler,
  postApiTelemetryMetricsGrafanaBoardsRouteHandler,
  postApiTelemetryMetricsGrafanaConfigRouteHandler,
  postApiUserPerformanceProfilesRouteHandler,
  postApiUserPrefsPerfRouteHandler,
  postApiUserPrefsRouteHandler,
  postApiUserSchedulesRouteHandler,
  postApiUserTokenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiApplicationIndexRoute, getApiApplicationIndexRouteHandler)
  .openapi(postApiApplicationIndexRoute, postApiApplicationIndexRouteHandler)
  .openapi(deleteApiApplicationDeployRoute, deleteApiApplicationDeployRouteHandler)
  .openapi(postApiApplicationDeployRoute, postApiApplicationDeployRouteHandler)
  .openapi(deleteApiApplicationIdRoute, deleteApiApplicationIdRouteHandler)
  .openapi(getApiApplicationIdRoute, getApiApplicationIdRouteHandler)
  .openapi(getApiFilterRoute, getApiFilterRouteHandler)
  .openapi(postApiFilterRoute, postApiFilterRouteHandler)
  .openapi(getApiFilterFileIdRoute, getApiFilterFileIdRouteHandler)
  .openapi(deleteApiFilterIdRoute, deleteApiFilterIdRouteHandler)
  .openapi(getApiFilterIdRoute, getApiFilterIdRouteHandler)
  .openapi(getApiOamTypeRoute, getApiOamTypeRouteHandler)
  .openapi(postApiOamTypeRoute, postApiOamTypeRouteHandler)
  .openapi(getApiPatternRoute, getApiPatternRouteHandler)
  .openapi(postApiPatternRoute, postApiPatternRouteHandler)
  .openapi(deleteApiPatternDeployRoute, deleteApiPatternDeployRouteHandler)
  .openapi(postApiPatternDeployRoute, postApiPatternDeployRouteHandler)
  .openapi(deleteApiPatternIdRoute, deleteApiPatternIdRouteHandler)
  .openapi(getApiPatternIdRoute, getApiPatternIdRouteHandler)
  .openapi(getApiPerfProfileRoute, getApiPerfProfileRouteHandler)
  .openapi(getApiPerfProfileResultRoute, getApiPerfProfileResultRouteHandler)
  .openapi(getApiPerfProfileResultIdRoute, getApiPerfProfileResultIdRouteHandler)
  .openapi(getApiProviderRoute, getApiProviderRouteHandler)
  .openapi(getApiProviderCapabilitiesRoute, getApiProviderCapabilitiesRouteHandler)
  .openapi(getApiProviderExtensionRoute, getApiProviderExtensionRouteHandler)
  .openapi(getApiProvidersRoute, getApiProvidersRouteHandler)
  .openapi(deleteApiSystemAdapterManageRoute, deleteApiSystemAdapterManageRouteHandler)
  .openapi(postApiSystemAdapterManageRoute, postApiSystemAdapterManageRouteHandler)
  .openapi(postApiSystemAdapterOperationRoute, postApiSystemAdapterOperationRouteHandler)
  .openapi(getApiSystemAdaptersRoute, getApiSystemAdaptersRouteHandler)
  .openapi(deleteApiSystemKubernetesRoute, deleteApiSystemKubernetesRouteHandler)
  .openapi(postApiSystemKubernetesRoute, postApiSystemKubernetesRouteHandler)
  .openapi(postApiSystemKubernetesContextsRoute, postApiSystemKubernetesContextsRouteHandler)
  .openapi(getApiSystemKubernetesPingRoute, getApiSystemKubernetesPingRouteHandler)
  .openapi(getApiSystemMeshsyncGrafanaRoute, getApiSystemMeshsyncGrafanaRouteHandler)
  .openapi(getApiSystemMeshsyncPrometheusRoute, getApiSystemMeshsyncPrometheusRouteHandler)
  .openapi(getApiSystemSyncRoute, getApiSystemSyncRouteHandler)
  .openapi(getApiSystemVersionRoute, getApiSystemVersionRouteHandler)
  .openapi(postApiTelemetryMetricsBoardImportRoute, postApiTelemetryMetricsBoardImportRouteHandler)
  .openapi(postApiTelemetryMetricsBoardsRoute, postApiTelemetryMetricsBoardsRouteHandler)
  .openapi(deleteApiTelemetryMetricsConfigRoute, deleteApiTelemetryMetricsConfigRouteHandler)
  .openapi(getApiTelemetryMetricsConfigRoute, getApiTelemetryMetricsConfigRouteHandler)
  .openapi(postApiTelemetryMetricsConfigRoute, postApiTelemetryMetricsConfigRouteHandler)
  .openapi(
    getApiTelemetryMetricsGrafanaBoardsRoute,
    getApiTelemetryMetricsGrafanaBoardsRouteHandler,
  )
  .openapi(
    postApiTelemetryMetricsGrafanaBoardsRoute,
    postApiTelemetryMetricsGrafanaBoardsRouteHandler,
  )
  .openapi(
    deleteApiTelemetryMetricsGrafanaConfigRoute,
    deleteApiTelemetryMetricsGrafanaConfigRouteHandler,
  )
  .openapi(
    getApiTelemetryMetricsGrafanaConfigRoute,
    getApiTelemetryMetricsGrafanaConfigRouteHandler,
  )
  .openapi(
    postApiTelemetryMetricsGrafanaConfigRoute,
    postApiTelemetryMetricsGrafanaConfigRouteHandler,
  )
  .openapi(getApiTelemetryMetricsGrafanaPingRoute, getApiTelemetryMetricsGrafanaPingRouteHandler)
  .openapi(getApiTelemetryMetricsGrafanaQueryRoute, getApiTelemetryMetricsGrafanaQueryRouteHandler)
  .openapi(getApiTelemetryMetricsGrafanaScanRoute, getApiTelemetryMetricsGrafanaScanRouteHandler)
  .openapi(getApiTelemetryMetricsPingRoute, getApiTelemetryMetricsPingRouteHandler)
  .openapi(getApiTelemetryMetricsQueryRoute, getApiTelemetryMetricsQueryRouteHandler)
  .openapi(getApiTelemetryMetricsStaticBoardRoute, getApiTelemetryMetricsStaticBoardRouteHandler)
  .openapi(getApiUserLoginRoute, getApiUserLoginRouteHandler)
  .openapi(getApiUserLogoutRoute, getApiUserLogoutRouteHandler)
  .openapi(getApiUserPerformanceProfilesRoute, getApiUserPerformanceProfilesRouteHandler)
  .openapi(postApiUserPerformanceProfilesRoute, postApiUserPerformanceProfilesRouteHandler)
  .openapi(
    getApiUserPerformanceProfilesResultsRoute,
    getApiUserPerformanceProfilesResultsRouteHandler,
  )
  .openapi(deleteApiUserPerformanceProfilesIdRoute, deleteApiUserPerformanceProfilesIdRouteHandler)
  .openapi(getApiUserPerformanceProfilesIdRoute, getApiUserPerformanceProfilesIdRouteHandler)
  .openapi(
    getApiUserPerformanceProfilesIdResultsRoute,
    getApiUserPerformanceProfilesIdResultsRouteHandler,
  )
  .openapi(getApiUserPerformanceProfilesIdRunRoute, getApiUserPerformanceProfilesIdRunRouteHandler)
  .openapi(getApiUserPrefsRoute, getApiUserPrefsRouteHandler)
  .openapi(postApiUserPrefsRoute, postApiUserPrefsRouteHandler)
  .openapi(deleteApiUserPrefsPerfRoute, deleteApiUserPrefsPerfRouteHandler)
  .openapi(getApiUserPrefsPerfRoute, getApiUserPrefsPerfRouteHandler)
  .openapi(postApiUserPrefsPerfRoute, postApiUserPrefsPerfRouteHandler)
  .openapi(getApiUserSchedulesRoute, getApiUserSchedulesRouteHandler)
  .openapi(postApiUserSchedulesRoute, postApiUserSchedulesRouteHandler)
  .openapi(deleteApiUserSchedulesIdRoute, deleteApiUserSchedulesIdRouteHandler)
  .openapi(getApiUserSchedulesIdRoute, getApiUserSchedulesIdRouteHandler)
  .openapi(getApiUserTokenRoute, getApiUserTokenRouteHandler)
  .openapi(postApiUserTokenRoute, postApiUserTokenRouteHandler)
  .openapi(getProviderRoute, getProviderRouteHandler)

export default app
