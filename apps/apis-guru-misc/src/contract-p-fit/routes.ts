import { createRoute, z } from '@hono/zod-openapi'

const TokenRoleModelSchema = z
  .object({
    document_id: z.string().exactOptional().openapi({ description: 'limited to a document' }),
    inbox: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .exactOptional()
      .openapi({ example: 'abcdef123456789abcdef123' }),
    role: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .openapi({ example: 'abcdef123456789abcdef123' }),
  })
  .openapi({ required: ['role'] })
  .openapi('TokenRoleModel')

const APIKeyModelSchema = z
  .object({
    active: z.boolean().openapi({ description: 'Is the API Key active or not' }),
    expire_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date at which the API Key will expire' }),
    roles: z.array(TokenRoleModelSchema).exactOptional().openapi({ description: 'the user roles' }),
    token: z.string().openapi({ description: 'Token value' }),
    user: z.string().openapi({ description: 'Bearer user' }),
  })
  .openapi({ required: ['active', 'token', 'user'] })
  .openapi('APIKeyModel')

const APIKeyRequestSchema = z
  .strictObject({
    active: z.boolean().exactOptional().openapi({ description: 'Is the API Key active or not' }),
    expire_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Expiration date' }),
    roles: z
      .array(TokenRoleModelSchema)
      .openapi({ description: 'Roles to grant to this token bearer' }),
    user: z.string().openapi({ description: 'User to give to the bearer' }),
  })
  .openapi({ required: ['roles', 'user'] })
  .openapi('APIKeyRequest')

const FilterOIdModelDocSchema = z
  .object({
    $oid: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .exactOptional()
      .openapi({ description: 'Document ID', example: 'abcdef123456789abcdef123' }),
  })
  .openapi({ required: [] })
  .openapi('FilterOIdModelDoc')

const FilterOIdModelSchema = z
  .object({
    $oid: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .exactOptional()
      .openapi({ description: 'Inbox ID', example: 'abcdef123456789abcdef123' }),
  })
  .openapi({ required: [] })
  .openapi('FilterOIdModel')

const FilterOIdListModelSchema = z
  .object({ $in: z.array(FilterOIdModelSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('FilterOIdListModel')

const FilterTimingsFieldModelSchema = z
  .object({ timeFrom: z.string().exactOptional(), timeTo: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('FilterTimingsFieldModel')

const FilterTimeModelSchema = z
  .object({
    $gt: z.iso.datetime({ offset: true }).exactOptional(),
    $gte: z.iso.datetime({ offset: true }).exactOptional(),
    $lt: z.iso.datetime({ offset: true }).exactOptional(),
    $lte: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FilterTimeModel')

const FilterTimingsModelSchema = z
  .object({
    done_time: FilterTimeModelSchema.exactOptional(),
    feedback_time: FilterTimeModelSchema.exactOptional(),
    receive_time: FilterTimeModelSchema.exactOptional(),
    review_start_time: FilterTimeModelSchema.exactOptional(),
    start_time: FilterTimeModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FilterTimingsModel')

const FilterModelSchema = z
  .object({
    _id: FilterOIdModelDocSchema.exactOptional(),
    inbox: FilterOIdListModelSchema.exactOptional(),
    timing_fields: FilterTimingsFieldModelSchema.exactOptional(),
    timings: FilterTimingsModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FilterModel')

const AggregationPipelinePostSchema = z
  .object({
    filter: FilterModelSchema.exactOptional(),
    type: z
      .enum([
        'inbox',
        'get-todo-count',
        'get-todo-escalated-count',
        'get-oldest-todo',
        'get-oldest-escalated-todo',
        'get-finished-me',
        'get-finished-team',
        'next-document',
        'prev-document',
        'get-next-uuid',
        'avg-time',
      ])
      .exactOptional()
      .openapi({ example: 'inbox' }),
  })
  .openapi({ required: [] })
  .openapi('AggregationPipelinePost')

const AnnotationOptionsSchema = z
  .object({
    add_text: z.boolean().default(false).exactOptional(),
    include: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationOptions')

const AuthModelSchema = z
  .object({
    password: z.string().openapi({ description: 'the user password' }),
    username: z.string().openapi({ description: 'the user username' }),
  })
  .openapi({ required: ['password', 'username'] })
  .openapi('AuthModel')

const ChangePasswordModelPostSchema = z
  .object({
    new_password: z.string().exactOptional().openapi({ description: "the new user's password" }),
    old_password: z.string().exactOptional().openapi({ description: "the old user's password" }),
  })
  .openapi({ required: [] })
  .openapi('ChangePasswordModelPost')

const SequenceColumnsAtomModelSchema = z
  .object({
    checked: z.boolean().exactOptional(),
    field: z.string().exactOptional(),
    label: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SequenceColumnsAtomModel')

const ColumnsHeadersSchema = z
  .object({
    columns_headers: z.array(SequenceColumnsAtomModelSchema).exactOptional(),
    inline_headers: z.array(SequenceColumnsAtomModelSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ColumnsHeaders')

const RoutingAtomSchema = z
  .object({ and_conditions: z.object({}).exactOptional(), target: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RoutingAtom')

const ConnectionModelPostSchema = z
  .object({
    event: z
      .enum([
        'document_predict',
        'document_evaluate',
        'document_text',
        'document_split',
        'document_delete',
      ])
      .openapi({ example: 'document_predict' }),
    integration: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .openapi({ example: 'abcdef123456789abcdef123' }),
    routing: z.array(RoutingAtomSchema).exactOptional(),
    scope: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .exactOptional()
      .openapi({ example: 'abcdef123456789abcdef123' }),
    what: z.enum(['original', 'reply_to', 'ready', 'submit']).openapi({ example: 'original' }),
  })
  .openapi({ required: ['event', 'integration', 'what'] })
  .openapi('ConnectionModelPost')

const ConnectionModelGetSchema = ConnectionModelPostSchema.and(
  z.object({ id: z.string() }).openapi({ required: ['id'] }),
).openapi('ConnectionModelGet')

const CustomAtomSchema = z.object({}).openapi('CustomAtom')

const ExcelAtomSchema = z
  .object({
    add_automation_blockers: z.boolean().exactOptional().openapi({ example: false }),
    add_confidence: z.boolean().exactOptional().openapi({ example: false }),
    add_text: z.boolean().exactOptional().openapi({ example: true }),
    enable_key_value: z.boolean().openapi({ example: false }),
    multiple_value_separator: z.string().length(1).exactOptional().openapi({ example: ';' }),
  })
  .openapi({ required: ['enable_key_value'] })
  .openapi('ExcelAtom')

const FilterAtomSchema = z
  .object({
    end_date: z.iso.datetime({ offset: true }).exactOptional(),
    list: z.array(z.string()).exactOptional(),
    start_date: z.iso.datetime({ offset: true }).exactOptional(),
    type: z.enum(['project', 'inbox', 'document']).openapi({ example: 'project' }),
  })
  .openapi({ required: ['type'] })
  .openapi('FilterAtom')

const CustomOutputPostSchema = z
  .object({
    custom: CustomAtomSchema.exactOptional(),
    excel: ExcelAtomSchema.exactOptional(),
    filter: FilterAtomSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomOutputPost')

const DashboardSettingsModelGetSchema = z
  .object({
    autolearning: z.boolean().exactOptional(),
    dashboard_timeout: z.int().exactOptional(),
    default_date_range: z.object({}).exactOptional(),
    default_inbox_size: z.object({}).exactOptional(),
    default_inbox_sorting: z.object({}).exactOptional(),
    flexible_filters: z.array(z.object({})).exactOptional(),
    navigation_menu: z.object({}).exactOptional(),
    process_unreadable: z.boolean().exactOptional(),
    sequence_columns_of_inbox: ColumnsHeadersSchema.exactOptional(),
    show_digital_annotations: z.boolean().exactOptional(),
    show_filters: z.object({}).exactOptional(),
    show_inbox_actions: z.object({}).exactOptional(),
    studio_format_options: z.object({}).exactOptional(),
    upload_options: z.object({}).exactOptional(),
    welcome_counters: z.boolean().exactOptional(),
    welcome_counters_options: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardSettingsModelGet')

const DashboardSettingsModelPatchSchema = z
  .object({
    scope: z.string().exactOptional(),
    settings: DashboardSettingsModelGetSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardSettingsModelPatch')

const DataRetentionAtomModelSchema = z
  .object({
    age: z.int().default(-1).exactOptional().openapi({ example: 30 }),
    how: z
      .enum(['FULL', 'SOURCE_FILES'])
      .default('FULL')
      .exactOptional()
      .openapi({ example: 'FULL' }),
    what: z.enum(['ALL', 'DONE']).default('ALL').exactOptional().openapi({ example: 'ALL' }),
  })
  .openapi({ required: [] })
  .openapi('DataRetentionAtomModel')

const ScopeModelSchema = z
  .object({ id: z.string().exactOptional(), level: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ScopeModel')

const DataRetentionModelSchema = z
  .object({
    scope: ScopeModelSchema.exactOptional(),
    settings: z.array(DataRetentionAtomModelSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DataRetentionModel')

const DataRetentionModelPatchSchema = z
  .object({ settings: z.array(DataRetentionAtomModelSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DataRetentionModelPatch')

const DocumentIdsSchema = z
  .object({
    document_ids: z
      .array(z.string().openapi({ example: 'abcdef123456789abcdef123' }))
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DocumentIds')

const StateModelGetSchema = z
  .object({
    by: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .exactOptional()
      .openapi({ example: 'abcdef123456789abcdef123' }),
    since: z.iso.datetime({ offset: true }).exactOptional(),
    value: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StateModelGet')

const FileModelGetSchema = z
  .object({
    embedded_attachment: z.boolean().exactOptional(),
    filehash: z.string().exactOptional(),
    filename: z.string().exactOptional(),
    leaf: z.boolean().exactOptional(),
    page: z.int().exactOptional(),
    page_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileModelGet')

const StatusDataModelSchema = z
  .object({
    archived: z.boolean().exactOptional(),
    data: z.boolean().exactOptional(),
    escalate: z.boolean().exactOptional(),
    feedback: z.boolean().exactOptional(),
    lock: z.boolean().exactOptional(),
    ready_accepted: z.boolean().exactOptional(),
    ready_attempts: z.int().exactOptional(),
    reject: z.boolean().exactOptional(),
    reject_accepted: z.boolean().exactOptional(),
    reject_attempts: z.int().exactOptional(),
    sampling: z.boolean().exactOptional(),
    submit_accepted: z.boolean().exactOptional(),
    submit_attempts: z.int().exactOptional(),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatusDataModel')

const TimingsModelGetSchema = z
  .object({
    done_time: z.iso.datetime({ offset: true }).exactOptional(),
    feedback_time: z.iso.datetime({ offset: true }).exactOptional(),
    processing_period: z.number().exactOptional(),
    receive_time: z.iso.datetime({ offset: true }).exactOptional(),
    start_time: z.iso.datetime({ offset: true }).exactOptional(),
    submit_time: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimingsModelGet')

const DocumentModelGetSchema = z
  .object({
    escalate: StateModelGetSchema.exactOptional(),
    feedback: z.object({}).exactOptional(),
    files: z.array(FileModelGetSchema).exactOptional(),
    flag_for_review: z.boolean().exactOptional(),
    id: z.string(),
    inbox: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .openapi({ example: 'abcdef123456789abcdef123' }),
    last_version: z.string().exactOptional(),
    lock: StateModelGetSchema.exactOptional(),
    meta_information: z.object({}).exactOptional(),
    opened_by: z.array(StateModelGetSchema).exactOptional(),
    original_filename: z.string(),
    page_count: z.int(),
    prediction: z.object({}).exactOptional(),
    reject: StateModelGetSchema.exactOptional(),
    status_data: StatusDataModelSchema.exactOptional(),
    submitted: StateModelGetSchema.exactOptional(),
    timings: TimingsModelGetSchema.exactOptional(),
    usage_data: z.object({}).exactOptional(),
    versions: z.array(z.object({})).exactOptional(),
  })
  .openapi({ required: ['id', 'inbox', 'original_filename', 'page_count'] })
  .openapi('DocumentModelGet')

const DocumentModelPaginatedSchema = z
  .object({
    page: z.int().exactOptional().openapi({ description: 'Current page number' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    results: z.array(DocumentModelGetSchema).exactOptional(),
    total: z.int().exactOptional().openapi({ description: 'Total number of results' }),
  })
  .openapi({ required: [] })
  .openapi('DocumentModelPaginated')

const DocumentTypeModelSchema = z
  .object({ display_name: z.string().exactOptional(), field_name: z.string() })
  .openapi({ required: ['field_name'] })
  .openapi('DocumentTypeModel')

const DocumentTypeModelGetSchema = z
  .object({ document_types: z.array(DocumentTypeModelSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DocumentTypeModelGet')

const EnrichmentModelPostSchema = z.object({}).openapi('EnrichmentModelPost')

const EvaluationAtomSchema = z
  .object({
    gold: z.string(),
    text: z.string(),
    textual_coord: z.array(z.int()).length(6),
    visual_coord: z.array(z.int()).length(6).exactOptional(),
  })
  .openapi({ required: ['gold', 'text', 'textual_coord'] })
  .openapi('EvaluationAtom')

const EvaluationsOptionsSchema = z
  .object({
    additional_column: z.string().exactOptional(),
    include: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EvaluationsOptions')

const ExtraModelSchema = z
  .object({
    entity_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'your entity id',
        example: 'spn:d6b4feb1-a0bb-408a-b813-6e4eba3e5fef',
      }),
    specification_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Federation metadata document',
        example:
          'https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/federationmetadata/2007-06/federationmetadata.xml',
      }),
  })
  .openapi({ required: [] })
  .openapi('ExtraModel')

const SpanDictModelSchema = z
  .object({ '*': z.record(z.string(), z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('SpanDictModel')

const FieldSettingsModelSchema = z
  .object({
    default_value: z.string().exactOptional(),
    expected_pattern: z.string().exactOptional(),
    nested_field_patterns: SpanDictModelSchema.exactOptional(),
    override_default_patterns: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FieldSettingsModel')

const FieldSettingsDictModelSchema = z
  .object({ '*': z.record(z.string(), FieldSettingsModelSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('FieldSettingsDictModel')

const FieldsInMetadataSchema = z
  .object({
    annotations: z.array(z.string()).exactOptional(),
    lines: z.array(z.string()).exactOptional(),
    meta_information: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FieldsInMetadata')

const OptionModelSchema = z
  .object({ active: z.boolean(), display_name: z.string().exactOptional(), name: z.string() })
  .openapi({ required: ['active', 'name'] })
  .openapi('OptionModel')

const LabelModelSchema = z
  .object({
    category: z
      .enum(['annotation', 'tag', 'separator', 'computed'])
      .default('annotation')
      .exactOptional()
      .openapi({ example: 'annotation' }),
    count_in_evaluation: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'A flag that determines whether to count this field for evaluation',
      }),
    description: z.string().exactOptional().openapi({ description: 'A description of this field' }),
    display_name: z.string().exactOptional(),
    field_name: z.string(),
    formula: z
      .string()
      .exactOptional()
      .openapi({ description: 'An excel-like formula for conditional logic' }),
    initialized: z.boolean().default(true).exactOptional(),
    is_library: z.boolean().default(false).exactOptional(),
    mandatory: z.boolean().default(true).exactOptional(),
    mandatory_if: z
      .object({})
      .exactOptional()
      .openapi({ description: 'A value to decide if mandatory based on other field' }),
    multiple: z.boolean().default(true).exactOptional(),
    options: z.array(OptionModelSchema).exactOptional(),
    scope: z
      .enum(['document', 'page', 'section'])
      .default('section')
      .exactOptional()
      .openapi({ example: 'section' }),
    type: z
      .enum([
        'string',
        'date',
        'integer',
        'float',
        'currency',
        'alphanumeric',
        'national_identification_number_be',
        'boolean',
        'datetime',
        'address',
      ])
      .default('string')
      .exactOptional()
      .openapi({ example: 'string' }),
    visible: z.boolean().default(true).exactOptional(),
    visible_if: z
      .object({})
      .exactOptional()
      .openapi({ description: 'A value to decide if shown in UI' }),
  })
  .openapi({ required: ['field_name'] })
  .openapi('LabelModel')

const SectionModelSchema = z
  .object({ name: z.string(), page: z.int() })
  .openapi({ required: ['name', 'page'] })
  .openapi('SectionModel')

const TableModelSchema = z
  .object({
    collapsed: z.boolean().exactOptional(),
    columns: z.array(LabelModelSchema).exactOptional(),
    contains_line_items: z.boolean().exactOptional(),
    initialized: z.boolean().exactOptional(),
    label: z.string().exactOptional(),
    scope: z
      .enum(['document', 'page', 'section'])
      .default('section')
      .exactOptional()
      .openapi({ example: 'section' }),
  })
  .openapi({ required: [] })
  .openapi('TableModel')

const FormatModelGetSchema = z
  .object({
    document_types: z.array(DocumentTypeModelSchema).exactOptional(),
    id: z.string(),
    labels: z.array(LabelModelSchema).exactOptional(),
    name: z.string().exactOptional(),
    separators: z.array(SectionModelSchema).default([]).exactOptional(),
    table_types: z.array(TableModelSchema).exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('FormatModelGet')

const FormatModelPatchSchema = z
  .object({
    display_name: z.string().exactOptional(),
    document_types: z.array(DocumentTypeModelSchema).exactOptional(),
    labels: z.array(LabelModelSchema).exactOptional(),
    name: z.string().exactOptional(),
    separators: z.array(SectionModelSchema).default([]).exactOptional(),
    table_types: z.array(TableModelSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FormatModelPatch')

const FormatModelPostSchema = z
  .object({
    display_name: z.string().exactOptional(),
    document_types: z.array(DocumentTypeModelSchema).exactOptional(),
    labels: z.array(LabelModelSchema),
    name: z.string(),
    separators: z.array(SectionModelSchema).default([]).exactOptional(),
    table_types: z.array(TableModelSchema).exactOptional(),
  })
  .openapi({ required: ['labels', 'name'] })
  .openapi('FormatModelPost')

const InboxModelPostSchema = z
  .object({
    name: z.string(),
    project: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .openapi({ example: 'abcdef123456789abcdef123' }),
  })
  .openapi({ required: ['name', 'project'] })
  .openapi('InboxModelPost')

const InboxModelGetSchema = InboxModelPostSchema.and(
  z.object({ id: z.string() }).openapi({ required: ['id'] }),
).openapi('InboxModelGet')

const InboxModelPatchSchema = z
  .object({
    name: z.string().exactOptional(),
    project: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .exactOptional()
      .openapi({ example: 'abcdef123456789abcdef123' }),
  })
  .openapi({ required: [] })
  .openapi('InboxModelPatch')

const IntegrationModelGetSchema = z
  .object({
    type: z
      .enum(['webhook', 'dropbox', 'office365', 'email', 'imap', 'sftp', 'smtp', 'service_bus'])
      .exactOptional()
      .openapi({ example: 'webhook' }),
  })
  .openapi({ required: [] })
  .openapi('IntegrationModelGet')

const KeyValyePairSettingsModelSchema = z
  .object({
    classification_cutoff: z.int().exactOptional(),
    rule_config: z.object({}).exactOptional(),
    splitting_cutoff: z.int().exactOptional(),
    uer_pre_config: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KeyValyePairSettingsModel')

const MetadataOptionsSchema = z
  .object({
    columns: z.array(z.string()).exactOptional(),
    fields: FieldsInMetadataSchema.exactOptional(),
    include: z.boolean().default(false).exactOptional(),
    rename: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetadataOptions')

const PermissionsModelSchema = z
  .object({
    create_dropbox_user: z.boolean().default(false).exactOptional(),
    create_inbox: z.boolean().default(false).exactOptional(),
    create_webhook: z.boolean().default(false).exactOptional(),
    de_escalate_document: z.boolean().default(false).exactOptional(),
    delete_tenant: z.boolean().default(false).exactOptional(),
    delete_webhook: z.boolean().default(false).exactOptional(),
    edit_backend_settings: z.boolean().default(false).exactOptional(),
    edit_beats: z.boolean().default(false).exactOptional(),
    edit_dashboard_settings: z.boolean().default(false).exactOptional(),
    edit_data_retention_settings: z.boolean().default(false).exactOptional(),
    edit_flow_settings: z.boolean().default(false).exactOptional(),
    edit_format_settings: z.boolean().default(false).exactOptional(),
    edit_integration_settings: z.boolean().default(false).exactOptional(),
    edit_integrations: z.boolean().default(false).exactOptional(),
    edit_predictor_settings: z.boolean().default(false).exactOptional(),
    edit_reports: z.boolean().default(false).exactOptional(),
    edit_retention_settings: z.boolean().default(false).exactOptional(),
    edit_review_settings: z.boolean().default(false).exactOptional(),
    edit_roles: z.boolean().default(false).exactOptional(),
    edit_sampling_settings: z.boolean().default(false).exactOptional(),
    edit_security_settings: z.boolean().default(false).exactOptional(),
    edit_templates: z.boolean().default(false).exactOptional(),
    edit_thresholds_settings: z.boolean().default(false).exactOptional(),
    edit_translations: z.boolean().default(false).exactOptional(),
    edit_users: z.boolean().default(false).exactOptional(),
    escalate_document: z.boolean().default(false).exactOptional(),
    never_twice: z.boolean().default(false).exactOptional(),
    pick_next_escalated: z.boolean().default(false).exactOptional(),
    read_beats: z.boolean().default(false).exactOptional(),
    read_data_retention_settings: z.boolean().default(false).exactOptional(),
    read_feedback: z.boolean().default(false).exactOptional(),
    read_integrations: z.boolean().default(false).exactOptional(),
    read_release_notes: z.boolean().default(false).exactOptional(),
    read_reports: z.boolean().default(false).exactOptional(),
    read_thresholds_settings: z.boolean().default(false).exactOptional(),
    read_webhook: z.boolean().default(false).exactOptional(),
    reject_document: z.boolean().default(false).exactOptional(),
    release_lock: z.boolean().default(false).exactOptional(),
    review: z.boolean().default(false).exactOptional(),
    submit: z.boolean().default(false).exactOptional(),
    update_webhook: z.boolean().default(false).exactOptional(),
    upload: z.boolean().default(false).exactOptional(),
    versions: z.boolean().default(false).exactOptional(),
    view_api_keys: z.boolean().default(false).exactOptional(),
    view_list: z.boolean().default(false).exactOptional(),
    view_projects: z.boolean().default(false).exactOptional(),
    view_statistics: z.boolean().default(false).exactOptional(),
    view_templates: z.boolean().default(false).exactOptional(),
    write_feedback: z.boolean().default(false).exactOptional(),
    write_release_notes: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PermissionsModel')

const TableExtractionSettingsModelSchema = z
  .object({ field_settings: FieldSettingsDictModelSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('TableExtractionSettingsModel')

const PredictorSettingModelSchema = z
  .object({
    blacklist: z.object({}).exactOptional(),
    expected_values: z.object({}).exactOptional(),
    fallback: z.object({}).exactOptional(),
    key_value_pairs: KeyValyePairSettingsModelSchema.exactOptional(),
    table_extraction_settings: TableExtractionSettingsModelSchema.exactOptional(),
    whitelist: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PredictorSettingModel')

const PredictorModelGetSchema = PredictorSettingModelSchema.and(
  z.object({ scope: z.string() }).openapi({ required: ['scope'] }),
).openapi('PredictorModelGet')

const ProjectModelPatchSchema = z
  .object({
    default_document_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'This format is chosen as fallback' }),
    default_format: z
      .string()
      .exactOptional()
      .openapi({ description: 'This format is chosen as fallback' }),
    formats: z
      .array(z.string().openapi({ description: 'format IDs' }))
      .min(1)
      .exactOptional(),
    name: z.string().exactOptional(),
    split_into_sections: z.boolean().exactOptional(),
    sub_page_splitting: z.boolean().exactOptional(),
    timeout: z.int().exactOptional().openapi({ example: 10 }),
  })
  .openapi({ required: [] })
  .openapi('ProjectModelPatch')

const ProjectModelPostSchema = z
  .object({
    default_document_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'This format is chosen as fallback' }),
    default_format: z
      .string()
      .exactOptional()
      .openapi({ description: 'This format is chosen as fallback' }),
    formats: z.array(z.string().openapi({ description: 'format IDs' })).min(1),
    name: z.string(),
    split_into_sections: z.boolean().default(true),
    sub_page_splitting: z.boolean().default(false),
    timeout: z.int().exactOptional().openapi({ example: 10 }),
  })
  .openapi({ required: ['formats', 'name', 'split_into_sections', 'sub_page_splitting'] })
  .openapi('ProjectModelPost')

const SimpleIncludeSchema = z
  .object({ include: z.boolean().default(false).exactOptional() })
  .openapi({ required: [] })
  .openapi('SimpleInclude')

const ReportModelPostSchema = z
  .object({
    annotations: AnnotationOptionsSchema.exactOptional(),
    automation_blockers: SimpleIncludeSchema.exactOptional(),
    automation_score: SimpleIncludeSchema.exactOptional(),
    automation_what_if: SimpleIncludeSchema.exactOptional(),
    cover: SimpleIncludeSchema.exactOptional(),
    documents: z
      .array(
        z
          .string()
          .regex(/[A-z0-9]/)
          .length(24)
          .openapi({ example: 'abcdef123456789abcdef123' }),
      )
      .exactOptional(),
    elapse_time: SimpleIncludeSchema.exactOptional(),
    evaluations: EvaluationsOptionsSchema.exactOptional(),
    field_automation: SimpleIncludeSchema.exactOptional(),
    inboxes: z
      .array(
        z
          .string()
          .regex(/[A-z0-9]/)
          .length(24)
          .openapi({ example: 'abcdef123456789abcdef123' }),
      )
      .exactOptional(),
    lines: SimpleIncludeSchema.exactOptional(),
    metadata: MetadataOptionsSchema.exactOptional(),
    name: z.string().exactOptional(),
    page_classification: SimpleIncludeSchema.exactOptional(),
    projects: z
      .array(
        z
          .string()
          .regex(/[A-z0-9]/)
          .length(24)
          .openapi({ example: 'abcdef123456789abcdef123' }),
      )
      .exactOptional(),
    sections: SimpleIncludeSchema.exactOptional(),
    separator: z.string().default('|').exactOptional(),
    sources: z
      .array(z.enum(['human', 'machine']).openapi({ example: 'human' }))
      .default(['human', 'machine'])
      .exactOptional(),
    text: SimpleIncludeSchema.exactOptional(),
    version_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportModelPost')

const ReportModelFullGenerateSchema = ReportModelPostSchema.and(
  z
    .object({
      delivery_method: z
        .enum(['email', 'download'])
        .default('download')
        .exactOptional()
        .openapi({ example: 'email' }),
      email: z.string().exactOptional(),
      end_date: z.iso.datetime({ offset: true }).exactOptional(),
      start_date: z.iso.datetime({ offset: true }).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ReportModelFullGenerate')

const ReportModelGetSchema = ReportModelPostSchema.and(
  z.object({ id: z.string() }).openapi({ required: ['id'] }),
).openapi('ReportModelGet')

const ResetPasswordModelPostSchema = z
  .object({
    new_password: z.string().exactOptional().openapi({ description: "the new user's password" }),
    token: z.string().exactOptional().openapi({ description: 'the token to reset the password' }),
    user_name: z.string().exactOptional().openapi({ description: 'the username' }),
  })
  .openapi({ required: [] })
  .openapi('ResetPasswordModelPost')

const ReviewSettingsModelGetSchema = z
  .object({
    default_zoom: z.object({}).exactOptional(),
    first_toolbar: z.object({}).exactOptional(),
    lock_expiry: z.object({}).exactOptional(),
    review_options: z.object({}).exactOptional(),
    second_toolbar: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReviewSettingsModelGet')

const ReviewSettingsModelPatchSchema = z
  .object({
    scope: z.string().exactOptional(),
    settings: ReviewSettingsModelGetSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReviewSettingsModelPatch')

const RoleModelPostSchema = z
  .object({ name: z.string(), permissions: PermissionsModelSchema })
  .openapi({ required: ['name', 'permissions'] })
  .openapi('RoleModelPost')

const RoleModelGetSchema = RoleModelPostSchema.and(
  z.object({ id: z.string() }).openapi({ required: ['id'] }),
).openapi('RoleModelGet')

const RoleModelPatchSchema = z
  .object({ name: z.string().exactOptional(), permissions: PermissionsModelSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RoleModelPatch')

const RuleConfigModelSchema = z
  .object({ rule_config: z.object({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('RuleConfigModel')

const RuleConfigModelGetSchema = RuleConfigModelSchema.and(
  z.object({ scope: z.string() }).openapi({ required: ['scope'] }),
).openapi('RuleConfigModelGet')

const SamplingModelPatchSchema = z
  .object({
    auto_reject_FFR: z.int().exactOptional(),
    auto_submit_FFR: z.int().exactOptional(),
    second_pass_FFR: z.int().exactOptional(),
    second_pass_STP: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SamplingModelPatch')

const SamplingModelGetSchema = SamplingModelPatchSchema.and(
  z.object({ scope: z.string() }).openapi({ required: ['scope'] }),
).openapi('SamplingModelGet')

const SectionAtomSchema = z
  .object({
    confidence: z.int().exactOptional(),
    document_type: z.string().exactOptional(),
    format: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .exactOptional()
      .openapi({ example: 'abcdef123456789abcdef123' }),
    page: z.int(),
  })
  .openapi({ required: ['page'] })
  .openapi('SectionAtom')

const ThresholdModelSchema = z
  .object({
    annotations: z.object({}).exactOptional(),
    lines: z.object({}).exactOptional(),
    sections: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ThresholdModel')

const SettingThresholdModelPatchSchema = z
  .object({ thresholds: ThresholdModelSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('SettingThresholdModelPatch')

const SettingThresholdModelGetSchema = SettingThresholdModelPatchSchema.and(
  z.object({ scope: z.string().default('').exactOptional() }).openapi({ required: [] }),
).openapi('SettingThresholdModelGet')

const SsoConfigModelSchema = z
  .object({
    extra: ExtraModelSchema.exactOptional(),
    provider: z
      .string()
      .openapi({
        description:
          'usually your company name, only used for visualisation: log in as <provider> employee',
      }),
    type: z
      .literal('saml')
      .default('saml')
      .exactOptional()
      .openapi({
        description: 'Type of SSO integration, for now only SAML is supported',
        example: 'saml',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'SAML-P sign-on endpoint',
        example: 'https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/saml2',
      }),
  })
  .openapi({ required: ['provider'] })
  .openapi('SsoConfigModel')

const SsoConfigModelGetSchema = z
  .object({
    extra: ExtraModelSchema.exactOptional(),
    id: z.string(),
    provider: z
      .string()
      .openapi({
        description:
          'usually your company name, only used for visualisation: log in as <provider> employee',
      }),
    type: z
      .literal('saml')
      .default('saml')
      .exactOptional()
      .openapi({
        description: 'Type of SSO integration, for now only SAML is supported',
        example: 'saml',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'SAML-P sign-on endpoint',
        example: 'https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/saml2',
      }),
  })
  .openapi({ required: ['id', 'provider'] })
  .openapi('SsoConfigModelGet')

const SsoModelSchema = z
  .object({
    token: z
      .string()
      .exactOptional()
      .openapi({ description: 'the access token (JWT for oauth or SAML response)' }),
    type: z
      .enum(['oauth', 'saml'])
      .exactOptional()
      .openapi({ description: 'the type of SSO token', example: 'oauth' }),
  })
  .openapi({ required: [] })
  .openapi('SsoModel')

const StatusDataPostSchema = z
  .object({
    escalate: StateModelGetSchema.exactOptional(),
    last_version: z.string().exactOptional(),
    lock: StateModelGetSchema.exactOptional(),
    opened_by: StateModelGetSchema.exactOptional(),
    reject: StateModelGetSchema.exactOptional(),
    status_data: StatusDataModelSchema.exactOptional(),
    submitted: StateModelGetSchema.exactOptional(),
    timings: TimingsModelGetSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatusDataPost')

const ColumnBoundSchema = z
  .object({
    field_name: z.string().exactOptional(),
    x_bounds: z.array(z.int()).length(2).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ColumnBound')

const TableAnnotationPostSchema = z
  .object({
    bottom_right: z.array(z.int()).length(3).exactOptional(),
    columns: z.array(ColumnBoundSchema).exactOptional(),
    first_row_y_bounds: z.array(z.int()).length(2).exactOptional(),
    header_bottom_y: z.int().exactOptional(),
    name: z.string().exactOptional(),
    top_left: z.array(z.int()).length(3).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TableAnnotationPost')

const TagFieldModelGetSchema = z
  .object({ tag_fields: z.object({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('TagFieldModelGet')

const TenantModelGetSchema = z
  .object({ id: z.string() })
  .openapi({ required: ['id'] })
  .openapi('TenantModelGet')

const TenantModelPatchSchema = z
  .object({ code: z.int().exactOptional(), email: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TenantModelPatch')

const TokenModelBaseSchema = z
  .object({
    roles: z.array(TokenRoleModelSchema).exactOptional().openapi({ description: 'the user roles' }),
    username: z.string().openapi({ description: 'the user username' }),
  })
  .openapi({ required: ['username'] })
  .openapi('TokenModelBase')

const TokenReplyModelSchema = z
  .object({ authentication_token: z.string() })
  .openapi({ required: ['authentication_token'] })
  .openapi('TokenReplyModel')

const UserRoleModelSchema = z
  .object({
    document_id: z.string().exactOptional().openapi({ description: 'limited to a document' }),
    inbox: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .exactOptional()
      .openapi({ example: 'abcdef123456789abcdef123' }),
    role: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .openapi({ example: 'abcdef123456789abcdef123' }),
  })
  .openapi({ required: ['role'] })
  .openapi('UserRoleModel')

const UserModelGetSchema = z
  .object({
    active: z
      .boolean()
      .openapi({ description: 'Inactive users have to reset their password first' }),
    confirmed_at: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.string(),
    roles: z.array(UserRoleModelSchema).openapi({ description: 'the user roles' }),
    username: z.string().openapi({ description: 'the user username' }),
  })
  .openapi({ required: ['active', 'id', 'roles', 'username'] })
  .openapi('UserModelGet')

const UserRoleModelPatchSchema = z
  .object({
    inbox: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .exactOptional()
      .openapi({ example: 'abcdef123456789abcdef123' }),
    role: z
      .string()
      .regex(/[A-z0-9]/)
      .length(24)
      .exactOptional()
      .openapi({ example: 'abcdef123456789abcdef123' }),
  })
  .openapi({ required: [] })
  .openapi('UserRoleModelPatch')

const UserModelPatchSchema = z
  .object({
    roles: z
      .array(UserRoleModelPatchSchema)
      .exactOptional()
      .openapi({ description: 'the user roles' }),
    username: z.string().exactOptional().openapi({ description: 'the user username' }),
  })
  .openapi({ required: [] })
  .openapi('UserModelPatch')

const UserModelPostSchema = z
  .object({
    active: z
      .boolean()
      .openapi({ description: 'Inactive users have to reset their password first' }),
    password: z.string().exactOptional().openapi({ description: 'the user password' }),
    roles: z.array(UserRoleModelSchema).openapi({ description: 'the user roles' }),
    username: z.string().openapi({ description: 'the user username' }),
  })
  .openapi({ required: ['active', 'roles', 'username'] })
  .openapi('UserModelPost')

const VersionCompareSchema = z
  .object({ cmp_version_1: z.string(), cmp_version_2: z.string(), name: z.string() })
  .openapi({ required: ['cmp_version_1', 'cmp_version_2', 'name'] })
  .openapi('VersionCompare')

const AnnotationsSchema = z
  .object({ string: z.array(EvaluationAtomSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Annotations')

const CellsSchema = z
  .object({ string: EvaluationAtomSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Cells')

const LinesSchema = z
  .object({ string: z.array(CellsSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Lines')

const VersionPostSchema = z
  .object({
    annotations: AnnotationsSchema.exactOptional(),
    cmp_version: z.string().exactOptional(),
    evaluate: z.boolean().default(true).exactOptional(),
    lines: LinesSchema.exactOptional(),
    name: z.string().exactOptional(),
    sections: z.array(SectionAtomSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VersionPost')

const WorkflowModelSchema = z
  .object({
    graph: z.object({}).exactOptional(),
    links: z.object({}).exactOptional(),
    nodes: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkflowModel')

const DictionarySchema = z.object({}).openapi('Dictionary')

const AlfredExceptionResponse = { description: 'Handle Alfred specific exceptions' }

const ConflictErrorResponse = {
  description: 'Handle Conflict exceptions, as they define their own message',
}

const ExceptionResponse = { description: 'Return JSON instead of HTML for HTTP errors' }

const MaskErrorResponse = { description: 'When any error occurs on mask' }

const ParseErrorResponse = { description: "When a mask can't be parsed" }

const APIKeyRequestRequestBody = {
  content: { 'application/json': { schema: APIKeyRequestSchema } },
  required: true,
}

const ConnectionModelPostRequestBody = {
  content: { 'application/json': { schema: ConnectionModelPostSchema } },
  required: true,
}

const DocumentIdsRequestBody = {
  content: { 'application/json': { schema: DocumentIdsSchema } },
  required: true,
}

const IntegrationModelGetRequestBody = {
  content: { 'application/json': { schema: IntegrationModelGetSchema } },
  required: true,
}

const ReportModelPostRequestBody = {
  content: { 'application/json': { schema: ReportModelPostSchema } },
  required: true,
}

const TokenModelBaseRequestBody = {
  content: { 'application/json': { schema: TokenModelBaseSchema } },
  required: true,
}

const DictionaryRequestBody = {
  content: { 'application/json': { schema: DictionarySchema } },
  required: true,
}

const PostStyleSheetResourceRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          file: z
            .file()
            .openapi({ type: 'string', format: 'binary', description: 'File to handle' }),
        })
        .openapi({ required: ['file'] }),
    },
  },
  required: true,
}

const BasicSecurityScheme = { description: 'username and password', scheme: 'basic', type: 'http' }

const TokenSecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

export const getAboutReleaseNotesRoute = createRoute({
  method: 'get',
  path: '/about/release_notes',
  tags: ['about'],
  operationId: 'get_release_notes',
  responses: { 200: { description: 'Success' } },
})

export const getAboutVersionRoute = createRoute({
  method: 'get',
  path: '/about/version',
  tags: ['about'],
  operationId: 'get_version',
  responses: { 200: { description: 'Success' } },
})

export const postAuthRoute = createRoute({
  method: 'post',
  path: '/auth',
  tags: ['auth'],
  summary: 'Login and retrieve a JWT Token',
  description:
    'Login with the provided credentials (POST data) and return a JWT Token for this user.',
  operationId: 'post_auth',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AuthModelSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TokenReplyModelSchema } },
    },
    401: { description: 'Wrong credentials' },
  },
})

export const getAuthApiKeyRoute = createRoute({
  method: 'get',
  path: '/auth/api-key',
  tags: ['auth'],
  summary: 'Get all API-Key',
  description: '**Permission required:** view_api_keys',
  operationId: 'get_api_keys_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(APIKeyModelSchema) } },
    },
    403: { description: 'Permission insufficient' },
    404: { description: 'API-Key not found' },
  },
})

export const postAuthApiKeyRoute = createRoute({
  method: 'post',
  path: '/auth/api-key',
  tags: ['auth'],
  summary: 'Create a new API Key',
  description:
    'API Keys are simple randomly generated strings bound to roles that grant access to resources.\n\nEvery API Key maps to attributes defining its validity and can be revoked at any time.\n\nAPI Key can be passed in the **X-API-Key** HTTP Header and in the querystring **&api_key=**\n\n\n**Permission required:** edit_backend_settings',
  operationId: 'post_api_keys_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: APIKeyRequestRequestBody,
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: APIKeyModelSchema } } },
    403: { description: 'Permission insufficient' },
    404: { description: 'Role not found' },
  },
})

export const getAuthApiKeyInboxInboxIdRoute = createRoute({
  method: 'get',
  path: '/auth/api-key/inbox/{inbox_id}',
  tags: ['auth'],
  summary: 'Get all API-Keys for this inbox',
  description: '**Permission required:** view_api_keys',
  operationId: 'get_api_keys_inbox_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(APIKeyModelSchema) } },
    },
    403: { description: 'Permission insufficient' },
    404: { description: 'API-Key not found' },
  },
})

export const postAuthApiKeyInboxInboxIdRoute = createRoute({
  method: 'post',
  path: '/auth/api-key/inbox/{inbox_id}',
  tags: ['auth'],
  summary: 'Create a new API Key on inbox level',
  description:
    'The requesting user needs to have inbox level permissions\n\nAPI Keys are simple randomly generated strings bound to roles that grant access to resources.\n\nEvery API Key maps to attributes defining its validity and can be revoked at any time.\n\nAPI Key can be passed in the **X-API-Key** HTTP Header and in the querystring **&api_key=**\n\n\n**Permission required:** edit_backend_settings',
  operationId: 'post_api_keys_inbox_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: APIKeyRequestRequestBody,
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: APIKeyModelSchema } } },
    403: { description: 'Permission insufficient' },
    404: { description: 'Role not found' },
  },
})

export const getAuthApiKeyKeyRoute = createRoute({
  method: 'get',
  path: '/auth/api-key/{key}',
  tags: ['auth'],
  summary: 'Get details of an API-Key',
  description: '**Permission required:** view_api_keys',
  operationId: 'get_api_key_resource',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: APIKeyModelSchema } } },
    403: { description: 'Permission insufficient' },
  },
})

export const deleteAuthApiKeyKeyRoute = createRoute({
  method: 'delete',
  path: '/auth/api-key/{key}',
  tags: ['auth'],
  summary: 'Delete an API Key',
  description:
    "Completely remove an API Key, thus disabling it. The token won't be recoverable\n\n**Permission required:** edit_backend_settings",
  operationId: 'delete_api_key_resource',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const patchAuthApiKeyKeyRoute = createRoute({
  method: 'patch',
  path: '/auth/api-key/{key}',
  tags: ['auth'],
  summary: 'Edit an API-Key',
  description:
    "**roles** can't be modified after creation: you need to create a new token if you want other roles.\n\n**Permission required:** edit_backend_settings",
  operationId: 'patch_api_key_resource',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: APIKeyModelSchema } } },
    403: { description: 'Permission insufficient' },
  },
})

export const postAuthEphemeralRoute = createRoute({
  method: 'post',
  path: '/auth/ephemeral',
  tags: ['auth'],
  summary: 'Create a new ephemeral token',
  description:
    'Ephemeral tokens are short lived tokens that can be used to temporary grant access to resources.',
  operationId: 'post_ephemeral_token_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: TokenReplyModelSchema } },
    },
    404: { description: 'User not found' },
  },
})

export const postAuthGetJWTRoute = createRoute({
  method: 'post',
  path: '/auth/get_JWT',
  tags: ['auth'],
  summary: 'Create a new JWT Token',
  description:
    '## This endpoint is *deprecated* : use /auth/ephemeral and /auth/token instead\n\nThis endpoint requires authentication and requires the user to have the role **edit_users**: you can\nthen request a JWT on behalf of another user, specified in the request **username** attribute.\n\nThis endpoint has 2 modes depending on the presence or absence of the *roles* attribute in the request\ndata:\n\n## Regular token\n\nWhen sending only a **username**: a regular JWT Token bound to the given user is created and returned.\n\n## Temporary token\n\nWhen sending **username** AND a list **roles** of **role** (defined by the UID, optional the inbox to restrict access to):\na temporary token is created that will behave like a regular user with the given roles until the access token expires.\n\n**Permission required:** edit_users',
  operationId: 'post_get_jwt_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: TokenModelBaseRequestBody,
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: TokenReplyModelSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
  deprecated: true,
})

export const postAuthResetPasswordRoute = createRoute({
  method: 'post',
  path: '/auth/reset_password',
  tags: ['auth'],
  summary: 'Reset the user password',
  operationId: 'post_reset_password',
  request: {
    body: {
      content: { 'application/json': { schema: ResetPasswordModelPostSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' }, 403: { description: 'Reset Denied' } },
})

export const postAuthTokenRoute = createRoute({
  method: 'post',
  path: '/auth/token',
  tags: ['auth'],
  summary: 'Create a new token',
  description:
    'Bearer tokens can be used to authenticated without session or without sending credentials.\n\nIf the user making the request has sufficient privileges, he is allowed to create a token on behalf of another user.\nOtherwise only a token for the request current user is allowed.\n\n\n**Permission required:** edit_users',
  operationId: 'post_token_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: TokenModelBaseRequestBody,
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: TokenReplyModelSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getConnectionsRoute = createRoute({
  method: 'get',
  path: '/connections',
  tags: ['connections'],
  summary: 'Get all Connections',
  description:
    'Return the list of set up connections\n\n**Permission required:** edit_integrations',
  operationId: 'get_connections_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ConnectionModelGetSchema) } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const postConnectionsRoute = createRoute({
  method: 'post',
  path: '/connections',
  tags: ['connections'],
  summary: 'Create connection',
  description:
    'Create a new connection bound to the given scope (can be a project or inbox)\n\n**Permission required:** edit_integrations',
  operationId: 'post_connections_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: ConnectionModelPostRequestBody,
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: ConnectionModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getConnectionsConnectionIdRoute = createRoute({
  method: 'get',
  path: '/connections/{connection_id}',
  tags: ['connections'],
  summary: 'Get connection',
  description: 'Return the connection attributes\n\n**Permission required:** edit_integrations',
  operationId: 'get_connection_resource',
  request: {
    params: z.object({
      connection_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'connection_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConnectionModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const deleteConnectionsConnectionIdRoute = createRoute({
  method: 'delete',
  path: '/connections/{connection_id}',
  tags: ['connections'],
  summary: 'Delete a connection',
  description:
    'Delete the given connection.\n\n**WARNING** This will completely remove the connection, this is not recoverable\n\n**Permission required:** edit_integrations',
  operationId: 'delete_connection_resource',
  request: {
    params: z.object({
      connection_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'connection_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const patchConnectionsConnectionIdRoute = createRoute({
  method: 'patch',
  path: '/connections/{connection_id}',
  tags: ['connections'],
  summary: 'Update connection',
  description: 'attributes\n\n**Permission required:** edit_integrations',
  operationId: 'patch_connection_resource',
  request: {
    params: z.object({
      connection_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'connection_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: ConnectionModelPostRequestBody,
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConnectionModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getDataRetentionSettingsRoute = createRoute({
  method: 'get',
  path: '/data_retention_settings',
  tags: ['data_retention_settings'],
  summary: 'Get all data retention settings',
  description: '**Permission required:** read_data_retention_settings',
  operationId: 'get_data_retention_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(DataRetentionModelSchema) } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getDataRetentionSettingsLevelIdRoute = createRoute({
  method: 'get',
  path: '/data_retention_settings/{level}/{id}',
  tags: ['data_retention_settings'],
  summary: 'Get scoped data retention settings',
  description: '**Permission required:** read_data_retention_settings',
  request: {
    params: z.object({
      level: z
        .string()
        .openapi({
          param: { in: 'path', name: 'level', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DataRetentionModelSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const deleteDataRetentionSettingsLevelIdRoute = createRoute({
  method: 'delete',
  path: '/data_retention_settings/{level}/{id}',
  tags: ['data_retention_settings'],
  summary: 'Delete scoped sampling settings',
  description: '**Permission required:** edit_data_retention_settings',
  operationId: 'delete_data_retention_resource',
  request: {
    params: z.object({
      level: z
        .string()
        .openapi({
          param: { in: 'path', name: 'level', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const patchDataRetentionSettingsLevelIdRoute = createRoute({
  method: 'patch',
  path: '/data_retention_settings/{level}/{id}',
  tags: ['data_retention_settings'],
  summary: 'Update scoped data retention settings',
  description: '**Permission required:** edit_data_retention_settings',
  operationId: 'patch_data_retention_resource',
  request: {
    params: z.object({
      level: z
        .string()
        .openapi({
          param: { in: 'path', name: 'level', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DataRetentionModelPatchSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DataRetentionModelSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const postDocumentsIndexRoute = createRoute({
  method: 'post',
  path: '/documents/',
  tags: ['documents'],
  summary: 'Upload a new document',
  description:
    'This endpoint is a simplified version of the upload document to inbox one - synchronous mode.\n\nThe upload file will be upload to the given inbox if provided, else fallback to the **invoice** inbox.\nThe file will be processed synchronously, ie the request will blocks until the document was processed\n*or* until it timeout; in this case the document might **not** be correctly processed.\n\n\nFor a more reliable processing use the /documents/{inbox_id} endpoint in async mode\n\n\n**Permission required:** upload',
  operationId: 'post_simple_documents_resource',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              experimental: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Use the experimental processing workflow' }),
              file: z
                .file()
                .openapi({ type: 'string', format: 'binary', description: 'File to process' }),
              inbox_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'Inbox to use. Default to the **invoice** inbox' }),
              key_value_flag: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'If true the result will only contains mapping of prediction = value',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const postDocumentsCustomOutputRoute = createRoute({
  method: 'post',
  path: '/documents/custom_output',
  tags: ['documents'],
  summary: 'Generate custom output for documents',
  description:
    'Using the provided filter on documents, will generate a custom output.\n\n**Note:** only excel output is supported at the moment.\n\n**Permission required:** review',
  operationId: 'post_document_custom_output_resource',
  request: {
    body: { content: { 'application/json': { schema: CustomOutputPostSchema } }, required: true },
  },
  responses: {
    200: { description: 'File Attached' },
    403: { description: 'Permission insufficient' },
  },
})

export const postDocumentsEnrichRoute = createRoute({
  method: 'post',
  path: '/documents/enrich',
  tags: ['documents'],
  operationId: 'post_enrichment_resource',
  request: {
    body: {
      content: { 'application/json': { schema: EnrichmentModelPostSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const postDocumentsFileQueryDataTypeRoute = createRoute({
  method: 'post',
  path: '/documents/file_query/{data_type}',
  tags: ['documents'],
  operationId: 'post_document_data_resource',
  request: {
    params: z.object({
      data_type: z
        .string()
        .default('document')
        .openapi({
          param: {
            description:
              "Define the data that you want to get out. Possible options: ['document', 'reverse', 'text']",
            in: 'path',
            name: 'data_type',
            required: true,
            schema: { default: 'document', type: 'string' },
          },
        }),
    }),
    body: DocumentIdsRequestBody,
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'Unsupported argument' },
    403: { description: 'Permission insufficient' },
    422: { description: 'Document list invalid' },
  },
})

export const postDocumentsQueryQueryTypeRoute = createRoute({
  method: 'post',
  path: '/documents/query/{query_type}',
  tags: ['documents'],
  operationId: 'post_document_query',
  request: {
    params: z.object({
      query_type: z
        .string()
        .openapi({
          param: { in: 'path', name: 'query_type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AggregationPipelinePostSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const getDocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/documents/{document_id}',
  tags: ['documents'],
  summary: 'Get the document',
  description:
    'Simple endpoint that will fetch the given document\n\n**Permission required:** review',
  operationId: 'get_document_delete_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 403: { description: 'Permission insufficient' } },
})

export const deleteDocumentsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/documents/{document_id}',
  tags: ['documents'],
  summary: 'Delete the document',
  description:
    'how parameter: if how == "FULL", we delete the entire document, including its source files\nif how == "SOURCE_FILES", we only remove the (source) files and we set the archived flag. In practice this means\nall information in the database (json) remains available, but you can no longer download / visualise the original document.\n\n**WARNING** The removal (of source files and in the database) is permanent\n\n\n**Permission required:** review',
  operationId: 'delete_document_delete_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      how: z
        .enum(['FULL', 'SOURCE_FILES'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'how',
            schema: { default: 'predicted', enum: ['FULL', 'SOURCE_FILES'], type: 'string' },
            required: false,
          },
          default: 'predicted',
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const postDocumentsDocumentIdCompareVersionsRoute = createRoute({
  method: 'post',
  path: '/documents/{document_id}/compare_versions',
  tags: ['documents'],
  operationId: 'post_document_compare_versions_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: VersionCompareSchema } }, required: true },
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const getDocumentsDocumentIdCustomOutputRoute = createRoute({
  method: 'get',
  path: '/documents/{document_id}/custom_output',
  tags: ['documents'],
  summary: 'Get custom output formatted document',
  description:
    'If you have a custom output configured (this is set by contract.fit team), This allows you to\nget the custom output formatted document.\n\n\n**Permission required:** review',
  operationId: 'get_document_transform_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'No custom output' },
  },
})

export const postDocumentsDocumentIdFeedbackRoute = createRoute({
  method: 'post',
  path: '/documents/{document_id}/feedback',
  tags: ['documents'],
  summary: 'Submit a feedback',
  description:
    'Send a feedback for the given document and optionally evaluate.\n\nWhen a document is to be reviewed, this endpoint is used to send the user feedback.\n\n**Permission required:** submit',
  operationId: 'post_document_submit_eval_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: VersionPostSchema } }, required: true },
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const getDocumentsDocumentIdLastVersionRoute = createRoute({
  method: 'get',
  path: '/documents/{document_id}/last_version',
  tags: ['documents'],
  summary: 'Get latest version',
  description:
    'Get the latest possible version for this document, optionally with constraints on the source or name\n\n**Permission required:** review',
  operationId: 'get_document_last_version_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return a specific named version, default is latest',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'human or machine (default either)',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      is_evaluated: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Do you want to receive unevaluated version (for display, default) or evaluated (for stats)',
            in: 'query',
            name: 'is_evaluated',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 403: { description: 'Permission insufficient' } },
})

export const getDocumentsDocumentIdOriginalFileRoute = createRoute({
  method: 'get',
  path: '/documents/{document_id}/original_file',
  tags: ['documents'],
  summary: 'Get document original file',
  description:
    'Return the document original file, as attachment.\n\n**Permission required:** review',
  operationId: 'get_document_original_file_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'File attached' },
    403: { description: 'Permission insufficient' },
  },
})

export const getDocumentsDocumentIdPagePageRangeRoute = createRoute({
  method: 'get',
  path: '/documents/{document_id}/page/{page_range}',
  tags: ['documents'],
  operationId: 'get_document_page_image_resource',
  request: {
    params: z.object({
      page_range: z
        .string()
        .openapi({
          param: {
            description:
              'The number of the page, starting from 0. A range of pages, separated by ":" is also allowed to return a zip file.',
            in: 'path',
            name: 'page_range',
            required: true,
            schema: { type: 'string' },
          },
        }),
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const getDocumentsDocumentIdPageThumbnailPageRangeRoute = createRoute({
  method: 'get',
  path: '/documents/{document_id}/page_thumbnail/{page_range}',
  tags: ['documents'],
  operationId: 'get_document_page_image_thumbnail_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
      page_range: z
        .string()
        .openapi({
          param: { in: 'path', name: 'page_range', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const postDocumentsDocumentIdProcessTableAnnotationRoute = createRoute({
  method: 'post',
  path: '/documents/{document_id}/process_table_annotation',
  tags: ['documents'],
  summary: 'Process a table-level annotation',
  description:
    'A fast and convenient annotation tool that converts a table-level annotation to cell-level feedback.\n\n**Permission required:** review',
  operationId: 'post_document_process_table_annotation',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TableAnnotationPostSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const postDocumentsDocumentIdReprocessRoute = createRoute({
  method: 'post',
  path: '/documents/{document_id}/reprocess',
  tags: ['documents'],
  summary: 'Schedule document reprocessing',
  description:
    'This endpoint schedules (async) reprocessing for the given document;\nit will call the async processing with the given desired version name,\nsimilar to the async document upload but skipping OCR.\nIt works asynchronously, so results need to be consulted by a separate call (or webhook)\n\n\n**Permission required:** upload',
  operationId: 'post_reprocess_document_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .default('reprocessed')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: { default: 'reprocessed', type: 'string' },
            required: false,
          },
        }),
      reviewer: z
        .enum(['Human', 'Machine'])
        .default('Machine')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If human repcrocessing is triggered, the last version will become the passed version. No processing is done.',
            in: 'query',
            name: 'reviewer',
            schema: { default: 'Machine', enum: ['Human', 'Machine'], type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getDocumentsDocumentIdReversePageRangeRoute = createRoute({
  method: 'get',
  path: '/documents/{document_id}/reverse/{page_range}',
  tags: ['documents'],
  operationId: 'get_document_reverse_resource',
  request: {
    params: z.object({
      page_range: z
        .string()
        .openapi({
          param: {
            description:
              'The number of the page, starting from 0. A range of pages, separated by ":" is also allowed to return a zip file.',
            in: 'path',
            name: 'page_range',
            required: true,
            schema: { type: 'string' },
          },
        }),
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const postDocumentsDocumentIdStatusDataRoute = createRoute({
  method: 'post',
  path: '/documents/{document_id}/status_data',
  tags: ['documents'],
  summary: 'Update document status',
  description:
    'Update the given document status data with the request user and date.\n\nEach document defines some status:\n- lock\n- escalate\n- reject\n- delete\n- archive\n- submitted\n\nThese fields have 3 attributes:\n- status true / false\n- since: datetime (UTC)\n- by: user ID\n\nBy calling this endpoint you can update the given status data with the request user\n(the one authenticated) and the current datetime.\n**Note** : You cannot pass a user in the request nor a datetime\n\n**Permission required:** review',
  operationId: 'post_document_status_data_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StatusDataPostSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getDocumentsDocumentIdTextRoute = createRoute({
  method: 'get',
  path: '/documents/{document_id}/text',
  tags: ['documents'],
  summary: 'Get the document text',
  description:
    'Return the optimal text for the document; will either be the OCR text, the native text,\nthe raw text or a translated version.\n\nTo ease the data volume from the DB, we lazy load only the relevant text for the document.\n\n**Permission required:** review',
  operationId: 'get_document_text_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 403: { description: 'Permission insufficient' } },
})

export const getDocumentsDocumentIdWorkflowRoute = createRoute({
  method: 'get',
  path: '/documents/{document_id}/workflow',
  tags: ['documents'],
  summary: 'Get the document Workflow',
  description: '**WARNING experimental use only**\n\n\n**Permission required:** upload',
  operationId: 'get_document_workflow_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WorkflowModelSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const postDocumentsInboxIdRoute = createRoute({
  method: 'post',
  path: '/documents/{inbox_id}',
  tags: ['documents'],
  summary: 'Upload a new doc to the inbox',
  description:
    'This endpoint uploads a new file to the given inbox and will process the file.\n\n## Upload mode: sync\n\nWhen sync=true (default), the call will block and wait for the processing to complete.\n\nIf you have a custom output configured (this is set by contract.fit team),\npassing mimetype *application/vnd.cf.custom* will allow you to get the custom output formatted result\n\nSince it might yield inconsistent results if a timeout is raised while waiting,\nit is recommended to use the **async** mode.\n\n## Upload mode: async\n\nWhen sync=false, the call will schedule the processing and return without waiting for completion.\nIt will return the document ID, so that the processed document can be retrieved at a later date.\n\n**Permission required:** upload',
  operationId: 'post_documents_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              experimental: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Use the experimental processing workflow' }),
              file: z
                .file()
                .openapi({ type: 'string', format: 'binary', description: 'File to process' }),
              key_value_flag: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If true the result will only contains mapping of prediction = value',
                }),
              sync: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({ description: 'Flag enable sync or async processing' }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    415: { description: 'Image Recognition Error' },
  },
})

export const patchDocumentsInboxIdCopyInboxRoute = createRoute({
  method: 'patch',
  path: '/documents/{inbox_id}/copy_inbox',
  tags: ['documents'],
  summary: 'Copy documents to another inbox',
  description:
    'Copy documents in the provided list to another inbox.\n\nIf the destination inbox is the same as the original inbox, the request will be aborted, no duplicates\nwill be created\n\n\n**Permission required:** review',
  operationId: 'patch_document_copy_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: {
            description: 'The uuid of the inbox where the document(s) should be copied to',
            in: 'path',
            name: 'inbox_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: DocumentIdsRequestBody,
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const patchDocumentsInboxIdMoveInboxRoute = createRoute({
  method: 'patch',
  path: '/documents/{inbox_id}/move_inbox',
  tags: ['documents'],
  summary: 'Move documents to another inbox',
  description:
    'Move documents in the provided list to another inbox.\n\nIf the destination inbox is the same as the original inbox, the request will be aborted.\n\n\n**Permission required:** review',
  operationId: 'patch_document_move_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: {
            description: 'The uuid of the inbox where the document(s) have to be moved',
            in: 'path',
            name: 'inbox_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: DocumentIdsRequestBody,
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const getFormatsRoute = createRoute({
  method: 'get',
  path: '/formats',
  tags: ['formats'],
  summary: 'Get lists of format',
  description: 'Return the formats\n\n**Deprecated**: display_name\n**Deprecated**: default_format',
  operationId: 'get_formats_resource',
  responses: { 200: { description: 'Success' } },
})

export const postFormatsRoute = createRoute({
  method: 'post',
  path: '/formats',
  tags: ['formats'],
  summary: 'Create format',
  description:
    'Create an new format\n\n**Deprecated**: display_name\n**Deprecated**: default_format\n\n**Permission required:** edit_format_settings',
  operationId: 'post_formats_resource',
  request: {
    body: { content: { 'application/json': { schema: FormatModelPostSchema } }, required: true },
  },
  responses: { 403: { description: 'Permission insufficient' } },
})

export const getFormatsDocumentTypesRoute = createRoute({
  method: 'get',
  path: '/formats/document_types',
  tags: ['formats'],
  summary: 'Get supported document_types',
  description: '**Permission required:** edit_format_settings',
  operationId: 'get_formats_doc_types_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentTypeModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getFormatsFormatIdRoute = createRoute({
  method: 'get',
  path: '/formats/{format_id}',
  tags: ['formats'],
  summary: 'Get format attributes',
  description:
    'Return the given format attributes\n\n**Deprecated**: display_name\n**Deprecated**: default_format\n\n**Permission required:** edit_format_settings / review',
  operationId: 'get_format_resource',
  request: {
    params: z.object({
      format_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'format_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 403: { description: 'Permission insufficient' } },
})

export const deleteFormatsFormatIdRoute = createRoute({
  method: 'delete',
  path: '/formats/{format_id}',
  tags: ['formats'],
  summary: 'Delete the format',
  description:
    '**WARNING** This will completely remove the documents, this is **not recoverable**\n\n**Permission required:** edit_format_settings',
  operationId: 'delete_format_resource',
  request: {
    params: z.object({
      format_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'format_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Permission insufficient' },
  },
})

export const patchFormatsFormatIdRoute = createRoute({
  method: 'patch',
  path: '/formats/{format_id}',
  tags: ['formats'],
  summary: 'Update the format',
  description:
    'settings with the given attributes\n\n**Deprecated**: display_name\n**Deprecated**: default_format\n\n**Permission required:** edit_format_settings',
  operationId: 'patch_format_resource',
  request: {
    params: z.object({
      format_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'format_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FormatModelPatchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormatModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getFormatsScopeTagFieldsRoute = createRoute({
  method: 'get',
  path: '/formats/{scope}/tag_fields',
  tags: ['formats'],
  summary: 'Get tags values',
  description:
    'Get the tag fields values bound to the given scope.\n\nScope can be an inbox or a project\n\n\n**Permission required:** edit_format_settings / review',
  operationId: 'get_format_tag_fields_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagFieldModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getInboxesRoute = createRoute({
  method: 'get',
  path: '/inboxes',
  tags: ['inboxes'],
  summary: 'Get list of inboxes',
  description: 'Simply return the list of inboxes',
  operationId: 'get_inboxes_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(InboxModelGetSchema) } },
    },
  },
})

export const postInboxesRoute = createRoute({
  method: 'post',
  path: '/inboxes',
  tags: ['inboxes'],
  summary: 'Create an inbox',
  description:
    'Create a new inbox in the given **project**\n\n**Permission required:** create_inbox',
  operationId: 'post_inboxes_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InboxModelPostSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: InboxModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
    404: { description: 'Project Not Found' },
  },
})

export const getInboxesInboxIdRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}',
  tags: ['inboxes'],
  summary: 'Get Inbox attributes',
  description: 'Get the given inbox attributes\n\n**Permission required:** view_list',
  operationId: 'get_inbox_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboxModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const deleteInboxesInboxIdRoute = createRoute({
  method: 'delete',
  path: '/inboxes/{inbox_id}',
  tags: ['inboxes'],
  summary: 'Delete an inbox',
  description:
    'Delete the given inbox.\n\n**WARNING** This will completely remove the inbox, this is not recoverable',
  operationId: 'delete_inbox_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 404: { description: 'Not Found' } },
})

export const patchInboxesInboxIdRoute = createRoute({
  method: 'patch',
  path: '/inboxes/{inbox_id}',
  tags: ['inboxes'],
  summary: 'Update inbox',
  description:
    'Update the given inbox with the provided arguments\n\n**Permission required:** view_list',
  operationId: 'patch_inbox_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InboxModelPatchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboxModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const getInboxesInboxIdDocumentVersionsRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}/document_versions',
  tags: ['inboxes'],
  operationId: 'get_inbox_document_versions_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const getInboxesInboxIdDocumentsRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}/documents',
  tags: ['inboxes'],
  summary: 'Get documents in the inbox',
  description: '**Permission required:** view_list',
  operationId: 'get_inbox_document_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(DocumentModelGetSchema) } },
    },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const deleteInboxesInboxIdDocumentsRoute = createRoute({
  method: 'delete',
  path: '/inboxes/{inbox_id}/documents',
  tags: ['inboxes'],
  summary: 'Delete documents',
  description:
    'in the given inbox.\n\nhow parameter: if how == "FULL", we delete the entire document, including its source files\nif how == "SOURCE_FILES", we only remove the (source) files and we set the archived flag. In practice this means\nall information in the database (json) remains available, but you can no longer download / visualise the original document.\n\nwhat parameter: if what == "DONE", we will only delete files which have status_data.feedback == True\nif what == "ALL" we will delete all files\n\nStart_date and end_date: when specified we will only delete files which are received after (respectively before) the timestamp\n\n**WARNING** This will completely remove the documents, this is **not recoverable**',
  operationId: 'delete_inbox_document_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      how: z
        .enum(['FULL', 'SOURCE_FILES'])
        .default('FULL')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'how',
            schema: { default: 'FULL', enum: ['FULL', 'SOURCE_FILES'], type: 'string' },
            required: false,
          },
        }),
      what: z
        .enum(['ALL', 'DONE'])
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'what',
            schema: { default: 'ALL', enum: ['ALL', 'DONE'], type: 'string' },
            required: false,
          },
        }),
      start_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start_date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end_date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' }, 404: { description: 'Not Found' } },
})

export const getInboxesInboxIdPaginatedRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}/paginated',
  tags: ['inboxes'],
  summary: 'Get paginated list of documents in the inbox',
  description: '**Permission required:** view_list',
  operationId: 'get_inbox_paginated_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number to fetch',
            in: 'query',
            name: 'page',
            schema: { default: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
      start_receive_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start_receive_date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end_receive_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end_receive_date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      order_by: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'comma seperated list of fields to order by',
            in: 'query',
            name: 'order_by',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(DocumentModelPaginatedSchema) } },
    },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const postInboxesInboxIdReprocessRoute = createRoute({
  method: 'post',
  path: '/inboxes/{inbox_id}/reprocess',
  tags: ['inboxes'],
  summary: 'Schedule inbox reprocessing',
  description:
    'This endpoint schedule reprocessing for documents in the given inbox; this will call the async processing,\njust like async document upload\n\n\n**Permission required:** upload',
  operationId: 'post_inbox_reprocess_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .default('predicted')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: { default: 'predicted', type: 'string' },
            required: false,
          },
        }),
      reviewer: z
        .enum(['Human', 'Machine'])
        .default('Machine')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If human repcrocessing is triggered, the last version will become the passed version. No processing is done.',
            in: 'query',
            name: 'reviewer',
            schema: { default: 'Machine', enum: ['Human', 'Machine'], type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              hints: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Additional hints as a dictionary. Example: {"VAT_number":{"blacklist":"XXXX.XXX.XXX", "whitelist": ["YYYY.YYY.YYY", "ZZZZ.ZZZ.ZZZ"]}}',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const getIntegrationsIndexRoute = createRoute({
  method: 'get',
  path: '/integrations/',
  tags: ['integrations'],
  summary: 'Get all integrations',
  description:
    'Return the list of set up integrations\n\n**Permission required:** read_integrations',
  operationId: 'get_integration_resources',
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const postIntegrationsIndexRoute = createRoute({
  method: 'post',
  path: '/integrations/',
  tags: ['integrations'],
  summary: 'Create integration',
  description:
    'Create a new integration. Each type of integration has its own initialization logic and thus may\nyield suitable error codes depending on the underlying issue, such as credentials or connectivity issue.\n\n**Permission required:** edit_integrations',
  operationId: 'post_integration_resources',
  request: { body: IntegrationModelGetRequestBody },
  responses: {
    200: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const getIntegrationsIntegrationIdRoute = createRoute({
  method: 'get',
  path: '/integrations/{integration_id}',
  tags: ['integrations'],
  summary: 'Get integration attributes',
  description:
    'Return the given integration attributes\n\n**Permission required:** read_integrations',
  operationId: 'get_integration_resource',
  request: {
    params: z.object({
      integration_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'integration_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const deleteIntegrationsIntegrationIdRoute = createRoute({
  method: 'delete',
  path: '/integrations/{integration_id}',
  tags: ['integrations'],
  summary: 'Delete an integration',
  description:
    'Delete the given integration.\n\n**WARNING** This will completely remove the integration, this is not recoverable\n\n**Permission required:** edit_integrations',
  operationId: 'delete_integration_resource',
  request: {
    params: z.object({
      integration_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'integration_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const patchIntegrationsIntegrationIdRoute = createRoute({
  method: 'patch',
  path: '/integrations/{integration_id}',
  tags: ['integrations'],
  summary: 'Update integration',
  description:
    'Update the given integration attributes\n\n**Permission required:** edit_integrations',
  operationId: 'patch_integration_resource',
  request: {
    params: z.object({
      integration_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'integration_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: IntegrationModelGetRequestBody,
  },
  responses: {
    200: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const getIntegrationsIntegrationIdActivateRoute = createRoute({
  method: 'get',
  path: '/integrations/{integration_id}/activate',
  tags: ['integrations'],
  operationId: 'get_email_integration_activation_resource',
  request: {
    params: z.object({
      integration_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'integration_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      secret: z
        .string()
        .openapi({
          param: { in: 'query', name: 'secret', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    302: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const getPredictorSettingsRoute = createRoute({
  method: 'get',
  path: '/predictor_settings',
  tags: ['predictor_settings'],
  summary: 'Get all predictor settings',
  description: '**Permission required:** edit_predictor_settings',
  operationId: 'get_predictor_settings_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(PredictorModelGetSchema) } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getPredictorSettingsScopeRoute = createRoute({
  method: 'get',
  path: '/predictor_settings/{scope}',
  tags: ['predictor_settings'],
  summary: 'Get scoped predictor settings',
  description: '**Permission required:** edit_predictor_settings',
  operationId: 'get_predictor_setting_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PredictorModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const deletePredictorSettingsScopeRoute = createRoute({
  method: 'delete',
  path: '/predictor_settings/{scope}',
  tags: ['predictor_settings'],
  summary: 'Delete scoped predictor settings',
  description: '**Permission required:** edit_predictor_settings',
  operationId: 'delete_predictor_setting_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const patchPredictorSettingsScopeRoute = createRoute({
  method: 'patch',
  path: '/predictor_settings/{scope}',
  tags: ['predictor_settings'],
  summary: 'Update scoped predictor settings',
  description: '**Permission required:** edit_predictor_settings',
  operationId: 'patch_predictor_setting_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PredictorSettingModelSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PredictorModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  tags: ['projects'],
  summary: 'Get the list of projects',
  description:
    'Return the list of projects in the organization\n\n\n**Deprecated**: default_format',
  operationId: 'get_projects_resource',
  responses: { 200: { description: 'Success' } },
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/projects',
  tags: ['projects'],
  summary: 'Create a project',
  description:
    'Simply create a new project\n\n**Deprecated**: default_format\n\n**Permission required:** create_inbox',
  operationId: 'post_projects_resource',
  request: {
    body: { content: { 'application/json': { schema: ProjectModelPostSchema } }, required: true },
  },
  responses: {
    403: { description: 'Permission insufficient' },
    404: { description: 'Format Not Found' },
  },
})

export const getProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}',
  tags: ['projects'],
  summary: 'Get project attributes',
  description: 'Get the attributes of the given project\n\n\n**Deprecated**: default_format',
  operationId: 'get_project_resource',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 404: { description: 'Not Found' } },
})

export const deleteProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{project_id}',
  tags: ['projects'],
  summary: 'Delete project',
  description:
    'Delete the given project.\n\n**WARNING** This will completely remove the project, this is not recoverable\n\n**Permission required:** edit_format_settings',
  operationId: 'delete_project_resource',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const patchProjectsProjectIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{project_id}',
  tags: ['projects'],
  summary: 'Update project',
  description:
    'Update the project attributes with the provided arguments\n\n\n**Deprecated**: default_format\n\n**Permission required:** edit_format_settings',
  operationId: 'patch_project_resource',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'project_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: ProjectModelPatchSchema } }, required: true },
  },
  responses: { 403: { description: 'Permission insufficient' }, 404: { description: 'Not Found' } },
})

export const getReportsRoute = createRoute({
  method: 'get',
  path: '/reports',
  tags: ['reports'],
  summary: 'Get all reports',
  description: 'Return the list of reports\n\n**Permission required:** read_reports',
  operationId: 'get_reports_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ReportModelGetSchema) } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const postReportsRoute = createRoute({
  method: 'post',
  path: '/reports',
  tags: ['reports'],
  summary: 'Create report',
  description: 'Create a new report\n\n**Permission required:** edit_reports',
  operationId: 'post_reports_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: ReportModelPostRequestBody,
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: ReportModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
    405: { description: 'Missing fields' },
  },
})

export const postReportsGenerateRoute = createRoute({
  method: 'post',
  path: '/reports/generate',
  tags: ['reports'],
  summary: 'Generate report based on input',
  description:
    '**Note**: start_date and end_date filter on status update\n\n**Permission required:** read_reports',
  operationId: 'post_generate_report_resource',
  request: {
    body: {
      content: { 'application/json': { schema: ReportModelFullGenerateSchema } },
      required: true,
    },
  },
  responses: { 403: { description: 'Permission insufficient' } },
})

export const getReportsReportIdRoute = createRoute({
  method: 'get',
  path: '/reports/{report_id}',
  tags: ['reports'],
  summary: 'Get report',
  description: 'Return report attributes\n\n**Permission required:** read_reports',
  operationId: 'get_report_resource',
  request: {
    params: z.object({
      report_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'report_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReportModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
    404: { description: 'Report Not Found' },
  },
})

export const deleteReportsReportIdRoute = createRoute({
  method: 'delete',
  path: '/reports/{report_id}',
  tags: ['reports'],
  summary: 'Delete a report',
  description:
    'Delete the given report.\n\n**WARNING** This will completely remove the report, this is not recoverable\n\n**Permission required:** edit_reports',
  operationId: 'delete_report_resource',
  request: {
    params: z.object({
      report_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'report_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Report Not Found' },
  },
})

export const patchReportsReportIdRoute = createRoute({
  method: 'patch',
  path: '/reports/{report_id}',
  tags: ['reports'],
  summary: 'Update report',
  description:
    'Modify the report with the given arguments\n\n**Permission required:** edit_reports',
  operationId: 'patch_report_resource',
  request: {
    params: z.object({
      report_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'report_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: ReportModelPostRequestBody,
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReportModelPostSchema } },
    },
    403: { description: 'Permission insufficient' },
    404: { description: 'Report Not Found' },
  },
})

export const postReportsReportIdGenerateRoute = createRoute({
  method: 'post',
  path: '/reports/{report_id}/generate',
  tags: ['reports'],
  summary: 'Generate report based on report id',
  description:
    '**Note**: start_date and end_date filter on status update\n\n**Permission required:** read_reports',
  operationId: 'post_generate_report_id_resource',
  request: {
    params: z.object({
      report_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'report_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      delivery_method: z
        .enum(['download', 'email'])
        .openapi({
          param: {
            in: 'query',
            name: 'delivery_method',
            required: true,
            schema: { enum: ['download', 'email'], type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'email', schema: { type: 'string' }, required: false },
        }),
      start_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start_date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end_date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 403: { description: 'Permission insufficient' }, 404: { description: 'Not Found' } },
})

export const getRolesRoute = createRoute({
  method: 'get',
  path: '/roles',
  tags: ['roles'],
  summary: 'Get all roles',
  description: 'Return the list of roles',
  operationId: 'get_roles_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(RoleModelGetSchema) } },
    },
  },
})

export const postRolesRoute = createRoute({
  method: 'post',
  path: '/roles',
  tags: ['roles'],
  summary: 'Create role',
  description: 'Create a new role\n\n**Permission required:** edit_users',
  operationId: 'post_roles_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleModelPostSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: RoleModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
    405: { description: 'Missing fields' },
  },
})

export const getRolesRoleIdRoute = createRoute({
  method: 'get',
  path: '/roles/{role_id}',
  tags: ['roles'],
  summary: 'Get role',
  description: 'Return role attributes',
  operationId: 'get_role_resource',
  request: {
    params: z.object({
      role_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'role_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RoleModelGetSchema } },
    },
    404: { description: 'Role Not Found' },
  },
})

export const deleteRolesRoleIdRoute = createRoute({
  method: 'delete',
  path: '/roles/{role_id}',
  tags: ['roles'],
  summary: 'Delete a role',
  description:
    'Delete the given role.\n\n**WARNING** This will completely remove the role, this is not recoverable\n\n**Permission required:** edit_users',
  operationId: 'delete_role_resource',
  request: {
    params: z.object({
      role_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'role_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Role Not Found' },
  },
})

export const patchRolesRoleIdRoute = createRoute({
  method: 'patch',
  path: '/roles/{role_id}',
  tags: ['roles'],
  summary: 'Update role',
  description: 'Modify the role with the given arguments\n\n**Permission required:** edit_users',
  operationId: 'patch_role_resource',
  request: {
    params: z.object({
      role_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'role_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleModelPatchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RoleModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
    404: { description: 'Role Not Found' },
  },
})

export const getRuleConfigRoute = createRoute({
  method: 'get',
  path: '/rule_config',
  tags: ['rule_config'],
  summary: 'Get all rule configs',
  description: '**Permission required:** edit_predictor_settings',
  operationId: 'get_rule_configs_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(RuleConfigModelGetSchema) } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const postRuleConfigRuleEntityIndexRoute = createRoute({
  method: 'post',
  path: '/rule_config/rule_entity/',
  tags: ['rule_config'],
  summary: 'Get the regexes that are generated by the rule',
  description: '**Permission required:** edit_predictor_settings',
  operationId: 'post_debug_rule_entity_resource',
  request: { body: DictionaryRequestBody },
  responses: { 403: { description: 'Permission insufficient' } },
})

export const postRuleConfigRuleEntityDocumentIdRoute = createRoute({
  method: 'post',
  path: '/rule_config/rule_entity/{document_id}',
  tags: ['rule_config'],
  summary: 'Evaluate a rule on a document',
  description: '**Permission required:** edit_predictor_settings',
  operationId: 'post_debug_rule_entity_document_resource',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: DictionaryRequestBody,
  },
  responses: { 403: { description: 'Permission insufficient' } },
})

export const postRuleConfigWhereToSearchDocumentIdRoute = createRoute({
  method: 'post',
  path: '/rule_config/where_to_search/{document_id}',
  tags: ['rule_config'],
  summary: 'Get the text a where_to_search specification will generate',
  description:
    'Returns a list of strings per granularity. If no granularity is specified. It is considered to be the whole document\n\n**Permission required:** edit_predictor_settings',
  operationId: 'post_debug_where_to_search',
  request: {
    params: z.object({
      document_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'document_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: DictionaryRequestBody,
  },
  responses: { 403: { description: 'Permission insufficient' } },
})

export const getRuleConfigScopeRoute = createRoute({
  method: 'get',
  path: '/rule_config/{scope}',
  tags: ['rule_config'],
  summary: 'Get scoped rule config',
  description: '**Permission required:** edit_predictor_settings',
  operationId: 'get_rule_config_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RuleConfigModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const deleteRuleConfigScopeRoute = createRoute({
  method: 'delete',
  path: '/rule_config/{scope}',
  tags: ['rule_config'],
  summary: 'Delete scoped rule config',
  description: '**Permission required:** edit_predictor_settings',
  operationId: 'delete_rule_config_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const patchRuleConfigScopeRoute = createRoute({
  method: 'patch',
  path: '/rule_config/{scope}',
  tags: ['rule_config'],
  summary: 'Update scoped rule config',
  description: '**Permission required:** edit_predictor_settings',
  operationId: 'patch_rule_config_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RuleConfigModelSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RuleConfigModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getSamplingSettingsRoute = createRoute({
  method: 'get',
  path: '/sampling_settings',
  tags: ['sampling_settings'],
  summary: 'Get all sampling settings',
  description: '**Permission required:** edit_sampling_settings / review',
  operationId: 'get_setting_samplings_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SamplingModelGetSchema) } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getSamplingSettingsScopeRoute = createRoute({
  method: 'get',
  path: '/sampling_settings/{scope}',
  tags: ['sampling_settings'],
  summary: 'Get scoped sampling settings',
  description: '**Permission required:** edit_sampling_settings / review',
  operationId: 'get_setting_sampling_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SamplingModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const deleteSamplingSettingsScopeRoute = createRoute({
  method: 'delete',
  path: '/sampling_settings/{scope}',
  tags: ['sampling_settings'],
  summary: 'Delete scoped sampling settings',
  description: '**Permission required:** edit_sampling_settings',
  operationId: 'delete_setting_sampling_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const patchSamplingSettingsScopeRoute = createRoute({
  method: 'patch',
  path: '/sampling_settings/{scope}',
  tags: ['sampling_settings'],
  summary: 'Update scoped sampling settings',
  description: '**Permission required:** edit_sampling_settings',
  operationId: 'patch_setting_sampling_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SamplingModelPatchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SamplingModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getSettingsDashboardRoute = createRoute({
  method: 'get',
  path: '/settings/dashboard',
  tags: ['settings'],
  summary: 'Get scoped dashboard setting',
  description: 'Get the dashboard settings for the given scope (project or inbox)',
  operationId: 'get_dashboard_settings_atomic_resource',
  request: {
    query: z.object({
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'scope', schema: { type: 'string' }, required: false },
        }),
      full: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'full',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DashboardSettingsModelGetSchema } },
    },
  },
})

export const patchSettingsDashboardRoute = createRoute({
  method: 'patch',
  path: '/settings/dashboard',
  tags: ['settings'],
  summary: 'Update scoped dashboard setting',
  description:
    'Update the dashboard settings for the given scope (project or inbox)\n\n**Permission required:** edit_dashboard_settings',
  operationId: 'patch_dashboard_settings_atomic_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DashboardSettingsModelPatchSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DashboardSettingsModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getSettingsReviewRoute = createRoute({
  method: 'get',
  path: '/settings/review',
  tags: ['settings'],
  summary: 'Get scoped review setting',
  description: 'Get the review settings for the given scope (project or inbox)',
  operationId: 'get_review_settings_atomic_resource',
  request: {
    query: z.object({
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'scope', schema: { type: 'string' }, required: false },
        }),
      full: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'full',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReviewSettingsModelGetSchema } },
    },
  },
})

export const patchSettingsReviewRoute = createRoute({
  method: 'patch',
  path: '/settings/review',
  tags: ['settings'],
  summary: 'Update scoped review setting',
  description:
    'Update the review settings for the given scope (project or inbox)\n\n**Permission required:** edit_review_settings',
  operationId: 'patch_review_settings_atomic_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReviewSettingsModelPatchSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReviewSettingsModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getSsoConfigRoute = createRoute({
  method: 'get',
  path: '/sso/config',
  tags: ['sso'],
  operationId: 'get_sso_config_resources',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SsoConfigModelGetSchema } },
    },
  },
})

export const postSsoConfigRoute = createRoute({
  method: 'post',
  path: '/sso/config',
  tags: ['sso'],
  operationId: 'post_sso_config_resources',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SsoConfigModelSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const deleteSsoConfigSsoConfigIdRoute = createRoute({
  method: 'delete',
  path: '/sso/config/{sso_config_id}',
  tags: ['sso'],
  summary: 'Get integration attributes',
  description:
    'Return the given integration attributes\n\n**Permission required:** edit_integrations',
  operationId: 'delete_sso_config_resources',
  request: {
    params: z.object({
      sso_config_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sso_config_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No content' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const postSsoLoginRoute = createRoute({
  method: 'post',
  path: '/sso/login',
  tags: ['sso'],
  operationId: 'post_oauth_login_resource',
  request: {
    body: { content: { 'application/json': { schema: SsoModelSchema } }, required: true },
  },
  responses: { 200: { description: 'Success' } },
})

export const getStatsUsageRoute = createRoute({
  method: 'get',
  path: '/stats/usage',
  tags: ['stats'],
  operationId: 'get_usage_stats_resource',
  request: {
    query: z.object({
      inbox_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'inbox_id', schema: { type: 'string' }, required: false },
        }),
      start_date: z
        .string()
        .default('2023-01-31T13:36:39')
        .openapi({
          param: {
            in: 'query',
            name: 'start_date',
            required: true,
            schema: { default: '2023-01-31T13:36:39', type: 'string' },
          },
        }),
      end_date: z
        .string()
        .default('2023-03-02T13:36:39')
        .openapi({
          param: {
            in: 'query',
            name: 'end_date',
            required: true,
            schema: { default: '2023-03-02T13:36:39', type: 'string' },
          },
        }),
      excel_output: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: "Set to 'true' to get data in an excel. (Default output format: JSON)",
            in: 'query',
            name: 'excel_output',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getStatsInboxIdRoute = createRoute({
  method: 'get',
  path: '/stats/{inbox_id}',
  tags: ['stats'],
  summary: 'Get inbox statistics',
  description:
    'Compute and return statistics on the given inbox, optionally restricted to a date range and a field.\n\nStats will return per field:\n- accuracy\n- precision\n- f1 score\n- recall\n\n**Note** Depending on the date range and fields, computation might be intensive\n\n**Permission required:** view_statistics',
  operationId: 'get_stats_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      field_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The field names to include in the stats. If left empty, all fields are included.Additionally, `__all_fields__` field name is also added, and aggregates the stats for all fields',
            in: 'query',
            name: 'field_name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start_date: z.iso
        .datetime({ offset: true })
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The minimum upload time of the file. If left empty, no filter is applied. ',
            in: 'query',
            name: 'start_date',
            schema: { default: null, format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum upload time of the file. If left empty, no filter is applied. ',
            in: 'query',
            name: 'end_date',
            schema: { default: null, format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      version_name: z
        .string()
        .regex(/^[A-z0-9_-]+$/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of the version to evaluate. If left empty, latest evaluated version is chosen. ',
            in: 'query',
            name: 'version_name',
            schema: { pattern: '^[A-z0-9_-]+$', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const getStatsInboxIdAutomationBlockersRoute = createRoute({
  method: 'get',
  path: '/stats/{inbox_id}/automation_blockers',
  tags: ['stats'],
  summary: 'Get summary or details of automation blockers',
  description: '**Permission required:** view_statistics',
  operationId: 'get_automation_blockers_stats',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      start_date: z.iso
        .datetime({ offset: true })
        .default('2023-02-02T13:36:39.252495')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start_date',
            schema: { default: '2023-02-02T13:36:39.252495', format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .default('2023-03-02T13:36:39.252527')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end_date',
            schema: { default: '2023-03-02T13:36:39.252527', format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      version_name: z
        .string()
        .regex(/^[A-z0-9_-]+$/)
        .default('predicted')
        .exactOptional()
        .openapi({
          param: {
            description: 'provide the version name to evaluate',
            in: 'query',
            name: 'version_name',
            schema: { default: 'predicted', pattern: '^[A-z0-9_-]+$', type: 'string' },
            required: false,
          },
        }),
      include_detail: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include_detail',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Not Supported' },
    403: { description: 'Permission insufficient' },
  },
})

export const postStatsInboxIdBlueDotsRoute = createRoute({
  method: 'post',
  path: '/stats/{inbox_id}/blue_dots',
  tags: ['stats'],
  summary: 'Get the Blue Dots statistics for the inbox',
  description:
    'Compute and return the blue dots statistics, optionally restricted to date range, fields and versions\n\n**Permission required:** submit',
  operationId: 'post_blue_dots_resource',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              end_date: z.iso
                .datetime({ offset: true })
                .default('2023-03-02T13:36:39.250962')
                .exactOptional(),
              fields_to_exclude: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'gross_amount,due_date' }),
              level: z
                .string()
                .default('file')
                .exactOptional()
                .openapi({ description: 'possible values: file, field' }),
              option_level_fields: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'invoice,receipt' }),
              start_date: z.iso
                .datetime({ offset: true })
                .default('2023-02-02T13:36:39.250933')
                .exactOptional(),
              version_name: z
                .string()
                .regex(/^[A-z0-9_-]+$/)
                .default('submitted')
                .exactOptional()
                .openapi({ description: 'provide the version name to evaluate' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'Bad Request' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Document evaluation missing' },
  },
})

export const getStatsInboxIdEvaluatedVersionsRoute = createRoute({
  method: 'get',
  path: '/stats/{inbox_id}/evaluated_versions',
  tags: ['stats'],
  summary: 'Get the documents with evaluated versions',
  description:
    'If filter_on_version_date is True, the document\nversions are filtered by timestamp, otherwise, documents are filtered by receive_time.\n\n**Permission required:** view_statistics',
  operationId: 'get_evaluated_versions',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      start_date: z.iso
        .datetime({ offset: true })
        .default('2023-02-02T13:36:39.251355')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start_date',
            schema: { default: '2023-02-02T13:36:39.251355', format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .default('2023-03-02T13:36:39.251385')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end_date',
            schema: { default: '2023-03-02T13:36:39.251385', format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      filter_versions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter_versions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      last_one_only: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'last_one_only',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      version_name: z
        .string()
        .regex(/^[A-z0-9_-]+$/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter the version by name. If not specified, all version names are considered',
            in: 'query',
            name: 'version_name',
            schema: { pattern: '^[A-z0-9_-]+$', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const getStatsInboxIdProcessingRoute = createRoute({
  method: 'get',
  path: '/stats/{inbox_id}/processing',
  tags: ['stats'],
  summary: 'Get processing runtime stats',
  description:
    '**This endpoint is in _preview_ and its interface may change.**\n\nCompute statistics over the documents in the inbox. These stats include:\n- mean\n- min\n- max\n- standard deviation\n- 50th percentile\n- 95th percentile\n- 99th percentile\n\nDocuments are grouped by their page count: this is currently the *only* supported group by attribute.\n\nDocuments can be further filter by any given start or end date: the filter will apply to the start\nprocessing date, and *not* to the done date.\n\n**Permission required:** view_statistics',
  operationId: 'get_processing_stats',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      start_date: z.iso
        .datetime({ offset: true })
        .default('2023-02-02T13:36:39.251761')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start_date',
            schema: { default: '2023-02-02T13:36:39.251761', format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .default('2023-03-02T13:36:39.251794')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end_date',
            schema: { default: '2023-03-02T13:36:39.251794', format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      group_by: z
        .string()
        .default('pages')
        .exactOptional()
        .openapi({
          param: {
            description: 'Group stats per this given attribute. Only **pages** is supported',
            in: 'query',
            name: 'group_by',
            schema: { default: 'pages', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Not Supported' },
    403: { description: 'Permission insufficient' },
  },
})

export const getStatsInboxIdVolumeRoute = createRoute({
  method: 'get',
  path: '/stats/{inbox_id}/volume',
  tags: ['stats'],
  summary: '**Permission required:** view_statistics',
  operationId: 'get_volume_stats',
  request: {
    params: z.object({
      inbox_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'inbox_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      start_date: z.iso
        .datetime({ offset: true })
        .default('2023-02-02T13:36:39.252098')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start_date',
            schema: { default: '2023-02-02T13:36:39.252098', format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .default('2023-03-02T13:36:39.252127')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end_date',
            schema: { default: '2023-03-02T13:36:39.252127', format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .default('to_review')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            schema: { default: 'to_review', type: 'string' },
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'user', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    400: { description: 'Not Supported' },
    403: { description: 'Permission insufficient' },
  },
})

export const getStatsScopeAccuracyRoute = createRoute({
  method: 'get',
  path: '/stats/{scope}/accuracy',
  tags: ['stats'],
  summary: 'Get the Accuracy counts on documents, sections and fields in the given inbox',
  description: '**Permission required:** view_statistics',
  operationId: 'get_accuracy_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      start_date: z.iso
        .datetime({ offset: true })
        .default('2023-02-02T13:36:39.250494')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start_date',
            schema: { default: '2023-02-02T13:36:39.250494', format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .default('2023-03-02T13:36:39.250527')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end_date',
            schema: { default: '2023-03-02T13:36:39.250527', format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      stp_files_only: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'stp_files_only',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      stp_fields_only: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'stp_fields_only',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      version_name: z
        .string()
        .regex(/^[A-z0-9_-]+$/)
        .exactOptional()
        .openapi({
          param: {
            description: 'provide the version name to evaluate',
            in: 'query',
            name: 'version_name',
            schema: { pattern: '^[A-z0-9_-]+$', type: 'string' },
            required: false,
          },
        }),
      filter_by: z
        .string()
        .regex(/^[A-z0-9_-]+$/)
        .exactOptional()
        .openapi({
          param: {
            description: 'Choose to filter the results by doctype, process label, ...',
            in: 'query',
            name: 'filter_by',
            schema: { pattern: '^[A-z0-9_-]+$', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const getStatsScopeStpRoute = createRoute({
  method: 'get',
  path: '/stats/{scope}/stp',
  tags: ['stats'],
  summary: 'Get the STP counts on documents, sections and fields in the given inbox',
  description: '**Permission required:** view_statistics',
  operationId: 'get_stp_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      start_date: z.iso
        .datetime({ offset: true })
        .default('2023-02-02T13:36:39.250021')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start_date',
            schema: { default: '2023-02-02T13:36:39.250021', format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .default('2023-03-02T13:36:39.250091')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end_date',
            schema: { default: '2023-03-02T13:36:39.250091', format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      version_name: z
        .string()
        .regex(/^[A-z0-9_-]+$/)
        .default('predicted')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide the evaluated version name to inspect automation (of the predictions) for',
            in: 'query',
            name: 'version_name',
            schema: { default: 'predicted', pattern: '^[A-z0-9_-]+$', type: 'string' },
            required: false,
          },
        }),
      filter_by: z
        .string()
        .regex(/^[A-z0-9_-]+$/)
        .exactOptional()
        .openapi({
          param: {
            description: 'Choose to filter the results by doctype, process label, ...',
            in: 'query',
            name: 'filter_by',
            schema: { pattern: '^[A-z0-9_-]+$', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 403: { description: 'Permission insufficient' } },
})

export const getStyleCustomCssRoute = createRoute({
  method: 'get',
  path: '/style/custom.css',
  tags: ['style'],
  summary: 'Get the custom CSS file',
  operationId: 'get_style_sheet_resource',
  responses: { 200: { description: 'File Content' }, 204: { description: 'No Style' } },
})

export const postStyleCustomCssRoute = createRoute({
  method: 'post',
  path: '/style/custom.css',
  tags: ['style'],
  summary: 'Upload the custom logo',
  description: '**Permission required:** edit_dashboard_settings',
  operationId: 'post_style_sheet_resource',
  request: { body: PostStyleSheetResourceRequestBody },
  responses: {
    204: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    422: { description: 'File input invalid' },
  },
})

export const getStyleLogoPngRoute = createRoute({
  method: 'get',
  path: '/style/logo.png',
  tags: ['style'],
  summary: 'Get the custom logo',
  operationId: 'get_style_logo_resource',
  responses: { 200: { description: 'File Content' } },
})

export const postStyleLogoPngRoute = createRoute({
  method: 'post',
  path: '/style/logo.png',
  tags: ['style'],
  summary: 'Upload the custom logo',
  description: '**Permission required:** edit_dashboard_settings',
  operationId: 'post_style_logo_resource',
  request: { body: PostStyleSheetResourceRequestBody },
  responses: {
    204: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    422: { description: 'File input invalid' },
  },
})

export const deleteTenantRoute = createRoute({
  method: 'delete',
  path: '/tenant',
  tags: ['tenant'],
  operationId: 'delete_tenant_resource',
  responses: {
    204: { description: 'Success' },
    401: { description: 'Unauthorized' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
  },
})

export const patchTenantActivateRoute = createRoute({
  method: 'patch',
  path: '/tenant/activate',
  tags: ['tenant'],
  operationId: 'patch_activate_tenant_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TenantModelPatchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TenantModelGetSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    405: { description: 'Invalid input' },
  },
})

export const getThresholdSettingsRoute = createRoute({
  method: 'get',
  path: '/threshold_settings',
  tags: ['threshold_settings'],
  summary: 'Get all thresholds settings',
  description: '**Permission required:** read_thresholds_settings / review',
  operationId: 'get_settings_threshold_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SettingThresholdModelGetSchema) } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getThresholdSettingsScopeRoute = createRoute({
  method: 'get',
  path: '/threshold_settings/{scope}',
  tags: ['threshold_settings'],
  summary: 'Get the scoped thresholds settings',
  description: '**Permission required:** read_thresholds_settings / review',
  operationId: 'get_setting_threshold_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      default: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'default',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SettingThresholdModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const deleteThresholdSettingsScopeRoute = createRoute({
  method: 'delete',
  path: '/threshold_settings/{scope}',
  tags: ['threshold_settings'],
  summary: 'Delete the thresholds settings',
  description: '**Permission required:** edit_thresholds_settings',
  operationId: 'delete_setting_threshold_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Threshold Not Found' },
  },
})

export const patchThresholdSettingsScopeRoute = createRoute({
  method: 'patch',
  path: '/threshold_settings/{scope}',
  tags: ['threshold_settings'],
  summary: 'Update the scoped thresholds settings',
  description: '**Permission required:** edit_thresholds_settings',
  operationId: 'patch_setting_threshold_resource',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: { in: 'path', name: 'scope', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SettingThresholdModelPatchSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SettingThresholdModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['users'],
  summary: 'Get all users',
  description: 'Return the list of users\n\n**Permission required:** edit_users',
  operationId: 'get_users_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(UserModelGetSchema) } },
    },
    403: { description: 'Permission insufficient' },
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['users'],
  summary: 'Create user',
  description:
    'Create a new user with the provided attributes and roles\n\n**Permission required:** edit_users',
  operationId: 'post_users_resource',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserModelPostSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: UserModelGetSchema } },
    },
    400: { description: 'Missing field' },
    403: { description: 'Permission insufficient' },
    404: { description: 'Not Found' },
    406: { description: 'Role does not exist' },
  },
})

export const getUsersMeRoute = createRoute({
  method: 'get',
  path: '/users/me',
  tags: ['users'],
  summary: 'Return info on the current user',
  description: 'Return user info of the authenticated used making the call',
  operationId: 'get_me',
  request: {
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserModelGetSchema } },
    },
  },
})

export const postUsersMeChangePasswordRoute = createRoute({
  method: 'post',
  path: '/users/me/change_password',
  tags: ['users'],
  summary: 'Change the current user password',
  description: 'Update the current authenticated user password',
  operationId: 'post_change_password',
  request: {
    body: {
      content: { 'application/json': { schema: ChangePasswordModelPostSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' }, 403: { description: 'Password mismatch' } },
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}',
  tags: ['users'],
  summary: 'Get user',
  description: 'Return user attribute\n\n**Permission required:** edit_users',
  operationId: 'get_user_resource',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'user_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserModelGetSchema } },
    },
    403: { description: 'Permission insufficient' },
    404: { description: 'User Not Found' },
  },
})

export const deleteUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}',
  tags: ['users'],
  summary: 'Delete a user',
  description:
    'Delete the given user.\n\n**WARNING** This will completely remove the user, this is not recoverable',
  operationId: 'delete_user_resource',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'user_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 404: { description: 'User Not Found' } },
})

export const patchUsersUserIdRoute = createRoute({
  method: 'patch',
  path: '/users/{user_id}',
  tags: ['users'],
  summary: 'Update user',
  description:
    'Update the given user with the provided attributes\n\n**Permission required:** edit_users',
  operationId: 'patch_user_resource',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'user_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional fields mask',
            in: 'header',
            name: 'X-Fields',
            schema: { format: 'mask', type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserModelPatchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserModelGetSchema } },
    },
    400: { description: 'Missing fields' },
    403: { description: 'Permission insufficient' },
    404: { description: 'User Not Found' },
  },
})
