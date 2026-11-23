import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject(
  args: InferRequestType<
    (typeof client.v1.locations.global)['metricsScopes:listMetricsScopesByMonitoredProject']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.locations.global['metricsScopes:listMetricsScopesByMonitoredProject'].$get(
      args,
      options,
    ),
  )
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function getV1NameLocationLocationPrometheusApiV1LabelLabelValues(
  args: InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['label'][':label']['values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':name'].location[':location'].prometheus.api.v1.label[':label'].values.$get(
      args,
      options,
    ),
  )
}

export async function postV1NameLocationLocationPrometheusApiV1Labels(
  args: InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':name'].location[':location'].prometheus.api.v1.labels.$post(args, options),
  )
}

export async function getV1NameLocationLocationPrometheusApiV1Metadata(
  args: InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':name'].location[':location'].prometheus.api.v1.metadata.$get(args, options),
  )
}

export async function postV1NameLocationLocationPrometheusApiV1Query(
  args: InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':name'].location[':location'].prometheus.api.v1.query.$post(args, options),
  )
}

export async function postV1NameLocationLocationPrometheusApiV1QueryExemplars(
  args: InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query_exemplars']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':name'].location[':location'].prometheus.api.v1.query_exemplars.$post(args, options),
  )
}

export async function postV1NameLocationLocationPrometheusApiV1QueryRange(
  args: InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query_range']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':name'].location[':location'].prometheus.api.v1.query_range.$post(args, options),
  )
}

export async function postV1NameLocationLocationPrometheusApiV1Series(
  args: InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['series']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':name'].location[':location'].prometheus.api.v1.series.$post(args, options),
  )
}

export async function getV1ParentDashboards(
  args: InferRequestType<(typeof client.v1)[':parent']['dashboards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dashboards.$get(args, options))
}

export async function postV1ParentDashboards(
  args: InferRequestType<(typeof client.v1)[':parent']['dashboards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dashboards.$post(args, options))
}

export async function postV1ParentProjects(
  args: InferRequestType<(typeof client.v1)[':parent']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].projects.$post(args, options))
}
