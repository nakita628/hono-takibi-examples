import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAutomateWorkflows(
  args: InferRequestType<typeof client.automate_workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automate_workflows.$get(args, options))
}

export async function postAutomateWorkflowsWorkflowIdStart(
  args: InferRequestType<(typeof client.automate_workflows)[':workflow_id']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automate_workflows[':workflow_id'].start.$post(args, options))
}

export async function postNotesConvert(
  args: InferRequestType<typeof client.notes.convert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notes.convert.$post(args, options))
}

export async function getDocumentSplits(
  args: InferRequestType<typeof client.document_splits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.document_splits.$get(args, options))
}

export async function postDocumentSplits(
  args: InferRequestType<typeof client.document_splits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.document_splits.$post(args, options))
}

export async function getDocumentSplitsDocumentSplitId(
  args: InferRequestType<(typeof client.document_splits)[':document_split_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.document_splits[':document_split_id'].$get(args, options))
}

export async function postQuery(
  args: InferRequestType<typeof client.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.$post(args, options))
}

export async function postQueryInsights(
  args: InferRequestType<typeof client.query_insights.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query_insights.$post(args, options))
}

export async function getShuttleSystems(
  args: InferRequestType<typeof client.shuttle_systems.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_systems.$get(args, options))
}

export async function postShuttleSystems(
  args: InferRequestType<typeof client.shuttle_systems.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_systems.$post(args, options))
}

export async function getShuttleSystemsShuttleSystemId(
  args: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_systems[':shuttle_system_id'].$get(args, options))
}

export async function putShuttleSystemsShuttleSystemId(
  args: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_systems[':shuttle_system_id'].$put(args, options))
}

export async function deleteShuttleSystemsShuttleSystemId(
  args: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_systems[':shuttle_system_id'].$delete(args, options))
}

export async function postShuttleSystemsShuttleSystemIdIssueRegistrationToken(
  args: InferRequestType<
    (typeof client.shuttle_systems)[':shuttle_system_id']['issue_registration_token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shuttle_systems[':shuttle_system_id'].issue_registration_token.$post(args, options),
  )
}

export async function getShuttleJobs(
  args: InferRequestType<typeof client.shuttle_jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_jobs.$get(args, options))
}

export async function postShuttleJobs(
  args: InferRequestType<typeof client.shuttle_jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_jobs.$post(args, options))
}

export async function getShuttleJobsShuttleJobId(
  args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_jobs[':shuttle_job_id'].$get(args, options))
}

export async function putShuttleJobsShuttleJobId(
  args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_jobs[':shuttle_job_id'].$put(args, options))
}

export async function deleteShuttleJobsShuttleJobId(
  args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_jobs[':shuttle_job_id'].$delete(args, options))
}

export async function postShuttleJobsShuttleJobIdStart(
  args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_jobs[':shuttle_job_id'].start.$post(args, options))
}

export async function postShuttleJobsShuttleJobIdStop(
  args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_jobs[':shuttle_job_id'].stop.$post(args, options))
}

export async function postShuttleJobsShuttleJobIdPrepareMigration(
  args: InferRequestType<
    (typeof client.shuttle_jobs)[':shuttle_job_id']['prepare_migration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shuttle_jobs[':shuttle_job_id'].prepare_migration.$post(args, options),
  )
}

export async function getShuttleRuns(
  args: InferRequestType<typeof client.shuttle_runs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_runs.$get(args, options))
}

export async function getShuttleRunsShuttleRunId(
  args: InferRequestType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_runs[':shuttle_run_id'].$get(args, options))
}

export async function getShuttleJobSchedules(
  args: InferRequestType<typeof client.shuttle_job_schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_job_schedules.$get(args, options))
}

export async function postShuttleJobSchedules(
  args: InferRequestType<typeof client.shuttle_job_schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_job_schedules.$post(args, options))
}

export async function getShuttleJobSchedulesShuttleJobScheduleId(
  args: InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shuttle_job_schedules[':shuttle_job_schedule_id'].$get(args, options),
  )
}

export async function putShuttleJobSchedulesShuttleJobScheduleId(
  args: InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shuttle_job_schedules[':shuttle_job_schedule_id'].$put(args, options),
  )
}

export async function deleteShuttleJobSchedulesShuttleJobScheduleId(
  args: InferRequestType<
    (typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shuttle_job_schedules[':shuttle_job_schedule_id'].$delete(args, options),
  )
}

export async function getShuttlePathMappings(
  args: InferRequestType<typeof client.shuttle_path_mappings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_path_mappings.$get(args, options))
}

export async function postShuttlePathMappings(
  args: InferRequestType<typeof client.shuttle_path_mappings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_path_mappings.$post(args, options))
}

export async function getShuttlePathMappingsShuttlePathMappingId(
  args: InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shuttle_path_mappings[':shuttle_path_mapping_id'].$get(args, options),
  )
}

export async function putShuttlePathMappingsShuttlePathMappingId(
  args: InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shuttle_path_mappings[':shuttle_path_mapping_id'].$put(args, options),
  )
}

export async function deleteShuttlePathMappingsShuttlePathMappingId(
  args: InferRequestType<
    (typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shuttle_path_mappings[':shuttle_path_mapping_id'].$delete(args, options),
  )
}

export async function postShuttlePathMappingImports(
  args: InferRequestType<typeof client.shuttle_path_mapping_imports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_path_mapping_imports.$post(args, options))
}

export async function postShuttleSubjectMappingImports(
  args: InferRequestType<typeof client.shuttle_subject_mapping_imports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_subject_mapping_imports.$post(args, options))
}

export async function getShuttleSubjectMappings(
  args: InferRequestType<typeof client.shuttle_subject_mappings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_subject_mappings.$get(args, options))
}

export async function postShuttleSubjectMappings(
  args: InferRequestType<typeof client.shuttle_subject_mappings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_subject_mappings.$post(args, options))
}

export async function getShuttleSubjectMappingsShuttleSubjectMappingId(
  args: InferRequestType<
    (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shuttle_subject_mappings[':shuttle_subject_mapping_id'].$get(args, options),
  )
}

export async function putShuttleSubjectMappingsShuttleSubjectMappingId(
  args: InferRequestType<
    (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shuttle_subject_mappings[':shuttle_subject_mapping_id'].$put(args, options),
  )
}

export async function deleteShuttleSubjectMappingsShuttleSubjectMappingId(
  args: InferRequestType<
    (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shuttle_subject_mappings[':shuttle_subject_mapping_id'].$delete(args, options),
  )
}

export async function getShuttleDiscoveredSubjects(
  args: InferRequestType<typeof client.shuttle_discovered_subjects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_discovered_subjects.$get(args, options))
}

export async function getShuttlePathEntries(
  args: InferRequestType<typeof client.shuttle_path_entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_path_entries.$get(args, options))
}

export async function getShuttleMappingErrors(
  args: InferRequestType<typeof client.shuttle_mapping_errors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_mapping_errors.$get(args, options))
}

export async function getShuttleReports(
  args: InferRequestType<typeof client.shuttle_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_reports.$get(args, options))
}

export async function postShuttleReports(
  args: InferRequestType<typeof client.shuttle_reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_reports.$post(args, options))
}

export async function getShuttleReportsShuttleReportId(
  args: InferRequestType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shuttle_reports[':shuttle_report_id'].$get(args, options))
}

export async function getAiSessions(
  args: InferRequestType<typeof client.ai_sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai_sessions.$get(args, options))
}

export async function deleteAiSessionsAiSessionId(
  args: InferRequestType<(typeof client.ai_sessions)[':ai_session_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai_sessions[':ai_session_id'].$delete(args, options))
}
