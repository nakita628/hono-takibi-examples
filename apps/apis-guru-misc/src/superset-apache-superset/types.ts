type GetDeleteIdsSchema = number[]
type GetListSchema = {
  columns?: string[] | undefined
  filters?:
    | { col: string; opr: string; value: number | string | boolean | { [x: string]: unknown }[] }[]
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
}
type Meta4 = { first_name: string; last_name: string }
type Meta3 = { first_name: string; last_name: string }
type AnnotationLayerRestApiGetList = {
  changed_by?: Meta4 | undefined
  changed_on?: (string | null) | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: Meta3 | undefined
  created_on?: (string | null) | undefined
  descr?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
}
type AnnotationLayerRestApiPost = { descr?: (string | null) | undefined; name?: string | undefined }
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
type RelatedResultResponse = { text?: string | undefined; value?: number | undefined }
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
type Meta1 = { first_name: string; id?: number | undefined }
type Meta = { first_name: string; id?: number | undefined }
type AnnotationRestApiGetList = {
  changed_by?: Meta1 | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: Meta | undefined
  end_dttm?: (string | null) | undefined
  id?: number | undefined
  long_descr?: (string | null) | undefined
  short_descr?: (string | null) | undefined
  start_dttm?: (string | null) | undefined
}
type AnnotationRestApiPost = {
  end_dttm?: string | undefined
  json_metadata?: (string | null) | undefined
  long_descr?: (string | null) | undefined
  short_descr?: string | undefined
  start_dttm?: string | undefined
}
type Meta2 = { id?: number | undefined; name?: (string | null) | undefined }
type AnnotationRestApiGet = {
  end_dttm?: (string | null) | undefined
  id?: number | undefined
  json_metadata?: (string | null) | undefined
  layer: Meta2
  long_descr?: (string | null) | undefined
  short_descr?: (string | null) | undefined
  start_dttm?: (string | null) | undefined
}
type AnnotationRestApiPut = {
  end_dttm?: string | undefined
  json_metadata?: string | undefined
  long_descr?: string | undefined
  short_descr?: string | undefined
  start_dttm?: string | undefined
}
type Datasource = {
  database_name?: string | undefined
  datasource_name?: string | undefined
  datasource_type: 'druid' | 'table' | 'view'
  schema?: string | undefined
}
type CacheInvalidationRequestSchema = {
  datasource_uids?: string[] | undefined
  datasources?: Datasource[] | undefined
}
type Meta8 = { first_name: string; last_name: string }
type Meta5 = { first_name: string; id?: number | undefined; last_name: string }
type Meta7 = { first_name: string; id?: number | undefined; last_name: string; username: string }
type Meta6 = { default_endpoint?: (string | null) | undefined; table_name: string }
type ChartRestApiGetList = {
  cache_timeout?: (number | null) | undefined
  changed_by?: Meta8 | undefined
  changed_by_name?: { [x: string]: unknown } | undefined
  changed_by_url?: { [x: string]: unknown } | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  changed_on_utc?: { [x: string]: unknown } | undefined
  created_by?: Meta5 | undefined
  datasource_id?: (number | null) | undefined
  datasource_name_text?: { [x: string]: unknown } | undefined
  datasource_type?: (string | null) | undefined
  datasource_url?: { [x: string]: unknown } | undefined
  description?: (string | null) | undefined
  description_markeddown?: { [x: string]: unknown } | undefined
  edit_url?: { [x: string]: unknown } | undefined
  id?: number | undefined
  owners?: Meta7 | undefined
  params?: (string | null) | undefined
  slice_name?: (string | null) | undefined
  table?: Meta6 | undefined
  thumbnail_url?: { [x: string]: unknown } | undefined
  url?: { [x: string]: unknown } | undefined
  viz_type?: (string | null) | undefined
}
type ChartRestApiPost = {
  cache_timeout?: (number | null) | undefined
  dashboards?: number[] | undefined
  datasource_id: number
  datasource_name?: (string | null) | undefined
  datasource_type: 'druid' | 'table' | 'view'
  description?: (string | null) | undefined
  owners?: number[] | undefined
  params?: (string | null) | undefined
  query_context?: (string | null) | undefined
  slice_name: string
  viz_type?: string | undefined
}
type ChartDataDatasource = { id: number; type?: 'druid' | 'table' | undefined }
type AnnotationLayer = {
  annotationType?: 'FORMULA' | 'INTERVAL' | 'EVENT' | 'TIME_SERIES' | undefined
  color?: (string | null) | undefined
  descriptionColumns?: string[] | undefined
  hideLine?: (boolean | null) | undefined
  intervalEndColumn?: (string | null) | undefined
  name: string
  opacity?: '' | 'opacityLow' | 'opacityMedium' | 'opacityHigh' | undefined
  overrides?: ({ [x: string]: { [x: string]: unknown } | null } | null) | undefined
  show: boolean
  showMarkers: boolean
  sourceType?: '' | 'line' | 'NATIVE' | 'table' | undefined
  style?: 'dashed' | 'dotted' | 'solid' | 'longDashed' | undefined
  timeColumn?: (string | null) | undefined
  titleColumn?: (string | null) | undefined
  value: { [x: string]: unknown }
  width?: number | undefined
}
type ChartDataFilter = {
  col: string
  op:
    | '=='
    | '!='
    | '>'
    | '<'
    | '>='
    | '<='
    | 'LIKE'
    | 'ILIKE'
    | 'IS NULL'
    | 'IS NOT NULL'
    | 'IN'
    | 'NOT IN'
    | 'REGEX'
    | 'IS TRUE'
    | 'IS FALSE'
  val?: { [x: string]: unknown } | undefined
}
type ChartDataQueryObject = {
  annotation_layers?: (AnnotationLayer[] | null) | undefined
  applied_time_extras?: ({ [x: string]: unknown } | null) | undefined
  apply_fetch_values_predicate?: (boolean | null) | undefined
  columns?: (string[] | null) | undefined
  datasource?: { id: number; type?: 'druid' | 'table' | undefined } | undefined
  druid_time_origin?: (string | null) | undefined
  extras?:
    | {
        druid_time_origin?: (string | null) | undefined
        having?: string | undefined
        having_druid?: ChartDataFilter[] | undefined
        relative_end?: 'today' | 'now' | undefined
        relative_start?: 'today' | 'now' | undefined
        time_grain_sqla?:
          | 'PT1S'
          | 'PT5S'
          | 'PT30S'
          | 'PT1M'
          | 'PT5M'
          | 'PT10M'
          | 'PT15M'
          | 'PT0.5H'
          | 'PT1H'
          | 'PT6H'
          | 'P1D'
          | 'P1W'
          | 'P1M'
          | 'P0.25Y'
          | 'P1Y'
          | '1969-12-28T00:00:00Z/P1W'
          | '1969-12-29T00:00:00Z/P1W'
          | 'P1W/1970-01-03T00:00:00Z'
          | 'P1W/1970-01-04T00:00:00Z'
          | undefined
        time_range_endpoints?: { [x: string]: unknown }[] | undefined
        where?: string | undefined
      }
    | undefined
  filters?: (ChartDataFilter[] | null) | undefined
  granularity?: (string | null) | undefined
  granularity_sqla?: (string | null) | undefined
  groupby?: (string[] | null) | undefined
  having?: (string | null) | undefined
  having_filters?: (ChartDataFilter[] | null) | undefined
  is_rowcount?: (boolean | null) | undefined
  is_timeseries?: (boolean | null) | undefined
  metrics?: ({ [x: string]: unknown }[] | null) | undefined
  order_desc?: (boolean | null) | undefined
  orderby?: ({ [x: string]: unknown }[] | null) | undefined
  post_processing?:
    | (
        | {
            operation:
              | 'aggregate'
              | 'boxplot'
              | 'contribution'
              | 'cum'
              | 'geodetic_parse'
              | 'geohash_decode'
              | 'geohash_encode'
              | 'pivot'
              | 'prophet'
              | 'rolling'
              | 'select'
              | 'sort'
              | 'diff'
              | 'compare'
            options?: { [x: string]: unknown } | undefined
          }[]
        | null
      )
    | undefined
  result_type?: ({ [x: string]: unknown } | null) | undefined
  row_limit?: (number | null) | undefined
  row_offset?: (number | null) | undefined
  time_offsets?: (string[] | null) | undefined
  time_range?: (string | null) | undefined
  time_shift?: (string | null) | undefined
  timeseries_limit?: (number | null) | undefined
  timeseries_limit_metric?: ({ [x: string]: unknown } | null) | undefined
  url_params?: ({ [x: string]: string } | null) | undefined
  where?: (string | null) | undefined
}
type ChartDataQueryContextSchema = {
  datasource?: ChartDataDatasource | undefined
  force?: boolean | undefined
  queries?: ChartDataQueryObject[] | undefined
  result_format?: { [x: string]: unknown } | undefined
  result_type?: { [x: string]: unknown } | undefined
}
type ChartDataResponseResult = {
  annotation_data?: ({ [x: string]: string }[] | null) | undefined
  applied_filters?: { [x: string]: unknown }[] | undefined
  cache_key: string | null
  cache_timeout: number | null
  cached_dttm: string | null
  data?: { [x: string]: unknown }[] | undefined
  error?: (string | null) | undefined
  is_cached: boolean
  query: string
  rejected_filters?: { [x: string]: unknown }[] | undefined
  rowcount?: number | undefined
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
}
type ChartDataResponseSchema = { result?: ChartDataResponseResult[] | undefined }
type ChartDataAsyncResponseSchema = {
  channel_id?: string | undefined
  job_id?: string | undefined
  result_url?: string | undefined
  status?: string | undefined
  user_id?: (string | null) | undefined
}
type GetExportIdsSchema = number[]
type GetFavStarIdsSchema2 = number[]
type ChartFavStarResponseResult = { id?: number | undefined; value?: boolean | undefined }
type GetFavStarIdsSchema = { result?: ChartFavStarResponseResult[] | undefined }
type Meta9 = { dashboard_title?: (string | null) | undefined; id?: number | undefined }
type Meta10 = { first_name: string; id?: number | undefined; last_name: string; username: string }
type ChartRestApiGet = {
  cache_timeout?: (number | null) | undefined
  dashboards?: Meta9 | undefined
  description?: (string | null) | undefined
  owners?: Meta10 | undefined
  params?: (string | null) | undefined
  query_context?: (string | null) | undefined
  slice_name?: (string | null) | undefined
  viz_type?: (string | null) | undefined
}
type ChartRestApiPut = {
  cache_timeout?: (number | null) | undefined
  dashboards?: number[] | undefined
  datasource_id?: (number | null) | undefined
  datasource_type?: 'druid' | 'table' | 'view' | undefined
  description?: (string | null) | undefined
  owners?: number[] | undefined
  params?: (string | null) | undefined
  query_context?: (string | null) | undefined
  slice_name?: (string | null) | undefined
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
}
type Meta12 = {
  active?: (boolean | null) | undefined
  changed_on?: (string | null) | undefined
  created_on?: (string | null) | undefined
  email: string
  fail_login_count?: (number | null) | undefined
  first_name: string
  id?: number | undefined
  last_login?: (string | null) | undefined
  last_name: string
  login_count?: (number | null) | undefined
  password?: (string | null) | undefined
  username: string
}
type Meta11 = { first_name: string; id?: number | undefined; last_name: string }
type CssTemplateRestApiGetList = {
  changed_by?: Meta12 | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: Meta11 | undefined
  created_on?: (string | null) | undefined
  css?: (string | null) | undefined
  id?: number | undefined
  template_name?: (string | null) | undefined
}
type CssTemplateRestApiPost = {
  css?: (string | null) | undefined
  template_name?: (string | null) | undefined
}
type Meta13 = { first_name: string; id?: number | undefined; last_name: string }
type CssTemplateRestApiGet = {
  created_by?: Meta13 | undefined
  css?: (string | null) | undefined
  id?: number | undefined
  template_name?: (string | null) | undefined
}
type CssTemplateRestApiPut = {
  css?: (string | null) | undefined
  template_name?: (string | null) | undefined
}
type Meta15 = { first_name: string; id?: number | undefined; last_name: string; username: string }
type Meta14 = { first_name: string; id?: number | undefined; last_name: string }
type Meta17 = { first_name: string; id?: number | undefined; last_name: string; username: string }
type Meta16 = { id?: number | undefined; name: string }
type DashboardRestApiGetList = {
  changed_by?: Meta15 | undefined
  changed_by_name?: { [x: string]: unknown } | undefined
  changed_by_url?: { [x: string]: unknown } | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  changed_on_utc?: { [x: string]: unknown } | undefined
  created_by?: Meta14 | undefined
  css?: (string | null) | undefined
  dashboard_title?: (string | null) | undefined
  id?: number | undefined
  json_metadata?: (string | null) | undefined
  owners?: Meta17 | undefined
  position_json?: (string | null) | undefined
  published?: (boolean | null) | undefined
  roles?: Meta16 | undefined
  slug?: (string | null) | undefined
  status?: { [x: string]: unknown } | undefined
  thumbnail_url?: { [x: string]: unknown } | undefined
  url?: { [x: string]: unknown } | undefined
}
type DashboardRestApiPost = {
  css?: string | undefined
  dashboard_title?: (string | null) | undefined
  json_metadata?: string | undefined
  owners?: number[] | undefined
  position_json?: string | undefined
  published?: boolean | undefined
  roles?: number[] | undefined
  slug?: (string | null) | undefined
}
type User = {
  first_name?: string | undefined
  id?: number | undefined
  last_name?: string | undefined
  username?: string | undefined
}
type Roles = { id?: number | undefined; name?: string | undefined }
type DashboardGetResponseSchema = {
  changed_by?: User | undefined
  changed_by_name?: string | undefined
  changed_by_url?: string | undefined
  changed_on?: string | undefined
  changed_on_delta_humanized?: string | undefined
  charts?: string[] | undefined
  css?: string | undefined
  dashboard_title?: string | undefined
  id?: number | undefined
  json_metadata?: string | undefined
  owners?: User[] | undefined
  position_json?: string | undefined
  published?: boolean | undefined
  roles?: Roles[] | undefined
  slug?: string | undefined
  table_names?: string | undefined
  thumbnail_url?: string | undefined
  url?: string | undefined
}
type ChartEntityResponseSchema = {
  cache_timeout?: number | undefined
  changed_on?: string | undefined
  datasource?: string | undefined
  description?: string | undefined
  description_markeddown?: string | undefined
  form_data?: { [x: string]: unknown } | undefined
  modified?: string | undefined
  slice_id?: number | undefined
  slice_name?: string | undefined
  slice_url?: string | undefined
}
type Database = {
  allow_multi_schema_metadata_fetch?: boolean | undefined
  allows_cost_estimate?: boolean | undefined
  allows_subquery?: boolean | undefined
  allows_virtual_table_explore?: boolean | undefined
  backend?: string | undefined
  explore_database_id?: number | undefined
  id?: number | undefined
  name?: string | undefined
}
type DashboardDatasetSchema = {
  cache_timeout?: number | undefined
  column_formats?: { [x: string]: unknown } | undefined
  column_types?: number[] | undefined
  columns?: { [x: string]: unknown }[] | undefined
  database?: Database | undefined
  datasource_name?: string | undefined
  default_endpoint?: string | undefined
  edit_url?: string | undefined
  fetch_values_predicate?: string | undefined
  filter_select?: boolean | undefined
  filter_select_enabled?: boolean | undefined
  granularity_sqla?: string[][] | undefined
  health_check_message?: string | undefined
  id?: number | undefined
  is_sqllab_view?: boolean | undefined
  main_dttm_col?: string | undefined
  metrics?: { [x: string]: unknown }[] | undefined
  name?: string | undefined
  offset?: number | undefined
  order_by_choices?: string[][] | undefined
  owners?: number[] | undefined
  params?: string | undefined
  perm?: string | undefined
  schema?: string | undefined
  select_star?: string | undefined
  sql?: string | undefined
  table_name?: string | undefined
  template_params?: string | undefined
  time_grain_sqla?: string[][] | undefined
  type?: string | undefined
  uid?: string | undefined
  verbose_map?: { [x: string]: string } | undefined
}
type DashboardRestApiPut = {
  css?: (string | null) | undefined
  dashboard_title?: (string | null) | undefined
  json_metadata?: (string | null) | undefined
  owners?: (number | null)[] | undefined
  position_json?: (string | null) | undefined
  published?: (boolean | null) | undefined
  roles?: (number | null)[] | undefined
  slug?: (string | null) | undefined
}
type ThumbnailQuerySchema = { force?: boolean | undefined }
type Meta18 = { first_name: string; last_name: string }
type DatabaseRestApiGetList = {
  allow_csv_upload?: (boolean | null) | undefined
  allow_ctas?: (boolean | null) | undefined
  allow_cvas?: (boolean | null) | undefined
  allow_dml?: (boolean | null) | undefined
  allow_multi_schema_metadata_fetch?: (boolean | null) | undefined
  allow_run_async?: (boolean | null) | undefined
  allows_cost_estimate?: { [x: string]: unknown } | undefined
  allows_subquery?: { [x: string]: unknown } | undefined
  allows_virtual_table_explore?: { [x: string]: unknown } | undefined
  backend?: { [x: string]: unknown } | undefined
  changed_on?: (string | null) | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: Meta18 | undefined
  database_name: string
  explore_database_id?: { [x: string]: unknown } | undefined
  expose_in_sqllab?: (boolean | null) | undefined
  extra?: (string | null) | undefined
  force_ctas_schema?: (string | null) | undefined
  id?: number | undefined
}
type DatabaseRestApiPost = {
  allow_csv_upload?: boolean | undefined
  allow_ctas?: boolean | undefined
  allow_cvas?: boolean | undefined
  allow_dml?: boolean | undefined
  allow_multi_schema_metadata_fetch?: boolean | undefined
  allow_run_async?: boolean | undefined
  cache_timeout?: (number | null) | undefined
  configuration_method?: { [x: string]: unknown } | undefined
  database_name: string
  encrypted_extra?: (string | null) | undefined
  engine?: (string | null) | undefined
  expose_in_sqllab?: boolean | undefined
  extra?: string | undefined
  force_ctas_schema?: (string | null) | undefined
  impersonate_user?: boolean | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  server_cert?: (string | null) | undefined
  sqlalchemy_uri?: string | undefined
}
type DatabaseTestConnectionSchema = {
  configuration_method?: { [x: string]: unknown } | undefined
  database_name?: (string | null) | undefined
  encrypted_extra?: (string | null) | undefined
  engine?: (string | null) | undefined
  extra?: string | undefined
  impersonate_user?: boolean | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  server_cert?: (string | null) | undefined
  sqlalchemy_uri?: string | undefined
}
type DatabaseValidateParametersSchema = {
  configuration_method: { [x: string]: unknown }
  database_name?: (string | null) | undefined
  encrypted_extra?: (string | null) | undefined
  engine: string
  extra?: string | undefined
  impersonate_user?: boolean | undefined
  parameters?: { [x: string]: { [x: string]: unknown } | null } | undefined
  server_cert?: (string | null) | undefined
}
type DatabaseRestApiGet = {
  allow_csv_upload?: (boolean | null) | undefined
  allow_ctas?: (boolean | null) | undefined
  allow_cvas?: (boolean | null) | undefined
  allow_dml?: (boolean | null) | undefined
  allow_multi_schema_metadata_fetch?: (boolean | null) | undefined
  allow_run_async?: (boolean | null) | undefined
  backend?: { [x: string]: unknown } | undefined
  cache_timeout?: (number | null) | undefined
  configuration_method?: (string | null) | undefined
  database_name: string
  encrypted_extra?: (string | null) | undefined
  expose_in_sqllab?: (boolean | null) | undefined
  extra?: (string | null) | undefined
  force_ctas_schema?: (string | null) | undefined
  id?: number | undefined
  impersonate_user?: (boolean | null) | undefined
  parameters?: { [x: string]: unknown } | undefined
  server_cert?: (string | null) | undefined
  sqlalchemy_uri: string
}
type DatabaseRestApiPut = {
  allow_csv_upload?: boolean | undefined
  allow_ctas?: boolean | undefined
  allow_cvas?: boolean | undefined
  allow_dml?: boolean | undefined
  allow_multi_schema_metadata_fetch?: boolean | undefined
  allow_run_async?: boolean | undefined
  cache_timeout?: (number | null) | undefined
  configuration_method?: { [x: string]: unknown } | undefined
  database_name?: (string | null) | undefined
  encrypted_extra?: (string | null) | undefined
  engine?: (string | null) | undefined
  expose_in_sqllab?: boolean | undefined
  extra?: string | undefined
  force_ctas_schema?: (string | null) | undefined
  impersonate_user?: boolean | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  server_cert?: (string | null) | undefined
  sqlalchemy_uri?: string | undefined
}
type DatabaseFunctionNamesResponse = { function_names?: string[] | undefined }
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
type DatabaseRelatedObjectsResponse = {
  charts?: DatabaseRelatedCharts | undefined
  dashboards?: DatabaseRelatedDashboards | undefined
}
type DatabaseSchemasQuerySchema = { force?: boolean | undefined }
type SchemasResponseSchema = { result?: string[] | undefined }
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
type Meta19 = { first_name: string; username: string }
type Meta21 = { database_name: string; id?: number | undefined }
type Meta20 = { first_name: string; id?: number | undefined; last_name: string; username: string }
type DatasetRestApiGetList = {
  changed_by?: Meta19 | undefined
  changed_by_name?: { [x: string]: unknown } | undefined
  changed_by_url?: { [x: string]: unknown } | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  changed_on_utc?: { [x: string]: unknown } | undefined
  database: Meta21
  default_endpoint?: (string | null) | undefined
  explore_url?: { [x: string]: unknown } | undefined
  extra?: (string | null) | undefined
  id?: number | undefined
  kind?: { [x: string]: unknown } | undefined
  owners?: Meta20 | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  table_name: string
}
type DatasetRestApiPost = {
  database: number
  owners?: number[] | undefined
  schema?: string | undefined
  table_name: string
}
type DistinctResultResponse = { text?: string | undefined }
type DistincResponseSchema = {
  count?: number | undefined
  result?: DistinctResultResponse[] | undefined
}
type Meta22 = {
  changed_on?: (string | null) | undefined
  column_name: string
  created_on?: (string | null) | undefined
  description?: (string | null) | undefined
  expression?: (string | null) | undefined
  filterable?: (boolean | null) | undefined
  groupby?: (boolean | null) | undefined
  id?: number | undefined
  is_active?: (boolean | null) | undefined
  is_dttm?: (boolean | null) | undefined
  python_date_format?: (string | null) | undefined
  type?: (string | null) | undefined
  type_generic?: { [x: string]: unknown } | undefined
  uuid?: (string | null) | undefined
  verbose_name?: (string | null) | undefined
}
type Meta23 = { database_name: string; id?: number | undefined }
type Meta25 = {
  changed_on?: (string | null) | undefined
  created_on?: (string | null) | undefined
  d3format?: (string | null) | undefined
  description?: (string | null) | undefined
  expression: string
  extra?: (string | null) | undefined
  id?: number | undefined
  metric_name: string
  metric_type?: (string | null) | undefined
  uuid?: (string | null) | undefined
  verbose_name?: (string | null) | undefined
  warning_text?: (string | null) | undefined
}
type Meta24 = { first_name: string; id?: number | undefined; last_name: string; username: string }
type DatasetRestApiGet = {
  cache_timeout?: (number | null) | undefined
  columns: Meta22
  database: Meta23
  datasource_type?: { [x: string]: unknown } | undefined
  default_endpoint?: (string | null) | undefined
  description?: (string | null) | undefined
  extra?: (string | null) | undefined
  fetch_values_predicate?: (string | null) | undefined
  filter_select_enabled?: (boolean | null) | undefined
  id?: number | undefined
  is_sqllab_view?: (boolean | null) | undefined
  main_dttm_col?: (string | null) | undefined
  metrics: Meta25
  offset?: (number | null) | undefined
  owners?: Meta24 | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  table_name: string
  template_params?: (string | null) | undefined
  url?: { [x: string]: unknown } | undefined
}
type DatasetColumnsPut = {
  column_name: string
  description?: (string | null) | undefined
  expression?: (string | null) | undefined
  filterable?: boolean | undefined
  groupby?: boolean | undefined
  id?: number | undefined
  is_active?: boolean | undefined
  is_dttm?: boolean | undefined
  python_date_format?: (string | null) | undefined
  type?: string | undefined
  uuid?: (string | null) | undefined
  verbose_name?: (string | null) | undefined
}
type DatasetMetricsPut = {
  d3format?: (string | null) | undefined
  description?: (string | null) | undefined
  expression: string
  id?: number | undefined
  metric_name: string
  metric_type?: (string | null) | undefined
  warning_text?: (string | null) | undefined
}
type DatasetRestApiPut = {
  cache_timeout?: (number | null) | undefined
  columns?: DatasetColumnsPut[] | undefined
  database_id?: number | undefined
  default_endpoint?: (string | null) | undefined
  description?: (string | null) | undefined
  extra?: (string | null) | undefined
  fetch_values_predicate?: (string | null) | undefined
  filter_select_enabled?: (boolean | null) | undefined
  is_sqllab_view?: (boolean | null) | undefined
  main_dttm_col?: (string | null) | undefined
  metrics?: DatasetMetricsPut[] | undefined
  offset?: (number | null) | undefined
  owners?: number[] | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  table_name?: (string | null) | undefined
  template_params?: (string | null) | undefined
}
type DatasetRelatedChart = {
  id?: number | undefined
  slice_name?: string | undefined
  viz_type?: string | undefined
}
type DatasetRelatedCharts = {
  count?: number | undefined
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
  result?: DatasetRelatedDashboard[] | undefined
}
type DatasetRelatedObjectsResponse = {
  charts?: DatasetRelatedCharts | undefined
  dashboards?: DatasetRelatedDashboards | undefined
}
type Meta42 = { username: string }
type LogRestApiGetList = {
  action?: (string | null) | undefined
  dashboard_id?: (number | null) | undefined
  dttm?: (string | null) | undefined
  duration_ms?: (number | null) | undefined
  json?: (string | null) | undefined
  referrer?: (string | null) | undefined
  slice_id?: (number | null) | undefined
  user?: Meta42 | undefined
  user_id?: (number | null) | undefined
}
type LogRestApiPost = { id?: number | undefined }
type Meta43 = { username: string }
type LogRestApiGet = {
  action?: (string | null) | undefined
  dashboard_id?: (number | null) | undefined
  dttm?: (string | null) | undefined
  duration_ms?: (number | null) | undefined
  json?: (string | null) | undefined
  referrer?: (string | null) | undefined
  slice_id?: (number | null) | undefined
  user?: Meta43 | undefined
  user_id?: (number | null) | undefined
}
type Meta27 = { database_name: string }
type Meta26 = { first_name: string; id?: number | undefined; last_name: string; username: string }
type QueryRestApiGetList = {
  changed_on?: (string | null) | undefined
  database: Meta27
  end_time?: (number | null) | undefined
  executed_sql?: (string | null) | undefined
  id?: number | undefined
  rows?: (number | null) | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  sql_tables?: { [x: string]: unknown } | undefined
  start_time?: (number | null) | undefined
  status?: (string | null) | undefined
  tab_name?: (string | null) | undefined
  tmp_table_name?: (string | null) | undefined
  tracking_url?: (string | null) | undefined
  user?: Meta26 | undefined
}
type Meta28 = { id?: number | undefined }
type QueryRestApiGet = {
  changed_on?: (string | null) | undefined
  client_id: string
  database: Meta28
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
  tracking_url?: (string | null) | undefined
}
type Meta34 = { first_name: string; last_name: string }
type Meta33 = { first_name: string; last_name: string }
type Meta36 = { first_name: string; id?: number | undefined; last_name: string }
type Meta35 = { id?: number | undefined; type: string }
type ReportScheduleRestApiGetList = {
  active?: (boolean | null) | undefined
  changed_by?: Meta34 | undefined
  changed_on?: (string | null) | undefined
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: Meta33 | undefined
  created_on?: (string | null) | undefined
  creation_method?: (string | null) | undefined
  crontab: string
  crontab_humanized?: { [x: string]: unknown } | undefined
  description?: (string | null) | undefined
  id?: number | undefined
  last_eval_dttm?: (string | null) | undefined
  last_state?: (string | null) | undefined
  name: string
  owners?: Meta36 | undefined
  recipients: Meta35
  timezone?: string | undefined
  type: string
}
type ReportRecipientConfigJSON = { target?: string | undefined }
type ReportRecipient = {
  recipient_config_json?: ReportRecipientConfigJSON | undefined
  type: 'Email' | 'Slack'
}
type ValidatorConfigJSON = {
  op?: '<' | '<=' | '>' | '>=' | '==' | '!=' | undefined
  threshold?: number | undefined
}
type ReportScheduleRestApiPost = {
  active?: boolean | undefined
  chart?: (number | null) | undefined
  context_markdown?: (string | null) | undefined
  creation_method?: { [x: string]: unknown } | undefined
  crontab: string
  dashboard?: (number | null) | undefined
  database?: number | undefined
  description?: (string | null) | undefined
  grace_period?: number | undefined
  log_retention?: number | undefined
  name: string
  owners?: number[] | undefined
  recipients?: ReportRecipient[] | undefined
  report_format?: 'PNG' | 'CSV' | 'TEXT' | undefined
  sql?: string | undefined
  timezone?: string | undefined
  type: 'Alert' | 'Report'
  validator_config_json?: ValidatorConfigJSON | undefined
  validator_type?: 'not null' | 'operator' | undefined
  working_timeout?: number | undefined
}
type Meta40 = {
  id?: number | undefined
  slice_name?: (string | null) | undefined
  viz_type?: (string | null) | undefined
}
type Meta41 = { dashboard_title?: (string | null) | undefined; id?: number | undefined }
type Meta37 = { database_name: string; id?: number | undefined }
type Meta39 = { first_name: string; id?: number | undefined; last_name: string }
type Meta38 = {
  id?: number | undefined
  recipient_config_json?: (string | null) | undefined
  type: string
}
type ReportScheduleRestApiGet = {
  active?: (boolean | null) | undefined
  chart?: Meta40 | undefined
  context_markdown?: (string | null) | undefined
  creation_method?: (string | null) | undefined
  crontab: string
  dashboard?: Meta41 | undefined
  database?: Meta37 | undefined
  description?: (string | null) | undefined
  grace_period?: (number | null) | undefined
  id?: number | undefined
  last_eval_dttm?: (string | null) | undefined
  last_state?: (string | null) | undefined
  last_value?: (number | null) | undefined
  last_value_row_json?: (string | null) | undefined
  log_retention?: (number | null) | undefined
  name: string
  owners?: Meta39 | undefined
  recipients: Meta38
  report_format?: (string | null) | undefined
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
  creation_method?: ({ [x: string]: unknown } | null) | undefined
  crontab?: string | undefined
  dashboard?: (number | null) | undefined
  database?: number | undefined
  description?: (string | null) | undefined
  grace_period?: number | undefined
  log_retention?: number | undefined
  name?: string | undefined
  owners?: number[] | undefined
  recipients?: ReportRecipient[] | undefined
  report_format?: 'PNG' | 'CSV' | 'TEXT' | undefined
  sql?: (string | null) | undefined
  timezone?: string | undefined
  type?: 'Alert' | 'Report' | undefined
  validator_config_json?: ValidatorConfigJSON | undefined
  validator_type?: 'not null' | 'operator' | undefined
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
type Meta29 = { first_name: string; id?: number | undefined; last_name: string }
type Meta30 = { database_name: string; id?: number | undefined }
type SavedQueryRestApiGetList = {
  changed_on_delta_humanized?: { [x: string]: unknown } | undefined
  created_by?: Meta29 | undefined
  created_on?: (string | null) | undefined
  database?: Meta30 | undefined
  db_id?: (number | null) | undefined
  description?: (string | null) | undefined
  extra?: { [x: string]: unknown } | undefined
  id?: number | undefined
  label?: (string | null) | undefined
  last_run_delta_humanized?: { [x: string]: unknown } | undefined
  rows?: (number | null) | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  sql_tables?: { [x: string]: unknown } | undefined
}
type SavedQueryRestApiPost = {
  db_id?: (number | null) | undefined
  description?: (string | null) | undefined
  label?: (string | null) | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
}
type Meta31 = { first_name: string; id?: number | undefined; last_name: string }
type Meta32 = { database_name: string; id?: number | undefined }
type SavedQueryRestApiGet = {
  created_by?: Meta31 | undefined
  database?: Meta32 | undefined
  description?: (string | null) | undefined
  id?: number | undefined
  label?: (string | null) | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
  sql_tables?: { [x: string]: unknown } | undefined
}
type SavedQueryRestApiPut = {
  db_id?: (number | null) | undefined
  description?: (string | null) | undefined
  label?: (string | null) | undefined
  schema?: (string | null) | undefined
  sql?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/annotation_layer/': {
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
    '/annotation_layer/_info': {
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
    '/annotation_layer/related/:column_name': {
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
    '/annotation_layer/:pk': {
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
    '/annotation_layer/:pk/annotation/': {
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
    '/annotation_layer/:pk/annotation/:annotation_id': {
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
    '/async_event/': {
      $get:
        | {
            input: { query: { last_id?: string | undefined } }
            output: {
              result?:
                | {
                    channel_id?: string | undefined
                    errors?: { [x: string]: unknown }[] | undefined
                    id?: string | undefined
                    job_id?: string | undefined
                    result_url?: string | undefined
                    status?: string | undefined
                    user_id?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { last_id?: string | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { last_id?: string | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cachekey/invalidate': {
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
    '/chart/': {
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
              result?: ChartRestApiGetList[] | undefined
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
    '/chart/_info': {
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
    '/chart/data': {
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
            status: 500
          }
    }
  } & {
    '/chart/data/:cache_key': {
      $get:
        | {
            input: { param: { cache_key: string } }
            output: ChartDataResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cache_key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cache_key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cache_key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cache_key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { cache_key: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/chart/export/': {
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
    '/chart/favorite_status/': {
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
    '/chart/import/': {
      $post:
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/chart/related/:column_name': {
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
    '/chart/:pk': {
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
              result?: ChartRestApiGet | undefined
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
            input: { param: { pk: number } } & { json: ChartRestApiPut }
            output: { id?: number | undefined; result?: ChartRestApiPut | undefined }
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
    '/chart/:pk/cache_screenshot/': {
      $get:
        | {
            input: { param: { pk: number } } & { query: { q?: ScreenshotQuerySchema | undefined } }
            output: ChartCacheScreenshotResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & { query: { q?: ScreenshotQuerySchema | undefined } }
            output: {}
            outputFormat: string
            status: 302
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
    '/chart/:pk/data/': {
      $get:
        | {
            input: { param: { pk: number } } & {
              query: { format?: string | undefined; type?: string | undefined }
            }
            output: ChartDataResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & {
              query: { format?: string | undefined; type?: string | undefined }
            }
            output: ChartDataAsyncResponseSchema
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { pk: number } } & {
              query: { format?: string | undefined; type?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & {
              query: { format?: string | undefined; type?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & {
              query: { format?: string | undefined; type?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/chart/:pk/screenshot/:digest/': {
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
    '/chart/:pk/thumbnail/:digest/': {
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
    '/css_template/': {
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
    '/css_template/_info': {
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
    '/css_template/related/:column_name': {
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
    '/css_template/:pk': {
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
    '/dashboard/': {
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
        | { input: { json: DashboardRestApiPost }; output: {}; outputFormat: string; status: 302 }
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
    '/dashboard/_info': {
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
    '/dashboard/export/': {
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
    '/dashboard/favorite_status/': {
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
    '/dashboard/import/': {
      $post:
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboard/related/:column_name': {
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
    '/dashboard/:id_or_slug': {
      $get:
        | {
            input: { param: { id_or_slug: string } }
            output: { result?: DashboardGetResponseSchema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_slug: string } }
            output: {}
            outputFormat: string
            status: 302
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
            status: 404
          }
    }
  } & {
    '/dashboard/:id_or_slug/charts': {
      $get:
        | {
            input: { param: { id_or_slug: string } }
            output: { result?: ChartEntityResponseSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_slug: string } }
            output: {}
            outputFormat: string
            status: 302
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
            status: 404
          }
    }
  } & {
    '/dashboard/:id_or_slug/datasets': {
      $get:
        | {
            input: { param: { id_or_slug: string } }
            output: { result?: DashboardDatasetSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id_or_slug: string } }
            output: {}
            outputFormat: string
            status: 302
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
            status: 404
          }
    }
  } & {
    '/dashboard/:pk': {
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
            output: { id?: number | undefined; result?: DashboardRestApiPut | undefined }
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
    '/dashboard/:pk/thumbnail/:digest/': {
      $get:
        | {
            input: { param: { pk: number; digest: string } } & {
              query: { q?: ThumbnailQuerySchema | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { pk: number; digest: string } } & {
              query: { q?: ThumbnailQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { pk: number; digest: string } } & {
              query: { q?: ThumbnailQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; digest: string } } & {
              query: { q?: ThumbnailQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; digest: string } } & {
              query: { q?: ThumbnailQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; digest: string } } & {
              query: { q?: ThumbnailQuerySchema | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/database/': {
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
        | { input: { json: DatabaseRestApiPost }; output: {}; outputFormat: string; status: 302 }
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
    '/database/_info': {
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
    '/database/available/': {
      $get:
        | {
            input: {}
            output: {
              available_drivers?: string[] | undefined
              default_driver?: string | undefined
              engine?: string | undefined
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
    '/database/export/': {
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
    '/database/import/': {
      $post:
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/database/test_connection': {
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
    '/database/validate_parameters': {
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
    '/database/:pk': {
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
              result?: DatabaseRestApiGet | undefined
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
    '/database/:pk/function_names/': {
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
    '/database/:pk/related_objects/': {
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
    '/database/:pk/schemas/': {
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
    '/database/:pk/select_star/:table_name/': {
      $get:
        | {
            input: { param: { pk: number; table_name: string } } & {
              query: { schema_name: string }
            }
            output: SelectStarResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number; table_name: string } } & {
              query: { schema_name: string }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number; table_name: string } } & {
              query: { schema_name: string }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number; table_name: string } } & {
              query: { schema_name: string }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number; table_name: string } } & {
              query: { schema_name: string }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number; table_name: string } } & {
              query: { schema_name: string }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/database/:pk/select_star/:table_name/:schema_name/': {
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
    '/database/:pk/table/:table_name/:schema_name/': {
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
    '/dataset/': {
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
    '/dataset/_info': {
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
    '/dataset/distinct/:column_name': {
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
    '/dataset/export/': {
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
    '/dataset/import/': {
      $post:
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dataset/related/:column_name': {
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
    '/dataset/:pk': {
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
              result?: DatasetRestApiGet | undefined
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
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { json: DatasetRestApiPut }
            output: { id?: number | undefined; result?: DatasetRestApiPut | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pk: number } } & {
              query: { override_columns?: boolean | undefined }
            } & { json: DatasetRestApiPut }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dataset/:pk/column/:column_id': {
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
    '/dataset/:pk/metric/:metric_id': {
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
    '/dataset/:pk/refresh': {
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
    '/dataset/:pk/related_objects': {
      $get:
        | {
            input: { param: { pk: number } }
            output: DatasetRelatedObjectsResponse
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
    '/log/': {
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
    '/log/:pk': {
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
    '/menu/': {
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
    '/openapi/:version/_openapi': {
      $get:
        | {
            input: { param: { version: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { version: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { version: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/query/': {
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
    '/query/distinct/:column_name': {
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
    '/query/related/:column_name': {
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
    '/query/:pk': {
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
    '/report/': {
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
            status: 500
          }
    }
  } & {
    '/report/_info': {
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
    '/report/related/:column_name': {
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
    '/report/:pk': {
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
            status: 500
          }
    }
  } & {
    '/report/:pk/log/': {
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
    '/report/:pk/log/:log_id': {
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
    '/saved_query/': {
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
    '/saved_query/_info': {
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
    '/saved_query/distinct/:column_name': {
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
    '/saved_query/export/': {
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
    '/saved_query/import/': {
      $post:
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                formData?: File | undefined
                overwrite?: boolean | undefined
                passwords?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/saved_query/related/:column_name': {
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
    '/saved_query/:pk': {
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
    '/security/csrf_token/': {
      $get:
        | { input: {}; output: { result?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/security/login': {
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
    '/security/refresh': {
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
  },
  '/'
>
export default routes
