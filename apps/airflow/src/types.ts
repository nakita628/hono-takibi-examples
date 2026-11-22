type JsonValue = { [x: string]: unknown }
type DagScheduleAssetReference = {
  dag_id: string
  created_at: string
  updated_at: string
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type TaskOutletAssetReference = {
  dag_id: string
  task_id: string
  created_at: string
  updated_at: string
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type TaskInletAssetReference = {
  dag_id: string
  task_id: string
  created_at: string
  updated_at: string
}
type AssetAliasResponse = { id: number; name: string; group: string }
type TriggerStatus = 'pending' | 'running' | 'failing' | 'orphaned'
type AssetWatcherResponse = {
  name: string
  trigger_id: number
  created_date: string
  status: TriggerStatus
}
type LastAssetEventResponse = {
  id?: number | ({ [x: string]: unknown } | null) | undefined
  timestamp?: string | ({ [x: string]: unknown } | null) | undefined
}
type AssetResponse = {
  id: number
  name: string
  uri: string
  group: string
  extra?: { [x: string]: JsonValue } | ({ [x: string]: unknown } | null) | undefined
  created_at: string
  updated_at: string
  scheduled_dags: DagScheduleAssetReference[]
  producing_tasks: TaskOutletAssetReference[]
  consuming_tasks: TaskInletAssetReference[]
  aliases: AssetAliasResponse[]
  watchers: AssetWatcherResponse[]
  last_asset_event?: LastAssetEventResponse | ({ [x: string]: unknown } | null) | undefined
}
type AssetCollectionResponse = { assets: AssetResponse[]; total_entries: number }
type HTTPExceptionResponse = { detail: string | { [x: string]: unknown } }
type ValidationError = {
  loc: (string | number)[]
  msg: string
  type: string
  input?: { [x: string]: unknown } | undefined
  ctx?: { [x: string]: unknown } | undefined
}
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type AssetAliasCollectionResponse = { asset_aliases: AssetAliasResponse[]; total_entries: number }
type DagRunAssetReference = {
  run_id: string
  dag_id: string
  logical_date: string | ({ [x: string]: unknown } | null)
  start_date: string | ({ [x: string]: unknown } | null)
  end_date: string | ({ [x: string]: unknown } | null)
  state: string
  data_interval_start: string | ({ [x: string]: unknown } | null)
  data_interval_end: string | ({ [x: string]: unknown } | null)
  partition_key: string | ({ [x: string]: unknown } | null)
  triggering: boolean
}
type AssetEventResponse = {
  id: number
  asset_id: number
  uri?: string | ({ [x: string]: unknown } | null) | undefined
  name?: string | ({ [x: string]: unknown } | null) | undefined
  group?: string | ({ [x: string]: unknown } | null) | undefined
  extra?: { [x: string]: JsonValue } | ({ [x: string]: unknown } | null) | undefined
  source_task_id?: string | ({ [x: string]: unknown } | null) | undefined
  source_dag_id?: string | ({ [x: string]: unknown } | null) | undefined
  source_run_id?: string | ({ [x: string]: unknown } | null) | undefined
  source_map_index: number
  source_task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
  source_region_id?: string | ({ [x: string]: unknown } | null) | undefined
  source_region_index?: number | ({ [x: string]: unknown } | null) | undefined
  created_dagruns: DagRunAssetReference[]
  timestamp: string
  partition_key?: string | ({ [x: string]: unknown } | null) | undefined
}
type AssetEventCollectionResponse = { asset_events: AssetEventResponse[]; total_entries: number }
type AssetEventAccessControl = {
  consumer_teams?: string[] | ({ [x: string]: unknown } | null) | undefined
  allow_global?: boolean | undefined
}
type CreateAssetEventsBody = {
  asset_id: number
  partition_key?: string | ({ [x: string]: unknown } | null) | undefined
  extra?: { [x: string]: unknown } | undefined
  access_control?: AssetEventAccessControl | ({ [x: string]: unknown } | null) | undefined
}
type MaterializeAssetBody = {
  dag_run_id?: string | ({ [x: string]: unknown } | null) | undefined
  data_interval_start?: string | ({ [x: string]: unknown } | null) | undefined
  data_interval_end?: string | ({ [x: string]: unknown } | null) | undefined
  logical_date?: string | ({ [x: string]: unknown } | null) | undefined
  run_after?: string | ({ [x: string]: unknown } | null) | undefined
  conf?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  note?: string | ({ [x: string]: unknown } | null) | undefined
  partition_key?: string | ({ [x: string]: unknown } | null) | undefined
  bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
  drain_dag?: boolean | undefined
}
type DagRunType =
  | 'backfill'
  | 'scheduled'
  | 'manual'
  | 'operator_triggered'
  | 'asset_triggered'
  | 'asset_materialization'
type DagRunState = 'queued' | 'running' | 'success' | 'failed'
type DagRunTriggeredByType =
  | 'cli'
  | 'operator'
  | 'rest_api'
  | 'ui'
  | 'test'
  | 'timetable'
  | 'asset'
  | 'backfill'
type DagVersionResponse = {
  id: string
  version_number: number
  dag_id: string
  bundle_name: string | ({ [x: string]: unknown } | null)
  bundle_version: string | ({ [x: string]: unknown } | null)
  created_at: string
  dag_display_name: string
  bundle_url: string | ({ [x: string]: unknown } | null)
}
type DAGRunResponse = {
  dag_run_id: string
  dag_id: string
  logical_date: string | ({ [x: string]: unknown } | null)
  queued_at: string | ({ [x: string]: unknown } | null)
  start_date: string | ({ [x: string]: unknown } | null)
  end_date: string | ({ [x: string]: unknown } | null)
  duration: number | ({ [x: string]: unknown } | null)
  data_interval_start: string | ({ [x: string]: unknown } | null)
  data_interval_end: string | ({ [x: string]: unknown } | null)
  run_after: string
  last_scheduling_decision: string | ({ [x: string]: unknown } | null)
  run_type: DagRunType
  state: DagRunState
  triggered_by: DagRunTriggeredByType | ({ [x: string]: unknown } | null)
  triggering_user_name: string | ({ [x: string]: unknown } | null)
  conf: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
  note: string | ({ [x: string]: unknown } | null)
  dag_versions: DagVersionResponse[]
  bundle_version: string | ({ [x: string]: unknown } | null)
  dag_display_name: string
  partition_key: string | ({ [x: string]: unknown } | null)
  partition_date: string | ({ [x: string]: unknown } | null)
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type QueuedEventResponse = {
  dag_id: string
  asset_id: number
  created_at: string
  dag_display_name: string
}
type QueuedEventCollectionResponse = { queued_events: QueuedEventResponse[]; total_entries: number }
type ReprocessBehavior = 'failed' | 'completed' | 'none'
type BackfillResponse = {
  id: number
  dag_id: string
  from_date: string
  to_date: string
  dag_run_conf: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
  is_paused: boolean
  reprocess_behavior: ReprocessBehavior
  max_active_runs: number
  created_at: string
  completed_at: string | ({ [x: string]: unknown } | null)
  updated_at: string
  dag_display_name: string
}
type BackfillCollectionResponse = { backfills: BackfillResponse[]; total_entries: number }
type BackfillPostBody = {
  dag_id: string
  from_date: string
  to_date: string
  run_backwards?: boolean | undefined
  dag_run_conf?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  reprocess_behavior?: ReprocessBehavior | undefined
  max_active_runs?: number | undefined
  run_on_latest_version?: boolean | ({ [x: string]: unknown } | null) | undefined
  drain_dag?: boolean | undefined
}
type BackfillDagRunResponse = {
  id: number
  backfill_id: number
  dag_id: string
  dag_run_id?: string | ({ [x: string]: unknown } | null) | undefined
  logical_date: string | ({ [x: string]: unknown } | null)
  partition_key: string | ({ [x: string]: unknown } | null)
  sort_ordinal: number
  exception_reason: string | ({ [x: string]: unknown } | null)
  dag_run_state?: DagRunState | ({ [x: string]: unknown } | null) | undefined
}
type BackfillDagRunCollectionResponse = {
  backfill_dag_runs: BackfillDagRunResponse[]
  total_entries: number
}
type DryRunBackfillResponse = {
  logical_date: string | ({ [x: string]: unknown } | null)
  partition_key: string | ({ [x: string]: unknown } | null)
  partition_date: string | ({ [x: string]: unknown } | null)
}
type DryRunBackfillCollectionResponse = {
  backfills: DryRunBackfillResponse[]
  total_entries: number
}
type ConnectionResponse = {
  connection_id: string
  conn_type: string
  description: string | ({ [x: string]: unknown } | null)
  host: string | ({ [x: string]: unknown } | null)
  login: string | ({ [x: string]: unknown } | null)
  schema: string | ({ [x: string]: unknown } | null)
  port: number | ({ [x: string]: unknown } | null)
  password: string | ({ [x: string]: unknown } | null)
  extra: string | ({ [x: string]: unknown } | null)
  team_name: string | ({ [x: string]: unknown } | null)
}
type ConnectionBody = {
  connection_id: string
  conn_type: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  host?: string | ({ [x: string]: unknown } | null) | undefined
  login?: string | ({ [x: string]: unknown } | null) | undefined
  schema?: string | ({ [x: string]: unknown } | null) | undefined
  port?: number | ({ [x: string]: unknown } | null) | undefined
  password?: string | ({ [x: string]: unknown } | null) | undefined
  extra?: string | ({ [x: string]: unknown } | null) | undefined
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type AsyncConnectionTestResponse = {
  token: string
  connection_id: string
  state: string
  result_message?: string | ({ [x: string]: unknown } | null) | undefined
  created_at: string
}
type ConnectionTestRequestBody = {
  connection_id: string
  conn_type: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  host?: string | ({ [x: string]: unknown } | null) | undefined
  login?: string | ({ [x: string]: unknown } | null) | undefined
  schema?: string | ({ [x: string]: unknown } | null) | undefined
  port?: number | ({ [x: string]: unknown } | null) | undefined
  password?: string | ({ [x: string]: unknown } | null) | undefined
  extra?: string | ({ [x: string]: unknown } | null) | undefined
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
  commit_on_success?: boolean | undefined
  executor?: string | ({ [x: string]: unknown } | null) | undefined
  queue?: string | ({ [x: string]: unknown } | null) | undefined
}
type ConnectionTestQueuedResponse = { token: string; connection_id: string; state: string }
type ConnectionCollectionResponse = { connections: ConnectionResponse[]; total_entries: number }
type BulkActionOnExistence = 'fail' | 'skip' | 'overwrite'
type BulkCreateActionConnectionBody = {
  action: 'create'
  entities: ConnectionBody[]
  action_on_existence?: BulkActionOnExistence | undefined
}
type BulkActionNotOnExistence = 'fail' | 'skip'
type BulkUpdateActionConnectionBody = {
  action: 'update'
  entities: ConnectionBody[]
  update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
  action_on_non_existence?: BulkActionNotOnExistence | undefined
}
type BulkDeleteActionConnectionBody = {
  action: 'delete'
  entities: (string | ConnectionBody)[]
  action_on_non_existence?: BulkActionNotOnExistence | undefined
}
type BulkBodyConnectionBody = {
  actions: (
    | BulkCreateActionConnectionBody
    | BulkUpdateActionConnectionBody
    | BulkDeleteActionConnectionBody
  )[]
}
type BulkActionResponse = {
  success?: string[] | undefined
  errors?: { [x: string]: unknown }[] | undefined
}
type BulkResponse = {
  create?: BulkActionResponse | ({ [x: string]: unknown } | null) | undefined
  update?: BulkActionResponse | ({ [x: string]: unknown } | null) | undefined
  delete?: BulkActionResponse | ({ [x: string]: unknown } | null) | undefined
}
type ConnectionTestResponse = { status: boolean; message: string }
type DagRunMutableStates = 'queued' | 'success' | 'failed'
type DAGRunPatchBody = {
  state?: DagRunMutableStates | ({ [x: string]: unknown } | null) | undefined
  note?: string | ({ [x: string]: unknown } | null) | undefined
}
type BulkDAGRunBody = {
  dag_run_id: string
  dag_id?: string | ({ [x: string]: unknown } | null) | undefined
  state?: DagRunMutableStates | ({ [x: string]: unknown } | null) | undefined
  note?: string | ({ [x: string]: unknown } | null) | undefined
}
type BulkCreateActionBulkDAGRunBody = {
  action: 'create'
  entities: BulkDAGRunBody[]
  action_on_existence?: BulkActionOnExistence | undefined
}
type BulkUpdateActionBulkDAGRunBody = {
  action: 'update'
  entities: BulkDAGRunBody[]
  update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
  action_on_non_existence?: BulkActionNotOnExistence | undefined
}
type BulkDeleteActionBulkDAGRunBody = {
  action: 'delete'
  entities: (string | BulkDAGRunBody)[]
  action_on_non_existence?: BulkActionNotOnExistence | undefined
}
type BulkBodyBulkDAGRunBody = {
  actions: (
    | BulkCreateActionBulkDAGRunBody
    | BulkUpdateActionBulkDAGRunBody
    | BulkDeleteActionBulkDAGRunBody
  )[]
}
type DAGRunCollectionResponse = {
  dag_runs: DAGRunResponse[]
  total_entries?: number | ({ [x: string]: unknown } | null) | undefined
  total_entries_limit?: number | ({ [x: string]: unknown } | null) | undefined
  next_cursor?: string | ({ [x: string]: unknown } | null) | undefined
  previous_cursor?: string | ({ [x: string]: unknown } | null) | undefined
}
type TriggerDAGRunPostBody = {
  dag_run_id?: string | ({ [x: string]: unknown } | null) | undefined
  data_interval_start?: string | ({ [x: string]: unknown } | null) | undefined
  data_interval_end?: string | ({ [x: string]: unknown } | null) | undefined
  logical_date: string | ({ [x: string]: unknown } | null)
  run_after?: string | ({ [x: string]: unknown } | null) | undefined
  conf?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  note?: string | ({ [x: string]: unknown } | null) | undefined
  partition_key?: string | ({ [x: string]: unknown } | null) | undefined
  bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
  drain_dag?: boolean | undefined
}
type DAGRunClearBody = {
  dry_run?: boolean | undefined
  only_failed?: boolean | undefined
  only_new?: boolean | undefined
  run_on_latest_version?: boolean | ({ [x: string]: unknown } | null) | undefined
  keep_task_state?: boolean | undefined
  note?: string | ({ [x: string]: unknown } | null) | undefined
}
type LoopIterationResponse = { loop_id: string; iteration: number }
type TaskInstanceState =
  | 'removed'
  | 'scheduled'
  | 'queued'
  | 'running'
  | 'success'
  | 'restarting'
  | 'failed'
  | 'up_for_retry'
  | 'up_for_reschedule'
  | 'upstream_failed'
  | 'skipped'
  | 'deferred'
  | 'awaiting_input'
type TriggerResponse = {
  id: number
  classpath: string
  kwargs: string
  created_date: string
  queue: string | ({ [x: string]: unknown } | null)
  triggerer_id: number | ({ [x: string]: unknown } | null)
}
type JobResponse = {
  id: number
  dag_id: string | ({ [x: string]: unknown } | null)
  state: string | ({ [x: string]: unknown } | null)
  job_type: string | ({ [x: string]: unknown } | null)
  start_date: string | ({ [x: string]: unknown } | null)
  end_date: string | ({ [x: string]: unknown } | null)
  latest_heartbeat: string | ({ [x: string]: unknown } | null)
  executor_class: string | ({ [x: string]: unknown } | null)
  hostname: string | ({ [x: string]: unknown } | null)
  unixname: string | ({ [x: string]: unknown } | null)
  team_names?: string[] | undefined
  bundle_names?: string[] | ({ [x: string]: unknown } | null) | undefined
  dag_display_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type TaskInstanceResponse = {
  id: string
  task_id: string
  dag_id: string
  dag_run_id: string
  map_index: number
  region_id?: string | undefined
  region_index?: number | undefined
  in_loop: boolean
  loop_iteration?: LoopIterationResponse | ({ [x: string]: unknown } | null) | undefined
  logical_date: string | ({ [x: string]: unknown } | null)
  run_after: string
  start_date: string | ({ [x: string]: unknown } | null)
  end_date: string | ({ [x: string]: unknown } | null)
  duration: number | ({ [x: string]: unknown } | null)
  state: TaskInstanceState | ({ [x: string]: unknown } | null)
  try_number: number
  max_tries: number
  task_display_name: string
  dag_display_name: string
  hostname: string | ({ [x: string]: unknown } | null)
  unixname: string | ({ [x: string]: unknown } | null)
  pool: string
  pool_slots: number
  queue: string | ({ [x: string]: unknown } | null)
  priority_weight: number | ({ [x: string]: unknown } | null)
  operator: string | ({ [x: string]: unknown } | null)
  operator_name: string | ({ [x: string]: unknown } | null)
  queued_when: string | ({ [x: string]: unknown } | null)
  scheduled_when: string | ({ [x: string]: unknown } | null)
  pid: number | ({ [x: string]: unknown } | null)
  executor: string | ({ [x: string]: unknown } | null)
  executor_config: string
  note: string | ({ [x: string]: unknown } | null)
  rendered_map_index: string | ({ [x: string]: unknown } | null)
  rendered_fields?: { [x: string]: unknown } | undefined
  trigger: TriggerResponse | ({ [x: string]: unknown } | null)
  triggerer_job: JobResponse | ({ [x: string]: unknown } | null)
  dag_version: DagVersionResponse | ({ [x: string]: unknown } | null)
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
  state_reason?: string | ({ [x: string]: unknown } | null) | undefined
  retry_at?: string | ({ [x: string]: unknown } | null) | undefined
}
type NewTaskResponse = { task_id: string; task_display_name: string }
type ClearTaskInstanceCollectionResponse = {
  task_instances: (TaskInstanceResponse | NewTaskResponse)[]
  total_entries: number
}
type DAGRunsBatchBody = {
  order_by?: string | ({ [x: string]: unknown } | null) | undefined
  page_offset?: number | undefined
  page_limit?: number | undefined
  dag_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
  states?:
    | (DagRunState | ({ [x: string]: unknown } | null))[]
    | ({ [x: string]: unknown } | null)
    | undefined
  run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
  run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
  run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
  run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
  logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
  logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
  logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
  logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
  start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
  start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
  start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
  start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
  end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
  end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
  end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
  end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
  duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
  duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
  duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
  duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
  conf_contains?: string | ({ [x: string]: unknown } | null) | undefined
}
type BulkDAGRunClearBody = {
  partition_key?: string | ({ [x: string]: unknown } | null) | undefined
  partition_date_start?: string | ({ [x: string]: unknown } | null) | undefined
  partition_date_end?: string | ({ [x: string]: unknown } | null) | undefined
  dry_run?: boolean | undefined
  only_failed?: boolean | undefined
  only_new?: boolean | undefined
  run_on_latest_version?: boolean | ({ [x: string]: unknown } | null) | undefined
  keep_task_state?: boolean | undefined
  note?: string | ({ [x: string]: unknown } | null) | undefined
  dag_runs?: BulkDAGRunBody[] | undefined
}
type ClearPartitionsBody = {
  partition_key?: string | ({ [x: string]: unknown } | null) | undefined
  partition_date_start?: string | ({ [x: string]: unknown } | null) | undefined
  partition_date_end?: string | ({ [x: string]: unknown } | null) | undefined
  run_id?: string | ({ [x: string]: unknown } | null) | undefined
  clear_task_instances?: boolean | undefined
  dry_run?: boolean | undefined
}
type ClearPartitionsResponse = {
  dag_runs_cleared: number
  task_instances_cleared: number
  dry_run: boolean
}
type DAGSourceResponse = {
  content: string | ({ [x: string]: unknown } | null)
  dag_id: string
  version_number: number | ({ [x: string]: unknown } | null)
  dag_display_name: string
  language?: string | ({ [x: string]: unknown } | null) | undefined
}
type DagBundleResponse = {
  name: string
  active: boolean | ({ [x: string]: unknown } | null)
  version: string | ({ [x: string]: unknown } | null)
  last_refreshed: string | ({ [x: string]: unknown } | null)
  bundle_url: string | ({ [x: string]: unknown } | null)
  team_name: string | ({ [x: string]: unknown } | null)
  import_error_count: number
}
type DagBundleCollectionResponse = { dag_bundles: DagBundleResponse[]; total_entries: number }
type DagBundleDetailResponse = {
  name: string
  active: boolean | ({ [x: string]: unknown } | null)
  version: string | ({ [x: string]: unknown } | null)
  last_refreshed: string | ({ [x: string]: unknown } | null)
  bundle_url: string | ({ [x: string]: unknown } | null)
  team_name: string | ({ [x: string]: unknown } | null)
  import_error_count: number
  dag_count: number
}
type DagBundleFileResponse = {
  relative_fileloc: string
  dag_count: number
  last_parsed_time: string | ({ [x: string]: unknown } | null)
  last_parse_duration: number | ({ [x: string]: unknown } | null)
  import_error_count: number
  can_read_import_error: boolean
}
type DagBundleFileCollectionResponse = {
  dag_bundle_files: DagBundleFileResponse[]
  total_entries: number
}
type DagStatsStateResponse = { state: DagRunState; count: number }
type DagStatsResponse = { dag_id: string; dag_display_name: string; stats: DagStatsStateResponse[] }
type DagStatsCollectionResponse = { dags: DagStatsResponse[]; total_entries: number }
type ConfigOption = { key: string; value: string | unknown[] }
type ConfigSection = { name: string; options: ConfigOption[] }
type Config = { sections: ConfigSection[] }
type DagWarningType =
  | 'asset conflict'
  | 'duplicate dag id'
  | 'non-existent pool'
  | 'runtime varying value'
  | 'task group cycle'
type DAGWarningResponse = {
  dag_id: string
  warning_type: DagWarningType | string
  message: string
  timestamp: string
  dag_display_name: string
}
type DAGWarningCollectionResponse = { dag_warnings: DAGWarningResponse[]; total_entries: number }
type DagSchedulingState = 'active' | 'draining' | 'paused'
type DagTagResponse = { name: string; dag_id: string; dag_display_name: string }
type DAGResponse = {
  dag_id: string
  dag_display_name: string
  is_paused: boolean
  scheduling_state?: DagSchedulingState | undefined
  is_stale: boolean
  last_parsed_time: string | ({ [x: string]: unknown } | null)
  last_parse_duration: number | ({ [x: string]: unknown } | null)
  last_expired: string | ({ [x: string]: unknown } | null)
  bundle_name: string | ({ [x: string]: unknown } | null)
  bundle_version: string | ({ [x: string]: unknown } | null)
  relative_fileloc: string | ({ [x: string]: unknown } | null)
  fileloc: string | ({ [x: string]: unknown } | null)
  description: string | ({ [x: string]: unknown } | null)
  timetable_summary: string | ({ [x: string]: unknown } | null)
  timetable_description: string | ({ [x: string]: unknown } | null)
  timetable_partitioned: boolean
  timetable_periodic: boolean
  tags: DagTagResponse[]
  max_active_tasks: number
  max_active_runs: number | ({ [x: string]: unknown } | null)
  max_consecutive_failed_dag_runs: number
  has_task_concurrency_limits: boolean
  has_import_errors: boolean
  next_dagrun_logical_date: string | ({ [x: string]: unknown } | null)
  next_dagrun_data_interval_start: string | ({ [x: string]: unknown } | null)
  next_dagrun_data_interval_end: string | ({ [x: string]: unknown } | null)
  next_dagrun_run_after: string | ({ [x: string]: unknown } | null)
  allowed_run_types: DagRunType[] | ({ [x: string]: unknown } | null)
  owners: string[]
  is_backfillable: boolean
  file_token: string
}
type DAGCollectionResponse = { dags: DAGResponse[]; total_entries: number }
type DAGPatchBody = {
  is_paused?: boolean | ({ [x: string]: unknown } | null) | undefined
  scheduling_state?: DagSchedulingState | ({ [x: string]: unknown } | null) | undefined
}
type AssetExpressionAssetInfo = {
  uri: string | ({ [x: string]: unknown } | null)
  name: string | ({ [x: string]: unknown } | null)
  group: string
  id?: number | ({ [x: string]: unknown } | null) | undefined
  hidden?: boolean | undefined
}
type AssetExpressionAsset = { asset: AssetExpressionAssetInfo }
type AssetExpressionAliasInfo = { name: string; group: string }
type AssetExpressionAlias = { alias: AssetExpressionAliasInfo }
type AssetExpressionRef = { asset_ref: { [x: string]: string } }
type AssetExpressionAll = {
  all: (
    | AssetExpressionAsset
    | AssetExpressionAlias
    | AssetExpressionRef
    | AssetExpressionAny
    | AssetExpressionAll
  )[]
}
type AssetExpressionAny = {
  any: (
    | AssetExpressionAsset
    | AssetExpressionAlias
    | AssetExpressionRef
    | AssetExpressionAny
    | AssetExpressionAll
  )[]
}
type DAGDetailsResponse = {
  dag_id: string
  dag_display_name: string
  is_paused: boolean
  scheduling_state?: DagSchedulingState | undefined
  is_stale: boolean
  last_parsed_time: string | ({ [x: string]: unknown } | null)
  last_parse_duration: number | ({ [x: string]: unknown } | null)
  last_expired: string | ({ [x: string]: unknown } | null)
  bundle_name: string | ({ [x: string]: unknown } | null)
  bundle_version: string | ({ [x: string]: unknown } | null)
  relative_fileloc: string | ({ [x: string]: unknown } | null)
  fileloc: string | ({ [x: string]: unknown } | null)
  description: string | ({ [x: string]: unknown } | null)
  timetable_summary: string | ({ [x: string]: unknown } | null)
  timetable_description: string | ({ [x: string]: unknown } | null)
  timetable_partitioned: boolean
  timetable_periodic: boolean
  tags: DagTagResponse[]
  max_active_tasks: number
  max_active_runs: number | ({ [x: string]: unknown } | null)
  max_consecutive_failed_dag_runs: number
  has_task_concurrency_limits: boolean
  has_import_errors: boolean
  next_dagrun_logical_date: string | ({ [x: string]: unknown } | null)
  next_dagrun_data_interval_start: string | ({ [x: string]: unknown } | null)
  next_dagrun_data_interval_end: string | ({ [x: string]: unknown } | null)
  next_dagrun_run_after: string | ({ [x: string]: unknown } | null)
  allowed_run_types: DagRunType[] | ({ [x: string]: unknown } | null)
  owners: string[]
  catchup: boolean
  dag_run_timeout: string | ({ [x: string]: unknown } | null)
  asset_expression:
    | AssetExpressionAsset
    | AssetExpressionAlias
    | AssetExpressionRef
    | AssetExpressionAny
    | AssetExpressionAll
    | ({ [x: string]: unknown } | null)
  doc_md: string | ({ [x: string]: unknown } | null)
  start_date: string | ({ [x: string]: unknown } | null)
  end_date: string | ({ [x: string]: unknown } | null)
  is_paused_upon_creation: boolean | ({ [x: string]: unknown } | null)
  params: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
  render_template_as_native_obj: boolean
  template_search_path: string[] | ({ [x: string]: unknown } | null)
  timezone: string | ({ [x: string]: unknown } | null)
  last_parsed: string | ({ [x: string]: unknown } | null)
  default_args: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
  rerun_with_latest_version?: boolean | ({ [x: string]: unknown } | null) | undefined
  owner_links?: { [x: string]: string } | ({ [x: string]: unknown } | null) | undefined
  is_favorite?: boolean | undefined
  active_runs_count?: number | undefined
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
  latest_dag_version: DagVersionResponse | ({ [x: string]: unknown } | null)
  is_backfillable: boolean
  file_token: string
  concurrency: number
}
type BulkDAGBody = {
  is_paused?: boolean | ({ [x: string]: unknown } | null) | undefined
  scheduling_state?: DagSchedulingState | ({ [x: string]: unknown } | null) | undefined
  dag_id: string
}
type BulkCreateActionBulkDAGBody = {
  action: 'create'
  entities: BulkDAGBody[]
  action_on_existence?: BulkActionOnExistence | undefined
}
type BulkUpdateActionBulkDAGBody = {
  action: 'update'
  entities: BulkDAGBody[]
  update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
  action_on_non_existence?: BulkActionNotOnExistence | undefined
}
type BulkDeleteActionBulkDAGBody = {
  action: 'delete'
  entities: (string | BulkDAGBody)[]
  action_on_non_existence?: BulkActionNotOnExistence | undefined
}
type BulkBodyBulkDAGBody = {
  actions: (
    | BulkCreateActionBulkDAGBody
    | BulkUpdateActionBulkDAGBody
    | BulkDeleteActionBulkDAGBody
  )[]
}
type EventLogResponse = {
  event_log_id: number
  when: string
  task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
  dag_id: string | ({ [x: string]: unknown } | null)
  task_id: string | ({ [x: string]: unknown } | null)
  run_id: string | ({ [x: string]: unknown } | null)
  map_index: number | ({ [x: string]: unknown } | null)
  try_number: number | ({ [x: string]: unknown } | null)
  event: string
  logical_date: string | ({ [x: string]: unknown } | null)
  owner: string | ({ [x: string]: unknown } | null)
  owner_display_name: string | ({ [x: string]: unknown } | null)
  extra: string | ({ [x: string]: unknown } | null)
  dag_display_name?: string | ({ [x: string]: unknown } | null) | undefined
  task_display_name?: string | ({ [x: string]: unknown } | null) | undefined
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type EventLogCollectionResponse = {
  event_logs: EventLogResponse[]
  total_entries: number
  total_entries_limit?: number | ({ [x: string]: unknown } | null) | undefined
  next_cursor?: string | ({ [x: string]: unknown } | null) | undefined
  previous_cursor?: string | ({ [x: string]: unknown } | null) | undefined
}
type ExtraLinkCollectionResponse = {
  extra_links: { [x: string]: string | ({ [x: string]: unknown } | null) }
  total_entries: number
}
type ImportErrorResponse = {
  import_error_id: number
  timestamp: string
  filename: string
  source_reference: string | ({ [x: string]: unknown } | null)
  bundle_name: string | ({ [x: string]: unknown } | null)
  stack_trace: string
  file_token: string
}
type ImportErrorCollectionResponse = { import_errors: ImportErrorResponse[]; total_entries: number }
type JobCollectionResponse = { jobs: JobResponse[]; total_entries: number }
type FastAPIAppResponse = { app: string; url_prefix: string; name: string }
type FastAPIRootMiddlewareResponse = { middleware: string; name: string }
type PluginAppliesToResponse = { [x: string]: string[] }
type ExternalViewResponse = {
  name: string
  icon?: string | ({ [x: string]: unknown } | null) | undefined
  icon_dark_mode?: string | ({ [x: string]: unknown } | null) | undefined
  url_route?: string | ({ [x: string]: unknown } | null) | undefined
  category?: string | ({ [x: string]: unknown } | null) | undefined
  nav_top_level?: boolean | ({ [x: string]: unknown } | null) | undefined
  applies_to?: PluginAppliesToResponse | ({ [x: string]: unknown } | null) | undefined
  show_icon_with_label?: boolean | ({ [x: string]: unknown } | null) | undefined
  href: string
  destination?: 'nav' | 'dag' | 'dag_run' | 'task' | 'task_instance' | 'asset' | 'base' | undefined
}
type ReactAppResponse = {
  name: string
  icon?: string | ({ [x: string]: unknown } | null) | undefined
  icon_dark_mode?: string | ({ [x: string]: unknown } | null) | undefined
  url_route?: string | ({ [x: string]: unknown } | null) | undefined
  category?: string | ({ [x: string]: unknown } | null) | undefined
  nav_top_level?: boolean | ({ [x: string]: unknown } | null) | undefined
  applies_to?: PluginAppliesToResponse | ({ [x: string]: unknown } | null) | undefined
  show_icon_with_label?: boolean | ({ [x: string]: unknown } | null) | undefined
  bundle_url: string
  destination?:
    | 'nav'
    | 'dag'
    | 'dag_run'
    | 'task'
    | 'task_instance'
    | 'asset'
    | 'base'
    | 'dashboard'
    | 'dag_overview'
    | 'task_overview'
    | undefined
}
type PluginLinkActionResponse = {
  name: string
  destination: 'dag' | 'dag_run' | 'task_instance'
  icon?: string | ({ [x: string]: unknown } | null) | undefined
  icon_dark_mode?: string | ({ [x: string]: unknown } | null) | undefined
  applies_to?: PluginAppliesToResponse | ({ [x: string]: unknown } | null) | undefined
  action_type: 'link'
  href: string
}
type PluginReactActionResponse = {
  name: string
  destination: 'dag' | 'dag_run' | 'task_instance'
  icon?: string | ({ [x: string]: unknown } | null) | undefined
  icon_dark_mode?: string | ({ [x: string]: unknown } | null) | undefined
  applies_to?: PluginAppliesToResponse | ({ [x: string]: unknown } | null) | undefined
  action_type: 'react'
  bundle_url: string
}
type AppBuilderViewResponse = {
  name?: string | ({ [x: string]: unknown } | null) | undefined
  category?: string | ({ [x: string]: unknown } | null) | undefined
  view?: string | ({ [x: string]: unknown } | null) | undefined
  label?: string | ({ [x: string]: unknown } | null) | undefined
}
type AppBuilderMenuItemResponse = {
  name: string
  href: string
  category?: string | ({ [x: string]: unknown } | null) | undefined
}
type PluginResponse = {
  name: string
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
  macros: string[]
  flask_blueprints: string[]
  fastapi_apps: FastAPIAppResponse[]
  fastapi_root_middlewares: FastAPIRootMiddlewareResponse[]
  external_views: ExternalViewResponse[]
  react_apps: ReactAppResponse[]
  ui_actions?: (PluginLinkActionResponse | PluginReactActionResponse)[] | undefined
  appbuilder_views: AppBuilderViewResponse[]
  appbuilder_menu_items: AppBuilderMenuItemResponse[]
  global_operator_extra_links: string[]
  operator_extra_links: string[]
  source: string
  listeners: string[]
  timetables: string[]
}
type PluginCollectionResponse = { plugins: PluginResponse[]; total_entries: number }
type PluginImportErrorResponse = { source: string; error: string }
type PluginImportErrorCollectionResponse = {
  import_errors: PluginImportErrorResponse[]
  total_entries: number
}
type PoolResponse = {
  name: string
  slots: number
  description?: string | ({ [x: string]: unknown } | null) | undefined
  include_deferred: boolean
  occupied_slots: number
  running_slots: number
  queued_slots: number
  scheduled_slots: number
  open_slots: number
  deferred_slots: number
  team_name: string | ({ [x: string]: unknown } | null)
}
type PoolPatchBody = {
  pool?: string | ({ [x: string]: unknown } | null) | undefined
  slots?: number | ({ [x: string]: unknown } | null) | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  include_deferred?: boolean | ({ [x: string]: unknown } | null) | undefined
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type PoolCollectionResponse = { pools: PoolResponse[]; total_entries: number }
type PoolBody = {
  name: string
  slots: number
  description?: string | ({ [x: string]: unknown } | null) | undefined
  include_deferred?: boolean | undefined
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type BulkCreateActionPoolBody = {
  action: 'create'
  entities: PoolBody[]
  action_on_existence?: BulkActionOnExistence | undefined
}
type BulkUpdateActionPoolBody = {
  action: 'update'
  entities: PoolBody[]
  update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
  action_on_non_existence?: BulkActionNotOnExistence | undefined
}
type BulkDeleteActionPoolBody = {
  action: 'delete'
  entities: (string | PoolBody)[]
  action_on_non_existence?: BulkActionNotOnExistence | undefined
}
type BulkBodyPoolBody = {
  actions: (BulkCreateActionPoolBody | BulkUpdateActionPoolBody | BulkDeleteActionPoolBody)[]
}
type ProviderResponse = {
  package_name: string
  description: string
  version: string
  documentation_url: string | ({ [x: string]: unknown } | null)
}
type ProviderCollectionResponse = { providers: ProviderResponse[]; total_entries: number }
type ProviderIntegrationInfo = {
  integration_name: string
  external_doc_url?: string | ({ [x: string]: unknown } | null) | undefined
  how_to_guide?: string[] | ({ [x: string]: unknown } | null) | undefined
  logo?: string | ({ [x: string]: unknown } | null) | undefined
  tags?: string[] | ({ [x: string]: unknown } | null) | undefined
}
type ProviderIntegrationModulesInfo = { integration_name: string; python_modules: string[] }
type ProviderAssetUriInfo = {
  schemes: string[]
  handler?: string | ({ [x: string]: unknown } | null) | undefined
  factory?: string | ({ [x: string]: unknown } | null) | undefined
  to_openlineage_converter?: string | ({ [x: string]: unknown } | null) | undefined
}
type ProviderDialectInfo = {
  dialect_type?: string | ({ [x: string]: unknown } | null) | undefined
  dialect_class_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type ProviderTransferInfo = {
  source_integration_name: string
  target_integration_name: string
  python_module: string
  how_to_guide?: string | ({ [x: string]: unknown } | null) | undefined
}
type ProviderConnectionUiFieldBehaviourInfo = {
  hidden_fields?: string[] | ({ [x: string]: unknown } | null) | undefined
  relabeling?: { [x: string]: string } | ({ [x: string]: unknown } | null) | undefined
  placeholders?: { [x: string]: string } | ({ [x: string]: unknown } | null) | undefined
}
type ProviderConnectionFieldInfo = {
  label: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  schema: { [x: string]: unknown }
}
type ProviderConnectionTypeInfo = {
  connection_type: string
  hook_class_name: string
  hook_name?: string | ({ [x: string]: unknown } | null) | undefined
  ui_field_behaviour?:
    | ProviderConnectionUiFieldBehaviourInfo
    | ({ [x: string]: unknown } | null)
    | undefined
  conn_fields?:
    | { [x: string]: ProviderConnectionFieldInfo }
    | ({ [x: string]: unknown } | null)
    | undefined
  external_services?: string[] | ({ [x: string]: unknown } | null) | undefined
}
type ProviderRemoteLoggingInfo = { classpath: string; scheme: string }
type ProviderConfigOptionInfo = {
  description?: string | ({ [x: string]: unknown } | null) | undefined
  version_added?: string | ({ [x: string]: unknown } | null) | undefined
  type?: string | ({ [x: string]: unknown } | null) | undefined
  example?: string | number | number | ({ [x: string]: unknown } | null) | undefined
  default?: string | number | number | ({ [x: string]: unknown } | null) | undefined
  sensitive?: boolean | ({ [x: string]: unknown } | null) | undefined
  is_template?: boolean | ({ [x: string]: unknown } | null) | undefined
  see_also?: string | ({ [x: string]: unknown } | null) | undefined
}
type ProviderConfigSectionInfo = {
  description?: string | ({ [x: string]: unknown } | null) | undefined
  options?: { [x: string]: ProviderConfigOptionInfo } | undefined
}
type ProviderTaskDecoratorInfo = {
  name?: string | ({ [x: string]: unknown } | null) | undefined
  class_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type ProviderPluginInfo = {
  name?: string | ({ [x: string]: unknown } | null) | undefined
  plugin_class?: string | ({ [x: string]: unknown } | null) | undefined
}
type ProviderInfoResponse = {
  package_name?: string | ({ [x: string]: unknown } | null) | undefined
  name?: string | ({ [x: string]: unknown } | null) | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  documentation_url?: string | ({ [x: string]: unknown } | null) | undefined
  filesystems?: string[] | ({ [x: string]: unknown } | null) | undefined
  integrations?: ProviderIntegrationInfo[] | ({ [x: string]: unknown } | null) | undefined
  operators?: ProviderIntegrationModulesInfo[] | ({ [x: string]: unknown } | null) | undefined
  sensors?: ProviderIntegrationModulesInfo[] | ({ [x: string]: unknown } | null) | undefined
  hooks?: ProviderIntegrationModulesInfo[] | ({ [x: string]: unknown } | null) | undefined
  triggers?: ProviderIntegrationModulesInfo[] | ({ [x: string]: unknown } | null) | undefined
  bundles?: ProviderIntegrationModulesInfo[] | ({ [x: string]: unknown } | null) | undefined
  asset_uris?: ProviderAssetUriInfo[] | ({ [x: string]: unknown } | null) | undefined
  dialects?: ProviderDialectInfo[] | ({ [x: string]: unknown } | null) | undefined
  transfers?: ProviderTransferInfo[] | ({ [x: string]: unknown } | null) | undefined
  connection_types?: ProviderConnectionTypeInfo[] | ({ [x: string]: unknown } | null) | undefined
  extra_links?: string[] | ({ [x: string]: unknown } | null) | undefined
  secrets_backends?: string[] | ({ [x: string]: unknown } | null) | undefined
  email_backends?: string[] | ({ [x: string]: unknown } | null) | undefined
  logging?: string[] | ({ [x: string]: unknown } | null) | undefined
  remote_logging?: ProviderRemoteLoggingInfo[] | ({ [x: string]: unknown } | null) | undefined
  auth_backends?: string[] | ({ [x: string]: unknown } | null) | undefined
  auth_managers?: string[] | ({ [x: string]: unknown } | null) | undefined
  notifications?: string[] | ({ [x: string]: unknown } | null) | undefined
  executors?: string[] | ({ [x: string]: unknown } | null) | undefined
  db_managers?: string[] | ({ [x: string]: unknown } | null) | undefined
  cli?: string[] | ({ [x: string]: unknown } | null) | undefined
  config?:
    | { [x: string]: ProviderConfigSectionInfo }
    | ({ [x: string]: unknown } | null)
    | undefined
  task_decorators?: ProviderTaskDecoratorInfo[] | ({ [x: string]: unknown } | null) | undefined
  plugins?: ProviderPluginInfo[] | ({ [x: string]: unknown } | null) | undefined
  queues?: string[] | ({ [x: string]: unknown } | null) | undefined
}
type ProviderDetailsResponse = {
  package_name: string
  description: string
  version: string
  documentation_url: string | ({ [x: string]: unknown } | null)
  provider_info: ProviderInfoResponse
}
type AssetStateStoreWriterKind = 'task' | 'watcher' | 'api'
type AssetStateStoreLastUpdatedBy = {
  kind: AssetStateStoreWriterKind
  dag_id?: string | ({ [x: string]: unknown } | null) | undefined
  run_id?: string | ({ [x: string]: unknown } | null) | undefined
  task_id?: string | ({ [x: string]: unknown } | null) | undefined
  map_index?: number | ({ [x: string]: unknown } | null) | undefined
  task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
  region_id?: string | undefined
  region_index?: number | undefined
  try_number?: number | ({ [x: string]: unknown } | null) | undefined
}
type AssetStateStoreResponse = {
  key: string
  value: JsonValue
  updated_at: string
  last_updated_by?: AssetStateStoreLastUpdatedBy | ({ [x: string]: unknown } | null) | undefined
}
type AssetStateStoreCollectionResponse = {
  asset_state_store: AssetStateStoreResponse[]
  total_entries: number
}
type AssetStateStoreBody = { value: JsonValue }
type TaskStateStoreResponse = {
  key: string
  value: JsonValue
  updated_at: string
  expires_at: string | ({ [x: string]: unknown } | null)
}
type TaskStateStoreCollectionResponse = {
  task_state_store: TaskStateStoreResponse[]
  total_entries: number
}
type TaskStateStoreBody = {
  value: JsonValue
  expires_at?: string | 'default' | ({ [x: string]: unknown } | null) | undefined
}
type TaskStateStorePatchBody = { value: JsonValue }
type XComResponseNative = {
  key: string
  timestamp: string
  logical_date: string | ({ [x: string]: unknown } | null)
  map_index: number
  region_id?: string | undefined
  region_index?: number | undefined
  task_id: string
  dag_id: string
  run_id: string
  dag_display_name: string
  task_display_name: string
  run_after: string
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
  value: { [x: string]: unknown }
}
type XComResponseString = {
  key: string
  timestamp: string
  logical_date: string | ({ [x: string]: unknown } | null)
  map_index: number
  region_id?: string | undefined
  region_index?: number | undefined
  task_id: string
  dag_id: string
  run_id: string
  dag_display_name: string
  task_display_name: string
  run_after: string
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
  value: string | ({ [x: string]: unknown } | null)
}
type XComUpdateBody = {
  value: { [x: string]: unknown }
  map_index?: number | undefined
  region_id?: string | ({ [x: string]: unknown } | null) | undefined
  region_index?: number | ({ [x: string]: unknown } | null) | undefined
}
type XComResponse = {
  key: string
  timestamp: string
  logical_date: string | ({ [x: string]: unknown } | null)
  map_index: number
  region_id?: string | undefined
  region_index?: number | undefined
  task_id: string
  dag_id: string
  run_id: string
  dag_display_name: string
  task_display_name: string
  run_after: string
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type XComCollectionResponse = { xcom_entries: XComResponse[]; total_entries: number }
type XComCreateBody = {
  key: string
  value: { [x: string]: unknown }
  map_index?: number | undefined
  region_id?: string | ({ [x: string]: unknown } | null) | undefined
  region_index?: number | ({ [x: string]: unknown } | null) | undefined
}
type PatchTaskInstanceBody = {
  new_state?: TaskInstanceState | ({ [x: string]: unknown } | null) | undefined
  region_id?: string | ({ [x: string]: unknown } | null) | undefined
  region_index?: number | ({ [x: string]: unknown } | null) | undefined
  note?: string | ({ [x: string]: unknown } | null) | undefined
  include_upstream?: boolean | undefined
  include_downstream?: boolean | undefined
  include_future?: boolean | undefined
  include_past?: boolean | undefined
}
type TaskInstanceCollectionResponse = {
  task_instances: TaskInstanceResponse[]
  total_entries?: number | ({ [x: string]: unknown } | null) | undefined
  total_entries_limit?: number | ({ [x: string]: unknown } | null) | undefined
  next_cursor?: string | ({ [x: string]: unknown } | null) | undefined
  previous_cursor?: string | ({ [x: string]: unknown } | null) | undefined
}
type TaskDependencyResponse = { name: string; reason: string }
type TaskDependencyCollectionResponse = { dependencies: TaskDependencyResponse[] }
type TaskInstanceHistoryResponse = {
  id: string
  task_id: string
  dag_id: string
  dag_run_id: string
  map_index: number
  region_id?: string | undefined
  region_index?: number | undefined
  loop_iteration?: LoopIterationResponse | ({ [x: string]: unknown } | null) | undefined
  start_date: string | ({ [x: string]: unknown } | null)
  end_date: string | ({ [x: string]: unknown } | null)
  duration: number | ({ [x: string]: unknown } | null)
  state: TaskInstanceState | ({ [x: string]: unknown } | null)
  try_number: number
  max_tries: number
  task_display_name: string
  dag_display_name: string
  hostname: string | ({ [x: string]: unknown } | null)
  unixname: string | ({ [x: string]: unknown } | null)
  pool: string
  pool_slots: number
  queue: string | ({ [x: string]: unknown } | null)
  priority_weight: number | ({ [x: string]: unknown } | null)
  operator: string | ({ [x: string]: unknown } | null)
  operator_name: string | ({ [x: string]: unknown } | null)
  queued_when: string | ({ [x: string]: unknown } | null)
  scheduled_when: string | ({ [x: string]: unknown } | null)
  pid: number | ({ [x: string]: unknown } | null)
  executor: string | ({ [x: string]: unknown } | null)
  executor_config: string
  dag_version: DagVersionResponse | ({ [x: string]: unknown } | null)
  note?: string | ({ [x: string]: unknown } | null) | undefined
  state_reason?: string | ({ [x: string]: unknown } | null) | undefined
  retry_at?: string | ({ [x: string]: unknown } | null) | undefined
}
type TaskInstanceHistoryCollectionResponse = {
  task_instances: TaskInstanceHistoryResponse[]
  total_entries: number
}
type BulkTaskInstanceBody = {
  new_state?: TaskInstanceState | ({ [x: string]: unknown } | null) | undefined
  region_id?: string | ({ [x: string]: unknown } | null) | undefined
  region_index?: number | ({ [x: string]: unknown } | null) | undefined
  note?: string | ({ [x: string]: unknown } | null) | undefined
  include_upstream?: boolean | undefined
  include_downstream?: boolean | undefined
  include_future?: boolean | undefined
  include_past?: boolean | undefined
  task_id: string
  map_index?: number | ({ [x: string]: unknown } | null) | undefined
  dag_id?: string | ({ [x: string]: unknown } | null) | undefined
  dag_run_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type BulkCreateActionBulkTaskInstanceBody = {
  action: 'create'
  entities: BulkTaskInstanceBody[]
  action_on_existence?: BulkActionOnExistence | undefined
}
type BulkUpdateActionBulkTaskInstanceBody = {
  action: 'update'
  entities: BulkTaskInstanceBody[]
  update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
  action_on_non_existence?: BulkActionNotOnExistence | undefined
}
type BulkDeleteActionBulkTaskInstanceBody = {
  action: 'delete'
  entities: (string | BulkTaskInstanceBody)[]
  action_on_non_existence?: BulkActionNotOnExistence | undefined
}
type BulkBodyBulkTaskInstanceBody = {
  actions: (
    | BulkCreateActionBulkTaskInstanceBody
    | BulkUpdateActionBulkTaskInstanceBody
    | BulkDeleteActionBulkTaskInstanceBody
  )[]
}
type TaskInstancesBatchBody = {
  dag_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
  dag_run_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
  task_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
  state?:
    | (TaskInstanceState | ({ [x: string]: unknown } | null))[]
    | ({ [x: string]: unknown } | null)
    | undefined
  run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
  run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
  run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
  run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
  logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
  logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
  logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
  logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
  start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
  start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
  start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
  start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
  end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
  end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
  end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
  end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
  duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
  duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
  duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
  duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
  pool?: string[] | ({ [x: string]: unknown } | null) | undefined
  queue?: string[] | ({ [x: string]: unknown } | null) | undefined
  executor?: string[] | ({ [x: string]: unknown } | null) | undefined
  page_offset?: number | undefined
  page_limit?: number | undefined
  order_by?: string | ({ [x: string]: unknown } | null) | undefined
}
type ClearTaskInstancesBody = {
  dry_run?: boolean | undefined
  start_date?: string | ({ [x: string]: unknown } | null) | undefined
  end_date?: string | ({ [x: string]: unknown } | null) | undefined
  only_failed?: boolean | undefined
  only_running?: boolean | undefined
  reset_dag_runs?: boolean | undefined
  task_ids?: (string | unknown[])[] | ({ [x: string]: unknown } | null) | undefined
  task_group_id?: string | ({ [x: string]: unknown } | null) | undefined
  task_instance_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
  whole_expansion_ids?: string[] | undefined
  include_later_loop_iterations?: boolean | undefined
  dag_run_id?: string | ({ [x: string]: unknown } | null) | undefined
  include_upstream?: boolean | undefined
  include_downstream?: boolean | undefined
  include_dependent_dags?: boolean | ({ [x: string]: unknown } | null) | undefined
  include_future?: boolean | undefined
  include_past?: boolean | undefined
  run_on_latest_version?: boolean | ({ [x: string]: unknown } | null) | undefined
  prevent_running_task?: boolean | undefined
  keep_task_state?: boolean | undefined
  note?: string | ({ [x: string]: unknown } | null) | undefined
}
type TimeDelta = {
  __type?: string | undefined
  days: number
  seconds: number
  microseconds: number
}
type TaskResponse = {
  task_id: string | ({ [x: string]: unknown } | null)
  task_display_name: string | ({ [x: string]: unknown } | null)
  owner: string | ({ [x: string]: unknown } | null)
  start_date: string | ({ [x: string]: unknown } | null)
  end_date: string | ({ [x: string]: unknown } | null)
  trigger_rule: string | ({ [x: string]: unknown } | null)
  depends_on_past: boolean
  wait_for_downstream: boolean
  retries: number | ({ [x: string]: unknown } | null)
  queue: string | ({ [x: string]: unknown } | null)
  pool: string | ({ [x: string]: unknown } | null)
  pool_slots: number | ({ [x: string]: unknown } | null)
  execution_timeout: TimeDelta | ({ [x: string]: unknown } | null)
  retry_delay: TimeDelta | ({ [x: string]: unknown } | null)
  retry_exponential_backoff: number
  priority_weight: number | ({ [x: string]: unknown } | null)
  weight_rule: string | ({ [x: string]: unknown } | null)
  ui_color: string | ({ [x: string]: unknown } | null)
  ui_fgcolor: string | ({ [x: string]: unknown } | null)
  template_fields: string[] | ({ [x: string]: unknown } | null)
  downstream_task_ids: string[] | ({ [x: string]: unknown } | null)
  doc_md: string | ({ [x: string]: unknown } | null)
  operator_name: string | ({ [x: string]: unknown } | null)
  params: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
  class_ref: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
  is_mapped: boolean | ({ [x: string]: unknown } | null)
  extra_links: string[]
}
type TaskCollectionResponse = { tasks: TaskResponse[]; total_entries: number }
type TriggerKind = 'task' | 'callback' | 'asset_watcher'
type TriggerTaskInstanceReferenceResponse = {
  dag_id: string
  dag_run_id: string
  task_id: string
  map_index: number
  try_number: number
  state: TaskInstanceState | ({ [x: string]: unknown } | null)
}
type CallbackState = 'scheduled' | 'pending' | 'queued' | 'running' | 'success' | 'failed'
type TriggerCallbackReferenceResponse = {
  id: string
  dag_id: string | ({ [x: string]: unknown } | null)
  dag_run_id: string | ({ [x: string]: unknown } | null)
  state: CallbackState | ({ [x: string]: unknown } | null)
}
type TriggerAssetWatcherReferenceResponse = {
  asset_id: number
  asset_name: string
  asset_uri: string
  watcher_name: string
  scheduled_dag_ids: string[]
}
type TriggerDetailResponse = {
  id: number
  kind: TriggerKind
  classpath: string
  created_date: string
  queue: string | ({ [x: string]: unknown } | null)
  team_name: string | ({ [x: string]: unknown } | null)
  status: TriggerStatus
  triggerer_hostname: string | ({ [x: string]: unknown } | null)
  consecutive_failures: number
  first_failed_at: string | ({ [x: string]: unknown } | null)
  last_failed_at: string | ({ [x: string]: unknown } | null)
  last_error: string | ({ [x: string]: unknown } | null)
  last_event_at: string | ({ [x: string]: unknown } | null)
  dag_id: string | ({ [x: string]: unknown } | null)
  task_instance: TriggerTaskInstanceReferenceResponse | ({ [x: string]: unknown } | null)
  callback: TriggerCallbackReferenceResponse | ({ [x: string]: unknown } | null)
  asset_watchers: TriggerAssetWatcherReferenceResponse[]
}
type TriggerCollectionResponse = { triggers: TriggerDetailResponse[]; total_entries: number }
type VariableResponse = {
  key: string
  value?: string | ({ [x: string]: unknown } | null) | undefined
  description: string | ({ [x: string]: unknown } | null)
  is_encrypted: boolean
  team_name: string | ({ [x: string]: unknown } | null)
}
type VariableBody = {
  key: string
  value: JsonValue
  description?: string | ({ [x: string]: unknown } | null) | undefined
  team_name?: string | ({ [x: string]: unknown } | null) | undefined
}
type VariableCollectionResponse = { variables: VariableResponse[]; total_entries: number }
type BulkCreateActionVariableBody = {
  action: 'create'
  entities: VariableBody[]
  action_on_existence?: BulkActionOnExistence | undefined
}
type BulkUpdateActionVariableBody = {
  action: 'update'
  entities: VariableBody[]
  update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
  action_on_non_existence?: BulkActionNotOnExistence | undefined
}
type BulkDeleteActionVariableBody = {
  action: 'delete'
  entities: (string | VariableBody)[]
  action_on_non_existence?: BulkActionNotOnExistence | undefined
}
type BulkBodyVariableBody = {
  actions: (
    | BulkCreateActionVariableBody
    | BulkUpdateActionVariableBody
    | BulkDeleteActionVariableBody
  )[]
}
type StructuredLogMessage = { timestamp?: string | undefined; event: string }
type TaskInstancesLogResponse = {
  content: StructuredLogMessage[] | string[]
  continuation_token: string | ({ [x: string]: unknown } | null)
}
type ExternalLogUrlResponse = { url: string }
type DAGTagCollectionResponse = { tags: string[]; total_entries: number }
type DagVersionDiffSerializerVersions = {
  base: number | ({ [x: string]: unknown } | null)
  target: number | ({ [x: string]: unknown } | null)
}
type DagVersionDiffMode = 'observed_state' | 'unavailable'
type DagVersionDiffValuesStatus = 'available' | 'unavailable'
type DagVersionDiffOperation = 'added' | 'removed' | 'changed'
type DagVersionDiffCategory =
  | 'asset'
  | 'authorization'
  | 'callback'
  | 'deadline'
  | 'dependency'
  | 'metadata'
  | 'param'
  | 'provenance'
  | 'schedule'
  | 'task'
  | 'unknown'
type DagVersionDiffImpact = 'authorization' | 'execution' | 'metadata' | 'provenance' | 'unknown'
type DagVersionDiffChangeResponse = {
  path: string
  operation: DagVersionDiffOperation
  category: DagVersionDiffCategory
  impact: DagVersionDiffImpact
  occurrence_count: number
  before_digest?: string | ({ [x: string]: unknown } | null) | undefined
  after_digest?: string | ({ [x: string]: unknown } | null) | undefined
  before_value?: { [x: string]: unknown } | undefined
  after_value?: { [x: string]: unknown } | undefined
}
type DagVersionDiffResponse = {
  diff_schema_version: number
  base_version_number: number
  target_version_number: number
  serializer_versions: DagVersionDiffSerializerVersions
  mode: DagVersionDiffMode
  unavailable_reason?: string | ({ [x: string]: unknown } | null) | undefined
  values_status: DagVersionDiffValuesStatus
  truncated: boolean
  total_changes: number
  changes: DagVersionDiffChangeResponse[]
}
type DAGVersionCollectionResponse = { dag_versions: DagVersionResponse[]; total_entries: number }
type UpdateHITLDetailPayload = {
  chosen_options: string[]
  params_input?: { [x: string]: unknown } | undefined
  request_created_at?: string | ({ [x: string]: unknown } | null) | undefined
}
type HITLUser = { id: string; name: string }
type HITLDetailResponse = {
  responded_by: HITLUser
  responded_at: string
  chosen_options: string[]
  params_input?: { [x: string]: unknown } | undefined
}
type HITLDetail = {
  options: string[]
  subject: string
  body?: string | ({ [x: string]: unknown } | null) | undefined
  defaults?: string[] | ({ [x: string]: unknown } | null) | undefined
  multiple?: boolean | undefined
  params?: { [x: string]: unknown } | undefined
  assigned_users?: HITLUser[] | undefined
  created_at: string
  responded_by_user?: HITLUser | ({ [x: string]: unknown } | null) | undefined
  responded_at?: string | ({ [x: string]: unknown } | null) | undefined
  chosen_options?: string[] | ({ [x: string]: unknown } | null) | undefined
  params_input?: { [x: string]: unknown } | undefined
  response_received?: boolean | undefined
  task_instance: TaskInstanceResponse
}
type HITLDetailHistory = {
  options: string[]
  subject: string
  body?: string | ({ [x: string]: unknown } | null) | undefined
  defaults?: string[] | ({ [x: string]: unknown } | null) | undefined
  multiple?: boolean | undefined
  params?: { [x: string]: unknown } | undefined
  assigned_users?: HITLUser[] | undefined
  created_at: string
  responded_by_user?: HITLUser | ({ [x: string]: unknown } | null) | undefined
  responded_at?: string | ({ [x: string]: unknown } | null) | undefined
  chosen_options?: string[] | ({ [x: string]: unknown } | null) | undefined
  params_input?: { [x: string]: unknown } | undefined
  response_received?: boolean | undefined
  task_instance: TaskInstanceHistoryResponse
}
type HITLDetailCollection = { hitl_details: HITLDetail[]; total_entries: number }
type HealthStatus = 'healthy' | 'unhealthy'
type BaseInfoResponse = { status: HealthStatus | ({ [x: string]: unknown } | null) }
type DetailedHealthStatus = 'healthy' | 'degraded' | 'down'
type SchedulerInstanceInfoResponse = {
  hostname: string | ({ [x: string]: unknown } | null)
  latest_scheduler_heartbeat: string | ({ [x: string]: unknown } | null)
}
type SchedulerInfoResponse = {
  status: HealthStatus | ({ [x: string]: unknown } | null)
  latest_scheduler_heartbeat: string | ({ [x: string]: unknown } | null)
  detailed_status: DetailedHealthStatus | ({ [x: string]: unknown } | null)
  instances?: SchedulerInstanceInfoResponse[] | ({ [x: string]: unknown } | null) | undefined
}
type TriggererInstanceInfoResponse = {
  hostname: string | ({ [x: string]: unknown } | null)
  latest_triggerer_heartbeat: string | ({ [x: string]: unknown } | null)
  team_names: string[]
}
type TriggererInfoResponse = {
  status: HealthStatus | ({ [x: string]: unknown } | null)
  latest_triggerer_heartbeat: string | ({ [x: string]: unknown } | null)
  detailed_status: DetailedHealthStatus | ({ [x: string]: unknown } | null)
  instances?: TriggererInstanceInfoResponse[] | ({ [x: string]: unknown } | null) | undefined
}
type DagProcessorInstanceInfoResponse = {
  hostname: string | ({ [x: string]: unknown } | null)
  latest_dag_processor_heartbeat: string | ({ [x: string]: unknown } | null)
  bundle_names: string[] | ({ [x: string]: unknown } | null)
}
type DagProcessorInfoResponse = {
  status: HealthStatus | ({ [x: string]: unknown } | null)
  latest_dag_processor_heartbeat: string | ({ [x: string]: unknown } | null)
  detailed_status: DetailedHealthStatus | ({ [x: string]: unknown } | null)
  instances?: DagProcessorInstanceInfoResponse[] | ({ [x: string]: unknown } | null) | undefined
}
type HealthInfoResponse = {
  metadatabase: BaseInfoResponse
  scheduler: SchedulerInfoResponse
  triggerer: TriggererInfoResponse
  dag_processor?: DagProcessorInfoResponse | ({ [x: string]: unknown } | null) | undefined
}
type VersionInfo = { version: string; git_version: string | ({ [x: string]: unknown } | null) }
type CliLoginMetadataResponse = {
  grant_types_supported: string[]
  code_challenge_methods_supported: string[]
  authorization_endpoint: string | ({ [x: string]: unknown } | null)
  device_authorization_endpoint: string | ({ [x: string]: unknown } | null)
  token_endpoint: string | ({ [x: string]: unknown } | null)
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v2/assets': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                uri?: string[] | undefined
                uri_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                uri_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_ids?: string[] | undefined
                trigger_id?: number | ({ [x: string]: unknown } | null) | undefined
                only_active?: boolean | undefined
                order_by?: string[] | undefined
              }
            }
            output: AssetCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                uri?: string[] | undefined
                uri_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                uri_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_ids?: string[] | undefined
                trigger_id?: number | ({ [x: string]: unknown } | null) | undefined
                only_active?: boolean | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                uri?: string[] | undefined
                uri_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                uri_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_ids?: string[] | undefined
                trigger_id?: number | ({ [x: string]: unknown } | null) | undefined
                only_active?: boolean | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                uri?: string[] | undefined
                uri_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                uri_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_ids?: string[] | undefined
                trigger_id?: number | ({ [x: string]: unknown } | null) | undefined
                only_active?: boolean | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                uri?: string[] | undefined
                uri_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                uri_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_ids?: string[] | undefined
                trigger_id?: number | ({ [x: string]: unknown } | null) | undefined
                only_active?: boolean | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/assets/aliases': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
              }
            }
            output: AssetAliasCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/assets/aliases/:asset_alias_id': {
      $get:
        | {
            input: { param: { asset_alias_id: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset_alias_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { asset_alias_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset_alias_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { asset_alias_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/assets/events': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                asset_id?: number | ({ [x: string]: unknown } | null) | undefined
                trigger_id?: number | ({ [x: string]: unknown } | null) | undefined
                source_dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_task_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_run_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_map_index?: number | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_regexp_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                extra?: string[] | undefined
                timestamp_gte?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_gt?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_lte?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_lt?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: AssetEventCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                asset_id?: number | ({ [x: string]: unknown } | null) | undefined
                trigger_id?: number | ({ [x: string]: unknown } | null) | undefined
                source_dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_task_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_run_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_map_index?: number | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_regexp_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                extra?: string[] | undefined
                timestamp_gte?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_gt?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_lte?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_lt?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                asset_id?: number | ({ [x: string]: unknown } | null) | undefined
                trigger_id?: number | ({ [x: string]: unknown } | null) | undefined
                source_dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_task_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_run_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_map_index?: number | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_regexp_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                extra?: string[] | undefined
                timestamp_gte?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_gt?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_lte?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_lt?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                asset_id?: number | ({ [x: string]: unknown } | null) | undefined
                trigger_id?: number | ({ [x: string]: unknown } | null) | undefined
                source_dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_task_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_run_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_map_index?: number | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_regexp_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                extra?: string[] | undefined
                timestamp_gte?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_gt?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_lte?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_lt?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                asset_id?: number | ({ [x: string]: unknown } | null) | undefined
                trigger_id?: number | ({ [x: string]: unknown } | null) | undefined
                source_dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_task_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_run_id?: string | ({ [x: string]: unknown } | null) | undefined
                source_map_index?: number | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_regexp_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                extra?: string[] | undefined
                timestamp_gte?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_gt?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_lte?: string | ({ [x: string]: unknown } | null) | undefined
                timestamp_lt?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateAssetEventsBody }
            output: AssetEventResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAssetEventsBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAssetEventsBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAssetEventsBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAssetEventsBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/assets/:asset_id/materialize': {
      $post:
        | {
            input: { param: { asset_id: number } } & { json: MaterializeAssetBody }
            output: DAGRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset_id: number } } & { json: MaterializeAssetBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { asset_id: number } } & { json: MaterializeAssetBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { asset_id: number } } & { json: MaterializeAssetBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset_id: number } } & { json: MaterializeAssetBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { asset_id: number } } & { json: MaterializeAssetBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { asset_id: number } } & { json: MaterializeAssetBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/assets/:asset_id/queuedEvents': {
      $get:
        | {
            input: { param: { asset_id: number } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: QueuedEventCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset_id: number } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { asset_id: number } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset_id: number } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { asset_id: number } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { asset_id: number } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { asset_id: number } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset_id: number } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { asset_id: number } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/assets/:asset_id': {
      $get:
        | {
            input: { param: { asset_id: number } }
            output: AssetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { asset_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { asset_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/assets/queuedEvents': {
      $get:
        | {
            input: { param: { dag_id: string } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: QueuedEventCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { dag_id: string } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/assets/:asset_id/queuedEvents': {
      $get:
        | {
            input: { param: { dag_id: string; asset_id: number } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: QueuedEventResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; asset_id: number } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; asset_id: number } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; asset_id: number } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; asset_id: number } } & {
              query: { before?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { dag_id: string; asset_id: number } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dag_id: string; asset_id: number } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; asset_id: number } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; asset_id: number } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; asset_id: number } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; asset_id: number } } & {
              query: {
                before?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/backfills': {
      $get:
        | {
            input: {
              query: {
                dag_id: string
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: BackfillCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dag_id: string
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                dag_id: string
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                dag_id: string
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: BackfillPostBody }
            output: BackfillResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/backfills/:backfill_id': {
      $get:
        | {
            input: { param: { backfill_id: number } }
            output: BackfillResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/backfills/:backfill_id/dag_runs': {
      $get:
        | {
            input: { param: { backfill_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: BackfillDagRunCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { backfill_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { backfill_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { backfill_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { backfill_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/backfills/:backfill_id/pause': {
      $put:
        | {
            input: { param: { backfill_id: number } }
            output: BackfillResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/backfills/:backfill_id/unpause': {
      $put:
        | {
            input: { param: { backfill_id: number } }
            output: BackfillResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/backfills/:backfill_id/cancel': {
      $put:
        | {
            input: { param: { backfill_id: number } }
            output: BackfillResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { backfill_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/backfills/dry_run': {
      $post:
        | {
            input: { json: BackfillPostBody }
            output: DryRunBackfillCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: BackfillPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/connections/:connection_id': {
      $delete:
        | {
            input: { param: { connection_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { connection_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { connection_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { connection_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { connection_id: string } }
            output: ConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { connection_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { connection_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { connection_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: ConnectionBody }
            output: ConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: ConnectionBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: ConnectionBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: ConnectionBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: ConnectionBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: ConnectionBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/connections/enqueue-test': {
      $get:
        | {
            input: { header: { 'Airflow-Connection-Test-Token': string } }
            output: AsyncConnectionTestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Airflow-Connection-Test-Token': string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Airflow-Connection-Test-Token': string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Airflow-Connection-Test-Token': string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Airflow-Connection-Test-Token': string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: ConnectionTestRequestBody }
            output: ConnectionTestQueuedResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ConnectionTestRequestBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ConnectionTestRequestBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ConnectionTestRequestBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: ConnectionTestRequestBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/connections': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                connection_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                connection_id_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
              }
            }
            output: ConnectionCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                connection_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                connection_id_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                connection_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                connection_id_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                connection_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                connection_id_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                connection_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                connection_id_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: ConnectionBody }
            output: ConnectionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ConnectionBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ConnectionBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ConnectionBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: ConnectionBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { json: BulkBodyConnectionBody }
            output: BulkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkBodyConnectionBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BulkBodyConnectionBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BulkBodyConnectionBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/connections/test': {
      $post:
        | {
            input: { json: ConnectionBody }
            output: ConnectionTestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ConnectionBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ConnectionBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ConnectionBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/connections/defaults': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: HTTPExceptionResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: HTTPExceptionResponse; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: DAGRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: DAGRunPatchBody }
            output: DAGRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: DAGRunPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: DAGRunPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: DAGRunPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: DAGRunPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: DAGRunPatchBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns': {
      $patch:
        | {
            input: { param: { dag_id: string } } & { json: BulkBodyBulkDAGRunBody }
            output: BulkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & { json: BulkBodyBulkDAGRunBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & { json: BulkBodyBulkDAGRunBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & { json: BulkBodyBulkDAGRunBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { dag_id: string } } & {
              query: {
                partition_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                partition_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                conf_contains?: string | undefined
                run_type?: string[] | undefined
                state?: string[] | undefined
                dag_version?: number[] | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                triggering_user_name_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                triggering_user_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                consuming_asset_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: DAGRunCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                partition_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                partition_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                conf_contains?: string | undefined
                run_type?: string[] | undefined
                state?: string[] | undefined
                dag_version?: number[] | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                triggering_user_name_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                triggering_user_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                consuming_asset_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                partition_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                partition_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                conf_contains?: string | undefined
                run_type?: string[] | undefined
                state?: string[] | undefined
                dag_version?: number[] | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                triggering_user_name_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                triggering_user_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                consuming_asset_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                partition_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                partition_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                conf_contains?: string | undefined
                run_type?: string[] | undefined
                state?: string[] | undefined
                dag_version?: number[] | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                triggering_user_name_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                triggering_user_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                consuming_asset_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                partition_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                partition_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                conf_contains?: string | undefined
                run_type?: string[] | undefined
                state?: string[] | undefined
                dag_version?: number[] | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                triggering_user_name_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                triggering_user_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                consuming_asset_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                partition_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                partition_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                conf_contains?: string | undefined
                run_type?: string[] | undefined
                state?: string[] | undefined
                dag_version?: number[] | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                triggering_user_name_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                triggering_user_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                partition_key_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                consuming_asset_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { dag_id: { [x: string]: unknown } } } & { json: TriggerDAGRunPostBody }
            output: DAGRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: { [x: string]: unknown } } } & { json: TriggerDAGRunPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: { [x: string]: unknown } } } & { json: TriggerDAGRunPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: { [x: string]: unknown } } } & { json: TriggerDAGRunPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: { [x: string]: unknown } } } & { json: TriggerDAGRunPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: { [x: string]: unknown } } } & { json: TriggerDAGRunPostBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: { [x: string]: unknown } } } & { json: TriggerDAGRunPostBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/upstreamAssetEvents': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: AssetEventCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/clear': {
      $post:
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: DAGRunClearBody }
            output: ClearTaskInstanceCollectionResponse | DAGRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: DAGRunClearBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: DAGRunClearBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: DAGRunClearBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: DAGRunClearBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/wait': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                interval: number
                result?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                interval: number
                result?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                interval: number
                result?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                interval: number
                result?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                interval: number
                result?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                interval: number
                result?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                interval: number
                result?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/list': {
      $post:
        | {
            input: { param: { dag_id: '~' } } & { json: DAGRunsBatchBody }
            output: DAGRunCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: '~' } } & { json: DAGRunsBatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: '~' } } & { json: DAGRunsBatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: '~' } } & { json: DAGRunsBatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: '~' } } & { json: DAGRunsBatchBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/clearDagRuns': {
      $post:
        | {
            input: { param: { dag_id: string } } & { json: BulkDAGRunClearBody }
            output: ClearTaskInstanceCollectionResponse | DAGRunCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & { json: BulkDAGRunClearBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } } & { json: BulkDAGRunClearBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & { json: BulkDAGRunClearBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & { json: BulkDAGRunClearBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } } & { json: BulkDAGRunClearBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/clearPartitions': {
      $post:
        | {
            input: { param: { dag_id: string } } & { json: ClearPartitionsBody }
            output: ClearPartitionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearPartitionsBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearPartitionsBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearPartitionsBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearPartitionsBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearPartitionsBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dagSources/:dag_id': {
      $get:
        | {
            input: { param: { dag_id: string } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: DAGSourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dagBundles': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: DagBundleCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dagBundles/:bundle_name': {
      $get:
        | {
            input: { param: { bundle_name: string } }
            output: DagBundleDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bundle_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bundle_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bundle_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bundle_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dagBundles/:bundle_name/files': {
      $get:
        | {
            input: { param: { bundle_name: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: DagBundleFileCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bundle_name: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bundle_name: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bundle_name: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bundle_name: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dagStats': {
      $get:
        | {
            input: { query: { dag_ids?: string[] | undefined } }
            output: DagStatsCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dag_ids?: string[] | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { dag_ids?: string[] | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { dag_ids?: string[] | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { dag_ids?: string[] | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { dag_ids?: string[] | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/config': {
      $get:
        | {
            input: {
              query: { section?: string | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: Config
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { section?: string | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { section?: string | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { section?: string | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { section?: string | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { section?: string | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: { section?: string | ({ [x: string]: unknown } | null) | undefined }
            } & { header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/config/section/:section/option/:option': {
      $get:
        | {
            input: { param: { section: string; option: string } } & {
              header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined }
            }
            output: Config
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { section: string; option: string } } & {
              header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { section: string; option: string } } & {
              header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { section: string; option: string } } & {
              header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { section: string; option: string } } & {
              header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { section: string; option: string } } & {
              header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { section: string; option: string } } & {
              header: { accept?: 'application/json' | 'text/plain' | '*/*' | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dagWarnings': {
      $get:
        | {
            input: {
              query: {
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                warning_type?:
                  | DagWarningType
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: DAGWarningCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                warning_type?:
                  | DagWarningType
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                warning_type?:
                  | DagWarningType
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                warning_type?:
                  | DagWarningType
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags': {
      $get:
        | {
            input: {
              query: {
                is_scheduled?: boolean | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                owners?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                exclude_stale?: boolean | undefined
                paused?: boolean | ({ [x: string]: unknown } | null) | undefined
                has_import_errors?: boolean | ({ [x: string]: unknown } | null) | undefined
                last_dag_run_state?: DagRunState | ({ [x: string]: unknown } | null) | undefined
                bundle_name?: string | ({ [x: string]: unknown } | null) | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                has_asset_schedule?: boolean | ({ [x: string]: unknown } | null) | undefined
                asset_dependency?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_state?: string[] | undefined
                order_by?: string[] | undefined
                is_favorite?: boolean | ({ [x: string]: unknown } | null) | undefined
                timetable_type?: string[] | undefined
              }
            }
            output: DAGCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                is_scheduled?: boolean | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                owners?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                exclude_stale?: boolean | undefined
                paused?: boolean | ({ [x: string]: unknown } | null) | undefined
                has_import_errors?: boolean | ({ [x: string]: unknown } | null) | undefined
                last_dag_run_state?: DagRunState | ({ [x: string]: unknown } | null) | undefined
                bundle_name?: string | ({ [x: string]: unknown } | null) | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                has_asset_schedule?: boolean | ({ [x: string]: unknown } | null) | undefined
                asset_dependency?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_state?: string[] | undefined
                order_by?: string[] | undefined
                is_favorite?: boolean | ({ [x: string]: unknown } | null) | undefined
                timetable_type?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                is_scheduled?: boolean | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                owners?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                exclude_stale?: boolean | undefined
                paused?: boolean | ({ [x: string]: unknown } | null) | undefined
                has_import_errors?: boolean | ({ [x: string]: unknown } | null) | undefined
                last_dag_run_state?: DagRunState | ({ [x: string]: unknown } | null) | undefined
                bundle_name?: string | ({ [x: string]: unknown } | null) | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                has_asset_schedule?: boolean | ({ [x: string]: unknown } | null) | undefined
                asset_dependency?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_state?: string[] | undefined
                order_by?: string[] | undefined
                is_favorite?: boolean | ({ [x: string]: unknown } | null) | undefined
                timetable_type?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                is_scheduled?: boolean | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                owners?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                exclude_stale?: boolean | undefined
                paused?: boolean | ({ [x: string]: unknown } | null) | undefined
                has_import_errors?: boolean | ({ [x: string]: unknown } | null) | undefined
                last_dag_run_state?: DagRunState | ({ [x: string]: unknown } | null) | undefined
                bundle_name?: string | ({ [x: string]: unknown } | null) | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                has_asset_schedule?: boolean | ({ [x: string]: unknown } | null) | undefined
                asset_dependency?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                dag_run_state?: string[] | undefined
                order_by?: string[] | undefined
                is_favorite?: boolean | ({ [x: string]: unknown } | null) | undefined
                timetable_type?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                owners?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                exclude_stale?: boolean | undefined
                paused?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: DAGPatchBody }
            output: DAGCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                owners?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                exclude_stale?: boolean | undefined
                paused?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: DAGPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                owners?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                exclude_stale?: boolean | undefined
                paused?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: DAGPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                owners?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                exclude_stale?: boolean | undefined
                paused?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: DAGPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                owners?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                exclude_stale?: boolean | undefined
                paused?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: DAGPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                tags_match_mode?: 'any' | 'all' | ({ [x: string]: unknown } | null) | undefined
                owners?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                exclude_stale?: boolean | undefined
                paused?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: DAGPatchBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id': {
      $get:
        | {
            input: { param: { dag_id: string } }
            output: DAGResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { dag_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: DAGPatchBody }
            output: DAGResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: DAGPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: DAGPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: DAGPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: DAGPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: DAGPatchBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { dag_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/details': {
      $get:
        | {
            input: { param: { dag_id: string } }
            output: DAGDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/bulk': {
      $patch:
        | {
            input: { json: BulkBodyBulkDAGBody }
            output: BulkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkBodyBulkDAGBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BulkBodyBulkDAGBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BulkBodyBulkDAGBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/favorite': {
      $post:
        | { input: { param: { dag_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/unfavorite': {
      $post:
        | { input: { param: { dag_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/eventLogs/:event_log_id': {
      $get:
        | {
            input: { param: { event_log_id: number } }
            output: EventLogResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_log_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_log_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { event_log_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_log_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/eventLogs': {
      $get:
        | {
            input: {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
                run_id?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                try_number?: number | ({ [x: string]: unknown } | null) | undefined
                owner?: string | ({ [x: string]: unknown } | null) | undefined
                event?: string | ({ [x: string]: unknown } | null) | undefined
                excluded_events?: string[] | ({ [x: string]: unknown } | null) | undefined
                included_events?: string[] | ({ [x: string]: unknown } | null) | undefined
                before?: string | ({ [x: string]: unknown } | null) | undefined
                after?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                event_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                event_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
              }
            }
            output: EventLogCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
                run_id?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                try_number?: number | ({ [x: string]: unknown } | null) | undefined
                owner?: string | ({ [x: string]: unknown } | null) | undefined
                event?: string | ({ [x: string]: unknown } | null) | undefined
                excluded_events?: string[] | ({ [x: string]: unknown } | null) | undefined
                included_events?: string[] | ({ [x: string]: unknown } | null) | undefined
                before?: string | ({ [x: string]: unknown } | null) | undefined
                after?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                event_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                event_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
                run_id?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                try_number?: number | ({ [x: string]: unknown } | null) | undefined
                owner?: string | ({ [x: string]: unknown } | null) | undefined
                event?: string | ({ [x: string]: unknown } | null) | undefined
                excluded_events?: string[] | ({ [x: string]: unknown } | null) | undefined
                included_events?: string[] | ({ [x: string]: unknown } | null) | undefined
                before?: string | ({ [x: string]: unknown } | null) | undefined
                after?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                event_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                event_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
                run_id?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                try_number?: number | ({ [x: string]: unknown } | null) | undefined
                owner?: string | ({ [x: string]: unknown } | null) | undefined
                event?: string | ({ [x: string]: unknown } | null) | undefined
                excluded_events?: string[] | ({ [x: string]: unknown } | null) | undefined
                included_events?: string[] | ({ [x: string]: unknown } | null) | undefined
                before?: string | ({ [x: string]: unknown } | null) | undefined
                after?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                event_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                event_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_instance_id?: string | ({ [x: string]: unknown } | null) | undefined
                run_id?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                try_number?: number | ({ [x: string]: unknown } | null) | undefined
                owner?: string | ({ [x: string]: unknown } | null) | undefined
                event?: string | ({ [x: string]: unknown } | null) | undefined
                excluded_events?: string[] | ({ [x: string]: unknown } | null) | undefined
                included_events?: string[] | ({ [x: string]: unknown } | null) | undefined
                before?: string | ({ [x: string]: unknown } | null) | undefined
                after?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                event_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                owner_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                event_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/links': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                try_number?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: ExtraLinkCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                try_number?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                try_number?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                try_number?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                try_number?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                try_number?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                try_number?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/importErrors/:import_error_id': {
      $get:
        | {
            input: { param: { import_error_id: number } }
            output: ImportErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { import_error_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { import_error_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { import_error_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { import_error_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/importErrors': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                filename_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                filename_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                filename?: string | ({ [x: string]: unknown } | null) | undefined
                bundle_name?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: ImportErrorCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                filename_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                filename_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                filename?: string | ({ [x: string]: unknown } | null) | undefined
                bundle_name?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                filename_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                filename_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                filename?: string | ({ [x: string]: unknown } | null) | undefined
                bundle_name?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                filename_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                filename_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                filename?: string | ({ [x: string]: unknown } | null) | undefined
                bundle_name?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/jobs': {
      $get:
        | {
            input: {
              query: {
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                job_state?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                job_type?: string | ({ [x: string]: unknown } | null) | undefined
                hostname?: string | ({ [x: string]: unknown } | null) | undefined
                executor_class?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                is_alive?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: JobCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                job_state?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                job_type?: string | ({ [x: string]: unknown } | null) | undefined
                hostname?: string | ({ [x: string]: unknown } | null) | undefined
                executor_class?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                is_alive?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                job_state?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                job_type?: string | ({ [x: string]: unknown } | null) | undefined
                hostname?: string | ({ [x: string]: unknown } | null) | undefined
                executor_class?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                is_alive?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                job_state?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                job_type?: string | ({ [x: string]: unknown } | null) | undefined
                hostname?: string | ({ [x: string]: unknown } | null) | undefined
                executor_class?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                is_alive?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                job_state?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                job_type?: string | ({ [x: string]: unknown } | null) | undefined
                hostname?: string | ({ [x: string]: unknown } | null) | undefined
                executor_class?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                is_alive?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/plugins': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: PluginCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/plugins/importErrors': {
      $get:
        | {
            input: {}
            output: PluginImportErrorCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: HTTPExceptionResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: HTTPExceptionResponse; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/api/v2/pools/:pool_name': {
      $delete:
        | { input: { param: { pool_name: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { pool_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pool_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pool_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pool_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { pool_name: string } }
            output: PoolResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pool_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pool_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { pool_name: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: PoolPatchBody }
            output: PoolResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_name: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: PoolPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pool_name: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: PoolPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pool_name: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: PoolPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_name: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: PoolPatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pool_name: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: PoolPatchBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/pools': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: PoolCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | { input: { json: PoolBody }; output: PoolResponse; outputFormat: 'json'; status: 201 }
        | {
            input: { json: PoolBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PoolBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PoolBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: PoolBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { json: BulkBodyPoolBody }
            output: BulkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkBodyPoolBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BulkBodyPoolBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BulkBodyPoolBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/providers': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: ProviderCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/providers/:provider_name': {
      $get:
        | {
            input: { param: { provider_name: string } }
            output: ProviderDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { provider_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { provider_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { provider_name: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { provider_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/assets/:asset_id/state-store': {
      $get:
        | {
            input: { param: { asset_id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: AssetStateStoreCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset_id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { asset_id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset_id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { asset_id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { asset_id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { asset_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { asset_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { asset_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/assets/:asset_id/state-store/:key': {
      $get:
        | {
            input: { param: { key: string; asset_id: number } }
            output: AssetStateStoreResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string; asset_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string; asset_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string; asset_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string; asset_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { key: string; asset_id: number } } & { json: AssetStateStoreBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { key: string; asset_id: number } } & { json: AssetStateStoreBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string; asset_id: number } } & { json: AssetStateStoreBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string; asset_id: number } } & { json: AssetStateStoreBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string; asset_id: number } } & { json: AssetStateStoreBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { key: string; asset_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { key: string; asset_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string; asset_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string; asset_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string; asset_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: TaskStateStoreCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                all_map_indices?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                all_map_indices?: boolean | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                all_map_indices?: boolean | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                all_map_indices?: boolean | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                all_map_indices?: boolean | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                all_map_indices?: boolean | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                all_map_indices?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store/:key': {
      $get:
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: TaskStateStoreResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStoreBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStoreBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStoreBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStoreBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStoreBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStoreBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStoreBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStorePatchBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStorePatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStorePatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStorePatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStorePatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStorePatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: TaskStateStorePatchBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { key: string; dag_id: string; dag_run_id: string; task_id: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries/:xcom_key': {
      $get:
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                deserialize?: boolean | undefined
                stringify?: boolean | undefined
              }
            }
            output: XComResponseNative | XComResponseString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                deserialize?: boolean | undefined
                stringify?: boolean | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                deserialize?: boolean | undefined
                stringify?: boolean | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                deserialize?: boolean | undefined
                stringify?: boolean | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                deserialize?: boolean | undefined
                stringify?: boolean | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                deserialize?: boolean | undefined
                stringify?: boolean | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                deserialize?: boolean | undefined
                stringify?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & { json: XComUpdateBody }
            output: XComResponseNative
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & { json: XComUpdateBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & { json: XComUpdateBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & { json: XComUpdateBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & { json: XComUpdateBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & { json: XComUpdateBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & { json: XComUpdateBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { dag_id: string; task_id: string; dag_run_id: string; xcom_key: string }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                xcom_key?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                exclude_internal_keys?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                xcom_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                xcom_key_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                map_index_filter?: number | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                order_by?: string[] | undefined
              }
            }
            output: XComCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                xcom_key?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                exclude_internal_keys?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                xcom_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                xcom_key_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                map_index_filter?: number | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                xcom_key?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                exclude_internal_keys?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                xcom_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                xcom_key_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                map_index_filter?: number | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                xcom_key?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                exclude_internal_keys?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                xcom_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                xcom_key_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                map_index_filter?: number | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                xcom_key?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                exclude_internal_keys?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                xcom_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                xcom_key_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                map_index_filter?: number | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                xcom_key?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                exclude_internal_keys?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                xcom_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                xcom_key_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                map_index_filter?: number | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { dag_id: string; task_id: string; dag_run_id: string } } & {
              json: XComCreateBody
            }
            output: XComResponseNative
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { dag_id: string; task_id: string; dag_run_id: string } } & {
              json: XComCreateBody
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; task_id: string; dag_run_id: string } } & {
              json: XComCreateBody
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; task_id: string; dag_run_id: string } } & {
              json: XComCreateBody
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; task_id: string; dag_run_id: string } } & {
              json: XComCreateBody
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; task_id: string; dag_run_id: string } } & {
              json: XComCreateBody
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; task_id: string; dag_run_id: string } } & {
              json: XComCreateBody
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: TaskInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: TaskInstanceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/listMapped': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue?: string[] | undefined
                queue_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                executor?: string[] | undefined
                version_number?: number[] | undefined
                try_number?: number[] | undefined
                operator?: string[] | undefined
                operator_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                operator_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                map_index?: number[] | undefined
                rendered_map_index_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                rendered_map_index_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: TaskInstanceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue?: string[] | undefined
                queue_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                executor?: string[] | undefined
                version_number?: number[] | undefined
                try_number?: number[] | undefined
                operator?: string[] | undefined
                operator_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                operator_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                map_index?: number[] | undefined
                rendered_map_index_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                rendered_map_index_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue?: string[] | undefined
                queue_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                executor?: string[] | undefined
                version_number?: number[] | undefined
                try_number?: number[] | undefined
                operator?: string[] | undefined
                operator_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                operator_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                map_index?: number[] | undefined
                rendered_map_index_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                rendered_map_index_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue?: string[] | undefined
                queue_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                executor?: string[] | undefined
                version_number?: number[] | undefined
                try_number?: number[] | undefined
                operator?: string[] | undefined
                operator_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                operator_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                map_index?: number[] | undefined
                rendered_map_index_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                rendered_map_index_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue?: string[] | undefined
                queue_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                executor?: string[] | undefined
                version_number?: number[] | undefined
                try_number?: number[] | undefined
                operator?: string[] | undefined
                operator_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                operator_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                map_index?: number[] | undefined
                rendered_map_index_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                rendered_map_index_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue?: string[] | undefined
                queue_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                executor?: string[] | undefined
                version_number?: number[] | undefined
                try_number?: number[] | undefined
                operator?: string[] | undefined
                operator_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                operator_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                map_index?: number[] | undefined
                rendered_map_index_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                rendered_map_index_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/dependencies': {
      $get:
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: TaskDependencyCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/dependencies': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: TaskDependencyCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/tries': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: TaskInstanceHistoryCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/tries': {
      $get:
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: TaskInstanceHistoryCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index': {
      $get:
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: TaskInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: TaskInstanceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                loop_id?: string | ({ [x: string]: unknown } | null) | undefined
                iteration?: number | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                task_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                task_group_id?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue?: string[] | undefined
                queue_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                executor?: string[] | undefined
                version_number?: number[] | undefined
                teams?: string[] | undefined
                try_number?: number[] | undefined
                operator?: string[] | undefined
                operator_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                operator_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                map_index?: number[] | undefined
                rendered_map_index_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                rendered_map_index_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: TaskInstanceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                loop_id?: string | ({ [x: string]: unknown } | null) | undefined
                iteration?: number | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                task_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                task_group_id?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue?: string[] | undefined
                queue_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                executor?: string[] | undefined
                version_number?: number[] | undefined
                teams?: string[] | undefined
                try_number?: number[] | undefined
                operator?: string[] | undefined
                operator_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                operator_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                map_index?: number[] | undefined
                rendered_map_index_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                rendered_map_index_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                loop_id?: string | ({ [x: string]: unknown } | null) | undefined
                iteration?: number | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                task_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                task_group_id?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue?: string[] | undefined
                queue_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                executor?: string[] | undefined
                version_number?: number[] | undefined
                teams?: string[] | undefined
                try_number?: number[] | undefined
                operator?: string[] | undefined
                operator_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                operator_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                map_index?: number[] | undefined
                rendered_map_index_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                rendered_map_index_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                loop_id?: string | ({ [x: string]: unknown } | null) | undefined
                iteration?: number | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                task_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                task_group_id?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue?: string[] | undefined
                queue_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                executor?: string[] | undefined
                version_number?: number[] | undefined
                teams?: string[] | undefined
                try_number?: number[] | undefined
                operator?: string[] | undefined
                operator_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                operator_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                map_index?: number[] | undefined
                rendered_map_index_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                rendered_map_index_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                loop_id?: string | ({ [x: string]: unknown } | null) | undefined
                iteration?: number | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                task_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                task_group_id?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue?: string[] | undefined
                queue_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                executor?: string[] | undefined
                version_number?: number[] | undefined
                teams?: string[] | undefined
                try_number?: number[] | undefined
                operator?: string[] | undefined
                operator_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                operator_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                map_index?: number[] | undefined
                rendered_map_index_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                rendered_map_index_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                loop_id?: string | ({ [x: string]: unknown } | null) | undefined
                iteration?: number | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_gt?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lte?: string | ({ [x: string]: unknown } | null) | undefined
                run_after_lt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                logical_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                start_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_gt?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lte?: string | ({ [x: string]: unknown } | null) | undefined
                end_date_lt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                updated_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
                duration_gte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_gt?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lte?: number | ({ [x: string]: unknown } | null) | undefined
                duration_lt?: number | ({ [x: string]: unknown } | null) | undefined
                task_display_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_display_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                task_group_id?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                run_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                pool_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                pool_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue?: string[] | undefined
                queue_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                queue_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                executor?: string[] | undefined
                version_number?: number[] | undefined
                teams?: string[] | undefined
                try_number?: number[] | undefined
                operator?: string[] | undefined
                operator_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                operator_name_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                map_index?: number[] | undefined
                rendered_map_index_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                rendered_map_index_prefix_pattern?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              json: BulkBodyBulkTaskInstanceBody
            }
            output: BulkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              json: BulkBodyBulkTaskInstanceBody
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              json: BulkBodyBulkTaskInstanceBody
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              json: BulkBodyBulkTaskInstanceBody
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/list': {
      $post:
        | {
            input: { param: { dag_id: '~'; dag_run_id: '~' } } & { json: TaskInstancesBatchBody }
            output: TaskInstanceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: '~'; dag_run_id: '~' } } & { json: TaskInstancesBatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: '~'; dag_run_id: '~' } } & { json: TaskInstancesBatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: '~'; dag_run_id: '~' } } & { json: TaskInstancesBatchBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: '~'; dag_run_id: '~' } } & { json: TaskInstancesBatchBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/tries/:task_try_number': {
      $get:
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
              }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: TaskInstanceHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
              }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
              }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
              }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
              }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
              }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
              }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/tries/:task_try_number': {
      $get:
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
                map_index: number
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: TaskInstanceHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
                map_index: number
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
                map_index: number
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
                map_index: number
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
                map_index: number
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
                map_index: number
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                task_try_number: number
                map_index: number
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/clearTaskInstances': {
      $post:
        | {
            input: { param: { dag_id: string } } & { json: ClearTaskInstancesBody }
            output: TaskInstanceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearTaskInstancesBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearTaskInstancesBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearTaskInstancesBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearTaskInstancesBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearTaskInstancesBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearTaskInstancesBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskGroupInstances/:group_id': {
      $patch:
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: TaskInstanceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskGroupInstances/:group_id/dry_run': {
      $patch:
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: TaskInstanceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; group_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/dry_run': {
      $patch:
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: TaskInstanceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/dry_run': {
      $patch:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: TaskInstanceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: PatchTaskInstanceBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/tasks': {
      $get:
        | {
            input: { param: { dag_id: string } } & { query: { order_by?: string | undefined } }
            output: TaskCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & { query: { order_by?: string | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } } & { query: { order_by?: string | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & { query: { order_by?: string | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & { query: { order_by?: string | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } } & { query: { order_by?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/tasks/:task_id': {
      $get:
        | {
            input: { param: { dag_id: string; task_id: { [x: string]: unknown } } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            }
            output: TaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; task_id: { [x: string]: unknown } } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; task_id: { [x: string]: unknown } } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; task_id: { [x: string]: unknown } } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; task_id: { [x: string]: unknown } } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; task_id: { [x: string]: unknown } } } & {
              query: { version_number?: number | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/triggers': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                kind?: TriggerKind[] | undefined
                status?: TriggerStatus[] | undefined
                triggerer_hostname?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                asset_id?: number | ({ [x: string]: unknown } | null) | undefined
                scheduled_dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
              }
            }
            output: TriggerCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                kind?: TriggerKind[] | undefined
                status?: TriggerStatus[] | undefined
                triggerer_hostname?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                asset_id?: number | ({ [x: string]: unknown } | null) | undefined
                scheduled_dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                kind?: TriggerKind[] | undefined
                status?: TriggerStatus[] | undefined
                triggerer_hostname?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                asset_id?: number | ({ [x: string]: unknown } | null) | undefined
                scheduled_dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                kind?: TriggerKind[] | undefined
                status?: TriggerStatus[] | undefined
                triggerer_hostname?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                asset_id?: number | ({ [x: string]: unknown } | null) | undefined
                scheduled_dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                kind?: TriggerKind[] | undefined
                status?: TriggerStatus[] | undefined
                triggerer_hostname?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                asset_id?: number | ({ [x: string]: unknown } | null) | undefined
                scheduled_dag_id?: string | ({ [x: string]: unknown } | null) | undefined
                teams?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/triggers/:trigger_id': {
      $get:
        | {
            input: { param: { trigger_id: number } }
            output: TriggerDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { trigger_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { trigger_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { trigger_id: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { trigger_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/variables/:variable_key': {
      $delete:
        | {
            input: { param: { variable_key: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { variable_key: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { variable_key: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { variable_key: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { variable_key: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { variable_key: string } }
            output: VariableResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { variable_key: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { variable_key: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { variable_key: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { variable_key: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { variable_key: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: VariableBody }
            output: VariableResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { variable_key: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: VariableBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { variable_key: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: VariableBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { variable_key: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: VariableBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { variable_key: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: VariableBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { variable_key: string } } & {
              query: { update_mask?: string[] | ({ [x: string]: unknown } | null) | undefined }
            } & { json: VariableBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/variables': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                variable_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                variable_key_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: VariableCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                variable_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                variable_key_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                variable_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                variable_key_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                variable_key_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                variable_key_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: VariableBody }
            output: VariableResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: VariableBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: VariableBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: VariableBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: VariableBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: VariableBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { json: BulkBodyVariableBody }
            output: BulkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkBodyVariableBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BulkBodyVariableBody }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BulkBodyVariableBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/logs/:try_number': {
      $get:
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                full_content?: boolean | undefined
                token?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & {
              header: { accept?: 'application/json' | 'application/x-ndjson' | '*/*' | undefined }
            }
            output: TaskInstancesLogResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                full_content?: boolean | undefined
                token?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & {
              header: { accept?: 'application/json' | 'application/x-ndjson' | '*/*' | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                full_content?: boolean | undefined
                token?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & {
              header: { accept?: 'application/json' | 'application/x-ndjson' | '*/*' | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                full_content?: boolean | undefined
                token?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & {
              header: { accept?: 'application/json' | 'application/x-ndjson' | '*/*' | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                full_content?: boolean | undefined
                token?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & {
              header: { accept?: 'application/json' | 'application/x-ndjson' | '*/*' | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                full_content?: boolean | undefined
                token?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & {
              header: { accept?: 'application/json' | 'application/x-ndjson' | '*/*' | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                full_content?: boolean | undefined
                token?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & {
              header: { accept?: 'application/json' | 'application/x-ndjson' | '*/*' | undefined }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                full_content?: boolean | undefined
                token?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & {
              header: { accept?: 'application/json' | 'application/x-ndjson' | '*/*' | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/externalLogUrl/:try_number': {
      $get:
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: ExternalLogUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; try_number: number }
            } & {
              query: {
                map_index?: number | undefined
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/parseDagFile/:file_token': {
      $put:
        | {
            input: { param: { file_token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { file_token: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_token: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_token: string } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_token: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dagTags': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                tag_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                tag_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: DAGTagCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                tag_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                tag_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                tag_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                tag_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                tag_name_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                tag_name_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagVersions/diff': {
      $get:
        | {
            input: { param: { dag_id: string } } & {
              query: {
                base_version_number: number
                target_version_number: number
                max_changes?: number | undefined
              }
            }
            output: DagVersionDiffResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                base_version_number: number
                target_version_number: number
                max_changes?: number | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                base_version_number: number
                target_version_number: number
                max_changes?: number | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                base_version_number: number
                target_version_number: number
                max_changes?: number | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                base_version_number: number
                target_version_number: number
                max_changes?: number | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                base_version_number: number
                target_version_number: number
                max_changes?: number | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagVersions/:version_number': {
      $get:
        | {
            input: { param: { dag_id: string; version_number: number } }
            output: DagVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; version_number: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; version_number: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; version_number: number } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string; version_number: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagVersions': {
      $get:
        | {
            input: { param: { dag_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                version_number?: number | undefined
                bundle_name?: string | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
              }
            }
            output: DAGVersionCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                version_number?: number | undefined
                bundle_name?: string | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                version_number?: number | undefined
                bundle_name?: string | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                version_number?: number | undefined
                bundle_name?: string | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                version_number?: number | undefined
                bundle_name?: string | undefined
                bundle_version?: string | ({ [x: string]: unknown } | null) | undefined
                order_by?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/hitlDetails': {
      $patch:
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: UpdateHITLDetailPayload }
            output: HITLDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: UpdateHITLDetailPayload }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: UpdateHITLDetailPayload }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: UpdateHITLDetailPayload }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: UpdateHITLDetailPayload }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: UpdateHITLDetailPayload }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            } & { json: UpdateHITLDetailPayload }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HITLDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/hitlDetails/tries/:try_number': {
      $get:
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number
                try_number: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HITLDetailHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number
                try_number: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number
                try_number: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number
                try_number: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number
                try_number: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number
                try_number: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                dag_id: string
                dag_run_id: string
                task_id: string
                map_index: number
                try_number: number | ({ [x: string]: unknown } | null)
              }
            } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/hitlDetails': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                teams?: string[] | undefined
                response_received?: boolean | ({ [x: string]: unknown } | null) | undefined
                responded_by_user_id?: string[] | undefined
                responded_by_user_name?: string[] | undefined
                subject_search?: string | ({ [x: string]: unknown } | null) | undefined
                body_search?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HITLDetailCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                teams?: string[] | undefined
                response_received?: boolean | ({ [x: string]: unknown } | null) | undefined
                responded_by_user_id?: string[] | undefined
                responded_by_user_name?: string[] | undefined
                subject_search?: string | ({ [x: string]: unknown } | null) | undefined
                body_search?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                teams?: string[] | undefined
                response_received?: boolean | ({ [x: string]: unknown } | null) | undefined
                responded_by_user_id?: string[] | undefined
                responded_by_user_name?: string[] | undefined
                subject_search?: string | ({ [x: string]: unknown } | null) | undefined
                body_search?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                teams?: string[] | undefined
                response_received?: boolean | ({ [x: string]: unknown } | null) | undefined
                responded_by_user_id?: string[] | undefined
                responded_by_user_name?: string[] | undefined
                subject_search?: string | ({ [x: string]: unknown } | null) | undefined
                body_search?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                region_id?: string | ({ [x: string]: unknown } | null) | undefined
                region_index?: number | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string[] | undefined
                dag_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                dag_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                task_id_prefix_pattern?: string | ({ [x: string]: unknown } | null) | undefined
                map_index?: number | ({ [x: string]: unknown } | null) | undefined
                state?: string[] | undefined
                teams?: string[] | undefined
                response_received?: boolean | ({ [x: string]: unknown } | null) | undefined
                responded_by_user_id?: string[] | undefined
                responded_by_user_name?: string[] | undefined
                subject_search?: string | ({ [x: string]: unknown } | null) | undefined
                body_search?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_gte?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_gt?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_lte?: string | ({ [x: string]: unknown } | null) | undefined
                created_at_lt?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/monitor/health': {
      $get: { input: {}; output: HealthInfoResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/version': {
      $get: { input: {}; output: VersionInfo; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/auth/login': {
      $get:
        | {
            input: { query: { next?: string | ({ [x: string]: unknown } | null) | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { next?: string | ({ [x: string]: unknown } | null) | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 307
          }
        | {
            input: { query: { next?: string | ({ [x: string]: unknown } | null) | undefined } }
            output: HTTPExceptionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { next?: string | ({ [x: string]: unknown } | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/auth/cli/metadata': {
      $get: { input: {}; output: CliLoginMetadataResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/auth/logout': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: HTTPExceptionResponse; outputFormat: 'json'; status: 307 }
    }
  },
  '/'
>
export default routes
