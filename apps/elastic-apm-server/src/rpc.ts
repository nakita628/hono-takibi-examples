import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function post(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$post(undefined, options))
}

export async function getConfigV1Agents(
  args: InferRequestType<typeof client.config.v1.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.v1.agents.$get(args, options))
}

export async function postConfigV1Agents(
  args: InferRequestType<typeof client.config.v1.agents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.v1.agents.$post(args, options))
}

export async function getConfigV1RumAgents(options?: ClientRequestOptions) {
  return await parseResponse(client.config.v1.rum.agents.$get(undefined, options))
}

export async function postIntakeV2Events(
  args: InferRequestType<typeof client.intake.v2.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intake.v2.events.$post(args, options))
}

export async function postIntakeV2RumEvents(
  args: InferRequestType<typeof client.intake.v2.rum.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intake.v2.rum.events.$post(args, options))
}

export async function postIntakeV3RumEvents(
  args: InferRequestType<typeof client.intake.v3.rum.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intake.v3.rum.events.$post(args, options))
}

export async function postOpentelemetryProtoCollectorMetricsV1MetricsServiceExport(
  args: InferRequestType<
    (typeof client)['opentelemetry.proto.collector.metrics.v1.MetricsService']['Export']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['opentelemetry.proto.collector.metrics.v1.MetricsService'].Export.$post(args, options),
  )
}

export async function postOpentelemetryProtoCollectorTraceV1TraceServiceExport(
  args: InferRequestType<
    (typeof client)['opentelemetry.proto.collector.trace.v1.TraceService']['Export']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['opentelemetry.proto.collector.trace.v1.TraceService'].Export.$post(args, options),
  )
}

export async function postOpentelemetryProtoCollectorLogsV1LogsServiceExport(
  args: InferRequestType<
    (typeof client)['opentelemetry.proto.collector.logs.v1.LogsService']['Export']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['opentelemetry.proto.collector.logs.v1.LogsService'].Export.$post(args, options),
  )
}

export async function postV1Metrics(
  args: InferRequestType<typeof client.v1.metrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.metrics.$post(args, options))
}

export async function postV1Traces(
  args: InferRequestType<typeof client.v1.traces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.traces.$post(args, options))
}

export async function postV1Logs(
  args: InferRequestType<typeof client.v1.logs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.logs.$post(args, options))
}
