type AnnotationQueue = {
  id: string
  name: string
  description: string | null
  scoreConfigIds: string[]
  createdAt: string
  updatedAt: string
}
type UtilsMetaResponse = { page: number; limit: number; totalItems: number; totalPages: number }
type PaginatedAnnotationQueues = { data: AnnotationQueue[]; meta: UtilsMetaResponse }
type CreateAnnotationQueueRequestInput = {
  name: string
  description?: string | null
  scoreConfigIds: string[]
}
type AnnotationQueueObjectType = 'TRACE' | 'OBSERVATION' | 'SESSION'
type AnnotationQueueStatus = 'PENDING' | 'COMPLETED'
type AnnotationQueueItem = {
  id: string
  queueId: string
  objectId: string
  objectType: AnnotationQueueObjectType
  status: AnnotationQueueStatus
  completedAt?: (string | null) | undefined
  createdAt: string
  updatedAt: string
}
type PaginatedAnnotationQueueItems = { data: AnnotationQueueItem[]; meta: UtilsMetaResponse }
type AnnotationQueueObjectTypeInput = 'TRACE' | 'OBSERVATION' | 'SESSION'
type AnnotationQueueStatusInput = 'PENDING' | 'COMPLETED'
type CreateAnnotationQueueItemRequestInput = {
  objectId: string
  objectType: AnnotationQueueObjectTypeInput
  status?: AnnotationQueueStatusInput | null
}
type UpdateAnnotationQueueItemRequestInput = { status?: AnnotationQueueStatusInput | null }
type DeleteAnnotationQueueItemResponse = { success: boolean; message: string }
type AnnotationQueueAssignmentRequestInput = { userId: string }
type CreateAnnotationQueueAssignmentResponse = {
  userId: string
  queueId: string
  projectId: string
}
type DeleteAnnotationQueueAssignmentResponse = { success: boolean }
type BlobStorageIntegrationType =
  | 'S3'
  | 'S3_COMPATIBLE'
  | 'AZURE_BLOB_STORAGE'
  | 'GOOGLE_CLOUD_STORAGE'
type BlobStorageIntegrationAuthType = 'ACCESS_KEYS' | 'ROLE_ARN'
type BlobStorageExportFrequency = 'every_20_minutes' | 'hourly' | 'daily' | 'weekly'
type BlobStorageIntegrationFileTypeResponse = 'JSON' | 'CSV' | 'JSONL' | 'PARQUET'
type BlobStorageExportMode = 'FULL_HISTORY' | 'FROM_TODAY' | 'FROM_CUSTOM_DATE'
type BlobStorageExportSource =
  | 'LEGACY_TRACES_OBSERVATIONS'
  | 'OBSERVATIONS_V2'
  | 'LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS'
type BlobStorageExportFieldGroup =
  | 'core'
  | 'basic'
  | 'time'
  | 'io'
  | 'metadata'
  | 'model'
  | 'usage'
  | 'prompt'
  | 'metrics'
  | 'tools'
  | 'trace_context'
  | 'score_metadata'
  | 'score_provenance'
type BlobStorageIntegrationResponse = {
  id: string
  projectId: string
  type: BlobStorageIntegrationType
  bucketName: string
  endpoint: string | null
  region: string
  authType: BlobStorageIntegrationAuthType
  accessKeyId: string | null
  roleArn: string | null
  externalId: string | null
  crossAccountRoleArn: string | null
  prefix: string
  exportFrequency: BlobStorageExportFrequency
  enabled: boolean
  forcePathStyle: boolean
  fileType: BlobStorageIntegrationFileTypeResponse
  exportMode: BlobStorageExportMode
  exportStartDate: string | null
  compressed: boolean
  exportSource: BlobStorageExportSource
  exportFieldGroups: BlobStorageExportFieldGroup[] | null
  nextSyncAt: string | null
  lastSyncAt: string | null
  lastError: string | null
  lastErrorAt: string | null
  createdAt: string
  updatedAt: string
}
type BlobStorageIntegrationsResponse = { data: BlobStorageIntegrationResponse[] }
type BlobStorageIntegrationTypeInput =
  | 'S3'
  | 'S3_COMPATIBLE'
  | 'AZURE_BLOB_STORAGE'
  | 'GOOGLE_CLOUD_STORAGE'
type BlobStorageIntegrationAuthTypeInput = 'ACCESS_KEYS' | 'ROLE_ARN'
type BlobStorageExportFrequencyInput = 'every_20_minutes' | 'hourly' | 'daily' | 'weekly'
type BlobStorageIntegrationFileTypeInput = 'JSON' | 'CSV' | 'JSONL' | 'PARQUET'
type BlobStorageExportModeInput = 'FULL_HISTORY' | 'FROM_TODAY' | 'FROM_CUSTOM_DATE'
type BlobStorageExportSourceInput =
  | 'LEGACY_TRACES_OBSERVATIONS'
  | 'OBSERVATIONS_V2'
  | 'LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS'
type BlobStorageExportFieldGroupInput =
  | 'core'
  | 'basic'
  | 'time'
  | 'io'
  | 'metadata'
  | 'model'
  | 'usage'
  | 'prompt'
  | 'metrics'
  | 'tools'
  | 'trace_context'
  | 'score_metadata'
  | 'score_provenance'
type CreateBlobStorageIntegrationRequestInput = {
  projectId: string
  type: BlobStorageIntegrationTypeInput
  bucketName: string
  endpoint?: string | null
  region: string
  authType?: BlobStorageIntegrationAuthTypeInput | null
  roleArn?: string | null
  accessKeyId?: string | null
  secretAccessKey?: string | null
  prefix?: string | null
  exportFrequency: BlobStorageExportFrequencyInput
  enabled: boolean
  forcePathStyle: boolean
  fileType: BlobStorageIntegrationFileTypeInput
  exportMode: BlobStorageExportModeInput
  exportStartDate?: string | null
  compressed?: boolean | null
  exportSource?: BlobStorageExportSourceInput | null
  exportFieldGroups?: BlobStorageExportFieldGroupInput[] | null
}
type BlobStorageSyncStatus = 'idle' | 'running' | 'queued' | 'up_to_date' | 'disabled' | 'error'
type BlobStorageIntegrationStatusResponse = {
  id: string
  projectId: string
  syncStatus: BlobStorageSyncStatus
  enabled: boolean
  lastSyncAt: string | null
  nextSyncAt: string | null
  lastError: string | null
  lastErrorAt: string | null
}
type BlobStorageIntegrationDeletionResponse = { message: string }
type CreateCommentRequestInput = {
  projectId: string
  objectType: string
  objectId: string
  content: string
  authorUserId?: string | null
}
type CreateCommentResponse = { id: string }
type CommentObjectType = 'TRACE' | 'OBSERVATION' | 'SESSION' | 'PROMPT'
type Comment = {
  id: string
  projectId: string
  createdAt: string
  updatedAt: string
  objectType: CommentObjectType
  objectId: string
  content: string
  authorUserId?: (string | null) | undefined
}
type GetCommentsResponse = { data: Comment[]; meta: UtilsMetaResponse }
type DatasetStatusInput = 'ACTIVE' | 'ARCHIVED'
type CreateDatasetItemRequestInput = {
  datasetName: string
  input?: any | null
  expectedOutput?: any | null
  metadata?: any | null
  sourceTraceId?: string | null
  sourceObservationId?: string | null
  id?: string | null
  status?: DatasetStatusInput | null
}
type DatasetStatus = 'ACTIVE' | 'ARCHIVED'
type DatasetItemMediaReferenceField = 'input' | 'expectedOutput' | 'metadata'
type DatasetItemMediaReferenceMedia = {
  mediaId: string
  contentType: string
  contentLength: number
  url: string
  urlExpiry: string
}
type DatasetItemMediaReference = {
  field: DatasetItemMediaReferenceField
  referenceString: string
  jsonPath: string
  media: DatasetItemMediaReferenceMedia
}
type DatasetItem = {
  id: string
  status: DatasetStatus
  input: any
  expectedOutput: any
  metadata: any
  sourceTraceId: string | null
  sourceObservationId: string | null
  datasetId: string
  datasetName: string
  createdAt: string
  updatedAt: string
  version?: (string | null) | undefined
  mediaReferences: DatasetItemMediaReference[]
}
type PaginatedDatasetItems = { data: DatasetItem[]; meta: UtilsMetaResponse }
type DeleteDatasetItemResponse = { message: string }
type Dataset = {
  id: string
  name: string
  description: string | null
  metadata: any
  inputSchema: { [key: string]: unknown } | null
  expectedOutputSchema: { [key: string]: unknown } | null
  projectId: string
  createdAt: string
  updatedAt: string
}
type PaginatedDatasets = { data: Dataset[]; meta: UtilsMetaResponse }
type CreateDatasetRequestInput = {
  name: string
  description?: string | null
  metadata?: any | null
  inputSchema?: any | null
  expectedOutputSchema?: any | null
}
type EvaluationRuleNumberFilterOperatorInput = '=' | '>' | '<' | '>=' | '<='
type DateTimeEvaluationRuleFilterInput = {
  column: string
  operator: EvaluationRuleNumberFilterOperatorInput
  value: string
}
type EvaluationRuleStringFilterOperatorInput =
  | '='
  | 'contains'
  | 'does not contain'
  | 'starts with'
  | 'ends with'
type StringEvaluationRuleFilterInput = {
  column: string
  operator: EvaluationRuleStringFilterOperatorInput
  value: string
}
type NumberEvaluationRuleFilterInput = {
  column: string
  operator: EvaluationRuleNumberFilterOperatorInput
  value: number
}
type EvaluationRuleOptionsFilterOperatorInput = 'any of' | 'none of'
type StringOptionsEvaluationRuleFilterInput = {
  column: string
  operator: EvaluationRuleOptionsFilterOperatorInput
  value: string[]
}
type CategoryOptionsEvaluationRuleFilterInput = {
  column: string
  key: string
  operator: EvaluationRuleOptionsFilterOperatorInput
  value: string[]
}
type EvaluationRuleArrayOptionsFilterOperatorInput = 'any of' | 'none of' | 'all of'
type ArrayOptionsEvaluationRuleFilterInput = {
  column: string
  operator: EvaluationRuleArrayOptionsFilterOperatorInput
  value: string[]
}
type EvaluationRuleStringObjectFilterOperatorInput =
  | '='
  | 'contains'
  | 'does not contain'
  | 'starts with'
  | 'ends with'
  | 'is set'
  | 'is not set'
type StringObjectEvaluationRuleFilterInput = {
  column: string
  key: string
  operator: EvaluationRuleStringObjectFilterOperatorInput
  value: string
}
type NumberObjectEvaluationRuleFilterInput = {
  column: string
  key: string
  operator: EvaluationRuleNumberFilterOperatorInput
  value: number
}
type EvaluationRuleBooleanFilterOperatorInput = '=' | '<>'
type BooleanEvaluationRuleFilterInput = {
  column: string
  operator: EvaluationRuleBooleanFilterOperatorInput
  value: boolean
}
type EvaluationRuleNullFilterOperatorInput = 'is null' | 'is not null'
type NullEvaluationRuleFilterInput = {
  column: string
  operator: EvaluationRuleNullFilterOperatorInput
  value: ''
}
type EvaluationRuleFilterInput =
  | ({ type?: 'datetime' } & DateTimeEvaluationRuleFilterInput)
  | ({ type?: 'string' } & StringEvaluationRuleFilterInput)
  | ({ type?: 'number' } & NumberEvaluationRuleFilterInput)
  | ({ type?: 'stringOptions' } & StringOptionsEvaluationRuleFilterInput)
  | ({ type?: 'categoryOptions' } & CategoryOptionsEvaluationRuleFilterInput)
  | ({ type?: 'arrayOptions' } & ArrayOptionsEvaluationRuleFilterInput)
  | ({ type?: 'stringObject' } & StringObjectEvaluationRuleFilterInput)
  | ({ type?: 'numberObject' } & NumberObjectEvaluationRuleFilterInput)
  | ({ type?: 'boolean' } & BooleanEvaluationRuleFilterInput)
  | ({ type?: 'null' } & NullEvaluationRuleFilterInput)
type PromptVariableMappingSourceInput =
  | 'input'
  | 'output'
  | 'metadata'
  | 'tool_calls'
  | 'expected_output'
  | 'experiment_item_metadata'
type PromptVariableMappingInputInput = {
  variable: string
  source: PromptVariableMappingSourceInput
  jsonPath?: string | null
}
type EvaluationRuleEvaluatorAssignmentInputInput = {
  evaluatorId: string
  variableMapping?: PromptVariableMappingInputInput[] | null
}
type CreateEvaluationRuleRequestInput = {
  name: string
  enabled: boolean
  sampling?: number | null
  filter?: EvaluationRuleFilterInput[] | null
  evaluatorAssignments: EvaluationRuleEvaluatorAssignmentInputInput[]
}
type Creator = { id: string; name: string | null }
type EvaluationRuleReadFilterBase = {
  type: string
  column: string
  operator: string
  value?: (any | null) | undefined
}
type EvaluationRuleReadFilterWithKey = EvaluationRuleReadFilterBase & { key: string }
type EvaluationRuleReadFilter = EvaluationRuleReadFilterWithKey | EvaluationRuleReadFilterBase
type PromptVariableMappingRead = {
  variable: string
  source: string | null
  jsonPath?: (string | null) | undefined
}
type LegacyEvaluationObject =
  | 'trace'
  | 'span'
  | 'generation'
  | 'event'
  | 'agent'
  | 'tool'
  | 'chain'
  | 'retriever'
  | 'evaluator'
  | 'embedding'
  | 'guardrail'
  | 'dataset_item'
type LegacyPromptVariableMapping = {
  mappingType: 'legacy'
  variable: string
  langfuseObject: LegacyEvaluationObject
  objectName: string | null
  source: string
  jsonPath?: (string | null) | undefined
}
type PromptVariableMapping = PromptVariableMappingRead | LegacyPromptVariableMapping
type EvaluatorAssignment = { evaluatorId: string; variableMapping: PromptVariableMapping[] | null }
type EvaluationRule = {
  id: string
  name: string
  createdBy: Creator | null
  enabled: boolean
  sampling: number
  filter: EvaluationRuleReadFilter[]
  evaluatorAssignments: EvaluatorAssignment[]
  createdAt: string
  updatedAt: string
}
type PublicApiErrorCode =
  | 'authentication_failed'
  | 'access_denied'
  | 'invalid_request'
  | 'invalid_query'
  | 'invalid_body'
  | 'resource_not_found'
  | 'conflict'
  | 'rate_limited'
  | 'method_not_allowed'
  | 'internal_error'
type PublicApiValidationIssue = { code: string; message: string; path: any[] }
type PublicApiErrorDetails = {
  issues?: (PublicApiValidationIssue[] | null) | undefined
  retryAfterSeconds?: (number | null) | undefined
  limit?: (number | null) | undefined
  remaining?: (number | null) | undefined
  resetAt?: (string | null) | undefined
}
type PublicApiError = {
  message: string
  code: PublicApiErrorCode
  details?: (PublicApiErrorDetails | null) | undefined
}
type UtilsCursorMetaResponse = { cursor?: (string | null) | undefined }
type CursorMeta = UtilsCursorMetaResponse & { [key: string]: unknown }
type EvaluationRulesPage = { data: EvaluationRule[]; meta: CursorMeta }
type UpdateEvaluationRuleRequestInput = {
  name?: string | null
  enabled?: boolean | null
  sampling?: number | null
  filter?: EvaluationRuleFilterInput[] | null
  evaluatorAssignments?: EvaluationRuleEvaluatorAssignmentInputInput[] | null
}
type DeletedEvaluationRule = { id: string }
type EvaluatorChatMessageRoleInput = 'system' | 'user' | 'assistant'
type EvaluatorChatMessageInput = { role: EvaluatorChatMessageRoleInput; content: string }
type EvaluatorChatPromptInput = EvaluatorChatMessageInput[]
type EvaluatorChatPromptInputInput = string | EvaluatorChatPromptInput
type EvaluatorModelConfigInput = { provider: string; model: string }
type EvaluatorOutputDefinitionBaseInput = {
  scoreReasoningInstructions?: string | null
  scoreValueInstructions?: string | null
}
type PublicEvaluatorNumericScoreInput = EvaluatorOutputDefinitionBaseInput & {
  dataType: 'NUMERIC'
  minValue?: number | null
  maxValue?: number | null
}
type PublicEvaluatorBooleanScoreInput = EvaluatorOutputDefinitionBaseInput & { dataType: 'BOOLEAN' }
type PublicEvaluatorCategoricalScoreInput = EvaluatorOutputDefinitionBaseInput & {
  dataType: 'CATEGORICAL'
  categories: string[]
  shouldAllowMultipleMatches: boolean
}
type EvaluatorOutputDefinitionInput =
  | ({ dataType?: 'NUMERIC' } & PublicEvaluatorNumericScoreInput)
  | ({ dataType?: 'BOOLEAN' } & PublicEvaluatorBooleanScoreInput)
  | ({ dataType?: 'CATEGORICAL' } & PublicEvaluatorCategoricalScoreInput)
type CreateLlmAsJudgeEvaluatorRequestInput = {
  name: string
  description?: string | null
  type: 'llm_as_judge'
  prompt: EvaluatorChatPromptInputInput
  modelConfig?: EvaluatorModelConfigInput | null
  variableMapping?: PromptVariableMappingInputInput[] | null
  outputDefinition: EvaluatorOutputDefinitionInput
}
type CodeEvaluatorSourceCodeLanguageInput = 'PYTHON' | 'TYPESCRIPT'
type CreateCodeEvaluatorRequestInput = {
  name: string
  description?: string | null
  type: 'code'
  sourceCode: string
  sourceCodeLanguage: CodeEvaluatorSourceCodeLanguageInput
}
type DecisionModelEntryInput = string | { [key: string]: unknown } | any[] | number | boolean
type DecisionModelChoiceCriterionInput = {
  value: string
  description?: DecisionModelEntryInput | null
}
type DecisionModelChoiceQuestionInput = {
  id: string
  scoreName: string
  instructions: DecisionModelEntryInput
  criteria: DecisionModelChoiceCriterionInput[]
}
type DecisionModelScoreCriterionInput = { description: DecisionModelEntryInput }
type DecisionModelScoreQuestionInput = {
  id: string
  scoreName: string
  instructions: DecisionModelEntryInput
  criteria: DecisionModelScoreCriterionInput[]
}
type DecisionModelBooleanCriterionInput = { description: DecisionModelEntryInput }
type DecisionModelBooleanCriteriaInput = {
  true?: DecisionModelBooleanCriterionInput | null
  false?: DecisionModelBooleanCriterionInput | null
}
type DecisionModelBooleanQuestionInput = {
  id: string
  scoreName: string
  instructions: DecisionModelEntryInput
  criteria?: DecisionModelBooleanCriteriaInput | null
}
type DecisionModelQuestionInput =
  | ({ type?: 'choice' } & DecisionModelChoiceQuestionInput)
  | ({ type?: 'score' } & DecisionModelScoreQuestionInput)
  | ({ type?: 'boolean' } & DecisionModelBooleanQuestionInput)
type CreateDecisionModelEvaluatorRequestInput = {
  name: string
  description?: string | null
  type: 'decision_model'
  questions: DecisionModelQuestionInput[]
  modelConfig: EvaluatorModelConfigInput
  variableMapping: PromptVariableMappingInputInput[]
}
type CreateEvaluatorRequestInput =
  | ({ type?: 'llm_as_judge' } & CreateLlmAsJudgeEvaluatorRequestInput)
  | ({ type?: 'code' } & CreateCodeEvaluatorRequestInput)
  | ({ type?: 'decision_model' } & CreateDecisionModelEvaluatorRequestInput)
type EvaluatorStatus = 'active' | 'paused'
type EvaluationRuleAssignment = {
  evaluationRuleId: string
  variableMappingOverride?: (PromptVariableMapping[] | null) | undefined
}
type EvaluatorBase = {
  id: string
  name: string
  description: string | null
  createdBy: Creator | null
  status: EvaluatorStatus
  pausedAt: string | null
  pausedReason: string | null
  pausedMessage: string | null
  evaluationRuleAssignments: EvaluationRuleAssignment[]
  createdAt: string
  updatedAt: string
  versionId: string
  version: number
  versionCreatedAt: string
  versionCreatedBy: Creator | null
}
type EvaluatorChatMessageRole = 'system' | 'user' | 'assistant'
type EvaluatorChatMessage = { role: EvaluatorChatMessageRole; content: string }
type EvaluatorChatPrompt = EvaluatorChatMessage[]
type EvaluatorModelConfig = { provider: string; model: string }
type EvaluatorOutputDefinitionBase = {
  scoreReasoningInstructions?: (string | null) | undefined
  scoreValueInstructions?: (string | null) | undefined
}
type PublicEvaluatorNumericScore = EvaluatorOutputDefinitionBase & {
  dataType: 'NUMERIC'
  minValue?: (number | null) | undefined
  maxValue?: (number | null) | undefined
}
type PublicEvaluatorBooleanScore = EvaluatorOutputDefinitionBase & { dataType: 'BOOLEAN' }
type PublicEvaluatorCategoricalScore = EvaluatorOutputDefinitionBase & {
  dataType: 'CATEGORICAL'
  categories: string[]
  shouldAllowMultipleMatches: boolean
}
type PublicEvaluatorOutputDefinition =
  | ({ dataType?: 'NUMERIC' | undefined } & PublicEvaluatorNumericScore)
  | ({ dataType?: 'BOOLEAN' | undefined } & PublicEvaluatorBooleanScore)
  | ({ dataType?: 'CATEGORICAL' | undefined } & PublicEvaluatorCategoricalScore)
type LlmAsJudgeEvaluator = EvaluatorBase & {
  type: 'llm_as_judge'
  prompt: EvaluatorChatPrompt
  variables: string[]
  variableMapping: PromptVariableMappingRead[] | null
  modelConfig: EvaluatorModelConfig | null
  outputDefinition: PublicEvaluatorOutputDefinition
}
type CodeEvaluatorSourceCodeLanguage = 'PYTHON' | 'TYPESCRIPT'
type CodeEvaluator = EvaluatorBase & {
  type: 'code'
  sourceCode: string
  sourceCodeLanguage: CodeEvaluatorSourceCodeLanguage
}
type DecisionModelEntry = string | { [key: string]: unknown } | any[] | number | boolean
type DecisionModelChoiceCriterion = {
  value: string
  description?: (DecisionModelEntry | null) | undefined
}
type DecisionModelChoiceQuestion = {
  id: string
  scoreName: string
  instructions: DecisionModelEntry
  criteria: DecisionModelChoiceCriterion[]
}
type DecisionModelScoreCriterion = { description: DecisionModelEntry }
type DecisionModelScoreQuestion = {
  id: string
  scoreName: string
  instructions: DecisionModelEntry
  criteria: DecisionModelScoreCriterion[]
}
type DecisionModelBooleanCriterion = { description: DecisionModelEntry }
type DecisionModelBooleanCriteria = {
  true?: (DecisionModelBooleanCriterion | null) | undefined
  false?: (DecisionModelBooleanCriterion | null) | undefined
}
type DecisionModelBooleanQuestion = {
  id: string
  scoreName: string
  instructions: DecisionModelEntry
  criteria?: (DecisionModelBooleanCriteria | null) | undefined
}
type DecisionModelQuestion =
  | ({ type?: 'choice' | undefined } & DecisionModelChoiceQuestion)
  | ({ type?: 'score' | undefined } & DecisionModelScoreQuestion)
  | ({ type?: 'boolean' | undefined } & DecisionModelBooleanQuestion)
type DecisionModelEvaluator = EvaluatorBase & {
  type: 'decision_model'
  questions: DecisionModelQuestion[]
  variables: string[]
  variableMapping: PromptVariableMappingRead[]
  modelConfig: EvaluatorModelConfig
}
type Evaluator =
  | ({ type?: 'llm_as_judge' | undefined } & LlmAsJudgeEvaluator)
  | ({ type?: 'code' | undefined } & CodeEvaluator)
  | ({ type?: 'decision_model' | undefined } & DecisionModelEvaluator)
type EvaluatorsPage = { data: Evaluator[]; meta: CursorMeta }
type UpdateEvaluatorMetadataRequestInput = { name?: string | null; description?: string | null }
type UpdateLlmAsJudgeEvaluatorRequestInput = {
  name?: string | null
  description?: string | null
  type: 'llm_as_judge'
  prompt: EvaluatorChatPromptInputInput
  modelConfig?: EvaluatorModelConfigInput | null
  variableMapping?: PromptVariableMappingInputInput[] | null
  outputDefinition: EvaluatorOutputDefinitionInput
}
type UpdateCodeEvaluatorRequestInput = {
  name?: string | null
  description?: string | null
  type: 'code'
  sourceCode: string
  sourceCodeLanguage: CodeEvaluatorSourceCodeLanguageInput
}
type UpdateDecisionModelEvaluatorRequestInput = {
  name?: string | null
  description?: string | null
  type: 'decision_model'
  questions: DecisionModelQuestionInput[]
  modelConfig: EvaluatorModelConfigInput
  variableMapping: PromptVariableMappingInputInput[]
}
type UpdateEvaluatorRequestInput =
  | UpdateEvaluatorMetadataRequestInput
  | UpdateLlmAsJudgeEvaluatorRequestInput
  | UpdateCodeEvaluatorRequestInput
  | UpdateDecisionModelEvaluatorRequestInput
type DeletedEvaluator = { id: string }
type EvaluatorVersionBase = {
  id: string
  version: number
  createdAt: string
  createdBy: Creator | null
}
type LlmAsJudgeEvaluatorVersion = EvaluatorVersionBase & {
  type: 'llm_as_judge'
  prompt: EvaluatorChatPrompt
  variables: string[]
  variableMapping: PromptVariableMappingRead[] | null
  modelConfig: EvaluatorModelConfig | null
  outputDefinition: PublicEvaluatorOutputDefinition
}
type CodeEvaluatorVersion = EvaluatorVersionBase & {
  type: 'code'
  sourceCode: string
  sourceCodeLanguage: CodeEvaluatorSourceCodeLanguage
}
type DecisionModelEvaluatorVersion = EvaluatorVersionBase & {
  type: 'decision_model'
  questions: DecisionModelQuestion[]
  variables: string[]
  variableMapping: PromptVariableMappingRead[]
  modelConfig: EvaluatorModelConfig
}
type EvaluatorVersion =
  | ({ type?: 'llm_as_judge' | undefined } & LlmAsJudgeEvaluatorVersion)
  | ({ type?: 'code' | undefined } & CodeEvaluatorVersion)
  | ({ type?: 'decision_model' | undefined } & DecisionModelEvaluatorVersion)
type EvaluatorVersionsPage = { data: EvaluatorVersion[]; meta: CursorMeta }
type ScoreSource = 'ANNOTATION' | 'API' | 'EVAL'
type ScoreSubjectTraceV3 = { id: string }
type ScoreSubjectObservationV3 = { id: string; traceId?: (string | null) | undefined }
type ScoreSubjectSessionV3 = { id: string }
type ScoreSubjectExperimentV3 = { id: string }
type ScoreSubjectV3 =
  | ({ kind?: 'trace' | undefined } & ScoreSubjectTraceV3)
  | ({ kind?: 'observation' | undefined } & ScoreSubjectObservationV3)
  | ({ kind?: 'session' | undefined } & ScoreSubjectSessionV3)
  | ({ kind?: 'experiment' | undefined } & ScoreSubjectExperimentV3)
type BaseScoreV3 = {
  id: string
  projectId: string
  name: string
  source: ScoreSource
  timestamp: string
  environment: string
  createdAt: string
  updatedAt: string
  comment?: (string | null) | undefined
  configId?: (string | null) | undefined
  metadata?: ({ [key: string]: unknown } | null) | undefined
  authorUserId?: (string | null) | undefined
  queueId?: (string | null) | undefined
  subject?: (ScoreSubjectV3 | null) | undefined
}
type NumericScoreV3 = BaseScoreV3 & { value: number }
type BooleanScoreV3 = BaseScoreV3 & { value: boolean }
type CategoricalScoreV3 = BaseScoreV3 & { value: string }
type TextScoreV3 = BaseScoreV3 & { value: string }
type CorrectionScoreV3 = BaseScoreV3 & { value: string }
type ScoreV3 =
  | ({ dataType?: 'NUMERIC' | undefined } & NumericScoreV3)
  | ({ dataType?: 'BOOLEAN' | undefined } & BooleanScoreV3)
  | ({ dataType?: 'CATEGORICAL' | undefined } & CategoricalScoreV3)
  | ({ dataType?: 'TEXT' | undefined } & TextScoreV3)
  | ({ dataType?: 'CORRECTION' | undefined } & CorrectionScoreV3)
type Experiment = {
  id: string
  name: string
  description: string | null
  startTime: string
  endTime: string
  itemCount: number
  datasetId: string | null
  metadata?: ({ [key: string]: unknown } | null) | undefined
  scores?: (ScoreV3[] | null) | undefined
}
type ExperimentsResponseMeta = UtilsCursorMetaResponse & { [key: string]: unknown }
type ExperimentsResponse = { data: Experiment[]; meta: ExperimentsResponseMeta }
type ObservationLevel = 'DEBUG' | 'DEFAULT' | 'WARNING' | 'ERROR'
type ExperimentItem = {
  id: string
  traceId: string
  startTime: string
  endTime: string | null
  level: ObservationLevel
  environment: string
  experimentId: string
  experimentName: string
  experimentItemId: string
  experimentDatasetId?: (string | null) | undefined
  experimentItemVersion?: (string | null) | undefined
  input?: (any | null) | undefined
  output?: (any | null) | undefined
  expectedOutput?: (any | null) | undefined
  metadata?: ({ [key: string]: unknown } | null) | undefined
  experimentItemMetadata?: ({ [key: string]: unknown } | null) | undefined
  experimentMetadata?: ({ [key: string]: unknown } | null) | undefined
  experimentDescription?: (string | null) | undefined
  scores?: (ScoreV3[] | null) | undefined
}
type ExperimentItemsResponse = { data: ExperimentItem[]; meta: ExperimentsResponseMeta }
type FeedbackTargetTypeInput = 'skill' | 'mcp-tool' | 'cli' | 'docs' | 'public-api' | 'other'
type SubmitFeedbackRequestInput = {
  targetType: FeedbackTargetTypeInput
  target: string
  feedback: string
  goal?: string | null
  referenceUrl?: string | null
}
type SubmitFeedbackResponse = { id: string }
type HealthResponse = { version: string; status: string }
type LlmConnection = {
  id: string
  provider: string
  adapter: string
  displaySecretKey: string
  baseURL?: (string | null) | undefined
  customModels: string[]
  withDefaultModels: boolean
  extraHeaderKeys: string[]
  config?: ({ [key: string]: unknown } | null) | undefined
  createdAt: string
  updatedAt: string
}
type PaginatedLlmConnections = { data: LlmConnection[]; meta: UtilsMetaResponse }
type LlmAdapterInput =
  | 'anthropic'
  | 'openai'
  | 'azure'
  | 'bedrock'
  | 'google-vertex-ai'
  | 'google-ai-studio'
type UpsertLlmConnectionRequestInput = {
  provider: string
  adapter: LlmAdapterInput
  secretKey: string
  baseURL?: string | null
  customModels?: string[] | null
  withDefaultModels?: boolean | null
  extraHeaders?: { [key: string]: string } | null
  config?: { [key: string]: unknown } | null
}
type DeleteLlmConnectionResponse = { message: string }
type GetMediaResponse = {
  mediaId: string
  contentType: string
  contentLength: number
  uploadedAt: string
  url: string
  urlExpiry: string
}
type PatchMediaBodyInput = {
  uploadedAt: string
  uploadHttpStatus: number
  uploadHttpError?: string | null
  uploadTimeMs?: number | null
}
type MediaContentTypeInput =
  | 'image/png'
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/webp'
  | 'image/gif'
  | 'image/svg+xml'
  | 'image/tiff'
  | 'image/bmp'
  | 'image/avif'
  | 'image/heic'
  | 'audio/mpeg'
  | 'audio/mp3'
  | 'audio/wav'
  | 'audio/ogg'
  | 'audio/oga'
  | 'audio/aac'
  | 'audio/mp4'
  | 'audio/flac'
  | 'audio/opus'
  | 'audio/webm'
  | 'video/mp4'
  | 'video/webm'
  | 'video/ogg'
  | 'video/mpeg'
  | 'video/quicktime'
  | 'video/x-msvideo'
  | 'video/x-matroska'
  | 'text/plain'
  | 'text/html'
  | 'text/css'
  | 'text/csv'
  | 'text/markdown'
  | 'text/x-python'
  | 'application/javascript'
  | 'text/x-typescript'
  | 'application/x-yaml'
  | 'application/pdf'
  | 'application/msword'
  | 'application/vnd.ms-excel'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/zip'
  | 'application/json'
  | 'application/xml'
  | 'application/octet-stream'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  | 'application/rtf'
  | 'application/x-ndjson'
  | 'application/vnd.apache.parquet'
  | 'application/gzip'
  | 'application/x-tar'
  | 'application/x-7z-compressed'
type GetMediaUploadUrlRequestInput = {
  traceId?: string | null
  observationId?: string | null
  datasetId?: string | null
  datasetItemId?: string | null
  contentType: MediaContentTypeInput
  contentLength: number
  sha256Hash: string
  field: string
}
type GetMediaUploadUrlResponse = { uploadUrl?: (string | null) | undefined; mediaId: string }
type MetricsV2Response = { data: { [key: string]: unknown }[] }
type ModelUsageUnitInput =
  | 'CHARACTERS'
  | 'TOKENS'
  | 'MILLISECONDS'
  | 'SECONDS'
  | 'IMAGES'
  | 'REQUESTS'
type PricingTierOperatorInput = 'gt' | 'gte' | 'lt' | 'lte' | 'eq' | 'neq'
type PricingTierUsageConditionInputInput = {
  usageDetailPattern: string
  operator: PricingTierOperatorInput
  value: number
  caseSensitive?: boolean | null
}
type PricingTierAttributeSourceInput = 'model_parameters' | 'metadata'
type PricingTierAttributeConditionInput = {
  source: PricingTierAttributeSourceInput
  key: string
  operator: 'in'
  values: string[]
}
type PricingTierConditionInputInput =
  | PricingTierUsageConditionInputInput
  | PricingTierAttributeConditionInput
type PricingTierInputInput = {
  name: string
  isDefault?: boolean | null
  priority: number
  conditions: PricingTierConditionInputInput[]
  prices: { [key: string]: number }
}
type ModelTokenizerIdInput = 'openai' | 'claude'
type CreateModelRequestInput = {
  modelName: string
  matchPattern: string
  startDate?: string | null
  unit: ModelUsageUnitInput
  inputPrice?: number | null
  outputPrice?: number | null
  totalPrice?: number | null
  pricingTiers?: PricingTierInputInput[] | null
  tokenizerId?: ModelTokenizerIdInput | null
  tokenizerConfig?: any | null
}
type ModelUsageUnit = 'CHARACTERS' | 'TOKENS' | 'MILLISECONDS' | 'SECONDS' | 'IMAGES' | 'REQUESTS'
type ModelPrice = { price: number }
type PricingTierOperator = 'gt' | 'gte' | 'lt' | 'lte' | 'eq' | 'neq'
type PricingTierUsageCondition = {
  usageDetailPattern: string
  operator: PricingTierOperator
  value: number
  caseSensitive: boolean
}
type PricingTierAttributeSource = 'model_parameters' | 'metadata'
type PricingTierAttributeCondition = {
  source: PricingTierAttributeSource
  key: string
  operator: 'in'
  values: string[]
}
type PricingTierCondition = PricingTierUsageCondition | PricingTierAttributeCondition
type PricingTier = {
  id: string
  name: string
  isDefault: boolean
  priority: number
  conditions: PricingTierCondition[]
  prices: { [key: string]: number }
}
type Model = {
  id: string
  modelName: string
  matchPattern: string
  startDate: string | null
  unit?: (ModelUsageUnit | null) | undefined
  inputPrice: number | null
  outputPrice: number | null
  totalPrice: number | null
  tokenizerId: string | null
  tokenizerConfig: any
  isLangfuseManaged: boolean
  createdAt: string
  prices: { [key: string]: ModelPrice }
  pricingTiers: PricingTier[]
}
type PaginatedModels = { data: Model[]; meta: UtilsMetaResponse }
type ObservationV2 = {
  id: string
  traceId: string | null
  startTime: string
  endTime: string | null
  projectId: string
  parentObservationId: string | null
  type: string
  isRootObservation?: (boolean | null) | undefined
  name?: (string | null) | undefined
  level?: (ObservationLevel | null) | undefined
  statusMessage?: (string | null) | undefined
  version?: (string | null) | undefined
  environment?: (string | null) | undefined
  bookmarked?: (boolean | null) | undefined
  public?: (boolean | null) | undefined
  userId?: (string | null) | undefined
  sessionId?: (string | null) | undefined
  completionStartTime?: (string | null) | undefined
  createdAt?: (string | null) | undefined
  updatedAt?: (string | null) | undefined
  input?: (any | null) | undefined
  output?: (any | null) | undefined
  metadata?: ({ [key: string]: unknown } | null) | undefined
  model?: (string | null) | undefined
  internalModelId?: (string | null) | undefined
  modelParameters?: (any | null) | undefined
  usageDetails?: ({ [key: string]: number } | null) | undefined
  costDetails?: ({ [key: string]: number } | null) | undefined
  totalCost?: (number | null) | undefined
  usagePricingTierName?: (string | null) | undefined
  promptId?: (string | null) | undefined
  promptName?: (string | null) | undefined
  promptVersion?: (number | null) | undefined
  latency?: (number | null) | undefined
  timeToFirstToken?: (number | null) | undefined
  modelId: string | null
  inputPrice: string | null
  outputPrice: string | null
  totalPrice: string | null
  traceName?: (string | null) | undefined
  tags?: (string[] | null) | undefined
  release?: (string | null) | undefined
}
type ObservationsV2Meta = UtilsCursorMetaResponse & { comment?: (string | null) | undefined }
type ObservationsV2Response = { data: ObservationV2[]; meta: ObservationsV2Meta }
type OtelAttributeValueInput = {
  stringValue?: string | null
  intValue?: number | null
  doubleValue?: number | null
  boolValue?: boolean | null
}
type OtelAttributeInput = { key?: string | null; value?: OtelAttributeValueInput | null }
type OtelResourceInput = { attributes?: OtelAttributeInput[] | null }
type OtelScopeInput = {
  name?: string | null
  version?: string | null
  attributes?: OtelAttributeInput[] | null
}
type OtelSpanInput = {
  traceId?: any | null
  spanId?: any | null
  parentSpanId?: any | null
  name?: string | null
  kind?: number | null
  startTimeUnixNano?: any | null
  endTimeUnixNano?: any | null
  attributes?: OtelAttributeInput[] | null
  status?: any | null
}
type OtelScopeSpanInput = { scope?: OtelScopeInput | null; spans?: OtelSpanInput[] | null }
type OtelResourceSpanInput = {
  resource?: OtelResourceInput | null
  scopeSpans?: OtelScopeSpanInput[] | null
}
type OtelTraceResponse = { [key: string]: unknown }
type MembershipRole = 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER'
type MembershipResponse = { userId: string; role: MembershipRole; email: string; name: string }
type MembershipsResponse = { memberships: MembershipResponse[] }
type MembershipRoleInput = 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER'
type MembershipRequestInput = { userId: string; role: MembershipRoleInput }
type DeleteMembershipRequestInput = { userId: string }
type MembershipDeletionResponse = { message: string; userId: string }
type OrganizationProject = {
  id: string
  name: string
  metadata?: ({ [key: string]: unknown } | null) | undefined
  createdAt: string
  updatedAt: string
}
type OrganizationProjectsResponse = { projects: OrganizationProject[] }
type OrganizationApiKey = {
  id: string
  createdAt: string
  expiresAt?: (string | null) | undefined
  lastUsedAt?: (string | null) | undefined
  name?: (string | null) | undefined
  note?: (string | null) | undefined
  publicKey: string
  displaySecretKey: string
}
type OrganizationApiKeysResponse = { apiKeys: OrganizationApiKey[] }
type Organization = { id: string; name: string }
type Project = {
  id: string
  name: string
  organization: Organization
  metadata: { [key: string]: unknown }
  retentionDays?: (number | null) | undefined
}
type Projects = { data: Project[] }
type ProjectDeletionResponse = { success: boolean; message: string }
type ApiKeySummary = {
  id: string
  createdAt: string
  expiresAt?: (string | null) | undefined
  lastUsedAt?: (string | null) | undefined
  name?: (string | null) | undefined
  note?: (string | null) | undefined
  publicKey: string
  displaySecretKey: string
}
type ApiKeyList = { apiKeys: ApiKeySummary[] }
type ApiKeyResponse = {
  id: string
  createdAt: string
  expiresAt?: (string | null) | undefined
  publicKey: string
  secretKey: string
  displaySecretKey: string
  name?: (string | null) | undefined
  note?: (string | null) | undefined
}
type ApiKeyDeletionResponse = { success: boolean }
type BasePrompt = {
  name: string
  version: number
  config: any
  labels: string[]
  tags: string[]
  commitMessage?: (string | null) | undefined
  resolutionGraph?: ({ [key: string]: unknown } | null) | undefined
}
type ChatMessageType = 'chatmessage'
type ChatMessage = { role: string; content: string; type?: (ChatMessageType | null) | undefined }
type PlaceholderMessageType = 'placeholder'
type PlaceholderMessage = { name: string; type?: (PlaceholderMessageType | null) | undefined }
type ChatMessageWithPlaceholders = ChatMessage | PlaceholderMessage
type ChatPrompt = BasePrompt & { prompt: ChatMessageWithPlaceholders[] }
type TextPrompt = BasePrompt & { prompt: string }
type Prompt =
  | ({ type?: 'chat' | undefined } & ChatPrompt)
  | ({ type?: 'text' | undefined } & TextPrompt)
type PromptType = 'chat' | 'text'
type PromptMeta = {
  name: string
  type: PromptType
  versions: number[]
  labels: string[]
  tags: string[]
  lastUpdatedAt: string
  lastConfig: any
}
type PromptMetaListResponse = { data: PromptMeta[]; meta: UtilsMetaResponse }
type ChatMessageTypeInput = 'chatmessage'
type ChatMessageInput = { role: string; content: string; type?: ChatMessageTypeInput | null }
type PlaceholderMessageTypeInput = 'placeholder'
type PlaceholderMessageInput = { name: string; type?: PlaceholderMessageTypeInput | null }
type ChatMessageWithPlaceholdersInput = ChatMessageInput | PlaceholderMessageInput
type CreateChatPromptTypeInput = 'chat'
type CreateChatPromptRequestInput = {
  name: string
  prompt: ChatMessageWithPlaceholdersInput[]
  config?: any | null
  type: CreateChatPromptTypeInput
  labels?: string[] | null
  tags?: string[] | null
  commitMessage?: string | null
}
type CreateTextPromptTypeInput = 'text'
type CreateTextPromptRequestInput = {
  name: string
  prompt: string
  config?: any | null
  type?: CreateTextPromptTypeInput | null
  labels?: string[] | null
  tags?: string[] | null
  commitMessage?: string | null
}
type CreatePromptRequestInput = CreateChatPromptRequestInput | CreateTextPromptRequestInput
type ScimFeatureSupport = { supported: boolean }
type BulkConfig = { supported: boolean; maxOperations: number; maxPayloadSize: number }
type FilterConfig = { supported: boolean; maxResults: number }
type AuthenticationScheme = {
  name: string
  description: string
  specUri: string
  type: string
  primary: boolean
}
type ResourceMeta = { resourceType: string; location: string }
type ServiceProviderConfig = {
  schemas: string[]
  documentationUri: string
  patch: ScimFeatureSupport
  bulk: BulkConfig
  filter: FilterConfig
  changePassword: ScimFeatureSupport
  sort: ScimFeatureSupport
  etag: ScimFeatureSupport
  authenticationSchemes: AuthenticationScheme[]
  meta: ResourceMeta
}
type SchemaExtension = { schema: string; required: boolean }
type ResourceType = {
  schemas?: (string[] | null) | undefined
  id: string
  name: string
  endpoint: string
  description: string
  schema: string
  schemaExtensions: SchemaExtension[]
  meta: ResourceMeta
}
type ResourceTypesResponse = { schemas: string[]; totalResults: number; Resources: ResourceType[] }
type SchemaResource = {
  id: string
  name: string
  description: string
  attributes: any[]
  meta: ResourceMeta
}
type SchemasResponse = { schemas: string[]; totalResults: number; Resources: SchemaResource[] }
type ScimName = { formatted?: (string | null) | undefined }
type ScimEmail = { primary: boolean; value: string; type: string }
type UserMeta = {
  resourceType: string
  created?: (string | null) | undefined
  lastModified?: (string | null) | undefined
}
type ScimUser = {
  schemas: string[]
  id: string
  userName: string
  name: ScimName
  emails: ScimEmail[]
  meta: UserMeta
}
type ScimUsersListResponse = {
  schemas: string[]
  totalResults: number
  startIndex: number
  itemsPerPage: number
  Resources: ScimUser[]
}
type ScimNameInput = { formatted?: string | null }
type ScimEmailInput = { primary: boolean; value: string; type: string }
type EmptyResponse = { [key: string]: unknown }
type ScoreConfigDataTypeInput = 'NUMERIC' | 'BOOLEAN' | 'CATEGORICAL' | 'TEXT'
type ConfigCategoryInput = { value: number; label: string }
type CreateScoreConfigRequestInput = {
  name: string
  dataType: ScoreConfigDataTypeInput
  categories?: ConfigCategoryInput[] | null
  minValue?: number | null
  maxValue?: number | null
  description?: string | null
}
type ScoreConfigDataType = 'NUMERIC' | 'BOOLEAN' | 'CATEGORICAL' | 'TEXT'
type ConfigCategory = { value: number; label: string }
type ScoreConfig = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  projectId: string
  dataType: ScoreConfigDataType
  isArchived: boolean
  minValue?: (number | null) | undefined
  maxValue?: (number | null) | undefined
  categories?: (ConfigCategory[] | null) | undefined
  description?: (string | null) | undefined
}
type ScoreConfigs = { data: ScoreConfig[]; meta: UtilsMetaResponse }
type UpdateScoreConfigRequestInput = {
  isArchived?: boolean | null
  name?: string | null
  categories?: ConfigCategoryInput[] | null
  minValue?: number | null
  maxValue?: number | null
  description?: string | null
}
type CreateScoreValueInput = number | string
type ScoreDataTypeInput = 'NUMERIC' | 'BOOLEAN' | 'CATEGORICAL' | 'CORRECTION' | 'TEXT'
type CreateScoreSourceInput = 'API' | 'ANNOTATION'
type CreateScoreRequestInput = {
  id?: string | null
  traceId?: string | null
  sessionId?: string | null
  observationId?: string | null
  datasetRunId?: string | null
  name: string
  value: CreateScoreValueInput
  comment?: string | null
  metadata?: { [key: string]: unknown } | null
  environment?: string | null
  queueId?: string | null
  dataType?: ScoreDataTypeInput | null
  configId?: string | null
  source?: CreateScoreSourceInput | null
  timestamp?: string | null
}
type CreateScoresRequestInput = CreateScoreRequestInput[]
type CreateScoreBatchError = { message: string }
type CreateScoreBatchResults = {
  accepted: number
  rejected: number
  errors: CreateScoreBatchError[]
}
type CreateScoreBatchResponse = { message: 'Accepted' }
type CreateScoresResponse = CreateScoreBatchResults | CreateScoreBatchResponse
type GetScoresV3Meta = UtilsCursorMetaResponse & { limit: number }
type GetScoresV3Response = { data: ScoreV3[]; meta: GetScoresV3Meta }
type SkillMeta = {
  name: string
  description: string
  tags: string[]
  latestVersion: number
  latestVersionCreatedAt: string
  latestVersionLastUpdatedAt: string
  productionVersion: number | null
}
type SkillListPagination = UtilsMetaResponse & { hasNextPage: boolean }
type SkillMetaListResponse = { data: SkillMeta[]; meta: SkillListPagination }
type SkillVersionFileInputInput = { path: string; content: string }
type SkillVersionFileReferenceInput = { path: string; sha256Hash: string }
type SkillVersionFileCreateInputInput = SkillVersionFileInputInput | SkillVersionFileReferenceInput
type CreateSkillVersionRequestInput = {
  files: SkillVersionFileCreateInputInput[]
  commitMessage?: string | null
}
type SkillFile = {
  id: string
  path: string
  blobId: string
  sha256Hash: string
  contentType: string
  contentLength: bigint
  content?: (string | null) | undefined
}
type SkillVersion = {
  id: string
  createdAt: string
  updatedAt: string
  projectId: string
  createdBy: string
  name: string
  description: string
  frontmatter: any
  version: number
  tags: string[]
  labels: string[]
  commitMessage: string | null
  files: SkillFile[]
}
type UpdateSkillRequestInput = { tags: string[] }
type SkillFileContent = { sha256Hash: string; content: string }
type SkillFileContentsResponse = { data: SkillFileContent[] }
type UpdateSkillLabelsRequestInput = { labels: string[] }
type DeleteSkillVersionResponse = { deleted: boolean }
type DeleteTraceResponse = { message: string }
type UnstableBillableUnitsRow = {
  bucket: string
  projectId: string
  count: number
  traces: number
  observations: number
  scores: number
  topicFacetSummaries: number
}
type UnstableBillableUnitsResponse = {
  data: UnstableBillableUnitsRow[]
  usageRecordedFrom?: (string | null) | undefined
}
type UnstablePublicApiErrorCode =
  | 'authentication_failed'
  | 'access_denied'
  | 'invalid_request'
  | 'invalid_query'
  | 'invalid_body'
  | 'resource_not_found'
  | 'conflict'
  | 'rate_limited'
  | 'method_not_allowed'
  | 'internal_error'
type UnstablePublicApiValidationIssue = { code: string; message: string; path: any[] }
type UnstablePublicApiErrorDetails = {
  issues?: (UnstablePublicApiValidationIssue[] | null) | undefined
  field?: (string | null) | undefined
  column?: (string | null) | undefined
  invalidValues?: (string[] | null) | undefined
  allowedValues?: (string[] | null) | undefined
  value?: (string | null) | undefined
  retryAfterSeconds?: (number | null) | undefined
  limit?: (number | null) | undefined
  remaining?: (number | null) | undefined
  resetAt?: (string | null) | undefined
}
type UnstablePublicApiError = {
  message: string
  code: UnstablePublicApiErrorCode
  details?: (UnstablePublicApiErrorDetails | null) | undefined
}
type UnstableDashboardWidgetViewWithLegacy =
  | 'observations'
  | 'scores-numeric'
  | 'scores-boolean'
  | 'scores-categorical'
  | 'traces'
type UnstableDashboardWidgetDimension = { field: string }
type UnstableDashboardWidgetMetricAggregation =
  | 'sum'
  | 'avg'
  | 'count'
  | 'max'
  | 'min'
  | 'p50'
  | 'p75'
  | 'p90'
  | 'p95'
  | 'p99'
  | 'histogram'
  | 'uniq'
type UnstableDashboardWidgetMetric = {
  measure: string
  agg: UnstableDashboardWidgetMetricAggregation
}
type UnstableDashboardWidgetFilter = {
  column: string
  operator: string
  type: string
  value?: (any | null) | undefined
  key?: (string | null) | undefined
}
type UnstableDashboardWidgetChartType =
  | 'LINE_TIME_SERIES'
  | 'AREA_TIME_SERIES'
  | 'BAR_TIME_SERIES'
  | 'HORIZONTAL_BAR'
  | 'VERTICAL_BAR'
  | 'PIE'
  | 'NUMBER'
  | 'HISTOGRAM'
  | 'PIVOT_TABLE'
type UnstableDashboardWidgetSortOrder = 'ASC' | 'DESC'
type UnstableDashboardWidgetDefaultSort = {
  column: string
  order: UnstableDashboardWidgetSortOrder
}
type UnstableDashboardWidgetChartConfig = {
  type: UnstableDashboardWidgetChartType
  row_limit?: (number | null) | undefined
  show_value_labels?: (boolean | null) | undefined
  bins?: (number | null) | undefined
  defaultSort?: (UnstableDashboardWidgetDefaultSort | null) | undefined
}
type UnstableDashboardWidget = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  description: string
  view: UnstableDashboardWidgetViewWithLegacy
  dimensions: UnstableDashboardWidgetDimension[]
  metrics: UnstableDashboardWidgetMetric[]
  filters: UnstableDashboardWidgetFilter[]
  chartType: UnstableDashboardWidgetChartType
  chartConfig: UnstableDashboardWidgetChartConfig
}
type UnstableDashboardWidgetList = { data: UnstableDashboardWidget[]; meta: UtilsMetaResponse }
type UnstableDashboardWidgetViewInput =
  | 'observations'
  | 'scores-numeric'
  | 'scores-boolean'
  | 'scores-categorical'
type UnstableDashboardWidgetDimensionInput = { field: string }
type UnstableDashboardWidgetMetricAggregationInput =
  | 'sum'
  | 'avg'
  | 'count'
  | 'max'
  | 'min'
  | 'p50'
  | 'p75'
  | 'p90'
  | 'p95'
  | 'p99'
  | 'histogram'
  | 'uniq'
type UnstableDashboardWidgetMetricInput = {
  measure: string
  agg: UnstableDashboardWidgetMetricAggregationInput
}
type UnstableDashboardWidgetFilterInput = {
  column: string
  operator: string
  type: string
  value?: any | null
  key?: string | null
}
type UnstableDashboardWidgetChartTypeInput =
  | 'LINE_TIME_SERIES'
  | 'AREA_TIME_SERIES'
  | 'BAR_TIME_SERIES'
  | 'HORIZONTAL_BAR'
  | 'VERTICAL_BAR'
  | 'PIE'
  | 'NUMBER'
  | 'HISTOGRAM'
  | 'PIVOT_TABLE'
type UnstableDashboardWidgetSortOrderInput = 'ASC' | 'DESC'
type UnstableDashboardWidgetDefaultSortInput = {
  column: string
  order: UnstableDashboardWidgetSortOrderInput
}
type UnstableDashboardWidgetChartConfigInputInput = {
  type?: UnstableDashboardWidgetChartTypeInput | null
  row_limit?: number | null
  show_value_labels?: boolean | null
  bins?: number | null
  defaultSort?: UnstableDashboardWidgetDefaultSortInput | null
}
type UnstableCreateDashboardWidgetRequestInput = {
  name: string
  description?: string | null
  view: UnstableDashboardWidgetViewInput
  dimensions: UnstableDashboardWidgetDimensionInput[]
  metrics: UnstableDashboardWidgetMetricInput[]
  filters: UnstableDashboardWidgetFilterInput[]
  chartType: UnstableDashboardWidgetChartTypeInput
  chartConfig?: UnstableDashboardWidgetChartConfigInputInput | null
}
type UnstableUpdateDashboardWidgetRequestInput = {
  name?: string | null
  description?: string | null
  view?: UnstableDashboardWidgetViewInput | null
  dimensions?: UnstableDashboardWidgetDimensionInput[] | null
  metrics?: UnstableDashboardWidgetMetricInput[] | null
  filters?: UnstableDashboardWidgetFilterInput[] | null
  chartType?: UnstableDashboardWidgetChartTypeInput | null
  chartConfig?: UnstableDashboardWidgetChartConfigInputInput | null
}
type UnstableDeleteDashboardWidgetResponse = { message: string }
type UnstableWidgetPlacement = {
  id: string
  widgetId: string
  x: number
  y: number
  width: number
  height: number
}
type UnstablePresetPlacement = {
  id: string
  presetId: string
  x: number
  y: number
  width: number
  height: number
}
type UnstableDashboardPlacement =
  | ({ type?: 'widget' | undefined } & UnstableWidgetPlacement)
  | ({ type?: 'preset' | undefined } & UnstablePresetPlacement)
type UnstableDashboardDefinition = { widgets: UnstableDashboardPlacement[] }
type UnstableDashboard = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  description: string
  definition: UnstableDashboardDefinition
  filters: UnstableDashboardWidgetFilter[]
}
type UnstableDashboardList = { data: UnstableDashboard[]; meta: UtilsMetaResponse }
type UnstableWidgetPlacementInput = {
  id: string
  widgetId: string
  x: number
  y: number
  width: number
  height: number
}
type UnstablePresetPlacementInput = {
  id: string
  presetId: string
  x: number
  y: number
  width: number
  height: number
}
type UnstableDashboardPlacementInput =
  | ({ type?: 'widget' } & UnstableWidgetPlacementInput)
  | ({ type?: 'preset' } & UnstablePresetPlacementInput)
type UnstableDashboardDefinitionInput = { widgets: UnstableDashboardPlacementInput[] }
type UnstableCreateDashboardRequestInput = {
  name: string
  description?: string | null
  definition?: UnstableDashboardDefinitionInput | null
  filters?: UnstableDashboardWidgetFilterInput[] | null
}
type UnstableUpdateDashboardRequestInput = {
  name?: string | null
  description?: string | null
  definition?: UnstableDashboardDefinitionInput | null
  filters?: UnstableDashboardWidgetFilterInput[] | null
}
type UnstableDeleteDashboardResponse = { message: string }
type UnstableCreateWidgetPlacementInput = {
  id?: string | null
  widgetId: string
  x?: number | null
  y?: number | null
  width?: number | null
  height?: number | null
}
type UnstableCreatePresetPlacementInput = {
  id?: string | null
  presetId: string
  x?: number | null
  y?: number | null
  width?: number | null
  height?: number | null
}
type UnstableCreateDashboardPlacementRequestInput =
  | ({ type?: 'widget' } & UnstableCreateWidgetPlacementInput)
  | ({ type?: 'preset' } & UnstableCreatePresetPlacementInput)
type UnstableUpdateDashboardPlacementRequestInput = {
  x?: number | null
  y?: number | null
  width?: number | null
  height?: number | null
}
type UnstableDeleteDashboardPlacementResponse = { message: string }
type UnstableTopicFacetPublishedMap = {
  id: string
  completedAt?: (string | null) | undefined
  topicCount: number
}
type UnstableTopicFacet = {
  id: string
  name: string
  description: string
  isBuiltIn: boolean
  active: boolean
  ruleIds: string[]
  version: number
  prompt: string
  publishedMap?: (UnstableTopicFacetPublishedMap | null) | undefined
}
type UnstableTopicFacetList = { data: UnstableTopicFacet[]; meta: UtilsMetaResponse }
type UnstableTopicWindow = { from: string; to: string }
type UnstableTopicFacetRef = { id: string; name: string; version: number }
type UnstableTopic = {
  stableId: string
  versionId: string
  name: string
  description: string
  facet: UnstableTopicFacetRef
  ruleId?: (string | null) | undefined
  mapId: string
  traceCount: number
}
type UnstableTopicStatusCounts = {
  assigned: number
  outlier: number
  awaitingMap: number
  notApplicable: number
  insufficientInput: number
  emptyInput: number
  inputTooLarge: number
}
type UnstableTopicFacetCounts = {
  facet: UnstableTopicFacetRef
  ruleId?: (string | null) | undefined
  publishedMapId?: (string | null) | undefined
  counts: UnstableTopicStatusCounts
}
type UnstableTopicList = {
  window: UnstableTopicWindow
  data: UnstableTopic[]
  facets: UnstableTopicFacetCounts[]
  meta: UtilsMetaResponse
}
type UnstableTopicWithStatus = UnstableTopic & {
  inCurrentMap: boolean
  window: UnstableTopicWindow
}
type UnstableTopicRule = {
  id: string
  name: string
  filter: EvaluationRuleReadFilter[]
  sampling: number
  facetIds: string[]
  updatedAt: string
}
type UnstableTopicRuleList = { data: UnstableTopicRule[]; meta: UtilsMetaResponse }
type UnstableTopicSummaryState =
  | 'complete'
  | 'not_applicable'
  | 'insufficient_input'
  | 'empty_input'
  | 'input_too_large'
type UnstableTopicSummary = {
  traceId: string
  traceName: string
  environment: string
  timestamp: string
  facetId: string
  facetName: string
  facetVersion: number
  state: UnstableTopicSummaryState
  summary?: (string | null) | undefined
  summaryTruncated: boolean
  createdAt: string
}
type UnstableTopicResultListMeta = {
  cursor?: (string | null) | undefined
  comment?: (string | null) | undefined
}
type UnstableTopicSummaryList = {
  window: UnstableTopicWindow
  data: UnstableTopicSummary[]
  meta: UnstableTopicResultListMeta
}
type UnstableTopicAssignmentStatus = 'assigned' | 'outlier'
type UnstableTopicAssignmentTopic = { stableId: string; versionId: string; name: string }
type UnstableTopicAssignment = {
  traceId: string
  timestamp: string
  facetId: string
  facetName: string
  facetVersion: number
  ruleId?: (string | null) | undefined
  status: UnstableTopicAssignmentStatus
  topic?: (UnstableTopicAssignmentTopic | null) | undefined
  mapId?: (string | null) | undefined
  createdAt: string
}
type UnstableTopicAssignmentList = {
  window: UnstableTopicWindow
  data: UnstableTopicAssignment[]
  meta: UnstableTopicResultListMeta
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/public/annotation-queues': {
      $get:
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: PaginatedAnnotationQueues
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { json: CreateAnnotationQueueRequestInput }
            output: AnnotationQueue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAnnotationQueueRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAnnotationQueueRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAnnotationQueueRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAnnotationQueueRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAnnotationQueueRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/annotation-queues/:queueId': {
      $get:
        | {
            input: { param: { queueId: string } }
            output: AnnotationQueue
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { queueId: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { queueId: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { queueId: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { queueId: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { queueId: string } }; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/annotation-queues/:queueId/items': {
      $get:
        | {
            input: { param: { queueId: string } } & {
              query: { status?: unknown; page?: unknown; limit?: unknown }
            }
            output: PaginatedAnnotationQueueItems
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string } } & {
              query: { status?: unknown; page?: unknown; limit?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string } } & {
              query: { status?: unknown; page?: unknown; limit?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string } } & {
              query: { status?: unknown; page?: unknown; limit?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string } } & {
              query: { status?: unknown; page?: unknown; limit?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string } } & {
              query: { status?: unknown; page?: unknown; limit?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { param: { queueId: string } } & { json: CreateAnnotationQueueItemRequestInput }
            output: AnnotationQueueItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string } } & { json: CreateAnnotationQueueItemRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string } } & { json: CreateAnnotationQueueItemRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string } } & { json: CreateAnnotationQueueItemRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string } } & { json: CreateAnnotationQueueItemRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string } } & { json: CreateAnnotationQueueItemRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/annotation-queues/:queueId/items/:itemId': {
      $get:
        | {
            input: { param: { queueId: string; itemId: string } }
            output: AnnotationQueueItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $patch:
        | {
            input: { param: { queueId: string; itemId: string } } & {
              json: UpdateAnnotationQueueItemRequestInput
            }
            output: AnnotationQueueItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string; itemId: string } } & {
              json: UpdateAnnotationQueueItemRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string; itemId: string } } & {
              json: UpdateAnnotationQueueItemRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string; itemId: string } } & {
              json: UpdateAnnotationQueueItemRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string; itemId: string } } & {
              json: UpdateAnnotationQueueItemRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string; itemId: string } } & {
              json: UpdateAnnotationQueueItemRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { queueId: string; itemId: string } }
            output: DeleteAnnotationQueueItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/annotation-queues/:queueId/assignments': {
      $post:
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequestInput }
            output: CreateAnnotationQueueAssignmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequestInput }
            output: DeleteAnnotationQueueAssignmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/integrations/blob-storage': {
      $get:
        | { input: {}; output: BlobStorageIntegrationsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: any; outputFormat: 'json'; status: 400 }
        | { input: {}; output: any; outputFormat: 'json'; status: 401 }
        | { input: {}; output: any; outputFormat: 'json'; status: 403 }
        | { input: {}; output: any; outputFormat: 'json'; status: 404 }
        | { input: {}; output: any; outputFormat: 'json'; status: 405 }
      $put:
        | {
            input: { json: CreateBlobStorageIntegrationRequestInput }
            output: BlobStorageIntegrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateBlobStorageIntegrationRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateBlobStorageIntegrationRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateBlobStorageIntegrationRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateBlobStorageIntegrationRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateBlobStorageIntegrationRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/integrations/blob-storage/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: BlobStorageIntegrationStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 405 }
      $delete:
        | {
            input: { param: { id: string } }
            output: BlobStorageIntegrationDeletionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/comments': {
      $post:
        | {
            input: { json: CreateCommentRequestInput }
            output: CreateCommentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateCommentRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateCommentRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateCommentRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateCommentRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateCommentRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $get:
        | {
            input: {
              query: {
                page?: unknown
                limit?: unknown
                objectType?: string | null
                objectId?: string | null
                authorUserId?: string | null
              }
            }
            output: GetCommentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: unknown
                limit?: unknown
                objectType?: string | null
                objectId?: string | null
                authorUserId?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: unknown
                limit?: unknown
                objectType?: string | null
                objectId?: string | null
                authorUserId?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: unknown
                limit?: unknown
                objectType?: string | null
                objectId?: string | null
                authorUserId?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: unknown
                limit?: unknown
                objectType?: string | null
                objectId?: string | null
                authorUserId?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?: unknown
                limit?: unknown
                objectType?: string | null
                objectId?: string | null
                authorUserId?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/comments/:commentId': {
      $get:
        | {
            input: { param: { commentId: string } }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commentId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { commentId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { commentId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { commentId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { commentId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/dataset-items': {
      $post:
        | {
            input: { json: CreateDatasetItemRequestInput }
            output: DatasetItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDatasetItemRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDatasetItemRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateDatasetItemRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDatasetItemRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateDatasetItemRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $get:
        | {
            input: {
              query: {
                datasetName?: string | null
                sourceTraceId?: string | null
                sourceObservationId?: string | null
                version?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: PaginatedDatasetItems
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                datasetName?: string | null
                sourceTraceId?: string | null
                sourceObservationId?: string | null
                version?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                datasetName?: string | null
                sourceTraceId?: string | null
                sourceObservationId?: string | null
                version?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                datasetName?: string | null
                sourceTraceId?: string | null
                sourceObservationId?: string | null
                version?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                datasetName?: string | null
                sourceTraceId?: string | null
                sourceObservationId?: string | null
                version?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                datasetName?: string | null
                sourceTraceId?: string | null
                sourceObservationId?: string | null
                version?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/dataset-items/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: DatasetItem
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 405 }
      $delete:
        | {
            input: { param: { id: string } }
            output: DeleteDatasetItemResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/v2/datasets': {
      $get:
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: PaginatedDatasets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { json: CreateDatasetRequestInput }
            output: Dataset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDatasetRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDatasetRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateDatasetRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDatasetRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateDatasetRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/datasets/:datasetName': {
      $get:
        | {
            input: { param: { datasetName: string } }
            output: Dataset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datasetName: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datasetName: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { datasetName: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datasetName: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { datasetName: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/evaluation-rules': {
      $post:
        | {
            input: { json: CreateEvaluationRuleRequestInput }
            output: EvaluationRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateEvaluationRuleRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateEvaluationRuleRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateEvaluationRuleRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateEvaluationRuleRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateEvaluationRuleRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreateEvaluationRuleRequestInput }
            output: PublicApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateEvaluationRuleRequestInput }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateEvaluationRuleRequestInput }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: EvaluationRulesPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/v2/evaluation-rules/:evaluationRuleId': {
      $get:
        | {
            input: { param: { evaluationRuleId: string } }
            output: EvaluationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { evaluationRuleId: string } } & {
              json: UpdateEvaluationRuleRequestInput
            }
            output: EvaluationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluationRuleId: string } } & {
              json: UpdateEvaluationRuleRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluationRuleId: string } } & {
              json: UpdateEvaluationRuleRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluationRuleId: string } } & {
              json: UpdateEvaluationRuleRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluationRuleId: string } } & {
              json: UpdateEvaluationRuleRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluationRuleId: string } } & {
              json: UpdateEvaluationRuleRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluationRuleId: string } } & {
              json: UpdateEvaluationRuleRequestInput
            }
            output: PublicApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { evaluationRuleId: string } } & {
              json: UpdateEvaluationRuleRequestInput
            }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluationRuleId: string } } & {
              json: UpdateEvaluationRuleRequestInput
            }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { evaluationRuleId: string } }
            output: DeletedEvaluationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/v2/evaluators': {
      $post:
        | {
            input: { json: CreateEvaluatorRequestInput }
            output: Evaluator
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateEvaluatorRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateEvaluatorRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateEvaluatorRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateEvaluatorRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateEvaluatorRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreateEvaluatorRequestInput }
            output: PublicApiError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: CreateEvaluatorRequestInput }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateEvaluatorRequestInput }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: EvaluatorsPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { limit?: unknown; cursor?: string | null } }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/v2/evaluators/:evaluatorId': {
      $get:
        | {
            input: { param: { evaluatorId: string } }
            output: Evaluator
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluatorId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluatorId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluatorId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluatorId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluatorId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluatorId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluatorId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequestInput }
            output: Evaluator
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequestInput }
            output: PublicApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequestInput }
            output: PublicApiError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequestInput }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequestInput }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { evaluatorId: string } }
            output: DeletedEvaluator
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluatorId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluatorId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluatorId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluatorId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluatorId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluatorId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluatorId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/v2/evaluators/:evaluatorId/versions': {
      $get:
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: unknown; cursor?: string | null }
            }
            output: EvaluatorVersionsPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: unknown; cursor?: string | null }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: unknown; cursor?: string | null }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: unknown; cursor?: string | null }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: unknown; cursor?: string | null }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: unknown; cursor?: string | null }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: unknown; cursor?: string | null }
            }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: unknown; cursor?: string | null }
            }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/experiments': {
      $get:
        | {
            input: {
              query: {
                fields?: string | null
                limit?: unknown
                scoreLimit?: unknown
                cursor?: string | null
                fromStartTime: string
                toStartTime?: unknown
                id?: string | null
                name?: string | null
                datasetId?: string | null
                filter?: string | null
              }
            }
            output: ExperimentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | null
                limit?: unknown
                scoreLimit?: unknown
                cursor?: string | null
                fromStartTime: string
                toStartTime?: unknown
                id?: string | null
                name?: string | null
                datasetId?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | null
                limit?: unknown
                scoreLimit?: unknown
                cursor?: string | null
                fromStartTime: string
                toStartTime?: unknown
                id?: string | null
                name?: string | null
                datasetId?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | null
                limit?: unknown
                scoreLimit?: unknown
                cursor?: string | null
                fromStartTime: string
                toStartTime?: unknown
                id?: string | null
                name?: string | null
                datasetId?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fields?: string | null
                limit?: unknown
                scoreLimit?: unknown
                cursor?: string | null
                fromStartTime: string
                toStartTime?: unknown
                id?: string | null
                name?: string | null
                datasetId?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | null
                limit?: unknown
                scoreLimit?: unknown
                cursor?: string | null
                fromStartTime: string
                toStartTime?: unknown
                id?: string | null
                name?: string | null
                datasetId?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/experiment-items': {
      $get:
        | {
            input: {
              query: {
                fields?: string | null
                limit?: unknown
                scoreLimit?: unknown
                cursor?: string | null
                fromStartTime: string
                toStartTime?: unknown
                experimentId?: string | null
                experimentName?: string | null
                experimentItemId?: string | null
                datasetId?: string | null
                filter?: string | null
              }
            }
            output: ExperimentItemsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | null
                limit?: unknown
                scoreLimit?: unknown
                cursor?: string | null
                fromStartTime: string
                toStartTime?: unknown
                experimentId?: string | null
                experimentName?: string | null
                experimentItemId?: string | null
                datasetId?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | null
                limit?: unknown
                scoreLimit?: unknown
                cursor?: string | null
                fromStartTime: string
                toStartTime?: unknown
                experimentId?: string | null
                experimentName?: string | null
                experimentItemId?: string | null
                datasetId?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | null
                limit?: unknown
                scoreLimit?: unknown
                cursor?: string | null
                fromStartTime: string
                toStartTime?: unknown
                experimentId?: string | null
                experimentName?: string | null
                experimentItemId?: string | null
                datasetId?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fields?: string | null
                limit?: unknown
                scoreLimit?: unknown
                cursor?: string | null
                fromStartTime: string
                toStartTime?: unknown
                experimentId?: string | null
                experimentName?: string | null
                experimentItemId?: string | null
                datasetId?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | null
                limit?: unknown
                scoreLimit?: unknown
                cursor?: string | null
                fromStartTime: string
                toStartTime?: unknown
                experimentId?: string | null
                experimentName?: string | null
                experimentItemId?: string | null
                datasetId?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/feedback': {
      $post:
        | {
            input: { json: SubmitFeedbackRequestInput }
            output: SubmitFeedbackResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SubmitFeedbackRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SubmitFeedbackRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubmitFeedbackRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SubmitFeedbackRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SubmitFeedbackRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: SubmitFeedbackRequestInput }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/api/public/health': {
      $get:
        | { input: {}; output: HealthResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: any; outputFormat: 'json'; status: 400 }
        | { input: {}; output: any; outputFormat: 'json'; status: 401 }
        | { input: {}; output: any; outputFormat: 'json'; status: 403 }
        | { input: {}; output: any; outputFormat: 'json'; status: 404 }
        | { input: {}; output: any; outputFormat: 'json'; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/api/public/llm-connections': {
      $get:
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: PaginatedLlmConnections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $put:
        | {
            input: { json: UpsertLlmConnectionRequestInput }
            output: LlmConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpsertLlmConnectionRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpsertLlmConnectionRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpsertLlmConnectionRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpsertLlmConnectionRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UpsertLlmConnectionRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/llm-connections/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: DeleteLlmConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/organizations/llm-connections': {
      $get:
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: PaginatedLlmConnections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $put:
        | {
            input: { json: UpsertLlmConnectionRequestInput }
            output: LlmConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpsertLlmConnectionRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpsertLlmConnectionRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpsertLlmConnectionRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpsertLlmConnectionRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UpsertLlmConnectionRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/organizations/llm-connections/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: DeleteLlmConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/media/:mediaId': {
      $get:
        | {
            input: { param: { mediaId: string } }
            output: GetMediaResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { mediaId: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { mediaId: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { mediaId: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { mediaId: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { mediaId: string } }; output: any; outputFormat: 'json'; status: 405 }
      $patch:
        | {
            input: { param: { mediaId: string } } & { json: PatchMediaBodyInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { mediaId: string } } & { json: PatchMediaBodyInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { mediaId: string } } & { json: PatchMediaBodyInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { mediaId: string } } & { json: PatchMediaBodyInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { mediaId: string } } & { json: PatchMediaBodyInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mediaId: string } } & { json: PatchMediaBodyInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/media': {
      $post:
        | {
            input: { json: GetMediaUploadUrlRequestInput }
            output: GetMediaUploadUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetMediaUploadUrlRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetMediaUploadUrlRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GetMediaUploadUrlRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GetMediaUploadUrlRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GetMediaUploadUrlRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/metrics': {
      $get:
        | {
            input: { query: { query: string } }
            output: MetricsV2Response
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { query: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { query: { query: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { query: { query: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { query: { query: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { query: { query: string } }; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/models': {
      $post:
        | {
            input: { json: CreateModelRequestInput }
            output: Model
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateModelRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateModelRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateModelRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateModelRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateModelRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $get:
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: PaginatedModels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/models/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: CreateModelRequestInput }
            output: Model
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CreateModelRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CreateModelRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CreateModelRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CreateModelRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CreateModelRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $get:
        | { input: { param: { id: string } }; output: Model; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 405 }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/v2/observations': {
      $get:
        | {
            input: {
              query: {
                fields?: string | null
                expandMetadata?: string | null
                limit?: unknown
                cursor?: string | null
                parseIoAsJson?: unknown
                name?: string | null
                userId?: string | null
                sessionId?: string | null
                type?: string | null
                traceId?: string | null
                level?: unknown
                parentObservationId?: string | null
                isRootObservation?: unknown
                environment?: unknown
                fromStartTime?: unknown
                toStartTime?: unknown
                version?: string | null
                filter?: string | null
              }
            }
            output: ObservationsV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | null
                expandMetadata?: string | null
                limit?: unknown
                cursor?: string | null
                parseIoAsJson?: unknown
                name?: string | null
                userId?: string | null
                sessionId?: string | null
                type?: string | null
                traceId?: string | null
                level?: unknown
                parentObservationId?: string | null
                isRootObservation?: unknown
                environment?: unknown
                fromStartTime?: unknown
                toStartTime?: unknown
                version?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | null
                expandMetadata?: string | null
                limit?: unknown
                cursor?: string | null
                parseIoAsJson?: unknown
                name?: string | null
                userId?: string | null
                sessionId?: string | null
                type?: string | null
                traceId?: string | null
                level?: unknown
                parentObservationId?: string | null
                isRootObservation?: unknown
                environment?: unknown
                fromStartTime?: unknown
                toStartTime?: unknown
                version?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | null
                expandMetadata?: string | null
                limit?: unknown
                cursor?: string | null
                parseIoAsJson?: unknown
                name?: string | null
                userId?: string | null
                sessionId?: string | null
                type?: string | null
                traceId?: string | null
                level?: unknown
                parentObservationId?: string | null
                isRootObservation?: unknown
                environment?: unknown
                fromStartTime?: unknown
                toStartTime?: unknown
                version?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fields?: string | null
                expandMetadata?: string | null
                limit?: unknown
                cursor?: string | null
                parseIoAsJson?: unknown
                name?: string | null
                userId?: string | null
                sessionId?: string | null
                type?: string | null
                traceId?: string | null
                level?: unknown
                parentObservationId?: string | null
                isRootObservation?: unknown
                environment?: unknown
                fromStartTime?: unknown
                toStartTime?: unknown
                version?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | null
                expandMetadata?: string | null
                limit?: unknown
                cursor?: string | null
                parseIoAsJson?: unknown
                name?: string | null
                userId?: string | null
                sessionId?: string | null
                type?: string | null
                traceId?: string | null
                level?: unknown
                parentObservationId?: string | null
                isRootObservation?: unknown
                environment?: unknown
                fromStartTime?: unknown
                toStartTime?: unknown
                version?: string | null
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/otel/v1/traces': {
      $post:
        | {
            input: { json: { resourceSpans: OtelResourceSpanInput[] } }
            output: OtelTraceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { resourceSpans: OtelResourceSpanInput[] } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { resourceSpans: OtelResourceSpanInput[] } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { resourceSpans: OtelResourceSpanInput[] } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { resourceSpans: OtelResourceSpanInput[] } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { resourceSpans: OtelResourceSpanInput[] } }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/organizations/memberships': {
      $get:
        | { input: {}; output: MembershipsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: any; outputFormat: 'json'; status: 400 }
        | { input: {}; output: any; outputFormat: 'json'; status: 401 }
        | { input: {}; output: any; outputFormat: 'json'; status: 403 }
        | { input: {}; output: any; outputFormat: 'json'; status: 404 }
        | { input: {}; output: any; outputFormat: 'json'; status: 405 }
      $put:
        | {
            input: { json: MembershipRequestInput }
            output: MembershipResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: MembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { json: DeleteMembershipRequestInput }
            output: MembershipDeletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeleteMembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteMembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeleteMembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeleteMembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DeleteMembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/projects/:projectId/memberships': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: MembershipsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $put:
        | {
            input: { param: { projectId: string } } & { json: MembershipRequestInput }
            output: MembershipResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: MembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: MembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: MembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: MembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & { json: MembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { projectId: string } } & { json: DeleteMembershipRequestInput }
            output: MembershipDeletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: DeleteMembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: DeleteMembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: DeleteMembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: DeleteMembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & { json: DeleteMembershipRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/organizations/projects': {
      $get:
        | { input: {}; output: OrganizationProjectsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: any; outputFormat: 'json'; status: 400 }
        | { input: {}; output: any; outputFormat: 'json'; status: 401 }
        | { input: {}; output: any; outputFormat: 'json'; status: 403 }
        | { input: {}; output: any; outputFormat: 'json'; status: 404 }
        | { input: {}; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/organizations/apiKeys': {
      $get:
        | { input: {}; output: OrganizationApiKeysResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: any; outputFormat: 'json'; status: 400 }
        | { input: {}; output: any; outputFormat: 'json'; status: 401 }
        | { input: {}; output: any; outputFormat: 'json'; status: 403 }
        | { input: {}; output: any; outputFormat: 'json'; status: 404 }
        | { input: {}; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/projects': {
      $get:
        | { input: {}; output: Projects; outputFormat: 'json'; status: 200 }
        | { input: {}; output: any; outputFormat: 'json'; status: 400 }
        | { input: {}; output: any; outputFormat: 'json'; status: 401 }
        | { input: {}; output: any; outputFormat: 'json'; status: 403 }
        | { input: {}; output: any; outputFormat: 'json'; status: 404 }
        | { input: {}; output: any; outputFormat: 'json'; status: 405 }
      $post:
        | {
            input: {
              json: {
                name: string
                metadata?: { [key: string]: unknown } | null
                retention: number
              }
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                metadata?: { [key: string]: unknown } | null
                retention: number
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                metadata?: { [key: string]: unknown } | null
                retention: number
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                metadata?: { [key: string]: unknown } | null
                retention: number
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                metadata?: { [key: string]: unknown } | null
                retention: number
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                name: string
                metadata?: { [key: string]: unknown } | null
                retention: number
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/projects/:projectId': {
      $put:
        | {
            input: { param: { projectId: string } } & {
              json: {
                name: string
                metadata?: { [key: string]: unknown } | null
                retention?: number | null
              }
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name: string
                metadata?: { [key: string]: unknown } | null
                retention?: number | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name: string
                metadata?: { [key: string]: unknown } | null
                retention?: number | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name: string
                metadata?: { [key: string]: unknown } | null
                retention?: number | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name: string
                metadata?: { [key: string]: unknown } | null
                retention?: number | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name: string
                metadata?: { [key: string]: unknown } | null
                retention?: number | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { projectId: string } }
            output: ProjectDeletionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/projects/:projectId/apiKeys': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: ApiKeyList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { param: { projectId: string } } & {
              json: {
                name?: string | null
                note?: string | null
                expiresAt?: string | null
                publicKey?: string | null
                secretKey?: string | null
              }
            }
            output: ApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name?: string | null
                note?: string | null
                expiresAt?: string | null
                publicKey?: string | null
                secretKey?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name?: string | null
                note?: string | null
                expiresAt?: string | null
                publicKey?: string | null
                secretKey?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name?: string | null
                note?: string | null
                expiresAt?: string | null
                publicKey?: string | null
                secretKey?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name?: string | null
                note?: string | null
                expiresAt?: string | null
                publicKey?: string | null
                secretKey?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name?: string | null
                note?: string | null
                expiresAt?: string | null
                publicKey?: string | null
                secretKey?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/projects/:projectId/apiKeys/:apiKeyId': {
      $delete:
        | {
            input: { param: { projectId: string; apiKeyId: string } }
            output: ApiKeyDeletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; apiKeyId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; apiKeyId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; apiKeyId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; apiKeyId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string; apiKeyId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/prompts/:name/versions/:version': {
      $patch:
        | {
            input: { param: { name: string; version: unknown } } & {
              json: { newLabels?: string[] | null; removeLabels?: string[] | null }
            }
            output: Prompt
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; version: unknown } } & {
              json: { newLabels?: string[] | null; removeLabels?: string[] | null }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string; version: unknown } } & {
              json: { newLabels?: string[] | null; removeLabels?: string[] | null }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string; version: unknown } } & {
              json: { newLabels?: string[] | null; removeLabels?: string[] | null }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string; version: unknown } } & {
              json: { newLabels?: string[] | null; removeLabels?: string[] | null }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; version: unknown } } & {
              json: { newLabels?: string[] | null; removeLabels?: string[] | null }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/prompts/:promptName': {
      $get:
        | {
            input: { param: { promptName: string } } & {
              query: { version?: unknown; label?: string | null; resolve?: unknown }
            }
            output: Prompt
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { promptName: string } } & {
              query: { version?: unknown; label?: string | null; resolve?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { promptName: string } } & {
              query: { version?: unknown; label?: string | null; resolve?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { promptName: string } } & {
              query: { version?: unknown; label?: string | null; resolve?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { promptName: string } } & {
              query: { version?: unknown; label?: string | null; resolve?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { promptName: string } } & {
              query: { version?: unknown; label?: string | null; resolve?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { promptName: string } } & {
              query: { label?: string | null; version?: unknown }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { promptName: string } } & {
              query: { label?: string | null; version?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { promptName: string } } & {
              query: { label?: string | null; version?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { promptName: string } } & {
              query: { label?: string | null; version?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { promptName: string } } & {
              query: { label?: string | null; version?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { promptName: string } } & {
              query: { label?: string | null; version?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/prompts': {
      $get:
        | {
            input: {
              query: {
                name?: string | null
                label?: string | null
                tag?: string | null
                page?: unknown
                limit?: unknown
                fromUpdatedAt?: unknown
                toUpdatedAt?: unknown
                filter?: string | null
              }
            }
            output: PromptMetaListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | null
                label?: string | null
                tag?: string | null
                page?: unknown
                limit?: unknown
                fromUpdatedAt?: unknown
                toUpdatedAt?: unknown
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | null
                label?: string | null
                tag?: string | null
                page?: unknown
                limit?: unknown
                fromUpdatedAt?: unknown
                toUpdatedAt?: unknown
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                name?: string | null
                label?: string | null
                tag?: string | null
                page?: unknown
                limit?: unknown
                fromUpdatedAt?: unknown
                toUpdatedAt?: unknown
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                name?: string | null
                label?: string | null
                tag?: string | null
                page?: unknown
                limit?: unknown
                fromUpdatedAt?: unknown
                toUpdatedAt?: unknown
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: string | null
                label?: string | null
                tag?: string | null
                page?: unknown
                limit?: unknown
                fromUpdatedAt?: unknown
                toUpdatedAt?: unknown
                filter?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { json: CreatePromptRequestInput }
            output: Prompt
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePromptRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePromptRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreatePromptRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePromptRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreatePromptRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/scim/ServiceProviderConfig': {
      $get:
        | { input: {}; output: ServiceProviderConfig; outputFormat: 'json'; status: 200 }
        | { input: {}; output: any; outputFormat: 'json'; status: 400 }
        | { input: {}; output: any; outputFormat: 'json'; status: 401 }
        | { input: {}; output: any; outputFormat: 'json'; status: 403 }
        | { input: {}; output: any; outputFormat: 'json'; status: 404 }
        | { input: {}; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/scim/ResourceTypes': {
      $get:
        | { input: {}; output: ResourceTypesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: any; outputFormat: 'json'; status: 400 }
        | { input: {}; output: any; outputFormat: 'json'; status: 401 }
        | { input: {}; output: any; outputFormat: 'json'; status: 403 }
        | { input: {}; output: any; outputFormat: 'json'; status: 404 }
        | { input: {}; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/scim/Schemas': {
      $get:
        | { input: {}; output: SchemasResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: any; outputFormat: 'json'; status: 400 }
        | { input: {}; output: any; outputFormat: 'json'; status: 401 }
        | { input: {}; output: any; outputFormat: 'json'; status: 403 }
        | { input: {}; output: any; outputFormat: 'json'; status: 404 }
        | { input: {}; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/scim/Users': {
      $get:
        | {
            input: { query: { filter?: string | null; startIndex?: unknown; count?: unknown } }
            output: ScimUsersListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: string | null; startIndex?: unknown; count?: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { filter?: string | null; startIndex?: unknown; count?: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { filter?: string | null; startIndex?: unknown; count?: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { filter?: string | null; startIndex?: unknown; count?: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { filter?: string | null; startIndex?: unknown; count?: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: {
              json: {
                userName: string
                name: ScimNameInput
                emails?: ScimEmailInput[] | null
                active?: boolean | null
                password?: string | null
              }
            }
            output: ScimUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                userName: string
                name: ScimNameInput
                emails?: ScimEmailInput[] | null
                active?: boolean | null
                password?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                userName: string
                name: ScimNameInput
                emails?: ScimEmailInput[] | null
                active?: boolean | null
                password?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                userName: string
                name: ScimNameInput
                emails?: ScimEmailInput[] | null
                active?: boolean | null
                password?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                userName: string
                name: ScimNameInput
                emails?: ScimEmailInput[] | null
                active?: boolean | null
                password?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                userName: string
                name: ScimNameInput
                emails?: ScimEmailInput[] | null
                active?: boolean | null
                password?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/scim/Users/:userId': {
      $get:
        | {
            input: { param: { userId: string } }
            output: ScimUser
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { userId: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { userId: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { userId: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { userId: string } }; output: any; outputFormat: 'json'; status: 405 }
      $delete:
        | {
            input: { param: { userId: string } }
            output: EmptyResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { userId: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { userId: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { userId: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { userId: string } }; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/score-configs': {
      $post:
        | {
            input: { json: CreateScoreConfigRequestInput }
            output: ScoreConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateScoreConfigRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateScoreConfigRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateScoreConfigRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateScoreConfigRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateScoreConfigRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $get:
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: ScoreConfigs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/score-configs/:configId': {
      $get:
        | {
            input: { param: { configId: string } }
            output: ScoreConfig
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { configId: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { configId: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { configId: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { configId: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { configId: string } }; output: any; outputFormat: 'json'; status: 405 }
      $patch:
        | {
            input: { param: { configId: string } } & { json: UpdateScoreConfigRequestInput }
            output: ScoreConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configId: string } } & { json: UpdateScoreConfigRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { configId: string } } & { json: UpdateScoreConfigRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { configId: string } } & { json: UpdateScoreConfigRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { configId: string } } & { json: UpdateScoreConfigRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { configId: string } } & { json: UpdateScoreConfigRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/scores': {
      $post:
        | {
            input: { json: CreateScoresRequestInput }
            output: CreateScoresResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateScoresRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateScoresRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateScoresRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateScoresRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateScoresRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/scores/:scoreId': {
      $delete:
        | { input: { param: { scoreId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { scoreId: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { scoreId: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { scoreId: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { scoreId: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { scoreId: string } }; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/v3/scores': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                cursor?: string | null
                fields?: string | null
                id?: string | null
                name?: string | null
                source?: string | null
                dataType?: string | null
                environment?: string | null
                configId?: string | null
                queueId?: string | null
                authorUserId?: string | null
                value?: string | null
                valueMin?: unknown
                valueMax?: unknown
                traceId?: string | null
                sessionId?: string | null
                observationId?: string | null
                experimentId?: string | null
                fromTimestamp?: unknown
                toTimestamp?: unknown
              }
            }
            output: GetScoresV3Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                cursor?: string | null
                fields?: string | null
                id?: string | null
                name?: string | null
                source?: string | null
                dataType?: string | null
                environment?: string | null
                configId?: string | null
                queueId?: string | null
                authorUserId?: string | null
                value?: string | null
                valueMin?: unknown
                valueMax?: unknown
                traceId?: string | null
                sessionId?: string | null
                observationId?: string | null
                experimentId?: string | null
                fromTimestamp?: unknown
                toTimestamp?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                cursor?: string | null
                fields?: string | null
                id?: string | null
                name?: string | null
                source?: string | null
                dataType?: string | null
                environment?: string | null
                configId?: string | null
                queueId?: string | null
                authorUserId?: string | null
                value?: string | null
                valueMin?: unknown
                valueMax?: unknown
                traceId?: string | null
                sessionId?: string | null
                observationId?: string | null
                experimentId?: string | null
                fromTimestamp?: unknown
                toTimestamp?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                cursor?: string | null
                fields?: string | null
                id?: string | null
                name?: string | null
                source?: string | null
                dataType?: string | null
                environment?: string | null
                configId?: string | null
                queueId?: string | null
                authorUserId?: string | null
                value?: string | null
                valueMin?: unknown
                valueMax?: unknown
                traceId?: string | null
                sessionId?: string | null
                observationId?: string | null
                experimentId?: string | null
                fromTimestamp?: unknown
                toTimestamp?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                cursor?: string | null
                fields?: string | null
                id?: string | null
                name?: string | null
                source?: string | null
                dataType?: string | null
                environment?: string | null
                configId?: string | null
                queueId?: string | null
                authorUserId?: string | null
                value?: string | null
                valueMin?: unknown
                valueMax?: unknown
                traceId?: string | null
                sessionId?: string | null
                observationId?: string | null
                experimentId?: string | null
                fromTimestamp?: unknown
                toTimestamp?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                cursor?: string | null
                fields?: string | null
                id?: string | null
                name?: string | null
                source?: string | null
                dataType?: string | null
                environment?: string | null
                configId?: string | null
                queueId?: string | null
                authorUserId?: string | null
                value?: string | null
                valueMin?: unknown
                valueMax?: unknown
                traceId?: string | null
                sessionId?: string | null
                observationId?: string | null
                experimentId?: string | null
                fromTimestamp?: unknown
                toTimestamp?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/skills': {
      $get:
        | {
            input: {
              query: {
                name?: string | null
                search?: string | null
                tag?: string | null
                page?: unknown
                limit?: unknown
                fromUpdatedAt?: unknown
                toUpdatedAt?: unknown
              }
            }
            output: SkillMetaListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | null
                search?: string | null
                tag?: string | null
                page?: unknown
                limit?: unknown
                fromUpdatedAt?: unknown
                toUpdatedAt?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | null
                search?: string | null
                tag?: string | null
                page?: unknown
                limit?: unknown
                fromUpdatedAt?: unknown
                toUpdatedAt?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                name?: string | null
                search?: string | null
                tag?: string | null
                page?: unknown
                limit?: unknown
                fromUpdatedAt?: unknown
                toUpdatedAt?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                name?: string | null
                search?: string | null
                tag?: string | null
                page?: unknown
                limit?: unknown
                fromUpdatedAt?: unknown
                toUpdatedAt?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: string | null
                search?: string | null
                tag?: string | null
                page?: unknown
                limit?: unknown
                fromUpdatedAt?: unknown
                toUpdatedAt?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { json: CreateSkillVersionRequestInput }
            output: SkillVersion
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateSkillVersionRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSkillVersionRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateSkillVersionRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateSkillVersionRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateSkillVersionRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/skills/:skillName': {
      $get:
        | {
            input: { param: { skillName: string } } & {
              query: { version?: unknown; label?: string | null; includeContent?: unknown }
            }
            output: SkillVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skillName: string } } & {
              query: { version?: unknown; label?: string | null; includeContent?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skillName: string } } & {
              query: { version?: unknown; label?: string | null; includeContent?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { skillName: string } } & {
              query: { version?: unknown; label?: string | null; includeContent?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { skillName: string } } & {
              query: { version?: unknown; label?: string | null; includeContent?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skillName: string } } & {
              query: { version?: unknown; label?: string | null; includeContent?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $patch:
        | {
            input: { param: { skillName: string } } & { json: UpdateSkillRequestInput }
            output: SkillVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skillName: string } } & { json: UpdateSkillRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skillName: string } } & { json: UpdateSkillRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { skillName: string } } & { json: UpdateSkillRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { skillName: string } } & { json: UpdateSkillRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skillName: string } } & { json: UpdateSkillRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/skills/files/content': {
      $get:
        | {
            input: { query: { sha256Hashes: string } }
            output: SkillFileContentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sha256Hashes: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { sha256Hashes: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { sha256Hashes: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { sha256Hashes: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { sha256Hashes: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/skills/:skillName/versions/:skillVersion': {
      $patch:
        | {
            input: { param: { skillName: string; skillVersion: unknown } } & {
              json: UpdateSkillLabelsRequestInput
            }
            output: SkillVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skillName: string; skillVersion: unknown } } & {
              json: UpdateSkillLabelsRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skillName: string; skillVersion: unknown } } & {
              json: UpdateSkillLabelsRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { skillName: string; skillVersion: unknown } } & {
              json: UpdateSkillLabelsRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { skillName: string; skillVersion: unknown } } & {
              json: UpdateSkillLabelsRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skillName: string; skillVersion: unknown } } & {
              json: UpdateSkillLabelsRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { skillName: string; skillVersion: unknown } }
            output: DeleteSkillVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skillName: string; skillVersion: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skillName: string; skillVersion: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { skillName: string; skillVersion: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { skillName: string; skillVersion: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skillName: string; skillVersion: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/traces/:traceId': {
      $delete:
        | {
            input: { param: { traceId: string } }
            output: DeleteTraceResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { traceId: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { traceId: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { traceId: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { traceId: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { traceId: string } }; output: any; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/traces': {
      $delete:
        | {
            input: { json: { traceIds: string[] } }
            output: DeleteTraceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { traceIds: string[] } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { traceIds: string[] } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { traceIds: string[] } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { traceIds: string[] } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { traceIds: string[] } }
            output: any
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/unstable/organizations/billable-units': {
      $get:
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string; granularity?: unknown } }
            output: UnstableBillableUnitsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string; granularity?: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string; granularity?: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string; granularity?: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string; granularity?: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string; granularity?: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string; granularity?: unknown } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string; granularity?: unknown } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/dashboard-widgets': {
      $get:
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: UnstableDashboardWidgetList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: UnstableCreateDashboardWidgetRequestInput }
            output: UnstableDashboardWidget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequestInput }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequestInput }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/dashboard-widgets/:widgetId': {
      $get:
        | {
            input: { param: { widgetId: string } }
            output: UnstableDashboardWidget
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { widgetId: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { widgetId: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { widgetId: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { widgetId: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { widgetId: string } }; output: any; outputFormat: 'json'; status: 405 }
        | {
            input: { param: { widgetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { widgetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { widgetId: string } } & {
              json: UnstableUpdateDashboardWidgetRequestInput
            }
            output: UnstableDashboardWidget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { widgetId: string } } & {
              json: UnstableUpdateDashboardWidgetRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { widgetId: string } } & {
              json: UnstableUpdateDashboardWidgetRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { widgetId: string } } & {
              json: UnstableUpdateDashboardWidgetRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { widgetId: string } } & {
              json: UnstableUpdateDashboardWidgetRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { widgetId: string } } & {
              json: UnstableUpdateDashboardWidgetRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { widgetId: string } } & {
              json: UnstableUpdateDashboardWidgetRequestInput
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { widgetId: string } } & {
              json: UnstableUpdateDashboardWidgetRequestInput
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { widgetId: string } }
            output: UnstableDeleteDashboardWidgetResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { widgetId: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { widgetId: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { widgetId: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { widgetId: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { widgetId: string } }; output: any; outputFormat: 'json'; status: 405 }
        | {
            input: { param: { widgetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { widgetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { widgetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/dashboards': {
      $get:
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: UnstableDashboardList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { page?: unknown; limit?: unknown } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: UnstableCreateDashboardRequestInput }
            output: UnstableDashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UnstableCreateDashboardRequestInput }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UnstableCreateDashboardRequestInput }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UnstableCreateDashboardRequestInput }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UnstableCreateDashboardRequestInput }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UnstableCreateDashboardRequestInput }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: UnstableCreateDashboardRequestInput }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: UnstableCreateDashboardRequestInput }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/dashboards/:dashboardId': {
      $get:
        | {
            input: { param: { dashboardId: string } }
            output: UnstableDashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { dashboardId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableUpdateDashboardRequestInput
            }
            output: UnstableDashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableUpdateDashboardRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableUpdateDashboardRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableUpdateDashboardRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableUpdateDashboardRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableUpdateDashboardRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableUpdateDashboardRequestInput
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableUpdateDashboardRequestInput
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { dashboardId: string } }
            output: UnstableDeleteDashboardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { dashboardId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/dashboards/:dashboardId/placements': {
      $post:
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequestInput
            }
            output: UnstableDashboardPlacement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequestInput
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequestInput
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequestInput
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/dashboards/:dashboardId/placements/:placementId': {
      $patch:
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequestInput
            }
            output: UnstableDashboardPlacement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequestInput
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequestInput
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequestInput
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: UnstableDeleteDashboardPlacementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topic-facets': {
      $get:
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: UnstableTopicFacetList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topic-facets/:facetId': {
      $get:
        | {
            input: { param: { facetId: string } }
            output: UnstableTopicFacet
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { facetId: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { facetId: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { facetId: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { facetId: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { facetId: string } }; output: any; outputFormat: 'json'; status: 405 }
        | {
            input: { param: { facetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { facetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topics': {
      $get:
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: UnstableTopicList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                page?: unknown
                limit?: unknown
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topics/:topicStableId': {
      $get:
        | {
            input: { param: { topicStableId: string } } & {
              query: { fromTimestamp?: unknown; toTimestamp?: unknown }
            }
            output: UnstableTopicWithStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicStableId: string } } & {
              query: { fromTimestamp?: unknown; toTimestamp?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { topicStableId: string } } & {
              query: { fromTimestamp?: unknown; toTimestamp?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { topicStableId: string } } & {
              query: { fromTimestamp?: unknown; toTimestamp?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { topicStableId: string } } & {
              query: { fromTimestamp?: unknown; toTimestamp?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { topicStableId: string } } & {
              query: { fromTimestamp?: unknown; toTimestamp?: unknown }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { topicStableId: string } } & {
              query: { fromTimestamp?: unknown; toTimestamp?: unknown }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { topicStableId: string } } & {
              query: { fromTimestamp?: unknown; toTimestamp?: unknown }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topic-rules': {
      $get:
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: UnstableTopicRuleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { filter?: string | null; page?: unknown; limit?: unknown } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topic-rules/:ruleId': {
      $get:
        | {
            input: { param: { ruleId: string } }
            output: UnstableTopicRule
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ruleId: string } }; output: any; outputFormat: 'json'; status: 400 }
        | { input: { param: { ruleId: string } }; output: any; outputFormat: 'json'; status: 401 }
        | { input: { param: { ruleId: string } }; output: any; outputFormat: 'json'; status: 403 }
        | { input: { param: { ruleId: string } }; output: any; outputFormat: 'json'; status: 404 }
        | { input: { param: { ruleId: string } }; output: any; outputFormat: 'json'; status: 405 }
        | {
            input: { param: { ruleId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ruleId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topic-summaries': {
      $get:
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                truncateSummaries?: unknown
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: UnstableTopicSummaryList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                truncateSummaries?: unknown
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                truncateSummaries?: unknown
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                truncateSummaries?: unknown
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                truncateSummaries?: unknown
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                truncateSummaries?: unknown
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                truncateSummaries?: unknown
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                truncateSummaries?: unknown
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topic-assignments': {
      $get:
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: UnstableTopicAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: any
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                fromTimestamp?: unknown
                toTimestamp?: unknown
                filter?: string | null
                orderBy?: unknown
                limit?: unknown
                cursor?: string | null
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
