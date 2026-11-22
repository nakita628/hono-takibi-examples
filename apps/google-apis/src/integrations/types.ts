type GoogleCloudIntegrationsV1alphaGenerateTokenResponse = { message?: string | undefined }
type GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse = {
  regions?: string[] | undefined
}
type GoogleCloudIntegrationsV1alphaTakeoverEditLockRequest = { [x: string]: unknown }
type GoogleCloudIntegrationsV1alphaCoordinate = { x?: number | undefined; y?: number | undefined }
type GoogleCloudIntegrationsV1alphaNextTask = {
  condition?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  taskConfigId?: string | undefined
  taskId?: string | undefined
}
type GoogleCloudIntegrationsV1alphaErrorCatcherConfig = {
  description?: string | undefined
  errorCatcherId?: string | undefined
  errorCatcherNumber?: string | undefined
  label?: string | undefined
  position?: GoogleCloudIntegrationsV1alphaCoordinate | undefined
  startErrorTasks?: GoogleCloudIntegrationsV1alphaNextTask[] | undefined
}
type GoogleCloudIntegrationsV1alphaBooleanParameterArray = { booleanValues?: boolean[] | undefined }
type GoogleCloudIntegrationsV1alphaDoubleParameterArray = { doubleValues?: number[] | undefined }
type GoogleCloudIntegrationsV1alphaIntParameterArray = { intValues?: string[] | undefined }
type GoogleCloudIntegrationsV1alphaStringParameterArray = { stringValues?: string[] | undefined }
type GoogleCloudIntegrationsV1alphaValueType = {
  booleanArray?: GoogleCloudIntegrationsV1alphaBooleanParameterArray | undefined
  booleanValue?: boolean | undefined
  doubleArray?: GoogleCloudIntegrationsV1alphaDoubleParameterArray | undefined
  doubleValue?: number | undefined
  intArray?: GoogleCloudIntegrationsV1alphaIntParameterArray | undefined
  intValue?: string | undefined
  jsonValue?: string | undefined
  stringArray?: GoogleCloudIntegrationsV1alphaStringParameterArray | undefined
  stringValue?: string | undefined
}
type GoogleCloudIntegrationsV1alphaIntegrationParameter = {
  dataType?:
    | 'INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED'
    | 'STRING_VALUE'
    | 'INT_VALUE'
    | 'DOUBLE_VALUE'
    | 'BOOLEAN_VALUE'
    | 'STRING_ARRAY'
    | 'INT_ARRAY'
    | 'DOUBLE_ARRAY'
    | 'BOOLEAN_ARRAY'
    | 'JSON_VALUE'
    | 'PROTO_VALUE'
    | 'PROTO_ARRAY'
    | undefined
  defaultValue?: GoogleCloudIntegrationsV1alphaValueType | undefined
  displayName?: string | undefined
  inputOutputType?: 'IN_OUT_TYPE_UNSPECIFIED' | 'IN' | 'OUT' | 'IN_OUT' | undefined
  isTransient?: boolean | undefined
  jsonSchema?: string | undefined
  key?: string | undefined
  producer?: string | undefined
  searchable?: boolean | undefined
}
type EnterpriseCrmEventbusProtoDoubleArray = { values?: number[] | undefined }
type EnterpriseCrmEventbusProtoIntArray = { values?: string[] | undefined }
type EnterpriseCrmEventbusProtoStringArray = { values?: string[] | undefined }
type EnterpriseCrmEventbusProtoValueType = {
  booleanValue?: boolean | undefined
  doubleArray?: EnterpriseCrmEventbusProtoDoubleArray | undefined
  doubleValue?: number | undefined
  intArray?: EnterpriseCrmEventbusProtoIntArray | undefined
  intValue?: string | undefined
  protoValue?: { [x: string]: { [x: string]: unknown } } | undefined
  stringArray?: EnterpriseCrmEventbusProtoStringArray | undefined
  stringValue?: string | undefined
}
type EnterpriseCrmLoggingGwsSanitizeOptions = {
  isAlreadySanitized?: boolean | undefined
  logType?: ('LOG_TYPE_UNSPECIFIED' | 'GWS' | 'GTS' | 'ALL')[] | undefined
  privacy?: 'PRIVACY_TYPE_UNSPECIFIED' | 'NOT_PII' | 'PII' | 'SPII' | 'UNSURE' | undefined
  sanitizeType?:
    | 'SANITIZE_TYPE_UNSPECIFIED'
    | 'SCRUB'
    | 'ANONYMIZE'
    | 'ANONYMIZE_LIMITED_REPEATABLE'
    | 'OBFUSCATE'
    | 'ENCRYPT'
    | 'DO_NOT_SANITIZE'
    | undefined
}
type EnterpriseCrmLoggingGwsFieldLimits = {
  logAction?: 'LOG_ACTION_UNSPECIFIED' | 'DONT_LOG' | 'LOG' | undefined
  logType?: ('LOG_TYPE_UNSPECIFIED' | 'GWS' | 'GTS' | 'ALL')[] | undefined
  maxArraySize?: number | undefined
  maxStringLength?: number | undefined
  shortenerType?:
    | 'SHORTENER_TYPE_UNSPECIFIED'
    | 'SHORTEN'
    | 'HASH'
    | 'SHORTEN_WITH_HASH'
    | 'SHORTEN_EMAIL'
    | 'SHORTEN_EMAIL_WITH_HASH'
    | 'SHORTEN_DOMAIN'
    | undefined
}
type EnterpriseCrmEventbusProtoLogSettings = {
  logFieldName?: string | undefined
  sanitizeOptions?: EnterpriseCrmLoggingGwsSanitizeOptions | undefined
  seedPeriod?: 'SEED_PERIOD_UNSPECIFIED' | 'DAY' | 'WEEK' | 'MONTH' | undefined
  seedScope?: 'SEED_SCOPE_UNSPECIFIED' | 'EVENT_NAME' | 'TIME_PERIOD' | 'PARAM_NAME' | undefined
  shorteningLimits?: EnterpriseCrmLoggingGwsFieldLimits | undefined
}
type EnterpriseCrmEventbusProtoAttributes = {
  dataType?:
    | 'DATA_TYPE_UNSPECIFIED'
    | 'EMAIL'
    | 'URL'
    | 'CURRENCY'
    | 'TIMESTAMP'
    | 'DOMAIN_NAME'
    | undefined
  defaultValue?: EnterpriseCrmEventbusProtoValueType | undefined
  isRequired?: boolean | undefined
  isSearchable?: boolean | undefined
  logSettings?: EnterpriseCrmEventbusProtoLogSettings | undefined
  searchable?: 'UNSPECIFIED' | 'YES' | 'NO' | undefined
  taskVisibility?: string[] | undefined
}
type EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray = {
  booleanValues?: boolean[] | undefined
}
type EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray = {
  doubleValues?: number[] | undefined
}
type EnterpriseCrmFrontendsEventbusProtoIntParameterArray = { intValues?: string[] | undefined }
type EnterpriseCrmFrontendsEventbusProtoProtoParameterArray = {
  protoValues?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter = {
  objectValue?: string | undefined
}
type EnterpriseCrmFrontendsEventbusProtoStringParameterArray = {
  stringValues?: string[] | undefined
}
type EnterpriseCrmFrontendsEventbusProtoParameterValueType = {
  booleanArray?: EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray | undefined
  booleanValue?: boolean | undefined
  doubleArray?: EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray | undefined
  doubleValue?: number | undefined
  intArray?: EnterpriseCrmFrontendsEventbusProtoIntParameterArray | undefined
  intValue?: string | undefined
  jsonValue?: string | undefined
  protoArray?: EnterpriseCrmFrontendsEventbusProtoProtoParameterArray | undefined
  protoValue?: { [x: string]: { [x: string]: unknown } } | undefined
  serializedObjectValue?: EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter | undefined
  stringArray?: EnterpriseCrmFrontendsEventbusProtoStringParameterArray | undefined
  stringValue?: string | undefined
}
type EnterpriseCrmEventbusProtoNodeIdentifier = {
  elementIdentifier?: string | undefined
  elementType?: 'UNKNOWN_TYPE' | 'TASK_CONFIG' | 'TRIGGER_CONFIG' | undefined
}
type EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry = {
  attributes?: EnterpriseCrmEventbusProtoAttributes | undefined
  children?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry[] | undefined
  dataType?:
    | 'DATA_TYPE_UNSPECIFIED'
    | 'STRING_VALUE'
    | 'INT_VALUE'
    | 'DOUBLE_VALUE'
    | 'BOOLEAN_VALUE'
    | 'PROTO_VALUE'
    | 'SERIALIZED_OBJECT_VALUE'
    | 'STRING_ARRAY'
    | 'INT_ARRAY'
    | 'DOUBLE_ARRAY'
    | 'PROTO_ARRAY'
    | 'PROTO_ENUM'
    | 'BOOLEAN_ARRAY'
    | 'PROTO_ENUM_ARRAY'
    | 'BYTES'
    | 'BYTES_ARRAY'
    | 'NON_SERIALIZABLE_OBJECT'
    | 'JSON_VALUE'
    | undefined
  defaultValue?: EnterpriseCrmFrontendsEventbusProtoParameterValueType | undefined
  inOutType?: 'IN_OUT_TYPE_UNSPECIFIED' | 'IN' | 'OUT' | 'IN_OUT' | undefined
  isTransient?: boolean | undefined
  jsonSchema?: string | undefined
  key?: string | undefined
  name?: string | undefined
  producedBy?: EnterpriseCrmEventbusProtoNodeIdentifier | undefined
  producer?: string | undefined
  protoDefName?: string | undefined
  protoDefPath?: string | undefined
}
type EnterpriseCrmFrontendsEventbusProtoWorkflowParameters = {
  parameters?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry[] | undefined
}
type GoogleCloudIntegrationsV1alphaFailurePolicy = {
  intervalTime?: string | undefined
  maxRetries?: number | undefined
  retryStrategy?:
    | 'RETRY_STRATEGY_UNSPECIFIED'
    | 'IGNORE'
    | 'NONE'
    | 'FATAL'
    | 'FIXED_INTERVAL'
    | 'LINEAR_BACKOFF'
    | 'EXPONENTIAL_BACKOFF'
    | 'RESTART_INTEGRATION_WITH_BACKOFF'
    | undefined
}
type GoogleCloudIntegrationsV1alphaEventParameter = {
  key?: string | undefined
  value?: GoogleCloudIntegrationsV1alphaValueType | undefined
}
type GoogleCloudIntegrationsV1alphaSuccessPolicy = {
  finalState?: 'FINAL_STATE_UNSPECIFIED' | 'SUCCEEDED' | 'SUSPENDED' | undefined
}
type GoogleCloudIntegrationsV1alphaTaskConfig = {
  description?: string | undefined
  displayName?: string | undefined
  errorCatcherId?: string | undefined
  externalTaskType?: 'EXTERNAL_TASK_TYPE_UNSPECIFIED' | 'NORMAL_TASK' | 'ERROR_TASK' | undefined
  failurePolicy?: GoogleCloudIntegrationsV1alphaFailurePolicy | undefined
  jsonValidationOption?:
    | 'JSON_VALIDATION_OPTION_UNSPECIFIED'
    | 'SKIP'
    | 'PRE_EXECUTION'
    | 'POST_EXECUTION'
    | 'PRE_POST_EXECUTION'
    | undefined
  nextTasks?: GoogleCloudIntegrationsV1alphaNextTask[] | undefined
  nextTasksExecutionPolicy?:
    | 'NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED'
    | 'RUN_ALL_MATCH'
    | 'RUN_FIRST_MATCH'
    | undefined
  parameters?: { [x: string]: GoogleCloudIntegrationsV1alphaEventParameter } | undefined
  position?: GoogleCloudIntegrationsV1alphaCoordinate | undefined
  successPolicy?: GoogleCloudIntegrationsV1alphaSuccessPolicy | undefined
  synchronousCallFailurePolicy?: GoogleCloudIntegrationsV1alphaFailurePolicy | undefined
  task?: string | undefined
  taskExecutionStrategy?:
    | 'TASK_EXECUTION_STRATEGY_UNSPECIFIED'
    | 'WHEN_ALL_SUCCEED'
    | 'WHEN_ANY_SUCCEED'
    | 'WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED'
    | undefined
  taskId?: string | undefined
  taskTemplate?: string | undefined
}
type EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList = {
  enumStrings?: string[] | undefined
  filterType?: 'DEFAULT_INCLUSIVE' | 'EXCLUSIVE' | undefined
}
type EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue = {
  absolute?: string | undefined
  percentage?: number | undefined
}
type EnterpriseCrmEventbusProtoTaskAlertConfig = {
  aggregationPeriod?: string | undefined
  alertDisabled?: boolean | undefined
  alertName?: string | undefined
  clientId?: string | undefined
  durationThresholdMs?: string | undefined
  errorEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList | undefined
  metricType?:
    | 'METRIC_TYPE_UNSPECIFIED'
    | 'TASK_ERROR_RATE'
    | 'TASK_WARNING_RATE'
    | 'TASK_RATE'
    | 'TASK_AVERAGE_DURATION'
    | 'TASK_PERCENTILE_DURATION'
    | undefined
  numAggregationPeriods?: number | undefined
  onlyFinalAttempt?: boolean | undefined
  playbookUrl?: string | undefined
  thresholdType?: 'UNSPECIFIED_THRESHOLD_TYPE' | 'EXPECTED_MIN' | 'EXPECTED_MAX' | undefined
  thresholdValue?: EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue | undefined
  warningEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList | undefined
}
type EnterpriseCrmEventbusProtoFailurePolicy = {
  intervalInSeconds?: string | undefined
  maxNumRetries?: number | undefined
  retryStrategy?:
    | 'UNSPECIFIED'
    | 'IGNORE'
    | 'NONE'
    | 'FATAL'
    | 'FIXED_INTERVAL'
    | 'LINEAR_BACKOFF'
    | 'EXPONENTIAL_BACKOFF'
    | 'RESTART_WORKFLOW_WITH_BACKOFF'
    | undefined
}
type EnterpriseCrmEventbusProtoCondition = {
  eventPropertyKey?: string | undefined
  operator?:
    | 'UNSET'
    | 'EQUALS'
    | 'CONTAINS'
    | 'LESS_THAN'
    | 'GREATER_THAN'
    | 'EXISTS'
    | 'DOES_NOT_EXIST'
    | 'IS_EMPTY'
    | 'IS_NOT_EMPTY'
    | undefined
  value?: EnterpriseCrmEventbusProtoValueType | undefined
}
type EnterpriseCrmEventbusProtoCombinedCondition = {
  conditions?: EnterpriseCrmEventbusProtoCondition[] | undefined
}
type EnterpriseCrmEventbusProtoNextTask = {
  combinedConditions?: EnterpriseCrmEventbusProtoCombinedCondition[] | undefined
  condition?: string | undefined
  description?: string | undefined
  label?: string | undefined
  taskConfigId?: string | undefined
  taskNumber?: string | undefined
}
type EnterpriseCrmFrontendsEventbusProtoParameterEntry = {
  dataType?:
    | 'DATA_TYPE_UNSPECIFIED'
    | 'STRING_VALUE'
    | 'INT_VALUE'
    | 'DOUBLE_VALUE'
    | 'BOOLEAN_VALUE'
    | 'PROTO_VALUE'
    | 'SERIALIZED_OBJECT_VALUE'
    | 'STRING_ARRAY'
    | 'INT_ARRAY'
    | 'DOUBLE_ARRAY'
    | 'PROTO_ARRAY'
    | 'PROTO_ENUM'
    | 'BOOLEAN_ARRAY'
    | 'PROTO_ENUM_ARRAY'
    | 'BYTES'
    | 'BYTES_ARRAY'
    | 'NON_SERIALIZABLE_OBJECT'
    | 'JSON_VALUE'
    | undefined
  key?: string | undefined
  value?: EnterpriseCrmFrontendsEventbusProtoParameterValueType | undefined
}
type EnterpriseCrmEventbusProtoCoordinate = { x?: number | undefined; y?: number | undefined }
type EnterpriseCrmFrontendsEventbusProtoEventParameters = {
  parameters?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[] | undefined
}
type EnterpriseCrmFrontendsEventbusProtoRollbackStrategy = {
  parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters | undefined
  rollbackTaskImplementationClassName?: string | undefined
  taskNumbersToRollback?: string[] | undefined
}
type EnterpriseCrmEventbusProtoSuccessPolicy = {
  finalState?: 'UNSPECIFIED' | 'SUCCEEDED' | 'SUSPENDED' | undefined
}
type EnterpriseCrmEventbusProtoTaskMetadataAdmin = {
  googleGroupEmail?: string | undefined
  userEmail?: string | undefined
}
type EnterpriseCrmEventbusProtoTaskMetadata = {
  activeTaskName?: string | undefined
  admins?: EnterpriseCrmEventbusProtoTaskMetadataAdmin[] | undefined
  category?:
    | 'UNSPECIFIED_CATEGORY'
    | 'CUSTOM'
    | 'FLOW_CONTROL'
    | 'DATA_MANIPULATION'
    | 'SCRIPTING'
    | 'CONNECTOR'
    | 'HIDDEN'
    | 'CLOUD_SYSTEMS'
    | 'CUSTOM_TASK_TEMPLATE'
    | 'TASK_RECOMMENDATIONS'
    | undefined
  codeSearchLink?: string | undefined
  defaultJsonValidationOption?:
    | 'UNSPECIFIED_JSON_VALIDATION_OPTION'
    | 'SKIP'
    | 'PRE_EXECUTION'
    | 'POST_EXECUTION'
    | 'PRE_POST_EXECUTION'
    | undefined
  defaultSpec?: string | undefined
  description?: string | undefined
  descriptiveName?: string | undefined
  docMarkdown?: string | undefined
  externalCategory?: 'UNSPECIFIED_EXTERNAL_CATEGORY' | 'CORE' | 'CONNECTORS' | undefined
  externalCategorySequence?: number | undefined
  externalDocHtml?: string | undefined
  externalDocLink?: string | undefined
  externalDocMarkdown?: string | undefined
  g3DocLink?: string | undefined
  iconLink?: string | undefined
  isDeprecated?: boolean | undefined
  name?: string | undefined
  standaloneExternalDocHtml?: string | undefined
  status?: 'UNSPECIFIED_STATUS' | 'DEFAULT_INACTIVE' | 'ACTIVE' | undefined
  system?:
    | 'UNSPECIFIED_SYSTEM'
    | 'GENERIC'
    | 'BUGANIZER'
    | 'SALESFORCE'
    | 'CLOUD_SQL'
    | 'PLX'
    | 'SHEETS'
    | 'GOOGLE_GROUPS'
    | 'EMAIL'
    | 'SPANNER'
    | 'DATA_BRIDGE'
    | undefined
  tags?: string[] | undefined
}
type EnterpriseCrmEventbusProtoParamSpecEntryConfig = {
  descriptivePhrase?: string | undefined
  helpText?: string | undefined
  hideDefaultValue?: boolean | undefined
  inputDisplayOption?:
    | 'DEFAULT'
    | 'STRING_MULTI_LINE'
    | 'NUMBER_SLIDER'
    | 'BOOLEAN_TOGGLE'
    | undefined
  isHidden?: boolean | undefined
  label?: string | undefined
  parameterNameOption?:
    | 'DEFAULT_NOT_PARAMETER_NAME'
    | 'IS_PARAMETER_NAME'
    | 'KEY_IS_PARAMETER_NAME'
    | 'VALUE_IS_PARAMETER_NAME'
    | undefined
  subSectionLabel?: string | undefined
  uiPlaceholderText?: string | undefined
}
type EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition = {
  fullName?: string | undefined
  path?: string | undefined
}
type EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange = {
  max?: number | undefined
  min?: number | undefined
}
type EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange = {
  max?: string | undefined
  min?: string | undefined
}
type EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex = {
  exclusive?: boolean | undefined
  regex?: string | undefined
}
type EnterpriseCrmEventbusProtoParamSpecEntryValidationRule = {
  doubleRange?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange | undefined
  intRange?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange | undefined
  stringRegex?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex | undefined
}
type EnterpriseCrmFrontendsEventbusProtoParamSpecEntry = {
  className?: string | undefined
  collectionElementClassName?: string | undefined
  config?: EnterpriseCrmEventbusProtoParamSpecEntryConfig | undefined
  dataType?:
    | 'DATA_TYPE_UNSPECIFIED'
    | 'STRING_VALUE'
    | 'INT_VALUE'
    | 'DOUBLE_VALUE'
    | 'BOOLEAN_VALUE'
    | 'PROTO_VALUE'
    | 'SERIALIZED_OBJECT_VALUE'
    | 'STRING_ARRAY'
    | 'INT_ARRAY'
    | 'DOUBLE_ARRAY'
    | 'PROTO_ARRAY'
    | 'PROTO_ENUM'
    | 'BOOLEAN_ARRAY'
    | 'PROTO_ENUM_ARRAY'
    | 'BYTES'
    | 'BYTES_ARRAY'
    | 'NON_SERIALIZABLE_OBJECT'
    | 'JSON_VALUE'
    | undefined
  defaultValue?: EnterpriseCrmFrontendsEventbusProtoParameterValueType | undefined
  isDeprecated?: boolean | undefined
  isOutput?: boolean | undefined
  jsonSchema?: string | undefined
  key?: string | undefined
  protoDef?: EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition | undefined
  required?: boolean | undefined
  validationRule?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRule | undefined
}
type EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage = {
  parameters?: EnterpriseCrmFrontendsEventbusProtoParamSpecEntry[] | undefined
}
type EnterpriseCrmEventbusStatsDimensions = {
  clientId?: string | undefined
  enumFilterType?: 'DEFAULT_INCLUSIVE' | 'EXCLUSIVE' | undefined
  errorEnumString?: string | undefined
  retryAttempt?: 'UNSPECIFIED' | 'FINAL' | 'RETRYABLE' | 'CANCELED' | undefined
  taskName?: string | undefined
  taskNumber?: string | undefined
  triggerId?: string | undefined
  warningEnumString?: string | undefined
  workflowId?: string | undefined
  workflowName?: string | undefined
}
type EnterpriseCrmEventbusStats = {
  dimensions?: EnterpriseCrmEventbusStatsDimensions | undefined
  durationInSeconds?: number | undefined
  errorRate?: number | undefined
  qps?: number | undefined
  warningRate?: number | undefined
}
type EnterpriseCrmEventbusProtoTaskUiModuleConfig = {
  moduleId?:
    | 'UNSPECIFIED_TASK_MODULE'
    | 'LABEL'
    | 'ERROR_HANDLING'
    | 'TASK_PARAM_TABLE'
    | 'TASK_PARAM_FORM'
    | 'PRECONDITION'
    | 'SCRIPT_EDITOR'
    | 'RPC'
    | 'TASK_SUMMARY'
    | 'SUSPENSION'
    | 'RPC_TYPED'
    | 'SUB_WORKFLOW'
    | 'APPS_SCRIPT_NAVIGATOR'
    | 'SUB_WORKFLOW_FOR_EACH_LOOP'
    | 'FIELD_MAPPING'
    | 'README'
    | 'REST_CALLER'
    | 'SUB_WORKFLOW_SCATTER_GATHER'
    | 'CLOUD_SQL'
    | 'GENERIC_CONNECTOR_TASK'
    | undefined
}
type EnterpriseCrmEventbusProtoTaskUiConfig = {
  taskUiModuleConfigs?: EnterpriseCrmEventbusProtoTaskUiModuleConfig[] | undefined
}
type EnterpriseCrmFrontendsEventbusProtoTaskEntity = {
  disabledForVpcSc?: boolean | undefined
  metadata?: EnterpriseCrmEventbusProtoTaskMetadata | undefined
  paramSpecs?: EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage | undefined
  stats?: EnterpriseCrmEventbusStats | undefined
  taskType?: 'TASK' | 'ASIS_TEMPLATE' | 'IO_TEMPLATE' | undefined
  uiConfig?: EnterpriseCrmEventbusProtoTaskUiConfig | undefined
}
type EnterpriseCrmFrontendsEventbusProtoTaskConfig = {
  alertConfigs?: EnterpriseCrmEventbusProtoTaskAlertConfig[] | undefined
  createTime?: string | undefined
  creatorEmail?: string | undefined
  description?: string | undefined
  disableStrictTypeValidation?: boolean | undefined
  errorCatcherId?: string | undefined
  externalTaskType?: 'EXTERNAL_TASK_TYPE_UNSPECIFIED' | 'NORMAL_TASK' | 'ERROR_TASK' | undefined
  failurePolicy?: EnterpriseCrmEventbusProtoFailurePolicy | undefined
  incomingEdgeCount?: number | undefined
  jsonValidationOption?:
    | 'UNSPECIFIED_JSON_VALIDATION_OPTION'
    | 'SKIP'
    | 'PRE_EXECUTION'
    | 'POST_EXECUTION'
    | 'PRE_POST_EXECUTION'
    | undefined
  label?: string | undefined
  lastModifiedTime?: string | undefined
  nextTasks?: EnterpriseCrmEventbusProtoNextTask[] | undefined
  nextTasksExecutionPolicy?: 'UNSPECIFIED' | 'RUN_ALL_MATCH' | 'RUN_FIRST_MATCH' | undefined
  parameters?: { [x: string]: EnterpriseCrmFrontendsEventbusProtoParameterEntry } | undefined
  position?: EnterpriseCrmEventbusProtoCoordinate | undefined
  precondition?: string | undefined
  preconditionLabel?: string | undefined
  rollbackStrategy?: EnterpriseCrmFrontendsEventbusProtoRollbackStrategy | undefined
  successPolicy?: EnterpriseCrmEventbusProtoSuccessPolicy | undefined
  synchronousCallFailurePolicy?: EnterpriseCrmEventbusProtoFailurePolicy | undefined
  taskEntity?: EnterpriseCrmFrontendsEventbusProtoTaskEntity | undefined
  taskExecutionStrategy?:
    | 'WHEN_ALL_SUCCEED'
    | 'WHEN_ANY_SUCCEED'
    | 'WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED'
    | undefined
  taskName?: string | undefined
  taskNumber?: string | undefined
  taskSpec?: string | undefined
  taskTemplateName?: string | undefined
  taskType?: 'TASK' | 'ASIS_TEMPLATE' | 'IO_TEMPLATE' | undefined
}
type EnterpriseCrmEventbusProtoNextTeardownTask = { name?: string | undefined }
type EnterpriseCrmEventbusProtoBooleanParameterArray = { booleanValues?: boolean[] | undefined }
type EnterpriseCrmEventbusProtoDoubleParameterArray = { doubleValues?: number[] | undefined }
type EnterpriseCrmEventbusProtoIntParameterArray = { intValues?: string[] | undefined }
type EnterpriseCrmEventbusProtoProtoParameterArray = {
  protoValues?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type EnterpriseCrmEventbusProtoSerializedObjectParameter = { objectValue?: string | undefined }
type EnterpriseCrmEventbusProtoStringParameterArray = { stringValues?: string[] | undefined }
type EnterpriseCrmEventbusProtoParameterValueType = {
  booleanArray?: EnterpriseCrmEventbusProtoBooleanParameterArray | undefined
  booleanValue?: boolean | undefined
  doubleArray?: EnterpriseCrmEventbusProtoDoubleParameterArray | undefined
  doubleValue?: number | undefined
  intArray?: EnterpriseCrmEventbusProtoIntParameterArray | undefined
  intValue?: string | undefined
  protoArray?: EnterpriseCrmEventbusProtoProtoParameterArray | undefined
  protoValue?: { [x: string]: { [x: string]: unknown } } | undefined
  serializedObjectValue?: EnterpriseCrmEventbusProtoSerializedObjectParameter | undefined
  stringArray?: EnterpriseCrmEventbusProtoStringParameterArray | undefined
  stringValue?: string | undefined
}
type EnterpriseCrmEventbusProtoParameterEntry = {
  key?: string | undefined
  value?: EnterpriseCrmEventbusProtoParameterValueType | undefined
}
type EnterpriseCrmEventbusProtoEventParameters = {
  parameters?: EnterpriseCrmEventbusProtoParameterEntry[] | undefined
}
type EnterpriseCrmEventbusProtoPropertyEntry = {
  key?: string | undefined
  value?: EnterpriseCrmEventbusProtoValueType | undefined
}
type EnterpriseCrmEventbusProtoEventBusProperties = {
  properties?: EnterpriseCrmEventbusProtoPropertyEntry[] | undefined
}
type EnterpriseCrmEventbusProtoTeardownTaskConfig = {
  creatorEmail?: string | undefined
  name?: string | undefined
  nextTeardownTask?: EnterpriseCrmEventbusProtoNextTeardownTask | undefined
  parameters?: EnterpriseCrmEventbusProtoEventParameters | undefined
  properties?: EnterpriseCrmEventbusProtoEventBusProperties | undefined
  teardownTaskImplementationClassName?: string | undefined
}
type EnterpriseCrmEventbusProtoTeardown = {
  teardownTaskConfigs?: EnterpriseCrmEventbusProtoTeardownTaskConfig[] | undefined
}
type GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue = {
  absolute?: string | undefined
  percentage?: number | undefined
}
type GoogleCloudIntegrationsV1alphaIntegrationAlertConfig = {
  aggregationPeriod?: string | undefined
  alertThreshold?: number | undefined
  disableAlert?: boolean | undefined
  displayName?: string | undefined
  durationThreshold?: string | undefined
  metricType?:
    | 'METRIC_TYPE_UNSPECIFIED'
    | 'EVENT_ERROR_RATE'
    | 'EVENT_WARNING_RATE'
    | 'TASK_ERROR_RATE'
    | 'TASK_WARNING_RATE'
    | 'TASK_RATE'
    | 'EVENT_RATE'
    | 'EVENT_AVERAGE_DURATION'
    | 'EVENT_PERCENTILE_DURATION'
    | 'TASK_AVERAGE_DURATION'
    | 'TASK_PERCENTILE_DURATION'
    | undefined
  onlyFinalAttempt?: boolean | undefined
  thresholdType?: 'THRESHOLD_TYPE_UNSPECIFIED' | 'EXPECTED_MIN' | 'EXPECTED_MAX' | undefined
  thresholdValue?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue | undefined
}
type GoogleCloudIntegrationsV1alphaCloudSchedulerConfig = {
  cronTab?: string | undefined
  errorMessage?: string | undefined
  location?: string | undefined
  serviceAccountEmail?: string | undefined
}
type GoogleCloudIntegrationsV1alphaTriggerConfig = {
  alertConfig?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfig[] | undefined
  cloudSchedulerConfig?: GoogleCloudIntegrationsV1alphaCloudSchedulerConfig | undefined
  description?: string | undefined
  errorCatcherId?: string | undefined
  label?: string | undefined
  nextTasksExecutionPolicy?:
    | 'NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED'
    | 'RUN_ALL_MATCH'
    | 'RUN_FIRST_MATCH'
    | undefined
  position?: GoogleCloudIntegrationsV1alphaCoordinate | undefined
  properties?: { [x: string]: string } | undefined
  startTasks?: GoogleCloudIntegrationsV1alphaNextTask[] | undefined
  triggerId?: string | undefined
  triggerNumber?: string | undefined
  triggerType?:
    | 'TRIGGER_TYPE_UNSPECIFIED'
    | 'CRON'
    | 'API'
    | 'SFDC_CHANNEL'
    | 'CLOUD_PUBSUB_EXTERNAL'
    | 'SFDC_CDC_CHANNEL'
    | 'CLOUD_SCHEDULER'
    | undefined
}
type EnterpriseCrmEventbusProtoWorkflowAlertConfig = {
  aggregationPeriod?: string | undefined
  alertDisabled?: boolean | undefined
  alertName?: string | undefined
  clientId?: string | undefined
  durationThresholdMs?: string | undefined
  errorEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList | undefined
  metricType?:
    | 'METRIC_TYPE_UNSPECIFIED'
    | 'EVENT_ERROR_RATE'
    | 'EVENT_WARNING_RATE'
    | 'TASK_ERROR_RATE'
    | 'TASK_WARNING_RATE'
    | 'TASK_RATE'
    | 'EVENT_RATE'
    | 'EVENT_AVERAGE_DURATION'
    | 'EVENT_PERCENTILE_DURATION'
    | 'TASK_AVERAGE_DURATION'
    | 'TASK_PERCENTILE_DURATION'
    | undefined
  numAggregationPeriods?: number | undefined
  onlyFinalAttempt?: boolean | undefined
  playbookUrl?: string | undefined
  thresholdType?: 'UNSPECIFIED_THRESHOLD_TYPE' | 'EXPECTED_MIN' | 'EXPECTED_MAX' | undefined
  thresholdValue?: EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue | undefined
  warningEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList | undefined
}
type EnterpriseCrmEventbusProtoCloudSchedulerConfig = {
  cronTab?: string | undefined
  errorMessage?: string | undefined
  location?: string | undefined
  serviceAccountEmail?: string | undefined
}
type EnterpriseCrmEventbusProtoTriggerCriteria = {
  condition?: string | undefined
  parameters?: EnterpriseCrmEventbusProtoEventParameters | undefined
  triggerCriteriaTaskImplementationClassName?: string | undefined
}
type EnterpriseCrmFrontendsEventbusProtoTriggerConfig = {
  alertConfig?: EnterpriseCrmEventbusProtoWorkflowAlertConfig[] | undefined
  cloudSchedulerConfig?: EnterpriseCrmEventbusProtoCloudSchedulerConfig | undefined
  description?: string | undefined
  enabledClients?: string[] | undefined
  errorCatcherId?: string | undefined
  label?: string | undefined
  nextTasksExecutionPolicy?: 'UNSPECIFIED' | 'RUN_ALL_MATCH' | 'RUN_FIRST_MATCH' | undefined
  pauseWorkflowExecutions?: boolean | undefined
  position?: EnterpriseCrmEventbusProtoCoordinate | undefined
  properties?: { [x: string]: string } | undefined
  startTasks?: EnterpriseCrmEventbusProtoNextTask[] | undefined
  triggerCriteria?: EnterpriseCrmEventbusProtoTriggerCriteria | undefined
  triggerId?: string | undefined
  triggerNumber?: string | undefined
  triggerType?:
    | 'UNKNOWN'
    | 'CLOUD_PUBSUB'
    | 'GOOPS'
    | 'SFDC_SYNC'
    | 'CRON'
    | 'API'
    | 'MANIFOLD_TRIGGER'
    | 'DATALAYER_DATA_CHANGE'
    | 'SFDC_CHANNEL'
    | 'CLOUD_PUBSUB_EXTERNAL'
    | 'SFDC_CDC_CHANNEL'
    | 'SFDC_PLATFORM_EVENTS_CHANNEL'
    | 'CLOUD_SCHEDULER'
    | undefined
}
type GoogleCloudIntegrationsV1alphaIntegrationVersion = {
  createTime?: string | undefined
  databasePersistencePolicy?:
    | 'DATABASE_PERSISTENCE_POLICY_UNSPECIFIED'
    | 'DATABASE_PERSISTENCE_DISABLED'
    | undefined
  description?: string | undefined
  errorCatcherConfigs?: GoogleCloudIntegrationsV1alphaErrorCatcherConfig[] | undefined
  integrationParameters?: GoogleCloudIntegrationsV1alphaIntegrationParameter[] | undefined
  integrationParametersInternal?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters | undefined
  lastModifierEmail?: string | undefined
  lockHolder?: string | undefined
  name?: string | undefined
  origin?:
    | 'UNSPECIFIED'
    | 'UI'
    | 'PIPER_V2'
    | 'PIPER_V3'
    | 'APPLICATION_IP_PROVISIONING'
    | undefined
  parentTemplateId?: string | undefined
  runAsServiceAccount?: string | undefined
  snapshotNumber?: string | undefined
  state?: 'INTEGRATION_STATE_UNSPECIFIED' | 'DRAFT' | 'ACTIVE' | 'ARCHIVED' | 'SNAPSHOT' | undefined
  status?: 'UNKNOWN' | 'DRAFT' | 'ACTIVE' | 'ARCHIVED' | 'SNAPSHOT' | undefined
  taskConfigs?: GoogleCloudIntegrationsV1alphaTaskConfig[] | undefined
  taskConfigsInternal?: EnterpriseCrmFrontendsEventbusProtoTaskConfig[] | undefined
  teardown?: EnterpriseCrmEventbusProtoTeardown | undefined
  triggerConfigs?: GoogleCloudIntegrationsV1alphaTriggerConfig[] | undefined
  triggerConfigsInternal?: EnterpriseCrmFrontendsEventbusProtoTriggerConfig[] | undefined
  updateTime?: string | undefined
  userLabel?: string | undefined
}
type GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse = {
  integrationVersion?: GoogleCloudIntegrationsV1alphaIntegrationVersion | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudIntegrationsV1alphaSfdcChannel = {
  channelTopic?: string | undefined
  createTime?: string | undefined
  deleteTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  isActive?: boolean | undefined
  lastReplayId?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudIntegrationsV1alphaCancelExecutionRequest = { [x: string]: unknown }
type GoogleCloudIntegrationsV1alphaCancelExecutionResponse = { isCanceled?: boolean | undefined }
type GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse = {
  content?: string | undefined
}
type GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest = {
  doNotPropagateError?: boolean | undefined
  executionId?: string | undefined
  inputParameters?: { [x: string]: GoogleCloudIntegrationsV1alphaValueType } | undefined
  parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[] | undefined
  parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters | undefined
  requestId?: string | undefined
  triggerId?: string | undefined
}
type GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse = {
  eventParameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters | undefined
  executionFailed?: boolean | undefined
  executionId?: string | undefined
  outputParameters?: { [x: string]: { [x: string]: unknown } } | undefined
  parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[] | undefined
}
type GoogleCloudIntegrationsV1alphaLiftSuspensionRequest = { suspensionResult?: string | undefined }
type GoogleCloudIntegrationsV1alphaLiftSuspensionResponse = {
  eventExecutionInfoId?: string | undefined
}
type GoogleCloudIntegrationsV1alphaPublishIntegrationVersionRequest = { [x: string]: unknown }
type GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponse = { [x: string]: unknown }
type GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration = {
  expireTime?: string | undefined
  liftWhenExpired?: boolean | undefined
  remindTime?: string | undefined
}
type GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig = {
  customMessage?: string | undefined
  emailAddresses?: string[] | undefined
  expiration?: GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration | undefined
}
type GoogleCloudIntegrationsV1alphaSuspensionAudit = {
  resolveTime?: string | undefined
  resolver?: string | undefined
}
type EnterpriseCrmEventbusProtoBuganizerNotification = {
  assigneeEmailAddress?: string | undefined
  componentId?: string | undefined
  templateId?: string | undefined
  title?: string | undefined
}
type EnterpriseCrmEventbusProtoToken = { name?: string | undefined; value?: string | undefined }
type EnterpriseCrmEventbusProtoAddress = {
  email?: string | undefined
  name?: string | undefined
  tokens?: EnterpriseCrmEventbusProtoToken[] | undefined
}
type GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest = {
  clientId?: string | undefined
  ignoreErrorIfNoActiveWorkflow?: boolean | undefined
  parameters?: EnterpriseCrmEventbusProtoEventParameters | undefined
  priority?:
    | 'UNSPCIFIED'
    | 'SHEDDABLE'
    | 'SHEDDABLE_PLUS'
    | 'CRITICAL'
    | 'CRITICAL_PLUS'
    | undefined
  requestId?: string | undefined
  scheduledTime?: string | undefined
  testMode?: boolean | undefined
  triggerId?: string | undefined
  workflowName?: string | undefined
}
type EnterpriseCrmEventbusProtoCustomSuspensionRequest = {
  postToQueueWithTriggerIdRequest?:
    | GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest
    | undefined
  suspensionInfoEventParameterKey?: string | undefined
}
type EnterpriseCrmEventbusProtoNotification = {
  buganizerNotification?: EnterpriseCrmEventbusProtoBuganizerNotification | undefined
  emailAddress?: EnterpriseCrmEventbusProtoAddress | undefined
  escalatorQueue?: string | undefined
  pubsubTopic?: string | undefined
  request?: EnterpriseCrmEventbusProtoCustomSuspensionRequest | undefined
}
type EnterpriseCrmEventbusProtoSuspensionExpiration = {
  expireAfterMs?: number | undefined
  liftWhenExpired?: boolean | undefined
  remindAfterMs?: number | undefined
}
type EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity = {
  emailAddress?: string | undefined
  gaiaId?: string | undefined
}
type EnterpriseCrmEventbusProtoSuspensionAuthPermissions = {
  gaiaIdentity?: EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity | undefined
  googleGroup?: EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity | undefined
  loasRole?: string | undefined
  mdbGroup?: string | undefined
}
type EnterpriseCrmEventbusProtoSuspensionConfig = {
  customMessage?: string | undefined
  notifications?: EnterpriseCrmEventbusProtoNotification[] | undefined
  suspensionExpiration?: EnterpriseCrmEventbusProtoSuspensionExpiration | undefined
  whoMayResolve?: EnterpriseCrmEventbusProtoSuspensionAuthPermissions[] | undefined
}
type GoogleCloudIntegrationsV1alphaSuspension = {
  approvalConfig?: GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig | undefined
  audit?: GoogleCloudIntegrationsV1alphaSuspensionAudit | undefined
  createTime?: string | undefined
  eventExecutionInfoId?: string | undefined
  integration?: string | undefined
  lastModifyTime?: string | undefined
  name?: string | undefined
  state?: 'RESOLUTION_STATE_UNSPECIFIED' | 'PENDING' | 'REJECTED' | 'LIFTED' | undefined
  suspensionConfig?: EnterpriseCrmEventbusProtoSuspensionConfig | undefined
  taskId?: string | undefined
}
type GoogleCloudIntegrationsV1alphaResolveSuspensionRequest = {
  suspension?: GoogleCloudIntegrationsV1alphaSuspension | undefined
}
type GoogleCloudIntegrationsV1alphaResolveSuspensionResponse = { [x: string]: unknown }
type GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest = {
  inputParameters?: { [x: string]: GoogleCloudIntegrationsV1alphaValueType } | undefined
  parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[] | undefined
  parameters?: EnterpriseCrmEventbusProtoEventParameters | undefined
  requestId?: string | undefined
  scheduleTime?: string | undefined
  triggerId?: string | undefined
}
type GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse = {
  executionInfoIds?: string[] | undefined
}
type GoogleCloudIntegrationsV1alphaTestIntegrationsRequest = {
  clientId?: string | undefined
  deadlineSecondsTime?: string | undefined
  inputParameters?: { [x: string]: GoogleCloudIntegrationsV1alphaValueType } | undefined
  integrationVersion?: GoogleCloudIntegrationsV1alphaIntegrationVersion | undefined
  parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters | undefined
  testMode?: boolean | undefined
  triggerId?: string | undefined
}
type GoogleCloudIntegrationsV1alphaTestIntegrationsResponse = {
  eventParameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters | undefined
  executionFailed?: boolean | undefined
  executionId?: string | undefined
  parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[] | undefined
  parameters?: { [x: string]: GoogleCloudIntegrationsV1alphaValueType } | undefined
}
type GoogleCloudIntegrationsV1alphaUnpublishIntegrationVersionRequest = { [x: string]: unknown }
type GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest = {
  appsScriptProject?: string | undefined
  authConfigId?: string | undefined
}
type GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse = {
  projectId?: string | undefined
}
type GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest = { scriptId?: string | undefined }
type GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse = { scriptId?: string | undefined }
type GoogleCloudIntegrationsV1alphaAuthToken = {
  token?: string | undefined
  type?: string | undefined
}
type GoogleCloudIntegrationsV1alphaJwt = {
  jwt?: string | undefined
  jwtHeader?: string | undefined
  jwtPayload?: string | undefined
  secret?: string | undefined
}
type GoogleCloudIntegrationsV1alphaAccessToken = {
  accessToken?: string | undefined
  accessTokenExpireTime?: string | undefined
  refreshToken?: string | undefined
  refreshTokenExpireTime?: string | undefined
  tokenType?: string | undefined
}
type GoogleCloudIntegrationsV1alphaParameterMapField = {
  literalValue?: GoogleCloudIntegrationsV1alphaValueType | undefined
  referenceKey?: string | undefined
}
type GoogleCloudIntegrationsV1alphaParameterMapEntry = {
  key?: GoogleCloudIntegrationsV1alphaParameterMapField | undefined
  value?: GoogleCloudIntegrationsV1alphaParameterMapField | undefined
}
type GoogleCloudIntegrationsV1alphaParameterMap = {
  entries?: GoogleCloudIntegrationsV1alphaParameterMapEntry[] | undefined
  keyType?:
    | 'INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED'
    | 'STRING_VALUE'
    | 'INT_VALUE'
    | 'DOUBLE_VALUE'
    | 'BOOLEAN_VALUE'
    | 'STRING_ARRAY'
    | 'INT_ARRAY'
    | 'DOUBLE_ARRAY'
    | 'BOOLEAN_ARRAY'
    | 'JSON_VALUE'
    | 'PROTO_VALUE'
    | 'PROTO_ARRAY'
    | undefined
  valueType?:
    | 'INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED'
    | 'STRING_VALUE'
    | 'INT_VALUE'
    | 'DOUBLE_VALUE'
    | 'BOOLEAN_VALUE'
    | 'STRING_ARRAY'
    | 'INT_ARRAY'
    | 'DOUBLE_ARRAY'
    | 'BOOLEAN_ARRAY'
    | 'JSON_VALUE'
    | 'PROTO_VALUE'
    | 'PROTO_ARRAY'
    | undefined
}
type GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode = {
  accessToken?: GoogleCloudIntegrationsV1alphaAccessToken | undefined
  applyReauthPolicy?: boolean | undefined
  authCode?: string | undefined
  authEndpoint?: string | undefined
  authParams?: GoogleCloudIntegrationsV1alphaParameterMap | undefined
  clientId?: string | undefined
  clientSecret?: string | undefined
  requestType?:
    | 'REQUEST_TYPE_UNSPECIFIED'
    | 'REQUEST_BODY'
    | 'QUERY_PARAMETERS'
    | 'ENCODED_HEADER'
    | undefined
  scope?: string | undefined
  tokenEndpoint?: string | undefined
  tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap | undefined
}
type GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials = {
  accessToken?: GoogleCloudIntegrationsV1alphaAccessToken | undefined
  clientId?: string | undefined
  clientSecret?: string | undefined
  requestType?:
    | 'REQUEST_TYPE_UNSPECIFIED'
    | 'REQUEST_BODY'
    | 'QUERY_PARAMETERS'
    | 'ENCODED_HEADER'
    | undefined
  scope?: string | undefined
  tokenEndpoint?: string | undefined
  tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap | undefined
}
type GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials = {
  accessToken?: GoogleCloudIntegrationsV1alphaAccessToken | undefined
  clientId?: string | undefined
  clientSecret?: string | undefined
  password?: string | undefined
  requestType?:
    | 'REQUEST_TYPE_UNSPECIFIED'
    | 'REQUEST_BODY'
    | 'QUERY_PARAMETERS'
    | 'ENCODED_HEADER'
    | undefined
  scope?: string | undefined
  tokenEndpoint?: string | undefined
  tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap | undefined
  username?: string | undefined
}
type GoogleCloudIntegrationsV1alphaOidcToken = {
  audience?: string | undefined
  serviceAccountEmail?: string | undefined
  token?: string | undefined
  tokenExpireTime?: string | undefined
}
type GoogleCloudIntegrationsV1alphaServiceAccountCredentials = {
  scope?: string | undefined
  serviceAccount?: string | undefined
}
type GoogleCloudIntegrationsV1alphaUsernameAndPassword = {
  password?: string | undefined
  username?: string | undefined
}
type GoogleCloudIntegrationsV1alphaCredential = {
  authToken?: GoogleCloudIntegrationsV1alphaAuthToken | undefined
  credentialType?:
    | 'CREDENTIAL_TYPE_UNSPECIFIED'
    | 'USERNAME_AND_PASSWORD'
    | 'API_KEY'
    | 'OAUTH2_AUTHORIZATION_CODE'
    | 'OAUTH2_IMPLICIT'
    | 'OAUTH2_CLIENT_CREDENTIALS'
    | 'OAUTH2_RESOURCE_OWNER_CREDENTIALS'
    | 'JWT'
    | 'AUTH_TOKEN'
    | 'SERVICE_ACCOUNT'
    | 'CLIENT_CERTIFICATE_ONLY'
    | 'OIDC_TOKEN'
    | undefined
  jwt?: GoogleCloudIntegrationsV1alphaJwt | undefined
  oauth2AuthorizationCode?: GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode | undefined
  oauth2ClientCredentials?: GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials | undefined
  oauth2ResourceOwnerCredentials?:
    | GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials
    | undefined
  oidcToken?: GoogleCloudIntegrationsV1alphaOidcToken | undefined
  serviceAccountCredentials?: GoogleCloudIntegrationsV1alphaServiceAccountCredentials | undefined
  usernameAndPassword?: GoogleCloudIntegrationsV1alphaUsernameAndPassword | undefined
}
type GoogleCloudIntegrationsV1alphaAuthConfig = {
  certificateId?: string | undefined
  createTime?: string | undefined
  creatorEmail?: string | undefined
  credentialType?:
    | 'CREDENTIAL_TYPE_UNSPECIFIED'
    | 'USERNAME_AND_PASSWORD'
    | 'API_KEY'
    | 'OAUTH2_AUTHORIZATION_CODE'
    | 'OAUTH2_IMPLICIT'
    | 'OAUTH2_CLIENT_CREDENTIALS'
    | 'OAUTH2_RESOURCE_OWNER_CREDENTIALS'
    | 'JWT'
    | 'AUTH_TOKEN'
    | 'SERVICE_ACCOUNT'
    | 'CLIENT_CERTIFICATE_ONLY'
    | 'OIDC_TOKEN'
    | undefined
  decryptedCredential?: GoogleCloudIntegrationsV1alphaCredential | undefined
  description?: string | undefined
  displayName?: string | undefined
  encryptedCredential?: string | undefined
  expiryNotificationDuration?: string[] | undefined
  lastModifierEmail?: string | undefined
  name?: string | undefined
  overrideValidTime?: string | undefined
  reason?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'VALID'
    | 'INVALID'
    | 'SOFT_DELETED'
    | 'EXPIRED'
    | 'UNAUTHORIZED'
    | 'UNSUPPORTED'
    | undefined
  updateTime?: string | undefined
  validTime?: string | undefined
  visibility?: 'AUTH_CONFIG_VISIBILITY_UNSPECIFIED' | 'PRIVATE' | 'CLIENT_VISIBLE' | undefined
}
type GoogleCloudIntegrationsV1alphaListAuthConfigsResponse = {
  authConfigs?: GoogleCloudIntegrationsV1alphaAuthConfig[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudIntegrationsV1alphaClientCertificate = {
  encryptedPrivateKey?: string | undefined
  passphrase?: string | undefined
  sslCertificate?: string | undefined
}
type GoogleCloudIntegrationsV1alphaCertificate = {
  certificateStatus?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'EXPIRED' | undefined
  credentialId?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  rawCertificate?: GoogleCloudIntegrationsV1alphaClientCertificate | undefined
  requestorId?: string | undefined
  validEndTime?: string | undefined
  validStartTime?: string | undefined
}
type GoogleCloudIntegrationsV1alphaListCertificatesResponse = {
  certificates?: GoogleCloudIntegrationsV1alphaCertificate[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudIntegrationsV1alphaProjectProperties = {
  ipEnablementState?:
    | 'IP_ENABLEMENT_STATE_UNSPECIFIED'
    | 'IP_ENABLEMENT_STATE_STANDALONE'
    | 'IP_ENABLEMENT_STATE_APIGEE'
    | 'IP_ENABLEMENT_STATE_APIGEE_ENTITLED'
    | undefined
  provisionedRegions?: string[] | undefined
}
type GoogleCloudIntegrationsV1alphaGetClientMetadataResponse = {
  properties?: GoogleCloudIntegrationsV1alphaProjectProperties | undefined
}
type GoogleCloudIntegrationsV1alphaCloudKmsConfig = {
  key?: string | undefined
  keyVersion?: string | undefined
  kmsLocation?: string | undefined
  kmsProjectId?: string | undefined
  kmsRing?: string | undefined
}
type GoogleCloudIntegrationsV1alphaCloudLoggingConfig = {
  bucket?: string | undefined
  enableCloudLogging?: boolean | undefined
}
type GoogleCloudIntegrationsV1alphaClientConfig = {
  billingType?:
    | 'BILLING_TYPE_UNSPECIFIED'
    | 'BILLING_TYPE_APIGEE_TRIALS'
    | 'BILLING_TYPE_APIGEE_SUBSCRIPTION'
    | 'BILLING_TYPE_PAYG'
    | undefined
  clientState?:
    | 'CLIENT_STATE_UNSPECIFIED'
    | 'CLIENT_STATE_ACTIVE'
    | 'CLIENT_STATE_DISABLED'
    | undefined
  cloudKmsConfig?: GoogleCloudIntegrationsV1alphaCloudKmsConfig | undefined
  cloudLoggingConfig?: GoogleCloudIntegrationsV1alphaCloudLoggingConfig | undefined
  createTime?: string | undefined
  description?: string | undefined
  id?: string | undefined
  p4ServiceAccount?: string | undefined
  projectId?: string | undefined
  region?: string | undefined
}
type GoogleCloudIntegrationsV1alphaGetClientResponse = {
  client?: GoogleCloudIntegrationsV1alphaClientConfig | undefined
}
type GoogleCloudIntegrationsV1alphaDeprovisionClientRequest = { [x: string]: unknown }
type GoogleCloudIntegrationsV1alphaProvisionClientRequest = {
  cloudKmsConfig?: GoogleCloudIntegrationsV1alphaCloudKmsConfig | undefined
  createSampleWorkflows?: boolean | undefined
  provisionGmek?: boolean | undefined
}
type GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest = {
  cloudKmsConfig?: GoogleCloudIntegrationsV1alphaCloudKmsConfig | undefined
}
type GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest = {
  functionName?: string | undefined
  functionRegion?: string | undefined
  projectId?: string | undefined
}
type GoogleCloudIntegrationsV1alphaCreateCloudFunctionResponse = { triggerUrl?: string | undefined }
type GoogleCloudConnectorsV1Secret = { secretVersion?: string | undefined }
type GoogleCloudConnectorsV1ConfigVariable = {
  boolValue?: boolean | undefined
  intValue?: string | undefined
  key?: string | undefined
  secretValue?: GoogleCloudConnectorsV1Secret | undefined
  stringValue?: string | undefined
}
type GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow = {
  authCode?: string | undefined
  clientId?: string | undefined
  clientSecret?: GoogleCloudConnectorsV1Secret | undefined
  enablePkce?: boolean | undefined
  pkceVerifier?: string | undefined
  redirectUri?: string | undefined
  scopes?: string[] | undefined
}
type GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials = {
  clientId?: string | undefined
  clientSecret?: GoogleCloudConnectorsV1Secret | undefined
}
type GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims = {
  audience?: string | undefined
  issuer?: string | undefined
  subject?: string | undefined
}
type GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer = {
  clientKey?: GoogleCloudConnectorsV1Secret | undefined
  jwtClaims?: GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims | undefined
}
type GoogleCloudConnectorsV1AuthConfigSshPublicKey = {
  certType?: string | undefined
  sshClientCert?: GoogleCloudConnectorsV1Secret | undefined
  sshClientCertPass?: GoogleCloudConnectorsV1Secret | undefined
  username?: string | undefined
}
type GoogleCloudConnectorsV1AuthConfigUserPassword = {
  password?: GoogleCloudConnectorsV1Secret | undefined
  username?: string | undefined
}
type GoogleCloudConnectorsV1AuthConfig = {
  additionalVariables?: GoogleCloudConnectorsV1ConfigVariable[] | undefined
  authType?:
    | 'AUTH_TYPE_UNSPECIFIED'
    | 'USER_PASSWORD'
    | 'OAUTH2_JWT_BEARER'
    | 'OAUTH2_CLIENT_CREDENTIALS'
    | 'SSH_PUBLIC_KEY'
    | 'OAUTH2_AUTH_CODE_FLOW'
    | undefined
  oauth2AuthCodeFlow?: GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow | undefined
  oauth2ClientCredentials?: GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials | undefined
  oauth2JwtBearer?: GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer | undefined
  sshPublicKey?: GoogleCloudConnectorsV1AuthConfigSshPublicKey | undefined
  userPassword?: GoogleCloudConnectorsV1AuthConfigUserPassword | undefined
}
type GoogleCloudConnectorsV1Destination = {
  host?: string | undefined
  port?: number | undefined
  serviceAttachment?: string | undefined
}
type GoogleCloudConnectorsV1DestinationConfig = {
  destinations?: GoogleCloudConnectorsV1Destination[] | undefined
  key?: string | undefined
}
type GoogleCloudConnectorsV1LockConfig = {
  locked?: boolean | undefined
  reason?: string | undefined
}
type GoogleCloudConnectorsV1LogConfig = { enabled?: boolean | undefined }
type GoogleCloudConnectorsV1NodeConfig = {
  maxNodeCount?: number | undefined
  minNodeCount?: number | undefined
}
type GoogleCloudConnectorsV1SslConfig = {
  additionalVariables?: GoogleCloudConnectorsV1ConfigVariable[] | undefined
  clientCertType?: 'CERT_TYPE_UNSPECIFIED' | 'PEM' | undefined
  clientCertificate?: GoogleCloudConnectorsV1Secret | undefined
  clientPrivateKey?: GoogleCloudConnectorsV1Secret | undefined
  clientPrivateKeyPass?: GoogleCloudConnectorsV1Secret | undefined
  privateServerCertificate?: GoogleCloudConnectorsV1Secret | undefined
  serverCertType?: 'CERT_TYPE_UNSPECIFIED' | 'PEM' | undefined
  trustModel?: 'PUBLIC' | 'PRIVATE' | 'INSECURE' | undefined
  type?: 'SSL_TYPE_UNSPECIFIED' | 'TLS' | 'MTLS' | undefined
  useSsl?: boolean | undefined
}
type GoogleCloudConnectorsV1ConnectionStatus = {
  description?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'ACTIVE'
    | 'INACTIVE'
    | 'DELETING'
    | 'UPDATING'
    | 'ERROR'
    | 'AUTHORIZATION_REQUIRED'
    | undefined
  status?: string | undefined
}
type GoogleCloudConnectorsV1Connection = {
  authConfig?: GoogleCloudConnectorsV1AuthConfig | undefined
  configVariables?: GoogleCloudConnectorsV1ConfigVariable[] | undefined
  connectorVersion?: string | undefined
  createTime?: string | undefined
  description?: string | undefined
  destinationConfigs?: GoogleCloudConnectorsV1DestinationConfig[] | undefined
  envoyImageLocation?: string | undefined
  imageLocation?: string | undefined
  labels?: { [x: string]: string } | undefined
  lockConfig?: GoogleCloudConnectorsV1LockConfig | undefined
  logConfig?: GoogleCloudConnectorsV1LogConfig | undefined
  name?: string | undefined
  nodeConfig?: GoogleCloudConnectorsV1NodeConfig | undefined
  serviceAccount?: string | undefined
  serviceDirectory?: string | undefined
  sslConfig?: GoogleCloudConnectorsV1SslConfig | undefined
  status?: GoogleCloudConnectorsV1ConnectionStatus | undefined
  suspended?: boolean | undefined
  updateTime?: string | undefined
}
type GoogleCloudIntegrationsV1alphaListConnectionsResponse = {
  connections?: GoogleCloudConnectorsV1Connection[] | undefined
  nextPageToken?: string | undefined
}
type CrmlogErrorCode = {
  commonErrorCode?:
    | 'COMMON_ERROR_CODE_UNSPECIFIED'
    | 'INVALID_CREDENTIALS'
    | 'REQUIRED_FIELDS_MISSING'
    | 'INVALID_FIELDS'
    | 'BACKEND'
    | 'GENERAL'
    | 'INTERNAL'
    | 'IO_ERROR'
    | 'NOT_FOUND'
    | 'EVENT_BUS'
    | 'ALREADY_EXISTS'
    | 'CONCORD'
    | 'CONVERSION'
    | 'FLUME'
    | 'PERMISSION'
    | 'SALES_FORCE'
    | 'SPANNER'
    | 'UNIMPLEMENTED'
    | 'RELTIO'
    | 'WORKFLOW_NOT_FOUND'
    | 'QUOTA_THROTTLED'
    | 'QUOTA_ENQUEUED'
    | 'INVALID_QUOTA_CONFIGURATION'
    | 'TASK_NOT_FOUND'
    | 'EXECUTION_TIMEOUT'
    | 'INVALID_EVENT_EXECUTION_STATE'
    | 'INVALID_ATTRIBUTE'
    | 'MISSING_ATTRIBUTE'
    | 'CLIENT_UNAUTHORIZED_FOR_WORKFLOW'
    | 'INVALID_PARAMETER'
    | 'MISSING_PARAMETER'
    | 'UNAUTHROIZED_WORKFLOW_EDITOR_ACTION'
    | 'FAILED_PRECONDITION'
    | 'INVALID_CLIENT'
    | 'MISSING_CLIENT'
    | 'INVALID_WORKFLOW'
    | 'MISSING_QUOTA_CONFIGURATION'
    | 'UNHANDLED_TASK_ERROR'
    | 'SCRIPT_TASK_RUNTIME_ERROR'
    | 'RPC'
    | 'INVALID_PROTO'
    | 'UNHANDLED_EVENTBUS_ERROR'
    | 'INVALID_TASK_STATE'
    | 'TYPED_TASK_INVALID_INPUT_OPERATION'
    | 'TYPED_TASK_INVALID_OUTPUT_OPERATION'
    | 'VALIDATION_ERROR'
    | 'RESUME_ERROR'
    | 'APPS_SCRIPT_EXECUTION_ERROR'
    | 'INVALID_VECTOR_USER'
    | 'INFORMATICA'
    | 'RETRYABLE_TASK_ERROR'
    | 'INVALID_TENANT'
    | 'WRONG_TENANT'
    | 'INFORMATICA_BACKEND_UNAVAILABLE'
    | 'RPC_PERMISSION_DENIED'
    | 'SYNC_EVENTBUS_EXECUTION_TIMEOUT'
    | 'ASYNC_EVENTBUS_EXECUTION_TIMEOUT'
    | 'NOT_SUPPORTED_DATA_TYPE'
    | 'UNSANITIZED_USER_INPUT'
    | 'TRANSFORM_EXPRESSION_EVALUATION_ERROR'
    | 'HTTP_EXCEPTION'
    | 'EXECUTION_CANCELLED'
    | undefined
}
type EnterpriseCrmEventbusProtoErrorDetail = {
  errorCode?: CrmlogErrorCode | undefined
  errorMessage?: string | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'ERROR' | 'WARN' | 'INFO' | undefined
  taskNumber?: number | undefined
}
type EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats = {
  endTime?: string | undefined
  startTime?: string | undefined
}
type EnterpriseCrmEventbusProtoConditionResult = {
  currentTaskNumber?: string | undefined
  nextTaskNumber?: string | undefined
  result?: boolean | undefined
}
type EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata = {
  eventAttemptNum?: number | undefined
  taskAttemptNum?: number | undefined
  taskLabel?: string | undefined
  taskName?: string | undefined
  taskNumber?: string | undefined
}
type EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats = {
  endTime?: string | undefined
  startTime?: string | undefined
}
type EnterpriseCrmEventbusProtoTaskExecutionDetails = {
  taskAttemptStats?: EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats[] | undefined
  taskExecutionState?:
    | 'UNSPECIFIED'
    | 'PENDING_EXECUTION'
    | 'IN_PROCESS'
    | 'SUCCEED'
    | 'FAILED'
    | 'FATAL'
    | 'RETRY_ON_HOLD'
    | 'SKIPPED'
    | 'CANCELED'
    | 'PENDING_ROLLBACK'
    | 'ROLLBACK_IN_PROCESS'
    | 'ROLLEDBACK'
    | 'SUSPENDED'
    | undefined
  taskNumber?: string | undefined
}
type EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot = {
  checkpointTaskNumber?: string | undefined
  conditionResults?: EnterpriseCrmEventbusProtoConditionResult[] | undefined
  diffParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters | undefined
  eventExecutionInfoId?: string | undefined
  eventExecutionSnapshotId?: string | undefined
  eventExecutionSnapshotMetadata?:
    | EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata
    | undefined
  eventParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters | undefined
  snapshotTime?: string | undefined
  taskExecutionDetails?: EnterpriseCrmEventbusProtoTaskExecutionDetails[] | undefined
  taskName?: string | undefined
}
type EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails = {
  eventAttemptStats?: EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats[] | undefined
  eventExecutionSnapshot?: EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot[] | undefined
  eventExecutionState?:
    | 'UNSPECIFIED'
    | 'ON_HOLD'
    | 'IN_PROCESS'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'CANCELED'
    | 'RETRY_ON_HOLD'
    | 'SUSPENDED'
    | undefined
  eventRetriesFromBeginningCount?: number | undefined
  logFilePath?: string | undefined
  networkAddress?: string | undefined
  nextExecutionTime?: string | undefined
  ryeLockUnheldCount?: number | undefined
}
type EnterpriseCrmEventbusProtoExecutionTraceInfo = {
  parentEventExecutionInfoId?: string | undefined
  traceId?: string | undefined
}
type EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo = {
  clientId?: string | undefined
  createTime?: string | undefined
  errorCode?: CrmlogErrorCode | undefined
  errors?: EnterpriseCrmEventbusProtoErrorDetail[] | undefined
  eventExecutionDetails?: EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails | undefined
  eventExecutionInfoId?: string | undefined
  executionTraceInfo?: EnterpriseCrmEventbusProtoExecutionTraceInfo | undefined
  lastModifiedTime?: string | undefined
  postMethod?:
    | 'UNSPECIFIED'
    | 'POST'
    | 'POST_TO_QUEUE'
    | 'SCHEDULE'
    | 'POST_BY_EVENT_CONFIG_ID'
    | 'POST_WITH_EVENT_DETAILS'
    | undefined
  product?: 'UNSPECIFIED_PRODUCT' | 'IP' | 'APIGEE' | 'SECURITY' | undefined
  requestId?: string | undefined
  requestParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters | undefined
  responseParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters | undefined
  snapshotNumber?: string | undefined
  tenant?: string | undefined
  triggerId?: string | undefined
  workflowId?: string | undefined
  workflowName?: string | undefined
  workflowRetryBackoffIntervalSeconds?: string | undefined
}
type EnterpriseCrmEventbusProtoEventExecutionSnapshot = {
  checkpointTaskNumber?: string | undefined
  conditionResults?: EnterpriseCrmEventbusProtoConditionResult[] | undefined
  diffParams?: EnterpriseCrmEventbusProtoEventParameters | undefined
  eventExecutionInfoId?: string | undefined
  eventExecutionSnapshotId?: string | undefined
  eventExecutionSnapshotMetadata?:
    | EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata
    | undefined
  eventParams?: EnterpriseCrmEventbusProtoEventParameters | undefined
  exceedMaxSize?: boolean | undefined
  snapshotTime?: string | undefined
  taskExecutionDetails?: EnterpriseCrmEventbusProtoTaskExecutionDetails[] | undefined
  taskName?: string | undefined
}
type EnterpriseCrmEventbusProtoEventExecutionDetails = {
  eventAttemptStats?: EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats[] | undefined
  eventExecutionSnapshot?: EnterpriseCrmEventbusProtoEventExecutionSnapshot[] | undefined
  eventExecutionState?:
    | 'UNSPECIFIED'
    | 'ON_HOLD'
    | 'IN_PROCESS'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'CANCELED'
    | 'RETRY_ON_HOLD'
    | 'SUSPENDED'
    | undefined
  eventRetriesFromBeginningCount?: number | undefined
  logFilePath?: string | undefined
  networkAddress?: string | undefined
  nextExecutionTime?: string | undefined
  ryeLockUnheldCount?: number | undefined
}
type GoogleCloudIntegrationsV1alphaAttemptStats = {
  endTime?: string | undefined
  startTime?: string | undefined
}
type GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata = {
  executionAttempt?: number | undefined
  task?: string | undefined
  taskAttempt?: number | undefined
  taskLabel?: string | undefined
  taskNumber?: string | undefined
}
type GoogleCloudIntegrationsV1alphaTaskExecutionDetails = {
  taskAttemptStats?: GoogleCloudIntegrationsV1alphaAttemptStats[] | undefined
  taskExecutionState?:
    | 'TASK_EXECUTION_STATE_UNSPECIFIED'
    | 'PENDING_EXECUTION'
    | 'IN_PROCESS'
    | 'SUCCEED'
    | 'FAILED'
    | 'FATAL'
    | 'RETRY_ON_HOLD'
    | 'SKIPPED'
    | 'CANCELLED'
    | 'PENDING_ROLLBACK'
    | 'ROLLBACK_IN_PROCESS'
    | 'ROLLEDBACK'
    | 'SUSPENDED'
    | undefined
  taskNumber?: string | undefined
}
type GoogleCloudIntegrationsV1alphaExecutionSnapshot = {
  checkpointTaskNumber?: string | undefined
  executionSnapshotMetadata?:
    | GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata
    | undefined
  params?: { [x: string]: GoogleCloudIntegrationsV1alphaValueType } | undefined
  taskExecutionDetails?: GoogleCloudIntegrationsV1alphaTaskExecutionDetails[] | undefined
}
type GoogleCloudIntegrationsV1alphaExecutionDetails = {
  attemptStats?: GoogleCloudIntegrationsV1alphaAttemptStats[] | undefined
  executionSnapshots?: GoogleCloudIntegrationsV1alphaExecutionSnapshot[] | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'PROCESSING'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'CANCELLED'
    | 'RETRY_ON_HOLD'
    | 'SUSPENDED'
    | undefined
}
type GoogleCloudIntegrationsV1alphaExecution = {
  createTime?: string | undefined
  directSubExecutions?: GoogleCloudIntegrationsV1alphaExecution[] | undefined
  eventExecutionDetails?: EnterpriseCrmEventbusProtoEventExecutionDetails | undefined
  executionDetails?: GoogleCloudIntegrationsV1alphaExecutionDetails | undefined
  executionMethod?:
    | 'EXECUTION_METHOD_UNSPECIFIED'
    | 'POST'
    | 'POST_TO_QUEUE'
    | 'SCHEDULE'
    | undefined
  name?: string | undefined
  requestParameters?: { [x: string]: GoogleCloudIntegrationsV1alphaValueType } | undefined
  requestParams?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[] | undefined
  responseParameters?: { [x: string]: GoogleCloudIntegrationsV1alphaValueType } | undefined
  responseParams?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[] | undefined
  triggerId?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudIntegrationsV1alphaListExecutionsResponse = {
  executionInfos?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo[] | undefined
  executions?: GoogleCloudIntegrationsV1alphaExecution[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudIntegrationsV1alphaIntegration = {
  active?: boolean | undefined
  description?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudIntegrationsV1alphaListIntegrationsResponse = {
  integrations?: GoogleCloudIntegrationsV1alphaIntegration[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudIntegrationsV1alphaRuntimeActionSchema = {
  action?: string | undefined
  inputSchema?: string | undefined
  outputSchema?: string | undefined
}
type GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse = {
  nextPageToken?: string | undefined
  runtimeActionSchemas?: GoogleCloudIntegrationsV1alphaRuntimeActionSchema[] | undefined
}
type GoogleCloudIntegrationsV1alphaRuntimeEntitySchema = {
  arrayFieldSchema?: string | undefined
  entity?: string | undefined
  fieldSchema?: string | undefined
}
type GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse = {
  nextPageToken?: string | undefined
  runtimeEntitySchemas?: GoogleCloudIntegrationsV1alphaRuntimeEntitySchema[] | undefined
}
type GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse = {
  nextPageToken?: string | undefined
  sfdcChannels?: GoogleCloudIntegrationsV1alphaSfdcChannel[] | undefined
}
type GoogleCloudIntegrationsV1alphaSfdcInstance = {
  authConfigId?: string[] | undefined
  createTime?: string | undefined
  deleteTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  serviceAuthority?: string | undefined
  sfdcOrgId?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse = {
  nextPageToken?: string | undefined
  sfdcInstances?: GoogleCloudIntegrationsV1alphaSfdcInstance[] | undefined
}
type GoogleCloudIntegrationsV1alphaListSuspensionsResponse = {
  nextPageToken?: string | undefined
  suspensions?: GoogleCloudIntegrationsV1alphaSuspension[] | undefined
}
type GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse = {
  integrationVersions?: GoogleCloudIntegrationsV1alphaIntegrationVersion[] | undefined
  nextPageToken?: string | undefined
  noPermission?: boolean | undefined
}
type GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest = {
  content?: string | undefined
  fileFormat?: 'FILE_FORMAT_UNSPECIFIED' | 'JSON' | 'YAML' | undefined
}
type GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse = {
  integrationVersion?: GoogleCloudIntegrationsV1alphaIntegrationVersion | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/callback:generateToken': {
      $get: {
        input: {
          query: {
            code?: string | undefined
            gcpProjectId?: string | undefined
            product?: 'UNSPECIFIED_PRODUCT' | 'IP' | 'APIGEE' | 'SECURITY' | undefined
            redirectUri?: string | undefined
            state?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaGenerateTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/connectorPlatformRegions:enumerate': {
      $get: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:integrationVersion:takeoverEditLock': {
      $post: {
        input: { param: { integrationVersion: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaTakeoverEditLockRequest }
        output: GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaSfdcChannel
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            'clientCertificate.passphrase'?: string | undefined
            'clientCertificate.sslCertificate'?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaSfdcChannel }
        output: GoogleCloudIntegrationsV1alphaSfdcChannel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaCancelExecutionRequest }
        output: GoogleCloudIntegrationsV1alphaCancelExecutionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:download': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            fileFormat?: 'FILE_FORMAT_UNSPECIFIED' | 'JSON' | 'YAML' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:execute': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest }
        output: GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:lift': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaLiftSuspensionRequest }
        output: GoogleCloudIntegrationsV1alphaLiftSuspensionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:publish': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaPublishIntegrationVersionRequest }
        output: GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:resolve': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaResolveSuspensionRequest }
        output: GoogleCloudIntegrationsV1alphaResolveSuspensionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:schedule': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest }
        output: GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:test': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaTestIntegrationsRequest }
        output: GoogleCloudIntegrationsV1alphaTestIntegrationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:unpublish': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaUnpublishIntegrationVersionRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/appsScriptProjects': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest }
        output: GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/appsScriptProjects:link': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest }
        output: GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/authConfigs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaListAuthConfigsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            'clientCertificate.encryptedPrivateKey'?: string | undefined
            'clientCertificate.passphrase'?: string | undefined
            'clientCertificate.sslCertificate'?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaAuthConfig }
        output: GoogleCloudIntegrationsV1alphaAuthConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/certificates': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaListCertificatesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaCertificate }
        output: GoogleCloudIntegrationsV1alphaCertificate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/clientmetadata': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaGetClientMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/clients': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaGetClientResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/clients:deprovision': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaDeprovisionClientRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/clients:provision': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaProvisionClientRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/clients:switch': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/cloudFunctions': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest }
        output: GoogleCloudIntegrationsV1alphaCreateCloudFunctionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/connections': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaListConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/executions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            'filterParams.customFilter'?: string | undefined
            'filterParams.endTime'?: string | undefined
            'filterParams.eventStatuses'?: string[] | undefined
            'filterParams.executionId'?: string | undefined
            'filterParams.parameterKey'?: string | undefined
            'filterParams.parameterPairKey'?: string | undefined
            'filterParams.parameterPairValue'?: string | undefined
            'filterParams.parameterType'?: string | undefined
            'filterParams.parameterValue'?: string | undefined
            'filterParams.startTime'?: string | undefined
            'filterParams.taskStatuses'?: string[] | undefined
            'filterParams.workflowName'?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            refreshAcl?: boolean | undefined
            truncateParams?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaListExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/integrations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaListIntegrationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/runtimeActionSchemas': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/runtimeEntitySchemas': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/sfdcChannels': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaSfdcChannel }
        output: GoogleCloudIntegrationsV1alphaSfdcChannel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/sfdcInstances': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaSfdcInstance }
        output: GoogleCloudIntegrationsV1alphaSfdcInstance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/suspensions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaListSuspensionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/versions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            fieldMask?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            newIntegration?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaIntegrationVersion }
        output: GoogleCloudIntegrationsV1alphaIntegrationVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/versions:upload': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest }
        output: GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
