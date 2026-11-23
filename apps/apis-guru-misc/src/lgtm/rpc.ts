import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getAnalysesAnalysisId(
  args: InferRequestType<(typeof client.analyses)[':analysis-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyses[':analysis-id'].$get(args, options))
}

export async function getAnalysesAnalysisIdAlerts(
  args: InferRequestType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyses[':analysis-id'].alerts.$get(args, options))
}

export async function postAnalysesProjectId(
  args: InferRequestType<(typeof client.analyses)[':project-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyses[':project-id'].$post(args, options))
}

export async function getAnalysesProjectIdCommitsCommitId(
  args: InferRequestType<(typeof client.analyses)[':project-id']['commits'][':commit-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':project-id'].commits[':commit-id'].$get(args, options),
  )
}

export async function postCodereviewsProjectId(
  args: InferRequestType<(typeof client.codereviews)[':project-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.codereviews[':project-id'].$post(args, options))
}

export async function getCodereviewsReviewId(
  args: InferRequestType<(typeof client.codereviews)[':review-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.codereviews[':review-id'].$get(args, options))
}

export async function getIssuesProjectIdAlertKey(
  args: InferRequestType<(typeof client.issues)[':project-id'][':alert-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issues[':project-id'][':alert-key'].$get(args, options))
}

export async function getOpenapi(options?: ClientRequestOptions) {
  return await parseResponse(client.openapi.$get(undefined, options))
}

export async function getOperationsOperationId(
  args: InferRequestType<(typeof client.operations)[':operation-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operations[':operation-id'].$get(args, options))
}

export async function getProjects(
  args: InferRequestType<typeof client.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$get(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function getProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':project-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project-id'].$get(args, options))
}

export async function deleteProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':project-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project-id'].$delete(args, options))
}

export async function getProjectsProjectIdSettingsAnalysisConfiguration(
  args: InferRequestType<
    (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project-id'].settings['analysis-configuration'].$get(args, options),
  )
}

export async function putProjectsProjectIdSettingsAnalysisConfiguration(
  args: InferRequestType<
    (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project-id'].settings['analysis-configuration'].$put(args, options),
  )
}

export async function getProjectsProviderOrgName(
  args: InferRequestType<(typeof client.projects)[':provider'][':org'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':provider'][':org'][':name'].$get(args, options))
}

export async function postQueryjobs(
  args: InferRequestType<typeof client.queryjobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queryjobs.$post(args, options))
}

export async function getQueryjobsQueryjobId(
  args: InferRequestType<(typeof client.queryjobs)[':queryjob-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queryjobs[':queryjob-id'].$get(args, options))
}

export async function getQueryjobsQueryjobIdResults(
  args: InferRequestType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queryjobs[':queryjob-id'].results.$get(args, options))
}

export async function getQueryjobsQueryjobIdResultsProjectId(
  args: InferRequestType<
    (typeof client.queryjobs)[':queryjob-id']['results'][':project-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queryjobs[':queryjob-id'].results[':project-id'].$get(args, options),
  )
}

export async function putSnapshotsUploadsSessionId(
  args: InferRequestType<(typeof client.snapshots.uploads)[':session-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots.uploads[':session-id'].$put(args, options))
}

export async function postSnapshotsUploadsSessionId(
  args: InferRequestType<(typeof client.snapshots.uploads)[':session-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots.uploads[':session-id'].$post(args, options))
}

export async function deleteSnapshotsUploadsSessionId(
  args: InferRequestType<(typeof client.snapshots.uploads)[':session-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots.uploads[':session-id'].$delete(args, options))
}

export async function getSnapshotsProjectIdLanguage(
  args: InferRequestType<(typeof client.snapshots)[':project-id'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':project-id'][':language'].$get(args, options))
}

export async function postSnapshotsProjectIdLanguage(
  args: InferRequestType<(typeof client.snapshots)[':project-id'][':language']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':project-id'][':language'].$post(args, options))
}

export async function getSystemHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.system.health.$get(undefined, options))
}

export async function getSystemMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.system.metrics.$get(undefined, options))
}

export async function getSystemMetricsMetricId(
  args: InferRequestType<(typeof client.system.metrics)[':metric-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.metrics[':metric-id'].$get(args, options))
}
