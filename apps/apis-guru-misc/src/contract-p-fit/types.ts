type AuthModel = { password: string; username: string }
type TokenReplyModel = { authentication_token: string }
type TokenRoleModel = { document_id?: string | undefined; inbox?: string | undefined; role: string }
type APIKeyModel = {
  active: boolean
  expire_at?: string | undefined
  roles?: TokenRoleModel[] | undefined
  token: string
  user: string
}
type APIKeyRequest = {
  active?: boolean | undefined
  expire_at?: string | undefined
  roles: TokenRoleModel[]
  user: string
}
type TokenModelBase = { roles?: TokenRoleModel[] | undefined; username: string }
type ResetPasswordModelPost = {
  new_password?: string | undefined
  token?: string | undefined
  user_name?: string | undefined
}
type RoutingAtom = {
  and_conditions?: { [x: string]: unknown } | undefined
  target?: string | undefined
}
type ConnectionModelGet = {
  event:
    | 'document_predict'
    | 'document_evaluate'
    | 'document_text'
    | 'document_split'
    | 'document_delete'
  integration: string
  routing?: RoutingAtom[] | undefined
  scope?: string | undefined
  what: 'original' | 'reply_to' | 'ready' | 'submit'
  id: string
}
type ConnectionModelPost = {
  event:
    | 'document_predict'
    | 'document_evaluate'
    | 'document_text'
    | 'document_split'
    | 'document_delete'
  integration: string
  routing?: RoutingAtom[] | undefined
  scope?: string | undefined
  what: 'original' | 'reply_to' | 'ready' | 'submit'
}
type ScopeModel = { id?: string | undefined; level?: string | undefined }
type DataRetentionAtomModel = {
  age?: number | undefined
  how?: 'FULL' | 'SOURCE_FILES' | undefined
  what?: 'ALL' | 'DONE' | undefined
}
type DataRetentionModel = {
  scope?: ScopeModel | undefined
  settings?: DataRetentionAtomModel[] | undefined
}
type DataRetentionModelPatch = { settings?: DataRetentionAtomModel[] | undefined }
type CustomAtom = { [x: string]: unknown }
type ExcelAtom = {
  add_automation_blockers?: boolean | undefined
  add_confidence?: boolean | undefined
  add_text?: boolean | undefined
  enable_key_value: boolean
  multiple_value_separator?: string | undefined
}
type FilterAtom = {
  end_date?: string | undefined
  list?: string[] | undefined
  start_date?: string | undefined
  type: 'project' | 'inbox' | 'document'
}
type CustomOutputPost = {
  custom?: CustomAtom | undefined
  excel?: ExcelAtom | undefined
  filter?: FilterAtom | undefined
}
type EnrichmentModelPost = { [x: string]: unknown }
type DocumentIds = { document_ids?: string[] | undefined }
type FilterOIdModelDoc = { $oid?: string | undefined }
type FilterOIdModel = { $oid?: string | undefined }
type FilterOIdListModel = { $in?: FilterOIdModel[] | undefined }
type FilterTimingsFieldModel = { timeFrom?: string | undefined; timeTo?: string | undefined }
type FilterTimeModel = {
  $gt?: string | undefined
  $gte?: string | undefined
  $lt?: string | undefined
  $lte?: string | undefined
}
type FilterTimingsModel = {
  done_time?: FilterTimeModel | undefined
  feedback_time?: FilterTimeModel | undefined
  receive_time?: FilterTimeModel | undefined
  review_start_time?: FilterTimeModel | undefined
  start_time?: FilterTimeModel | undefined
}
type FilterModel = {
  _id?: FilterOIdModelDoc | undefined
  inbox?: FilterOIdListModel | undefined
  timing_fields?: FilterTimingsFieldModel | undefined
  timings?: FilterTimingsModel | undefined
}
type AggregationPipelinePost = {
  filter?: FilterModel | undefined
  type?:
    | 'inbox'
    | 'get-todo-count'
    | 'get-todo-escalated-count'
    | 'get-oldest-todo'
    | 'get-oldest-escalated-todo'
    | 'get-finished-me'
    | 'get-finished-team'
    | 'next-document'
    | 'prev-document'
    | 'get-next-uuid'
    | 'avg-time'
    | undefined
}
type VersionCompare = { cmp_version_1: string; cmp_version_2: string; name: string }
type EvaluationAtom = {
  gold: string
  text: string
  textual_coord: number[]
  visual_coord?: number[] | undefined
}
type Annotations = { string?: EvaluationAtom[] | undefined }
type Cells = { string?: EvaluationAtom | undefined }
type Lines = { string?: Cells[] | undefined }
type SectionAtom = {
  confidence?: number | undefined
  document_type?: string | undefined
  format?: string | undefined
  page: number
}
type VersionPost = {
  annotations?: Annotations | undefined
  cmp_version?: string | undefined
  evaluate?: boolean | undefined
  lines?: Lines | undefined
  name?: string | undefined
  sections?: SectionAtom[] | undefined
}
type ColumnBound = { field_name?: string | undefined; x_bounds?: number[] | undefined }
type TableAnnotationPost = {
  bottom_right?: number[] | undefined
  columns?: ColumnBound[] | undefined
  first_row_y_bounds?: number[] | undefined
  header_bottom_y?: number | undefined
  name?: string | undefined
  top_left?: number[] | undefined
}
type StateModelGet = {
  by?: string | undefined
  since?: string | undefined
  value?: boolean | undefined
}
type FileModelGet = {
  embedded_attachment?: boolean | undefined
  filehash?: string | undefined
  filename?: string | undefined
  leaf?: boolean | undefined
  page?: number | undefined
  page_count?: number | undefined
}
type StatusDataModel = {
  archived?: boolean | undefined
  data?: boolean | undefined
  escalate?: boolean | undefined
  feedback?: boolean | undefined
  lock?: boolean | undefined
  ready_accepted?: boolean | undefined
  ready_attempts?: number | undefined
  reject?: boolean | undefined
  reject_accepted?: boolean | undefined
  reject_attempts?: number | undefined
  sampling?: boolean | undefined
  submit_accepted?: boolean | undefined
  submit_attempts?: number | undefined
  success?: boolean | undefined
}
type TimingsModelGet = {
  done_time?: string | undefined
  feedback_time?: string | undefined
  processing_period?: number | undefined
  receive_time?: string | undefined
  start_time?: string | undefined
  submit_time?: string | undefined
}
type DocumentModelGet = {
  escalate?: StateModelGet | undefined
  feedback?: { [x: string]: unknown } | undefined
  files?: FileModelGet[] | undefined
  flag_for_review?: boolean | undefined
  id: string
  inbox: string
  last_version?: string | undefined
  lock?: StateModelGet | undefined
  meta_information?: { [x: string]: unknown } | undefined
  opened_by?: StateModelGet[] | undefined
  original_filename: string
  page_count: number
  prediction?: { [x: string]: unknown } | undefined
  reject?: StateModelGet | undefined
  status_data?: StatusDataModel | undefined
  submitted?: StateModelGet | undefined
  timings?: TimingsModelGet | undefined
  usage_data?: { [x: string]: unknown } | undefined
  versions?: { [x: string]: unknown }[] | undefined
}
type StatusDataPost = {
  escalate?: StateModelGet | undefined
  last_version?: string | undefined
  lock?: StateModelGet | undefined
  opened_by?: StateModelGet | undefined
  reject?: StateModelGet | undefined
  status_data?: StatusDataModel | undefined
  submitted?: StateModelGet | undefined
  timings?: TimingsModelGet | undefined
}
type WorkflowModel = {
  graph?: { [x: string]: unknown } | undefined
  links?: { [x: string]: unknown } | undefined
  nodes?: { [x: string]: unknown } | undefined
}
type DocumentTypeModel = { display_name?: string | undefined; field_name: string }
type OptionModel = { active: boolean; display_name?: string | undefined; name: string }
type LabelModel = {
  category?: 'annotation' | 'tag' | 'separator' | 'computed' | undefined
  count_in_evaluation?: boolean | undefined
  description?: string | undefined
  display_name?: string | undefined
  field_name: string
  formula?: string | undefined
  initialized?: boolean | undefined
  is_library?: boolean | undefined
  mandatory?: boolean | undefined
  mandatory_if?: { [x: string]: unknown } | undefined
  multiple?: boolean | undefined
  options?: OptionModel[] | undefined
  scope?: 'document' | 'page' | 'section' | undefined
  type?:
    | 'string'
    | 'date'
    | 'integer'
    | 'float'
    | 'currency'
    | 'alphanumeric'
    | 'national_identification_number_be'
    | 'boolean'
    | 'datetime'
    | 'address'
    | undefined
  visible?: boolean | undefined
  visible_if?: { [x: string]: unknown } | undefined
}
type SectionModel = { name: string; page: number }
type TableModel = {
  collapsed?: boolean | undefined
  columns?: LabelModel[] | undefined
  contains_line_items?: boolean | undefined
  initialized?: boolean | undefined
  label?: string | undefined
  scope?: 'document' | 'page' | 'section' | undefined
}
type FormatModelPost = {
  display_name?: string | undefined
  document_types?: DocumentTypeModel[] | undefined
  labels: LabelModel[]
  name: string
  separators?: SectionModel[] | undefined
  table_types?: TableModel[] | undefined
}
type DocumentTypeModelGet = { document_types?: DocumentTypeModel[] | undefined }
type FormatModelPatch = {
  display_name?: string | undefined
  document_types?: DocumentTypeModel[] | undefined
  labels?: LabelModel[] | undefined
  name?: string | undefined
  separators?: SectionModel[] | undefined
  table_types?: TableModel[] | undefined
}
type FormatModelGet = {
  document_types?: DocumentTypeModel[] | undefined
  id: string
  labels?: LabelModel[] | undefined
  name?: string | undefined
  separators?: SectionModel[] | undefined
  table_types?: TableModel[] | undefined
}
type TagFieldModelGet = { tag_fields?: { [x: string]: unknown } | undefined }
type InboxModelGet = { name: string; project: string; id: string }
type InboxModelPost = { name: string; project: string }
type InboxModelPatch = { name?: string | undefined; project?: string | undefined }
type DocumentModelPaginated = {
  page?: number | undefined
  per_page?: number | undefined
  results?: DocumentModelGet[] | undefined
  total?: number | undefined
}
type IntegrationModelGet = {
  type?:
    | 'webhook'
    | 'dropbox'
    | 'office365'
    | 'email'
    | 'imap'
    | 'sftp'
    | 'smtp'
    | 'service_bus'
    | undefined
}
type KeyValyePairSettingsModel = {
  classification_cutoff?: number | undefined
  rule_config?: { [x: string]: unknown } | undefined
  splitting_cutoff?: number | undefined
  uer_pre_config?: { [x: string]: unknown } | undefined
}
type SpanDictModel = { '*'?: { [x: string]: string } | undefined }
type FieldSettingsModel = {
  default_value?: string | undefined
  expected_pattern?: string | undefined
  nested_field_patterns?: SpanDictModel | undefined
  override_default_patterns?: boolean | undefined
}
type FieldSettingsDictModel = { '*'?: { [x: string]: FieldSettingsModel } | undefined }
type TableExtractionSettingsModel = { field_settings?: FieldSettingsDictModel | undefined }
type PredictorModelGet = {
  blacklist?: { [x: string]: unknown } | undefined
  expected_values?: { [x: string]: unknown } | undefined
  fallback?: { [x: string]: unknown } | undefined
  key_value_pairs?: KeyValyePairSettingsModel | undefined
  table_extraction_settings?: TableExtractionSettingsModel | undefined
  whitelist?: { [x: string]: unknown } | undefined
  scope: string
}
type PredictorSettingModel = {
  blacklist?: { [x: string]: unknown } | undefined
  expected_values?: { [x: string]: unknown } | undefined
  fallback?: { [x: string]: unknown } | undefined
  key_value_pairs?: KeyValyePairSettingsModel | undefined
  table_extraction_settings?: TableExtractionSettingsModel | undefined
  whitelist?: { [x: string]: unknown } | undefined
}
type ProjectModelPost = {
  default_document_type?: string | undefined
  default_format?: string | undefined
  formats: string[]
  name: string
  split_into_sections: boolean
  sub_page_splitting: boolean
  timeout?: number | undefined
}
type ProjectModelPatch = {
  default_document_type?: string | undefined
  default_format?: string | undefined
  formats?: string[] | undefined
  name?: string | undefined
  split_into_sections?: boolean | undefined
  sub_page_splitting?: boolean | undefined
  timeout?: number | undefined
}
type AnnotationOptions = { add_text?: boolean | undefined; include?: boolean | undefined }
type SimpleInclude = { include?: boolean | undefined }
type EvaluationsOptions = { additional_column?: string | undefined; include?: boolean | undefined }
type FieldsInMetadata = {
  annotations?: string[] | undefined
  lines?: string[] | undefined
  meta_information?: string[] | undefined
}
type MetadataOptions = {
  columns?: string[] | undefined
  fields?: FieldsInMetadata | undefined
  include?: boolean | undefined
  rename?: { [x: string]: unknown } | undefined
}
type ReportModelGet = {
  annotations?: AnnotationOptions | undefined
  automation_blockers?: SimpleInclude | undefined
  automation_score?: SimpleInclude | undefined
  automation_what_if?: SimpleInclude | undefined
  cover?: SimpleInclude | undefined
  documents?: string[] | undefined
  elapse_time?: SimpleInclude | undefined
  evaluations?: EvaluationsOptions | undefined
  field_automation?: SimpleInclude | undefined
  inboxes?: string[] | undefined
  lines?: SimpleInclude | undefined
  metadata?: MetadataOptions | undefined
  name?: string | undefined
  page_classification?: SimpleInclude | undefined
  projects?: string[] | undefined
  sections?: SimpleInclude | undefined
  separator?: string | undefined
  sources?: ('human' | 'machine')[] | undefined
  text?: SimpleInclude | undefined
  version_name?: string | undefined
  id: string
}
type ReportModelPost = {
  annotations?: AnnotationOptions | undefined
  automation_blockers?: SimpleInclude | undefined
  automation_score?: SimpleInclude | undefined
  automation_what_if?: SimpleInclude | undefined
  cover?: SimpleInclude | undefined
  documents?: string[] | undefined
  elapse_time?: SimpleInclude | undefined
  evaluations?: EvaluationsOptions | undefined
  field_automation?: SimpleInclude | undefined
  inboxes?: string[] | undefined
  lines?: SimpleInclude | undefined
  metadata?: MetadataOptions | undefined
  name?: string | undefined
  page_classification?: SimpleInclude | undefined
  projects?: string[] | undefined
  sections?: SimpleInclude | undefined
  separator?: string | undefined
  sources?: ('human' | 'machine')[] | undefined
  text?: SimpleInclude | undefined
  version_name?: string | undefined
}
type ReportModelFullGenerate = {
  annotations?: AnnotationOptions | undefined
  automation_blockers?: SimpleInclude | undefined
  automation_score?: SimpleInclude | undefined
  automation_what_if?: SimpleInclude | undefined
  cover?: SimpleInclude | undefined
  documents?: string[] | undefined
  elapse_time?: SimpleInclude | undefined
  evaluations?: EvaluationsOptions | undefined
  field_automation?: SimpleInclude | undefined
  inboxes?: string[] | undefined
  lines?: SimpleInclude | undefined
  metadata?: MetadataOptions | undefined
  name?: string | undefined
  page_classification?: SimpleInclude | undefined
  projects?: string[] | undefined
  sections?: SimpleInclude | undefined
  separator?: string | undefined
  sources?: ('human' | 'machine')[] | undefined
  text?: SimpleInclude | undefined
  version_name?: string | undefined
  delivery_method?: 'email' | 'download' | undefined
  email?: string | undefined
  end_date?: string | undefined
  start_date?: string | undefined
}
type PermissionsModel = {
  create_dropbox_user?: boolean | undefined
  create_inbox?: boolean | undefined
  create_webhook?: boolean | undefined
  de_escalate_document?: boolean | undefined
  delete_tenant?: boolean | undefined
  delete_webhook?: boolean | undefined
  edit_backend_settings?: boolean | undefined
  edit_beats?: boolean | undefined
  edit_dashboard_settings?: boolean | undefined
  edit_data_retention_settings?: boolean | undefined
  edit_flow_settings?: boolean | undefined
  edit_format_settings?: boolean | undefined
  edit_integration_settings?: boolean | undefined
  edit_integrations?: boolean | undefined
  edit_predictor_settings?: boolean | undefined
  edit_reports?: boolean | undefined
  edit_retention_settings?: boolean | undefined
  edit_review_settings?: boolean | undefined
  edit_roles?: boolean | undefined
  edit_sampling_settings?: boolean | undefined
  edit_security_settings?: boolean | undefined
  edit_templates?: boolean | undefined
  edit_thresholds_settings?: boolean | undefined
  edit_translations?: boolean | undefined
  edit_users?: boolean | undefined
  escalate_document?: boolean | undefined
  never_twice?: boolean | undefined
  pick_next_escalated?: boolean | undefined
  read_beats?: boolean | undefined
  read_data_retention_settings?: boolean | undefined
  read_feedback?: boolean | undefined
  read_integrations?: boolean | undefined
  read_release_notes?: boolean | undefined
  read_reports?: boolean | undefined
  read_thresholds_settings?: boolean | undefined
  read_webhook?: boolean | undefined
  reject_document?: boolean | undefined
  release_lock?: boolean | undefined
  review?: boolean | undefined
  submit?: boolean | undefined
  update_webhook?: boolean | undefined
  upload?: boolean | undefined
  versions?: boolean | undefined
  view_api_keys?: boolean | undefined
  view_list?: boolean | undefined
  view_projects?: boolean | undefined
  view_statistics?: boolean | undefined
  view_templates?: boolean | undefined
  write_feedback?: boolean | undefined
  write_release_notes?: boolean | undefined
}
type RoleModelGet = { name: string; permissions: PermissionsModel; id: string }
type RoleModelPost = { name: string; permissions: PermissionsModel }
type RoleModelPatch = { name?: string | undefined; permissions?: PermissionsModel | undefined }
type RuleConfigModelGet = { rule_config?: { [x: string]: unknown } | undefined; scope: string }
type Dictionary = { [x: string]: unknown }
type RuleConfigModel = { rule_config?: { [x: string]: unknown } | undefined }
type SamplingModelGet = {
  auto_reject_FFR?: number | undefined
  auto_submit_FFR?: number | undefined
  second_pass_FFR?: number | undefined
  second_pass_STP?: number | undefined
  scope: string
}
type SamplingModelPatch = {
  auto_reject_FFR?: number | undefined
  auto_submit_FFR?: number | undefined
  second_pass_FFR?: number | undefined
  second_pass_STP?: number | undefined
}
type SequenceColumnsAtomModel = {
  checked?: boolean | undefined
  field?: string | undefined
  label?: string | undefined
}
type ColumnsHeaders = {
  columns_headers?: SequenceColumnsAtomModel[] | undefined
  inline_headers?: SequenceColumnsAtomModel[] | undefined
}
type DashboardSettingsModelGet = {
  autolearning?: boolean | undefined
  dashboard_timeout?: number | undefined
  default_date_range?: { [x: string]: unknown } | undefined
  default_inbox_size?: { [x: string]: unknown } | undefined
  default_inbox_sorting?: { [x: string]: unknown } | undefined
  flexible_filters?: { [x: string]: unknown }[] | undefined
  navigation_menu?: { [x: string]: unknown } | undefined
  process_unreadable?: boolean | undefined
  sequence_columns_of_inbox?: ColumnsHeaders | undefined
  show_digital_annotations?: boolean | undefined
  show_filters?: { [x: string]: unknown } | undefined
  show_inbox_actions?: { [x: string]: unknown } | undefined
  studio_format_options?: { [x: string]: unknown } | undefined
  upload_options?: { [x: string]: unknown } | undefined
  welcome_counters?: boolean | undefined
  welcome_counters_options?: { [x: string]: unknown } | undefined
}
type DashboardSettingsModelPatch = {
  scope?: string | undefined
  settings?: DashboardSettingsModelGet | undefined
}
type ReviewSettingsModelGet = {
  default_zoom?: { [x: string]: unknown } | undefined
  first_toolbar?: { [x: string]: unknown } | undefined
  lock_expiry?: { [x: string]: unknown } | undefined
  review_options?: { [x: string]: unknown } | undefined
  second_toolbar?: { [x: string]: unknown } | undefined
}
type ReviewSettingsModelPatch = {
  scope?: string | undefined
  settings?: ReviewSettingsModelGet | undefined
}
type ExtraModel = { entity_id?: string | undefined; specification_url?: string | undefined }
type SsoConfigModelGet = {
  extra?: ExtraModel | undefined
  id: string
  provider: string
  type?: 'saml' | undefined
  url?: string | undefined
}
type SsoConfigModel = {
  extra?: ExtraModel | undefined
  provider: string
  type?: 'saml' | undefined
  url?: string | undefined
}
type SsoModel = { token?: string | undefined; type?: 'oauth' | 'saml' | undefined }
type TenantModelPatch = { code?: number | undefined; email?: string | undefined }
type TenantModelGet = { id: string }
type ThresholdModel = {
  annotations?: { [x: string]: unknown } | undefined
  lines?: { [x: string]: unknown } | undefined
  sections?: { [x: string]: unknown } | undefined
}
type SettingThresholdModelGet = {
  thresholds?: ThresholdModel | undefined
  scope?: string | undefined
}
type SettingThresholdModelPatch = { thresholds?: ThresholdModel | undefined }
type UserRoleModel = { document_id?: string | undefined; inbox?: string | undefined; role: string }
type UserModelGet = {
  active: boolean
  confirmed_at?: string | undefined
  id: string
  roles: UserRoleModel[]
  username: string
}
type UserModelPost = {
  active: boolean
  password?: string | undefined
  roles: UserRoleModel[]
  username: string
}
type ChangePasswordModelPost = {
  new_password?: string | undefined
  old_password?: string | undefined
}
type UserRoleModelPatch = { inbox?: string | undefined; role?: string | undefined }
type UserModelPatch = { roles?: UserRoleModelPatch[] | undefined; username?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/about/release_notes': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/about/version': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/auth': {
      $post:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: AuthModel }
            output: TokenReplyModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: AuthModel }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/auth/api-key': {
      $get:
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: APIKeyModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: APIKeyRequest }
            output: APIKeyModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: APIKeyRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: APIKeyRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/auth/api-key/inbox/:inbox_id': {
      $get:
        | {
            input: { param: { inbox_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: APIKeyModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { inbox_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { inbox_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: APIKeyRequest }
            output: APIKeyModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { inbox_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: APIKeyRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { inbox_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: APIKeyRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/auth/api-key/:key': {
      $delete:
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 403 }
      $get:
        | {
            input: { param: { key: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: APIKeyModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $patch:
        | {
            input: { param: { key: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: APIKeyModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/auth/ephemeral': {
      $post:
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: TokenReplyModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/auth/get_JWT': {
      $post:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: TokenModelBase }
            output: TokenReplyModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: TokenModelBase }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/auth/reset_password': {
      $post:
        | { input: { json: ResetPasswordModelPost }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: ResetPasswordModelPost }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/auth/token': {
      $post:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: TokenModelBase }
            output: TokenReplyModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: TokenModelBase }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/connections': {
      $get:
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: ConnectionModelGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: ConnectionModelPost }
            output: ConnectionModelGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: ConnectionModelPost }
            output: {}
            outputFormat: string
            status: 403
          }
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
            output: {}
            outputFormat: string
            status: 403
          }
      $get:
        | {
            input: { param: { connection_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            }
            output: ConnectionModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $patch:
        | {
            input: { param: { connection_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: ConnectionModelPost }
            output: ConnectionModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: ConnectionModelPost }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/data_retention_settings': {
      $get:
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: DataRetentionModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/data_retention_settings/:level/:id': {
      $delete:
        | {
            input: { param: { level: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { level: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { level: string; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { level: string; id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            }
            output: DataRetentionModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { level: string; id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $patch:
        | {
            input: { param: { level: string; id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: DataRetentionModelPatch }
            output: DataRetentionModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { level: string; id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: DataRetentionModelPatch }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/': {
      $post:
        | {
            input: {
              form: {
                experimental?: boolean | undefined
                file: File
                inbox_id?: string | undefined
                key_value_flag?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              form: {
                experimental?: boolean | undefined
                file: File
                inbox_id?: string | undefined
                key_value_flag?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/custom_output': {
      $post:
        | { input: { json: CustomOutputPost }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: CustomOutputPost }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/documents/enrich': {
      $post:
        | { input: { json: EnrichmentModelPost }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: EnrichmentModelPost }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/documents/file_query/:data_type': {
      $post:
        | {
            input: { param: { data_type: string } } & { json: DocumentIds }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { data_type: string } } & { json: DocumentIds }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { data_type: string } } & { json: DocumentIds }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { data_type: string } } & { json: DocumentIds }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/documents/query/:query_type': {
      $post: {
        input: { param: { query_type: string } } & { json: AggregationPipelinePost }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/documents/:document_id': {
      $delete:
        | {
            input: { param: { document_id: string } } & {
              query: { how?: 'FULL' | 'SOURCE_FILES' | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { document_id: string } } & {
              query: { how?: 'FULL' | 'SOURCE_FILES' | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $get: {
        input: { param: { document_id: string } }
        output: {}
        outputFormat: string
        status: 403
      }
    }
  } & {
    '/documents/:document_id/compare_versions': {
      $post:
        | {
            input: { param: { document_id: string } } & { json: VersionCompare }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { document_id: string } } & { json: VersionCompare }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/:document_id/custom_output': {
      $get:
        | {
            input: { param: { document_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { document_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { document_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/documents/:document_id/feedback': {
      $post:
        | {
            input: { param: { document_id: string } } & { json: VersionPost }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { document_id: string } } & { json: VersionPost }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/:document_id/last_version': {
      $get: {
        input: { param: { document_id: string } } & {
          query: {
            name?: string | undefined
            source?: string | undefined
            is_evaluated?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 403
      }
    }
  } & {
    '/documents/:document_id/original_file': {
      $get:
        | {
            input: { param: { document_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { document_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/:document_id/page/:page_range': {
      $get:
        | {
            input: { param: { page_range: string; document_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { page_range: string; document_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/:document_id/page_thumbnail/:page_range': {
      $get:
        | {
            input: { param: { document_id: string; page_range: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { document_id: string; page_range: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/:document_id/process_table_annotation': {
      $post:
        | {
            input: { param: { document_id: string } } & { json: TableAnnotationPost }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { document_id: string } } & { json: TableAnnotationPost }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/:document_id/reprocess': {
      $post:
        | {
            input: { param: { document_id: string } } & {
              query: { name?: string | undefined; reviewer?: 'Human' | 'Machine' | undefined }
            } & { header: { 'X-Fields'?: string | undefined } }
            output: DocumentModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { document_id: string } } & {
              query: { name?: string | undefined; reviewer?: 'Human' | 'Machine' | undefined }
            } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/:document_id/reverse/:page_range': {
      $get:
        | {
            input: { param: { page_range: string; document_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { page_range: string; document_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/:document_id/status_data': {
      $post:
        | {
            input: { param: { document_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: StatusDataPost }
            output: DocumentModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { document_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: StatusDataPost }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/:document_id/text': {
      $get: {
        input: { param: { document_id: string } }
        output: {}
        outputFormat: string
        status: 403
      }
    }
  } & {
    '/documents/:document_id/workflow': {
      $get:
        | {
            input: { param: { document_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            }
            output: WorkflowModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { document_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/:inbox_id': {
      $post:
        | {
            input: { param: { inbox_id: string } } & {
              form: {
                experimental?: boolean | undefined
                file: File
                key_value_flag?: boolean | undefined
                sync?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & {
              form: {
                experimental?: boolean | undefined
                file: File
                key_value_flag?: boolean | undefined
                sync?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { inbox_id: string } } & {
              form: {
                experimental?: boolean | undefined
                file: File
                key_value_flag?: boolean | undefined
                sync?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
    }
  } & {
    '/documents/:inbox_id/copy_inbox': {
      $patch:
        | {
            input: { param: { inbox_id: string } } & { json: DocumentIds }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & { json: DocumentIds }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/documents/:inbox_id/move_inbox': {
      $patch:
        | {
            input: { param: { inbox_id: string } } & { json: DocumentIds }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & { json: DocumentIds }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/formats': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: { json: FormatModelPost }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/formats/document_types': {
      $get:
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: DocumentTypeModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/formats/:format_id': {
      $delete:
        | { input: { param: { format_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { format_id: string } }; output: {}; outputFormat: string; status: 403 }
      $get: {
        input: { param: { format_id: string } }
        output: {}
        outputFormat: string
        status: 403
      }
      $patch:
        | {
            input: { param: { format_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: FormatModelPatch }
            output: FormatModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: FormatModelPatch }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/formats/:scope/tag_fields': {
      $get:
        | {
            input: { param: { scope: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: TagFieldModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/inboxes': {
      $get: {
        input: { header: { 'X-Fields'?: string | undefined } }
        output: InboxModelGet[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: InboxModelPost }
            output: InboxModelGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: InboxModelPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: InboxModelPost }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/inboxes/:inbox_id': {
      $delete:
        | { input: { param: { inbox_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { inbox_id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { inbox_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: InboxModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { inbox_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { inbox_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: InboxModelPatch }
            output: InboxModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: InboxModelPatch }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { inbox_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: InboxModelPatch }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/inboxes/:inbox_id/document_versions': {
      $get:
        | { input: { param: { inbox_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { inbox_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { inbox_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/inboxes/:inbox_id/documents': {
      $delete:
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                how?: 'FULL' | 'SOURCE_FILES' | undefined
                what?: 'ALL' | 'DONE' | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                how?: 'FULL' | 'SOURCE_FILES' | undefined
                what?: 'ALL' | 'DONE' | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { inbox_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: DocumentModelGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { inbox_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/inboxes/:inbox_id/paginated': {
      $get:
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                start_receive_date?: string | undefined
                end_receive_date?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Fields'?: string | undefined } }
            output: DocumentModelPaginated[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                start_receive_date?: string | undefined
                end_receive_date?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                start_receive_date?: string | undefined
                end_receive_date?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/inboxes/:inbox_id/reprocess': {
      $post:
        | {
            input: { param: { inbox_id: string } } & {
              query: { name?: string | undefined; reviewer?: 'Human' | 'Machine' | undefined }
            } & { form: { hints?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & {
              query: { name?: string | undefined; reviewer?: 'Human' | 'Machine' | undefined }
            } & { form: { hints?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { inbox_id: string } } & {
              query: { name?: string | undefined; reviewer?: 'Human' | 'Machine' | undefined }
            } & { form: { hints?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/integrations/': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | { input: { json: IntegrationModelGet }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: IntegrationModelGet }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: IntegrationModelGet }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/integrations/:integration_id': {
      $delete:
        | {
            input: { param: { integration_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { integration_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { integration_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { integration_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { integration_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { integration_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { integration_id: string } } & { json: IntegrationModelGet }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { integration_id: string } } & { json: IntegrationModelGet }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { integration_id: string } } & { json: IntegrationModelGet }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/integrations/:integration_id/activate': {
      $get:
        | {
            input: { param: { integration_id: string } } & { query: { secret: string } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { integration_id: string } } & { query: { secret: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { integration_id: string } } & { query: { secret: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/predictor_settings': {
      $get:
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: PredictorModelGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/predictor_settings/:scope': {
      $delete:
        | { input: { param: { scope: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { scope: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { scope: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { scope: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: PredictorModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $patch:
        | {
            input: { param: { scope: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: PredictorSettingModel }
            output: PredictorModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: PredictorSettingModel }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/projects': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post:
        | { input: { json: ProjectModelPost }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: ProjectModelPost }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/projects/:project_id': {
      $delete:
        | {
            input: { param: { project_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { project_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get: {
        input: { param: { project_id: string } }
        output: {}
        outputFormat: string
        status: 404
      }
      $patch:
        | {
            input: { param: { project_id: string } } & { json: ProjectModelPatch }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectModelPatch }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/reports': {
      $get:
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: ReportModelGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: ReportModelPost }
            output: ReportModelGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: ReportModelPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: ReportModelPost }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/reports/generate': {
      $post: {
        input: { json: ReportModelFullGenerate }
        output: {}
        outputFormat: string
        status: 403
      }
    }
  } & {
    '/reports/:report_id': {
      $delete:
        | { input: { param: { report_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { report_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { report_id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { report_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            }
            output: ReportModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { report_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { report_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: ReportModelPost }
            output: ReportModelPost
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: ReportModelPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { report_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: ReportModelPost }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/reports/:report_id/generate': {
      $post:
        | {
            input: { param: { report_id: string } } & {
              query: {
                delivery_method: 'download' | 'email'
                email?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { report_id: string } } & {
              query: {
                delivery_method: 'download' | 'email'
                email?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/roles': {
      $get: {
        input: { header: { 'X-Fields'?: string | undefined } }
        output: RoleModelGet[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: RoleModelPost }
            output: RoleModelGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: RoleModelPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: RoleModelPost }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/roles/:role_id': {
      $delete:
        | { input: { param: { role_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { role_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { role_id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { role_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: RoleModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { role_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: RoleModelPatch }
            output: RoleModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: RoleModelPatch }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { role_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: RoleModelPatch }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rule_config': {
      $get:
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: RuleConfigModelGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rule_config/rule_entity/': {
      $post: { input: { json: Dictionary }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rule_config/rule_entity/:document_id': {
      $post: {
        input: { param: { document_id: string } } & { json: Dictionary }
        output: {}
        outputFormat: string
        status: 403
      }
    }
  } & {
    '/rule_config/where_to_search/:document_id': {
      $post: {
        input: { param: { document_id: string } } & { json: Dictionary }
        output: {}
        outputFormat: string
        status: 403
      }
    }
  } & {
    '/rule_config/:scope': {
      $delete:
        | { input: { param: { scope: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { scope: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { scope: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { scope: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: RuleConfigModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $patch:
        | {
            input: { param: { scope: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: RuleConfigModel }
            output: RuleConfigModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: RuleConfigModel }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/sampling_settings': {
      $get:
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: SamplingModelGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/sampling_settings/:scope': {
      $delete:
        | { input: { param: { scope: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { scope: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { scope: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { scope: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: SamplingModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $patch:
        | {
            input: { param: { scope: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: SamplingModelPatch }
            output: SamplingModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: SamplingModelPatch }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/settings/dashboard': {
      $get: {
        input: { query: { scope?: string | undefined; full?: boolean | undefined } } & {
          header: { 'X-Fields'?: string | undefined }
        }
        output: DashboardSettingsModelGet
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & {
              json: DashboardSettingsModelPatch
            }
            output: DashboardSettingsModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & {
              json: DashboardSettingsModelPatch
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/settings/review': {
      $get: {
        input: { query: { scope?: string | undefined; full?: boolean | undefined } } & {
          header: { 'X-Fields'?: string | undefined }
        }
        output: ReviewSettingsModelGet
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & {
              json: ReviewSettingsModelPatch
            }
            output: ReviewSettingsModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & {
              json: ReviewSettingsModelPatch
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/sso/config': {
      $get: {
        input: { header: { 'X-Fields'?: string | undefined } }
        output: SsoConfigModelGet
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: SsoConfigModel }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: SsoConfigModel }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: SsoConfigModel }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/sso/config/:sso_config_id': {
      $delete:
        | {
            input: { param: { sso_config_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sso_config_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { sso_config_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/sso/login': {
      $post: { input: { json: SsoModel }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/stats/usage': {
      $get: {
        input: {
          query: {
            inbox_id?: string | undefined
            start_date: string
            end_date: string
            excel_output?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/stats/:inbox_id': {
      $get:
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                field_name?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                version_name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                field_name?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                version_name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/stats/:inbox_id/automation_blockers': {
      $get:
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                version_name?: string | undefined
                include_detail?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                version_name?: string | undefined
                include_detail?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/stats/:inbox_id/blue_dots': {
      $post:
        | {
            input: { param: { inbox_id: string } } & {
              form: {
                end_date?: string | undefined
                fields_to_exclude?: string | undefined
                level?: string | undefined
                option_level_fields?: string | undefined
                start_date?: string | undefined
                version_name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & {
              form: {
                end_date?: string | undefined
                fields_to_exclude?: string | undefined
                level?: string | undefined
                option_level_fields?: string | undefined
                start_date?: string | undefined
                version_name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { inbox_id: string } } & {
              form: {
                end_date?: string | undefined
                fields_to_exclude?: string | undefined
                level?: string | undefined
                option_level_fields?: string | undefined
                start_date?: string | undefined
                version_name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { inbox_id: string } } & {
              form: {
                end_date?: string | undefined
                fields_to_exclude?: string | undefined
                level?: string | undefined
                option_level_fields?: string | undefined
                start_date?: string | undefined
                version_name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/:inbox_id/evaluated_versions': {
      $get:
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                filter_versions?: boolean | undefined
                last_one_only?: boolean | undefined
                version_name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                filter_versions?: boolean | undefined
                last_one_only?: boolean | undefined
                version_name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/stats/:inbox_id/processing': {
      $get:
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                group_by?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                group_by?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/stats/:inbox_id/volume': {
      $get:
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                status?: string | undefined
                user?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { inbox_id: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                status?: string | undefined
                user?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/stats/:scope/accuracy': {
      $get:
        | {
            input: { param: { scope: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                stp_files_only?: boolean | undefined
                stp_fields_only?: boolean | undefined
                version_name?: string | undefined
                filter_by?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { scope: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                stp_files_only?: boolean | undefined
                stp_fields_only?: boolean | undefined
                version_name?: string | undefined
                filter_by?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/stats/:scope/stp': {
      $get:
        | {
            input: { param: { scope: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                version_name?: string | undefined
                filter_by?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { scope: string } } & {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                version_name?: string | undefined
                filter_by?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/style/custom.css': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 204 }
      $post:
        | { input: { form: { file: File } }; output: {}; outputFormat: string; status: 204 }
        | { input: { form: { file: File } }; output: {}; outputFormat: string; status: 403 }
        | { input: { form: { file: File } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/style/logo.png': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post:
        | { input: { form: { file: File } }; output: {}; outputFormat: string; status: 204 }
        | { input: { form: { file: File } }; output: {}; outputFormat: string; status: 403 }
        | { input: { form: { file: File } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/tenant': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/tenant/activate': {
      $patch:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: TenantModelPatch }
            output: TenantModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: TenantModelPatch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: TenantModelPatch }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: TenantModelPatch }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/threshold_settings': {
      $get:
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: SettingThresholdModelGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/threshold_settings/:scope': {
      $delete:
        | { input: { param: { scope: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { scope: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { scope: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { scope: string } } & { query: { default?: boolean | undefined } } & {
              header: { 'X-Fields'?: string | undefined }
            }
            output: SettingThresholdModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: string } } & { query: { default?: boolean | undefined } } & {
              header: { 'X-Fields'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $patch:
        | {
            input: { param: { scope: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: SettingThresholdModelPatch }
            output: SettingThresholdModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: SettingThresholdModelPatch }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: UserModelGet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: UserModelPost }
            output: UserModelGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: UserModelPost }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: UserModelPost }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: UserModelPost }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { header: { 'X-Fields'?: string | undefined } } & { json: UserModelPost }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/users/me': {
      $get: {
        input: { header: { 'X-Fields'?: string | undefined } }
        output: UserModelGet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/change_password': {
      $post:
        | {
            input: { json: ChangePasswordModelPost }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ChangePasswordModelPost }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/users/:user_id': {
      $delete:
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { user_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: UserModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { user_id: string } } & { header: { 'X-Fields'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { user_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: UserModelPatch }
            output: UserModelGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: UserModelPatch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: UserModelPatch }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              header: { 'X-Fields'?: string | undefined }
            } & { json: UserModelPatch }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
