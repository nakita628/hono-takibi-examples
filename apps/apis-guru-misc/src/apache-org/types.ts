type ConfigOption = { key?: string | undefined; value?: string | undefined }
type ConfigSection = { name?: string | undefined; options?: ConfigOption[] | undefined }
type Config = { sections?: ConfigSection[] | undefined }
type Error = {
  detail?: string | undefined
  instance?: string | undefined
  status: number
  title: string
  type: string
}
type ConnectionCollectionItem = {
  conn_type?: string | undefined
  connection_id?: string | undefined
  description?: (string | null) | undefined
  host?: (string | null) | undefined
  login?: (string | null) | undefined
  port?: (number | null) | undefined
  schema?: (string | null) | undefined
}
type ConnectionCollection = {
  connections?: ConnectionCollectionItem[] | undefined
  total_entries?: number | undefined
}
type Connection = {
  conn_type?: string | undefined
  connection_id?: string | undefined
  description?: (string | null) | undefined
  host?: (string | null) | undefined
  login?: (string | null) | undefined
  port?: (number | null) | undefined
  schema?: (string | null) | undefined
  extra?: (string | null) | undefined
  password?: string | undefined
}
type ConnectionTest = { message?: string | undefined; status?: boolean | undefined }
type DagWarning = {
  dag_id?: string | undefined
  message?: string | undefined
  timestamp?: string | undefined
  warning_type?: string | undefined
}
type DagWarningCollection = {
  import_errors?: DagWarning[] | undefined
  total_entries?: number | undefined
}
type TimeDelta = { __type: string; days: number; microseconds: number; seconds: number }
type RelativeDelta = {
  __type: string
  day: number
  days: number
  hour: number
  hours: number
  leapdays: number
  microsecond: number
  microseconds: number
  minute: number
  minutes: number
  month: number
  months: number
  second: number
  seconds: number
  year: number
  years: number
}
type CronExpression = { __type: string; value: string } | null
type ScheduleInterval = TimeDelta | RelativeDelta | CronExpression
type Tag = { name?: string | undefined }
type DAG = {
  dag_id?: string | undefined
  default_view?: (string | null) | undefined
  description?: (string | null) | undefined
  file_token?: string | undefined
  fileloc?: string | undefined
  has_import_errors?: (boolean | null) | undefined
  has_task_concurrency_limits?: (boolean | null) | undefined
  is_active?: (boolean | null) | undefined
  is_paused?: (boolean | null) | undefined
  is_subdag?: boolean | undefined
  last_expired?: (string | null) | undefined
  last_parsed_time?: (string | null) | undefined
  last_pickled?: (string | null) | undefined
  max_active_runs?: (number | null) | undefined
  max_active_tasks?: (number | null) | undefined
  next_dagrun?: (string | null) | undefined
  next_dagrun_create_after?: (string | null) | undefined
  next_dagrun_data_interval_end?: (string | null) | undefined
  next_dagrun_data_interval_start?: (string | null) | undefined
  owners?: string[] | undefined
  pickle_id?: (string | null) | undefined
  root_dag_id?: (string | null) | undefined
  schedule_interval?: ScheduleInterval | undefined
  scheduler_lock?: (boolean | null) | undefined
  tags?: (Tag[] | null) | undefined
  timetable_description?: (string | null) | undefined
}
type DAGCollection = { dags?: DAG[] | undefined; total_entries?: number | undefined }
type ClearTaskInstances = {
  dag_run_id?: (string | null) | undefined
  dry_run?: boolean | undefined
  end_date?: string | undefined
  include_downstream?: boolean | undefined
  include_future?: boolean | undefined
  include_parentdag?: boolean | undefined
  include_past?: boolean | undefined
  include_subdags?: boolean | undefined
  include_upstream?: boolean | undefined
  only_failed?: boolean | undefined
  only_running?: boolean | undefined
  reset_dag_runs?: boolean | undefined
  start_date?: string | undefined
  task_ids?: string[] | undefined
}
type TaskInstanceReference = {
  dag_id?: string | undefined
  dag_run_id?: string | undefined
  execution_date?: string | undefined
  task_id?: string | undefined
}
type TaskInstanceReferenceCollection = { task_instances?: TaskInstanceReference[] | undefined }
type DagState = 'queued' | 'running' | 'success' | 'failed'
type DAGRun = {
  conf?: { [x: string]: unknown } | undefined
  dag_id?: string | undefined
  dag_run_id?: (string | null) | undefined
  data_interval_end?: (string | null) | undefined
  data_interval_start?: (string | null) | undefined
  end_date?: (string | null) | undefined
  execution_date?: (string | null) | undefined
  external_trigger?: boolean | undefined
  last_scheduling_decision?: (string | null) | undefined
  logical_date?: (string | null) | undefined
  note?: (string | null) | undefined
  run_type?: 'backfill' | 'manual' | 'scheduled' | 'dataset_triggered' | undefined
  start_date?: (string | null) | undefined
  state?: DagState | undefined
}
type DAGRunCollection = { dag_runs?: DAGRun[] | undefined; total_entries?: number | undefined }
type UpdateDagRunState = { state?: 'success' | 'failed' | 'queued' | undefined }
type ClearDagRun = { dry_run?: boolean | undefined }
type SetDagRunNote = { note?: string | undefined }
type SLAMiss = {
  dag_id?: string | undefined
  description?: (string | null) | undefined
  email_sent?: boolean | undefined
  execution_date?: string | undefined
  notification_sent?: boolean | undefined
  task_id?: string | undefined
  timestamp?: string | undefined
} | null
type TaskState =
  | 'success'
  | 'running'
  | 'failed'
  | 'upstream_failed'
  | 'skipped'
  | 'up_for_retry'
  | 'up_for_reschedule'
  | 'queued'
  | 'none'
  | 'scheduled'
  | 'deferred'
  | 'removed'
  | 'restarting'
type Trigger = {
  classpath?: string | undefined
  created_date?: string | undefined
  id?: number | undefined
  kwargs?: string | undefined
  triggerer_id?: (number | null) | undefined
}
type Job = {
  dag_id?: (string | null) | undefined
  end_date?: (string | null) | undefined
  executor_class?: (string | null) | undefined
  hostname?: (string | null) | undefined
  id?: number | undefined
  job_type?: (string | null) | undefined
  latest_heartbeat?: (string | null) | undefined
  start_date?: (string | null) | undefined
  state?: (string | null) | undefined
  unixname?: (string | null) | undefined
}
type TaskInstance = {
  dag_id?: string | undefined
  dag_run_id?: string | undefined
  duration?: (number | null) | undefined
  end_date?: (string | null) | undefined
  execution_date?: string | undefined
  executor_config?: string | undefined
  hostname?: string | undefined
  map_index?: number | undefined
  max_tries?: number | undefined
  note?: (string | null) | undefined
  operator?: (string | null) | undefined
  pid?: (number | null) | undefined
  pool?: string | undefined
  pool_slots?: number | undefined
  priority_weight?: (number | null) | undefined
  queue?: (string | null) | undefined
  queued_when?: (string | null) | undefined
  rendered_fields?: { [x: string]: unknown } | undefined
  sla_miss?: SLAMiss | undefined
  start_date?: (string | null) | undefined
  state?: TaskState | undefined
  task_id?: string | undefined
  trigger?: Trigger | undefined
  triggerer_job?: Job | undefined
  try_number?: number | undefined
  unixname?: string | undefined
}
type TaskInstanceCollection = {
  task_instances?: TaskInstance[] | undefined
  total_entries?: number | undefined
}
type UpdateTaskInstance = {
  dry_run?: boolean | undefined
  new_state?: 'success' | 'failed' | undefined
}
type ClassReference = { class_name?: string | undefined; module_path?: string | undefined }
type ExtraLink = {
  class_ref?: ClassReference | undefined
  href?: string | undefined
  name?: string | undefined
}
type ExtraLinkCollection = { extra_links?: ExtraLink[] | undefined }
type SetTaskInstanceNote = { note: string }
type XComCollectionItem = {
  dag_id?: string | undefined
  execution_date?: string | undefined
  key?: string | undefined
  task_id?: string | undefined
  timestamp?: string | undefined
}
type XComCollection = {
  xcom_entries?: XComCollectionItem[] | undefined
  total_entries?: number | undefined
}
type XCom = {
  dag_id?: string | undefined
  execution_date?: string | undefined
  key?: string | undefined
  task_id?: string | undefined
  timestamp?: string | undefined
  value?: string | undefined
}
type BasicDAGRun = {
  dag_id?: string | undefined
  data_interval_end?: (string | null) | undefined
  data_interval_start?: (string | null) | undefined
  end_date?: (string | null) | undefined
  logical_date?: string | undefined
  run_id?: string | undefined
  start_date?: (string | null) | undefined
  state?: DagState | undefined
}
type DatasetEvent = {
  created_dagruns?: BasicDAGRun[] | undefined
  dataset_id?: number | undefined
  dataset_uri?: string | undefined
  extra?: ({ [x: string]: unknown } | null) | undefined
  source_dag_id?: (string | null) | undefined
  source_map_index?: (number | null) | undefined
  source_run_id?: (string | null) | undefined
  source_task_id?: (string | null) | undefined
  timestamp?: string | undefined
}
type DatasetEventCollection = {
  dataset_events?: DatasetEvent[] | undefined
  total_entries?: number | undefined
}
type Timezone = string
type DAGDetail = {
  dag_id?: string | undefined
  default_view?: string | undefined
  description?: (string | null) | undefined
  file_token?: string | undefined
  fileloc?: string | undefined
  has_import_errors?: (boolean | null) | undefined
  has_task_concurrency_limits?: (boolean | null) | undefined
  is_active?: (boolean | null) | undefined
  is_paused?: (boolean | null) | undefined
  is_subdag?: boolean | undefined
  last_expired?: (string | null) | undefined
  last_parsed_time?: (string | null) | undefined
  last_pickled?: (string | null) | undefined
  max_active_runs?: (number | null) | undefined
  max_active_tasks?: (number | null) | undefined
  next_dagrun?: (string | null) | undefined
  next_dagrun_create_after?: (string | null) | undefined
  next_dagrun_data_interval_end?: (string | null) | undefined
  next_dagrun_data_interval_start?: (string | null) | undefined
  owners?: string[] | undefined
  pickle_id?: (string | null) | undefined
  root_dag_id?: (string | null) | undefined
  schedule_interval?: ScheduleInterval | undefined
  scheduler_lock?: (boolean | null) | undefined
  tags?: (Tag[] | null) | undefined
  timetable_description?: (string | null) | undefined
  catchup?: boolean | undefined
  concurrency?: number | undefined
  dag_run_timeout?: TimeDelta | undefined
  doc_md?: (string | null) | undefined
  end_date?: (string | null) | undefined
  is_paused_upon_creation?: (boolean | null) | undefined
  last_parsed?: (string | null) | undefined
  orientation?: string | undefined
  params?: { [x: string]: unknown } | undefined
  render_template_as_native_obj?: (boolean | null) | undefined
  start_date?: (string | null) | undefined
  template_search_path?: (string[] | null) | undefined
  timezone?: Timezone | undefined
}
type TriggerRule =
  | 'all_success'
  | 'all_failed'
  | 'all_done'
  | 'one_success'
  | 'one_failed'
  | 'none_failed'
  | 'none_skipped'
  | 'none_failed_or_skipped'
  | 'none_failed_min_one_success'
  | 'dummy'
type Color = string
type WeightRule = 'downstream' | 'upstream' | 'absolute'
type Task = {
  class_ref?: ClassReference | undefined
  depends_on_past?: boolean | undefined
  downstream_task_ids?: string[] | undefined
  end_date?: (string | null) | undefined
  execution_timeout?: TimeDelta | undefined
  extra_links?: { class_ref?: ClassReference | undefined }[] | undefined
  is_mapped?: boolean | undefined
  owner?: string | undefined
  pool?: string | undefined
  pool_slots?: number | undefined
  priority_weight?: number | undefined
  queue?: (string | null) | undefined
  retries?: number | undefined
  retry_delay?: TimeDelta | undefined
  retry_exponential_backoff?: boolean | undefined
  start_date?: string | undefined
  sub_dag?: DAG | undefined
  task_id?: string | undefined
  template_fields?: string[] | undefined
  trigger_rule?: TriggerRule | undefined
  ui_color?: Color | undefined
  ui_fgcolor?: Color | undefined
  wait_for_downstream?: boolean | undefined
  weight_rule?: WeightRule | undefined
}
type TaskCollection = { tasks?: Task[] | undefined }
type UpdateTaskInstancesState = {
  dag_run_id?: string | undefined
  dry_run?: boolean | undefined
  execution_date?: string | undefined
  include_downstream?: boolean | undefined
  include_future?: boolean | undefined
  include_past?: boolean | undefined
  include_upstream?: boolean | undefined
  new_state?: 'success' | 'failed' | undefined
  task_id?: string | undefined
}
type ListDagRunsForm = {
  dag_ids?: string[] | undefined
  end_date_gte?: string | undefined
  end_date_lte?: string | undefined
  execution_date_gte?: string | undefined
  execution_date_lte?: string | undefined
  order_by?: string | undefined
  page_limit?: number | undefined
  page_offset?: number | undefined
  start_date_gte?: string | undefined
  start_date_lte?: string | undefined
  states?: string[] | undefined
}
type ListTaskInstanceForm = {
  dag_ids?: string[] | undefined
  duration_gte?: number | undefined
  duration_lte?: number | undefined
  end_date_gte?: string | undefined
  end_date_lte?: string | undefined
  execution_date_gte?: string | undefined
  execution_date_lte?: string | undefined
  pool?: string[] | undefined
  queue?: string[] | undefined
  start_date_gte?: string | undefined
  start_date_lte?: string | undefined
  state?: TaskState[] | undefined
}
type DagScheduleDatasetReference = {
  created_at?: string | undefined
  dag_id?: (string | null) | undefined
  updated_at?: string | undefined
}
type TaskOutletDatasetReference = {
  created_at?: string | undefined
  dag_id?: (string | null) | undefined
  task_id?: (string | null) | undefined
  updated_at?: string | undefined
}
type Dataset = {
  consuming_dags?: DagScheduleDatasetReference[] | undefined
  created_at?: string | undefined
  extra?: ({ [x: string]: unknown } | null) | undefined
  id?: number | undefined
  producing_tasks?: TaskOutletDatasetReference[] | undefined
  updated_at?: string | undefined
  uri?: string | undefined
}
type DatasetCollection = { datasets?: Dataset[] | undefined; total_entries?: number | undefined }
type EventLog = {
  dag_id?: (string | null) | undefined
  event?: string | undefined
  event_log_id?: number | undefined
  execution_date?: (string | null) | undefined
  extra?: (string | null) | undefined
  owner?: string | undefined
  task_id?: (string | null) | undefined
  when?: string | undefined
}
type EventLogCollection = {
  event_logs?: EventLog[] | undefined
  total_entries?: number | undefined
}
type HealthStatus = 'healthy' | 'unhealthy'
type MetadatabaseStatus = { status?: HealthStatus | undefined }
type SchedulerStatus = {
  latest_scheduler_heartbeat?: (string | null) | undefined
  status?: HealthStatus | undefined
}
type HealthInfo = {
  metadatabase?: MetadatabaseStatus | undefined
  scheduler?: SchedulerStatus | undefined
}
type ImportError = {
  filename?: string | undefined
  import_error_id?: number | undefined
  stack_trace?: string | undefined
  timestamp?: string | undefined
}
type ImportErrorCollection = {
  import_errors?: ImportError[] | undefined
  total_entries?: number | undefined
}
type Action = { name?: string | undefined }
type ActionCollection = { actions?: Action[] | undefined; total_entries?: number | undefined }
type PluginCollectionItem = {
  appbuilder_menu_items?: ({ [x: string]: unknown } | null)[] | undefined
  appbuilder_views?: ({ [x: string]: unknown } | null)[] | undefined
  executors?: (string | null)[] | undefined
  flask_blueprints?: ({ [x: string]: unknown } | null)[] | undefined
  global_operator_extra_links?: ({ [x: string]: unknown } | null)[] | undefined
  hooks?: (string | null)[] | undefined
  macros?: ({ [x: string]: unknown } | null)[] | undefined
  name?: string | undefined
  operator_extra_links?: ({ [x: string]: unknown } | null)[] | undefined
  source?: (string | null) | undefined
}
type PluginCollection = {
  plugins?: PluginCollectionItem[] | undefined
  total_entries?: number | undefined
}
type Pool = {
  description?: (string | null) | undefined
  name?: string | undefined
  occupied_slots?: number | undefined
  open_slots?: number | undefined
  queued_slots?: number | undefined
  slots?: number | undefined
  used_slots?: number | undefined
}
type PoolCollection = { pools?: Pool[] | undefined; total_entries?: number | undefined }
type Provider = {
  description?: string | undefined
  package_name?: string | undefined
  version?: string | undefined
}
type Resource = { name?: string | undefined }
type ActionResource = { action?: Action | undefined; resource?: Resource | undefined }
type Role = { actions?: ActionResource[] | undefined; name?: string | undefined }
type RoleCollection = { roles?: Role[] | undefined; total_entries?: number | undefined }
type UserCollectionItem = {
  active?: (boolean | null) | undefined
  changed_on?: (string | null) | undefined
  created_on?: (string | null) | undefined
  email?: string | undefined
  failed_login_count?: (number | null) | undefined
  first_name?: string | undefined
  last_login?: (string | null) | undefined
  last_name?: string | undefined
  login_count?: (number | null) | undefined
  roles?: ({ name?: string | undefined } | null)[] | undefined
  username?: string | undefined
}
type UserCollection = {
  users?: UserCollectionItem[] | undefined
  total_entries?: number | undefined
}
type User = {
  active?: (boolean | null) | undefined
  changed_on?: (string | null) | undefined
  created_on?: (string | null) | undefined
  email?: string | undefined
  failed_login_count?: (number | null) | undefined
  first_name?: string | undefined
  last_login?: (string | null) | undefined
  last_name?: string | undefined
  login_count?: (number | null) | undefined
  roles?: ({ name?: string | undefined } | null)[] | undefined
  username?: string | undefined
  password?: string | undefined
}
type VariableCollectionItem = {
  description?: (string | null) | undefined
  key?: string | undefined
}
type VariableCollection = {
  variables?: VariableCollectionItem[] | undefined
  total_entries?: number | undefined
}
type Variable = {
  description?: (string | null) | undefined
  key?: string | undefined
  value?: string | undefined
}
type VersionInfo = { git_version?: (string | null) | undefined; version?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/config': {
      $get:
        | { input: {}; output: Config; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/connections': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: ConnectionCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | { input: { json: Connection }; output: Connection; outputFormat: 'json'; status: 200 }
        | { input: { json: Connection }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: Connection }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: Connection }; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/connections/test': {
      $post:
        | { input: { json: Connection }; output: ConnectionTest; outputFormat: 'json'; status: 200 }
        | { input: { json: Connection }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: Connection }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: Connection }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: Connection }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/connections/:connection_id': {
      $delete:
        | {
            input: { param: { connection_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { connection_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connection_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { connection_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { connection_id: string } }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { connection_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { connection_id: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Connection }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Connection }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Connection }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Connection }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Connection }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dagSources/:file_token': {
      $get:
        | {
            input: { param: { file_token: string } }
            output: { content?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_token: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { file_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_token: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_token: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/dagWarnings': {
      $get:
        | {
            input: {
              query: {
                dag_id?: string | undefined
                warning_type?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: DagWarningCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dag_id?: string | undefined
                warning_type?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                dag_id?: string | undefined
                warning_type?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/dags': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
                tags?: string[] | undefined
                only_active?: boolean | undefined
                dag_id_pattern?: string | undefined
              }
            }
            output: DAGCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
                tags?: string[] | undefined
                only_active?: boolean | undefined
                dag_id_pattern?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                update_mask?: string[] | undefined
                only_active?: boolean | undefined
                dag_id_pattern: string
              }
            } & { json: DAG }
            output: DAGCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                update_mask?: string[] | undefined
                only_active?: boolean | undefined
                dag_id_pattern: string
              }
            } & { json: DAG }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                update_mask?: string[] | undefined
                only_active?: boolean | undefined
                dag_id_pattern: string
              }
            } & { json: DAG }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                update_mask?: string[] | undefined
                only_active?: boolean | undefined
                dag_id_pattern: string
              }
            } & { json: DAG }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id': {
      $delete:
        | { input: { param: { dag_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { dag_id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { dag_id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { dag_id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { dag_id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { dag_id: string } }; output: Error; outputFormat: 'json'; status: 409 }
      $get:
        | { input: { param: { dag_id: string } }; output: DAG; outputFormat: 'json'; status: 200 }
        | { input: { param: { dag_id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { dag_id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { dag_id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $patch:
        | {
            input: { param: { dag_id: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: DAG }
            output: DAG
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: DAG }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: DAG }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: DAG }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/clearTaskInstances': {
      $post:
        | {
            input: { param: { dag_id: string } } & { json: ClearTaskInstances }
            output: TaskInstanceReferenceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearTaskInstances }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearTaskInstances }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & { json: ClearTaskInstances }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/dagRuns': {
      $get:
        | {
            input: { param: { dag_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                execution_date_gte?: string | undefined
                execution_date_lte?: string | undefined
                start_date_gte?: string | undefined
                start_date_lte?: string | undefined
                end_date_gte?: string | undefined
                end_date_lte?: string | undefined
                state?: string[] | undefined
                order_by?: string | undefined
              }
            }
            output: DAGRunCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                execution_date_gte?: string | undefined
                execution_date_lte?: string | undefined
                start_date_gte?: string | undefined
                start_date_lte?: string | undefined
                end_date_gte?: string | undefined
                end_date_lte?: string | undefined
                state?: string[] | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { dag_id: string } } & { json: DAGRun }
            output: DAGRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & { json: DAGRun }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string } } & { json: DAGRun }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & { json: DAGRun }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & { json: DAGRun }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dag_id: string } } & { json: DAGRun }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id': {
      $delete:
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: DAGRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: UpdateDagRunState }
            output: DAGRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: UpdateDagRunState }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: UpdateDagRunState }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: UpdateDagRunState }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: UpdateDagRunState }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/clear': {
      $post:
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: ClearDagRun }
            output: DAGRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: ClearDagRun }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: ClearDagRun }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: ClearDagRun }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: ClearDagRun }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/setNote': {
      $patch:
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: SetDagRunNote }
            output: DAGRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: SetDagRunNote }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: SetDagRunNote }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: SetDagRunNote }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & { json: SetDagRunNote }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                execution_date_gte?: string | undefined
                execution_date_lte?: string | undefined
                start_date_gte?: string | undefined
                start_date_lte?: string | undefined
                end_date_gte?: string | undefined
                end_date_lte?: string | undefined
                duration_gte?: number | undefined
                duration_lte?: number | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                queue?: string[] | undefined
              }
            }
            output: TaskInstanceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                execution_date_gte?: string | undefined
                execution_date_lte?: string | undefined
                start_date_gte?: string | undefined
                start_date_lte?: string | undefined
                end_date_gte?: string | undefined
                end_date_lte?: string | undefined
                duration_gte?: number | undefined
                duration_lte?: number | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                queue?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                execution_date_gte?: string | undefined
                execution_date_lte?: string | undefined
                start_date_gte?: string | undefined
                start_date_lte?: string | undefined
                end_date_gte?: string | undefined
                end_date_lte?: string | undefined
                duration_gte?: number | undefined
                duration_lte?: number | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                queue?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } }
            output: TaskInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              json: UpdateTaskInstance
            }
            output: TaskInstanceReference
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              json: UpdateTaskInstance
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              json: UpdateTaskInstance
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              json: UpdateTaskInstance
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/links': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } }
            output: ExtraLinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/listMapped': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                execution_date_gte?: string | undefined
                execution_date_lte?: string | undefined
                start_date_gte?: string | undefined
                start_date_lte?: string | undefined
                end_date_gte?: string | undefined
                end_date_lte?: string | undefined
                duration_gte?: number | undefined
                duration_lte?: number | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                queue?: string[] | undefined
                order_by?: string | undefined
              }
            }
            output: TaskInstanceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                execution_date_gte?: string | undefined
                execution_date_lte?: string | undefined
                start_date_gte?: string | undefined
                start_date_lte?: string | undefined
                end_date_gte?: string | undefined
                end_date_lte?: string | undefined
                duration_gte?: number | undefined
                duration_lte?: number | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                queue?: string[] | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                execution_date_gte?: string | undefined
                execution_date_lte?: string | undefined
                start_date_gte?: string | undefined
                start_date_lte?: string | undefined
                end_date_gte?: string | undefined
                end_date_lte?: string | undefined
                duration_gte?: number | undefined
                duration_lte?: number | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                queue?: string[] | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                execution_date_gte?: string | undefined
                execution_date_lte?: string | undefined
                start_date_gte?: string | undefined
                start_date_lte?: string | undefined
                end_date_gte?: string | undefined
                end_date_lte?: string | undefined
                duration_gte?: number | undefined
                duration_lte?: number | undefined
                state?: string[] | undefined
                pool?: string[] | undefined
                queue?: string[] | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/logs/:task_try_number': {
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
                full_content?: boolean | undefined
                map_index?: number | undefined
                token?: string | undefined
              }
            }
            output: { content?: string | undefined; continuation_token?: string | undefined }
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
                full_content?: boolean | undefined
                map_index?: number | undefined
                token?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
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
                full_content?: boolean | undefined
                map_index?: number | undefined
                token?: string | undefined
              }
            }
            output: Error
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
                full_content?: boolean | undefined
                map_index?: number | undefined
                token?: string | undefined
              }
            }
            output: Error
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
                full_content?: boolean | undefined
                map_index?: number | undefined
                token?: string | undefined
              }
            }
            output: Error
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
                full_content?: boolean | undefined
                map_index?: number | undefined
                token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/setNote': {
      $patch:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              json: SetTaskInstanceNote
            }
            output: TaskInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              json: SetTaskInstanceNote
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              json: SetTaskInstanceNote
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              json: SetTaskInstanceNote
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              json: SetTaskInstanceNote
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: XComCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string; task_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries/:xcom_key': {
      $get:
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; xcom_key: string }
            } & { query: { deserialize?: boolean | undefined } }
            output: XCom
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; xcom_key: string }
            } & { query: { deserialize?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; xcom_key: string }
            } & { query: { deserialize?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; xcom_key: string }
            } & { query: { deserialize?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index': {
      $get:
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            }
            output: TaskInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & { json: UpdateTaskInstance }
            output: TaskInstanceReference
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & { json: UpdateTaskInstance }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & { json: UpdateTaskInstance }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & { json: UpdateTaskInstance }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/setNote': {
      $patch:
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & { json: SetTaskInstanceNote }
            output: TaskInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & { json: SetTaskInstanceNote }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & { json: SetTaskInstanceNote }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & { json: SetTaskInstanceNote }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { dag_id: string; dag_run_id: string; task_id: string; map_index: number }
            } & { json: SetTaskInstanceNote }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/dagRuns/:dag_run_id/upstreamDatasetEvents': {
      $get:
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: DatasetEventCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; dag_run_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/details': {
      $get:
        | {
            input: { param: { dag_id: string } }
            output: DAGDetail
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { dag_id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { dag_id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { dag_id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/dags/:dag_id/tasks': {
      $get:
        | {
            input: { param: { dag_id: string } } & { query: { order_by?: string | undefined } }
            output: TaskCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & { query: { order_by?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & { query: { order_by?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & { query: { order_by?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/tasks/:task_id': {
      $get:
        | {
            input: { param: { dag_id: string; task_id: string } }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string; task_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string; task_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string; task_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/:dag_id/updateTaskInstancesState': {
      $post:
        | {
            input: { param: { dag_id: string } } & { json: UpdateTaskInstancesState }
            output: TaskInstanceReferenceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dag_id: string } } & { json: UpdateTaskInstancesState }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dag_id: string } } & { json: UpdateTaskInstancesState }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dag_id: string } } & { json: UpdateTaskInstancesState }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dags/~/dagRuns/list': {
      $post:
        | {
            input: { json: ListDagRunsForm }
            output: DAGRunCollection
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ListDagRunsForm }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: ListDagRunsForm }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: ListDagRunsForm }; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/dags/~/dagRuns/~/taskInstances/list': {
      $post:
        | {
            input: { json: ListTaskInstanceForm }
            output: TaskInstanceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ListTaskInstanceForm }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ListTaskInstanceForm }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ListTaskInstanceForm }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/datasets': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
                uri_pattern?: string | undefined
              }
            }
            output: DatasetCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
                uri_pattern?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
                uri_pattern?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/datasets/events': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
                dataset_id?: number | undefined
                source_dag_id?: string | undefined
                source_task_id?: string | undefined
                source_run_id?: string | undefined
                source_map_index?: number | undefined
              }
            }
            output: DatasetEventCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
                dataset_id?: number | undefined
                source_dag_id?: string | undefined
                source_task_id?: string | undefined
                source_run_id?: string | undefined
                source_map_index?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
                dataset_id?: number | undefined
                source_dag_id?: string | undefined
                source_task_id?: string | undefined
                source_run_id?: string | undefined
                source_map_index?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
                dataset_id?: number | undefined
                source_dag_id?: string | undefined
                source_task_id?: string | undefined
                source_run_id?: string | undefined
                source_map_index?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/datasets/:uri': {
      $get:
        | { input: { param: { uri: string } }; output: Dataset; outputFormat: 'json'; status: 200 }
        | { input: { param: { uri: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { uri: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { uri: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/eventLogs': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: EventLogCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/eventLogs/:event_log_id': {
      $get:
        | {
            input: { param: { event_log_id: number } }
            output: EventLog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_log_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_log_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { event_log_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/health': { $get: { input: {}; output: HealthInfo; outputFormat: 'json'; status: 200 } }
  } & {
    '/importErrors': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: ImportErrorCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/importErrors/:import_error_id': {
      $get:
        | {
            input: { param: { import_error_id: number } }
            output: ImportError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { import_error_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { import_error_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { import_error_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/permissions': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: ActionCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/plugins': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: PluginCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/pools': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: PoolCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | { input: { json: Pool }; output: Pool; outputFormat: 'json'; status: 200 }
        | { input: { json: Pool }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: Pool }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: Pool }; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/pools/:pool_name': {
      $delete:
        | { input: { param: { pool_name: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { pool_name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pool_name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pool_name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { pool_name: string } }
            output: Pool
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pool_name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { pool_name: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Pool }
            output: Pool
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_name: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Pool }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pool_name: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Pool }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pool_name: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Pool }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_name: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Pool }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pool_name: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Pool }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/providers': {
      $get:
        | {
            input: {}
            output: { providers?: Provider[] | undefined; total_entries?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/roles': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: RoleCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | { input: { json: Role }; output: Role; outputFormat: 'json'; status: 200 }
        | { input: { json: Role }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: Role }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: Role }; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/roles/:role_name': {
      $delete:
        | { input: { param: { role_name: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { role_name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { role_name: string } }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { role_name: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Role }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_name: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Role }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_name: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Role }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_name: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Role }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_name: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Role }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: UserCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | { input: { json: User }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { json: User }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: User }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: User }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: User }; output: Error; outputFormat: 'json'; status: 409 }
    }
  } & {
    '/users/:username': {
      $delete:
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { username: string } }
            output: UserCollectionItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { username: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: User }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { username: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { username: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { username: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/variables': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: VariableCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order_by?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | { input: { json: Variable }; output: Variable; outputFormat: 'json'; status: 200 }
        | { input: { json: Variable }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: Variable }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: Variable }; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/variables/:variable_key': {
      $delete:
        | {
            input: { param: { variable_key: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { variable_key: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { variable_key: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { variable_key: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { variable_key: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { variable_key: string } }
            output: Variable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { variable_key: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { variable_key: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { variable_key: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { variable_key: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Variable }
            output: Variable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { variable_key: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Variable }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { variable_key: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Variable }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { variable_key: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Variable }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { variable_key: string } } & {
              query: { update_mask?: string[] | undefined }
            } & { json: Variable }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/version': { $get: { input: {}; output: VersionInfo; outputFormat: 'json'; status: 200 } }
  },
  '/'
>
export default routes
