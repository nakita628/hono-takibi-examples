import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV2Nodes(
  args: InferRequestType<typeof client.api.v2.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.nodes.$get(args, options))
}

export async function getApiV3Nodes(
  args: InferRequestType<typeof client.api.v3.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.nodes.$get(args, options))
}

export async function getApiV2Contexts(
  args: InferRequestType<typeof client.api.v2.contexts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.contexts.$get(args, options))
}

export async function getApiV3Contexts(
  args: InferRequestType<typeof client.api.v3.contexts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.contexts.$get(args, options))
}

export async function getApiV2Q(
  args: InferRequestType<typeof client.api.v2.q.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.q.$get(args, options))
}

export async function getApiV3Q(
  args: InferRequestType<typeof client.api.v3.q.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.q.$get(args, options))
}

export async function getApiV1Info(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.info.$get(undefined, options))
}

export async function getApiV1Charts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.charts.$get(undefined, options))
}

export async function getApiV1Chart(
  args: InferRequestType<typeof client.api.v1.chart.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart.$get(args, options))
}

export async function getApiV1Contexts(
  args: InferRequestType<typeof client.api.v1.contexts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.contexts.$get(args, options))
}

export async function getApiV1Context(
  args: InferRequestType<typeof client.api.v1.context.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.context.$get(args, options))
}

export async function getApiV3Context(
  args: InferRequestType<typeof client.api.v3.context.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.context.$get(args, options))
}

export async function getApiV1Config(
  args: InferRequestType<typeof client.api.v1.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.$get(args, options))
}

export async function postApiV1Config(
  args: InferRequestType<typeof client.api.v1.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.config.$post(args, options))
}

export async function getApiV2Data(
  args: InferRequestType<typeof client.api.v2.data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.data.$get(args, options))
}

export async function getApiV3Data(
  args: InferRequestType<typeof client.api.v3.data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.data.$get(args, options))
}

export async function getApiV1Data(
  args: InferRequestType<typeof client.api.v1.data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.data.$get(args, options))
}

export async function getApiV1Allmetrics(
  args: InferRequestType<typeof client.api.v1.allmetrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.allmetrics.$get(args, options))
}

export async function getApiV1BadgeSvg(
  args: InferRequestType<(typeof client.api.v1)['badge.svg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['badge.svg'].$get(args, options))
}

export async function getApiV3BadgeSvg(
  args: InferRequestType<(typeof client.api.v3)['badge.svg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3['badge.svg'].$get(args, options))
}

export async function getApiV3Allmetrics(
  args: InferRequestType<typeof client.api.v3.allmetrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.allmetrics.$get(args, options))
}

export async function getApiV3Alerts(
  args: InferRequestType<typeof client.api.v3.alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.alerts.$get(args, options))
}

export async function getApiV3AlertTransitions(
  args: InferRequestType<typeof client.api.v3.alert_transitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.alert_transitions.$get(args, options))
}

export async function getApiV3AlertConfig(
  args: InferRequestType<typeof client.api.v3.alert_config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.alert_config.$get(args, options))
}

export async function getApiV3Variable(
  args: InferRequestType<typeof client.api.v3.variable.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.variable.$get(args, options))
}

export async function getApiV3Info(
  args: InferRequestType<typeof client.api.v3.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.info.$get(args, options))
}

export async function getApiV3NodeInstances(
  args: InferRequestType<typeof client.api.v3.node_instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.node_instances.$get(args, options))
}

export async function getApiV3StreamPath(
  args: InferRequestType<typeof client.api.v3.stream_path.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.stream_path.$get(args, options))
}

export async function getApiV3Versions(
  args: InferRequestType<typeof client.api.v3.versions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.versions.$get(args, options))
}

export async function getApiV3Progress(
  args: InferRequestType<typeof client.api.v3.progress.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.progress.$get(args, options))
}

export async function getApiV3Function(
  args: InferRequestType<typeof client.api.v3.function.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.function.$get(args, options))
}

export async function postApiV3Function(
  args: InferRequestType<typeof client.api.v3.function.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.function.$post(args, options))
}

export async function getApiV3Functions(
  args: InferRequestType<typeof client.api.v3.functions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.functions.$get(args, options))
}

export async function getApiV3Config(
  args: InferRequestType<typeof client.api.v3.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.$get(args, options))
}

export async function postApiV3Config(
  args: InferRequestType<typeof client.api.v3.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.config.$post(args, options))
}

export async function getApiV3Settings(
  args: InferRequestType<typeof client.api.v3.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.settings.$get(args, options))
}

export async function putApiV3Settings(
  args: InferRequestType<typeof client.api.v3.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.settings.$put(args, options))
}

export async function getApiV3StreamInfo(
  args: InferRequestType<typeof client.api.v3.stream_info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.stream_info.$get(args, options))
}

export async function postApiV3RtcOffer(
  args: InferRequestType<typeof client.api.v3.rtc_offer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.rtc_offer.$post(args, options))
}

export async function getApiV3Claim(
  args: InferRequestType<typeof client.api.v3.claim.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.claim.$get(args, options))
}

export async function getApiV3BearerProtection(
  args: InferRequestType<typeof client.api.v3.bearer_protection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.bearer_protection.$get(args, options))
}

export async function getApiV3BearerGetToken(
  args: InferRequestType<typeof client.api.v3.bearer_get_token.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.bearer_get_token.$get(args, options))
}

export async function getApiV3Me(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.me.$get(undefined, options))
}

export async function getApiV2Weights(
  args: InferRequestType<typeof client.api.v2.weights.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.weights.$get(args, options))
}

export async function getApiV2Alerts(
  args: InferRequestType<typeof client.api.v2.alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.alerts.$get(args, options))
}

export async function getApiV2AlertTransitions(
  args: InferRequestType<typeof client.api.v2.alert_transitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.alert_transitions.$get(args, options))
}

export async function getApiV2AlertConfig(
  args: InferRequestType<typeof client.api.v2.alert_config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.alert_config.$get(args, options))
}

export async function getApiV2Info(
  args: InferRequestType<typeof client.api.v2.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.info.$get(args, options))
}

export async function getApiV2NodeInstances(
  args: InferRequestType<typeof client.api.v2.node_instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.node_instances.$get(args, options))
}

export async function getApiV2Versions(
  args: InferRequestType<typeof client.api.v2.versions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.versions.$get(args, options))
}

export async function getApiV2Progress(
  args: InferRequestType<typeof client.api.v2.progress.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.progress.$get(args, options))
}

export async function getApiV2Functions(
  args: InferRequestType<typeof client.api.v2.functions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.functions.$get(args, options))
}

export async function postApiV2RtcOffer(
  args: InferRequestType<typeof client.api.v2.rtc_offer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rtc_offer.$post(args, options))
}

export async function getApiV2Claim(
  args: InferRequestType<typeof client.api.v2.claim.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.claim.$get(args, options))
}

export async function getApiV2BearerProtection(
  args: InferRequestType<typeof client.api.v2.bearer_protection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.bearer_protection.$get(args, options))
}

export async function getApiV2BearerGetToken(
  args: InferRequestType<typeof client.api.v2.bearer_get_token.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.bearer_get_token.$get(args, options))
}

export async function getApiV3Weights(
  args: InferRequestType<typeof client.api.v3.weights.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.weights.$get(args, options))
}

export async function getApiV1Weights(
  args: InferRequestType<typeof client.api.v1.weights.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.weights.$get(args, options))
}

export async function getApiV1MetricCorrelations(
  args: InferRequestType<typeof client.api.v1.metric_correlations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.metric_correlations.$get(args, options))
}

export async function getApiV1Function(
  args: InferRequestType<typeof client.api.v1.function.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.function.$get(args, options))
}

export async function getApiV1Functions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.functions.$get(undefined, options))
}

export async function getApiV1Alarms(
  args: InferRequestType<typeof client.api.v1.alarms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.alarms.$get(args, options))
}

export async function getApiV1AlarmsValues(
  args: InferRequestType<typeof client.api.v1.alarms_values.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.alarms_values.$get(args, options))
}

export async function getApiV1AlarmLog(
  args: InferRequestType<typeof client.api.v1.alarm_log.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.alarm_log.$get(args, options))
}

export async function getApiV1AlarmCount(
  args: InferRequestType<typeof client.api.v1.alarm_count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.alarm_count.$get(args, options))
}

export async function getApiV1AlarmVariables(
  args: InferRequestType<typeof client.api.v1.alarm_variables.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.alarm_variables.$get(args, options))
}

export async function getApiV1ManageHealth(
  args: InferRequestType<typeof client.api.v1.manage.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.manage.health.$get(args, options))
}

export async function getApiV1Aclk(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.aclk.$get(undefined, options))
}

export async function getApiV1Variable(
  args: InferRequestType<typeof client.api.v1.variable.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.variable.$get(args, options))
}

export async function getApiV1Registry(
  args: InferRequestType<typeof client.api.v1.registry.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.registry.$get(args, options))
}

export async function getApiV1DbengineStats(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.dbengine_stats.$get(undefined, options))
}

export async function getApiV1MlInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.ml_info.$get(undefined, options))
}
