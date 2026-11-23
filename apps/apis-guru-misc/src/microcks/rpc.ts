import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postArtifactUpload(
  args: InferRequestType<typeof client.artifact.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.artifact.upload.$post(args, options))
}

export async function getExport(
  args: InferRequestType<typeof client.export.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.$get(args, options))
}

export async function getFeaturesConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.features.config.$get(undefined, options))
}

export async function postImport(
  args: InferRequestType<typeof client.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.import.$post(args, options))
}

export async function getJobs(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$get(args, options))
}

export async function postJobs(
  args: InferRequestType<typeof client.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$post(args, options))
}

export async function getJobsCount(options?: ClientRequestOptions) {
  return await parseResponse(client.jobs.count.$get(undefined, options))
}

export async function getJobsId(
  args: InferRequestType<(typeof client.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].$get(args, options))
}

export async function postJobsId(
  args: InferRequestType<(typeof client.jobs)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].$post(args, options))
}

export async function deleteJobsId(
  args: InferRequestType<(typeof client.jobs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].$delete(args, options))
}

export async function putJobsIdActivate(
  args: InferRequestType<(typeof client.jobs)[':id']['activate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].activate.$put(args, options))
}

export async function putJobsIdStart(
  args: InferRequestType<(typeof client.jobs)[':id']['start']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].start.$put(args, options))
}

export async function putJobsIdStop(
  args: InferRequestType<(typeof client.jobs)[':id']['stop']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].stop.$put(args, options))
}

export async function getKeycloakConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.keycloak.config.$get(undefined, options))
}

export async function getMetricsConformanceAggregate(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.conformance.aggregate.$get(undefined, options))
}

export async function getMetricsConformanceServiceServiceId(
  args: InferRequestType<(typeof client.metrics.conformance.service)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.conformance.service[':serviceId'].$get(args, options))
}

export async function getMetricsInvocationsGlobal(
  args: InferRequestType<typeof client.metrics.invocations.global.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.invocations.global.$get(args, options))
}

export async function getMetricsInvocationsGlobalLatest(
  args: InferRequestType<typeof client.metrics.invocations.global.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.invocations.global.latest.$get(args, options))
}

export async function getMetricsInvocationsTop(
  args: InferRequestType<typeof client.metrics.invocations.top.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.invocations.top.$get(args, options))
}

export async function getMetricsInvocationsServiceNameServiceVersion(
  args: InferRequestType<
    (typeof client.metrics.invocations)[':serviceName'][':serviceVersion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metrics.invocations[':serviceName'][':serviceVersion'].$get(args, options),
  )
}

export async function getMetricsTestsLatest(
  args: InferRequestType<typeof client.metrics.tests.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.tests.latest.$get(args, options))
}

export async function getResourcesServiceServiceId(
  args: InferRequestType<(typeof client.resources.service)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.service[':serviceId'].$get(args, options))
}

export async function getResourcesName(
  args: InferRequestType<(typeof client.resources)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':name'].$get(args, options))
}

export async function getSecrets(
  args: InferRequestType<typeof client.secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.$get(args, options))
}

export async function postSecrets(
  args: InferRequestType<typeof client.secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.$post(args, options))
}

export async function getSecretsCount(options?: ClientRequestOptions) {
  return await parseResponse(client.secrets.count.$get(undefined, options))
}

export async function getSecretsId(
  args: InferRequestType<(typeof client.secrets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':id'].$get(args, options))
}

export async function putSecretsId(
  args: InferRequestType<(typeof client.secrets)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':id'].$put(args, options))
}

export async function deleteSecretsId(
  args: InferRequestType<(typeof client.secrets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':id'].$delete(args, options))
}

export async function getServices(
  args: InferRequestType<typeof client.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.$get(args, options))
}

export async function getServicesCount(options?: ClientRequestOptions) {
  return await parseResponse(client.services.count.$get(undefined, options))
}

export async function getServicesLabels(options?: ClientRequestOptions) {
  return await parseResponse(client.services.labels.$get(undefined, options))
}

export async function getServicesSearch(
  args: InferRequestType<typeof client.services.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.search.$get(args, options))
}

export async function getServicesId(
  args: InferRequestType<(typeof client.services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].$get(args, options))
}

export async function deleteServicesId(
  args: InferRequestType<(typeof client.services)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].$delete(args, options))
}

export async function putServicesIdMetadata(
  args: InferRequestType<(typeof client.services)[':id']['metadata']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].metadata.$put(args, options))
}

export async function putServicesIdOperation(
  args: InferRequestType<(typeof client.services)[':id']['operation']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].operation.$put(args, options))
}

export async function postTests(
  args: InferRequestType<typeof client.tests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tests.$post(args, options))
}

export async function getTestsServiceServiceId(
  args: InferRequestType<(typeof client.tests.service)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tests.service[':serviceId'].$get(args, options))
}

export async function getTestsServiceServiceIdCount(
  args: InferRequestType<(typeof client.tests.service)[':serviceId']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tests.service[':serviceId'].count.$get(args, options))
}

export async function getTestsId(
  args: InferRequestType<(typeof client.tests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tests[':id'].$get(args, options))
}

export async function getTestsIdEventsTestCaseId(
  args: InferRequestType<(typeof client.tests)[':id']['events'][':testCaseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tests[':id'].events[':testCaseId'].$get(args, options))
}

export async function getTestsIdMessagesTestCaseId(
  args: InferRequestType<(typeof client.tests)[':id']['messages'][':testCaseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tests[':id'].messages[':testCaseId'].$get(args, options))
}

export async function postTestsIdTestCaseResult(
  args: InferRequestType<(typeof client.tests)[':id']['testCaseResult']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tests[':id'].testCaseResult.$post(args, options))
}
