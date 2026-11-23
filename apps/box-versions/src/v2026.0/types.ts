type AutomateWorkflowReference = { id: string; type: 'workflow'; name?: string | undefined }
type AutomateWorkflowAction = {
  id: string
  type: 'workflow_action'
  action_type: 'run_workflow'
  description?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  updated_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  workflow: AutomateWorkflowReference
}
type AutomateWorkflows = {
  entries?: AutomateWorkflowAction[] | undefined
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
}
type ClientError = {
  type?: 'error' | undefined
  status?: number | undefined
  code?:
    | 'created'
    | 'accepted'
    | 'no_content'
    | 'redirect'
    | 'not_modified'
    | 'bad_request'
    | 'unauthorized'
    | 'forbidden'
    | 'not_found'
    | 'method_not_allowed'
    | 'conflict'
    | 'precondition_failed'
    | 'too_many_requests'
    | 'internal_server_error'
    | 'unavailable'
    | 'item_name_invalid'
    | 'insufficient_scope'
    | undefined
  message?: string | undefined
  context_info?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  help_url?: string | undefined
  request_id?: string | undefined
}
type AutomateWorkflowStartRequest = { workflow_action_id: string; file_ids: string[] }
type FolderReference = { type: 'folder'; id: string }
type NotesConvertRequestBody = {
  content: string
  content_format: 'markdown'
  parent: FolderReference
  name: string
}
type NotesConvertResponse = { type: 'file'; id: string }
type DocumentSplitPageRange = { start: number; end: number }
type DocumentSplitCreateRequestManual = {
  split_type: 'manual'
  version?: 'v_1' | undefined
  split_definition: DocumentSplitPageRange[]
}
type DocumentSplitPageSelectionSinglePage = { type: 'single_page'; page: number }
type DocumentSplitPageSelectionPageRange = { type: 'page_range'; start: number; end: number }
type DocumentSplitPageSelectionSegment =
  | DocumentSplitPageSelectionSinglePage
  | DocumentSplitPageSelectionPageRange
type DocumentSplitPageSelectionItem = {
  name?: string | undefined
  segments: DocumentSplitPageSelectionSegment[]
}
type DocumentSplitPageSelection = DocumentSplitPageSelectionItem[]
type DocumentSplitCreateRequestPageSelection = {
  split_type: 'page_selection'
  version?: 'v_2' | undefined
  page_selection: DocumentSplitPageSelection
}
type DocumentSplitCreateRequestSmart = { split_type: 'smart'; prompt: string }
type DocumentSplitCreateRequestType =
  | DocumentSplitCreateRequestManual
  | DocumentSplitCreateRequestPageSelection
  | DocumentSplitCreateRequestSmart
type DocumentSplitCreateRequest = {
  source_file_id: string
  destination_folder_id: string
  input_source: 'api' | 'box' | 'relay' | 'salesforce'
  split_input: DocumentSplitCreateRequestType
  external_id?: string | undefined
}
type DocumentSplitCreateResponse = { type: 'document_split'; id: string }
type FileReference = { type: 'file'; id: string }
type DocumentSplitOutput = {
  generated_files?: FileReference[] | undefined
  split_definition?: (DocumentSplitPageRange[] | null) | undefined
}
type DocumentSplitFailures = { errors: string[]; warnings: string[] }
type DocumentSplit = {
  id: string
  type: 'document_split'
  source_file: { type: 'file'; id: string }
  status: 'submitted' | 'completed' | 'failed' | 'completed_with_error'
  split_input: {}
  output?: DocumentSplitOutput | ({} | null) | undefined
  destination_folder: { type: 'folder'; id: string }
  input_source: 'api' | 'box' | 'relay' | 'salesforce'
  created_at?: string | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  enterprise?: { id: string; type: 'enterprise' } | undefined
  failures?: DocumentSplitFailures | ({} | null) | undefined
  external_id?: string | undefined
}
type DocumentSplits = {
  entries?: DocumentSplit[] | undefined
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
}
type QueryAncestorReference = { id: string; type: string }
type QueryOrderBy = { field_key: string; direction: 'asc' | 'desc' }
type QueryRequestBody = {
  query: {
    predicate: string
    params?: { [x: string]: { [x: string]: unknown } } | undefined
    ancestors?: QueryAncestorReference[] | undefined
  }
  order_by?: QueryOrderBy[] | undefined
  limit?: number | undefined
  fields?: string[] | undefined
  marker?: string | undefined
}
type QueryResultEntry = { id: string; type: string }
type QueryResults = { entries: QueryResultEntry[]; next_marker: string | null; limit: number }
type QueryInsightsGroupBy = { field: string; bucket_limit?: number | undefined }
type QueryInsightsMetricDefinition = {
  type: 'sum' | 'avg' | 'min' | 'max' | 'count'
  field: string
}
type QueryInsightsRequestBody = {
  query: {
    predicate: string
    params?: { [x: string]: { [x: string]: unknown } } | undefined
    ancestors?: QueryAncestorReference[] | undefined
    group_by?: QueryInsightsGroupBy[] | undefined
  }
  metrics: { [x: string]: QueryInsightsMetricDefinition }
}
type QueryInsightMetricResult = { type: string; values: { [x: string]: number } }
type QueryInsightEntry = {
  key: string[]
  type: 'group' | 'overall' | 'other'
  metrics: { [x: string]: QueryInsightMetricResult }
}
type QueryInsights = { insights: QueryInsightEntry[] }
type ShuttleSystem = {
  id: string
  type: 'shuttle_system'
  name: string
  system_type: string
  label?: string | undefined
  state: 'connected' | 'disconnected' | 'unknown'
}
type ShuttleSystems = {
  entries: ShuttleSystem[]
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
}
type ShuttleSystemCreateRequest = { name: string; system_type: 'windows' }
type ShuttleSystemUpdateRequest = { name?: string | undefined }
type ShuttleAgentCredentials = { registration_token: string; expires_at: string }
type ShuttleJobPermissionConflictStrategy =
  | 'preserve_structure_restrict_sharing'
  | 'preserve_structure_expand_sharing'
  | 'preserve_sharing_modify_structure'
  | 'warn_permissions_conflicts'
type ShuttleJob = {
  id: string
  type: 'shuttle_job'
  name: string
  comment?: (string | null) | undefined
  job_type: 'transfer' | 'analysis'
  state: string
  mapping_state: string
  source_system: { type: 'shuttle_system'; id: string; name: string }
  account_mapping?:
    | {
        is_enabled: boolean
        permission_conflict_strategy?:
          | ShuttleJobPermissionConflictStrategy
          | ({} | null)
          | undefined
        are_external_shares_mapped?: boolean | undefined
        are_permissions_mapped?: boolean | undefined
      }
    | undefined
  tags?: string[] | undefined
  settings?:
    | {
        bandwidth_limit_bytes_per_sec?: (bigint | null) | undefined
        are_deletions_mirrored?: boolean | undefined
        are_file_versions_synced?: boolean | undefined
        max_file_versions?: (number | null) | undefined
        is_overwrite_enabled?: boolean | undefined
        are_completed_mappings_skipped_on_rerun?: boolean | undefined
        is_content_scanning_enabled?: boolean | undefined
        include_shared_source_folders?: boolean | undefined
        include_shared_destination_folders?: boolean | undefined
      }
    | undefined
}
type ShuttleJobs = {
  entries: ShuttleJob[]
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
}
type ShuttleJobCreateRequest = {
  name: string
  job_type: 'transfer' | 'analysis'
  source_system_id: string
  comment?: string | undefined
  tags?: string[] | undefined
  account_mapping?:
    | {
        is_enabled?: boolean | undefined
        permission_conflict_strategy?:
          | ShuttleJobPermissionConflictStrategy
          | ({} | null)
          | undefined
        are_external_shares_mapped?: boolean | undefined
        are_permissions_mapped?: boolean | undefined
      }
    | undefined
  settings?:
    | {
        bandwidth_limit_bytes_per_sec?: (bigint | null) | undefined
        are_deletions_mirrored?: boolean | undefined
        are_file_versions_synced?: boolean | undefined
        max_file_versions?: (number | null) | undefined
        is_overwrite_enabled?: boolean | undefined
        are_completed_mappings_skipped_on_rerun?: boolean | undefined
        is_content_scanning_enabled?: boolean | undefined
        include_shared_source_folders?: boolean | undefined
        include_shared_destination_folders?: boolean | undefined
      }
    | undefined
}
type ShuttleJobUpdateRequest = {
  name?: string | undefined
  comment?: (string | null) | undefined
  tags?: string[] | undefined
  account_mapping?:
    | {
        is_enabled?: boolean | undefined
        permission_conflict_strategy?:
          | ShuttleJobPermissionConflictStrategy
          | ({} | null)
          | undefined
        are_external_shares_mapped?: boolean | undefined
        are_permissions_mapped?: boolean | undefined
      }
    | undefined
  settings?:
    | {
        bandwidth_limit_bytes_per_sec?: (bigint | null) | undefined
        are_deletions_mirrored?: boolean | undefined
        are_file_versions_synced?: boolean | undefined
        max_file_versions?: (number | null) | undefined
        is_overwrite_enabled?: boolean | undefined
        are_completed_mappings_skipped_on_rerun?: boolean | undefined
        is_content_scanning_enabled?: boolean | undefined
        include_shared_source_folders?: boolean | undefined
        include_shared_destination_folders?: boolean | undefined
      }
    | undefined
}
type ShuttleJobStartRequest = { mode?: 'transfer' | 'simulation' | 'scan' | 'analysis' | undefined }
type UserBase = { id: string; type: 'user' }
type ShuttleRun = {
  id: string
  type: 'shuttle_run'
  job_id: string
  run_mode: string
  state: string
  started_at?: string | undefined
  ended_at?: (string | null) | undefined
  duration_seconds?: (bigint | null) | undefined
  stats?:
    | {
        bytes_sent?: bigint | undefined
        files_sent?: bigint | undefined
        folders_created?: bigint | undefined
        is_estimated?: boolean | undefined
      }
    | undefined
  created_by?: UserBase | ({} | null) | undefined
  available_report_sections?: string[] | undefined
}
type ShuttleRuns = {
  entries: ShuttleRun[]
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
}
type ShuttleJobScheduleTriggerByTime = {
  type: 'by_time'
  start_at: string
  time_zone: string
  repeat: 'none' | 'daily' | 'weekly' | 'weekdays' | 'weekends'
}
type ShuttleJobScheduleTriggerByJob = {
  type: 'by_job'
  triggered_by_job_id: string
  last_run_condition: 'always' | 'on_success' | 'on_finish'
}
type ShuttleJobScheduleTrigger = ShuttleJobScheduleTriggerByTime | ShuttleJobScheduleTriggerByJob
type ShuttleJobSchedule = {
  id: string
  type: 'shuttle_job_schedule'
  job_id: string
  state: 'enabled' | 'paused'
  run_mode: 'transfer' | 'simulation' | 'analysis'
  description?: (string | null) | undefined
  last_attempt_at?: (string | null) | undefined
  trigger: ShuttleJobScheduleTrigger
}
type ShuttleJobSchedules = {
  entries: ShuttleJobSchedule[]
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
}
type ShuttleJobScheduleCreateRequest = {
  job_id: string
  run_mode: 'transfer' | 'simulation' | 'analysis'
  state?: 'enabled' | 'paused' | undefined
  description?: (string | null) | undefined
  trigger: ShuttleJobScheduleTrigger
}
type ShuttleJobScheduleUpdateRequest = {
  state?: 'enabled' | 'paused' | undefined
  run_mode?: 'transfer' | 'simulation' | 'analysis' | undefined
  description?: (string | null) | undefined
  trigger?: ShuttleJobScheduleTrigger | undefined
}
type ShuttlePathMappingAccountLocation = {
  type: 'account'
  path: string
  path_id?: (string | null) | undefined
  account?:
    | {
        id?: (string | null) | undefined
        email?: (string | null) | undefined
        name?: (string | null) | undefined
      }
    | undefined
  is_directory?: (boolean | null) | undefined
}
type ShuttlePathMappingSharedSpaceLocation = {
  type: 'shared_space'
  space?: (string | null) | undefined
  path: string
  path_id?: (string | null) | undefined
  is_directory?: (boolean | null) | undefined
}
type ShuttlePathMappingLocation =
  | ShuttlePathMappingAccountLocation
  | ShuttlePathMappingSharedSpaceLocation
type ShuttlePathMapping = {
  id: string
  type: 'shuttle_path_mapping'
  job_id: string
  is_path_skipped: boolean
  source: {}
  target?: ShuttlePathMappingLocation | ({} | null) | undefined
}
type ShuttlePathMappings = {
  entries: ShuttlePathMapping[]
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
}
type ShuttlePathMappingAccountLocationTargetInput = {
  type: 'account'
  path: string
  path_id?: string | undefined
  account: { id?: string | undefined; email?: string | undefined }
}
type ShuttlePathMappingSharedSpaceLocationTargetInput = {
  type: 'shared_space'
  space?: string | undefined
  path: string
  path_id?: string | undefined
}
type ShuttlePathMappingTargetLocationInput =
  | ShuttlePathMappingAccountLocationTargetInput
  | ShuttlePathMappingSharedSpaceLocationTargetInput
type ShuttlePathMappingCreateRequest = {
  job_id: string
  is_path_skipped?: boolean | undefined
  source: {}
  target?: ShuttlePathMappingTargetLocationInput | ({} | null) | undefined
}
type ShuttlePathMappingUpdateRequest = {
  is_path_skipped?: boolean | undefined
  source?: {} | undefined
  target?: ShuttlePathMappingTargetLocationInput | ({} | null) | undefined
}
type ShuttlePathMappingImportCreateRequest = { job_id: string; file_id: string }
type ShuttleSubjectMappingImportCreateRequest = { job_id: string; file_id: string }
type ShuttleSubjectRole =
  | 'owner'
  | 'creator'
  | 'updater'
  | 'namespace_account'
  | 'sharee'
  | 'account_holder'
  | 'unknown'
type ShuttleTargetSubject = {
  type: 'user' | 'group'
  id?: (string | null) | undefined
  email?: (string | null) | undefined
  name?: (string | null) | undefined
}
type ShuttleSubjectMapping = {
  id: string
  type: 'shuttle_subject_mapping'
  job_id: string
  discovered_subject_id?: (string | null) | undefined
  revision?: (number | null) | undefined
  is_subject_skipped: boolean
  source: {
    type: 'user' | 'group'
    id?: (string | null) | undefined
    email?: (string | null) | undefined
    name?: (string | null) | undefined
    roles?: (ShuttleSubjectRole[] | null) | undefined
  }
  target?: ShuttleTargetSubject | ({} | null) | undefined
}
type ShuttleSubjectMappings = {
  entries: ShuttleSubjectMapping[]
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
}
type ShuttleTargetSubjectInput = { type: 'user' | 'group'; id: string }
type ShuttleSubjectMappingCreateRequest = {
  job_id: string
  discovered_subject_id: string
  revision?: number | undefined
  is_subject_skipped?: boolean | undefined
  target?: ShuttleTargetSubjectInput | ({} | null) | undefined
}
type ShuttleSubjectMappingUpdateRequest = {
  is_subject_skipped?: boolean | undefined
  target?: ShuttleTargetSubjectInput | ({} | null) | undefined
}
type ShuttleDiscoveredSubject = {
  id: string
  type: 'shuttle_discovered_subject'
  job_id: string
  revision: number
  source: {
    type: 'user' | 'group'
    id?: (string | null) | undefined
    email?: (string | null) | undefined
    name?: (string | null) | undefined
    roles?: (ShuttleSubjectRole[] | null) | undefined
  }
  suggested_target?: ShuttleTargetSubject | ({} | null) | undefined
}
type ShuttleDiscoveredSubjects = {
  entries: ShuttleDiscoveredSubject[]
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
}
type ShuttlePathEntry = {
  id: string
  type: 'shuttle_path_entry'
  name: string
  path: string
  path_id?: (string | null) | undefined
  parent_path?: (string | null) | undefined
  scope: {}
  is_directory: boolean
  can_map: boolean
}
type ShuttlePathEntries = {
  entries: ShuttlePathEntry[]
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
}
type ShuttleMappingError = {
  id: string
  type: 'shuttle_mapping_error'
  job_id: string
  revision: number
  category: string
  path: string
  messages: string[]
}
type ShuttleMappingErrors = {
  entries: ShuttleMappingError[]
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
}
type ShuttleReportOutput = { id: string; type: 'file' | 'folder' }
type ShuttleReport = {
  id: string
  type: 'shuttle_report'
  run_id: string
  status: string
  format: 'xlsx' | 'csv'
  sections?: string[] | undefined
  users_scope?: 'migrated' | 'all' | undefined
  output: ShuttleReportOutput | ({} | null)
  created_at?: string | undefined
  completed_at: string | null
}
type ShuttleReports = {
  entries: ShuttleReport[]
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
}
type ShuttleReportCreateRequest = {
  run_id: string
  format: 'xlsx' | 'csv'
  sections: string[]
  users_scope?: 'migrated' | 'all' | undefined
}
type AiSession = {
  type: 'ai_session'
  id: string
  name: string | null
  source: 'api'
  client_id: string | null
  created_by: { id: string; type: 'user' }
  updated_by: { id: string; type: 'user' }
  created_at: string
  updated_at: string
}
type AiSessions = {
  entries: AiSession[]
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/automate_workflows': {
      $get:
        | {
            input: {
              query: { folder_id: string; limit?: bigint | undefined; marker?: string | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: AutomateWorkflows
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { folder_id: string; limit?: bigint | undefined; marker?: string | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/automate_workflows/:workflow_id/start': {
      $post:
        | {
            input: { param: { workflow_id: string } } & { header: { 'box-version': '2026.0' } } & {
              json: AutomateWorkflowStartRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workflow_id: string } } & { header: { 'box-version': '2026.0' } } & {
              json: AutomateWorkflowStartRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notes/convert': {
      $post:
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: NotesConvertRequestBody }
            output: NotesConvertResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: NotesConvertRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: NotesConvertRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: NotesConvertRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: NotesConvertRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: NotesConvertRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: NotesConvertRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: NotesConvertRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: NotesConvertRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: NotesConvertRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: NotesConvertRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/document_splits': {
      $post:
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: DocumentSplitCreateRequest }
            output: DocumentSplitCreateResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: DocumentSplitCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: DocumentSplitCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: DocumentSplitCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: DocumentSplitCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: DocumentSplitCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: DocumentSplitCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: DocumentSplits
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/document_splits/:document_split_id': {
      $get:
        | {
            input: { param: { document_split_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: DocumentSplit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { document_split_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { document_split_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { document_split_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { document_split_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { document_split_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/query': {
      $post:
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryRequestBody }
            output: QueryResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/query_insights': {
      $post:
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryInsightsRequestBody }
            output: QueryInsights
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryInsightsRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryInsightsRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryInsightsRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryInsightsRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryInsightsRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryInsightsRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: QueryInsightsRequestBody }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_systems': {
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ShuttleSystems
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleSystemCreateRequest }
            output: ShuttleSystem
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleSystemCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleSystemCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleSystemCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleSystemCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleSystemCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_systems/:shuttle_system_id': {
      $get:
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ShuttleSystem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSystemUpdateRequest }
            output: ShuttleSystem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSystemUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSystemUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSystemUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSystemUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSystemUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSystemUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_systems/:shuttle_system_id/issue_registration_token': {
      $post:
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ShuttleAgentCredentials
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_system_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_jobs': {
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ShuttleJobs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleJobCreateRequest }
            output: ShuttleJob
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleJobCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleJobCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleJobCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleJobCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleJobCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleJobCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_jobs/:shuttle_job_id': {
      $get:
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ShuttleJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobUpdateRequest }
            output: ShuttleJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_jobs/:shuttle_job_id/start': {
      $post:
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobStartRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobStartRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobStartRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobStartRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobStartRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobStartRequest }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobStartRequest }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_job_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobStartRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_jobs/:shuttle_job_id/stop': {
      $post:
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_jobs/:shuttle_job_id/prepare_migration': {
      $post:
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_job_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_runs': {
      $get:
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ShuttleRuns
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_runs/:shuttle_run_id': {
      $get:
        | {
            input: { param: { shuttle_run_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ShuttleRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_run_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_run_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_run_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_run_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_run_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_job_schedules': {
      $get:
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ShuttleJobSchedules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleJobScheduleCreateRequest
            }
            output: ShuttleJobSchedule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleJobScheduleCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleJobScheduleCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleJobScheduleCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleJobScheduleCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleJobScheduleCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleJobScheduleCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_job_schedules/:shuttle_job_schedule_id': {
      $get:
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ShuttleJobSchedule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobScheduleUpdateRequest }
            output: ShuttleJobSchedule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobScheduleUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobScheduleUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobScheduleUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobScheduleUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobScheduleUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleJobScheduleUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_job_schedule_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_path_mappings': {
      $get:
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ShuttlePathMappings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingCreateRequest
            }
            output: ShuttlePathMapping
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_path_mappings/:shuttle_path_mapping_id': {
      $get:
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ShuttlePathMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttlePathMappingUpdateRequest }
            output: ShuttlePathMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttlePathMappingUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttlePathMappingUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttlePathMappingUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttlePathMappingUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttlePathMappingUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttlePathMappingUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_path_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_path_mapping_imports': {
      $post:
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingImportCreateRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttlePathMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_subject_mapping_imports': {
      $post:
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingImportCreateRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingImportCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_subject_mappings': {
      $get:
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ShuttleSubjectMappings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingCreateRequest
            }
            output: ShuttleSubjectMapping
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & {
              json: ShuttleSubjectMappingCreateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_subject_mappings/:shuttle_subject_mapping_id': {
      $get:
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ShuttleSubjectMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSubjectMappingUpdateRequest }
            output: ShuttleSubjectMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSubjectMappingUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSubjectMappingUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSubjectMappingUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSubjectMappingUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSubjectMappingUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            } & { json: ShuttleSubjectMappingUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_subject_mapping_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_discovered_subjects': {
      $get:
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ShuttleDiscoveredSubjects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_path_entries': {
      $get:
        | {
            input: {
              query: {
                job_id: string
                side: 'source' | 'target'
                path?: string | undefined
                path_id?: string | undefined
                account_email?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: ShuttlePathEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                job_id: string
                side: 'source' | 'target'
                path?: string | undefined
                path_id?: string | undefined
                account_email?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                job_id: string
                side: 'source' | 'target'
                path?: string | undefined
                path_id?: string | undefined
                account_email?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                job_id: string
                side: 'source' | 'target'
                path?: string | undefined
                path_id?: string | undefined
                account_email?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                job_id: string
                side: 'source' | 'target'
                path?: string | undefined
                path_id?: string | undefined
                account_email?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                job_id: string
                side: 'source' | 'target'
                path?: string | undefined
                path_id?: string | undefined
                account_email?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                job_id: string
                side: 'source' | 'target'
                path?: string | undefined
                path_id?: string | undefined
                account_email?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_mapping_errors': {
      $get:
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ShuttleMappingErrors
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { job_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_reports': {
      $get:
        | {
            input: {
              query: { run_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ShuttleReports
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { run_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { run_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { run_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { run_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { run_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { run_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleReportCreateRequest }
            output: ShuttleReport
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleReportCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleReportCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleReportCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleReportCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleReportCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleReportCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2026.0' } } & { json: ShuttleReportCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shuttle_reports/:shuttle_report_id': {
      $get:
        | {
            input: { param: { shuttle_report_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ShuttleReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shuttle_report_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shuttle_report_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shuttle_report_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shuttle_report_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shuttle_report_id: string } } & {
              header: { 'box-version': '2026.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ai_sessions': {
      $get:
        | {
            input: {
              query: {
                source: 'api'
                marker?: string | undefined
                sort?: 'created_at' | 'updated_at' | 'name' | undefined
                direction?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                client_ids?: string[] | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: AiSessions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                source: 'api'
                marker?: string | undefined
                sort?: 'created_at' | 'updated_at' | 'name' | undefined
                direction?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                client_ids?: string[] | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                source: 'api'
                marker?: string | undefined
                sort?: 'created_at' | 'updated_at' | 'name' | undefined
                direction?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                client_ids?: string[] | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                source: 'api'
                marker?: string | undefined
                sort?: 'created_at' | 'updated_at' | 'name' | undefined
                direction?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                client_ids?: string[] | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                source: 'api'
                marker?: string | undefined
                sort?: 'created_at' | 'updated_at' | 'name' | undefined
                direction?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                client_ids?: string[] | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                source: 'api'
                marker?: string | undefined
                sort?: 'created_at' | 'updated_at' | 'name' | undefined
                direction?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                client_ids?: string[] | undefined
              }
            } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ai_sessions/:ai_session_id': {
      $delete:
        | {
            input: { param: { ai_session_id: string } } & { header: { 'box-version': '2026.0' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ai_session_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ai_session_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ai_session_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ai_session_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ai_session_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ai_session_id: string } } & { header: { 'box-version': '2026.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
