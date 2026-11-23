type AdvancedDataTypeConvertSchema = { type: string; values: { [x: string]: unknown }[] }
type AdvancedDataTypeSchema = {
  display_value?: string | undefined
  error_message?: string | undefined
  valid_filter_operators?: string[] | undefined
  values?: string[] | undefined
}
type GetDeleteIdsSchema = number[]
type GetListSchema = {
  columns?: string[] | undefined
  filters?:
    | {
        col: string
        opr: string
        value: number | string | boolean | (number | string | boolean)[]
      }[]
    | undefined
  keys?:
    | (
        | 'list_columns'
        | 'order_columns'
        | 'label_columns'
        | 'description_columns'
        | 'list_title'
        | 'none'
      )[]
    | undefined
  order_column?: string | undefined
  order_direction?: 'asc' | 'desc' | undefined
  page?: number | undefined
  page_size?: number | undefined
  select_columns?: string[] | undefined
}
type AnnotationLayerRestApiGetListUser1 = { first_name: string; last_name: string }
type AnnotationLayerRestApiGetListUser = { first_name: string; last_name: string }
type AnnotationLayerRestApiGetList = {
  changed_by?: AnnotationLayerRestApiGetListUser1 | undefined
  changed_on?: (string | null) | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: AnnotationLayerRestApiGetListUser | undefined
  created_on?: (string | null) | undefined
  descr?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
}
type AnnotationLayerRestApiPost = { descr?: (string | null) | undefined; name: string }
type GetInfoSchema = {
  add_columns?:
    | { [x: string]: { page?: number | undefined; page_size?: number | undefined } }
    | undefined
  edit_columns?:
    | { [x: string]: { page?: number | undefined; page_size?: number | undefined } }
    | undefined
  keys?:
    | (
        | 'add_columns'
        | 'edit_columns'
        | 'filters'
        | 'permissions'
        | 'add_title'
        | 'edit_title'
        | 'none'
      )[]
    | undefined
}
type GetRelatedSchema = {
  filter?: string | undefined
  include_ids?: number[] | undefined
  page?: number | undefined
  page_size?: number | undefined
}
type RelatedResultResponse = {
  extra?: { [x: string]: unknown } | undefined
  text?: string | undefined
  value?: number | undefined
}
type RelatedResponseSchema = {
  count?: number | undefined
  result?: RelatedResultResponse[] | undefined
}
type GetItemSchema = {
  columns?: string[] | undefined
  keys?:
    | ('show_columns' | 'description_columns' | 'label_columns' | 'show_title' | 'none')[]
    | undefined
}
type AnnotationLayerRestApiGet = {
  descr?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
}
type AnnotationLayerRestApiPut = { descr?: string | undefined; name?: string | undefined }
type AnnotationRestApiGetListUser = { first_name: string; id?: number | undefined }
type AnnotationRestApiGetListUser1 = { first_name: string; id?: number | undefined }
type AnnotationRestApiGetList = {
  changed_by?: AnnotationRestApiGetListUser | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: AnnotationRestApiGetListUser1 | undefined
  end_dttm?: (string | null) | undefined
  id?: number | undefined
  long_descr?: (string | null) | undefined
  short_descr?: (string | null) | undefined
  start_dttm?: (string | null) | undefined
}
type AnnotationRestApiPost = {
  end_dttm: string
  json_metadata?: (string | null) | undefined
  long_descr?: (string | null) | undefined
  short_descr: string
  start_dttm: string
}
type AnnotationRestApiGetAnnotationLayer = {
  id?: number | undefined
  name?: (string | null) | undefined
}
type AnnotationRestApiGet = {
  end_dttm?: (string | null) | undefined
  id?: number | undefined
  json_metadata?: (string | null) | undefined
  layer: AnnotationRestApiGetAnnotationLayer
  long_descr?: (string | null) | undefined
  short_descr?: (string | null) | undefined
  start_dttm?: (string | null) | undefined
}
type AnnotationRestApiPut = {
  end_dttm?: string | undefined
  json_metadata?: (string | null) | undefined
  long_descr?: (string | null) | undefined
  short_descr?: string | undefined
  start_dttm?: string | undefined
}
type AvailableDomainsSchema = { domains?: string[] | undefined }
type Datasource = {
  catalog?: (string | null) | undefined
  database_name?: string | undefined
  datasource_name?: string | undefined
  datasource_type: 'table' | 'dataset' | 'query' | 'saved_query' | 'view' | 'semantic_view'
  schema?: string | undefined
}
type CacheInvalidationRequestSchema = {
  datasource_uids?: string[] | undefined
  datasources?: Datasource[] | undefined
}
type ChartGetListSchema = {
  columns?: string[] | undefined
  filters?:
    | {
        col: string
        opr: string
        value: number | string | boolean | (number | string | boolean)[]
      }[]
    | undefined
  keys?:
    | (
        | 'list_columns'
        | 'order_columns'
        | 'label_columns'
        | 'description_columns'
        | 'list_title'
        | 'none'
      )[]
    | undefined
  order_column?: string | undefined
  order_direction?: 'asc' | 'desc' | undefined
  page?: number | undefined
  page_size?: number | undefined
  select_columns?: string[] | undefined
  viz_type_order?: string[] | undefined
}
type ChartRestApiGetListUser = { first_name: string; id?: number | undefined; last_name: string }
type ChartRestApiGetListUser1 = { first_name: string; id?: number | undefined; last_name: string }
type ChartRestApiGetListDashboard = {
  dashboard_title?: (string | null) | undefined
  id?: number | undefined
}
type ChartRestApiGetListSubject = { id?: number | undefined; label: string; type: number }
type ChartRestApiGetListUser2 = { first_name: string; id?: number | undefined; last_name: string }
type ChartRestApiGetListSqlaTable = {
  default_endpoint?: (string | null) | undefined
  table_name: string
}
type ChartRestApiGetListTag = {
  id?: number | undefined
  name?: (string | null) | undefined
  type?: 1 | 2 | 3 | 4 | undefined
}
type ChartRestApiGetListSubject1 = { id?: number | undefined; label: string; type: number }
type ChartRestApiGetList = {
  cache_timeout?: (number | null) | undefined
  certification_details?: (string | null) | undefined
  certified_by?: (string | null) | undefined
  changed_by?: ChartRestApiGetListUser | undefined
  changed_by_name?: { [x: string]: unknown } | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  changed_on_dttm?: { [x: string]: unknown } | undefined
  changed_on_utc?: { [x: string]: unknown } | undefined
  created_by?: ChartRestApiGetListUser1 | undefined
  created_by_name?: { [x: string]: unknown } | undefined
  created_on_delta_humanized?: { [x: string]: unknown } | undefined
  dashboards?: ChartRestApiGetListDashboard[] | undefined
  datasource_id?: (number | null) | undefined
  datasource_name_text?: { [x: string]: unknown } | undefined
  datasource_type?: (string | null) | undefined
  datasource_url?: { [x: string]: unknown } | undefined
  description?: (string | null) | undefined
  description_markeddown?: { [x: string]: unknown } | undefined
  edit_url?: { [x: string]: unknown } | undefined
  editors?: ChartRestApiGetListSubject[] | undefined
  form_data?: { [x: string]: unknown } | undefined
  id?: number | undefined
  is_managed_externally?: boolean | undefined
  last_saved_at?: (string | null) | undefined
  last_saved_by?: ChartRestApiGetListUser2 | undefined
  params?: (string | null) | undefined
  slice_name?: (string | null) | undefined
  slice_url?: { [x: string]: unknown } | undefined
  table?: ChartRestApiGetListSqlaTable | undefined
  tags?: ChartRestApiGetListTag[] | undefined
  thumbnail_url?: { [x: string]: unknown } | undefined
  url?: { [x: string]: unknown } | undefined
  uuid?: (string | null) | undefined
  viewers?: ChartRestApiGetListSubject1[] | undefined
  viz_type?: (string | null) | undefined
}
type ChartRestApiPost = {
  cache_timeout?: (number | null) | undefined
  certification_details?: (string | null) | undefined
  certified_by?: (string | null) | undefined
  dashboards?: number[] | undefined
  datasource_id: number
  datasource_name?: (string | null) | undefined
  datasource_type: 'table' | 'dataset' | 'query' | 'saved_query' | 'view' | 'semantic_view'
  description?: (string | null) | undefined
  editors?: (number | { id: number; type: 'user' | 'role' | 'group' | 'subject' })[] | undefined
  external_url?: (string | null) | undefined
  is_managed_externally?: (boolean | null) | undefined
  params?: (string | null) | undefined
  query_context?: (string | null) | undefined
  query_context_generation?: (boolean | null) | undefined
  slice_name: string
  uuid?: (string | null) | undefined
  viewers?: (number | { id: number; type: 'user' | 'role' | 'group' | 'subject' })[] | undefined
  viz_type?: string | undefined
}
type ChartDataDatasource = {
  id: { [x: string]: unknown }
  type?: 'table' | 'dataset' | 'query' | 'saved_query' | 'view' | 'semantic_view' | undefined
}
type AnnotationLayer = {
  annotationType?: 'FORMULA' | 'INTERVAL' | 'EVENT' | 'TIME_SERIES' | undefined
  color?: (string | null) | undefined
  descriptionColumns?: string[] | undefined
  hideLine?: (boolean | null) | undefined
  intervalEndColumn?: (string | null) | undefined
  name: string
  opacity?: '' | 'opacityLow' | 'opacityMedium' | 'opacityHigh' | null | undefined
  overrides?: ({ [x: string]: { [x: string]: unknown } | null } | null) | undefined
  show: boolean
  showLabel?: (boolean | null) | undefined
  showMarkers: boolean
  sourceType?: '' | 'line' | 'NATIVE' | 'table' | undefined
  style?: 'dashed' | 'dotted' | 'solid' | 'longDashed' | undefined
  timeColumn?: (string | null) | undefined
  titleColumn?: (string | null) | undefined
  value: { [x: string]: unknown }
  width?: number | undefined
}
type ChartDataFilter = {
  col: { [x: string]: unknown }
  grain?: string | undefined
  isExtra?: boolean | undefined
  op:
    | '=='
    | '!='
    | '>'
    | '<'
    | '>='
    | '<='
    | 'LIKE'
    | 'NOT LIKE'
    | 'ILIKE'
    | 'NOT ILIKE'
    | 'IS NULL'
    | 'IS NOT NULL'
    | 'IN'
    | 'NOT IN'
    | 'IS TRUE'
    | 'IS FALSE'
    | 'TEMPORAL_RANGE'
    | 'CONTAINS_ANY'
    | 'CONTAINS_ALL'
    | 'IS_EMPTY'
    | 'IS_NOT_EMPTY'
    | 'LENGTH_EQUALS'
    | 'LENGTH_GREATER_THAN'
    | 'LENGTH_LESS_THAN'
    | 'LENGTH_GREATER_THAN_OR_EQUALS'
    | 'LENGTH_LESS_THAN_OR_EQUALS'
  val?: ({ [x: string]: unknown } | null) | undefined
}
type ChartDataQueryObject = {
  annotation_layers?: (AnnotationLayer[] | null) | undefined
  applied_time_extras?: ({ [x: string]: unknown } | null) | undefined
  apply_fetch_values_predicate?: (boolean | null) | undefined
  columns?: ({ [x: string]: unknown }[] | null) | undefined
  datasource?:
    | {
        id: { [x: string]: unknown }
        type?: 'table' | 'dataset' | 'query' | 'saved_query' | 'view' | 'semantic_view' | undefined
      }
    | undefined
  extras?:
    | {
        column_order?: (string[] | null) | undefined
        having?: string | undefined
        instant_time_comparison_range?: (string | null) | undefined
        relative_end?: 'today' | 'now' | undefined
        relative_start?: 'today' | 'now' | undefined
        semantic_selection_version?: (string | null) | undefined
        time_grain_sqla?: (string | null) | undefined
        transpile_to_dialect?: (boolean | null) | undefined
        where?: string | undefined
      }
    | undefined
  filters?: (ChartDataFilter[] | null) | undefined
  force_nonce?: (string | null) | undefined
  granularity?: (string | null) | undefined
  granularity_sqla?: (string | null) | undefined
  group_others_when_limit_reached?: (boolean | null) | undefined
  groupby?: ({ [x: string]: unknown }[] | null) | undefined
  grouping_sets?: (string[][] | null) | undefined
  having?: (string | null) | undefined
  is_rowcount?: (boolean | null) | undefined
  is_timeseries?: (boolean | null) | undefined
  metrics?: ({ [x: string]: unknown }[] | null) | undefined
  order_desc?: (boolean | null) | undefined
  orderby?: ({ [x: string]: unknown }[] | null) | undefined
  post_processing?:
    | ({ operation: string; options?: { [x: string]: unknown } | undefined }[] | null)
    | undefined
  result_type?:
    | 'columns'
    | 'full'
    | 'query'
    | 'results'
    | 'samples'
    | 'timegrains'
    | 'post_processed'
    | 'drill_detail'
    | null
    | undefined
  row_limit?: (number | null) | undefined
  row_offset?: (number | null) | undefined
  series_columns?: ({ [x: string]: unknown }[] | null) | undefined
  series_limit?: (number | null) | undefined
  series_limit_metric?: ({ [x: string]: unknown } | null) | undefined
  time_compare_full_range?: (boolean | null) | undefined
  time_offsets?: (string[] | null) | undefined
  time_range?: (string | null) | undefined
  time_shift?: (string | null) | undefined
  timeseries_limit?: (number | null) | undefined
  timeseries_limit_metric?: ({ [x: string]: unknown } | null) | undefined
  url_params?: ({ [x: string]: string } | null) | undefined
  where?: (string | null) | undefined
}
type ChartDataQueryContextSchema = {
  async_mode?: (boolean | null) | undefined
  client_id?: (string | null) | undefined
  custom_cache_timeout?: (number | null) | undefined
  datasource?: ChartDataDatasource | undefined
  force?: (boolean | null) | undefined
  force_nonce?: (string | null) | undefined
  form_data?: ({ [x: string]: unknown } | null) | undefined
  queries?: ChartDataQueryObject[] | undefined
  result_format?: 'csv' | 'json' | 'xlsx' | 'arrow' | undefined
  result_type?:
    | 'columns'
    | 'full'
    | 'query'
    | 'results'
    | 'samples'
    | 'timegrains'
    | 'post_processed'
    | 'drill_detail'
    | undefined
  tab_id?: (string | null) | undefined
}
type DashboardFilterInfo = {
  column?: (string | null) | undefined
  id: string
  name: string
  status: string
}
type ChartDataQueryTiming = {
  cache_resolution_ms: number | null
  data_acquisition_ms: number | null
  payload_assembly_ms: number | null
  query_planning_ms: number | null
  total_ms: number
}
type ChartDataResponseResult = {
  annotation_data?: ({ [x: string]: string }[] | null) | undefined
  applied_filters?: { [x: string]: unknown }[] | undefined
  cache_key: string | null
  cache_timeout: number | null
  cached_dttm: string | null
  colnames?: string[] | undefined
  coltypes?: number[] | undefined
  data?: { [x: string]: unknown }[] | undefined
  detected_currency?: (string | null) | undefined
  error?: (string | null) | undefined
  from_dttm?: (number | null) | undefined
  is_cached: boolean
  queried_dttm: string | null
  query?: (string | null) | undefined
  rejected_filters?: { [x: string]: unknown }[] | undefined
  rowcount?: number | undefined
  semantic_cache_status?: 'HIT' | 'MISS' | 'MIXED' | null | undefined
  stacktrace?: (string | null) | undefined
  status?:
    | 'stopped'
    | 'failed'
    | 'pending'
    | 'running'
    | 'scheduled'
    | 'success'
    | 'timed_out'
    | undefined
  timing?: { query: ChartDataQueryTiming; version: 1 } | undefined
  to_dttm?: (number | null) | undefined
  warning?: (string | null) | undefined
}
type ChartDataResponseSchema = {
  dashboard_filters?: { filters?: DashboardFilterInfo[] | undefined } | undefined
  result?: ChartDataResponseResult[] | undefined
}
type ChartDataAsyncResponseSchema = {
  cursor?: string | undefined
  tab_id?: (string | null) | undefined
  task_ids?: string[] | undefined
}
type ChartDataStopSchema = { client_id: string }
type GetExportIdsSchema = number[]
type GetFavStarIdsSchema2 = number[]
type ChartFavStarResponseResult = { id?: number | undefined; value?: boolean | undefined }
type GetFavStarIdsSchema = { result?: ChartFavStarResponseResult[] | undefined }
type ChartCacheWarmUpRequestSchema = {
  chart_id: number
  dashboard_id?: number | undefined
  extra_filters?: string | undefined
}
type ChartCacheWarmUpResponseSingle = {
  chart_id?: number | undefined
  viz_error?: string | undefined
  viz_status?: string | undefined
}
type ChartCacheWarmUpResponseSchema = { result?: ChartCacheWarmUpResponseSingle[] | undefined }
type Dashboard = {
  dashboard_title?: string | undefined
  id?: number | undefined
  json_metadata?: string | undefined
}
type SubjectResponse = {
  id?: number | undefined
  img?: string | undefined
  label?: string | undefined
  secondary_label?: string | undefined
  type?: number | undefined
}
type Tag = { id?: number | undefined; name?: string | undefined; type?: 1 | 2 | 3 | 4 | undefined }
type ChartGetResponseSchema = {
  cache_timeout?: string | undefined
  certification_details?: string | undefined
  certified_by?: string | undefined
  changed_on_delta_humanized?: string | undefined
  dashboards?: Dashboard[] | undefined
  datasource_id?: number | undefined
  datasource_name_text?: { [x: string]: unknown } | undefined
  datasource_type?: string | undefined
  datasource_url?: { [x: string]: unknown } | undefined
  datasource_uuid?: string | undefined
  description?: string | undefined
  editors?: SubjectResponse[] | undefined
  id?: number | undefined
  is_managed_externally?: boolean | undefined
  params?: string | undefined
  query_context?: string | undefined
  slice_name?: string | undefined
  tags?: Tag[] | undefined
  thumbnail_url?: string | undefined
  url?: string | undefined
  uuid?: string | undefined
  viewers?: SubjectResponse[] | undefined
  viz_type?: string | undefined
}
type ChartRestApiPut = {
  cache_timeout?: (number | null) | undefined
  certification_details?: (string | null) | undefined
  certified_by?: (string | null) | undefined
  dashboards?: number[] | undefined
  datasource_id?: (number | null) | undefined
  datasource_type?:
    | 'table'
    | 'dataset'
    | 'query'
    | 'saved_query'
    | 'view'
    | 'semantic_view'
    | null
    | undefined
  description?: (string | null) | undefined
  editors?: (number | { id: number; type: 'user' | 'role' | 'group' | 'subject' })[] | undefined
  external_url?: (string | null) | undefined
  is_managed_externally?: (boolean | null) | undefined
  normalization_changes?:
    | (
        | {
            control: string
            from_present: boolean
            from_value?: { [x: string]: unknown } | undefined
            to_present: boolean
            to_value?: { [x: string]: unknown } | undefined
          }[]
        | null
      )
    | undefined
  params?: (string | null) | undefined
  query_context?: (string | null) | undefined
  query_context_generation?: (boolean | null) | undefined
  slice_name?: (string | null) | undefined
  tags?: number[] | undefined
  uuid?: (string | null) | undefined
  viewers?: (number | { id: number; type: 'user' | 'role' | 'group' | 'subject' })[] | undefined
  viz_type?: (string | null) | undefined
}
type ScreenshotQuerySchema = {
  force?: boolean | undefined
  thumb_size?: number[] | undefined
  window_size?: number[] | undefined
}
type ChartCacheScreenshotResponseSchema = {
  cache_key?: string | undefined
  chart_url?: string | undefined
  image_url?: string | undefined
  task_status?: string | undefined
  task_updated_at?: string | undefined
}
type ActivityImpactChart = { id?: number | undefined; name?: string | undefined }
type ActivityRecord = {
  action_kind?: 'clone' | 'import' | 'restore' | null | undefined
  changed_by?:
    | { first_name?: string | undefined; id?: number | undefined; last_name?: string | undefined }
    | undefined
  creation_kind?: 'pre_tracking' | 'created' | 'imported' | 'unknown' | null | undefined
  entity_deleted?: boolean | undefined
  entity_deletion_state?: 'soft_deleted' | null | undefined
  entity_kind?: 'dashboard' | 'chart' | 'dataset' | undefined
  entity_name?: string | undefined
  entity_uuid?: (string | null) | undefined
  first_tracked_save?: boolean | undefined
  from_value?: ({ [x: string]: unknown } | null) | undefined
  impact?:
    | { affected_charts?: ActivityImpactChart[] | undefined; charts?: number | undefined }
    | undefined
  issued_at?: string | undefined
  kind?:
    | 'filter'
    | 'metric'
    | 'dimension'
    | 'column'
    | 'chart'
    | 'row'
    | 'tab'
    | 'tabs'
    | 'header'
    | 'markdown'
    | 'divider'
    | 'time_range'
    | 'color_palette'
    | 'field'
    | '__meta__'
    | '__creation__'
    | undefined
  operation?: 'add' | 'remove' | 'move' | 'edit' | 'update' | 'announce' | undefined
  path?: (string[] | null) | undefined
  source?: 'self' | 'related' | undefined
  summary?: string | undefined
  to_value?: ({ [x: string]: unknown } | null) | undefined
  transaction_id?: number | undefined
  version_uuid?: string | undefined
}
type ActivityResponse = {
  count?: number | undefined
  result?: ActivityRecord[] | undefined
  truncated?: boolean | undefined
}
type VersionChangeRecord = {
  from_value?: ({ [x: string]: unknown } | null) | undefined
  kind?: string | undefined
  operation?: string | undefined
  path?: { [x: string]: unknown } | undefined
  to_value?: ({ [x: string]: unknown } | null) | undefined
}
type VersionListItemSchema = {
  changed_by?:
    | { first_name?: string | undefined; id?: number | undefined; last_name?: string | undefined }
    | undefined
  changes?: VersionChangeRecord[] | undefined
  issued_at?: string | undefined
  operation_type?: string | undefined
  transaction_id?: number | undefined
  version_number?: number | undefined
  version_uuid?: string | undefined
}
type CssTemplateRestApiGetListUser = {
  first_name: string
  id?: number | undefined
  last_name: string
}
type CssTemplateRestApiGetListUser1 = {
  first_name: string
  id?: number | undefined
  last_name: string
}
type CssTemplateRestApiGetList = {
  changed_by?: CssTemplateRestApiGetListUser | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: CssTemplateRestApiGetListUser1 | undefined
  created_on?: (string | null) | undefined
  css?: (string | null) | undefined
  id?: number | undefined
  template_name?: (string | null) | undefined
}
type CssTemplateRestApiPost = {
  css?: (string | null) | undefined
  template_name?: (string | null) | undefined
}
type CssTemplateRestApiGetUser = { first_name: string; id?: number | undefined; last_name: string }
type CssTemplateRestApiGetUser1 = { first_name: string; id?: number | undefined; last_name: string }
type CssTemplateRestApiGet = {
  changed_by?: CssTemplateRestApiGetUser | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: CssTemplateRestApiGetUser1 | undefined
  css?: (string | null) | undefined
  id?: number | undefined
  template_name?: (string | null) | undefined
}
type CssTemplateRestApiPut = {
  css?: (string | null) | undefined
  template_name?: (string | null) | undefined
}
type DashboardRestApiGetListUser = {
  first_name: string
  id?: number | undefined
  last_name: string
}
type DashboardRestApiGetListUser1 = {
  first_name: string
  id?: number | undefined
  last_name: string
}
type DashboardRestApiGetListSubject = { id?: number | undefined; label: string; type: number }
type DashboardRestApiGetListTag = {
  id?: number | undefined
  name?: (string | null) | undefined
  type?: 1 | 2 | 3 | 4 | undefined
}
type DashboardRestApiGetListSubject1 = { id?: number | undefined; label: string; type: number }
type DashboardRestApiGetList = {
  certification_details?: (string | null) | undefined
  certified_by?: (string | null) | undefined
  changed_by?: DashboardRestApiGetListUser | undefined
  changed_by_name?: { [x: string]: unknown } | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  changed_on_utc?: { [x: string]: unknown } | undefined
  created_by?: DashboardRestApiGetListUser1 | undefined
  created_on_delta_humanized?: { [x: string]: unknown } | undefined
  dashboard_title?: (string | null) | undefined
  description?: (string | null) | undefined
  editors?: DashboardRestApiGetListSubject[] | undefined
  id?: number | undefined
  is_managed_externally?: boolean | undefined
  published?: (boolean | null) | undefined
  slug?: (string | null) | undefined
  status?: { [x: string]: unknown } | undefined
  tags?: DashboardRestApiGetListTag[] | undefined
  url?: { [x: string]: unknown } | undefined
  uuid?: (string | null) | undefined
  viewers?: DashboardRestApiGetListSubject1[] | undefined
}
type DashboardRestApiPost = {
  certification_details?: (string | null) | undefined
  certified_by?: (string | null) | undefined
  css?: string | undefined
  dashboard_title?: (string | null) | undefined
  description?: (string | null) | undefined
  editors?: (number | { id: number; type: 'user' | 'role' | 'group' | 'subject' })[] | undefined
  external_url?: (string | null) | undefined
  is_managed_externally?: (boolean | null) | undefined
  json_metadata?: string | undefined
  position_json?: string | undefined
  published?: boolean | undefined
  slug?: (string | null) | undefined
  theme_id?: (number | null) | undefined
  uuid?: (string | null) | undefined
  viewers?: (number | { id: number; type: 'user' | 'role' | 'group' | 'subject' })[] | undefined
}
type User = {
  first_name?: string | undefined
  id?: number | undefined
  last_name?: string | undefined
}
type Tag1 = { id?: number | undefined; name?: string | undefined; type?: 1 | 2 | 3 | 4 | undefined }
type DashboardGetResponseSchema = {
  certification_details?: string | undefined
  certified_by?: string | undefined
  changed_by?: User | undefined
  changed_by_name?: string | undefined
  changed_on?: string | undefined
  changed_on_delta_humanized?: string | undefined
  charts?: string[] | undefined
  created_by?: User | undefined
  created_on_delta_humanized?: string | undefined
  css?: string | undefined
  custom_tags?: Tag1[] | undefined
  dashboard_title?: string | undefined
  description?: (string | null) | undefined
  editors?: SubjectResponse[] | undefined
  id?: number | undefined
  is_managed_externally?: (boolean | null) | undefined
  json_metadata?: string | undefined
  position_json?: string | undefined
  published?: boolean | undefined
  slug?: string | undefined
  tags?: Tag1[] | undefined
  theme?:
    | { id?: number | undefined; json_data?: string | undefined; theme_name?: string | undefined }
    | undefined
  thumbnail_url?: (string | null) | undefined
  url?: string | undefined
  uuid?: (string | null) | undefined
  viewers?: SubjectResponse[] | undefined
}
type ChartEntityResponseSchema = {
  cache_timeout?: number | undefined
  certification_details?: string | undefined
  certified_by?: string | undefined
  changed_on?: string | undefined
  description?: string | undefined
  description_markeddown?: string | undefined
  form_data?: { [x: string]: unknown } | undefined
  id?: number | undefined
  slice_name?: string | undefined
  slice_url?: string | undefined
}
type DashboardCopySchema = {
  css?: string | undefined
  dashboard_title?: (string | null) | undefined
  duplicate_slices?: boolean | undefined
  json_metadata: string
  replace_metadata?: boolean | undefined
}
type Database = {
  allow_multi_catalog?: boolean | undefined
  allows_cost_estimate?: boolean | undefined
  allows_subquery?: boolean | undefined
  allows_virtual_table_explore?: boolean | undefined
  backend?: string | undefined
  disable_data_preview?: boolean | undefined
  disable_drill_to_detail?: boolean | undefined
  explore_database_id?: number | undefined
  id?: number | undefined
  name?: string | undefined
}
type DashboardDatasetSchema = {
  always_filter_main_dttm?: boolean | undefined
  cache_timeout?: number | undefined
  chart_display_labels?: { [x: string]: { [x: string]: string } } | undefined
  column_formats?: { [x: string]: unknown } | undefined
  column_names?: string[] | undefined
  column_types?: number[] | undefined
  columns?: { [x: string]: unknown }[] | undefined
  currency_code_column?: string | undefined
  database?: Database | undefined
  datasource_name?: string | undefined
  default_endpoint?: string | undefined
  edit_url?: string | undefined
  editors?: SubjectResponse[] | undefined
  fetch_values_predicate?: string | undefined
  filter_select?: boolean | undefined
  filter_select_enabled?: boolean | undefined
  granularity_sqla?: string[][] | undefined
  health_check_message?: string | undefined
  id?: number | undefined
  is_sqllab_view?: boolean | undefined
  main_dttm_col?: string | undefined
  metadata_error?: string | undefined
  metrics?: { [x: string]: unknown }[] | undefined
  name?: string | undefined
  normalize_columns?: boolean | undefined
  offset?: number | undefined
  order_by_choices?: string[][] | undefined
  params?: string | undefined
  parent?: { [x: string]: unknown } | undefined
  partition_column?: (string | null) | undefined
  partition_filter_mapping?: ({ [x: string]: unknown } | null) | undefined
  partition_mapped_column?: (string | null) | undefined
  perm?: string | undefined
  schema?: string | undefined
  select_star?: string | undefined
  semantic_view_features?: string[] | undefined
  sql?: string | undefined
  supports_drill_to_detail?: boolean | undefined
  supports_samples?: boolean | undefined
  table_name?: string | undefined
  template_params?: string | undefined
  time_grain_sqla?: string[][] | undefined
  type?: string | undefined
  uid?: string | undefined
  verbose_map?: { [x: string]: string } | undefined
}
type User1 = {
  first_name?: string | undefined
  id?: number | undefined
  last_name?: string | undefined
  username?: string | undefined
}
type EmbeddedDashboardResponseSchema = {
  allowed_domains?: string[] | undefined
  changed_by?: User1 | undefined
  changed_on?: string | undefined
  dashboard_id?: string | undefined
  uuid?: string | undefined
}
type EmbeddedDashboardConfig = { allowed_domains: string[] }
type DashboardRestApiPut = {
  certification_details?: (string | null) | undefined
  certified_by?: (string | null) | undefined
  css?: (string | null) | undefined
  dashboard_title?: (string | null) | undefined
  description?: (string | null) | undefined
  editors?: (number | { id: number; type: 'user' | 'role' | 'group' | 'subject' })[] | undefined
  external_url?: (string | null) | undefined
  is_managed_externally?: (boolean | null) | undefined
  json_metadata?: (string | null) | undefined
  position_json?: (string | null) | undefined
  published?: (boolean | null) | undefined
  slug?: (string | null) | undefined
  tags?: (number | null)[] | undefined
  theme_id?: (number | null) | undefined
  uuid?: (string | null) | undefined
  viewers?: (number | { id: number; type: 'user' | 'role' | 'group' | 'subject' })[] | undefined
}
type DashboardScreenshotPostSchema = {
  activeTabs?: string[] | undefined
  anchor?: string | undefined
  dataMask?: { [x: string]: { [x: string]: unknown } } | undefined
  urlParams?: { [x: string]: unknown }[] | undefined
}
type DashboardCacheScreenshotResponseSchema = {
  cache_key?: string | undefined
  dashboard_url?: string | undefined
  image_url?: string | undefined
  task_status?: string | undefined
  task_timeout_seconds?: number | undefined
  task_updated_at?: string | undefined
}
type DashboardChartCustomizationsConfigUpdateSchema = {
  deleted?: string[] | undefined
  modified?: { [x: string]: unknown }[] | undefined
  reordered?: string[] | undefined
}
type DashboardColorsConfigUpdateSchema = {
  color_namespace?: (string | null) | undefined
  color_scheme?: (string | null) | undefined
  color_scheme_domain?: string[] | undefined
  label_colors?: { [x: string]: unknown } | undefined
  map_label_colors?: { [x: string]: unknown } | undefined
  shared_label_colors?: string[] | undefined
}
type DashboardExportXlsxPostSchema = {
  active_data_mask?: { [x: string]: { [x: string]: unknown } } | undefined
  mode?: 'data' | 'images' | undefined
}
type DashboardExportXlsxResponseSchema = { job_id?: string | undefined }
type TemporaryCachePostSchema = { value: string }
type TemporaryCachePutSchema = { value: string }
type DashboardNativeFiltersConfigUpdateSchema = {
  deleted?: string[] | undefined
  modified?: { [x: string]: unknown }[] | undefined
  reordered?: string[] | undefined
}
type DashboardPermalinkStateSchema = {
  activeTabs?: ((string | null)[] | null) | undefined
  anchor?: (string | null) | undefined
  chartStates?: ({ [x: string]: unknown } | null) | undefined
  dataMask?: ({ [x: string]: unknown } | null) | undefined
  urlParams?: (({ [x: string]: unknown } | null)[] | null) | undefined
}
type DatabaseRestApiGetListUser = { first_name: string; last_name: string }
type DatabaseRestApiGetListUser1 = { first_name: string; last_name: string }
type DatabaseRestApiGetList = {
  allow_ctas?: (boolean | null) | undefined
  allow_cvas?: (boolean | null) | undefined
  allow_dml?: (boolean | null) | undefined
  allow_file_upload?: (boolean | null) | undefined
  allow_multi_catalog?: { [x: string]: unknown } | undefined
  allow_run_async?: (boolean | null) | undefined
  allows_cost_estimate?: { [x: string]: unknown } | undefined
  allows_subquery?: { [x: string]: unknown } | undefined
  allows_virtual_table_explore?: { [x: string]: unknown } | undefined
  backend?: { [x: string]: unknown } | undefined
  changed_by?: DatabaseRestApiGetListUser | undefined
  changed_on?: (string | null) | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  configuration_method?: (string | null) | undefined
  created_by?: DatabaseRestApiGetListUser1 | undefined
  database_name: string
  disable_data_preview?: { [x: string]: unknown } | undefined
  disable_drill_to_detail?: { [x: string]: unknown } | undefined
  engine_information?: { [x: string]: unknown } | undefined
  explore_database_id?: { [x: string]: unknown } | undefined
  expose_in_sqllab?: (boolean | null) | undefined
  extra?: (string | null) | undefined
  force_ctas_schema?: (string | null) | undefined
  id?: number | undefined
  uuid?: (string | null) | undefined
}
type DatabaseRestApiPost = {
  allow_ctas?: boolean | undefined
  allow_cvas?: boolean | undefined
  allow_dml?: boolean | undefined
  allow_file_upload?: boolean | undefined
  allow_run_async?: boolean | undefined
  cache_timeout?: (number | null) | undefined
  configuration_method?: 'sqlalchemy_form' | 'dynamic_form' | undefined
  database_name: string
  driver?: (string | null) | undefined
  engine?: (string | null) | undefined
  expose_in_sqllab?: boolean | undefined
  external_url?: (string | null) | undefined
  extra?: string | undefined
  force_ctas_schema?: (string | null) | undefined
  impersonate_user?: boolean | undefined
  is_managed_externally?: (boolean | null) | undefined
  masked_encrypted_extra?: (string | null) | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  server_cert?: (string | null) | undefined
  sqlalchemy_uri?: string | undefined
  ssh_tunnel?:
    | {
        id?: (number | null) | undefined
        password?: string | undefined
        private_key?: string | undefined
        private_key_password?: string | undefined
        server_address?: string | undefined
        server_host_key?: (string | null) | undefined
        server_port?: number | undefined
        username?: string | undefined
      }
    | undefined
  uuid?: string | undefined
}
type DatabaseTestConnectionSchema = {
  configuration_method?: 'sqlalchemy_form' | 'dynamic_form' | undefined
  database_name?: (string | null) | undefined
  driver?: (string | null) | undefined
  engine?: (string | null) | undefined
  extra?: string | undefined
  impersonate_user?: boolean | undefined
  masked_encrypted_extra?: (string | null) | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  server_cert?: (string | null) | undefined
  sqlalchemy_uri?: string | undefined
  ssh_tunnel?:
    | {
        id?: (number | null) | undefined
        password?: string | undefined
        private_key?: string | undefined
        private_key_password?: string | undefined
        server_address?: string | undefined
        server_host_key?: (string | null) | undefined
        server_port?: number | undefined
        username?: string | undefined
      }
    | undefined
}
type UploadFileMetadataPostSchema = {
  delimiter?: string | undefined
  file: File
  header_row?: number | undefined
  type: 'csv' | 'excel' | 'columnar'
}
type UploadFileMetadataItem = {
  column_names?: string[] | undefined
  sheet_name?: string | undefined
}
type UploadFileMetadata = { items?: UploadFileMetadataItem[] | undefined }
type DatabaseValidateParametersSchema = {
  catalog?: { [x: string]: { [x: string]: unknown } | null } | undefined
  configuration_method: 'sqlalchemy_form' | 'dynamic_form'
  database_name?: (string | null) | undefined
  driver?: (string | null) | undefined
  engine: string
  extra?: string | undefined
  id?: (number | null) | undefined
  impersonate_user?: boolean | undefined
  masked_encrypted_extra?: (string | null) | undefined
  parameters?: { [x: string]: { [x: string]: unknown } | null } | undefined
  server_cert?: (string | null) | undefined
  ssh_tunnel?:
    | {
        id?: (number | null) | undefined
        password?: (string | null) | undefined
        private_key?: (string | null) | undefined
        private_key_password?: (string | null) | undefined
        server_address?: (string | null) | undefined
        server_host_key?: (string | null) | undefined
        server_port?: (number | null) | undefined
        username?: (string | null) | undefined
      }
    | undefined
}
type DatabaseRestApiPut = {
  allow_ctas?: boolean | undefined
  allow_cvas?: boolean | undefined
  allow_dml?: boolean | undefined
  allow_file_upload?: boolean | undefined
  allow_run_async?: boolean | undefined
  cache_timeout?: (number | null) | undefined
  configuration_method?: 'sqlalchemy_form' | 'dynamic_form' | undefined
  database_name?: (string | null) | undefined
  driver?: (string | null) | undefined
  engine?: (string | null) | undefined
  expose_in_sqllab?: boolean | undefined
  external_url?: (string | null) | undefined
  extra?: string | undefined
  force_ctas_schema?: (string | null) | undefined
  impersonate_user?: boolean | undefined
  is_managed_externally?: (boolean | null) | undefined
  masked_encrypted_extra?: (string | null) | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  server_cert?: (string | null) | undefined
  sqlalchemy_uri?: string | undefined
  ssh_tunnel?:
    | {
        id?: (number | null) | undefined
        password?: string | undefined
        private_key?: string | undefined
        private_key_password?: string | undefined
        server_address?: string | undefined
        server_host_key?: (string | null) | undefined
        server_port?: number | undefined
        username?: string | undefined
      }
    | undefined
  uuid?: string | undefined
}
type DatabaseCatalogsQuerySchema = { force?: boolean | undefined }
type CatalogsResponseSchema = { result?: string[] | undefined }
type EncryptedExtraExpiration = { expired?: boolean | undefined; expires_at?: string | undefined }
type EngineInformation = {
  disable_ssh_tunneling?: boolean | undefined
  encrypted_extra_expirations?: { [x: string]: EncryptedExtraExpiration } | undefined
  encrypted_extra_sensitive_fields?: { [x: string]: string } | undefined
  identifier_quote?:
    | {
        end?: string | undefined
        escape_by_doubling?: boolean | undefined
        start?: string | undefined
      }
    | undefined
  oauth2_enabled?: boolean | undefined
  supports_dynamic_catalog?: boolean | undefined
  supports_file_upload?: boolean | undefined
  supports_oauth2?: boolean | undefined
  supports_offset?: boolean | undefined
  supports_schemas?: boolean | undefined
}
type DatabaseConnectionSchema = {
  allow_ctas?: boolean | undefined
  allow_cvas?: boolean | undefined
  allow_dml?: boolean | undefined
  allow_file_upload?: boolean | undefined
  allow_run_async?: boolean | undefined
  backend?: (string | null) | undefined
  cache_timeout?: (number | null) | undefined
  configuration_method?: string | undefined
  database_name?: (string | null) | undefined
  driver?: (string | null) | undefined
  engine_information?: EngineInformation | undefined
  expose_in_sqllab?: boolean | undefined
  extra?: string | undefined
  force_ctas_schema?: (string | null) | undefined
  id?: number | undefined
  impersonate_user?: boolean | undefined
  is_managed_externally?: (boolean | null) | undefined
  masked_encrypted_extra?: (string | null) | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  parameters_schema?: { [x: string]: { [x: string]: unknown } } | undefined
  server_cert?: (string | null) | undefined
  sqlalchemy_uri?: string | undefined
  ssh_tunnel?:
    | {
        id?: (number | null) | undefined
        password?: string | undefined
        private_key?: string | undefined
        private_key_password?: string | undefined
        server_address?: string | undefined
        server_host_key?: (string | null) | undefined
        server_port?: number | undefined
        username?: string | undefined
      }
    | undefined
  uuid?: string | undefined
}
type EncryptedExtraHintSchema = {
  expired?: (boolean | null) | undefined
  expires_at?: (string | null) | undefined
  label: string
  path: string
  suffix?: (string | null) | undefined
}
type EncryptedExtraHintsResponseSchema = { result?: EncryptedExtraHintSchema[] | undefined }
type DatabaseFunctionNamesResponse = { function_names?: string[] | undefined }
type DatabaseOAuth2TokensRestApiGetListUser = {
  email: string
  first_name: string
  last_name: string
  username: string
}
type DatabaseOAuth2TokensRestApiGetList = {
  access_token_expiration?: (string | null) | undefined
  id?: number | undefined
  user: DatabaseOAuth2TokensRestApiGetListUser
}
type DatabaseOAuth2TokensDeleteSchema = { token_ids: number[] }
type DatabaseRelatedChart = {
  id?: number | undefined
  slice_name?: string | undefined
  viz_type?: string | undefined
}
type DatabaseRelatedCharts = {
  count?: number | undefined
  result?: DatabaseRelatedChart[] | undefined
}
type DatabaseRelatedDashboard = {
  id?: number | undefined
  json_metadata?: { [x: string]: unknown } | undefined
  slug?: string | undefined
  title?: string | undefined
}
type DatabaseRelatedDashboards = {
  count?: number | undefined
  result?: DatabaseRelatedDashboard[] | undefined
}
type DatabaseRelatedDataset = {
  id?: number | undefined
  schema?: string | undefined
  table_name?: string | undefined
}
type DatabaseRelatedDatasets = {
  count?: number | undefined
  result?: DatabaseRelatedDataset[] | undefined
}
type DatabaseRelatedObjectsResponse = {
  charts?: DatabaseRelatedCharts | undefined
  dashboards?: DatabaseRelatedDashboards | undefined
  datasets?: DatabaseRelatedDatasets | undefined
}
type DatabaseSchemasQuerySchema = {
  catalog?: string | undefined
  force?: boolean | undefined
  upload_allowed?: boolean | undefined
}
type SchemasResponseSchema = { result?: string[] | undefined }
type DatabaseSchemaAccessForFileUploadResponse = { schemas?: string[] | undefined }
type SelectStarResponseSchema = { result?: string | undefined }
type TableMetadataColumnsResponse = {
  duplicates_constraint?: string | undefined
  keys?: string[] | undefined
  longType?: string | undefined
  name?: string | undefined
  type?: string | undefined
}
type TableMetadataOptionsResponse = {
  deferrable?: boolean | undefined
  initially?: boolean | undefined
  match?: boolean | undefined
  ondelete?: boolean | undefined
  onupdate?: boolean | undefined
}
type TableMetadataForeignKeysIndexesResponse = {
  column_names?: string[] | undefined
  name?: string | undefined
  options?: TableMetadataOptionsResponse | undefined
  referred_columns?: string[] | undefined
  referred_schema?: string | undefined
  referred_table?: string | undefined
  type?: string | undefined
}
type TableMetadataResponseSchema = {
  columns?: TableMetadataColumnsResponse[] | undefined
  foreignKeys?: TableMetadataForeignKeysIndexesResponse[] | undefined
  indexes?: TableMetadataForeignKeysIndexesResponse[] | undefined
  name?: string | undefined
  primaryKey?:
    | { column_names?: string[] | undefined; name?: string | undefined; type?: string | undefined }
    | undefined
  selectStar?: string | undefined
}
type TableExtraMetadataResponseSchema = {
  clustering?: { [x: string]: unknown } | undefined
  metadata?: { [x: string]: unknown } | undefined
  partitions?: { [x: string]: unknown } | undefined
}
type DatabaseTablesQuerySchema = {
  catalog_name?: string | undefined
  force?: boolean | undefined
  schema_name: string
}
type DatabaseTablesResponse = {
  extra?: { [x: string]: unknown } | undefined
  type?: string | undefined
  value?: string | undefined
}
type UploadPostSchema = {
  already_exists?: 'fail' | 'replace' | 'append' | undefined
  column_data_types?: string | undefined
  column_dates?: string[] | undefined
  columns_read?: string[] | undefined
  dataframe_index?: boolean | undefined
  day_first?: boolean | undefined
  decimal_character?: string | undefined
  delimiter?: string | undefined
  file: string
  header_row?: number | undefined
  index_column?: string | undefined
  index_label?: string | undefined
  null_values?: string[] | undefined
  rows_to_read?: (number | null) | undefined
  schema?: string | undefined
  sheet_name?: string | undefined
  skip_blank_lines?: boolean | undefined
  skip_initial_space?: boolean | undefined
  skip_rows?: number | undefined
  table_name: string
  type: 'csv' | 'excel' | 'columnar'
}
type ValidateSQLRequest = {
  catalog?: (string | null) | undefined
  schema?: (string | null) | undefined
  sql: string
  template_params?: ({ [x: string]: unknown } | null) | undefined
}
type ValidateSQLResponse = {
  end_column?: number | undefined
  line_number?: number | undefined
  message?: string | undefined
  start_column?: number | undefined
}
type DatasetRestApiGetListUser = { first_name: string; id?: number | undefined; last_name: string }
type DatasetRestApiGetListDatabase = {
  database_name: string
  id?: number | undefined
  uuid?: (string | null) | undefined
}
type DatasetRestApiGetListSubject = { id?: number | undefined; label: string; type: number }
type DatasetRestApiGetList = {
  catalog?: (string | null) | undefined
  changed_by?: DatasetRestApiGetListUser | undefined
  changed_by_name?: { [x: string]: unknown } | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  changed_on_utc?: { [x: string]: unknown } | undefined
  database: DatasetRestApiGetListDatabase
  datasource_type?: { [x: string]: unknown } | undefined
  default_endpoint?: (string | null) | undefined
  description?: (string | null) | undefined
  editors?: DatasetRestApiGetListSubject[] | undefined
  explore_url?: { [x: string]: unknown } | undefined
  extra?: (string | null) | undefined
  id?: number | undefined
  kind?: { [x: string]: unknown } | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  table_name: string
  uuid?: (string | null) | undefined
}
type DatasetRestApiPost = {
  always_filter_main_dttm?: boolean | undefined
  catalog?: (string | null) | undefined
  currency_code_column?: (string | null) | undefined
  database: number
  editors?: (number | { id: number; type: 'user' | 'role' | 'group' | 'subject' })[] | undefined
  external_url?: (string | null) | undefined
  is_managed_externally?: (boolean | null) | undefined
  normalize_columns?: boolean | undefined
  partition_column?: (string | null) | undefined
  partition_mapped_column?: (string | null) | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  table_name: string
  template_params?: (string | null) | undefined
  uuid?: (string | null) | undefined
}
type DistinctResultResponse = { text?: string | undefined }
type DistincResponseSchema = {
  count?: number | undefined
  result?: DistinctResultResponse[] | undefined
}
type DatasetDuplicateSchema = { base_model_id: number; table_name: string }
type GetOrCreateDatasetSchema = {
  always_filter_main_dttm?: boolean | undefined
  catalog?: (string | null) | undefined
  database_id: number
  normalize_columns?: boolean | undefined
  schema?: (string | null) | undefined
  table_name: string
  template_params?: string | undefined
}
type GetRelatedObjectsIdsSchema = number[]
type DatasetRelatedChart = {
  id?: number | undefined
  slice_name?: string | undefined
  viz_type?: string | undefined
}
type DatasetRelatedCharts = {
  count?: number | undefined
  restricted_count?: number | undefined
  result?: DatasetRelatedChart[] | undefined
}
type DatasetRelatedDashboard = {
  id?: number | undefined
  json_metadata?: { [x: string]: unknown } | undefined
  slug?: string | undefined
  title?: string | undefined
}
type DatasetRelatedDashboards = {
  count?: number | undefined
  restricted_count?: number | undefined
  result?: DatasetRelatedDashboard[] | undefined
}
type DatasetRelatedObjectsResponse = {
  charts?: DatasetRelatedCharts | undefined
  dashboards?: DatasetRelatedDashboards | undefined
}
type DatasetCacheWarmUpRequestSchema = {
  dashboard_id?: number | undefined
  db_name: string
  extra_filters?: string | undefined
  table_name: string
}
type DatasetCacheWarmUpResponseSingle = {
  chart_id?: number | undefined
  viz_error?: string | undefined
  viz_status?: string | undefined
}
type DatasetCacheWarmUpResponseSchema = { result?: DatasetCacheWarmUpResponseSingle[] | undefined }
type DatasetRestApiGetUser1 = { first_name: string; last_name: string }
type DatasetRestApiGetTableColumn = {
  advanced_data_type?: (string | null) | undefined
  certification_details?: { [x: string]: unknown } | undefined
  certified_by?: { [x: string]: unknown } | undefined
  changed_on?: (string | null) | undefined
  column_name: string
  created_on?: (string | null) | undefined
  description?: (string | null) | undefined
  expression?: (string | null) | undefined
  extra?: (string | null) | undefined
  filterable?: (boolean | null) | undefined
  groupby?: (boolean | null) | undefined
  id?: number | undefined
  is_active?: (boolean | null) | undefined
  is_certified?: { [x: string]: unknown } | undefined
  is_dttm?: (boolean | null) | undefined
  partition_transform_is_monotonic?: (boolean | null) | undefined
  partition_value_transform?: (string | null) | undefined
  python_date_format?: (string | null) | undefined
  type?: (string | null) | undefined
  type_generic?: { [x: string]: unknown } | undefined
  uuid?: (string | null) | undefined
  verbose_name?: (string | null) | undefined
  warning_markdown?: { [x: string]: unknown } | undefined
}
type DatasetRestApiGetUser = { first_name: string; last_name: string }
type DatasetRestApiGetDatabase = {
  allow_multi_catalog?: { [x: string]: unknown } | undefined
  backend?: { [x: string]: unknown } | undefined
  database_name: string
  id?: number | undefined
  uuid?: (string | null) | undefined
}
type DatasetRestApiGetSubject = { id?: number | undefined; label: string; type: number }
type DatasetRestApiGetSqlMetric = {
  certification_details?: { [x: string]: unknown } | undefined
  certified_by?: { [x: string]: unknown } | undefined
  changed_on?: (string | null) | undefined
  created_on?: (string | null) | undefined
  currency?: ({ [x: string]: unknown } | null) | undefined
  d3format?: (string | null) | undefined
  description?: (string | null) | undefined
  expression: string
  extra?: (string | null) | undefined
  id?: number | undefined
  is_certified?: { [x: string]: unknown } | undefined
  metric_name: string
  metric_type?: (string | null) | undefined
  uuid?: (string | null) | undefined
  verbose_name?: (string | null) | undefined
  warning_markdown?: { [x: string]: unknown } | undefined
  warning_text?: (string | null) | undefined
}
type DatasetRestApiGet = {
  always_filter_main_dttm?: (boolean | null) | undefined
  cache_timeout?: { [x: string]: unknown } | undefined
  catalog?: (string | null) | undefined
  changed_by?: DatasetRestApiGetUser1 | undefined
  changed_on?: (string | null) | undefined
  changed_on_humanized?: { [x: string]: unknown } | undefined
  column_formats?: { [x: string]: unknown } | undefined
  columns: DatasetRestApiGetTableColumn[]
  created_by?: DatasetRestApiGetUser | undefined
  created_on?: (string | null) | undefined
  created_on_humanized?: { [x: string]: unknown } | undefined
  currency_code_column?: (string | null) | undefined
  database: DatasetRestApiGetDatabase
  datasource_name?: { [x: string]: unknown } | undefined
  datasource_type?: { [x: string]: unknown } | undefined
  default_endpoint?: (string | null) | undefined
  description?: (string | null) | undefined
  editors?: DatasetRestApiGetSubject[] | undefined
  extra?: (string | null) | undefined
  fetch_values_predicate?: (string | null) | undefined
  filter_select_enabled?: (boolean | null) | undefined
  folders?: ({ [x: string]: unknown } | null) | undefined
  granularity_sqla?: { [x: string]: unknown } | undefined
  id?: number | undefined
  is_managed_externally?: boolean | undefined
  is_sqllab_view?: (boolean | null) | undefined
  kind?: { [x: string]: unknown } | undefined
  main_dttm_col?: (string | null) | undefined
  metrics: DatasetRestApiGetSqlMetric[]
  name?: { [x: string]: unknown } | undefined
  normalize_columns?: (boolean | null) | undefined
  offset?: (number | null) | undefined
  order_by_choices?: { [x: string]: unknown } | undefined
  partition_column?: (string | null) | undefined
  partition_filter_mapping?: { [x: string]: unknown } | undefined
  partition_mapped_column?: (string | null) | undefined
  partition_value_transform_default?: { [x: string]: unknown } | undefined
  schema?: (string | null) | undefined
  select_star?: { [x: string]: unknown } | undefined
  sql?: (string | null) | undefined
  table_name: string
  template_params?: (string | null) | undefined
  time_grain_sqla?: { [x: string]: unknown } | undefined
  uid?: { [x: string]: unknown } | undefined
  url?: { [x: string]: unknown } | undefined
  uuid?: (string | null) | undefined
  verbose_map?: { [x: string]: unknown } | undefined
}
type DatasetColumnsPut = {
  advanced_data_type?: (string | null) | undefined
  certification_details?: (string | null) | undefined
  certified_by?: (string | null) | undefined
  column_name: string
  datetime_format?: (string | null) | undefined
  description?: (string | null) | undefined
  expression?: (string | null) | undefined
  extra?: (string | null) | undefined
  filterable?: boolean | undefined
  groupby?: boolean | undefined
  id?: number | undefined
  is_active?: (boolean | null) | undefined
  is_certified?: (boolean | null) | undefined
  is_dttm?: (boolean | null) | undefined
  partition_transform_is_monotonic?: (boolean | null) | undefined
  partition_value_transform?: (string | null) | undefined
  python_date_format?: (string | null) | undefined
  type?: (string | null) | undefined
  uuid?: (string | null) | undefined
  verbose_name?: (string | null) | undefined
  warning_markdown?: (string | null) | undefined
}
type Folder = {
  children?: (Folder[] | null) | undefined
  description?: (string | null) | undefined
  name?: string | undefined
  type?: 'metric' | 'column' | 'folder' | undefined
  uuid: string
}
type DatasetMetricsPut = {
  certification_details?: (string | null) | undefined
  certified_by?: (string | null) | undefined
  currency?: { symbol?: string | undefined; symbolPosition?: string | undefined } | undefined
  d3format?: (string | null) | undefined
  description?: (string | null) | undefined
  expression: string
  extra?: (string | null) | undefined
  id?: number | undefined
  is_certified?: (boolean | null) | undefined
  metric_name: string
  metric_type?: (string | null) | undefined
  uuid?: (string | null) | undefined
  verbose_name?: (string | null) | undefined
  warning_markdown?: (string | null) | undefined
  warning_text?: (string | null) | undefined
}
type DatasetRestApiPut = {
  always_filter_main_dttm?: boolean | undefined
  cache_timeout?: (number | null) | undefined
  catalog?: (string | null) | undefined
  columns?: DatasetColumnsPut[] | undefined
  currency_code_column?: (string | null) | undefined
  database_id?: number | undefined
  default_endpoint?: (string | null) | undefined
  description?: (string | null) | undefined
  editors?: (number | { id: number; type: 'user' | 'role' | 'group' | 'subject' })[] | undefined
  external_url?: (string | null) | undefined
  extra?: (string | null) | undefined
  fetch_values_predicate?: (string | null) | undefined
  filter_select_enabled?: (boolean | null) | undefined
  folders?: Folder[] | undefined
  is_managed_externally?: (boolean | null) | undefined
  is_sqllab_view?: (boolean | null) | undefined
  main_dttm_col?: (string | null) | undefined
  metrics?: DatasetMetricsPut[] | undefined
  normalize_columns?: (boolean | null) | undefined
  offset?: (number | null) | undefined
  partition_column?: (string | null) | undefined
  partition_mapped_column?: (string | null) | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  table_name?: (string | null) | undefined
  template_params?: (string | null) | undefined
  uuid?: (string | null) | undefined
}
type PartitionMappingPreviewSchema = {
  is_monotonic?: boolean | undefined
  mapped_column: string
  operator?: '<' | '<=' | '==' | '>' | '>=' | 'IN' | undefined
  partition_column?: (string | null) | undefined
  sample_values: string[]
  validation_partition_values?: (string[] | null) | undefined
  value_transform: string | null
}
type DatasetPurgeRequestSchema = { confirmed_impact_token: string }
type DatasetPurgeImpactObject = {
  archived: boolean
  name: string
  url: string | null
  uuid: string
}
type DatasetPurgeImpactCollection = {
  count: number
  restricted_count: number
  result: DatasetPurgeImpactObject[]
}
type DatasetPurgeImpactSchema = {
  charts: DatasetPurgeImpactCollection
  dashboards: DatasetPurgeImpactCollection
  impact_token: string
}
type DatasourceQueryOrder = { column: string; descending?: boolean | undefined }
type DatasourceQuerySchema = {
  cache_timeout?: (number | null) | undefined
  dimensions?: { [x: string]: unknown }[] | undefined
  filters?: ChartDataFilter[] | undefined
  force?: boolean | undefined
  limit?: (number | null) | undefined
  metrics?: { [x: string]: unknown }[] | undefined
  offset?: number | undefined
  order?: DatasourceQueryOrder[] | undefined
  result_format?: 'csv' | 'json' | 'xlsx' | 'arrow' | undefined
  semantic_selection_version?: (string | null) | undefined
  time_column?: (string | null) | undefined
  time_grain?: (string | null) | undefined
  time_range?: (string | null) | undefined
  use_cache?: boolean | undefined
}
type RlsRole = { id?: number | undefined; name?: string | undefined }
type RlsFilter = {
  clause?: (string | null) | undefined
  filter_type?: (string | null) | undefined
  group_key?: (string | null) | undefined
  id?: number | undefined
  inherited?: boolean | undefined
  name?: string | undefined
  roles?: RlsRole[] | undefined
}
type Dataset = {
  cache_timeout?: number | undefined
  column_formats?: { [x: string]: unknown } | undefined
  columns?: { [x: string]: unknown }[] | undefined
  database?: { [x: string]: unknown } | undefined
  datasource_name?: string | undefined
  default_endpoint?: string | undefined
  description?: string | undefined
  edit_url?: string | undefined
  editors?: SubjectResponse[] | undefined
  extra?: { [x: string]: unknown } | undefined
  fetch_values_predicate?: string | undefined
  filter_select?: boolean | undefined
  filter_select_enabled?: boolean | undefined
  granularity_sqla?: { [x: string]: unknown }[][] | undefined
  health_check_message?: string | undefined
  id?: number | undefined
  is_sqllab_view?: boolean | undefined
  main_dttm_col?: string | undefined
  metrics?: { [x: string]: unknown }[] | undefined
  name?: string | undefined
  offset?: number | undefined
  order_by_choices?: string[][] | undefined
  params?: { [x: string]: unknown } | undefined
  perm?: string | undefined
  rls_filters?: RlsFilter[] | undefined
  schema?: string | undefined
  select_star?: string | undefined
  sql?: string | undefined
  table_name?: string | undefined
  template_params?: { [x: string]: unknown } | undefined
  time_grain_sqla?: string[][] | undefined
  type?: string | undefined
  uid?: string | undefined
  verbose_map?: { [x: string]: unknown } | undefined
}
type Slice = {
  cache_timeout?: number | undefined
  certification_details?: string | undefined
  certified_by?: string | undefined
  changed_on?: string | undefined
  changed_on_humanized?: string | undefined
  datasource?: string | undefined
  description?: string | undefined
  description_markeddown?: string | undefined
  edit_url?: string | undefined
  editors?: SubjectResponse[] | undefined
  form_data?: { [x: string]: unknown } | undefined
  is_managed_externally?: boolean | undefined
  modified?: string | undefined
  query_context?: { [x: string]: unknown } | undefined
  slice_id?: number | undefined
  slice_name?: string | undefined
  slice_url?: string | undefined
}
type ExploreContextSchema = {
  dataset?: Dataset | undefined
  form_data?: { [x: string]: unknown } | undefined
  message?: string | undefined
  slice?: Slice | undefined
}
type FormDataPostSchema = {
  chart_id?: number | undefined
  datasource_id: number
  datasource_type: 'table' | 'dataset' | 'query' | 'saved_query' | 'view' | 'semantic_view'
  form_data: string
}
type FormDataPutSchema = {
  chart_id?: number | undefined
  datasource_id: number
  datasource_type: 'table' | 'dataset' | 'query' | 'saved_query' | 'view' | 'semantic_view'
  form_data: string
}
type ExplorePermalinkStateSchema = {
  chartState?: ({ [x: string]: unknown } | null) | undefined
  formData: { [x: string]: unknown }
  urlParams?: (({ [x: string]: unknown } | null)[] | null) | undefined
}
type LogRestApiGetListUser = { first_name: string; last_name: string; username: string }
type LogRestApiGetList = {
  action?: (string | null) | undefined
  dashboard_id?: (number | null) | undefined
  dttm?: (string | null) | undefined
  duration_ms?: (number | null) | undefined
  json?: (string | null) | undefined
  referrer?: (string | null) | undefined
  slice_id?: (number | null) | undefined
  user?: LogRestApiGetListUser | undefined
  user_id?: ({ [x: string]: unknown } | null) | undefined
}
type LogRestApiPost = { id?: number | undefined }
type GetRecentActivitySchema = {
  actions?: string[] | undefined
  distinct?: boolean | undefined
  page?: number | undefined
  page_size?: number | undefined
}
type RecentActivity = {
  action?: string | undefined
  item_title?: string | undefined
  item_type?: string | undefined
  item_url?: string | undefined
  time?: number | undefined
  time_delta_humanized?: string | undefined
}
type RecentActivityResponseSchema = { result?: RecentActivity[] | undefined }
type LogRestApiGetUser = { first_name: string; last_name: string; username: string }
type LogRestApiGet = {
  action?: (string | null) | undefined
  dashboard_id?: (number | null) | undefined
  dttm?: (string | null) | undefined
  duration_ms?: (number | null) | undefined
  json?: (string | null) | undefined
  referrer?: (string | null) | undefined
  slice_id?: (number | null) | undefined
  user?: LogRestApiGetUser | undefined
  user_id?: ({ [x: string]: unknown } | null) | undefined
}
type UserGroup = { id?: number | undefined; name?: string | undefined }
type UserResponseSchema = {
  email?: string | undefined
  first_name?: string | undefined
  groups?: UserGroup[] | undefined
  id?: number | undefined
  is_active?: boolean | undefined
  is_anonymous?: boolean | undefined
  last_name?: string | undefined
  login_count?: number | undefined
  username?: string | undefined
}
type CurrentUserPutSchema = {
  current_password?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  password?: string | undefined
}
type Database1 = { database_name?: string | undefined }
type QueryRestApiGetList = {
  changed_on?: string | undefined
  database?: Database1 | undefined
  end_time?: number | undefined
  executed_sql?: string | undefined
  id?: number | undefined
  rows?: number | undefined
  schema?: string | undefined
  sql?: string | undefined
  sql_tables?: { [x: string]: unknown } | undefined
  start_running_time?: number | undefined
  start_time?: number | undefined
  status?: string | undefined
  tab_name?: string | undefined
  tmp_table_name?: string | undefined
  tracking_url?: string | undefined
  user?: User | undefined
}
type StopQuerySchema = { client_id: string }
type QueriesGetUpdatedSinceSchema = { last_updated_ms: number }
type QueryRestApiGetDatabase = { id?: number | undefined }
type QueryRestApiGet = {
  changed_on?: (string | null) | undefined
  client_id: string
  database: QueryRestApiGetDatabase
  end_result_backend_time?: (number | null) | undefined
  end_time?: (number | null) | undefined
  error_message?: (string | null) | undefined
  executed_sql?: (string | null) | undefined
  id?: number | undefined
  limit?: (number | null) | undefined
  progress?: (number | null) | undefined
  results_key?: (string | null) | undefined
  rows?: (number | null) | undefined
  schema?: (string | null) | undefined
  select_as_cta?: (boolean | null) | undefined
  select_as_cta_used?: (boolean | null) | undefined
  select_sql?: (string | null) | undefined
  sql?: (string | null) | undefined
  sql_editor_id?: (string | null) | undefined
  start_running_time?: (number | null) | undefined
  start_time?: (number | null) | undefined
  status?: (string | null) | undefined
  tab_name?: (string | null) | undefined
  tmp_schema_name?: (string | null) | undefined
  tmp_table_name?: (string | null) | undefined
  tracking_url?: { [x: string]: unknown } | undefined
}
type ReportScheduleRestApiGetListUser = { first_name: string; last_name: string }
type ReportScheduleRestApiGetListUser1 = { first_name: string; last_name: string }
type ReportScheduleRestApiGetListSubject = { id?: number | undefined; label: string; type: number }
type ReportScheduleRestApiGetListReportRecipients = { id?: number | undefined; type: string }
type ReportScheduleRestApiGetListUser2 = { id?: number | undefined }
type ReportScheduleRestApiGetList = {
  active?: (boolean | null) | undefined
  changed_by?: ReportScheduleRestApiGetListUser | undefined
  changed_on?: (string | null) | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  chart_id?: ({ [x: string]: unknown } | null) | undefined
  created_by?: ReportScheduleRestApiGetListUser1 | undefined
  created_on?: (string | null) | undefined
  creation_method?: (string | null) | undefined
  crontab: string
  crontab_humanized?: { [x: string]: unknown } | undefined
  dashboard_id?: ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  editors?: ReportScheduleRestApiGetListSubject[] | undefined
  extra?: { [x: string]: unknown } | undefined
  id?: number | undefined
  last_eval_dttm?: (string | null) | undefined
  last_state?: (string | null) | undefined
  name: string
  recipients: ReportScheduleRestApiGetListReportRecipients[]
  report_format?: (string | null) | undefined
  retry_max_attempts?: number | undefined
  retry_notify_owners?: boolean | undefined
  retry_notify_recipients?: boolean | undefined
  retry_on_failure?: boolean | undefined
  run_as?: ReportScheduleRestApiGetListUser2 | undefined
  run_as_type?: (string | null) | undefined
  send_failed_reports?: boolean | undefined
  timezone?: string | undefined
  type: string
}
type ReportRecipientConfigJSON = {
  bccTarget?: string | undefined
  ccTarget?: string | undefined
  target?: string | undefined
}
type ReportRecipient = {
  recipient_config_json?: ReportRecipientConfigJSON | undefined
  type: 'Email' | 'Slack' | 'SlackV2' | 'Webhook'
}
type ValidatorConfigJSON = {
  op?: '<' | '<=' | '>' | '>=' | '==' | '!=' | undefined
  threshold?: number | undefined
}
type ReportScheduleRestApiPost = {
  active?: boolean | undefined
  chart?: (number | null) | undefined
  context_markdown?: (string | null) | undefined
  creation_method?: 'charts' | 'dashboards' | 'alerts_reports' | undefined
  crontab: string
  custom_width?: (number | null) | undefined
  dashboard?: (number | null) | undefined
  database?: number | undefined
  description?: (string | null) | undefined
  editors?: (number | { id: number; type: 'user' | 'role' | 'group' | 'subject' })[] | undefined
  email_subject?: (string | null) | undefined
  extra?: { [x: string]: unknown } | undefined
  force_screenshot?: boolean | undefined
  grace_period?: number | undefined
  include_cta?: (boolean | null) | undefined
  log_retention?: number | undefined
  name: string
  recipients?: ReportRecipient[] | undefined
  report_format?: 'PDF' | 'PNG' | 'CSV' | 'XLSX' | 'TEXT' | 'NONE' | undefined
  retry_max_attempts?: number | undefined
  retry_notify_owners?: boolean | undefined
  retry_notify_recipients?: boolean | undefined
  retry_on_failure?: boolean | undefined
  run_alert_query_as?: (number | null) | undefined
  run_alert_query_as_type?: 'fixed_user' | null | undefined
  run_as?: (number | null) | undefined
  run_as_type?: 'fixed_user' | null | undefined
  send_failed_reports?: boolean | undefined
  sql?: string | undefined
  timezone?:
    | 'Africa/Abidjan'
    | 'Africa/Accra'
    | 'Africa/Addis_Ababa'
    | 'Africa/Algiers'
    | 'Africa/Asmara'
    | 'Africa/Asmera'
    | 'Africa/Bamako'
    | 'Africa/Bangui'
    | 'Africa/Banjul'
    | 'Africa/Bissau'
    | 'Africa/Blantyre'
    | 'Africa/Brazzaville'
    | 'Africa/Bujumbura'
    | 'Africa/Cairo'
    | 'Africa/Casablanca'
    | 'Africa/Ceuta'
    | 'Africa/Conakry'
    | 'Africa/Dakar'
    | 'Africa/Dar_es_Salaam'
    | 'Africa/Djibouti'
    | 'Africa/Douala'
    | 'Africa/El_Aaiun'
    | 'Africa/Freetown'
    | 'Africa/Gaborone'
    | 'Africa/Harare'
    | 'Africa/Johannesburg'
    | 'Africa/Juba'
    | 'Africa/Kampala'
    | 'Africa/Khartoum'
    | 'Africa/Kigali'
    | 'Africa/Kinshasa'
    | 'Africa/Lagos'
    | 'Africa/Libreville'
    | 'Africa/Lome'
    | 'Africa/Luanda'
    | 'Africa/Lubumbashi'
    | 'Africa/Lusaka'
    | 'Africa/Malabo'
    | 'Africa/Maputo'
    | 'Africa/Maseru'
    | 'Africa/Mbabane'
    | 'Africa/Mogadishu'
    | 'Africa/Monrovia'
    | 'Africa/Nairobi'
    | 'Africa/Ndjamena'
    | 'Africa/Niamey'
    | 'Africa/Nouakchott'
    | 'Africa/Ouagadougou'
    | 'Africa/Porto-Novo'
    | 'Africa/Sao_Tome'
    | 'Africa/Timbuktu'
    | 'Africa/Tripoli'
    | 'Africa/Tunis'
    | 'Africa/Windhoek'
    | 'America/Adak'
    | 'America/Anchorage'
    | 'America/Anguilla'
    | 'America/Antigua'
    | 'America/Araguaina'
    | 'America/Argentina/Buenos_Aires'
    | 'America/Argentina/Catamarca'
    | 'America/Argentina/ComodRivadavia'
    | 'America/Argentina/Cordoba'
    | 'America/Argentina/Jujuy'
    | 'America/Argentina/La_Rioja'
    | 'America/Argentina/Mendoza'
    | 'America/Argentina/Rio_Gallegos'
    | 'America/Argentina/Salta'
    | 'America/Argentina/San_Juan'
    | 'America/Argentina/San_Luis'
    | 'America/Argentina/Tucuman'
    | 'America/Argentina/Ushuaia'
    | 'America/Aruba'
    | 'America/Asuncion'
    | 'America/Atikokan'
    | 'America/Atka'
    | 'America/Bahia'
    | 'America/Bahia_Banderas'
    | 'America/Barbados'
    | 'America/Belem'
    | 'America/Belize'
    | 'America/Blanc-Sablon'
    | 'America/Boa_Vista'
    | 'America/Bogota'
    | 'America/Boise'
    | 'America/Buenos_Aires'
    | 'America/Cambridge_Bay'
    | 'America/Campo_Grande'
    | 'America/Cancun'
    | 'America/Caracas'
    | 'America/Catamarca'
    | 'America/Cayenne'
    | 'America/Cayman'
    | 'America/Chicago'
    | 'America/Chihuahua'
    | 'America/Ciudad_Juarez'
    | 'America/Coral_Harbour'
    | 'America/Cordoba'
    | 'America/Costa_Rica'
    | 'America/Coyhaique'
    | 'America/Creston'
    | 'America/Cuiaba'
    | 'America/Curacao'
    | 'America/Danmarkshavn'
    | 'America/Dawson'
    | 'America/Dawson_Creek'
    | 'America/Denver'
    | 'America/Detroit'
    | 'America/Dominica'
    | 'America/Edmonton'
    | 'America/Eirunepe'
    | 'America/El_Salvador'
    | 'America/Ensenada'
    | 'America/Fort_Nelson'
    | 'America/Fort_Wayne'
    | 'America/Fortaleza'
    | 'America/Glace_Bay'
    | 'America/Godthab'
    | 'America/Goose_Bay'
    | 'America/Grand_Turk'
    | 'America/Grenada'
    | 'America/Guadeloupe'
    | 'America/Guatemala'
    | 'America/Guayaquil'
    | 'America/Guyana'
    | 'America/Halifax'
    | 'America/Havana'
    | 'America/Hermosillo'
    | 'America/Indiana/Indianapolis'
    | 'America/Indiana/Knox'
    | 'America/Indiana/Marengo'
    | 'America/Indiana/Petersburg'
    | 'America/Indiana/Tell_City'
    | 'America/Indiana/Vevay'
    | 'America/Indiana/Vincennes'
    | 'America/Indiana/Winamac'
    | 'America/Indianapolis'
    | 'America/Inuvik'
    | 'America/Iqaluit'
    | 'America/Jamaica'
    | 'America/Jujuy'
    | 'America/Juneau'
    | 'America/Kentucky/Louisville'
    | 'America/Kentucky/Monticello'
    | 'America/Knox_IN'
    | 'America/Kralendijk'
    | 'America/La_Paz'
    | 'America/Lima'
    | 'America/Los_Angeles'
    | 'America/Louisville'
    | 'America/Lower_Princes'
    | 'America/Maceio'
    | 'America/Managua'
    | 'America/Manaus'
    | 'America/Marigot'
    | 'America/Martinique'
    | 'America/Matamoros'
    | 'America/Mazatlan'
    | 'America/Mendoza'
    | 'America/Menominee'
    | 'America/Merida'
    | 'America/Metlakatla'
    | 'America/Mexico_City'
    | 'America/Miquelon'
    | 'America/Moncton'
    | 'America/Monterrey'
    | 'America/Montevideo'
    | 'America/Montreal'
    | 'America/Montserrat'
    | 'America/Nassau'
    | 'America/New_York'
    | 'America/Nipigon'
    | 'America/Nome'
    | 'America/Noronha'
    | 'America/North_Dakota/Beulah'
    | 'America/North_Dakota/Center'
    | 'America/North_Dakota/New_Salem'
    | 'America/Nuuk'
    | 'America/Ojinaga'
    | 'America/Panama'
    | 'America/Pangnirtung'
    | 'America/Paramaribo'
    | 'America/Phoenix'
    | 'America/Port-au-Prince'
    | 'America/Port_of_Spain'
    | 'America/Porto_Acre'
    | 'America/Porto_Velho'
    | 'America/Puerto_Rico'
    | 'America/Punta_Arenas'
    | 'America/Rainy_River'
    | 'America/Rankin_Inlet'
    | 'America/Recife'
    | 'America/Regina'
    | 'America/Resolute'
    | 'America/Rio_Branco'
    | 'America/Rosario'
    | 'America/Santa_Isabel'
    | 'America/Santarem'
    | 'America/Santiago'
    | 'America/Santo_Domingo'
    | 'America/Sao_Paulo'
    | 'America/Scoresbysund'
    | 'America/Shiprock'
    | 'America/Sitka'
    | 'America/St_Barthelemy'
    | 'America/St_Johns'
    | 'America/St_Kitts'
    | 'America/St_Lucia'
    | 'America/St_Thomas'
    | 'America/St_Vincent'
    | 'America/Swift_Current'
    | 'America/Tegucigalpa'
    | 'America/Thule'
    | 'America/Thunder_Bay'
    | 'America/Tijuana'
    | 'America/Toronto'
    | 'America/Tortola'
    | 'America/Vancouver'
    | 'America/Virgin'
    | 'America/Whitehorse'
    | 'America/Winnipeg'
    | 'America/Yakutat'
    | 'America/Yellowknife'
    | 'Antarctica/Casey'
    | 'Antarctica/Davis'
    | 'Antarctica/DumontDUrville'
    | 'Antarctica/Macquarie'
    | 'Antarctica/Mawson'
    | 'Antarctica/McMurdo'
    | 'Antarctica/Palmer'
    | 'Antarctica/Rothera'
    | 'Antarctica/South_Pole'
    | 'Antarctica/Syowa'
    | 'Antarctica/Troll'
    | 'Antarctica/Vostok'
    | 'Arctic/Longyearbyen'
    | 'Asia/Aden'
    | 'Asia/Almaty'
    | 'Asia/Amman'
    | 'Asia/Anadyr'
    | 'Asia/Aqtau'
    | 'Asia/Aqtobe'
    | 'Asia/Ashgabat'
    | 'Asia/Ashkhabad'
    | 'Asia/Atyrau'
    | 'Asia/Baghdad'
    | 'Asia/Bahrain'
    | 'Asia/Baku'
    | 'Asia/Bangkok'
    | 'Asia/Barnaul'
    | 'Asia/Beirut'
    | 'Asia/Bishkek'
    | 'Asia/Brunei'
    | 'Asia/Calcutta'
    | 'Asia/Chita'
    | 'Asia/Choibalsan'
    | 'Asia/Chongqing'
    | 'Asia/Chungking'
    | 'Asia/Colombo'
    | 'Asia/Dacca'
    | 'Asia/Damascus'
    | 'Asia/Dhaka'
    | 'Asia/Dili'
    | 'Asia/Dubai'
    | 'Asia/Dushanbe'
    | 'Asia/Famagusta'
    | 'Asia/Gaza'
    | 'Asia/Harbin'
    | 'Asia/Hebron'
    | 'Asia/Ho_Chi_Minh'
    | 'Asia/Hong_Kong'
    | 'Asia/Hovd'
    | 'Asia/Irkutsk'
    | 'Asia/Istanbul'
    | 'Asia/Jakarta'
    | 'Asia/Jayapura'
    | 'Asia/Jerusalem'
    | 'Asia/Kabul'
    | 'Asia/Kamchatka'
    | 'Asia/Karachi'
    | 'Asia/Kashgar'
    | 'Asia/Kathmandu'
    | 'Asia/Katmandu'
    | 'Asia/Khandyga'
    | 'Asia/Kolkata'
    | 'Asia/Krasnoyarsk'
    | 'Asia/Kuala_Lumpur'
    | 'Asia/Kuching'
    | 'Asia/Kuwait'
    | 'Asia/Macao'
    | 'Asia/Macau'
    | 'Asia/Magadan'
    | 'Asia/Makassar'
    | 'Asia/Manila'
    | 'Asia/Muscat'
    | 'Asia/Nicosia'
    | 'Asia/Novokuznetsk'
    | 'Asia/Novosibirsk'
    | 'Asia/Omsk'
    | 'Asia/Oral'
    | 'Asia/Phnom_Penh'
    | 'Asia/Pontianak'
    | 'Asia/Pyongyang'
    | 'Asia/Qatar'
    | 'Asia/Qostanay'
    | 'Asia/Qyzylorda'
    | 'Asia/Rangoon'
    | 'Asia/Riyadh'
    | 'Asia/Saigon'
    | 'Asia/Sakhalin'
    | 'Asia/Samarkand'
    | 'Asia/Seoul'
    | 'Asia/Shanghai'
    | 'Asia/Singapore'
    | 'Asia/Srednekolymsk'
    | 'Asia/Taipei'
    | 'Asia/Tashkent'
    | 'Asia/Tbilisi'
    | 'Asia/Tehran'
    | 'Asia/Tel_Aviv'
    | 'Asia/Thimbu'
    | 'Asia/Thimphu'
    | 'Asia/Tokyo'
    | 'Asia/Tomsk'
    | 'Asia/Ujung_Pandang'
    | 'Asia/Ulaanbaatar'
    | 'Asia/Ulan_Bator'
    | 'Asia/Urumqi'
    | 'Asia/Ust-Nera'
    | 'Asia/Vientiane'
    | 'Asia/Vladivostok'
    | 'Asia/Yakutsk'
    | 'Asia/Yangon'
    | 'Asia/Yekaterinburg'
    | 'Asia/Yerevan'
    | 'Atlantic/Azores'
    | 'Atlantic/Bermuda'
    | 'Atlantic/Canary'
    | 'Atlantic/Cape_Verde'
    | 'Atlantic/Faeroe'
    | 'Atlantic/Faroe'
    | 'Atlantic/Jan_Mayen'
    | 'Atlantic/Madeira'
    | 'Atlantic/Reykjavik'
    | 'Atlantic/South_Georgia'
    | 'Atlantic/St_Helena'
    | 'Atlantic/Stanley'
    | 'Australia/ACT'
    | 'Australia/Adelaide'
    | 'Australia/Brisbane'
    | 'Australia/Broken_Hill'
    | 'Australia/Canberra'
    | 'Australia/Currie'
    | 'Australia/Darwin'
    | 'Australia/Eucla'
    | 'Australia/Hobart'
    | 'Australia/LHI'
    | 'Australia/Lindeman'
    | 'Australia/Lord_Howe'
    | 'Australia/Melbourne'
    | 'Australia/NSW'
    | 'Australia/North'
    | 'Australia/Perth'
    | 'Australia/Queensland'
    | 'Australia/South'
    | 'Australia/Sydney'
    | 'Australia/Tasmania'
    | 'Australia/Victoria'
    | 'Australia/West'
    | 'Australia/Yancowinna'
    | 'Brazil/Acre'
    | 'Brazil/DeNoronha'
    | 'Brazil/East'
    | 'Brazil/West'
    | 'CET'
    | 'CST6CDT'
    | 'Canada/Atlantic'
    | 'Canada/Central'
    | 'Canada/Eastern'
    | 'Canada/Mountain'
    | 'Canada/Newfoundland'
    | 'Canada/Pacific'
    | 'Canada/Saskatchewan'
    | 'Canada/Yukon'
    | 'Chile/Continental'
    | 'Chile/EasterIsland'
    | 'Cuba'
    | 'EET'
    | 'EST'
    | 'EST5EDT'
    | 'Egypt'
    | 'Eire'
    | 'Etc/GMT'
    | 'Etc/GMT+0'
    | 'Etc/GMT+1'
    | 'Etc/GMT+10'
    | 'Etc/GMT+11'
    | 'Etc/GMT+12'
    | 'Etc/GMT+2'
    | 'Etc/GMT+3'
    | 'Etc/GMT+4'
    | 'Etc/GMT+5'
    | 'Etc/GMT+6'
    | 'Etc/GMT+7'
    | 'Etc/GMT+8'
    | 'Etc/GMT+9'
    | 'Etc/GMT-0'
    | 'Etc/GMT-1'
    | 'Etc/GMT-10'
    | 'Etc/GMT-11'
    | 'Etc/GMT-12'
    | 'Etc/GMT-13'
    | 'Etc/GMT-14'
    | 'Etc/GMT-2'
    | 'Etc/GMT-3'
    | 'Etc/GMT-4'
    | 'Etc/GMT-5'
    | 'Etc/GMT-6'
    | 'Etc/GMT-7'
    | 'Etc/GMT-8'
    | 'Etc/GMT-9'
    | 'Etc/GMT0'
    | 'Etc/Greenwich'
    | 'Etc/UCT'
    | 'Etc/UTC'
    | 'Etc/Universal'
    | 'Etc/Zulu'
    | 'Europe/Amsterdam'
    | 'Europe/Andorra'
    | 'Europe/Astrakhan'
    | 'Europe/Athens'
    | 'Europe/Belfast'
    | 'Europe/Belgrade'
    | 'Europe/Berlin'
    | 'Europe/Bratislava'
    | 'Europe/Brussels'
    | 'Europe/Bucharest'
    | 'Europe/Budapest'
    | 'Europe/Busingen'
    | 'Europe/Chisinau'
    | 'Europe/Copenhagen'
    | 'Europe/Dublin'
    | 'Europe/Gibraltar'
    | 'Europe/Guernsey'
    | 'Europe/Helsinki'
    | 'Europe/Isle_of_Man'
    | 'Europe/Istanbul'
    | 'Europe/Jersey'
    | 'Europe/Kaliningrad'
    | 'Europe/Kiev'
    | 'Europe/Kirov'
    | 'Europe/Kyiv'
    | 'Europe/Lisbon'
    | 'Europe/Ljubljana'
    | 'Europe/London'
    | 'Europe/Luxembourg'
    | 'Europe/Madrid'
    | 'Europe/Malta'
    | 'Europe/Mariehamn'
    | 'Europe/Minsk'
    | 'Europe/Monaco'
    | 'Europe/Moscow'
    | 'Europe/Nicosia'
    | 'Europe/Oslo'
    | 'Europe/Paris'
    | 'Europe/Podgorica'
    | 'Europe/Prague'
    | 'Europe/Riga'
    | 'Europe/Rome'
    | 'Europe/Samara'
    | 'Europe/San_Marino'
    | 'Europe/Sarajevo'
    | 'Europe/Saratov'
    | 'Europe/Simferopol'
    | 'Europe/Skopje'
    | 'Europe/Sofia'
    | 'Europe/Stockholm'
    | 'Europe/Tallinn'
    | 'Europe/Tirane'
    | 'Europe/Tiraspol'
    | 'Europe/Ulyanovsk'
    | 'Europe/Uzhgorod'
    | 'Europe/Vaduz'
    | 'Europe/Vatican'
    | 'Europe/Vienna'
    | 'Europe/Vilnius'
    | 'Europe/Volgograd'
    | 'Europe/Warsaw'
    | 'Europe/Zagreb'
    | 'Europe/Zaporozhye'
    | 'Europe/Zurich'
    | 'GB'
    | 'GB-Eire'
    | 'GMT'
    | 'GMT+0'
    | 'GMT-0'
    | 'GMT0'
    | 'Greenwich'
    | 'HST'
    | 'Hongkong'
    | 'Iceland'
    | 'Indian/Antananarivo'
    | 'Indian/Chagos'
    | 'Indian/Christmas'
    | 'Indian/Cocos'
    | 'Indian/Comoro'
    | 'Indian/Kerguelen'
    | 'Indian/Mahe'
    | 'Indian/Maldives'
    | 'Indian/Mauritius'
    | 'Indian/Mayotte'
    | 'Indian/Reunion'
    | 'Iran'
    | 'Israel'
    | 'Jamaica'
    | 'Japan'
    | 'Kwajalein'
    | 'Libya'
    | 'MET'
    | 'MST'
    | 'MST7MDT'
    | 'Mexico/BajaNorte'
    | 'Mexico/BajaSur'
    | 'Mexico/General'
    | 'NZ'
    | 'NZ-CHAT'
    | 'Navajo'
    | 'PRC'
    | 'PST8PDT'
    | 'Pacific/Apia'
    | 'Pacific/Auckland'
    | 'Pacific/Bougainville'
    | 'Pacific/Chatham'
    | 'Pacific/Chuuk'
    | 'Pacific/Easter'
    | 'Pacific/Efate'
    | 'Pacific/Enderbury'
    | 'Pacific/Fakaofo'
    | 'Pacific/Fiji'
    | 'Pacific/Funafuti'
    | 'Pacific/Galapagos'
    | 'Pacific/Gambier'
    | 'Pacific/Guadalcanal'
    | 'Pacific/Guam'
    | 'Pacific/Honolulu'
    | 'Pacific/Johnston'
    | 'Pacific/Kanton'
    | 'Pacific/Kiritimati'
    | 'Pacific/Kosrae'
    | 'Pacific/Kwajalein'
    | 'Pacific/Majuro'
    | 'Pacific/Marquesas'
    | 'Pacific/Midway'
    | 'Pacific/Nauru'
    | 'Pacific/Niue'
    | 'Pacific/Norfolk'
    | 'Pacific/Noumea'
    | 'Pacific/Pago_Pago'
    | 'Pacific/Palau'
    | 'Pacific/Pitcairn'
    | 'Pacific/Pohnpei'
    | 'Pacific/Ponape'
    | 'Pacific/Port_Moresby'
    | 'Pacific/Rarotonga'
    | 'Pacific/Saipan'
    | 'Pacific/Samoa'
    | 'Pacific/Tahiti'
    | 'Pacific/Tarawa'
    | 'Pacific/Tongatapu'
    | 'Pacific/Truk'
    | 'Pacific/Wake'
    | 'Pacific/Wallis'
    | 'Pacific/Yap'
    | 'Poland'
    | 'Portugal'
    | 'ROC'
    | 'ROK'
    | 'Singapore'
    | 'Turkey'
    | 'UCT'
    | 'US/Alaska'
    | 'US/Aleutian'
    | 'US/Arizona'
    | 'US/Central'
    | 'US/East-Indiana'
    | 'US/Eastern'
    | 'US/Hawaii'
    | 'US/Indiana-Starke'
    | 'US/Michigan'
    | 'US/Mountain'
    | 'US/Pacific'
    | 'US/Samoa'
    | 'UTC'
    | 'Universal'
    | 'W-SU'
    | 'WET'
    | 'Zulu'
    | undefined
  type: 'Alert' | 'Report'
  validator_config_json?: ValidatorConfigJSON | undefined
  validator_type?: 'not null' | 'operator' | undefined
  working_timeout?: number | undefined
}
type ReportConfigurationSchema = {
  alert_minimum_interval?: (number | null) | undefined
  alerts_attach_reports?: (boolean | null) | undefined
  allowed_email_domains?: (string[] | null) | undefined
  date_format_in_email_subject?: (boolean | null) | undefined
  limit_recipients_to_users?: (boolean | null) | undefined
  report_minimum_interval?: (number | null) | undefined
}
type ReportConfigImpactedSchema = {
  detail?: string | undefined
  id?: number | undefined
  name?: string | undefined
  reason?: string | undefined
  type?: string | undefined
}
type GetSlackChannelsSchema = {
  exact_match?: boolean | undefined
  force?: boolean | undefined
  page?: number | undefined
  page_size?: number | undefined
  search_string?: string | undefined
  types?: ('public_channel' | 'private_channel')[] | undefined
}
type ReportScheduleRestApiGetSlice = {
  id?: number | undefined
  slice_name?: (string | null) | undefined
  viz_type?: (string | null) | undefined
}
type ReportScheduleRestApiGetDashboard = {
  dashboard_title?: (string | null) | undefined
  id?: number | undefined
}
type ReportScheduleRestApiGetDatabase = { database_name: string; id?: number | undefined }
type ReportScheduleRestApiGetSubject = { id?: number | undefined; label: string; type: number }
type ReportScheduleRestApiGetReportRecipients = {
  id?: number | undefined
  recipient_config_json?: (string | null) | undefined
  type: string
}
type ReportScheduleRestApiGetUser = {
  first_name: string
  id?: number | undefined
  last_name: string
}
type ReportScheduleRestApiGetUser1 = {
  first_name: string
  id?: number | undefined
  last_name: string
}
type ReportScheduleRestApiGet = {
  active?: (boolean | null) | undefined
  chart?: ReportScheduleRestApiGetSlice | undefined
  context_markdown?: (string | null) | undefined
  creation_method?: (string | null) | undefined
  crontab: string
  custom_width?: (number | null) | undefined
  dashboard?: ReportScheduleRestApiGetDashboard | undefined
  database?: ReportScheduleRestApiGetDatabase | undefined
  description?: (string | null) | undefined
  editors?: ReportScheduleRestApiGetSubject[] | undefined
  email_subject?: (string | null) | undefined
  extra?: { [x: string]: unknown } | undefined
  force_screenshot?: (boolean | null) | undefined
  grace_period?: (number | null) | undefined
  id?: number | undefined
  include_cta?: (boolean | null) | undefined
  last_eval_dttm?: (string | null) | undefined
  last_state?: (string | null) | undefined
  last_value?: (number | null) | undefined
  last_value_row_json?: (string | null) | undefined
  log_retention?: (number | null) | undefined
  name: string
  recipients: ReportScheduleRestApiGetReportRecipients[]
  report_format?: (string | null) | undefined
  retry_max_attempts?: number | undefined
  retry_notify_owners?: boolean | undefined
  retry_notify_recipients?: boolean | undefined
  retry_on_failure?: boolean | undefined
  run_alert_query_as?: ReportScheduleRestApiGetUser | undefined
  run_alert_query_as_type?: (string | null) | undefined
  run_as?: ReportScheduleRestApiGetUser1 | undefined
  run_as_type?: (string | null) | undefined
  send_failed_reports?: boolean | undefined
  sql?: (string | null) | undefined
  timezone?: string | undefined
  type: string
  validator_config_json?: (string | null) | undefined
  validator_type?: (string | null) | undefined
  working_timeout?: (number | null) | undefined
}
type ReportScheduleRestApiPut = {
  active?: boolean | undefined
  chart?: (number | null) | undefined
  context_markdown?: (string | null) | undefined
  creation_method?: 'charts' | 'dashboards' | 'alerts_reports' | null | undefined
  crontab?: string | undefined
  custom_width?: (number | null) | undefined
  dashboard?: (number | null) | undefined
  database?: (number | null) | undefined
  description?: (string | null) | undefined
  editors?: (number | { id: number; type: 'user' | 'role' | 'group' | 'subject' })[] | undefined
  email_subject?: (string | null) | undefined
  extra?: { [x: string]: unknown } | undefined
  force_screenshot?: boolean | undefined
  grace_period?: number | undefined
  include_cta?: (boolean | null) | undefined
  log_retention?: number | undefined
  name?: string | undefined
  recipients?: ReportRecipient[] | undefined
  report_format?: 'PDF' | 'PNG' | 'CSV' | 'XLSX' | 'TEXT' | 'NONE' | undefined
  retry_max_attempts?: number | undefined
  retry_notify_owners?: boolean | undefined
  retry_notify_recipients?: boolean | undefined
  retry_on_failure?: boolean | undefined
  run_alert_query_as?: (number | null) | undefined
  run_alert_query_as_type?: 'fixed_user' | null | undefined
  run_as?: (number | null) | undefined
  run_as_type?: 'fixed_user' | null | undefined
  send_failed_reports?: boolean | undefined
  sql?: (string | null) | undefined
  timezone?:
    | 'Africa/Abidjan'
    | 'Africa/Accra'
    | 'Africa/Addis_Ababa'
    | 'Africa/Algiers'
    | 'Africa/Asmara'
    | 'Africa/Asmera'
    | 'Africa/Bamako'
    | 'Africa/Bangui'
    | 'Africa/Banjul'
    | 'Africa/Bissau'
    | 'Africa/Blantyre'
    | 'Africa/Brazzaville'
    | 'Africa/Bujumbura'
    | 'Africa/Cairo'
    | 'Africa/Casablanca'
    | 'Africa/Ceuta'
    | 'Africa/Conakry'
    | 'Africa/Dakar'
    | 'Africa/Dar_es_Salaam'
    | 'Africa/Djibouti'
    | 'Africa/Douala'
    | 'Africa/El_Aaiun'
    | 'Africa/Freetown'
    | 'Africa/Gaborone'
    | 'Africa/Harare'
    | 'Africa/Johannesburg'
    | 'Africa/Juba'
    | 'Africa/Kampala'
    | 'Africa/Khartoum'
    | 'Africa/Kigali'
    | 'Africa/Kinshasa'
    | 'Africa/Lagos'
    | 'Africa/Libreville'
    | 'Africa/Lome'
    | 'Africa/Luanda'
    | 'Africa/Lubumbashi'
    | 'Africa/Lusaka'
    | 'Africa/Malabo'
    | 'Africa/Maputo'
    | 'Africa/Maseru'
    | 'Africa/Mbabane'
    | 'Africa/Mogadishu'
    | 'Africa/Monrovia'
    | 'Africa/Nairobi'
    | 'Africa/Ndjamena'
    | 'Africa/Niamey'
    | 'Africa/Nouakchott'
    | 'Africa/Ouagadougou'
    | 'Africa/Porto-Novo'
    | 'Africa/Sao_Tome'
    | 'Africa/Timbuktu'
    | 'Africa/Tripoli'
    | 'Africa/Tunis'
    | 'Africa/Windhoek'
    | 'America/Adak'
    | 'America/Anchorage'
    | 'America/Anguilla'
    | 'America/Antigua'
    | 'America/Araguaina'
    | 'America/Argentina/Buenos_Aires'
    | 'America/Argentina/Catamarca'
    | 'America/Argentina/ComodRivadavia'
    | 'America/Argentina/Cordoba'
    | 'America/Argentina/Jujuy'
    | 'America/Argentina/La_Rioja'
    | 'America/Argentina/Mendoza'
    | 'America/Argentina/Rio_Gallegos'
    | 'America/Argentina/Salta'
    | 'America/Argentina/San_Juan'
    | 'America/Argentina/San_Luis'
    | 'America/Argentina/Tucuman'
    | 'America/Argentina/Ushuaia'
    | 'America/Aruba'
    | 'America/Asuncion'
    | 'America/Atikokan'
    | 'America/Atka'
    | 'America/Bahia'
    | 'America/Bahia_Banderas'
    | 'America/Barbados'
    | 'America/Belem'
    | 'America/Belize'
    | 'America/Blanc-Sablon'
    | 'America/Boa_Vista'
    | 'America/Bogota'
    | 'America/Boise'
    | 'America/Buenos_Aires'
    | 'America/Cambridge_Bay'
    | 'America/Campo_Grande'
    | 'America/Cancun'
    | 'America/Caracas'
    | 'America/Catamarca'
    | 'America/Cayenne'
    | 'America/Cayman'
    | 'America/Chicago'
    | 'America/Chihuahua'
    | 'America/Ciudad_Juarez'
    | 'America/Coral_Harbour'
    | 'America/Cordoba'
    | 'America/Costa_Rica'
    | 'America/Coyhaique'
    | 'America/Creston'
    | 'America/Cuiaba'
    | 'America/Curacao'
    | 'America/Danmarkshavn'
    | 'America/Dawson'
    | 'America/Dawson_Creek'
    | 'America/Denver'
    | 'America/Detroit'
    | 'America/Dominica'
    | 'America/Edmonton'
    | 'America/Eirunepe'
    | 'America/El_Salvador'
    | 'America/Ensenada'
    | 'America/Fort_Nelson'
    | 'America/Fort_Wayne'
    | 'America/Fortaleza'
    | 'America/Glace_Bay'
    | 'America/Godthab'
    | 'America/Goose_Bay'
    | 'America/Grand_Turk'
    | 'America/Grenada'
    | 'America/Guadeloupe'
    | 'America/Guatemala'
    | 'America/Guayaquil'
    | 'America/Guyana'
    | 'America/Halifax'
    | 'America/Havana'
    | 'America/Hermosillo'
    | 'America/Indiana/Indianapolis'
    | 'America/Indiana/Knox'
    | 'America/Indiana/Marengo'
    | 'America/Indiana/Petersburg'
    | 'America/Indiana/Tell_City'
    | 'America/Indiana/Vevay'
    | 'America/Indiana/Vincennes'
    | 'America/Indiana/Winamac'
    | 'America/Indianapolis'
    | 'America/Inuvik'
    | 'America/Iqaluit'
    | 'America/Jamaica'
    | 'America/Jujuy'
    | 'America/Juneau'
    | 'America/Kentucky/Louisville'
    | 'America/Kentucky/Monticello'
    | 'America/Knox_IN'
    | 'America/Kralendijk'
    | 'America/La_Paz'
    | 'America/Lima'
    | 'America/Los_Angeles'
    | 'America/Louisville'
    | 'America/Lower_Princes'
    | 'America/Maceio'
    | 'America/Managua'
    | 'America/Manaus'
    | 'America/Marigot'
    | 'America/Martinique'
    | 'America/Matamoros'
    | 'America/Mazatlan'
    | 'America/Mendoza'
    | 'America/Menominee'
    | 'America/Merida'
    | 'America/Metlakatla'
    | 'America/Mexico_City'
    | 'America/Miquelon'
    | 'America/Moncton'
    | 'America/Monterrey'
    | 'America/Montevideo'
    | 'America/Montreal'
    | 'America/Montserrat'
    | 'America/Nassau'
    | 'America/New_York'
    | 'America/Nipigon'
    | 'America/Nome'
    | 'America/Noronha'
    | 'America/North_Dakota/Beulah'
    | 'America/North_Dakota/Center'
    | 'America/North_Dakota/New_Salem'
    | 'America/Nuuk'
    | 'America/Ojinaga'
    | 'America/Panama'
    | 'America/Pangnirtung'
    | 'America/Paramaribo'
    | 'America/Phoenix'
    | 'America/Port-au-Prince'
    | 'America/Port_of_Spain'
    | 'America/Porto_Acre'
    | 'America/Porto_Velho'
    | 'America/Puerto_Rico'
    | 'America/Punta_Arenas'
    | 'America/Rainy_River'
    | 'America/Rankin_Inlet'
    | 'America/Recife'
    | 'America/Regina'
    | 'America/Resolute'
    | 'America/Rio_Branco'
    | 'America/Rosario'
    | 'America/Santa_Isabel'
    | 'America/Santarem'
    | 'America/Santiago'
    | 'America/Santo_Domingo'
    | 'America/Sao_Paulo'
    | 'America/Scoresbysund'
    | 'America/Shiprock'
    | 'America/Sitka'
    | 'America/St_Barthelemy'
    | 'America/St_Johns'
    | 'America/St_Kitts'
    | 'America/St_Lucia'
    | 'America/St_Thomas'
    | 'America/St_Vincent'
    | 'America/Swift_Current'
    | 'America/Tegucigalpa'
    | 'America/Thule'
    | 'America/Thunder_Bay'
    | 'America/Tijuana'
    | 'America/Toronto'
    | 'America/Tortola'
    | 'America/Vancouver'
    | 'America/Virgin'
    | 'America/Whitehorse'
    | 'America/Winnipeg'
    | 'America/Yakutat'
    | 'America/Yellowknife'
    | 'Antarctica/Casey'
    | 'Antarctica/Davis'
    | 'Antarctica/DumontDUrville'
    | 'Antarctica/Macquarie'
    | 'Antarctica/Mawson'
    | 'Antarctica/McMurdo'
    | 'Antarctica/Palmer'
    | 'Antarctica/Rothera'
    | 'Antarctica/South_Pole'
    | 'Antarctica/Syowa'
    | 'Antarctica/Troll'
    | 'Antarctica/Vostok'
    | 'Arctic/Longyearbyen'
    | 'Asia/Aden'
    | 'Asia/Almaty'
    | 'Asia/Amman'
    | 'Asia/Anadyr'
    | 'Asia/Aqtau'
    | 'Asia/Aqtobe'
    | 'Asia/Ashgabat'
    | 'Asia/Ashkhabad'
    | 'Asia/Atyrau'
    | 'Asia/Baghdad'
    | 'Asia/Bahrain'
    | 'Asia/Baku'
    | 'Asia/Bangkok'
    | 'Asia/Barnaul'
    | 'Asia/Beirut'
    | 'Asia/Bishkek'
    | 'Asia/Brunei'
    | 'Asia/Calcutta'
    | 'Asia/Chita'
    | 'Asia/Choibalsan'
    | 'Asia/Chongqing'
    | 'Asia/Chungking'
    | 'Asia/Colombo'
    | 'Asia/Dacca'
    | 'Asia/Damascus'
    | 'Asia/Dhaka'
    | 'Asia/Dili'
    | 'Asia/Dubai'
    | 'Asia/Dushanbe'
    | 'Asia/Famagusta'
    | 'Asia/Gaza'
    | 'Asia/Harbin'
    | 'Asia/Hebron'
    | 'Asia/Ho_Chi_Minh'
    | 'Asia/Hong_Kong'
    | 'Asia/Hovd'
    | 'Asia/Irkutsk'
    | 'Asia/Istanbul'
    | 'Asia/Jakarta'
    | 'Asia/Jayapura'
    | 'Asia/Jerusalem'
    | 'Asia/Kabul'
    | 'Asia/Kamchatka'
    | 'Asia/Karachi'
    | 'Asia/Kashgar'
    | 'Asia/Kathmandu'
    | 'Asia/Katmandu'
    | 'Asia/Khandyga'
    | 'Asia/Kolkata'
    | 'Asia/Krasnoyarsk'
    | 'Asia/Kuala_Lumpur'
    | 'Asia/Kuching'
    | 'Asia/Kuwait'
    | 'Asia/Macao'
    | 'Asia/Macau'
    | 'Asia/Magadan'
    | 'Asia/Makassar'
    | 'Asia/Manila'
    | 'Asia/Muscat'
    | 'Asia/Nicosia'
    | 'Asia/Novokuznetsk'
    | 'Asia/Novosibirsk'
    | 'Asia/Omsk'
    | 'Asia/Oral'
    | 'Asia/Phnom_Penh'
    | 'Asia/Pontianak'
    | 'Asia/Pyongyang'
    | 'Asia/Qatar'
    | 'Asia/Qostanay'
    | 'Asia/Qyzylorda'
    | 'Asia/Rangoon'
    | 'Asia/Riyadh'
    | 'Asia/Saigon'
    | 'Asia/Sakhalin'
    | 'Asia/Samarkand'
    | 'Asia/Seoul'
    | 'Asia/Shanghai'
    | 'Asia/Singapore'
    | 'Asia/Srednekolymsk'
    | 'Asia/Taipei'
    | 'Asia/Tashkent'
    | 'Asia/Tbilisi'
    | 'Asia/Tehran'
    | 'Asia/Tel_Aviv'
    | 'Asia/Thimbu'
    | 'Asia/Thimphu'
    | 'Asia/Tokyo'
    | 'Asia/Tomsk'
    | 'Asia/Ujung_Pandang'
    | 'Asia/Ulaanbaatar'
    | 'Asia/Ulan_Bator'
    | 'Asia/Urumqi'
    | 'Asia/Ust-Nera'
    | 'Asia/Vientiane'
    | 'Asia/Vladivostok'
    | 'Asia/Yakutsk'
    | 'Asia/Yangon'
    | 'Asia/Yekaterinburg'
    | 'Asia/Yerevan'
    | 'Atlantic/Azores'
    | 'Atlantic/Bermuda'
    | 'Atlantic/Canary'
    | 'Atlantic/Cape_Verde'
    | 'Atlantic/Faeroe'
    | 'Atlantic/Faroe'
    | 'Atlantic/Jan_Mayen'
    | 'Atlantic/Madeira'
    | 'Atlantic/Reykjavik'
    | 'Atlantic/South_Georgia'
    | 'Atlantic/St_Helena'
    | 'Atlantic/Stanley'
    | 'Australia/ACT'
    | 'Australia/Adelaide'
    | 'Australia/Brisbane'
    | 'Australia/Broken_Hill'
    | 'Australia/Canberra'
    | 'Australia/Currie'
    | 'Australia/Darwin'
    | 'Australia/Eucla'
    | 'Australia/Hobart'
    | 'Australia/LHI'
    | 'Australia/Lindeman'
    | 'Australia/Lord_Howe'
    | 'Australia/Melbourne'
    | 'Australia/NSW'
    | 'Australia/North'
    | 'Australia/Perth'
    | 'Australia/Queensland'
    | 'Australia/South'
    | 'Australia/Sydney'
    | 'Australia/Tasmania'
    | 'Australia/Victoria'
    | 'Australia/West'
    | 'Australia/Yancowinna'
    | 'Brazil/Acre'
    | 'Brazil/DeNoronha'
    | 'Brazil/East'
    | 'Brazil/West'
    | 'CET'
    | 'CST6CDT'
    | 'Canada/Atlantic'
    | 'Canada/Central'
    | 'Canada/Eastern'
    | 'Canada/Mountain'
    | 'Canada/Newfoundland'
    | 'Canada/Pacific'
    | 'Canada/Saskatchewan'
    | 'Canada/Yukon'
    | 'Chile/Continental'
    | 'Chile/EasterIsland'
    | 'Cuba'
    | 'EET'
    | 'EST'
    | 'EST5EDT'
    | 'Egypt'
    | 'Eire'
    | 'Etc/GMT'
    | 'Etc/GMT+0'
    | 'Etc/GMT+1'
    | 'Etc/GMT+10'
    | 'Etc/GMT+11'
    | 'Etc/GMT+12'
    | 'Etc/GMT+2'
    | 'Etc/GMT+3'
    | 'Etc/GMT+4'
    | 'Etc/GMT+5'
    | 'Etc/GMT+6'
    | 'Etc/GMT+7'
    | 'Etc/GMT+8'
    | 'Etc/GMT+9'
    | 'Etc/GMT-0'
    | 'Etc/GMT-1'
    | 'Etc/GMT-10'
    | 'Etc/GMT-11'
    | 'Etc/GMT-12'
    | 'Etc/GMT-13'
    | 'Etc/GMT-14'
    | 'Etc/GMT-2'
    | 'Etc/GMT-3'
    | 'Etc/GMT-4'
    | 'Etc/GMT-5'
    | 'Etc/GMT-6'
    | 'Etc/GMT-7'
    | 'Etc/GMT-8'
    | 'Etc/GMT-9'
    | 'Etc/GMT0'
    | 'Etc/Greenwich'
    | 'Etc/UCT'
    | 'Etc/UTC'
    | 'Etc/Universal'
    | 'Etc/Zulu'
    | 'Europe/Amsterdam'
    | 'Europe/Andorra'
    | 'Europe/Astrakhan'
    | 'Europe/Athens'
    | 'Europe/Belfast'
    | 'Europe/Belgrade'
    | 'Europe/Berlin'
    | 'Europe/Bratislava'
    | 'Europe/Brussels'
    | 'Europe/Bucharest'
    | 'Europe/Budapest'
    | 'Europe/Busingen'
    | 'Europe/Chisinau'
    | 'Europe/Copenhagen'
    | 'Europe/Dublin'
    | 'Europe/Gibraltar'
    | 'Europe/Guernsey'
    | 'Europe/Helsinki'
    | 'Europe/Isle_of_Man'
    | 'Europe/Istanbul'
    | 'Europe/Jersey'
    | 'Europe/Kaliningrad'
    | 'Europe/Kiev'
    | 'Europe/Kirov'
    | 'Europe/Kyiv'
    | 'Europe/Lisbon'
    | 'Europe/Ljubljana'
    | 'Europe/London'
    | 'Europe/Luxembourg'
    | 'Europe/Madrid'
    | 'Europe/Malta'
    | 'Europe/Mariehamn'
    | 'Europe/Minsk'
    | 'Europe/Monaco'
    | 'Europe/Moscow'
    | 'Europe/Nicosia'
    | 'Europe/Oslo'
    | 'Europe/Paris'
    | 'Europe/Podgorica'
    | 'Europe/Prague'
    | 'Europe/Riga'
    | 'Europe/Rome'
    | 'Europe/Samara'
    | 'Europe/San_Marino'
    | 'Europe/Sarajevo'
    | 'Europe/Saratov'
    | 'Europe/Simferopol'
    | 'Europe/Skopje'
    | 'Europe/Sofia'
    | 'Europe/Stockholm'
    | 'Europe/Tallinn'
    | 'Europe/Tirane'
    | 'Europe/Tiraspol'
    | 'Europe/Ulyanovsk'
    | 'Europe/Uzhgorod'
    | 'Europe/Vaduz'
    | 'Europe/Vatican'
    | 'Europe/Vienna'
    | 'Europe/Vilnius'
    | 'Europe/Volgograd'
    | 'Europe/Warsaw'
    | 'Europe/Zagreb'
    | 'Europe/Zaporozhye'
    | 'Europe/Zurich'
    | 'GB'
    | 'GB-Eire'
    | 'GMT'
    | 'GMT+0'
    | 'GMT-0'
    | 'GMT0'
    | 'Greenwich'
    | 'HST'
    | 'Hongkong'
    | 'Iceland'
    | 'Indian/Antananarivo'
    | 'Indian/Chagos'
    | 'Indian/Christmas'
    | 'Indian/Cocos'
    | 'Indian/Comoro'
    | 'Indian/Kerguelen'
    | 'Indian/Mahe'
    | 'Indian/Maldives'
    | 'Indian/Mauritius'
    | 'Indian/Mayotte'
    | 'Indian/Reunion'
    | 'Iran'
    | 'Israel'
    | 'Jamaica'
    | 'Japan'
    | 'Kwajalein'
    | 'Libya'
    | 'MET'
    | 'MST'
    | 'MST7MDT'
    | 'Mexico/BajaNorte'
    | 'Mexico/BajaSur'
    | 'Mexico/General'
    | 'NZ'
    | 'NZ-CHAT'
    | 'Navajo'
    | 'PRC'
    | 'PST8PDT'
    | 'Pacific/Apia'
    | 'Pacific/Auckland'
    | 'Pacific/Bougainville'
    | 'Pacific/Chatham'
    | 'Pacific/Chuuk'
    | 'Pacific/Easter'
    | 'Pacific/Efate'
    | 'Pacific/Enderbury'
    | 'Pacific/Fakaofo'
    | 'Pacific/Fiji'
    | 'Pacific/Funafuti'
    | 'Pacific/Galapagos'
    | 'Pacific/Gambier'
    | 'Pacific/Guadalcanal'
    | 'Pacific/Guam'
    | 'Pacific/Honolulu'
    | 'Pacific/Johnston'
    | 'Pacific/Kanton'
    | 'Pacific/Kiritimati'
    | 'Pacific/Kosrae'
    | 'Pacific/Kwajalein'
    | 'Pacific/Majuro'
    | 'Pacific/Marquesas'
    | 'Pacific/Midway'
    | 'Pacific/Nauru'
    | 'Pacific/Niue'
    | 'Pacific/Norfolk'
    | 'Pacific/Noumea'
    | 'Pacific/Pago_Pago'
    | 'Pacific/Palau'
    | 'Pacific/Pitcairn'
    | 'Pacific/Pohnpei'
    | 'Pacific/Ponape'
    | 'Pacific/Port_Moresby'
    | 'Pacific/Rarotonga'
    | 'Pacific/Saipan'
    | 'Pacific/Samoa'
    | 'Pacific/Tahiti'
    | 'Pacific/Tarawa'
    | 'Pacific/Tongatapu'
    | 'Pacific/Truk'
    | 'Pacific/Wake'
    | 'Pacific/Wallis'
    | 'Pacific/Yap'
    | 'Poland'
    | 'Portugal'
    | 'ROC'
    | 'ROK'
    | 'Singapore'
    | 'Turkey'
    | 'UCT'
    | 'US/Alaska'
    | 'US/Aleutian'
    | 'US/Arizona'
    | 'US/Central'
    | 'US/East-Indiana'
    | 'US/Eastern'
    | 'US/Hawaii'
    | 'US/Indiana-Starke'
    | 'US/Michigan'
    | 'US/Mountain'
    | 'US/Pacific'
    | 'US/Samoa'
    | 'UTC'
    | 'Universal'
    | 'W-SU'
    | 'WET'
    | 'Zulu'
    | undefined
  type?: 'Alert' | 'Report' | undefined
  validator_config_json?: ValidatorConfigJSON | undefined
  validator_type?: 'not null' | 'operator' | null | undefined
  working_timeout?: (number | null) | undefined
}
type ReportExecutionLogRestApiGetList = {
  end_dttm?: (string | null) | undefined
  error_message?: (string | null) | undefined
  id?: number | undefined
  scheduled_dttm: string
  start_dttm?: (string | null) | undefined
  state: string
  uuid?: (string | null) | undefined
  value?: (number | null) | undefined
  value_row_json?: (string | null) | undefined
}
type ReportExecutionLogRestApiGet = {
  end_dttm?: (string | null) | undefined
  error_message?: (string | null) | undefined
  id?: number | undefined
  scheduled_dttm: string
  start_dttm?: (string | null) | undefined
  state: string
  uuid?: (string | null) | undefined
  value?: (number | null) | undefined
  value_row_json?: (string | null) | undefined
}
type Tables = {
  id?: number | undefined
  schema?: string | undefined
  table_name?: string | undefined
}
type RLSRestApiGetList = {
  changed_by?: User | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  clause?: string | undefined
  description?: string | undefined
  filter_type?: 'Regular' | 'Base' | undefined
  group_key?: string | undefined
  id?: number | undefined
  name?: string | undefined
  subjects?: SubjectResponse[] | undefined
  tables?: Tables[] | undefined
}
type RLSRestApiPost = {
  clause: string
  description?: (string | null) | undefined
  filter_type: 'Regular' | 'Base'
  group_key?: (string | null) | undefined
  name: string
  subjects?: number[] | undefined
  tables: number[]
}
type RLSRestApiGet = {
  clause?: string | undefined
  description?: string | undefined
  filter_type?: 'Regular' | 'Base' | undefined
  group_key?: string | undefined
  id?: number | undefined
  name?: string | undefined
  subjects?: SubjectResponse[] | undefined
  tables?: Tables[] | undefined
}
type RLSRestApiPut = {
  clause?: string | undefined
  description?: (string | null) | undefined
  filter_type?: 'Regular' | 'Base' | undefined
  group_key?: (string | null) | undefined
  name?: string | undefined
  subjects?: number[] | undefined
  tables?: number[] | undefined
}
type SavedQueryRestApiGetListUser = {
  first_name: string
  id?: number | undefined
  last_name: string
}
type SavedQueryRestApiGetListUser1 = {
  first_name: string
  id?: number | undefined
  last_name: string
}
type SavedQueryRestApiGetListDatabase = { database_name: string; id?: number | undefined }
type SavedQueryRestApiGetListTag = {
  id?: number | undefined
  name?: (string | null) | undefined
  type?: 1 | 2 | 3 | 4 | undefined
}
type SavedQueryRestApiGetList = {
  catalog?: (string | null) | undefined
  changed_by?: SavedQueryRestApiGetListUser | undefined
  changed_on?: (string | null) | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: SavedQueryRestApiGetListUser1 | undefined
  created_on?: (string | null) | undefined
  database?: SavedQueryRestApiGetListDatabase | undefined
  db_id?: ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  extra?: { [x: string]: unknown } | undefined
  id?: number | undefined
  label?: (string | null) | undefined
  last_run_delta_humanized?: { [x: string]: unknown } | undefined
  rows?: (number | null) | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  sql_tables?: { [x: string]: unknown } | undefined
  tags?: SavedQueryRestApiGetListTag[] | undefined
}
type SavedQueryRestApiPost = {
  catalog?: (string | null) | undefined
  db_id?: ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  extra_json?: (string | null) | undefined
  label?: (string | null) | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  template_parameters?: (string | null) | undefined
}
type SavedQueryRestApiGetUser = { first_name: string; id?: number | undefined; last_name: string }
type SavedQueryRestApiGetUser1 = { first_name: string; id?: number | undefined; last_name: string }
type SavedQueryRestApiGetDatabase = { database_name: string; id?: number | undefined }
type SavedQueryRestApiGet = {
  catalog?: (string | null) | undefined
  changed_by?: SavedQueryRestApiGetUser | undefined
  changed_on?: (string | null) | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: SavedQueryRestApiGetUser1 | undefined
  database?: SavedQueryRestApiGetDatabase | undefined
  description?: (string | null) | undefined
  id?: number | undefined
  label?: (string | null) | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  sql_tables?: { [x: string]: unknown } | undefined
  template_parameters?: (string | null) | undefined
}
type SavedQueryRestApiPut = {
  catalog?: (string | null) | undefined
  db_id?: ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  extra_json?: (string | null) | undefined
  label?: (string | null) | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  template_parameters?: (string | null) | undefined
}
type SupersetGroupApiGetListRole = { id?: number | undefined; name: string }
type SupersetGroupApiGetListUser = { id?: number | undefined; username: string }
type SupersetGroupApiGetList = {
  description?: (string | null) | undefined
  id?: number | undefined
  label?: (string | null) | undefined
  name: string
  roles?: SupersetGroupApiGetListRole[] | undefined
  users?: SupersetGroupApiGetListUser[] | undefined
}
type SupersetGroupApiGetRole = { id?: number | undefined; name: string }
type SupersetGroupApiGetUser = { id?: number | undefined; username: string }
type SupersetGroupApiGet = {
  description?: (string | null) | undefined
  id?: number | undefined
  label?: (string | null) | undefined
  name: string
  roles?: SupersetGroupApiGetRole[] | undefined
  users?: SupersetGroupApiGetUser[] | undefined
}
type Resource = { id: string; type: 'dashboard' }
type RlsRule = { clause: string; dataset?: number | undefined }
type User2 = {
  attributes?: ({ [x: string]: { [x: string]: unknown } | null } | null) | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  username?: string | undefined
}
type GuestTokenCreate = {
  datasets?: (number[] | null) | undefined
  resources: Resource[]
  rls: RlsRule[]
  user?: User2 | undefined
}
type PasswordRecoveryRequestSchema = { email: string }
type PasswordRecoveryResetSchema = { password: string; token: string }
type SupersetPermissionViewMenuApiGetListPermission = { name: string }
type SupersetPermissionViewMenuApiGetListViewMenu = { name: string }
type SupersetPermissionViewMenuApiGetList = {
  id?: number | undefined
  permission: SupersetPermissionViewMenuApiGetListPermission
  view_menu: SupersetPermissionViewMenuApiGetListViewMenu
}
type SupersetPermissionViewMenuApiPost = {
  permission_id?: ({ [x: string]: unknown } | null) | undefined
  view_menu_id?: ({ [x: string]: unknown } | null) | undefined
}
type SupersetPermissionViewMenuApiGetPermission = { name: string }
type SupersetPermissionViewMenuApiGetViewMenu = { name: string }
type SupersetPermissionViewMenuApiGet = {
  id?: number | undefined
  permission: SupersetPermissionViewMenuApiGetPermission
  view_menu: SupersetPermissionViewMenuApiGetViewMenu
}
type SupersetPermissionViewMenuApiPut = {
  permission_id?: ({ [x: string]: unknown } | null) | undefined
  view_menu_id?: ({ [x: string]: unknown } | null) | undefined
}
type PermissionApiGetList = { id?: number | undefined; name: string }
type PermissionApiGet = { id?: number | undefined; name: string }
type ViewMenuApiGetList = { id?: number | undefined; name: string }
type ViewMenuApiPost = { name: string }
type ViewMenuApiGet = { id?: number | undefined; name: string }
type ViewMenuApiPut = { name: string }
type SupersetRoleApiGetList = { id?: number | undefined; name: string }
type SupersetRoleApiPost = { name: string }
type RoleResponseSchema = {
  id?: number | undefined
  name?: string | undefined
  permission_ids?: number[] | undefined
  user_ids?: number[] | undefined
}
type RolesResponseSchema = {
  count?: number | undefined
  ids?: number[] | undefined
  result?: RoleResponseSchema[] | undefined
}
type SupersetRoleApiGet = { id?: number | undefined; name: string }
type SupersetRoleApiPut = { name: string }
type RoleGroupPutSchema = { group_ids: number[] }
type RolePermissionPostSchema = { permission_view_menu_ids: number[] }
type RolePermissionListSchema = {
  id?: number | undefined
  permission_name?: string | undefined
  view_menu_name?: string | undefined
}
type RoleUserPutSchema = { user_ids: number[] }
type SubjectRestApiGetListUser = { first_name: string; last_name: string }
type SubjectRestApiGetList = {
  active?: (boolean | null) | undefined
  changed_by?: SubjectRestApiGetListUser | undefined
  changed_on?: (string | null) | undefined
  created_on?: (string | null) | undefined
  extra_search?: (string | null) | undefined
  group_id?: ({ [x: string]: unknown } | null) | undefined
  id?: number | undefined
  img?: { [x: string]: unknown } | undefined
  label: string
  role_id?: ({ [x: string]: unknown } | null) | undefined
  secondary_label?: (string | null) | undefined
  type: number
  user_id?: ({ [x: string]: unknown } | null) | undefined
  uuid?: (string | null) | undefined
}
type SubjectRestApiGetUser1 = { first_name: string; last_name: string }
type SubjectRestApiGetGroup = {
  description?: (string | null) | undefined
  id?: number | undefined
  label?: (string | null) | undefined
  name: string
}
type SubjectRestApiGetRole = { id?: number | undefined; name: string }
type SubjectRestApiGetUser = {
  active?: (boolean | null) | undefined
  email: string
  first_name: string
  id?: number | undefined
  last_name: string
  username: string
}
type SubjectRestApiGet = {
  active?: (boolean | null) | undefined
  changed_by?: SubjectRestApiGetUser1 | undefined
  changed_on?: (string | null) | undefined
  created_on?: (string | null) | undefined
  extra_search?: (string | null) | undefined
  group?: SubjectRestApiGetGroup | undefined
  group_id?: ({ [x: string]: unknown } | null) | undefined
  id?: number | undefined
  img?: { [x: string]: unknown } | undefined
  label: string
  role?: SubjectRestApiGetRole | undefined
  role_id?: ({ [x: string]: unknown } | null) | undefined
  secondary_label?: (string | null) | undefined
  type: number
  user?: SubjectRestApiGetUser | undefined
  user_id?: ({ [x: string]: unknown } | null) | undefined
  uuid?: (string | null) | undefined
}
type UserRegistrationsRestAPIGetList = {
  email: string
  first_name: string
  id?: number | undefined
  last_name: string
  registration_date?: (string | null) | undefined
  username: string
}
type UserRegistrationsRestAPIGet = { id?: number | undefined }
type SupersetUserApiGetListUser1 = { id?: number | undefined }
type SupersetUserApiGetListUser = { id?: number | undefined }
type SupersetUserApiGetListGroup = {
  description?: (string | null) | undefined
  id?: number | undefined
  label?: (string | null) | undefined
  name: string
}
type SupersetUserApiGetListRole = { id?: number | undefined; name: string }
type SupersetUserApiGetList = {
  active?: (boolean | null) | undefined
  changed_by?: SupersetUserApiGetListUser1 | undefined
  changed_on?: (string | null) | undefined
  created_by?: SupersetUserApiGetListUser | undefined
  created_on?: (string | null) | undefined
  email: string
  fail_login_count?: (number | null) | undefined
  first_name: string
  groups?: SupersetUserApiGetListGroup[] | undefined
  id?: number | undefined
  last_login?: (string | null) | undefined
  last_name: string
  login_count?: (number | null) | undefined
  roles?: SupersetUserApiGetListRole[] | undefined
  username: string
}
type SupersetUserApiGetUser1 = { id?: number | undefined }
type SupersetUserApiGetUser = { id?: number | undefined }
type SupersetUserApiGetGroup = {
  description?: (string | null) | undefined
  id?: number | undefined
  label?: (string | null) | undefined
  name: string
}
type SupersetUserApiGetRole = { id?: number | undefined; name: string }
type SupersetUserApiGet = {
  active?: (boolean | null) | undefined
  changed_by?: SupersetUserApiGetUser1 | undefined
  changed_on?: (string | null) | undefined
  created_by?: SupersetUserApiGetUser | undefined
  created_on?: (string | null) | undefined
  email: string
  fail_login_count?: (number | null) | undefined
  first_name: string
  groups?: SupersetUserApiGetGroup[] | undefined
  id?: number | undefined
  last_login?: (string | null) | undefined
  last_name: string
  login_count?: (number | null) | undefined
  roles?: SupersetUserApiGetRole[] | undefined
  username: string
}
type SemanticViewRestApiPut = {
  cache_timeout?: (number | null) | undefined
  description?: (string | null) | undefined
}
type QueryResult = {
  changed_on?: string | undefined
  ctas?: boolean | undefined
  db?: string | undefined
  dbId?: number | undefined
  endDttm?: number | undefined
  errorMessage?: (string | null) | undefined
  executedSql?: string | undefined
  extra?: { [x: string]: unknown } | undefined
  id?: string | undefined
  limit?: number | undefined
  limitingFactor?: string | undefined
  progress?: number | undefined
  queryId?: number | undefined
  resultsKey?: string | undefined
  rows?: number | undefined
  schema?: string | undefined
  serverId?: number | undefined
  sql?: string | undefined
  sqlEditorId?: string | undefined
  startDttm?: number | undefined
  state?: string | undefined
  tab?: string | undefined
  tempSchema?: (string | null) | undefined
  tempTable?: (string | null) | undefined
  trackingUrl?: (string | null) | undefined
  user?: string | undefined
  userId?: number | undefined
}
type Table = {
  database_id?: number | undefined
  description?: string | undefined
  expanded?: boolean | undefined
  id?: number | undefined
  schema?: string | undefined
  tab_state_id?: number | undefined
  table?: string | undefined
}
type TabState = {
  active?: boolean | undefined
  autorun?: boolean | undefined
  database_id?: number | undefined
  extra_json?: { [x: string]: unknown } | undefined
  hide_left_bar?: boolean | undefined
  id?: string | undefined
  label?: string | undefined
  latest_query?: QueryResult | undefined
  query_limit?: number | undefined
  saved_query?: ({ [x: string]: unknown } | null) | undefined
  schema?: string | undefined
  sql?: string | undefined
  table_schemas?: Table[] | undefined
  user_id?: number | undefined
}
type SQLLabBootstrapDatabase = {
  allow_ctas?: boolean | undefined
  allow_cvas?: boolean | undefined
  allow_dml?: boolean | undefined
  allow_file_upload?: boolean | undefined
  allow_multi_catalog?: boolean | undefined
  allow_run_async?: boolean | undefined
  allows_cost_estimate?: (boolean | null) | undefined
  allows_subquery?: boolean | undefined
  allows_virtual_table_explore?: boolean | undefined
  backend?: string | undefined
  database_name?: string | undefined
  disable_data_preview?: boolean | undefined
  disable_drill_to_detail?: boolean | undefined
  engine_information?:
    | {
        disable_ssh_tunneling?: boolean | undefined
        encrypted_extra_expirations?: { [x: string]: EncryptedExtraExpiration } | undefined
        encrypted_extra_sensitive_fields?: { [x: string]: string } | undefined
        identifier_quote?:
          | {
              end?: string | undefined
              escape_by_doubling?: boolean | undefined
              start?: string | undefined
            }
          | undefined
        oauth2_enabled?: boolean | undefined
        supports_dynamic_catalog?: boolean | undefined
        supports_file_upload?: boolean | undefined
        supports_oauth2?: boolean | undefined
        supports_offset?: boolean | undefined
        supports_schemas?: boolean | undefined
      }
    | undefined
  expose_in_sqllab?: boolean | undefined
  force_ctas_schema?: (string | null) | undefined
  id?: number | undefined
}
type SQLLabBootstrapSchema = {
  active_tab?: TabState | undefined
  databases?: { [x: string]: SQLLabBootstrapDatabase } | undefined
  queries?: { [x: string]: QueryResult } | undefined
  tab_state_ids?: string[] | undefined
}
type EstimateQueryCostSchema = {
  catalog?: (string | null) | undefined
  database_id: number
  schema?: (string | null) | undefined
  sql: string
  template_params?: { [x: string]: unknown } | undefined
}
type ExecutePayloadSchema = {
  catalog?: (string | null) | undefined
  client_id?: (string | null) | undefined
  ctas_method?: (string | null) | undefined
  database_id: number
  expand_data?: (boolean | null) | undefined
  queryLimit?: (number | null) | undefined
  runAsync?: (boolean | null) | undefined
  schema?: (string | null) | undefined
  select_as_cta?: (boolean | null) | undefined
  sql: string
  sql_editor_id?: (string | null) | undefined
  tab?: (string | null) | undefined
  templateParams?: (string | null) | undefined
  tmp_table_name?: (string | null) | undefined
}
type QueryExecutionResponseSchema = {
  columns?: { [x: string]: unknown }[] | undefined
  data?: { [x: string]: unknown }[] | undefined
  expanded_columns?: { [x: string]: unknown }[] | undefined
  query?: QueryResult | undefined
  query_id?: number | undefined
  selected_columns?: { [x: string]: unknown }[] | undefined
  status?: string | undefined
}
type FormatQueryPayloadSchema = {
  database_id?: (number | null) | undefined
  engine?: (string | null) | undefined
  sql: string
  template_params?: (string | null) | undefined
}
type SqlLabGetResultsSchema = { key: string }
type DeleteTagsSchema = string[]
type TagRestApiGetListUser = { first_name: string; last_name: string }
type TagRestApiGetListUser1 = { first_name: string; last_name: string }
type TagRestApiGetList = {
  changed_by?: TagRestApiGetListUser | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: TagRestApiGetListUser1 | undefined
  created_on_delta_humanized?: { [x: string]: unknown } | undefined
  description?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  type?: 1 | 2 | 3 | 4 | undefined
}
type TagRestApiPost = {
  description?: (string | null) | undefined
  name?: string | undefined
  objects_to_tag?: { [x: string]: unknown }[] | undefined
}
type TagObject = {
  description?: (string | null) | undefined
  name?: string | undefined
  objects_to_tag?: { [x: string]: unknown }[] | undefined
}
type TagPostBulkSchema = { tags?: TagObject[] | undefined }
type TagPostBulkResponseObject = {
  objects_skipped?: { [x: string]: unknown }[] | undefined
  objects_tagged?: { [x: string]: unknown }[] | undefined
}
type TagPostBulkResponseSchema = { result?: TagPostBulkResponseObject | undefined }
type TagGetResponseSchema = {
  id?: number | undefined
  name?: string | undefined
  type?: string | undefined
}
type TaggedObjectEntityResponseSchema = {
  changed_on?: string | undefined
  created_by?: User | undefined
  creator?: string | undefined
  editors?: SubjectResponse[] | undefined
  id?: number | undefined
  name?: string | undefined
  tags?: TagGetResponseSchema[] | undefined
  type?: string | undefined
  url?: string | undefined
}
type TagRestApiGetUser = { first_name: string; last_name: string }
type TagRestApiGetUser1 = { first_name: string; last_name: string }
type TagRestApiGet = {
  changed_by?: TagRestApiGetUser | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: TagRestApiGetUser1 | undefined
  created_on_delta_humanized?: { [x: string]: unknown } | undefined
  description?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  type?: 1 | 2 | 3 | 4 | undefined
}
type TagRestApiPut = {
  description?: (string | null) | undefined
  name?: string | undefined
  objects_to_tag?: { [x: string]: unknown }[] | undefined
}
type ThemeRestApiGetListUser = { first_name: string; id?: number | undefined; last_name: string }
type ThemeRestApiGetListUser1 = { first_name: string; id?: number | undefined; last_name: string }
type ThemeRestApiGetListSubject = { id?: number | undefined; label: string; type: number }
type ThemeRestApiGetList = {
  changed_by?: ThemeRestApiGetListUser | undefined
  changed_by_name?: { [x: string]: unknown } | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: ThemeRestApiGetListUser1 | undefined
  created_on?: (string | null) | undefined
  editors?: ThemeRestApiGetListSubject[] | undefined
  id?: number | undefined
  is_system?: boolean | undefined
  is_system_dark?: boolean | undefined
  is_system_default?: boolean | undefined
  json_data?: (string | null) | undefined
  theme_name?: (string | null) | undefined
  uuid?: (string | null) | undefined
}
type ThemeRestApiPost = { editors?: number[] | undefined; json_data: string; theme_name: string }
type ThemeRestApiGetUser = { first_name: string; id?: number | undefined; last_name: string }
type ThemeRestApiGetUser1 = { first_name: string; id?: number | undefined; last_name: string }
type ThemeRestApiGetSubject = { id?: number | undefined; label: string; type: number }
type ThemeRestApiGet = {
  changed_by?: ThemeRestApiGetUser | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: ThemeRestApiGetUser1 | undefined
  editors?: ThemeRestApiGetSubject[] | undefined
  id?: number | undefined
  is_system?: boolean | undefined
  is_system_dark?: boolean | undefined
  is_system_default?: boolean | undefined
  json_data?: (string | null) | undefined
  theme_name?: (string | null) | undefined
  uuid?: (string | null) | undefined
}
type ThemeRestApiPut = { editors?: number[] | undefined; json_data: string; theme_name: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/advanced_data_type/convert': {
      $get:
        | {
            input: { query: { q?: AdvancedDataTypeConvertSchema | undefined } }
            output: AdvancedDataTypeSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: AdvancedDataTypeConvertSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: AdvancedDataTypeConvertSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: AdvancedDataTypeConvertSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: AdvancedDataTypeConvertSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: AdvancedDataTypeConvertSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/advanced_data_type/types': {
      $get:
        | {
            input: {}
            output: { result?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 404 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v1/annotation_layer/': {
      $delete:
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: AnnotationLayerRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: AnnotationLayerRestApiPost }
            output: { id?: number | undefined; result?: AnnotationLayerRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AnnotationLayerRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AnnotationLayerRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AnnotationLayerRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: AnnotationLayerRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/annotation_layer/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/annotation_layer/related/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: RelatedResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/annotation_layer/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: AnnotationLayerRestApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: AnnotationLayerRestApiPut }
            output: { id?: number | undefined; result?: AnnotationLayerRestApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: AnnotationLayerRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: AnnotationLayerRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: AnnotationLayerRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: AnnotationLayerRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/annotation_layer/:pk/annotation/': {
      $delete:
        | {
            input: { param: { pk: number } } & { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              ids?: string[] | undefined
              result?: AnnotationRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { pk: number } } & { json: AnnotationRestApiPost }
            output: { id?: number | undefined; result?: AnnotationRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { pk: number } } & { json: AnnotationRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: AnnotationRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: AnnotationRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: AnnotationRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/annotation_layer/:pk/annotation/:annotation_id': {
      $delete:
        | {
            input: { param: { pk: number; annotation_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; annotation_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; annotation_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; annotation_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number; annotation_id: number } } & {
              query: { q?: GetItemSchema | undefined }
            }
            output: { id?: string | undefined; result?: AnnotationRestApiGet | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; annotation_id: number } } & {
              query: { q?: GetItemSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; annotation_id: number } } & {
              query: { q?: GetItemSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; annotation_id: number } } & {
              query: { q?: GetItemSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; annotation_id: number } } & {
              query: { q?: GetItemSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; annotation_id: number } } & {
              query: { q?: GetItemSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number; annotation_id: number } } & { json: AnnotationRestApiPut }
            output: { id?: number | undefined; result?: AnnotationRestApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; annotation_id: number } } & { json: AnnotationRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; annotation_id: number } } & { json: AnnotationRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; annotation_id: number } } & { json: AnnotationRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; annotation_id: number } } & { json: AnnotationRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/assets/export/': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 404 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v1/assets/import/': {
      $post:
        | {
            input: {
              form: {
                bundle?: File | undefined
                encrypted_extra_secrets?: string | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                sparse?: boolean | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                bundle?: File | undefined
                encrypted_extra_secrets?: string | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                sparse?: boolean | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                bundle?: File | undefined
                encrypted_extra_secrets?: string | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                sparse?: boolean | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                bundle?: File | undefined
                encrypted_extra_secrets?: string | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                sparse?: boolean | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                bundle?: File | undefined
                encrypted_extra_secrets?: string | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                sparse?: boolean | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/available_domains/': {
      $get:
        | {
            input: {}
            output: { result?: AvailableDomainsSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/api/v1/cachekey/invalidate': {
      $post:
        | {
            input: { json: CacheInvalidationRequestSchema }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { json: CacheInvalidationRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CacheInvalidationRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/': {
      $delete:
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { q?: ChartGetListSchema | undefined } }
            output: {
              count?: number | undefined
              ids?: number[] | undefined
              result?: ChartRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: ChartGetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: ChartGetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: ChartGetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: ChartGetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ChartRestApiPost }
            output: { id?: number | undefined; result?: ChartRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ChartRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChartRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ChartRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ChartRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ChartRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/data': {
      $post:
        | {
            input: { json: ChartDataQueryContextSchema }
            output: ChartDataResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChartDataQueryContextSchema }
            output: ChartDataAsyncResponseSchema
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ChartDataQueryContextSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChartDataQueryContextSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ChartDataQueryContextSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ChartDataQueryContextSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/data/stop': {
      $post:
        | {
            input: { json: ChartDataStopSchema }
            output: { result?: { stopped?: boolean | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChartDataStopSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChartDataStopSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ChartDataStopSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ChartDataStopSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/export/': {
      $get:
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/favorite_status/': {
      $get:
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: GetFavStarIdsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/import/': {
      $post:
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/related/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: RelatedResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/warm_up_cache': {
      $put:
        | {
            input: { json: ChartCacheWarmUpRequestSchema }
            output: ChartCacheWarmUpResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChartCacheWarmUpRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChartCacheWarmUpRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ChartCacheWarmUpRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/:id_or_uuid': {
      $get:
        | {
            input: { param: { id_or_uuid: string } }
            output: { result?: ChartGetResponseSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_uuid: string } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { id_or_uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id_or_uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/chart/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: ChartRestApiPut }
            output: {
              id?: number | undefined
              new_transaction_id?: (number | null) | undefined
              new_version?: (number | null) | undefined
              new_version_uuid?: (string | null) | undefined
              old_transaction_id?: (number | null) | undefined
              old_version?: (number | null) | undefined
              old_version_uuid?: (string | null) | undefined
              result?: ChartRestApiPut | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: ChartRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: ChartRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: ChartRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { json: ChartRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: ChartRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: ChartRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/:pk/cache_screenshot/': {
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: ScreenshotQuerySchema | undefined } }
            output: ChartCacheScreenshotResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: ScreenshotQuerySchema | undefined } }
            output: ChartCacheScreenshotResponseSchema
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { pk: number } } & { query: { q?: ScreenshotQuerySchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: ScreenshotQuerySchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: ScreenshotQuerySchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: ScreenshotQuerySchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/:pk/data/': {
      $get:
        | {
            input: { param: { pk: number } } & {
              query: {
                format?: string | undefined
                type?: string | undefined
                force?: boolean | undefined
                filters_dashboard_id?: number | undefined
              }
            }
            output: ChartDataResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & {
              query: {
                format?: string | undefined
                type?: string | undefined
                force?: boolean | undefined
                filters_dashboard_id?: number | undefined
              }
            }
            output: ChartDataAsyncResponseSchema
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { pk: number } } & {
              query: {
                format?: string | undefined
                type?: string | undefined
                force?: boolean | undefined
                filters_dashboard_id?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & {
              query: {
                format?: string | undefined
                type?: string | undefined
                force?: boolean | undefined
                filters_dashboard_id?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & {
              query: {
                format?: string | undefined
                type?: string | undefined
                force?: boolean | undefined
                filters_dashboard_id?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & {
              query: {
                format?: string | undefined
                type?: string | undefined
                force?: boolean | undefined
                filters_dashboard_id?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & {
              query: {
                format?: string | undefined
                type?: string | undefined
                force?: boolean | undefined
                filters_dashboard_id?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/:pk/deck_layers/': {
      $get:
        | {
            input: { param: { pk: number } }
            output: {
              result?:
                | {
                    datasource_id?: number | undefined
                    datasource_type?: string | undefined
                    params?: string | undefined
                    slice_id?: number | undefined
                    viz_type?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/:pk/favorites/': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { result?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { pk: number } }
            output: { result?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/:pk/screenshot/:digest/': {
      $get:
        | {
            input: { param: { pk: number; digest: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/:pk/thumbnail/:digest/': {
      $get:
        | {
            input: { param: { pk: number; digest: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/:uuid_str/activity/': {
      $get:
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: ActivityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/chart/:uuid_str/versions/': {
      $get:
        | {
            input: { param: { uuid_str: string } }
            output: { count?: number | undefined; result?: VersionListItemSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/chart/:uuid_str/versions/:version_uuid_str/': {
      $get:
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { result?: { _version?: VersionListItemSchema | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/chart/:uuid_str/versions/:version_uuid_str/restore': {
      $post:
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/chart/:uuid/purge': {
      $post:
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/chart/:uuid/restore': {
      $post:
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/css_template/': {
      $delete:
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: CssTemplateRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CssTemplateRestApiPost }
            output: { id?: string | undefined; result?: CssTemplateRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CssTemplateRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CssTemplateRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CssTemplateRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CssTemplateRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/css_template/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/css_template/related/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: RelatedResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/css_template/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: CssTemplateRestApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: CssTemplateRestApiPut }
            output: { result?: CssTemplateRestApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: CssTemplateRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: CssTemplateRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: CssTemplateRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: CssTemplateRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: CssTemplateRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/': {
      $delete:
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              ids?: number[] | undefined
              result?: DashboardRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: DashboardRestApiPost }
            output: { id?: number | undefined; result?: DashboardRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DashboardRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DashboardRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DashboardRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DashboardRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/export/': {
      $get:
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/export_xlsx/download/:job_id/': {
      $get:
        | { input: { param: { job_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { job_id: string } }; output: {}; outputFormat: string; status: 410 }
        | { input: { param: { job_id: string } }; output: {}; outputFormat: string; status: 501 }
    }
  } & {
    '/api/v1/dashboard/export_xlsx/status/:job_id/': {
      $get:
        | { input: { param: { job_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { job_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/dashboard/favorite_status/': {
      $get:
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: GetFavStarIdsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/import/': {
      $post:
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                overwrite_all?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                overwrite_all?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                overwrite_all?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                overwrite_all?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                overwrite_all?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/permalink/:key': {
      $get:
        | {
            input: { param: { key: string } }
            output: { state?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/related/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: RelatedResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:id_or_slug': {
      $get:
        | {
            input: { param: { id_or_slug: string } } & { query: { q?: GetItemSchema | undefined } }
            output: { result?: DashboardGetResponseSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_slug: string } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_slug: string } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id_or_slug: string } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id_or_slug: string } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/dashboard/:id_or_slug/charts': {
      $get:
        | {
            input: { param: { id_or_slug: string } }
            output: { result?: ChartEntityResponseSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/dashboard/:id_or_slug/copy/': {
      $post:
        | {
            input: { param: { id_or_slug: string } } & { json: DashboardCopySchema }
            output: { id?: number | undefined; last_modified_time?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_slug: string } } & { json: DashboardCopySchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_slug: string } } & { json: DashboardCopySchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id_or_slug: string } } & { json: DashboardCopySchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id_or_slug: string } } & { json: DashboardCopySchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id_or_slug: string } } & { json: DashboardCopySchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id_or_slug: string } } & { json: DashboardCopySchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:id_or_slug/datasets': {
      $get:
        | {
            input: { param: { id_or_slug: string } }
            output: { result?: DashboardDatasetSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/dashboard/:id_or_slug/embedded': {
      $delete:
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { id_or_slug: string } }
            output: { result?: EmbeddedDashboardResponseSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { id_or_slug: string } } & { json: EmbeddedDashboardConfig }
            output: { result?: EmbeddedDashboardResponseSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_slug: string } } & { json: EmbeddedDashboardConfig }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id_or_slug: string } } & { json: EmbeddedDashboardConfig }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id_or_slug: string } } & { json: EmbeddedDashboardConfig }
            output: { result?: EmbeddedDashboardResponseSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_slug: string } } & { json: EmbeddedDashboardConfig }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id_or_slug: string } } & { json: EmbeddedDashboardConfig }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:id_or_slug/tabs': {
      $get:
        | {
            input: { param: { id_or_slug: string } }
            output: { result?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id_or_slug: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/dashboard/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: DashboardRestApiPut }
            output: {
              id?: number | undefined
              last_modified_time?: number | undefined
              new_transaction_id?: (number | null) | undefined
              new_version?: (number | null) | undefined
              new_version_uuid?: (string | null) | undefined
              old_transaction_id?: (number | null) | undefined
              old_version?: (number | null) | undefined
              old_version_uuid?: (string | null) | undefined
              result?: DashboardRestApiPut | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: DashboardRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: DashboardRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: DashboardRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { json: DashboardRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: DashboardRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: DashboardRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:pk/cache_dashboard_screenshot/': {
      $post:
        | {
            input: { param: { pk: number } } & { json: DashboardScreenshotPostSchema }
            output: DashboardCacheScreenshotResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: DashboardScreenshotPostSchema }
            output: DashboardCacheScreenshotResponseSchema
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { pk: number } } & { json: DashboardScreenshotPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: DashboardScreenshotPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: DashboardScreenshotPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: DashboardScreenshotPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { pk: number } } & { json: DashboardScreenshotPostSchema }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/api/v1/dashboard/:pk/chart_customizations': {
      $put:
        | {
            input: { param: { pk: number } } & {
              json: DashboardChartCustomizationsConfigUpdateSchema
            }
            output: { result?: unknown[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & {
              json: DashboardChartCustomizationsConfigUpdateSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & {
              json: DashboardChartCustomizationsConfigUpdateSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & {
              json: DashboardChartCustomizationsConfigUpdateSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & {
              json: DashboardChartCustomizationsConfigUpdateSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & {
              json: DashboardChartCustomizationsConfigUpdateSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & {
              json: DashboardChartCustomizationsConfigUpdateSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:pk/colors': {
      $put:
        | {
            input: { param: { pk: number } } & { query: { mark_updated?: boolean | undefined } } & {
              json: DashboardColorsConfigUpdateSchema
            }
            output: { result?: unknown[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { mark_updated?: boolean | undefined } } & {
              json: DashboardColorsConfigUpdateSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { mark_updated?: boolean | undefined } } & {
              json: DashboardColorsConfigUpdateSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { mark_updated?: boolean | undefined } } & {
              json: DashboardColorsConfigUpdateSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { query: { mark_updated?: boolean | undefined } } & {
              json: DashboardColorsConfigUpdateSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { mark_updated?: boolean | undefined } } & {
              json: DashboardColorsConfigUpdateSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { mark_updated?: boolean | undefined } } & {
              json: DashboardColorsConfigUpdateSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:pk/export_as_example/': {
      $get:
        | {
            input: { param: { pk: number } } & {
              query: { export_data?: boolean | undefined; sample_rows?: number | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { pk: number } } & {
              query: { export_data?: boolean | undefined; sample_rows?: number | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & {
              query: { export_data?: boolean | undefined; sample_rows?: number | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & {
              query: { export_data?: boolean | undefined; sample_rows?: number | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & {
              query: { export_data?: boolean | undefined; sample_rows?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { pk: number } } & {
              query: { export_data?: boolean | undefined; sample_rows?: number | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:pk/export_xlsx/': {
      $post:
        | {
            input: { param: { pk: number } } & { json: DashboardExportXlsxPostSchema }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: DashboardExportXlsxPostSchema }
            output: DashboardExportXlsxResponseSchema
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { pk: number } } & { json: DashboardExportXlsxPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: DashboardExportXlsxPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: DashboardExportXlsxPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { json: DashboardExportXlsxPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: DashboardExportXlsxPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:pk/favorites/': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { result?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { pk: number } }
            output: { result?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:pk/filter_state': {
      $post:
        | {
            input: { param: { pk: number } } & { query: { tab_id?: number | undefined } } & {
              json: TemporaryCachePostSchema
            }
            output: { key?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { pk: number } } & { query: { tab_id?: number | undefined } } & {
              json: TemporaryCachePostSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { tab_id?: number | undefined } } & {
              json: TemporaryCachePostSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { tab_id?: number | undefined } } & {
              json: TemporaryCachePostSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { tab_id?: number | undefined } } & {
              json: TemporaryCachePostSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:pk/filter_state/:key': {
      $delete:
        | {
            input: { param: { pk: number; key: string } } & {
              query: { tab_id?: number | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; key: string } } & {
              query: { tab_id?: number | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; key: string } } & {
              query: { tab_id?: number | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; key: string } } & {
              query: { tab_id?: number | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; key: string } } & {
              query: { tab_id?: number | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; key: string } } & {
              query: { tab_id?: number | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number; key: string } }
            output: { names?: { [x: string]: unknown } | undefined; value?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number; key: string } } & {
              query: { tab_id?: number | undefined }
            } & { json: TemporaryCachePutSchema }
            output: { key?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; key: string } } & {
              query: { tab_id?: number | undefined }
            } & { json: TemporaryCachePutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; key: string } } & {
              query: { tab_id?: number | undefined }
            } & { json: TemporaryCachePutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; key: string } } & {
              query: { tab_id?: number | undefined }
            } & { json: TemporaryCachePutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; key: string } } & {
              query: { tab_id?: number | undefined }
            } & { json: TemporaryCachePutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; key: string } } & {
              query: { tab_id?: number | undefined }
            } & { json: TemporaryCachePutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:pk/filters': {
      $put:
        | {
            input: { param: { pk: number } } & { json: DashboardNativeFiltersConfigUpdateSchema }
            output: { result?: unknown[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: DashboardNativeFiltersConfigUpdateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: DashboardNativeFiltersConfigUpdateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: DashboardNativeFiltersConfigUpdateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { json: DashboardNativeFiltersConfigUpdateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: DashboardNativeFiltersConfigUpdateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: DashboardNativeFiltersConfigUpdateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:pk/permalink': {
      $post:
        | {
            input: { param: { pk: string } } & { json: DashboardPermalinkStateSchema }
            output: { key?: string | undefined; url?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { pk: string } } & { json: DashboardPermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: string } } & { json: DashboardPermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: string } } & { json: DashboardPermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: string } } & { json: DashboardPermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:pk/screenshot/:digest/': {
      $get:
        | {
            input: { param: { pk: number; digest: string } } & {
              query: { download_format?: 'png' | 'pdf' | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { pk: number; digest: string } } & {
              query: { download_format?: 'png' | 'pdf' | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; digest: string } } & {
              query: { download_format?: 'png' | 'pdf' | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; digest: string } } & {
              query: { download_format?: 'png' | 'pdf' | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; digest: string } } & {
              query: { download_format?: 'png' | 'pdf' | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:pk/thumbnail/:digest/': {
      $get:
        | {
            input: { param: { pk: number; digest: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; digest: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:uuid_str/activity/': {
      $get:
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: ActivityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/dashboard/:uuid_str/versions/': {
      $get:
        | {
            input: { param: { uuid_str: string } }
            output: { count?: number | undefined; result?: VersionListItemSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/dashboard/:uuid_str/versions/:version_uuid_str/': {
      $get:
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } } & {
              query: { include_restore_impact?: boolean | undefined }
            }
            output: {
              result?:
                | {
                    _restore_impact?: { removed_chart_count?: number | undefined } | undefined
                    _version?: VersionListItemSchema | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } } & {
              query: { include_restore_impact?: boolean | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } } & {
              query: { include_restore_impact?: boolean | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } } & {
              query: { include_restore_impact?: boolean | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } } & {
              query: { include_restore_impact?: boolean | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/dashboard/:uuid_str/versions/:version_uuid_str/restore': {
      $post:
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/dashboard/:uuid/purge': {
      $post:
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dashboard/:uuid/restore': {
      $post:
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: DatabaseRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: DatabaseRestApiPost }
            output: { id?: number | undefined; result?: DatabaseRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DatabaseRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DatabaseRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DatabaseRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DatabaseRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/available/': {
      $get:
        | {
            input: {}
            output: {
              available_drivers?: string[] | undefined
              default_driver?: string | undefined
              engine?: string | undefined
              engine_information?:
                | {
                    disable_ssh_tunneling?: boolean | undefined
                    encrypted_extra_sensitive_fields?: { [x: string]: string } | undefined
                    supports_file_upload?: boolean | undefined
                  }
                | undefined
              name?: string | undefined
              parameters?: { [x: string]: unknown } | undefined
              preferred?: boolean | undefined
              sqlalchemy_uri_placeholder?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 400 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v1/database/export/': {
      $get:
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/import/': {
      $post:
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/oauth2/': {
      $get:
        | {
            input: {
              query: {
                state?: string | undefined
                code?: string | undefined
                scope?: string | undefined
                error?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                state?: string | undefined
                code?: string | undefined
                scope?: string | undefined
                error?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                state?: string | undefined
                code?: string | undefined
                scope?: string | undefined
                error?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                state?: string | undefined
                code?: string | undefined
                scope?: string | undefined
                error?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/related/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: RelatedResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/test_connection/': {
      $post:
        | {
            input: { json: DatabaseTestConnectionSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DatabaseTestConnectionSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DatabaseTestConnectionSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DatabaseTestConnectionSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/upload_metadata/': {
      $post:
        | {
            input: { form: UploadFileMetadataPostSchema }
            output: { result?: UploadFileMetadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: UploadFileMetadataPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: UploadFileMetadataPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: UploadFileMetadataPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { form: UploadFileMetadataPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { form: UploadFileMetadataPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/validate_parameters/': {
      $post:
        | {
            input: { json: DatabaseValidateParametersSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DatabaseValidateParametersSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DatabaseValidateParametersSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DatabaseValidateParametersSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: DatabaseRestApiPut }
            output: { id?: number | undefined; result?: DatabaseRestApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: DatabaseRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: DatabaseRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: DatabaseRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { json: DatabaseRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: DatabaseRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: DatabaseRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/catalogs/': {
      $get:
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseCatalogsQuerySchema | undefined }
            }
            output: CatalogsResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseCatalogsQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseCatalogsQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseCatalogsQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseCatalogsQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/connection': {
      $get:
        | {
            input: { param: { pk: number } }
            output: DatabaseConnectionSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/encrypted_extra_hints/': {
      $get:
        | {
            input: { param: { pk: number } }
            output: EncryptedExtraHintsResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/function_names/': {
      $get:
        | {
            input: { param: { pk: number } }
            output: DatabaseFunctionNamesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/oauth2_tokens/': {
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              ids?: number[] | undefined
              result?: DatabaseOAuth2TokensRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/oauth2_tokens/all/': {
      $post:
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/database/:pk/oauth2_tokens/delete/': {
      $post:
        | {
            input: { param: { pk: number } } & { json: DatabaseOAuth2TokensDeleteSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: DatabaseOAuth2TokensDeleteSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: DatabaseOAuth2TokensDeleteSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { json: DatabaseOAuth2TokensDeleteSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: DatabaseOAuth2TokensDeleteSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/database/:pk/related_objects/': {
      $get:
        | {
            input: { param: { pk: number } }
            output: DatabaseRelatedObjectsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/schemas/': {
      $get:
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseSchemasQuerySchema | undefined }
            }
            output: SchemasResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseSchemasQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseSchemasQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseSchemasQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseSchemasQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/schemas_access_for_file_upload/': {
      $get:
        | {
            input: { param: { pk: number } }
            output: DatabaseSchemaAccessForFileUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/select_star/:table_name/': {
      $get:
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: SelectStarResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/select_star/:table_name/:schema_name/': {
      $get:
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: SelectStarResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/sync_permissions/': {
      $post:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/table/:table_name/:schema_name/': {
      $get:
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: TableMetadataResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/table_extra/:table_name/:schema_name/': {
      $get:
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: TableExtraMetadataResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; table_name: string; schema_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/table_metadata/': {
      $get:
        | {
            input: { param: { pk: number } } & {
              query: { name: string; schema?: string | undefined; catalog?: string | undefined }
            }
            output: TableExtraMetadataResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & {
              query: { name: string; schema?: string | undefined; catalog?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & {
              query: { name: string; schema?: string | undefined; catalog?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & {
              query: { name: string; schema?: string | undefined; catalog?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/table_metadata/extra/': {
      $get:
        | {
            input: { param: { pk: number } } & {
              query: { name: string; schema?: string | undefined; catalog?: string | undefined }
            }
            output: TableExtraMetadataResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & {
              query: { name: string; schema?: string | undefined; catalog?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & {
              query: { name: string; schema?: string | undefined; catalog?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & {
              query: { name: string; schema?: string | undefined; catalog?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/tables/': {
      $get:
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseTablesQuerySchema | undefined }
            }
            output: { count?: number | undefined; result?: DatabaseTablesResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseTablesQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseTablesQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseTablesQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseTablesQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & {
              query: { q?: DatabaseTablesQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/upload/': {
      $post:
        | {
            input: { param: { pk: number } } & { form: UploadPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { pk: number } } & { form: UploadPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { form: UploadPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { form: UploadPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { form: UploadPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { pk: number } } & { form: UploadPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { form: UploadPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/database/:pk/validate_sql/': {
      $post:
        | {
            input: { param: { pk: number } } & { json: ValidateSQLRequest }
            output: { result?: ValidateSQLResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: ValidateSQLRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: ValidateSQLRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: ValidateSQLRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: ValidateSQLRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/': {
      $delete:
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: DatasetRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: DatasetRestApiPost }
            output: { id?: number | undefined; result?: DatasetRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DatasetRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DatasetRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DatasetRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DatasetRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/distinct/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: DistincResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/duplicate': {
      $post:
        | {
            input: { json: DatasetDuplicateSchema }
            output: { id?: number | undefined; result?: DatasetDuplicateSchema | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DatasetDuplicateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DatasetDuplicateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DatasetDuplicateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DatasetDuplicateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DatasetDuplicateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DatasetDuplicateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/export/': {
      $get:
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/get_or_create/': {
      $post:
        | {
            input: { json: GetOrCreateDatasetSchema }
            output: { result?: { table_id?: number | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetOrCreateDatasetSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetOrCreateDatasetSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GetOrCreateDatasetSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GetOrCreateDatasetSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/import/': {
      $post:
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
                sync_columns?: boolean | undefined
                sync_metrics?: boolean | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
                sync_columns?: boolean | undefined
                sync_metrics?: boolean | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
                sync_columns?: boolean | undefined
                sync_metrics?: boolean | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
                sync_columns?: boolean | undefined
                sync_metrics?: boolean | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
                sync_columns?: boolean | undefined
                sync_metrics?: boolean | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/related/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: RelatedResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/related_objects/': {
      $get:
        | {
            input: { query: { q?: GetRelatedObjectsIdsSchema | undefined } }
            output: DatasetRelatedObjectsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetRelatedObjectsIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetRelatedObjectsIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetRelatedObjectsIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetRelatedObjectsIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/warm_up_cache': {
      $put:
        | {
            input: { json: DatasetCacheWarmUpRequestSchema }
            output: DatasetCacheWarmUpResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DatasetCacheWarmUpRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DatasetCacheWarmUpRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DatasetCacheWarmUpRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/:id_or_uuid': {
      $get:
        | {
            input: { param: { id_or_uuid: string } } & {
              query: { q?: GetItemSchema | undefined; include_rendered_sql?: boolean | undefined }
            }
            output: { id?: string | undefined; result?: DatasetRestApiGet | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_uuid: string } } & {
              query: { q?: GetItemSchema | undefined; include_rendered_sql?: boolean | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id_or_uuid: string } } & {
              query: { q?: GetItemSchema | undefined; include_rendered_sql?: boolean | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id_or_uuid: string } } & {
              query: { q?: GetItemSchema | undefined; include_rendered_sql?: boolean | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id_or_uuid: string } } & {
              query: { q?: GetItemSchema | undefined; include_rendered_sql?: boolean | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/:id_or_uuid/related_objects': {
      $get:
        | {
            input: { param: { id_or_uuid: string } }
            output: DatasetRelatedObjectsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id_or_uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id_or_uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { header: { 'If-Match'?: string | undefined } } & { json: DatasetRestApiPut }
            output: {
              id?: number | undefined
              new_transaction_id?: (number | null) | undefined
              new_version?: (number | null) | undefined
              new_version_uuid?: (string | null) | undefined
              old_transaction_id?: (number | null) | undefined
              old_version?: (number | null) | undefined
              old_version_uuid?: (string | null) | undefined
              result?: DatasetRestApiPut | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { header: { 'If-Match'?: string | undefined } } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { header: { 'If-Match'?: string | undefined } } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { header: { 'If-Match'?: string | undefined } } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { header: { 'If-Match'?: string | undefined } } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { header: { 'If-Match'?: string | undefined } } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { header: { 'If-Match'?: string | undefined } } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { header: { 'If-Match'?: string | undefined } } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { header: { 'If-Match'?: string | undefined } } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/:pk/column/:column_id': {
      $delete:
        | {
            input: { param: { pk: number; column_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; column_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; column_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number; column_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; column_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; column_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/:pk/drill_info/': {
      $get:
        | {
            input: { param: { pk: number } }
            output: { result?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/:pk/metric/:metric_id': {
      $delete:
        | {
            input: { param: { pk: number; metric_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; metric_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; metric_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number; metric_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; metric_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; metric_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/:pk/partition_mapping/preview/': {
      $post:
        | {
            input: { param: { pk: number } } & { json: PartitionMappingPreviewSchema }
            output: {
              result?:
                | {
                    data_validation?:
                      | {
                          checked_rows?: number | undefined
                          examples?:
                            | {
                                source_value?: string | undefined
                                stored_key?: string | undefined
                                transformed_value?: (string | null) | undefined
                              }[]
                            | undefined
                          inconclusive_keys?: string[] | undefined
                          message?: string | undefined
                          mismatch_count?: number | undefined
                          partitions_checked?: number | undefined
                          partitions_requested?: number | undefined
                          skipped_rows?: number | undefined
                          status?:
                            | 'not_checked'
                            | 'matched'
                            | 'mismatch'
                            | 'inconclusive'
                            | 'refused'
                            | undefined
                        }
                      | undefined
                    emitted_predicate?: string | undefined
                    error?: string | undefined
                    reason?:
                      | 'unbucketed_epoch'
                      | 'unconfigured'
                      | 'validation'
                      | 'parse'
                      | 'operator'
                      | 'resolution'
                      | 'offset'
                      | 'escaping'
                      | 'transform_escaping'
                      | 'engine'
                      | 'type'
                      | undefined
                    sample_input?: string | undefined
                    valid?: boolean | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: PartitionMappingPreviewSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: PartitionMappingPreviewSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: PartitionMappingPreviewSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { json: PartitionMappingPreviewSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: PartitionMappingPreviewSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { pk: number } } & { json: PartitionMappingPreviewSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/:pk/refresh': {
      $put:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/:uuid_str/activity/': {
      $get:
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: ActivityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid_str: string } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                include?: 'self' | 'related' | 'all' | undefined
                q?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/dataset/:uuid_str/versions/': {
      $get:
        | {
            input: { param: { uuid_str: string } }
            output: { count?: number | undefined; result?: VersionListItemSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/dataset/:uuid_str/versions/:version_uuid_str/': {
      $get:
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { result?: { _version?: VersionListItemSchema | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/dataset/:uuid_str/versions/:version_uuid_str/restore': {
      $post:
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid_str: string; version_uuid_str: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/dataset/:uuid/purge': {
      $post:
        | {
            input: { param: { uuid: string } } & { json: DatasetPurgeRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string } } & { json: DatasetPurgeRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid: string } } & { json: DatasetPurgeRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } } & { json: DatasetPurgeRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } } & { json: DatasetPurgeRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid: string } } & { json: DatasetPurgeRequestSchema }
            output: {
              impact: DatasetPurgeImpactSchema
              message: string
              reason: 'purge_impact_changed'
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { uuid: string } } & { json: DatasetPurgeRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { uuid: string } } & { json: DatasetPurgeRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/:uuid/purge-impact': {
      $get:
        | {
            input: { param: { uuid: string } }
            output: DatasetPurgeImpactSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/dataset/:uuid/restore': {
      $post:
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/datasource/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/datasource/:datasource_type/:datasource_id': {
      $get:
        | {
            input: { param: { datasource_type: string; datasource_id: number } }
            output: { result?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/datasource/:datasource_type/:datasource_id/column/:column_name/values/': {
      $get:
        | {
            input: {
              param: { datasource_type: string; datasource_id: number; column_name: string }
            } & {
              query: { q?: string | undefined; semantic_selection_version?: string | undefined }
            }
            output: {
              result?: (string | number | number | boolean | { [x: string]: unknown })[] | undefined
              suggestions_status?: 'unavailable_versioned_view' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { datasource_type: string; datasource_id: number; column_name: string }
            } & {
              query: { q?: string | undefined; semantic_selection_version?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { datasource_type: string; datasource_id: number; column_name: string }
            } & {
              query: { q?: string | undefined; semantic_selection_version?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { datasource_type: string; datasource_id: number; column_name: string }
            } & {
              query: { q?: string | undefined; semantic_selection_version?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { datasource_type: string; datasource_id: number; column_name: string }
            } & {
              query: { q?: string | undefined; semantic_selection_version?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { datasource_type: string; datasource_id: number; column_name: string }
            } & {
              query: { q?: string | undefined; semantic_selection_version?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/datasource/:datasource_type/:datasource_id/compatible': {
      $post:
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: {
                selected_dimensions?: string[] | undefined
                selected_metrics?: string[] | undefined
              }
            }
            output: {
              result?:
                | {
                    compatible_dimensions?: string[] | undefined
                    compatible_metrics?: string[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: {
                selected_dimensions?: string[] | undefined
                selected_metrics?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: {
                selected_dimensions?: string[] | undefined
                selected_metrics?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: {
                selected_dimensions?: string[] | undefined
                selected_metrics?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: {
                selected_dimensions?: string[] | undefined
                selected_metrics?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/datasource/:datasource_type/:datasource_id/query': {
      $post:
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: DatasourceQuerySchema
            }
            output: { result?: { [x: string]: unknown }[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: DatasourceQuerySchema
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: DatasourceQuerySchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: DatasourceQuerySchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: DatasourceQuerySchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: DatasourceQuerySchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/datasource/:datasource_type/:datasource_id/validate_expression/': {
      $post:
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: {
                clause?: 'WHERE' | 'HAVING' | undefined
                expression: string
                expression_type?: 'column' | 'metric' | 'where' | 'having' | undefined
              }
            }
            output: {
              result?:
                | {
                    end_column?: number | undefined
                    line_number?: number | undefined
                    message?: string | undefined
                    start_column?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: {
                clause?: 'WHERE' | 'HAVING' | undefined
                expression: string
                expression_type?: 'column' | 'metric' | 'where' | 'having' | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: {
                clause?: 'WHERE' | 'HAVING' | undefined
                expression: string
                expression_type?: 'column' | 'metric' | 'where' | 'having' | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: {
                clause?: 'WHERE' | 'HAVING' | undefined
                expression: string
                expression_type?: 'column' | 'metric' | 'where' | 'having' | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: {
                clause?: 'WHERE' | 'HAVING' | undefined
                expression: string
                expression_type?: 'column' | 'metric' | 'where' | 'having' | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { datasource_type: string; datasource_id: number } } & {
              json: {
                clause?: 'WHERE' | 'HAVING' | undefined
                expression: string
                expression_type?: 'column' | 'metric' | 'where' | 'having' | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/embedded_dashboard/:uuid': {
      $get:
        | {
            input: { param: { uuid: string } } & {
              query: {
                uiConfig?: number | undefined
                show_filters?: boolean | undefined
                expand_filters?: boolean | undefined
                native_filters_key?: string | undefined
                permalink_key?: string | undefined
              }
            }
            output: { result?: EmbeddedDashboardResponseSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string } } & {
              query: {
                uiConfig?: number | undefined
                show_filters?: boolean | undefined
                expand_filters?: boolean | undefined
                native_filters_key?: string | undefined
                permalink_key?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { uuid: string } } & {
              query: {
                uiConfig?: number | undefined
                show_filters?: boolean | undefined
                expand_filters?: boolean | undefined
                native_filters_key?: string | undefined
                permalink_key?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } } & {
              query: {
                uiConfig?: number | undefined
                show_filters?: boolean | undefined
                expand_filters?: boolean | undefined
                native_filters_key?: string | undefined
                permalink_key?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid: string } } & {
              query: {
                uiConfig?: number | undefined
                show_filters?: boolean | undefined
                expand_filters?: boolean | undefined
                native_filters_key?: string | undefined
                permalink_key?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/explore/': {
      $get:
        | {
            input: {
              query: {
                form_data_key?: string | undefined
                permalink_key?: string | undefined
                slice_id?: number | undefined
                datasource_id?: number | undefined
                datasource_type?: string | undefined
              }
            }
            output: ExploreContextSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                form_data_key?: string | undefined
                permalink_key?: string | undefined
                slice_id?: number | undefined
                datasource_id?: number | undefined
                datasource_type?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                form_data_key?: string | undefined
                permalink_key?: string | undefined
                slice_id?: number | undefined
                datasource_id?: number | undefined
                datasource_type?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                form_data_key?: string | undefined
                permalink_key?: string | undefined
                slice_id?: number | undefined
                datasource_id?: number | undefined
                datasource_type?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                form_data_key?: string | undefined
                permalink_key?: string | undefined
                slice_id?: number | undefined
                datasource_id?: number | undefined
                datasource_type?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                form_data_key?: string | undefined
                permalink_key?: string | undefined
                slice_id?: number | undefined
                datasource_id?: number | undefined
                datasource_type?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/explore/form_data': {
      $post:
        | {
            input: { query: { tab_id?: number | undefined } } & { json: FormDataPostSchema }
            output: { key?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { tab_id?: number | undefined } } & { json: FormDataPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { tab_id?: number | undefined } } & { json: FormDataPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { tab_id?: number | undefined } } & { json: FormDataPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { tab_id?: number | undefined } } & { json: FormDataPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/explore/form_data/:key': {
      $delete:
        | {
            input: { param: { key: string } } & { query: { tab_id?: number | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { tab_id?: number | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } } & { query: { tab_id?: number | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } } & { query: { tab_id?: number | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } } & { query: { tab_id?: number | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { key: string } } & { query: { tab_id?: number | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { key: string } }
            output: { form_data?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { key: string } } & { query: { tab_id?: number | undefined } } & {
              json: FormDataPutSchema
            }
            output: { key?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { tab_id?: number | undefined } } & {
              json: FormDataPutSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } } & { query: { tab_id?: number | undefined } } & {
              json: FormDataPutSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } } & { query: { tab_id?: number | undefined } } & {
              json: FormDataPutSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } } & { query: { tab_id?: number | undefined } } & {
              json: FormDataPutSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { key: string } } & { query: { tab_id?: number | undefined } } & {
              json: FormDataPutSchema
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/explore/permalink': {
      $post:
        | {
            input: { json: ExplorePermalinkStateSchema }
            output: { key?: string | undefined; url?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ExplorePermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExplorePermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExplorePermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ExplorePermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ExplorePermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/explore/permalink/:key': {
      $get:
        | {
            input: { param: { key: string } }
            output: { state?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/log/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: LogRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: LogRestApiPost }
            output: { id?: string | undefined; result?: LogRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: LogRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: LogRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: LogRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: LogRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/log/recent_activity/': {
      $get:
        | {
            input: { query: { q?: GetRecentActivitySchema | undefined } }
            output: RecentActivityResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetRecentActivitySchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetRecentActivitySchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetRecentActivitySchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: GetRecentActivitySchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/log/:pk': {
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: LogRestApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/me/': {
      $get:
        | {
            input: {}
            output: { result?: UserResponseSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
      $put:
        | {
            input: { json: CurrentUserPutSchema }
            output: { result?: UserResponseSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CurrentUserPutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CurrentUserPutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/me/api_key_scopes/': {
      $get:
        | {
            input: {}
            output: { result?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/me/roles/': {
      $get:
        | {
            input: {}
            output: { result?: UserResponseSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/menu/': {
      $get:
        | {
            input: {}
            output: {
              result?:
                | {
                    childs?: { [x: string]: unknown }[] | undefined
                    icon?: string | undefined
                    label?: string | undefined
                    name?: string | undefined
                    url?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/query/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: QueryRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/query/distinct/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: DistincResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/query/related/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: RelatedResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/query/stop': {
      $post:
        | {
            input: { json: StopQuerySchema }
            output: { result?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StopQuerySchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: StopQuerySchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: StopQuerySchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | { input: { json: StopQuerySchema }; output: {}; outputFormat: string; status: 422 }
        | {
            input: { json: StopQuerySchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/query/updated_since': {
      $get:
        | {
            input: { query: { q?: QueriesGetUpdatedSinceSchema | undefined } }
            output: { result?: QueryRestApiGet[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: QueriesGetUpdatedSinceSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: QueriesGetUpdatedSinceSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: QueriesGetUpdatedSinceSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: QueriesGetUpdatedSinceSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/query/:pk': {
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: QueryRestApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/report/': {
      $delete:
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: ReportScheduleRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ReportScheduleRestApiPost }
            output: { id?: number | undefined; result?: ReportScheduleRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ReportScheduleRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ReportScheduleRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ReportScheduleRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ReportScheduleRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ReportScheduleRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/report/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/report/configuration/': {
      $get:
        | {
            input: {}
            output: {
              default_executor?: (string | null) | undefined
              result?: ReportConfigurationSchema | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 500 }
      $put:
        | {
            input: { json: ReportConfigurationSchema }
            output: { result?: ReportConfigurationSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReportConfigurationSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ReportConfigurationSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ReportConfigurationSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ReportConfigurationSchema }
            output: {
              impacted_schedules?: ReportConfigImpactedSchema[] | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ReportConfigurationSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/report/related/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: RelatedResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/report/slack_channels/': {
      $get:
        | {
            input: { query: { q?: GetSlackChannelsSchema | undefined } }
            output: {
              result?: { id?: string | undefined; name?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetSlackChannelsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetSlackChannelsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: GetSlackChannelsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetSlackChannelsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetSlackChannelsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/report/subscribe': {
      $post:
        | {
            input: { json: ReportScheduleRestApiPost }
            output: { id?: number | undefined; result?: ReportScheduleRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ReportScheduleRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ReportScheduleRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ReportScheduleRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ReportScheduleRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/report/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: ReportScheduleRestApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: ReportScheduleRestApiPut }
            output: { id?: number | undefined; result?: ReportScheduleRestApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: ReportScheduleRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: ReportScheduleRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: ReportScheduleRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { json: ReportScheduleRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: ReportScheduleRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: ReportScheduleRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/report/:pk/execute': {
      $post:
        | {
            input: { param: { pk: number } }
            output: { execution_id?: string | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/api/v1/report/:pk/log/': {
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              ids?: string[] | undefined
              result?: ReportExecutionLogRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/report/:pk/log/:log_id': {
      $get:
        | {
            input: { param: { pk: number; log_id: number } } & {
              query: { q?: GetItemSchema | undefined }
            }
            output: { id?: string | undefined; result?: ReportExecutionLogRestApiGet | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; log_id: number } } & {
              query: { q?: GetItemSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; log_id: number } } & {
              query: { q?: GetItemSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; log_id: number } } & {
              query: { q?: GetItemSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; log_id: number } } & {
              query: { q?: GetItemSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; log_id: number } } & {
              query: { q?: GetItemSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/rowlevelsecurity/': {
      $delete:
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: RLSRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: RLSRestApiPost }
            output: { id?: number | undefined; result?: RLSRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: RLSRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RLSRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RLSRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RLSRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RLSRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RLSRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/rowlevelsecurity/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/rowlevelsecurity/related/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: RelatedResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/rowlevelsecurity/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: RLSRestApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: RLSRestApiPut }
            output: { id?: number | undefined; result?: RLSRestApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: RLSRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: RLSRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: RLSRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { json: RLSRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: RLSRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: RLSRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/saved_query/': {
      $delete:
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: SavedQueryRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: SavedQueryRestApiPost }
            output: { id?: string | undefined; result?: SavedQueryRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SavedQueryRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SavedQueryRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SavedQueryRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SavedQueryRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/saved_query/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/saved_query/distinct/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: DistincResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/saved_query/export/': {
      $get:
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/saved_query/import/': {
      $post:
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                encrypted_extra_secrets?: string | undefined
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
                ssh_tunnel_passwords?: string | undefined
                ssh_tunnel_private_key_passwords?: string | undefined
                ssh_tunnel_private_keys?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/saved_query/related/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: RelatedResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/saved_query/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: SavedQueryRestApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: SavedQueryRestApiPut }
            output: { result?: SavedQueryRestApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: SavedQueryRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: SavedQueryRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: SavedQueryRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: SavedQueryRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: SavedQueryRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/csrf_token/': {
      $get:
        | { input: {}; output: { result?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v1/security/groups/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: SupersetGroupApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 201 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/v1/security/groups/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/groups/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: SupersetGroupApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/v1/security/guest_token/': {
      $post:
        | {
            input: { json: GuestTokenCreate }
            output: { token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GuestTokenCreate }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GuestTokenCreate }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GuestTokenCreate }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/login': {
      $post:
        | {
            input: {
              json: {
                password?: string | undefined
                provider?: 'db' | 'ldap' | undefined
                refresh?: boolean | undefined
                username?: string | undefined
              }
            }
            output: { access_token?: string | undefined; refresh_token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                password?: string | undefined
                provider?: 'db' | 'ldap' | undefined
                refresh?: boolean | undefined
                username?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                password?: string | undefined
                provider?: 'db' | 'ldap' | undefined
                refresh?: boolean | undefined
                username?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                password?: string | undefined
                provider?: 'db' | 'ldap' | undefined
                refresh?: boolean | undefined
                username?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/password_recovery/': {
      $post:
        | {
            input: { json: PasswordRecoveryRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PasswordRecoveryRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PasswordRecoveryRequestSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PasswordRecoveryRequestSchema }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v1/security/password_recovery/reset/': {
      $post:
        | {
            input: { json: PasswordRecoveryResetSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PasswordRecoveryResetSchema }
            output: { message?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PasswordRecoveryResetSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PasswordRecoveryResetSchema }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v1/security/permissions-resources/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: SupersetPermissionViewMenuApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: SupersetPermissionViewMenuApiPost }
            output: {
              id?: string | undefined
              result?: SupersetPermissionViewMenuApiPost | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SupersetPermissionViewMenuApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SupersetPermissionViewMenuApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SupersetPermissionViewMenuApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SupersetPermissionViewMenuApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/permissions-resources/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/permissions-resources/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: SupersetPermissionViewMenuApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: SupersetPermissionViewMenuApiPut }
            output: { result?: SupersetPermissionViewMenuApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: SupersetPermissionViewMenuApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: SupersetPermissionViewMenuApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: SupersetPermissionViewMenuApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: SupersetPermissionViewMenuApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: SupersetPermissionViewMenuApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/permissions/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: PermissionApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/permissions/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/permissions/:pk': {
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: PermissionApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/refresh': {
      $post:
        | {
            input: {}
            output: { access_token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v1/security/resources/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: ViewMenuApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ViewMenuApiPost }
            output: { id?: string | undefined; result?: ViewMenuApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ViewMenuApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ViewMenuApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ViewMenuApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ViewMenuApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/resources/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/resources/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: ViewMenuApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: ViewMenuApiPut }
            output: { result?: ViewMenuApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: ViewMenuApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: ViewMenuApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: ViewMenuApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: ViewMenuApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: ViewMenuApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/roles/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: SupersetRoleApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: SupersetRoleApiPost }
            output: { id?: string | undefined; result?: SupersetRoleApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SupersetRoleApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SupersetRoleApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SupersetRoleApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SupersetRoleApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/roles/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/roles/search/': {
      $get:
        | {
            input: {
              query: {
                q?:
                  | {
                      filters?:
                        | {
                            col?: 'user_ids' | 'permission_ids' | 'name' | undefined
                            value?: string | undefined
                          }[]
                        | undefined
                      order_column?: 'id' | 'name' | undefined
                      order_direction?: 'asc' | 'desc' | undefined
                      page?: number | undefined
                      page_size?: number | undefined
                    }
                  | undefined
              }
            }
            output: RolesResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?:
                  | {
                      filters?:
                        | {
                            col?: 'user_ids' | 'permission_ids' | 'name' | undefined
                            value?: string | undefined
                          }[]
                        | undefined
                      order_column?: 'id' | 'name' | undefined
                      order_direction?: 'asc' | 'desc' | undefined
                      page?: number | undefined
                      page_size?: number | undefined
                    }
                  | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?:
                  | {
                      filters?:
                        | {
                            col?: 'user_ids' | 'permission_ids' | 'name' | undefined
                            value?: string | undefined
                          }[]
                        | undefined
                      order_column?: 'id' | 'name' | undefined
                      order_direction?: 'asc' | 'desc' | undefined
                      page?: number | undefined
                      page_size?: number | undefined
                    }
                  | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/security/roles/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: SupersetRoleApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: SupersetRoleApiPut }
            output: { result?: SupersetRoleApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: SupersetRoleApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: SupersetRoleApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: SupersetRoleApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: SupersetRoleApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: SupersetRoleApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/roles/:role_id/groups': {
      $put:
        | {
            input: { param: { role_id: number } } & { json: RoleGroupPutSchema }
            output: { result?: RoleGroupPutSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: number } } & { json: RoleGroupPutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: number } } & { json: RoleGroupPutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_id: number } } & { json: RoleGroupPutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: number } } & { json: RoleGroupPutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { role_id: number } } & { json: RoleGroupPutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/roles/:role_id/permissions': {
      $post:
        | {
            input: { param: { role_id: number } } & { json: RolePermissionPostSchema }
            output: { result?: RolePermissionPostSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: number } } & { json: RolePermissionPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: number } } & { json: RolePermissionPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_id: number } } & { json: RolePermissionPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: number } } & { json: RolePermissionPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { role_id: number } } & { json: RolePermissionPostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/roles/:role_id/permissions/': {
      $get:
        | {
            input: { param: { role_id: number } }
            output: { result?: RolePermissionListSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { role_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/roles/:role_id/users': {
      $put:
        | {
            input: { param: { role_id: number } } & { json: RoleUserPutSchema }
            output: { result?: RoleUserPutSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: number } } & { json: RoleUserPutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: number } } & { json: RoleUserPutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_id: number } } & { json: RoleUserPutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: number } } & { json: RoleUserPutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { role_id: number } } & { json: RoleUserPutSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/subject/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: SubjectRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/subject/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/subject/:pk': {
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: SubjectRestApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/user_registrations/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: UserRegistrationsRestAPIGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/user_registrations/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/user_registrations/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: UserRegistrationsRestAPIGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/users/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: SupersetUserApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 201 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/v1/security/users/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/security/users/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: SupersetUserApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/v1/security/users/:pk/sessions': {
      $delete:
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/semantic_layer/': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
      $post:
        | {
            input: {
              json: {
                cache_timeout?: number | undefined
                configuration?: { [x: string]: unknown } | undefined
                description?: string | undefined
                name?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              json: {
                cache_timeout?: number | undefined
                configuration?: { [x: string]: unknown } | undefined
                description?: string | undefined
                name?: string | undefined
                type?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                cache_timeout?: number | undefined
                configuration?: { [x: string]: unknown } | undefined
                description?: string | undefined
                name?: string | undefined
                type?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                cache_timeout?: number | undefined
                configuration?: { [x: string]: unknown } | undefined
                description?: string | undefined
                name?: string | undefined
                type?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/semantic_layer/connections/': {
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/semantic_layer/schema/configuration': {
      $post:
        | {
            input: {
              json: {
                configuration?: { [x: string]: unknown } | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                configuration?: { [x: string]: unknown } | undefined
                type?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                configuration?: { [x: string]: unknown } | undefined
                type?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/semantic_layer/types': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/semantic_layer/:uuid': {
      $delete:
        | { input: { param: { uuid: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid: string } }
            output: {
              archived_count: number
              dependents: {
                archived: boolean
                id: number
                name: string
                type: 'chart' | 'dashboard' | 'alert' | 'report'
              }[]
              inaccessible_count: number
              message: string
              total: number
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
      $get:
        | { input: { param: { uuid: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { uuid: string } } & {
              json: {
                cache_timeout?: number | undefined
                configuration?: { [x: string]: unknown } | undefined
                description?: string | undefined
                name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { uuid: string } } & {
              json: {
                cache_timeout?: number | undefined
                configuration?: { [x: string]: unknown } | undefined
                description?: string | undefined
                name?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid: string } } & {
              json: {
                cache_timeout?: number | undefined
                configuration?: { [x: string]: unknown } | undefined
                description?: string | undefined
                name?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } } & {
              json: {
                cache_timeout?: number | undefined
                configuration?: { [x: string]: unknown } | undefined
                description?: string | undefined
                name?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } } & {
              json: {
                cache_timeout?: number | undefined
                configuration?: { [x: string]: unknown } | undefined
                description?: string | undefined
                name?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid: string } } & {
              json: {
                cache_timeout?: number | undefined
                configuration?: { [x: string]: unknown } | undefined
                description?: string | undefined
                name?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/semantic_layer/:uuid/clear_cache': {
      $post:
        | {
            input: { param: { uuid: string } } & { json: {} }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { uuid: string } } & { json: {} }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uuid: string } } & { json: {} }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } } & { json: {} }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } } & { json: {} }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uuid: string } } & { json: {} }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/semantic_layer/:uuid/schema/runtime': {
      $post:
        | {
            input: { param: { uuid: string } } & {
              json: { runtime_data?: { [x: string]: unknown } | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { uuid: string } } & {
              json: { runtime_data?: { [x: string]: unknown } | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } } & {
              json: { runtime_data?: { [x: string]: unknown } | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } } & {
              json: { runtime_data?: { [x: string]: unknown } | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/semantic_layer/:uuid/views': {
      $post:
        | {
            input: { param: { uuid: string } } & {
              json: { runtime_data?: { [x: string]: unknown } | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { uuid: string } } & {
              json: { runtime_data?: { [x: string]: unknown } | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uuid: string } } & {
              json: { runtime_data?: { [x: string]: unknown } | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uuid: string } } & {
              json: { runtime_data?: { [x: string]: unknown } | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/semantic_view/': {
      $delete:
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: {
              archived_count: number
              blocked_view_ids?: number[] | undefined
              blocked_views?:
                | {
                    archived_count: number
                    dependents: {
                      archived: boolean
                      id: number
                      name: string
                      type: 'chart' | 'dashboard' | 'alert' | 'report'
                    }[]
                    id: number
                    inaccessible_count: number
                    total: number
                  }[]
                | undefined
              dependents: {
                archived: boolean
                id: number
                name: string
                type: 'chart' | 'dashboard' | 'alert' | 'report'
              }[]
              inaccessible_count: number
              message: string
              total: number
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                views?:
                  | {
                      cache_timeout?: number | undefined
                      configuration?: { [x: string]: unknown } | undefined
                      description?: string | undefined
                      name?: string | undefined
                      semantic_layer_uuid?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              json: {
                views?:
                  | {
                      cache_timeout?: number | undefined
                      configuration?: { [x: string]: unknown } | undefined
                      description?: string | undefined
                      name?: string | undefined
                      semantic_layer_uuid?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                views?:
                  | {
                      cache_timeout?: number | undefined
                      configuration?: { [x: string]: unknown } | undefined
                      description?: string | undefined
                      name?: string | undefined
                      semantic_layer_uuid?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                views?:
                  | {
                      cache_timeout?: number | undefined
                      configuration?: { [x: string]: unknown } | undefined
                      description?: string | undefined
                      name?: string | undefined
                      semantic_layer_uuid?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/semantic_view/:pk': {
      $delete:
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: {
              archived_count: number
              dependents: {
                archived: boolean
                id: number
                name: string
                type: 'chart' | 'dashboard' | 'alert' | 'report'
              }[]
              inaccessible_count: number
              message: string
              total: number
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: SemanticViewRestApiPut }
            output: { id?: number | undefined; result?: SemanticViewRestApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: SemanticViewRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: SemanticViewRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: SemanticViewRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { json: SemanticViewRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: SemanticViewRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: SemanticViewRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/semantic_view/:pk/structure': {
      $get:
        | { input: { param: { pk: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/sqllab/': {
      $get:
        | { input: {}; output: SQLLabBootstrapSchema; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 400 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v1/sqllab/estimate/': {
      $post:
        | {
            input: { json: EstimateQueryCostSchema }
            output: { result?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EstimateQueryCostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EstimateQueryCostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: EstimateQueryCostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: EstimateQueryCostSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/sqllab/execute/': {
      $post:
        | {
            input: { json: ExecutePayloadSchema }
            output: QueryExecutionResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExecutePayloadSchema }
            output: QueryExecutionResponseSchema
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ExecutePayloadSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExecutePayloadSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExecutePayloadSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ExecutePayloadSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ExecutePayloadSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/sqllab/export/:client_id/': {
      $get:
        | {
            input: { param: { client_id: number } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { client_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { client_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { client_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { client_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/sqllab/export_streaming/': {
      $post:
        | {
            input: {
              json: {
                client_id?: string | undefined
                expected_rows?: number | undefined
                filename?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                expected_rows?: number | undefined
                filename?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                client_id?: string | undefined
                expected_rows?: number | undefined
                filename?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                expected_rows?: number | undefined
                filename?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                client_id?: string | undefined
                expected_rows?: number | undefined
                filename?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                expected_rows?: number | undefined
                filename?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                client_id?: string | undefined
                expected_rows?: number | undefined
                filename?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                expected_rows?: number | undefined
                filename?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                client_id?: string | undefined
                expected_rows?: number | undefined
                filename?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                expected_rows?: number | undefined
                filename?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                client_id?: string | undefined
                expected_rows?: number | undefined
                filename?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                expected_rows?: number | undefined
                filename?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/sqllab/format_sql/': {
      $post:
        | {
            input: { json: FormatQueryPayloadSchema }
            output: { result?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FormatQueryPayloadSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FormatQueryPayloadSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FormatQueryPayloadSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: FormatQueryPayloadSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/sqllab/permalink': {
      $post:
        | {
            input: { json: ExplorePermalinkStateSchema }
            output: { key?: string | undefined; url?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ExplorePermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExplorePermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExplorePermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ExplorePermalinkStateSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/sqllab/permalink/:key': {
      $get:
        | {
            input: { param: { key: string } }
            output: { state?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/sqllab/results/': {
      $get:
        | {
            input: { query: { q?: SqlLabGetResultsSchema | undefined } }
            output: QueryExecutionResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: SqlLabGetResultsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: SqlLabGetResultsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: SqlLabGetResultsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: SqlLabGetResultsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: SqlLabGetResultsSchema | undefined } }
            output: {
              errors?:
                | {
                    error_type?:
                      | 'FRONTEND_CSRF_ERROR'
                      | 'FRONTEND_NETWORK_ERROR'
                      | 'FRONTEND_TIMEOUT_ERROR'
                      | 'GENERIC_DB_ENGINE_ERROR'
                      | 'COLUMN_DOES_NOT_EXIST_ERROR'
                      | 'TABLE_DOES_NOT_EXIST_ERROR'
                      | 'SCHEMA_DOES_NOT_EXIST_ERROR'
                      | 'CONNECTION_INVALID_USERNAME_ERROR'
                      | 'CONNECTION_INVALID_PASSWORD_ERROR'
                      | 'CONNECTION_INVALID_HOSTNAME_ERROR'
                      | 'CONNECTION_PORT_CLOSED_ERROR'
                      | 'CONNECTION_INVALID_PORT_ERROR'
                      | 'CONNECTION_HOST_DOWN_ERROR'
                      | 'CONNECTION_ACCESS_DENIED_ERROR'
                      | 'CONNECTION_UNKNOWN_DATABASE_ERROR'
                      | 'CONNECTION_DATABASE_PERMISSIONS_ERROR'
                      | 'CONNECTION_MISSING_PARAMETERS_ERROR'
                      | 'OBJECT_DOES_NOT_EXIST_ERROR'
                      | 'SYNTAX_ERROR'
                      | 'CONNECTION_DATABASE_TIMEOUT'
                      | 'VIZ_GET_DF_ERROR'
                      | 'UNKNOWN_DATASOURCE_TYPE_ERROR'
                      | 'FAILED_FETCHING_DATASOURCE_INFO_ERROR'
                      | 'TABLE_SECURITY_ACCESS_ERROR'
                      | 'SEMANTIC_EXECUTION_REFUSED_ERROR'
                      | 'DATASOURCE_SECURITY_ACCESS_ERROR'
                      | 'DATABASE_SECURITY_ACCESS_ERROR'
                      | 'QUERY_SECURITY_ACCESS_ERROR'
                      | 'MISSING_OWNERSHIP_ERROR'
                      | 'USER_ACTIVITY_SECURITY_ACCESS_ERROR'
                      | 'DASHBOARD_SECURITY_ACCESS_ERROR'
                      | 'CHART_SECURITY_ACCESS_ERROR'
                      | 'OAUTH2_REDIRECT'
                      | 'OAUTH2_REDIRECT_ERROR'
                      | 'BACKEND_TIMEOUT_ERROR'
                      | 'DATABASE_NOT_FOUND_ERROR'
                      | 'TABLE_NOT_FOUND_ERROR'
                      | 'MISSING_TEMPLATE_PARAMS_ERROR'
                      | 'INVALID_TEMPLATE_PARAMS_ERROR'
                      | 'RESULTS_BACKEND_NOT_CONFIGURED_ERROR'
                      | 'DML_NOT_ALLOWED_ERROR'
                      | 'INVALID_CTAS_QUERY_ERROR'
                      | 'INVALID_CVAS_QUERY_ERROR'
                      | 'SQLLAB_TIMEOUT_ERROR'
                      | 'RESULTS_BACKEND_ERROR'
                      | 'ASYNC_WORKERS_ERROR'
                      | 'ADHOC_SUBQUERY_NOT_ALLOWED_ERROR'
                      | 'INVALID_SQL_ERROR'
                      | 'RESULT_TOO_LARGE_ERROR'
                      | 'GENERIC_COMMAND_ERROR'
                      | 'GENERIC_BACKEND_ERROR'
                      | 'INVALID_PAYLOAD_FORMAT_ERROR'
                      | 'INVALID_PAYLOAD_SCHEMA_ERROR'
                      | 'MARSHMALLOW_ERROR'
                      | 'CSRF_ERROR'
                      | 'REPORT_NOTIFICATION_ERROR'
                      | undefined
                    extra?: { [x: string]: unknown } | undefined
                    level?: 'info' | 'warning' | 'error' | undefined
                    message?: string | undefined
                  }[]
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { q?: SqlLabGetResultsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/tag/': {
      $delete:
        | {
            input: { query: { q?: DeleteTagsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: DeleteTagsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: DeleteTagsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: DeleteTagsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: DeleteTagsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: DeleteTagsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: TagRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: TagRestApiPost }
            output: { id?: number | undefined; result?: TagRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TagRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TagRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TagRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TagRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/tag/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/tag/bulk_create': {
      $post:
        | {
            input: { json: TagPostBulkSchema }
            output: TagPostBulkResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: TagPostBulkSchema }; output: {}; outputFormat: string; status: 302 }
        | {
            input: { json: TagPostBulkSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TagPostBulkSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TagPostBulkSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TagPostBulkSchema }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/tag/favorite_status/': {
      $get:
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: GetFavStarIdsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetFavStarIdsSchema2 | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/tag/get_objects/': {
      $get:
        | {
            input: {
              query: {
                tagIds?: number[] | undefined
                tags?: string[] | undefined
                types?: string[] | undefined
              }
            }
            output: { result?: TaggedObjectEntityResponseSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tagIds?: number[] | undefined
                tags?: string[] | undefined
                types?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: {
              query: {
                tagIds?: number[] | undefined
                tags?: string[] | undefined
                types?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                tagIds?: number[] | undefined
                tags?: string[] | undefined
                types?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                tagIds?: number[] | undefined
                tags?: string[] | undefined
                types?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                tagIds?: number[] | undefined
                tags?: string[] | undefined
                types?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/tag/related/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: RelatedResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/tag/:object_type/:object_id/': {
      $post:
        | {
            input: { param: { object_type: number; object_id: number } } & {
              json: { tags?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { object_type: number; object_id: number } } & {
              json: { tags?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { object_type: number; object_id: number } } & {
              json: { tags?: string[] | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { object_type: number; object_id: number } } & {
              json: { tags?: string[] | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { object_type: number; object_id: number } } & {
              json: { tags?: string[] | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { object_type: number; object_id: number } } & {
              json: { tags?: string[] | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/tag/:object_type/:object_id/:tag/': {
      $delete:
        | {
            input: { param: { tag: string; object_type: number; object_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag: string; object_type: number; object_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag: string; object_type: number; object_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag: string; object_type: number; object_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag: string; object_type: number; object_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { tag: string; object_type: number; object_id: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/tag/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: TagRestApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: TagRestApiPut }
            output: { id?: number | undefined; result?: TagRestApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: TagRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: TagRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: TagRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { json: TagRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: TagRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: TagRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/tag/:pk/favorites/': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { result?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { pk: number } }
            output: { result?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/theme/': {
      $delete:
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetDeleteIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: {
              count?: number | undefined
              description_columns?: { column_name?: string | undefined } | undefined
              ids?: string[] | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              list_columns?: string[] | undefined
              list_title?: string | undefined
              order_columns?: string[] | undefined
              result?: ThemeRestApiGetList[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetListSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ThemeRestApiPost }
            output: { id?: number | undefined; result?: ThemeRestApiPost | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ThemeRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ThemeRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ThemeRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ThemeRestApiPost }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/theme/_info': {
      $get:
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: {
              add_columns?: { [x: string]: unknown } | undefined
              edit_columns?: { [x: string]: unknown } | undefined
              filters?:
                | {
                    column_name?:
                      | { name?: string | undefined; operator?: string | undefined }[]
                      | undefined
                  }
                | undefined
              permissions?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetInfoSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/theme/export/': {
      $get:
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { q?: GetExportIdsSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/theme/import/': {
      $post:
        | {
            input: { form: { formData?: File | undefined; overwrite?: string | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { formData?: File | undefined; overwrite?: string | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { formData?: File | undefined; overwrite?: string | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: { formData?: File | undefined; overwrite?: string | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { form: { formData?: File | undefined; overwrite?: string | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/theme/related/:column_name': {
      $get:
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: RelatedResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { column_name: string } } & {
              query: { q?: GetRelatedSchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/theme/system': {
      $get:
        | {
            input: {}
            output: {
              result?:
                | {
                    dark?: { [x: string]: unknown } | undefined
                    default?: { [x: string]: unknown } | undefined
                    defaultMode?: string | undefined
                    enableUiThemeAdministration?: boolean | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v1/theme/unset_system_dark': {
      $delete:
        | { input: {}; output: { result?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v1/theme/unset_system_default': {
      $delete:
        | { input: {}; output: { result?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v1/theme/:pk': {
      $delete:
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: {
              description_columns?: { column_name?: string | undefined } | undefined
              id?: string | undefined
              label_columns?: { column_name?: string | undefined } | undefined
              result?: ThemeRestApiGet | undefined
              show_columns?: string[] | undefined
              show_title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { query: { q?: GetItemSchema | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { pk: number } } & { json: ThemeRestApiPut }
            output: { id?: number | undefined; result?: ThemeRestApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { json: ThemeRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & { json: ThemeRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & { json: ThemeRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & { json: ThemeRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & { json: ThemeRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & { json: ThemeRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/theme/:pk/set_system_dark': {
      $put:
        | {
            input: { param: { pk: number } }
            output: { id?: number | undefined; result?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/theme/:pk/set_system_default': {
      $put:
        | {
            input: { param: { pk: number } }
            output: { id?: number | undefined; result?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/user/:user_id/avatar.png': {
      $get:
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 301 }
        | {
            input: { param: { user_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
