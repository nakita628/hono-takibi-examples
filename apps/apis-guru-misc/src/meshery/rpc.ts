import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiApplicationIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.application.index.$get(undefined, options))
}

export async function postApiApplicationIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.application.index.$post(undefined, options))
}

export async function postApiApplicationDeploy(
  args: InferRequestType<typeof client.api.application.deploy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application.deploy.$post(args, options))
}

export async function deleteApiApplicationDeploy(options?: ClientRequestOptions) {
  return await parseResponse(client.api.application.deploy.$delete(undefined, options))
}

export async function getApiApplicationId(
  args: InferRequestType<(typeof client.api.application)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application[':id'].$get(args, options))
}

export async function deleteApiApplicationId(
  args: InferRequestType<(typeof client.api.application)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application[':id'].$delete(args, options))
}

export async function getApiFilter(options?: ClientRequestOptions) {
  return await parseResponse(client.api.filter.$get(undefined, options))
}

export async function postApiFilter(options?: ClientRequestOptions) {
  return await parseResponse(client.api.filter.$post(undefined, options))
}

export async function getApiFilterFileId(
  args: InferRequestType<(typeof client.api.filter.file)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.filter.file[':id'].$get(args, options))
}

export async function getApiFilterId(
  args: InferRequestType<(typeof client.api.filter)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.filter[':id'].$get(args, options))
}

export async function deleteApiFilterId(
  args: InferRequestType<(typeof client.api.filter)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.filter[':id'].$delete(args, options))
}

export async function getApiOamType(
  args: InferRequestType<(typeof client.api.oam)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oam[':type'].$get(args, options))
}

export async function postApiOamType(
  args: InferRequestType<(typeof client.api.oam)[':type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oam[':type'].$post(args, options))
}

export async function getApiPattern(options?: ClientRequestOptions) {
  return await parseResponse(client.api.pattern.$get(undefined, options))
}

export async function postApiPattern(options?: ClientRequestOptions) {
  return await parseResponse(client.api.pattern.$post(undefined, options))
}

export async function postApiPatternDeploy(
  args: InferRequestType<typeof client.api.pattern.deploy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pattern.deploy.$post(args, options))
}

export async function deleteApiPatternDeploy(options?: ClientRequestOptions) {
  return await parseResponse(client.api.pattern.deploy.$delete(undefined, options))
}

export async function getApiPatternId(
  args: InferRequestType<(typeof client.api.pattern)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pattern[':id'].$get(args, options))
}

export async function deleteApiPatternId(
  args: InferRequestType<(typeof client.api.pattern)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pattern[':id'].$delete(args, options))
}

export async function getApiPerfProfile(
  args: InferRequestType<typeof client.api.perf.profile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.perf.profile.$get(args, options))
}

export async function getApiPerfProfileResult(options?: ClientRequestOptions) {
  return await parseResponse(client.api.perf.profile.result.$get(undefined, options))
}

export async function getApiPerfProfileResultId(
  args: InferRequestType<(typeof client.api.perf.profile.result)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.perf.profile.result[':id'].$get(args, options))
}

export async function getApiProvider(
  args: InferRequestType<typeof client.api.provider.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.provider.$get(args, options))
}

export async function getApiProviderCapabilities(options?: ClientRequestOptions) {
  return await parseResponse(client.api.provider.capabilities.$get(undefined, options))
}

export async function getApiProviderExtension(options?: ClientRequestOptions) {
  return await parseResponse(client.api.provider.extension.$get(undefined, options))
}

export async function getApiProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.api.providers.$get(undefined, options))
}

export async function postApiSystemAdapterManage(
  args: InferRequestType<typeof client.api.system.adapter.manage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.system.adapter.manage.$post(args, options))
}

export async function deleteApiSystemAdapterManage(
  args: InferRequestType<typeof client.api.system.adapter.manage.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.system.adapter.manage.$delete(args, options))
}

export async function postApiSystemAdapterOperation(
  args: InferRequestType<typeof client.api.system.adapter.operation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.system.adapter.operation.$post(args, options))
}

export async function getApiSystemAdapters(
  args: InferRequestType<typeof client.api.system.adapters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.system.adapters.$get(args, options))
}

export async function postApiSystemKubernetes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.system.kubernetes.$post(undefined, options))
}

export async function deleteApiSystemKubernetes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.system.kubernetes.$delete(undefined, options))
}

export async function postApiSystemKubernetesContexts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.system.kubernetes.contexts.$post(undefined, options))
}

export async function getApiSystemKubernetesPing(options?: ClientRequestOptions) {
  return await parseResponse(client.api.system.kubernetes.ping.$get(undefined, options))
}

export async function getApiSystemMeshsyncGrafana(options?: ClientRequestOptions) {
  return await parseResponse(client.api.system.meshsync.grafana.$get(undefined, options))
}

export async function getApiSystemMeshsyncPrometheus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.system.meshsync.prometheus.$get(undefined, options))
}

export async function getApiSystemSync(options?: ClientRequestOptions) {
  return await parseResponse(client.api.system.sync.$get(undefined, options))
}

export async function getApiSystemVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.api.system.version.$get(undefined, options))
}

export async function postApiTelemetryMetricsBoardImport(options?: ClientRequestOptions) {
  return await parseResponse(client.api.telemetry.metrics.board_import.$post(undefined, options))
}

export async function postApiTelemetryMetricsBoards(
  args: InferRequestType<typeof client.api.telemetry.metrics.boards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.telemetry.metrics.boards.$post(args, options))
}

export async function getApiTelemetryMetricsConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.telemetry.metrics.config.$get(undefined, options))
}

export async function postApiTelemetryMetricsConfig(
  args: InferRequestType<typeof client.api.telemetry.metrics.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.telemetry.metrics.config.$post(args, options))
}

export async function deleteApiTelemetryMetricsConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.telemetry.metrics.config.$delete(undefined, options))
}

export async function getApiTelemetryMetricsGrafanaBoards(
  args: InferRequestType<typeof client.api.telemetry.metrics.grafana.boards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.telemetry.metrics.grafana.boards.$get(args, options))
}

export async function postApiTelemetryMetricsGrafanaBoards(options?: ClientRequestOptions) {
  return await parseResponse(client.api.telemetry.metrics.grafana.boards.$post(undefined, options))
}

export async function getApiTelemetryMetricsGrafanaConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.telemetry.metrics.grafana.config.$get(undefined, options))
}

export async function postApiTelemetryMetricsGrafanaConfig(
  args: InferRequestType<typeof client.api.telemetry.metrics.grafana.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.telemetry.metrics.grafana.config.$post(args, options))
}

export async function deleteApiTelemetryMetricsGrafanaConfig(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.telemetry.metrics.grafana.config.$delete(undefined, options),
  )
}

export async function getApiTelemetryMetricsGrafanaPing(options?: ClientRequestOptions) {
  return await parseResponse(client.api.telemetry.metrics.grafana.ping.$get(undefined, options))
}

export async function getApiTelemetryMetricsGrafanaQuery(options?: ClientRequestOptions) {
  return await parseResponse(client.api.telemetry.metrics.grafana.query.$get(undefined, options))
}

export async function getApiTelemetryMetricsGrafanaScan(options?: ClientRequestOptions) {
  return await parseResponse(client.api.telemetry.metrics.grafana.scan.$get(undefined, options))
}

export async function getApiTelemetryMetricsPing(options?: ClientRequestOptions) {
  return await parseResponse(client.api.telemetry.metrics.ping.$get(undefined, options))
}

export async function getApiTelemetryMetricsQuery(options?: ClientRequestOptions) {
  return await parseResponse(client.api.telemetry.metrics.query.$get(undefined, options))
}

export async function getApiTelemetryMetricsStaticBoard(options?: ClientRequestOptions) {
  return await parseResponse(client.api.telemetry.metrics['static-board'].$get(undefined, options))
}

export async function getApiUserLogin(options?: ClientRequestOptions) {
  return await parseResponse(client.api.user.login.$get(undefined, options))
}

export async function getApiUserLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.api.user.logout.$get(undefined, options))
}

export async function getApiUserPerformanceProfiles(options?: ClientRequestOptions) {
  return await parseResponse(client.api.user.performance.profiles.$get(undefined, options))
}

export async function postApiUserPerformanceProfiles(
  args: InferRequestType<typeof client.api.user.performance.profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.performance.profiles.$post(args, options))
}

export async function getApiUserPerformanceProfilesResults(options?: ClientRequestOptions) {
  return await parseResponse(client.api.user.performance.profiles.results.$get(undefined, options))
}

export async function getApiUserPerformanceProfilesId(
  args: InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.performance.profiles[':id'].$get(args, options))
}

export async function deleteApiUserPerformanceProfilesId(
  args: InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.performance.profiles[':id'].$delete(args, options))
}

export async function getApiUserPerformanceProfilesIdResults(
  args: InferRequestType<(typeof client.api.user.performance.profiles)[':id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.user.performance.profiles[':id'].results.$get(args, options),
  )
}

export async function getApiUserPerformanceProfilesIdRun(
  args: InferRequestType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.performance.profiles[':id'].run.$get(args, options))
}

export async function getApiUserPrefs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.user.prefs.$get(undefined, options))
}

export async function postApiUserPrefs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.user.prefs.$post(undefined, options))
}

export async function getApiUserPrefsPerf(
  args: InferRequestType<typeof client.api.user.prefs.perf.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.prefs.perf.$get(args, options))
}

export async function postApiUserPrefsPerf(
  args: InferRequestType<typeof client.api.user.prefs.perf.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.prefs.perf.$post(args, options))
}

export async function deleteApiUserPrefsPerf(
  args: InferRequestType<typeof client.api.user.prefs.perf.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.prefs.perf.$delete(args, options))
}

export async function getApiUserSchedules(options?: ClientRequestOptions) {
  return await parseResponse(client.api.user.schedules.$get(undefined, options))
}

export async function postApiUserSchedules(options?: ClientRequestOptions) {
  return await parseResponse(client.api.user.schedules.$post(undefined, options))
}

export async function getApiUserSchedulesId(
  args: InferRequestType<(typeof client.api.user.schedules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.schedules[':id'].$get(args, options))
}

export async function deleteApiUserSchedulesId(
  args: InferRequestType<(typeof client.api.user.schedules)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.schedules[':id'].$delete(args, options))
}

export async function getApiUserToken(options?: ClientRequestOptions) {
  return await parseResponse(client.api.user.token.$get(undefined, options))
}

export async function postApiUserToken(options?: ClientRequestOptions) {
  return await parseResponse(client.api.user.token.$post(undefined, options))
}

export async function getProvider(options?: ClientRequestOptions) {
  return await parseResponse(client.provider.$get(undefined, options))
}
